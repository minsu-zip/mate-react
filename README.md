# 소셜 네트워크 프로젝트

React 혹은 Vue.js를 이용하여 소셜 네트워크 서비스를 구현합니다. 기본적인 서버 API는 제공되며 디자인과 아키텍처는 자유롭게 작성합니다.

데이터 중 채널은 서버에서 제공하는 것만 사용할 수 있습니다. 제공되는 채널은 다음과 같습니다.

- React
- Vue
- JavaScript
- 맛집
- 질의응답
- 각 팀 채널

> 서버 API는 모든 팀이 공용으로 사용합니다. 작성한 데이터가 다른 사용자에게 노출될 수 있으니 주의해주세요!

## 기본 요구사항

**필수**

- 사용자는 회원가입과 로그인을 할 수 있습니다.
  - 가입, 로그인, 인증 검사
- 사용자는 채널에 올라온 글을 볼 수 있습니다.
  - 글쓰기, 채널 목록, 채널 내 글 목록
  - 인증된 사용자는 채널에 올라온 글을 볼 수 있습니다.
  - 인증된 사용자는 채널에 포스트를 남길 수 있습니다.
- 인증된 사용자는 포스트를 좋아요 할 수 있습니다.
- 인증된 사용자는 포스트에 댓글을 남길 수 있습니다.
- SPA 형태로 만들어주세요.
- 엉뚱한 페이지에 접속하면 404 페이지를 보여주세요.

**선택**

- 사용자는 현재 접속 중인 사용자를 볼 수 있습니다.
- 사용자는 가입자 목록을 볼 수 있습니다.
- 사용자는 가입자를 이름으로 검색을 할 수 있습니다.
- 사용자는 가입자의 정보를 볼 수 있습니다.
- 사용자는 포스트 혹은 가입자를 검색할 수 있습니다.
- 인증된 사용자는 자신의 정보를 변경할 수 있습니다.
- 인증된 사용자는 자신의 알림 목록을 확인 할 수 있습니다.
- 인증된 사용자는 다른 가입자에게 메시지를 보낼 수 있습니다.
- 인증된 사용자는 자신에게 온 메시지 목록을 확인 할 수 있습니다.
- 인증된 사용자는 특정 사용자와의 메시지 대화 내역을 확인 할 수 있습니다.

## 보너스 요구사항

- 인증된 사용자는 프로필 이미지 변경 및 포스트를 작성할 때 이미지를 첨부할 수 있습니다. 파일 업로드를 구현해보세요.
- 다크 모드를 적용해보세요.
- WebSocket을 이용하여 다른 사용자의 메시지를 실시간으로 받아보세요.
- WebSocket을 이용하여 알림을 받고 알림을 Context와 localStorage로 관리해보세요.

## API 안내

API Host는 `http://13.209.30.200` 입니다. API 사용에 문제가 있다면 문의바랍니다.

- 주의할 점으로 API에 예외처리가 안되어있는 경우가 있습니다. 이 경우 프론트엔드에서 Form Validation을 해주시면 됩니다.
- 응답이 모델로 되어있는 경우 하단 모델 안내를 확인해주세요.
- Optional<Type>으로 적혀있는 경우 값을 넣지 않아도 동작하는 필드입니다.
- Nullable<Type>으로 적혀있는 경우 null이 내려올 수 있는 필드입니다.
- []는 리스트 타입입니다.
- API URL에 중괄호로 감싸져 있는 부분은 Path Variable 입니다.

### 인증

#### 로그인

사용자가 이메일과 비밀번호로 서비스에 로그인합니다.

> POST /login

##### Request Body

```json
{
  "email": String,
  "password": String
}
```

##### Response

200 OK

```json
{
  "user": User,
  "token": String
}
```

#### 회원가입

사용자가 이메일과 비밀번호로 서비스에 가입합니다.

> POST /signup

##### Request Body

```json
{
  "email": String,
  "fullName": String,
  "password": String
}
```

##### Response

200 OK

```json
{
  "user": User,
  "token": String
}
```

#### 로그아웃

사용자가 로그아웃 합니다.

> POST /logout

#### 인증 확인

사용자가 인증이 되었는지 확인합니다.

> GET /auth-user

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Response

```
User
```

### 사용자

#### 사용자 목록

사용자 목록을 불러옵니다.

> GET /users/get-users

##### Request Params

```
offset: Optional<Number>
limit: Optional<Number>
```

##### Response

```
User[]
```

#### 현재 접속 중인 사용자 목록

현재 접속 중인 사용자 목록을 불러옵니다.

> GET /users/online-users

##### Response

```
User[]
```

#### 사용자 정보

특정 사용자 정보를 불러옵니다.

> GET /users/{userId}

##### Response

```
User
```

#### 프로필 이미지 변경

