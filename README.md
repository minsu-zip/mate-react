#### :calendar: 프로젝트 기간 2021.10.15 ~ 2021.11.3


<img src="https://i.imgur.com/4FqKUyK.png" height= '100px'/>
## MATE(취미 공유 사이트)
<a href="https://vigorous-lalande-d3f76a.netlify.app/"><strong>배포용 사이트 보러가기 »</strong></a>


* MATE는 코로나 19의 여파로 원격 수업 및 재택 근무의 증가로 인해, 기존과 다르게 새로운 문화생활을 즐길 수 있는 플랫폼이 필요했습니다.
* 온°오프라인으로 '나'와 같은 취미를 가진 사람들과 정보를 공유하고 함께 즐길 친구를 찾고 소모임을 만들 수 있는 플랫폼입니다.
* 다양한 방식으로 문화생활을 즐김으로서 비주류 문화를 활성화 시키고, 건전하게 스트레스를 해소할 수 있습니다.

## 👨‍💻Ron2 팀 소개
| GitHub | 
| -------- |
| [팀장 박민수](https://github.com/minsu-zip)| 
| [팀원 김형욱](https://github.com/khw970421)|
| [팀원 이지현](https://github.com/Jihyeon228)|

각종 산출물 <a href="https://www.notion.so/01_project_-2-e62bf8244cc64387bf4e6b4b16635e59"><img alt="Notion" src ="https://img.shields.io/badge/Notion-ffffff.svg?&style=for-the-badge&logo=Notion&logoColor=black"/></a>

## 🌟 Commit message 작성 규칙 

- [Git - Commit Message Convention](https://velog.io/@djh20/Git-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90) 참고하여 작성

## 🐱 Git branch 전략
- 심플하게 사용 main, develop, dev, hotfix
- branch 관리 규칙
    - `main` -> 배포를 위한 브랜치
    - `develop` -> 각자 개발한 기능을 합치기 위한 브랜치
    - `dev/~~` -> 개발자 별 기능 개발을 위한 브랜치
    - `hotfix/~~` -> 배포 후, 긴급하게 고쳐야 할 에러사항을 수정하기 위한 브랜치

## 🦍 코딩 컨벤션
- Recommended ESLint에 기반한 스타일을 준수
- Prettier를 적용하여 코드 컨벤션을 유지
- 유연성을 위해 linting은 일괄적이지 않으며 개발자가 자율적으로 하도록 함

<br>

# 프로젝트 소개

### ❗ 개발 전략
* 짧은 기간을 고려하여 Top-Down 개발 방식 채택
* 개발자에게 자유도를 부여하여 자유롭게 컴포넌트 관리
* 필수 기능 개발을 목표로 기능 중심적 개발

### ⭐️ 주요 기능
* 인증
    * 회원가입, 로그인, 로그아웃
* 설정
    * 마이페이지 (내가 작성한 글)
    * 내 정보 변경 (프로필 이미지, 계정 정보)
* 관리자 페이지
    * 유저 목록 (유저 정보)
    * 현재 접속 중인 유저 목록
* 좋아요
    * 좋아요, 좋아요 취소
* 댓글
    * 댓글 달기, 댓글 지우기
* 채널 & 포스트
    * 채널에 따른 포스트 목록 표시
    * 포스트 CRUD 기능
* 검색
    * 유저 검색
    * 채널 검색
    * 포스트 검색

### 💻 디렉토리 구성도 및 기능
![](https://i.imgur.com/5b8KwvY.png)

### 😃 유저 시퀀스 다이어그램
<img src="https://i.imgur.com/ePIQOA6.png" height='1200px' />


### 📌 API
programmers 데브코스 교육과정에서 자체 제작 API 사용

### 📌 기술스택
React, AntDesign, Emotion, StoryBook, Netlify

### 📃 [시연 영상](https://drive.google.com/file/d/1HZ6EhsX9O8oDnyjpHK0Bu61Ug1-qq6gA/view)
