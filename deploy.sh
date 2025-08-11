#!/bin/bash

# Portpolio Docker 배포 스크립트
# 사용법: ./deploy.sh [포트번호]

set -e  # 오류 발생시 스크립트 중단

# 기본 설정
IMAGE_NAME="portpolio"
CONTAINER_NAME="portpolio-container"
DEFAULT_PORT="3001"
PORT=${1:-$DEFAULT_PORT}

echo "🚀 Portpolio Docker 배포를 시작합니다..."

# 기존 컨테이너 중지 및 제거
if [ "$(docker ps -a -q -f name=$CONTAINER_NAME)" ]; then
    echo "🛑 기존 컨테이너를 정리합니다..."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

# Docker 이미지 빌드 (캐시 무효화)
echo "🔨 Docker 이미지를 빌드합니다..."
docker build --no-cache -t $IMAGE_NAME .

# 포트 사용 확인
if netstat -tulpn 2>/dev/null | grep -q ":$PORT "; then
    echo "⚠️  포트 $PORT이 이미 사용 중입니다."
    echo "다른 포트를 사용하려면: ./deploy.sh [포트번호]"
    read -p "계속 진행하시겠습니까? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# 컨테이너 실행
echo "🏃 컨테이너를 실행합니다..."
docker run -d \
    --name $CONTAINER_NAME \
    --restart=unless-stopped \
    --log-opt max-size=10m \
    --log-opt max-file=3 \
    -p $PORT:80 \
    $IMAGE_NAME

# 상태 확인
echo "⏳ 컨테이너 상태를 확인합니다..."
sleep 3

if docker ps | grep -q $CONTAINER_NAME; then
    echo "✅ 배포가 완료되었습니다!"
    echo "🌐 브라우저에서 http://localhost:$PORT 를 열어보세요."
    echo ""
    echo "📊 유용한 명령어:"
    echo "  상태 확인: docker ps"
    echo "  로그 확인: docker logs $CONTAINER_NAME"
    echo "  컨테이너 중지: docker stop $CONTAINER_NAME"
    echo "  컨테이너 제거: docker rm $CONTAINER_NAME"
else
    echo "❌ 배포에 실패했습니다."
    echo "로그를 확인해보세요: docker logs $CONTAINER_NAME"
    exit 1
fi