나의 프로필 이미지를 변경합니다.

> POST /users/upload-photo

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Body

FormData
`isCover`를 반드시 `false`로 넣어야 합니다.

```
isCover: false
image: Binary
```

##### Response

```
User
```

#### 커버 이미지 변경

나의 커버 이미지를 변경합니다.

> POST /users/upload-photo

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Body

FormData
`isCover`를 반드시 `true`로 넣어야 합니다.

```
isCover: true
image: Binary
```

##### Response

```
User
```

### 설정

#### 내 정보 변경

나의 정보를 변경합니다.

> PUT /settings/update-user

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Body

```json
{
  "fullName": String,
  "username": String
}
```

##### Response

```
User
```

#### 비밀번호 변경

내 계정 비밀번호를 변경합니다.

> PUT /settings/update-password

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Body

```json
{
  "password": String
}
```

### 채널

#### 채널 목록

채널 목록을 불러옵니다.

> GET /channels

##### Response

```
Channel[]
```

#### 채널 정보

특정 채널 정보를 불러옵니다.

> GET /channels/{channelName}

##### Response

```
Channel
```

### 포스트

#### 특정 채널의 포스트 목록

특정 채널의 포스트 목록을 불러옵니다.

> GET /posts/channel/{channelId}

##### Request Params

```json
offset: Optional<Number>
limit: Optional<Number>
```

##### Response

```
Post[]
```

#### 특정 사용자의 포스트 목록

특정 사용자의 포스트 목록을 불러옵니다.

> GET /posts/author/{authorId}

##### Request Params

```json
offset: Optional<Number>
limit: Optional<Number>
```

##### Response

```
Post[]
```

#### 특정 채널에 포스트 작성하기

특정 채널에 포스트를 작성합니다.

> POST /posts/create

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Body

FormData

```
title: String,
image: Binary | null,
channelId: String
```

#### 특정 포스트 상세 보기

특정 포스트의 정보를 불러옵니다.

> GET /posts/{postId}

##### Response

```
Post
```

#### 내가 작성한 포스트 수정하기

내가 작성한 포스트를 수정합니다.

> PUT /posts/update

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Body

FormData
이미지를 삭제하려면 `imageToDeletePublicId`에 `imagePublicId`를 넣어주세요.

```
postId: String
title: String
image: Binary | null
imageToDeletePublicId: Optional<String>
channelId: String
```

#### 내가 작성한 포스트 삭제하기

내가 작성한 포스트를 삭제합니다.

> DELETE /posts/delete

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Body

```json
{
  "id": String
}
```

### 좋아요

#### 특정 포스트 좋아요

특정 포스트에 좋아요합니다.

> POST /likes/create

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Body

```json
{
  "postId": String
}
```

##### Response

```
Like
```

#### 특정 포스트 좋아요 취소

특정 포스트에 좋아요한 것을 취소합니다.

> DELETE /likes/delete

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Body

```json
{
  "id": String
}
```

##### Response

```
Like
```

### 댓글

#### 특정 포스트에 댓글 달기

특정 포스트에 댓글을 작성합니다.

> POST /comments/create

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Body

```json
{
  "comment": String,
  "postId": String
}
```

##### Response

```
Comment
```

#### 특정 포스트에 작성한 내 댓글 지우기

특정 포스트에 작성한 내 댓글을 삭제합니다.

> DELETE /comments/delete

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Body

```json
{
  "id": String
}
```

##### Response

```
Comment
```

### 알림

#### 나의 알림 목록

나의 알림 목록을 불러옵니다.

> GET /notifications

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Response

```
Notification[]
```

#### 알림 확인 처리

나에게 온 알림을 읽음처리 합니다.

> GET /notifications/seen

##### Request Header

```
Authorization: bearer JWT토큰
```

#### 알림 생성

상대방에게 알림을 보냅니다.

> POST /notifications/create

원래는 서버에서 해주는게 맞는 작업이지만 API 호출로 알림을 보낼 수 있도록 작성했습니다.

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Body

`notificationTypeId`는 type에 해당하는 객체의 id를 넣어주세요.

- COMMENT일 경우엔 댓글 id
- FOLLOW일 경우엔 팔로우 id
- LIKE일 경우엔 좋아요 id
- MESSAGE일 경우엔 메시지 id
  `postId`는 type이 FOLLOW일 경우엔 null로 보내주세요.

```json
{
  "notificationType": "COMMENT" | "FOLLOW" | "LIKE" | "MESSAGE",
  "notificationTypeId": String,
  "userId": String,
  "postId": Nullable<String>
}
```

##### Response

```
Notification
```

### 팔로우

#### 특정 유저 팔로우

특정 유저를 팔로우합니다.

> POST /follow/create

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Body

```json
{
  "userId": String
}
```

##### Response

```
Follow
```

