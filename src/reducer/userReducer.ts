import React from 'react';
import { combineReducers } from 'redux';
import { ADD_USER, DELETE_USER, UPDATE_USER, User } from '../actions/actions';

interface userState {
  users: User[];
}

const initialState: userState = {
  users: []
}

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };

    case UPDATE_USER: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        )
      }
    }

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload)
      }
    default:
      return state;
  };
}

export const rootReducer = combineReducers({
  users: userReducer,
});