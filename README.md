# 오늘의 목표 

## 📌 Link
[클릭시 페이지로 이동합니다.](https://grxxn.github.io/todo-list/)


오늘의 목표는 리액트를 통해 제작한 투두리스트 페이지입니다.   
사용자의 이름과 오늘 할 일에 대한 입력을 받아 마지막 페이지에서 받았던 정보를 출력합니다. 마지막 페이지에서는 모달을 통해 리스트 추가가 가능하며, 체크했을 경우 체크박스에 당근이 표시되며 완료가 됩니다.    
전체적인 컨셉은 오렌지색과 당근으로 선정하여 그에 맞춰 페이지 바깥에서 마우스를 움직일 시 마우스를 따라 당근 아이콘이 이동하도록 canvas를 사용하여 구현하였습니다. 현재 수정중에 있습니다.  
![투두리스트 페이지 미리보기](./src/img/todo%20main.png)   
   
## 📌 Description
- 1인 프로젝트 👩‍💻
- 2021.12

## 📌 Main Function
- 반응형 웹페이지
- localStorage를 통한 데이터 저장과 출력
- Math.random()을 사용해 명언 랜덤 출력
- react-router-dom과 useNavigate을 이용한 페이지간 이동
- useRef를 사용한 DOM 조작
- react-redux를 사용한 데이터 관리
- useSelector, useDispatch를 이용한 store구독 및 action 함수 사용   
   
           
## 📌 Installation
```
npm create-react-app todo-list
```

## 📌 Destructure
```
├── public
│   └── index.html
└── src
    ├── components
    │    ├── AddModal
    │    ├── Collect
    │    │   ├── Collect
    │    │   └── TodoItem
    │    ├── EnterTodo
    │    └── canvasFnc.js
    ├── data
    │    └── sayingData
    ├── img
    ├── store
    │    ├── todoSlice
    │    └── index
    ├── App.js
    └── index.js
```

## 📌 Languages
<img src="https://img.shields.io/badge/-React-%2361DAFB?style=flat-square&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/-JavaScript-%23F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"> <img src="https://img.shields.io/badge/-CSS3-%231572B6?style=flat-square&logo=CSS3&logoColor=white">
   
## 📌 Tools
<img src="https://img.shields.io/badge/-VisualStudioCode-%23007ACC?style=flat-square&logo=VisualStudioCode&logoColor=white" /> <img src="https://img.shields.io/badge/-GitHub-%23181717?style=flat-square&logo=GitHub&logoColor=white" />
