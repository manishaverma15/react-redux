export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

export const addUser = (user: User) => ({
  type: ADD_USER,
  payload: user,
});

export const updateUser = (user: User) => ({
  type: UPDATE_USER,
  payload: user,
});

export const deleteUser = (userId: number) => ({
  type: DELETE_USER,
  payload: userId,
});
