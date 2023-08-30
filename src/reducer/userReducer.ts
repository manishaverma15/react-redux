import React from 'react';
import { combineReducers } from 'redux';
import { ADD_USER, DELETE_USER, UPDATE_USER, User } from '../actions/actions';

const initialUserState: User[] = [];

const userReducer = (state: User[] = initialUserState, action: any) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];

    case UPDATE_USER:
      return [
        ...state,
        state.map((user) =>
          user.id === action.payload.id ? action.payload : user
        )
      ]

    case DELETE_USER:
      return [
        ...state,
        state.filter((user) => user.id !== action.payload)
      ]
    default:
      return state;
  };
}

export const rootReducer = combineReducers({
  users: userReducer,
});