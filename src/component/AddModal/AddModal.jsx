import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todo/todoSlice';

const AddModal = ({modalSwitch, setModalSwitch }) => {
  const dispatch = useDispatch();
  let [modalAddInput, setModalAddInput] = useState('');
  const addTodoFnc = () => {
    modalAddInput.todo !== ''
    ? dispatch(addTodo(modalAddInput))
    : alert('내용을 입력해주세요.')
    setModalAddInput({todo: '', checked: false});
  }
  return (
    <div className={modalSwitch ? 'add-modal open' : 'add-modal'}>
      <span 
        className='modal-close-btn' 
        onClick={()=>{setModalSwitch(modalSwitch => false)}}
      >
        <span></span>
        <span></span>
      </span>
      <p>리스트 추가하기</p>
      <input 
        type='text' 
        className='add-modal-input' 
        value={modalAddInput.todo} 
        onChange={(e)=>{
          setModalAddInput({todo: e.target.value, checked: false})}} 
      />
      <input type='button' value='입력하기' onClick={addTodoFnc}/>
    </div>
  );
};

export default AddModal;