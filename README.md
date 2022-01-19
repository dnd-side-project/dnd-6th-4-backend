# dnd-6th-4-backend

## 1. 할일 정리

- 세부 기술 스택 선정
- 아키텍처 구성
- 프로젝트 세팅

[백엔드]

## 2. 세부 기술 스택 선정 : 개발환경 부터 선정한 프레임워크 등등.. 세부사항

[백엔드]

- IDE : VS Code
- 런타임 환경 : Node JS
- 버전관리 : nvm
- 패키지 관리 : npm  // 이상 구체적인 버전 확인 필요
- 형상관리 : Git / Github
- 개발환경 세팅 : Docker (DockerFile 활용)

[프론트]

- IDE : Android Studio Arctic Fox | 2020.3.1 Patch4
- Gradle 7.2.0
- Kotlin 1.6.0
- Room Database
- Koin
- Coroutine
- REST API - Retrofit2
- LiveData + DataBinding

...

## 3. 아키텍처 구성

[백엔드]

WS (WAS) : Nest JS

DataBase : MongoDB || Oracle ?? ...

[프론트]

디자인 패턴 : MVVM

**패키지 구조** : Data, Presentation, DI, Domain, Util

**Data**

└ repository

└ local, remote

└ network

└ retrofit

└ model

**Presentation**

└ (class name)

└ view

└ viewmodel

**Util**

**DI**

└ koin modules

## 4. 프로젝트 세팅

[백엔드]

- TODO - 1 : 런타임 환경 및 노드 매니저 버전 결정하기
- TODO - 2 : 데이터 베이스 결정하기 (MongoDB추천!)
- TODO - 3 : 프로젝트 생성하기
- TODO - 4 : 깃허브 리포지 토리 생성 및 깃허브 전략 상의하기 (간단하게 하시죠 대현님!)
- TODO - 5 : 각자 예제 실습 해보기 (Nest JS와 친해지기 위해서 같이 전략을 짜보시죠!!)
- TODO - 6 : ORM 등등 미들웨어(외부 패키지 등) 은 어떠한 것을 사용할지 결정하기

[프론트]

- TODO - 1 : 깃허브 레포지토리 생성 및 Git Convention 상의 후 수립하기
- TODO - 2 : 개발패턴 및 프레임워크 버전 통합하기
- TODO - 3 : 프로젝트 레포지토리 WIKI에 각각 Git Convention, 아키텍쳐 구조 작성하기
- TODO - 4 : MVVM 관련 예제 연습하기
- TODO - 5 : 깃허브 위키에 개발 과정 회고록 / 회의록 작성하기
- TODO - 6 : 안드로이드 프로젝트 생성 및 Upstream Repository에 Commit/Push 하기
