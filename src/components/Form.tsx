import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser, deleteUser, User } from '../actions/actions';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Form.css';

interface FormProps {
  user?: User;
}

const Form: React.FC<FormProps> = ({ user }) => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users);

  const [formData, setFormData] = useState<User>({
    id: uuidv4(),
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
      id: uuidv4(),
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
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">{user ? 'Update User' : 'Add User'}</button>
      </form>

      {users.length > 0 ? (
        <div>
          <h2>Submitted Users</h2>
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u: User) => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.phoneNumber}</td>
                  <td><button>Edit</button></td>
                  <td><button>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
        : ''}
    </>
  )
}

export default Form;