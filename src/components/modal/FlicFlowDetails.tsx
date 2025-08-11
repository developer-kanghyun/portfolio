import watchList from '../../asset/images/watchList.png';
import genreFilter from '../../asset/images/genreFilter.png';
import ottFilter from '../../asset/images/ottFilter.png';
import {
  StyledDetailsContainer,
  StyledDetailsTitle,
  StyledFeatureSection,
  StyledFeatureHeader,
  StyledFeatureContent,
  StyledFeatureImage,
  StyledFeatureText,
  StyledFeatureList,
  StyledFeatureListItem,
} from './styles';

const FlicFlowDetails: React.FC = () => {
  return (
    <StyledDetailsContainer>
      <StyledDetailsTitle>상세 설명</StyledDetailsTitle>

      <StyledFeatureSection>
        <StyledFeatureHeader>
          <h3>OTT 필터링 - 조건에 맞는 콘텐츠만 렌더링 합니다.</h3>
        </StyledFeatureHeader>
        <StyledFeatureContent>
          <StyledFeatureImage src={ottFilter} alt="OTT 필터링 기능" />
          <StyledFeatureText>
            <StyledFeatureList>
              <StyledFeatureListItem>
                <strong>기능 :</strong> 사용자가 구독 중인 OTT(넷플릭스, 왓챠
                등)를 선택하면 시청 가능한 콘텐츠만 실시간으로 필터링합니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>선택 이유 :</strong> 보고 싶은 콘텐츠를 발견하여도 내가
                구독하는 서비스에 없어 불편했던 경험을 해결하고 싶었습니다.
                사용자의 시간을 아끼고 불편한 경험을 없애는 것을 우선적으로
                구현했습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>구현 포인트 :</strong> React의 상태 관리(Context API)를
                통해 사용자의 OTT 선택이 변경될 때마다 즉시 UI가 재렌더링 되도록
                하여, 끊김 없는 필터링 경험을 구현했습니다.
              </StyledFeatureListItem>
            </StyledFeatureList>
          </StyledFeatureText>
        </StyledFeatureContent>
      </StyledFeatureSection>

      <StyledFeatureSection>
        <StyledFeatureHeader>
          <h3>끊김 없는 콘텐츠 탐색 - 새로운 발견이 쉽도록 도와줍니다.</h3>
        </StyledFeatureHeader>
        <StyledFeatureContent>
          <StyledFeatureImage src={genreFilter} alt="장르별 콘텐츠 탐색" />
          <StyledFeatureText>
            <StyledFeatureList>
              <StyledFeatureListItem>
                <strong>기능 :</strong> '지금 인기 있는 영화', '최근 개봉작',
                '장르별 추천' 등 다양한 카테고리를 제공하여 사용자가 찾지 않아도
                새로운 콘텐츠를 자연스럽게 발견하게 합니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>선택 이유 :</strong> 사용자가 의식하지 않아도 자연스럽게
                콘텐츠를 찾기 위함입니다. 여러 갈래의 콘텐츠 흐름을 만들어
                새로운 콘텐츠를 발견하는 경험을 만들기 구현했습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>구현 포인트 :</strong> 각 카테고리별 API 요청을
                Promise.allSettled로 병렬 처리하여, 하나의 API가 늦어지더라도
                다른 콘텐츠 영역이 멈추지 않고 렌더링 되도록 설계했습니다.
              </StyledFeatureListItem>
            </StyledFeatureList>
          </StyledFeatureText>
        </StyledFeatureContent>
      </StyledFeatureSection>

      <StyledFeatureSection>
        <StyledFeatureHeader>
          <h3>나만의 찜 목록 - 발견과 시청을 이어주는 공간입니다.</h3>
        </StyledFeatureHeader>
        <StyledFeatureContent>
          <StyledFeatureImage src={watchList} alt="찜 목록 기능" />
          <StyledFeatureText>
            <StyledFeatureList>
              <StyledFeatureListItem>
                <strong>기능 :</strong> 관심 있는 영화를 발견하면 즉시 저장하고,
                나만의 저장 공간을 만들어 언제든지 다시 확인할 수 있습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>선택 이유 :</strong> 사용자의 탐색 활동이 일회성으로
                끝나지 않고, 이후 나중에 쉽게 찾아서 볼 수 있으며 플랫폼에
                개인의 취향을 기록하여 남길 수 있도록 도와줍니다. 이는 재방문을
                유도하는 동기가 됩니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>구현 포인트 :</strong> 별도의 서버가 없어 로그인 등의
                기능이 요구되지 않고, 프론트엔드 단에서 사용자 경험을 완성하기
                위해 브라우저의 localStorage를 활용하여 데이터를 영구적으로
                저장하고 관리하도록 했습니다.
              </StyledFeatureListItem>
            </StyledFeatureList>
          </StyledFeatureText>
        </StyledFeatureContent>
      </StyledFeatureSection>

      <StyledFeatureSection>
        <StyledFeatureHeader>
          <h3>빠른 검색 - 검색은 빠른 시간에 이루어져야 합니다.</h3>
        </StyledFeatureHeader>
        <StyledFeatureContent>
          <StyledFeatureText>
            <StyledFeatureList>
              <StyledFeatureListItem>
                <strong>기능 :</strong> 영화 제목, 배우, 감독 등에 대한 빠른
                검색을 제공합니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>선택 이유 :</strong> 느린 검색은 사용자 경험과 만족도를
                크게 떨어트립니다. 사용자의 의도를 즉각적으로 파악하고 결과를
                보여주는 것이 중요했습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>구현 포인트 :</strong> useDebounce 커스텀 훅을 적용하여
                타이핑이 진행 중일 때는 불필요한 API 호출을 막고 입력이 멈춘
                후에만 요청을 보내도록 최적화했습니다.
              </StyledFeatureListItem>
            </StyledFeatureList>
          </StyledFeatureText>
        </StyledFeatureContent>
      </StyledFeatureSection>

      <StyledFeatureSection>
        <StyledFeatureHeader>
          <h3>터치 플로우 UX - 모바일에서는 앱처럼 느껴져야 합니다.</h3>
        </StyledFeatureHeader>
        <StyledFeatureContent>
          <StyledFeatureText>
            <StyledFeatureList>
              <StyledFeatureListItem>
                <strong>기능 :</strong> 모바일 환경에서 손가락으로 자연스럽게
                스와이프하여 콘텐츠 목록을 탐색할 수 있는 터치 인터페이스를
                제공합니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>선택 이유 :</strong> 현대 사용자의 콘텐츠 소비는 대부분
                모바일에서 일어나므로, 앱과 같은 부드러운 사용성을 웹에서
                구현하는 것이 목표였습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>구현 포인트:</strong> onTouchStart, onTouchEnd 이벤트를
                직접 제어하는 커스텀 훅을 만들어, 사용자의 터치 거리와 방향을
                계산하는 스와이프 로직을 개발했습니다.
              </StyledFeatureListItem>
            </StyledFeatureList>
          </StyledFeatureText>
        </StyledFeatureContent>
      </StyledFeatureSection>

      <StyledFeatureSection>
        <StyledFeatureHeader>
          <h3>배포 및 인프라 - VM 환경에서 실제 서버 운영 경험</h3>
        </StyledFeatureHeader>
        <StyledFeatureContent>
          <StyledFeatureText>
            <StyledFeatureList>
              <StyledFeatureListItem>
                <strong>기능 :</strong> Ubuntu VM 환경에서 Docker와 Nginx를 활용한 실제 서비스 배포 및 운영을 경험했습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>선택 이유 :</strong> 단순한 프론트엔드 개발을 넘어 실제 서비스 운영과 DevOps 경험을 쌓고 싶었습니다. 클라우드 서비스 비용을 절약하면서도 실무에 가까운 환경을 구축하고자 했습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>구현 포인트 :</strong> Docker 컨테이너로 애플리케이션을 패키징하고, Nginx를 리버스 프록시로 설정하여 HTTPS 연결과 정적 파일 서빙을 처리했습니다. Ubuntu VM에서 직접 서버를 관리하며 배포 자동화 스크립트를 작성했습니다.
              </StyledFeatureListItem>
            </StyledFeatureList>
          </StyledFeatureText>
        </StyledFeatureContent>
      </StyledFeatureSection>
    </StyledDetailsContainer>
  );
};

export default FlicFlowDetails;
