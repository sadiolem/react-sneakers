import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const { _tokenResponse } = await signInWithEmailAndPassword(getAuth(), email, password);
      navigate('/');
      localStorage.setItem('AuthToken', _tokenResponse.refreshToken);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Вход</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input name="email" value={email} type="email" required onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
          <input name="password" value={password} type="password" required onChange={(e) => setPassword(e.target.value)} />
        </label>

        {
            error
            && <p>{ error }</p>
        }

        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default SignIn;
