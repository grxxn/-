import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTodo } from '../../store/todo/todoSlice';
import './css/index.css';

const EnterTodo = ({name}) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const todoStore = useSelector(state => state.todo);
  let [todoEle, setTodoEle] = useState({
    todo: '',
    checked: ''
  });

  const todoEnterFnc =(e) => {
    // todo 입력 함수
    setTodoEle({todo: e.target.value, checked: false})
  }
  const todoSubmitFnc = (e) => {
    // todo submit 함수
    e.preventDefault(); // 리로딩 방지
    todoEle.todo !== ''
    ? dispatch(addTodo(todoEle)) // todo 추가 (redux를 이용)
    : alert('내용을 입력해주세요.')
    setTodoEle({todo: "", checked: false}); // input 값 초기화
  }

  return (
    <div className='enter-todo-box'>
      <h2 className='todo-title'>{name} 님의 오늘 할 일</h2>
      <div className='closeBtn' onClick={()=>{navigate('/todo-list')}}>
        <div></div>
        <div></div>
      </div>
          
      <form className='add-todo-form' onSubmit={todoSubmitFnc}>
        <label>할 일 등록하기</label>
        <span className='add-input-box'>
          <input type="text" className='add-todo-input' onChange={todoEnterFnc} value={todoEle.todo}/>
          <input type="submit" value="등록" />
        </span>
      </form>
      <ul className='add-todo-list'>
        {  
          todoStore     
          ? todoStore.map((item, idx)=>{
            return <li key={idx}>{item.todo}</li>
          })
          : '목록에 데이터가 없습니다. 추가해주세요.'
        }
      </ul>
      <button className='nextBtn' onClick={()=>{
        navigate('/collect');
      }}>넘어가기</button>
    </div>
  );
};

export default EnterTodo;