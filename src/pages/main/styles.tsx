import { styled } from 'styled-components';

interface FullPageProps {
  'data-fullpage'?: string;
}

export const StyledMain = styled.div`
  align-items: center;
  background-color: #f5f5f5;
  box-sizing: border-box;
  justify-items: center;
`;

export const StyledFullPageContainer = styled.div.attrs<FullPageProps>({
  'data-fullpage': 'true',
})`
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background-color: #f5f5f5;

  /* 스크롤바 숨기기 */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledSection = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  padding-top: calc(8vh - 10px); /* 8vh에서 10px 더 위로 */
  box-sizing: border-box;
  background-color: #f5f5f5;
  position: relative;

  /* 각 섹션 내부 컨테이너 정렬 */
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-grow: 1;
    /* 헤더가 나타날 때를 대비한 여백 조정 */
    margin-top: 0;
    transition: margin-top 0.3s ease-in-out;
  }

  /* 첫 번째 섹션은 완전히 중앙 */
  &:first-child {
    justify-content: center;
    padding-top: 2rem;

    > div {
      margin-top: 0;
    }
  }

  /* 첫 번째 섹션이 아닌 경우 헤더 여백 고려 */
  &:not(:first-child) > div {
    margin-top: 0px;
  }
`;
