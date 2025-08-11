import portfolioDetail1 from '../../asset/images/portfolioDetail1.png';
import portfolioDetail2 from '../../asset/images/portfolioDetail2.png';
import portfolioDetail3 from '../../asset/images/portfolioDetail3.gif';
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

const PortfolioDetails: React.FC = () => {
  return (
    <StyledDetailsContainer>
      <StyledDetailsTitle>상세 설명</StyledDetailsTitle>

      <StyledFeatureSection>
        <StyledFeatureHeader>
          <h3>
            반응형 디자인 - 다양한 기기에서도 최적화된 화면을 구현했습니다.
          </h3>
        </StyledFeatureHeader>
        <StyledFeatureContent>
          <StyledFeatureImage src={portfolioDetail1} alt="반응형 디자인 구현" />
          <StyledFeatureText>
            <StyledFeatureList>
              <StyledFeatureListItem>
                <strong>기능 :</strong> 데스크톱, 태블릿, 모바일 등 모든 화면
                크기에 최적화된 레이아웃을 제공하여 각 기기의 특성에 맞는
                인터랙션을 구현했습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>선택 이유 :</strong>사용자는 다양한 디바이스로 콘텐츠에
                접근합니다. 일관된 사용자 경험을 제공하는 것이 중요했습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>구현 포인트 :</strong> CSS Grid와 Flexbox를 이용하여
                유연한 레이아웃을 구성했고, Styled-Components의 미디어 쿼리를
                통해 브레이크포인트별 스타일을 관리했습니다.
              </StyledFeatureListItem>
            </StyledFeatureList>
          </StyledFeatureText>
        </StyledFeatureContent>
      </StyledFeatureSection>

      <StyledFeatureSection>
        <StyledFeatureHeader>
          <h3>모달 기반 상세보기 - 페이지 이동 없이 정보를 제공합니다.</h3>
        </StyledFeatureHeader>
        <StyledFeatureContent>
          <StyledFeatureImage src={portfolioDetail2} alt="프로젝트 상세 모달" />
          <StyledFeatureText>
            <StyledFeatureList>
              <StyledFeatureListItem>
                <strong>기능 :</strong> 각 프로젝트를 클릭하면 상세 정보를 담은
                모달이 열리며, 기술적 구현 사항과 문제 해결 과정을 체계적으로
                보여줍니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>선택 이유 :</strong> 한 페이지에서 모든 정보를 보여주면
                제공하는 정보가 너무 많아지며 사용자가 지루함을 느낄 수
                있습니다. 관심 있는 프로젝트에 대해서만 자세한 정보를 볼 수
                있도록 선택권을 제공하며 페이지 이동을 줄여 사용자의 만족감을
                높이고 싶었습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>구현 포인트 :</strong> Portal API를 사용하여 모달을
                body에 렌더링하고, ESC 키와 백드롭 클릭으로 닫기 기능을
                구현했습니다. URL 변경 없이 상태 관리만으로 모달을 제어하여 빠른
                반응성을 확보했습니다.
              </StyledFeatureListItem>
            </StyledFeatureList>
          </StyledFeatureText>
        </StyledFeatureContent>
      </StyledFeatureSection>

      <StyledFeatureSection>
        <StyledFeatureHeader>
          <h3>동적 애니메이션 - 자연스러운 시각적 효과를 제공합니다.</h3>
        </StyledFeatureHeader>
        <StyledFeatureContent>
          <StyledFeatureImage
            src={portfolioDetail3}
            alt="Intersection Observer 애니메이션"
          />
          <StyledFeatureText>
            <StyledFeatureList>
              <StyledFeatureListItem>
                <strong>기능 :</strong> Intersection Observer API를 활용하여
                스크롤에 따른 fade-in, slide-up 애니메이션을 구현하고, 각 섹션이
                화면에 나타날 때 자연스러운 전환 효과를 제공합니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>선택 이유 :</strong> 미니멀한 포트폴리오에서 동적 경험을
                통해 사용자의 관심을 끌고, 스크롤 과정에서 지루함을 없애고
                싶었습니다. 과도하지 않은 애니메이션으로 깔끔함을 유지하는 것이
                목표였습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>구현 포인트 :</strong> react-intersection-observer
                라이브러리와 CSS transform, opacity를 조합하여 부드러운
                애니메이션을 구현했고, 성능을 위해 GPU 가속을 활용한
                애니메이션을 적용했습니다.
              </StyledFeatureListItem>
            </StyledFeatureList>
          </StyledFeatureText>
        </StyledFeatureContent>
      </StyledFeatureSection>

      <StyledFeatureSection>
        <StyledFeatureHeader>
          <h3>컴포넌트 기반 아키텍처 - 확장 가능한 구조로 설계했습니다.</h3>
        </StyledFeatureHeader>
        <StyledFeatureContent>
          <StyledFeatureText>
            <StyledFeatureList>
              <StyledFeatureListItem>
                <strong>기능 :</strong> 각 기능별로 독립적인 컴포넌트를
                구성하고, 재사용 가능한 공통 컴포넌트를 별도로 분리하여 일관성
                있는 UI를 구축했습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>선택 이유 :</strong> 향후 프로젝트가 추가되거나 디자인이
                변경될 때 유지보수하기 쉬운 구조를 유지하기 위해 적용했습니다.
                또한 각 컴포넌트가 독립적이어야 개발이 용이하다고 판단했습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>구현 포인트 :</strong> Features 폴더에 기능별
                컴포넌트를, Common 폴더에 재사용 컴포넌트를 분리했고, TypeScript
                interface로 각 컴포넌트의 props를 명확히 정의하여 타입 안정성을
                확보했습니다.
              </StyledFeatureListItem>
            </StyledFeatureList>
          </StyledFeatureText>
        </StyledFeatureContent>
      </StyledFeatureSection>

      <StyledFeatureSection>
        <StyledFeatureHeader>
          <h3>성능 최적화 - 빠른 로딩과 부드러운 사용자 경험을 제공합니다.</h3>
        </StyledFeatureHeader>
        <StyledFeatureContent>
          <StyledFeatureText>
            <StyledFeatureList>
              <StyledFeatureListItem>
                <strong>기능 :</strong> Vite의 빠른 번들링과 코드 스플리팅을
                통해 초기 로딩 시간을 최소화하고, 이미지 최적화로 전체적인
                성능을 향상시켰습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>선택 이유 :</strong> 포트폴리오는 첫인상이 매우
                중요합니다. 느린 로딩이나 버벅거리는 애니메이션은 전문성에 대한
                의심을 일으킬 수 있으므로, 최적의 성능으로 원활한 사용성을 느낄
                수 있도록 하고 싶었습니다.
              </StyledFeatureListItem>
              <StyledFeatureListItem>
                <strong>구현 포인트 :</strong> Vite의 HMR(Hot Module
                Replacement)로 개발 생산성을 높였고, 프로덕션 빌드에서는 트리
                쉐이킹과 압축을 통해 번들 크기를 최소화했습니다. CSS-in-JS의
                런타임 오버헤드를 최소화하기 위한 스타일로 관리 했습니다.
              </StyledFeatureListItem>
            </StyledFeatureList>
          </StyledFeatureText>
        </StyledFeatureContent>
      </StyledFeatureSection>
    </StyledDetailsContainer>
  );
};

export default PortfolioDetails;
