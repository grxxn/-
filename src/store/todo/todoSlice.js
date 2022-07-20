import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      // todo item 추가 기능
      // action.payload -> 추가할 아이템
      state = state.push(action.payload);
      localStorage.setItem('today', JSON.stringify(state));
      action.type = "SET_ADD_TODO";
    },
    deleteTodo: (state, action) => {
      // todo item 삭제 기능
      // action.payload -> 삭제할 item의 인덱스 번호
      let idx = action.payload;
      state = state.splice(idx, 1);
      localStorage.setItem('today', JSON.stringify(state));
      action.type = "SET_DELETE_TODO";
    },
    doneTodo: (state, action) => {
      // todo item 체크 기능
      // action.payload -> 체크할 item의 인덱스 번호
      let idx = action.payload;
      let newArr = [...state];
      newArr[idx].checked = !newArr[idx].checked
      state = newArr;
      localStorage.setItem('today', JSON.stringify(state));
    }
  }
})

export const {addTodo, deleteTodo, doneTodo} = todoSlice.actions

export default todoSlice.reducer