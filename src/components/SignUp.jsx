import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [firstPasswords, setFirstPasswords] = useState('');
  const [secondPasswords, setSecondPasswords] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (firstPasswords !== secondPasswords) {
      setError('Пароли не совпадают');
      return;
    }

    try {
      const {
        _tokenResponse,
      } = await createUserWithEmailAndPassword(getAuth(), email, firstPasswords);
      navigate('/');
      localStorage.setItem('AuthToken', _tokenResponse.refreshToken);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Регистрация</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          E-mail
          <input name="email" value={email} type="email" required onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
          Пароль
          <input name="password" value={firstPasswords} type="password" required onChange={(e) => setFirstPasswords(e.target.value)} />
        </label>
        <label htmlFor="password">
          Повторите пароль
          <input name="password" value={secondPasswords} type="password" required onChange={(e) => setSecondPasswords(e.target.value)} />
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

export default SignUp;
