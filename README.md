# 음식점 홈페이지 제작 프로젝트 리뉴얼

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 현재 단계
기존 Python Flask로 작동하던 코드를 Create React App 바탕으로 작동하도록 옮기는 중


## 전체 리뉴얼 과정

### 1차 (22.05.04) : 메인페이지 페이스오프 / Django

* 아임웹에 게시된 식음료점 디자인들을 참고
* 모바일/데스트탑 2단의 반응형 메인 페이지를 테스트 제작
* django 템플릿으로 연결

### 2차 (22.05.14-15) : scss 적용

* scss 세팅 : 그리드 시스템, 타이포그래피, 컬러 기본값을 적용
* favicon 추가
 

### 3차 (22.05.16) : 세부페이지 목업

* 공간소개, 메뉴소개, 쇼핑 페이지 목업 스케치

### 4차 (22.06.06) : React 적용

* python 모듈 제거
    * 첫 시도에서 uninstall 시도 시 '파일을 찾을 수 없다'며 오류 -> venv에 설치했다는 걸 깨닫고 안에서 전부 uninstall 후 가상환경 제거
* create react app 으로 재시작
* JSX으로 헤더/메인/푸터 리팩토링 시작
