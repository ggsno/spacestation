# Space Station | 공간 꾸미기 SNS 웹 서비스

[배포 링크](http://kdt-sw-7-team03.elicecoding.com/)

## 프로젝트 기간
2023.12.11 ~ 12.29 (3주)

## 팀원 소개  
| 이름 | 주요 역할 |
|------|----------|
|오강산(팀장)|- 프로젝트 구조 설계 및 관리<br/>- 피드(게시물) 컴포넌트 및 API 구현|
|고명준|- 피드(게시물) 생성, 수정, 삭제 구현|
|김지훈|- 소셜로그인 구현<br/>- 게시물 이미지에 마커 링크 구현|
|서슬빈|- 댓글, 대댓글 컴포넌트 및 API 구현|
|정현지|- 헤더 컴포넌트 구현<br/>- 좋아요, 북마크 컴포넌트 및 API 구현|
|홍소현|- 프로필 컴포넌트 및 API 구현<br/> - UI 디자인|

## 기획 의도 | 짧은 시간 안에 하나의 완전한 서비스 만들기
- 빠르게 MVP를 완성시키고 발전시키는 훈련을 하기 위한 프로젝트

## 주안점 | 빠르게 완성하기
- 빠른 개발을 위해 기능 단위로 할 일 배분 후 해당 기능에 관한 컴포넌트, API 등을 개인이 풀스텍으로 개발
  - 개인이 해당 기능에 대한 대부분을 책임지고 만들기 때문에 다른 작업(API 구현 등)을 기다리지 않아도 됨
  - 공용으로 쓰거나 기능이 겹치는 부분은 당사자간의 협의 후 공동 작업 진행
  - 폴더 구조를 기능 단위로 나누어 맡은 기능 구현 시 폴더 이동 동선을 최소화


## 주요 기능 및 시연 영상
|![녹화_2024_01_07_01_09_06_453](https://github.com/ggsno/spacestation/assets/46833758/d419fee3-9361-484f-80cb-0c9b6378fbd3)|
|--|
|게시글 보기 |

|![녹화_2024_01_07_01_18_13_545](https://github.com/ggsno/spacestation/assets/46833758/0eff0c93-c37c-4475-98ea-2ae03ff191ff)|
|-|
|댓글, 대댓글 달기|

|![녹화_2024_01_07_01_11_12_732](https://github.com/ggsno/spacestation/assets/46833758/877164da-6c7f-4f2f-8a18-3be137c2c80d)|
|-|
|프로필 페이지|

|![녹화_2024_01_07_01_12_20_656](https://github.com/ggsno/spacestation/assets/46833758/9f9d7938-a2d1-4c15-b882-4acf965218df)|
|-|
|검색 페이지|

|![녹화_2024_01_07_01_14_25_100](https://github.com/ggsno/spacestation/assets/46833758/b7c3f1d1-f1aa-467d-b486-fabaf59691ce)|
|-|
|업로드 페이지|

|![녹화_2024_01_07_01_22_09_796](https://github.com/ggsno/spacestation/assets/46833758/cefb0374-db45-4132-af2d-cc3a2905fbfb)|
|-|
|카테고리, 장소, 해시태그 게시물 페이지|

## 실행 방법
> Cloudinary, Kakao Map, MongoDB Atlas, Kakao OAuth를 사용하고 있습니다.<br />
> 해당 서비스들을 사용하기위한 환경 변수들을 ```client```와 ```server``` 폴더 각각에 ```.env``` 파일을 생성하고 올바른 값을 넣어야 실행 할 수 있습니다.<br/>
> 필요한 환경 변수명은 각 폴더의```.env.sample```를 참고해주세요.

실행 환경 : node v18.18.0 / MAC OS Big Sur, MAC OS Sonoma, Windows 10

```bash
# client
cd client
cp .env.sample .env # 환경변수에 맞는 값을 입력해주세요
npm install
npm run dev
```

```bash
# server
cd server
cp .env.sample .env # 환경변수에 맞는 값을 입력해주세요
npm install
npm run dev
```


## Commit convention 

| Tag | descrtion |
| ------ | ------ |
| Feat |  새로운 기능을 추가하는 경우 |
| Fix | 버그를 고친경우| 
| Docs | 문서를 수정한 경우| 
| Style | 코드 포맷 변경, 세미콜론 누락, 코드 수정이 없는경우| 
| Refactor | 코드 리펙토링| 
| Test | 테스트 코드. 리펙토링 테스트 코드를 추가했을 때| 
| Chore | 빌드 업무 수정, 패키지 매니저 수정| 
| Design | CSS 등 사용자가 UI 디자인을 변경했을 때| 
| Rename | 파일명(or 폴더명) 을 수정한 경우| 
| Remove | 코드(파일) 의 삭제가 있을 때| 

