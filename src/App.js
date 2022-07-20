import { createRef, useEffect, useRef, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import EnterTodo from './component/EnterTodo/EnterTodo';
import Collect from './component/Collect/Collect';
import carrot from './img/carrot.png';
import './App.css';

function App() {
  let navigate = useNavigate();
  let [name, setName] = useState('');
  let [todo, setTodo] = useState(JSON.parse(localStorage.getItem('today'))||[]);

  const deleteTodo = (idx) => {
    // todo item 삭제 함수
    const todoArr = [...todo];
    todoArr.splice(idx,1);
    setTodo(todoArr);
    localStorage.setItem('today', JSON.stringify(todo));
  }

  // canvas 관련 변수
  const canvasRef = useRef(null); //useRef를 통해 dom element 에 접근
  const contextRef = useRef(null);

  useEffect(()=>{
    const canvas = canvasRef.current;
      
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d');
    // context.scale(2, 2);
    contextRef.current = context;
  }, []);

  const drawCarrot = (e)=>{
    // 캔버스에 당근 이미지를 그림
    const img = new Image();
    img.src = carrot;
    let x = e.nativeEvent.clientX - img.width/4; // x 좌표
    let y = e.nativeEvent.clientY - img.height/4;  // y 좌표
    img.onload = function(){
      contextRef.current.drawImage(img, x, y, img.width/2, img.height/2); // 마우스 위치에 당근을 그림
    }
  }

  const moveCarrot = (e)=>{
    // 마우스 커서의 움직임에 따라 당근 이미지가 함께 이동
    // 부드러운 이동을 위해 애니메이션 활용
    // 함수 실행 시 화면 초기화
    contextRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    const img = new Image();
    img.src = carrot;
    let x = e.nativeEvent.clientX - img.width/4;
    let y = e.nativeEvent.clientY - img.height/4;
    
    img.onload = function(){
      contextRef.current.drawImage(img, x, y, img.width/2, img.height/2);
    }
  }

  const removeCarrot = ()=>{
    // 영역(캔버스)에서 벗어날 경우 캔버스 초기화
    contextRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }

  return ( <>
    <canvas id="canvas" 
      ref={canvasRef}   
      onMouseOver={drawCarrot} 
      onMouseMove={moveCarrot}
      onMouseOut={removeCarrot}>
    </canvas> 
    <div className='mainContainer'>
      <h1 className='mainTitle'>오늘의 목표</h1>

      <Routes>
        <Route path='/todo-list' element={
          <form className='enterName' onSubmit={(e)=>{
            e.preventDefault(); // 페이지 리로딩 방지
            navigate('/todo'); 
          }}>
            <p>환영합니다! 사용자의 이름을 입력해주세요</p>
            <input type='text' className='nameInput' onChange={(e)=>{
              setName(e.target.value)
            }}/>
            <input type='submit' value='입력하기' />
          </form>
        }>
        </Route>

        <Route path='/todo' element={<EnterTodo name={name} />}>
        </Route>
        
        <Route path='/collect' element={<Collect name={name} todo={todo} setTodo={setTodo} deleteTodo={deleteTodo}/>}></Route>
      </Routes>
    </div></>
  )
}

export default App;