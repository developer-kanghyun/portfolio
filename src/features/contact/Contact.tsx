import { StyledContactContainer, StyledContactCardContainer, StyledContactWrapper } from './styles.tsx';
import frontendCV from '../../asset/frontend-cv.pdf';

const Contact = () => (
  <StyledContactContainer>
    <StyledContactCardContainer>
    <StyledContactWrapper>
      <div>이력서</div>
      <div>
        <a
          href={frontendCV}
          download="프론트엔드-김강현.pdf"
          rel="noopener noreferrer"
        >
          이력서 다운로드
        </a>
      </div>
    </StyledContactWrapper>

    <StyledContactWrapper>
      <div>블로그</div>
      <div>
        <a
          href="https://dev-kanghyun.tistory.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          dev-kanghyun.tistory.com
        </a>
      </div>
    </StyledContactWrapper>

    <StyledContactWrapper>
      <div>이메일</div>
      <div>dev.kanghyun@gmail.com</div>
    </StyledContactWrapper>

    <StyledContactWrapper>
      <div>GitHub</div>
      <div>
        <a
          href="https://github.com/developer-kanghyun"
          rel="noopener noreferrer"
          target="_blank"
        >
          developer-kanghyun
        </a>
      </div>
    </StyledContactWrapper>
    </StyledContactCardContainer>
  </StyledContactContainer>
);

export default Contact;
