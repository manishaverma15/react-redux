import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser, deleteUser, User } from '../actions/actions';
import '../styles/Form.css';

interface FormProps {
  user?: User;
}

const Form: React.FC<FormProps> = ({ user }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<User>({
    id: user?.id || 0,
    name: user?.name || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      dispatch(updateUser(formData));
    }
    else {
      dispatch(addUser(formData));
    }

    setFormData({
      id: 0,
      name: '',
      email: '',
      phoneNumber: ''
    })
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>React-Redux Form</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">{user ? 'Update User' : 'Add User'}</button>
      </form>
    </>
  )
}

export default Form;