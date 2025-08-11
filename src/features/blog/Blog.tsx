import { useInView } from 'react-intersection-observer';
import {
  StyledBlogContainer,
  StyledBlogWrapper,
  StyledBlogContentWrapper, // 호버 효과를 위한 래퍼 import
  StyledBlogPhotoBox,
  StyledBlogTextBox,
} from './styles';
import blog1 from '../../asset/images/blog1.png';
import blog2 from '../../asset/images/blog2.png';
import blog3 from '../../asset/images/blog3.png';

const Blog = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      id: 1,
      title: 'Konva.js 드래그 앤 드롭과 객체 변형 구현하기',
      imageUrl: blog1,
      content: 'Konva.js를 활용한 동적 캔버스 인터랙션 구현: 사용자 중심의 인터페이스 설계 및 좌표 변환 기술 적용',
      url: 'https://dev-kanghyun.tistory.com/147',
    },
    {
      id: 2,
      title: '클린 아키텍처(Clean Architecture)란?',
      imageUrl: blog2,
      content: '소프트웨어 아키텍처의 본질을 탐구하며, 유연하고 확장 가능한 시스템 설계에 대한 깊은 통찰을 제공합니다.',
      url: 'https://dev-kanghyun.tistory.com/138',
    },
    {
      id: 3,
      title: 'React LocalStorage - 저장, 불러오기, 삭제',
      imageUrl: blog3,
      content: '웹 개발에서 데이터 지속성을 위한 로컬스토리지 활용 방법을 탐구하고 실용적인 예시를 제공합니다.',
      url: 'https://dev-kanghyun.tistory.com/105',
    },
  ];

  return (
    <StyledBlogContainer id="blog" ref={ref} $inView={inView}>
      <h1>블로그</h1>
      <p>개발 과정과 생각들을 기록합니다.</p>

      {/* 블로그 게시물들을 감싸는 div */}
      <div>
        {blogPosts.map((post, index) => (
          <StyledBlogWrapper
            key={post.id}
            $inView={inView}
            $delay={0.3 + index * 0.2}
            onClick={() => window.open(post.url, '_blank')}
          >
            {/* 실제 카드 디자인과 호버 효과를 담당하는 래퍼 */}
            <StyledBlogContentWrapper>
              <StyledBlogPhotoBox>
                <img src={post.imageUrl} alt={post.title} />
              </StyledBlogPhotoBox>
              <StyledBlogTextBox>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </StyledBlogTextBox>
            </StyledBlogContentWrapper>
          </StyledBlogWrapper>
        ))}
      </div>
    </StyledBlogContainer>
  );
};

export default Blog;
