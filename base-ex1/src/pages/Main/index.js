import api from '../../services/api';
import './styles.css';
import { useEffect, useState } from 'react';

function Main() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '' });

  async function loadUsers() {
    try {
      const { data } = await api.get('/users');
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeInputValue(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      if (!form.name || !form.email) {
        return;
      }

      const { data } = await api.post('/users', { ...form });
      setUsers([...users, data]);
      setForm({ name: '', email: '' });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='Name'
          value={form.name}
          onChange={handleChangeInputValue}
        />

        <input
          name='email'
          type='text'
          placeholder='E-mail'
          value={form.email}
          onChange={handleChangeInputValue}
        />

        <button><b>Cadastrar</b></button>
      </form>

      <div className='userlist'>
        <h1>Users</h1>
        {users.map(user => (
          <div key={user.id}>
            <h4>{user.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
