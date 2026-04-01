import {
  StyledContactContainer,
  StyledSectionNumBig,
  StyledSectionLabel,
  StyledContactHeading,
  StyledContactSubtitle,
  StyledContactLinks,
  StyledContactRow,
  StyledFooter,
} from './styles.tsx';
import frontendCV from '../../asset/frontend-cv.pdf';

const contactLinks = [
  { type: 'Email',  label: 'dev.kanghyun@gmail.com',   href: 'mailto:dev.kanghyun@gmail.com',        external: false, download: undefined },
  { type: 'GitHub', label: 'developer-kanghyun',        href: 'https://github.com/developer-kanghyun', external: true,  download: undefined },
  { type: 'Blog',   label: 'dev-kanghyun.tistory.com',  href: 'https://dev-kanghyun.tistory.com/',    external: true,  download: undefined },
  { type: 'Resume', label: '이력서 다운로드',               href: frontendCV,                              external: false, download: '프론트엔드-김강현.pdf' },
];

const Contact = () => (
  <StyledContactContainer id="contact">
    <StyledSectionNumBig>04</StyledSectionNumBig>

    <StyledSectionLabel>
      <span className="section-num">04</span>
      <span className="divider">/</span>
      <span className="section-title">CONTACT</span>
    </StyledSectionLabel>

    <StyledContactHeading>연락하기</StyledContactHeading>
    <StyledContactSubtitle>
      새로운 기회와 협업을 환영합니다.
    </StyledContactSubtitle>

    <StyledContactLinks>
      {contactLinks.map((link, i) => (
        <StyledContactRow
          key={link.type}
          href={link.href}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          download={link.download}
          style={{ animationDelay: `${i * 0.07}s` }}
        >
          <span className="link-type">{link.type}</span>
          <span className="link-label">{link.label}</span>
          <span className="link-arrow">↗</span>
        </StyledContactRow>
      ))}
    </StyledContactLinks>

    <StyledFooter>
      <span>© 2025 KIM KANGHYUN</span>
      <span>BUILT WITH REACT + TYPESCRIPT</span>
      <span>SEOUL · KR</span>
    </StyledFooter>
  </StyledContactContainer>
);

export default Contact;
