import htmlIcon from '../asset/images/icons/html.svg';
import cssIcon from '../asset/images/icons/css.svg';
import javascriptIcon from '../asset/images/icons/javascript.svg';
import reactIcon from '../asset/images/icons/react.svg';
import typescriptIcon from '../asset/images/icons/typescript.svg';
import styledComponentsIcon from '../asset/images/icons/styled-components.svg';
import githubIcon from '../asset/images/icons/github.svg';
import viteIcon from '../asset/images/icons/vite.svg';
import dockerIcon from '../asset/images/icons/docker.svg';
import nginxIcon from '../asset/images/icons/nginx.svg';
import ubuntuIcon from '../asset/images/icons/ubuntu.svg';
import nextjsIcon from '../asset/images/icons/next-js.svg';
import konvaIcon from '../asset/images/icons/konva.svg';
import supabaseIcon from '../asset/images/icons/supabase.svg';
import tanstackIcon from '../asset/images/icons/tanstack-query.svg';
import figmaIcon from '../asset/images/icons/figma.svg';
import githubActionsIcon from '../asset/images/icons/github-actions.svg';

// 개별 스킬의 타입을 정의
export interface Skill {
  name: string;
  icon: string;
}

export interface data {
  category: string;
  name: Skill[];
}

// 모든 기술 아이콘 매핑 (프로젝트와 스킬 섹션에서 공통 사용)
export const techIconsMap: { [key: string]: string } = {
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: javascriptIcon,
  TypeScript: typescriptIcon,
  React: reactIcon,
  'Styled-Components': styledComponentsIcon,
  Github: githubIcon,
  Vite: viteIcon,
  Docker: dockerIcon,
  Nginx: nginxIcon,
  Ubuntu: ubuntuIcon,
  'Next.js': nextjsIcon,
  'React Konva': konvaIcon,
  'Supabase': supabaseIcon,
  'TanStack Query': tanstackIcon,
  Figma: figmaIcon,
  'GitHub Actions': githubActionsIcon,
};

// 프로젝트에서 Ubuntu를 VM으로 표시하기 위한 매핑
export const techDisplayNameMap: { [key: string]: string } = {
  Ubuntu: 'Ubuntu(VM)',
};

export const skillsData: data[] = [
  {
    category: 'Frontend',
    name: [
      { name: 'HTML', icon: htmlIcon },
      { name: 'CSS', icon: cssIcon },
      { name: 'JavaScript', icon: javascriptIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'React', icon: reactIcon },
      { name: 'Next.js', icon: nextjsIcon },
      { name: 'Styled-Components', icon: styledComponentsIcon },
      { name: 'Vite', icon: viteIcon },
    ],
  },
  {
    category: 'DevOps',
    name: [
      { name: 'Docker', icon: dockerIcon },
      { name: 'Nginx', icon: nginxIcon },
      { name: 'Ubuntu', icon: ubuntuIcon },
      { name: 'GitHub Actions', icon: githubActionsIcon },
    ],
  },
  {
    category: 'Tools',
    name: [
      { name: 'Figma', icon: figmaIcon },
      { name: 'Github', icon: githubIcon },
    ],
  },
];
