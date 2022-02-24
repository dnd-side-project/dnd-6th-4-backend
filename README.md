# dnd-6th-4-backend

## 세부 기술 스택 선정

[백엔드]

- IDE : VS Code
- 런타임 환경 : Node JS
- 패키지 관리 : npm  // 이상 구체적인 버전 확인 필요
- 형상관리 : Git / Github
- 개발환경 세팅 : Docker (DockerFile 활용)


## 아키텍처 구성

[백엔드]
디자인 패턴 : MVC
Framework : Nest JS

** src **
└ User
  └ Repository
  └ Entity
  └ Service
  └ Controller
  └ ** module.ts **
└ Subject
└ DailyClass

** test **
└ User
└ Subject
└ DailyClass

** config **
└ schema.ts ... etc
** main.ts **
** remainder **

## File Naming convention

> service-name.role.ts
> ex : user-login.entity.ts + user-login.repository.ts ...

## Git commit convention


### Head

1. 기능을 태그로 작성한다.
2. 어떤 부분을 수정했는지 표시하기 위해서 태그 뒤에 괄호로 커밋한 기능명을 작성한다.
3. 설명은 대문자, 동사원형으로 작성 시작한다. Tag : Feat, Fix, Design, Rename, Remove, Comment, !HOTFIX

ex) Feat(Review): Add no review screen

### **Body**

1. '어떻게' 변경했는지 보다 '무엇을', '왜' 변경했는지 작성 (방법보다 사유 기술)

[예제](https://doublesprogramming.tistory.com/256)

![image](https://user-images.githubusercontent.com/58278026/152681510-6513ab1e-c141-4033-be4f-fc40a5c69ce3.png)

### code formating 

* eslintrc.js 에 설정해서 배포 -> 한명이 결정

### DIP OCP 적용을 위한 결합도 낮추기 작업

[링크](https://ichi.pro/ko/nestjs-mich-jongsogseong-ju-ib-66935058417860)
