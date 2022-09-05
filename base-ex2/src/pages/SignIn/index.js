import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { getItem, setItem } from '../../utils/storage';
import './styles.css';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = getItem('token');

    if (token) {
      navigate('/main');
    }
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!email || !password) {
        console.log('Preencha todos os campos!');
        return;
      }

      const { data } = await api.post('/login', { email, password });
      const { token } = data;
      setItem('token', token);

      navigate('/main');
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>
          Login
        </button>
      </form>
    </div>
  );
}

export default SignIn;
