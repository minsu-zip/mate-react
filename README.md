\_2021년 프로그래머스 웹 데브코스 1기

# MATE

MATE는 코로나 19의 여파로 원격 수업 및 재택 근무의 증가로 인해, 기존과 다르게 새로운 문화생활을 즐길 수 있는 플랫폼이 필요했습니다.

온°오프라인으로 '나'와 같은 취미를 가진 사람들과 정보를 공유하고 함께 즐길 친구를 찾고 모임을 만들 수 있는 플랫폼입니다.

다양한 방식으로 문화생활을 즐김으로서 비주류 문화를 활성화 시키고, 건전하게 스트레스를 해소할 수 있습니다.

## In the project directory, you can run:

- `yarn`
- `yarn start`

## 프로젝트 소개

#### 프로젝트 주요 관심사

- 개발자간 격차를 줄이기 위해 자유도를 주어 각자 할 수 있는 만큼의 개발과 컴포넌트 관리
- 짧은 기간에 효율적인 탑 다운 방식으로 개발

#### 코드 컨벤션

- Recommended ESLint에 기반한 스타일을 준수
- Prettier를 적용하여 코드 컨벤션을 유지
- 유연성을 위해 linting은 일괄적이지 않으며 개발자가 자율적으로 하도록 함

#### UI 개발

- UI 프레임워크를 이용한 심플하고 좋은 UI 제작
- Ant Design 프레임워크 사용

### 브랜치 관리 전략

- main - devlop - dev/개인별 - hotfix
- dev/개인별 브랜치에서 각자가 맡은 기능 개발 후 devlop에 merge
- 배포는 main 브랜치에서 진행
- 배포 후 긴급하게 수정사항이 필요할 시 hotfix 브랜치에서 작업후 main에 merge

### 사용 기술 및 환경

React, Emotion, AntDesign, StoryBook, Axios, Route

### 프로젝트 구성도

![](https://i.imgur.com/5b8KwvY.png)

### 유저 시퀀스 다이어그램

![](https://i.imgur.com/ePIQOA6.png)

### 페이지 UI

회원가입 페이지![](https://i.imgur.com/CUXUNHh.png)

로그인 페이지![](https://i.imgur.com/eMNzVuD.png)

마이 페이지![](https://i.imgur.com/8CDjoPH.png)

포스트 및 댓글 페이지![](https://i.imgur.com/rrARgu5.png)

내가 쓴 게시글 페이지![](https://i.imgur.com/ElKtLze.png)

게시글 작성 페이지![](https://i.imgur.com/yb0vUs6.png)

관지라 페이지 ![](https://i.imgur.com/xyrgfDA.png)

### 배포

![img](https://download.logo.wine/logo/Netlify/Netlify-Logo.wine.png)
netlify를 이용한 자동 배포
