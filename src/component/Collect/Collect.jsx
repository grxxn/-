import './css/index.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import sayingData from '../../data/saying';
import AddModal from '../AddModal/AddModal';
import { useNavigate } from 'react-router-dom';

const Collect = ({name}) => {
  const todoStore = useSelector(state => state.todo);
  let navigate = useNavigate();
  let [modalSwitch, setModalSwitch] = useState(false);
  let [randNum, setRandNum] = useState(Math.floor(Math.random() * sayingData.length));

  return (
    <div className='collect-container'>
      <div className='closeBtn' onClick={()=>{navigate('/todo-list')}}>
        <div></div>
        <div></div>
      </div>
      <h2 className='collectTitle'>
        {name} 님의 오늘의 목표 😎
      </h2>

      <div className='randomBanner'>
        <h4 className='bannerTitle'>오늘의 명언</h4>
        <p>{sayingData[randNum]}</p>
        <button className='bannerBtn' onClick={()=>{
          setRandNum(randNum => Math.floor(Math.random() * sayingData.length))
        }}>change</button>
      </div>

      <div className='chkContainer'>
        <div className='today'>
          <h4>오늘 할 일</h4>
          <ul className='todayLi'>
            { !localStorage.getItem('today') 
            ? <li>할일을 추가해보세요 !</li>
            : todoStore.map((todoLi, idx)=>{
                return <TodoItem key={todoLi.id} idx={idx} todoLi={todoLi} />
              })}
          </ul>
          <button 
            className='addBtn' 
            onClick={()=>{setModalSwitch(modalSwitch => !modalSwitch)}}
          > 추가하기</button>
          <AddModal modalSwitch={modalSwitch} setModalSwitch={setModalSwitch}/>
        </div>
      </div>      
    </div>
  );
};

export default Collect;