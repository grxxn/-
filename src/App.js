import { createRef, useEffect, useRef, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import EnterTodo from './component/EnterTodo/EnterTodo';
import Collect from './component/Collect/Collect';
import carrot from './img/carrot.png';
import './App.css';
import { drawCarrot } from './component/canvasFnc';
import { moveCarrot } from './component/canvasFnc';
import { removeCarrot } from './component/canvasFnc';

function App() {
  let navigate = useNavigate();
  let [name, setName] = useState('');

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

  return ( <>
    <canvas id="canvas" 
      ref={canvasRef}   
      onMouseOver={e => drawCarrot(e, contextRef, carrot)} 
      onMouseMove={e => moveCarrot(e, contextRef, carrot)}
      onMouseOut={e => removeCarrot(contextRef)}>
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
        } />

        <Route path='/todo' element={<EnterTodo name={name} />} />
        
        <Route path='/collect' element={<Collect name={name} />} />
      </Routes>
    </div></>
  )
}

export default App;