import ttabookDetail1 from '../../asset/images/ttabookDetail1.png';
import ttabookDetail2 from '../../asset/images/ttabookDetail2.png';
import ttabookDetail3 from '../../asset/images/ttabookDetail3.png';
import ttabookDetail4 from '../../asset/images/ttabookDetail4.png';
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

const TtaBookDetails: React.FC = () => {
  return (
    <StyledDetailsContainer>
      <StyledDetailsTitle>상세 설명</StyledDetailsTitle>

      <StyledFeatureSection>
        <StyledFeatureHeader>
          <h3>시각적 공간 관리 - 직관적인 2D 캔버스로 공간을 관리합니다.</h3>
        </StyledFeatureHeader>
        <StyledFeatureContent>
          <StyledFeatureImage src={ttabookDetail1} alt="2D 캔버스 기반 공간 관리" />
          <StyledFeatureText>
            <StyledFeatureList>
              <StyledFeatureListItem>
                <strong>기능 :</strong> React Konva를 활용한 2D 캔버스 기반
                인터페이스로 실제 공간 레이아웃을 시각화하여, 사용자가 공간을
                선택하고 예약할 수 있습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>선택 이유 :</strong> 기존의 텍스트 기반의 선택 방식은
                사용자가 공간의 위치와 크기를 직관적으로 파악하기 어려웠습니다.
                시각적 표현을 통해 사용자 경험을 개선하고 예약 오류를 방지하는
                것이 목표였습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>구현 포인트 :</strong> React 컴포넌트로 개발 생산성을
                높였고, 드래그 앤 드롭으로 직관적인 방 배치가 가능하도록
                구현했습니다.
              </StyledFeatureListItem>
            </StyledFeatureList>
          </StyledFeatureText>
        </StyledFeatureContent>
      </StyledFeatureSection>

      <StyledFeatureSection>
        <StyledFeatureHeader>
          <h3>
            실시간 예약 상태 동기화 - 여러 사용자가 동시에 사용이 가능합니다.
          </h3>
        </StyledFeatureHeader>
        <StyledFeatureContent>
          <StyledFeatureImage src={ttabookDetail2} alt="실시간 예약 상태 동기화" />
          <StyledFeatureText>
            <StyledFeatureList>
              <StyledFeatureListItem>
                <strong>기능 :</strong> Supabase의 실시간 구독 기능과 TanStack
                Query의 옵티미스틱 업데이트를 조합하여 예약 상태 변경 시 모든
                연결된 클라이언트에 즉시 반영됩니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>선택 이유 :</strong> 여러 사용자가 동시에 같은 공간을
                예약하려 할 때 발생하는 충돌과 데이터 불일치 문제를 해결하고
                싶었습니다. 실시간으로 예약 현황을 공유하여 투명성을 높이고
                사용자의 불편함을 없애는 것을 목표로 구현했습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>구현 포인트 :</strong> PostgreSQL의 트랜잭션과 Row Level
                Security(RLS)를 활용하여 데이터 무결성을 보장하고, Supabase의
                실시간 구독을 통해 평균 응답 시간을 단축했습니다. 낙관적
                업데이트로 사용자 인터랙션의 즉시성을 확보했습니다.
              </StyledFeatureListItem>
            </StyledFeatureList>
          </StyledFeatureText>
        </StyledFeatureContent>
      </StyledFeatureSection>

      <StyledFeatureSection>
        <StyledFeatureHeader>
          <h3>Clean Architecture 패턴 - 확장성과 유지보수성이 높습니다.</h3>
        </StyledFeatureHeader>
        <StyledFeatureContent>
          <StyledFeatureImage src={ttabookDetail3} alt="Clean Architecture 구조" />
          <StyledFeatureText>
            <StyledFeatureList>
              <StyledFeatureListItem>
                <strong>기능 :</strong> 비즈니스 로직과 인프라스트럭처를
                분리하여 /backend 폴더 구조를 통해 도메인별로 UseCase,
                Repository, Entity를 명확히 분리했습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>선택 이유 :</strong> 팀 개발 환경에서 코드의 응집도를
                높이고 결합도를 낮춰 테스트 가능성과 유지보수성을 높이기
                위함입니다. Supabase에서 다른 백엔드로의 마이그레이션도
                용이하도록 설계하는 것이 중요했습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>구현 포인트 :</strong> 의존성 역전 원칙을 적용하여
                인터페이스 기반 프로그래밍을 구현했고, 도메인별 UseCase,
                Repository, Entity를 명확히 분리하여 테스트 가능성과
                유지보수성을 높인 구조를 만들었습니다.
              </StyledFeatureListItem>
            </StyledFeatureList>
          </StyledFeatureText>
        </StyledFeatureContent>
      </StyledFeatureSection>

      <StyledFeatureSection>
        <StyledFeatureHeader>
          <h3>컴포넌트 기반 디자인 시스템 - 일관성 있는 UI/UX를 제공합니다.</h3>
        </StyledFeatureHeader>
        <StyledFeatureContent>
          <StyledFeatureImage src={ttabookDetail4} alt="컴포넌트 기반 디자인 시스템" />
          <StyledFeatureText>
            <StyledFeatureList>
              <StyledFeatureListItem>
                <strong>기능 :</strong> Atomic Design 패턴을 적용하여 Button,
                Modal, Input 등 기본 컴포넌트부터 복잡한 TimePicker까지 재사용
                가능한 형태로 설계했습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>선택 이유 :</strong> 개발 생산성 향상과 UI 일관성 확보를
                위해 체계적인 컴포넌트 관리가 필요했습니다. 디자이너와 개발자
                간의 소통 비용을 줄이고, 새로운 기능 개발 시 기존 컴포넌트를
                활용할 수 있도록 하는 것이 중요했습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>구현 포인트 :</strong> Atomic Design 패턴을 통해 재사용
                가능한 컴포넌트들을 체계적으로 구성했고, Props interface를 통한
                엄격한 타입 체크로 컴포넌트 사용 시 발생할 수 있는 오류를 사전에
                방지했습니다.
              </StyledFeatureListItem>
            </StyledFeatureList>
          </StyledFeatureText>
        </StyledFeatureContent>
      </StyledFeatureSection>

      <StyledFeatureSection>
        <StyledFeatureHeader>
          <h3>
            TypeScript Strict Mode - 애플리케이션의 타입 안정성을 보장합니다.
          </h3>
        </StyledFeatureHeader>
        <StyledFeatureContent>
          <StyledFeatureText>
            <StyledFeatureList>
              <StyledFeatureListItem>
                <strong>기능 :</strong> 복잡한 공간-방 관계와 예약 상태 관리에서
                타입 체크를 통해 런타임 에러를 사전에 방지합니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>선택 이유 :</strong>공간과 예약 데이터를 다루면서 발생할
                수 있는 타입 관련 버그를 방지하고, API 응답 구조의 안정성을
                보장하기 위함입니다. 팀 개발 환경에서 코드 품질 향상과 개발
                생산성 증대를 목표로 했습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>구현 포인트 :</strong> 제네릭과 유니온 타입을 활용한
                타입 정의로 컴파일 타임에 오류를 찾아낼 수 있도록 하였으며 API
                응답 스키마를 TypeScript interface로 정의하여 프론트엔드-백엔드
                간 구분을 명확히 했습니다.
              </StyledFeatureListItem>
            </StyledFeatureList>
          </StyledFeatureText>
        </StyledFeatureContent>
      </StyledFeatureSection>
    </StyledDetailsContainer>
  );
};

export default TtaBookDetails;
