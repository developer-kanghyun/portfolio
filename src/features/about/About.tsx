import { useInView } from 'react-intersection-observer';
import {
  StyledAboutContainer,
  StyledAboutWrapper,
  StyledAboutPhotoBox,
  StyledAboutTextBox,
} from './styles';

import communication from '../../asset/images/communication.png';
import detail from '../../asset/images/detail.png';
import ai from '../../asset/images/ai.png';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // 애니메이션이 한 번만 실행되도록 설정
    threshold: 0.4, // 요소가 40% 보였을 때 실행
  });
  return (
    <StyledAboutContainer id="about" ref={ref} $inView={inView}>
      <h1>개인 역량</h1>
      <p>다음과 같은 역량을 보유하고 있습니다.</p>
      <div>
        <StyledAboutWrapper $inView={inView} $delay={0}>
          <StyledAboutPhotoBox>
            <img src={communication} alt="커뮤니케이션 능력" />
          </StyledAboutPhotoBox>
          <StyledAboutTextBox>
            Discode, Slack, Github 등 협업 도구를 사용한 경험으로 다양한 직군의
            동료들과 원활하게 소통하며 효율적으로 협업하는 능력을 적극적으로
            활용합니다.
          </StyledAboutTextBox>
        </StyledAboutWrapper>

        <StyledAboutWrapper $inView={inView} $delay={0.1}>
          <StyledAboutPhotoBox>
            <img src={ai} alt="AI 도구 활용 능력" />
          </StyledAboutPhotoBox>
          <StyledAboutTextBox>
            최신 기술 트렌드에 대한 높은 이해도를 바탕으로 AI를 실무에
            적극적으로 접목합니다.
          </StyledAboutTextBox>
        </StyledAboutWrapper>

        <StyledAboutWrapper $inView={inView} $delay={0.2}>
          <StyledAboutPhotoBox>
            <img src={detail} alt="디테일에 대한 관심" />
          </StyledAboutPhotoBox>
          <StyledAboutTextBox>
            픽셀 단위의 작은 차이까지 신경 쓰는 꼼꼼함으로 디테일은 높은
            완성도를 만듭니다.
          </StyledAboutTextBox>
        </StyledAboutWrapper>
      </div>
    </StyledAboutContainer>
  );
};

export default About;
