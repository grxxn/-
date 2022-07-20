import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, doneTodo } from '../../store/todo/todoSlice';

const TodoItem = ({todoLi, idx}) => {
  const todoStore = useSelector(state => state.todo);
  const [liActive, setLiActive] = useState('')
  const [chkIcon, setChkIcon] = useState('chkIcon');
  const dispatch = useDispatch();
  
  const chkTodoFnc = () => {
    dispatch(doneTodo(idx))
    setChkIcon(todoStore[idx].checked ? 'chkIcon on' : 'chkIcon'); // icon class명 변경
    setLiActive(todoStore[idx].checked ? 'active' : null)
  }
  const deleteTodoFnc = () => {
    dispatch(deleteTodo(idx))
  }

  return (
    <li className={liActive}>
      <span className='checkBox' onClick={chkTodoFnc}>
        <FontAwesomeIcon icon={faCarrot} className={chkIcon} />
      </span>
      {todoLi.todo}
      <span className='trashIcon' onClick={deleteTodoFnc}>
        <FontAwesomeIcon icon={faTrashCan} />
      </span>
    </li>
  )
};

export default TodoItem;