#### 특정 유저 언팔

특정 유저를 언팔합니다.

> DELETE /follow/delete

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Body

```json
{
  "id": String
}
```

##### Response

```
Follow
```

### 메시지

#### 나의 메시지함 (소통한 유저 목록)

나와 메시지함을 불러옵니다.

> GET /messages/conversations

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Response

```json
Conversation[]
```

#### 특정 사용자와 소통한 메시지 목록

특정 사용자와 소통한 메시지 목록을 불러옵니다.

> GET /messages

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Params

```
userId: String
```

##### Response

```
Message[]
```

#### 특정 사용자에게 메시지 전송

특정 사용자에게 메시지를 전송합니다.

> POST /messages/create

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Body

```json
{
  "message": String,
  "receiver": String // 사용자 id
}
```

##### Response

```
Message
```

#### 메시지 확인 처리

특정 사용자와 나눈 메시지를 읽음처리 합니다.

> PUT /messages/update-seen

##### Request Header

```
Authorization: bearer JWT토큰
```

##### Request Body

```json
{
  "sender": String // 사용자 id
}
```

## 검색

#### 사용자 검색

사용자를 검색합니다.

> GET /search/users/{query}

##### Response

```
User[]
```

#### 전체 검색 (포스트, 사용자)

포스트와 사용자를 검색합니다.

> GET /search/all/{query}

##### Response

```
(User | Post)[]
```

## WebSocket 안내

### on

클라이언트가 서버에게 데이터를 받습니다.

#### SEND_MESSAGE

실시간으로 메시지를 받습니다.

```
Message[]
```

#### CREATE_NOTIFICATION_REQUEST

실시간으로 생성된 알림을 받습니다.

```
Notification[]
```

### emit

클라이언트가 서버에게 데이터를 보냅니다.

#### CREATE_MESSAGE

```
Message
```

#### CREATE_NOTIFICATION

```
Notification
```

## 모델 안내

API에 따라 모델 필드에서 일부분이 빠진 상태로 내려올 수 있습니다. `ex) 로그인 후 내려오는 User에는 프로필 이미지와 커버 이미지 필드가 제거됩니다.`

### User

```json
{
  "coverImage": String, // 커버 이미지
  "image": String, // 프로필 이미지
  "role": String,
  "emailVerified": Boolean, // 사용되지 않음
  "banned": Boolean, // 사용되지 않음
  "isOnline": Boolean,
  "posts": Post[],
  "likes": Like[],
  "comments": String[],
  "followers": [],
  "following": [
    {
      "_id": "6169e91316cb2265df003c6d",
      "user": "6169e58216cb2265df003bf4",
      "follower": "6169e206aa57d952c6dc1edd",
      "createdAt": "2021-10-15T20:48:19.816Z",
      "updatedAt": "2021-10-15T20:48:19.816Z",
      "__v": 0
    }
  ],
  "notifications": Notification[],
  "messages": Message[],
  "_id": String,
  "fullName": String,
  "email": String,
  "createdAt": String,
  "updatedAt": String
}
```

### Channel

```json
{
  "authRequired": Boolean, // 사용되지 않음
  "posts": String[],
  "_id": String,
  "name": String,
  "description": String,
  "createdAt": String,
  "updatedAt": String
}
```

### Post

```json
{
  "likes": Like[],
  "comments": Comment[],
  "_id": String,
	"image": Optional<String>,
	"imagePublicId": Optional<String>,
  "title": String,
  "channel": Channel,
  "author": User,
  "createdAt": String,
  "updatedAt": String
}
```

### Like

```json
{
  "_id": String,
  "user": String, // 사용자 id
  "post": String, // 포스트 id
  "createdAt": String,
  "updatedAt": String
}
```

### Comment

```json
{
  "_id": String,
  "comment": String,
  "author": User,
  "post": String, // 포스트 id
  "createdAt": String,
  "updatedAt": String
}
```

### Notification

```json
{
  "seen": Boolean,
  "_id": String,
  "author": User,
  "user": User | String,
  "post": Nullable<String>, // 포스트 id
  "follow": Optional<String>, // 사용자 id
	"comment": Optional<Comment>,
	"message": Optional<String>, // 메시지 id
  "createdAt": String,
  "updatedAt": String
}
```

### Follow

```json
{
  "_id": String,
  "user": String, // 사용자 id
  "follower": String, // 사용자 id
  "createdAt": String,
  "updatedAt": String
}
```

### Conversation

```json
{
  "_id": String[],
  "message": String,
  "sender": User,
  "receiver": User,
  "seen": Boolean,
  "createdAt": String
}
```

### Message

```json
{
  "_id": String,
  "message": String,
  "sender": User,
  "receiver": User,
  "seen": Boolean,
  "createdAt": String,
  "updatedAt": String
}
```
