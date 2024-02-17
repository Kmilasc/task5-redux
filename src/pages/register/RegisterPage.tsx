import { useForm } from 'react-hook-form';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../services/slices/authApi';
import { useEffect } from 'react';

interface NewUser {
  username: string;
  password: string;
  email: string;
}

// TODO: Add loader
// TODO: Make it pretty
// TODO: Do a responsive design
export function Register() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<NewUser>();
  const navigate = useNavigate()
  const [registerMutation, { isLoading, isSuccess }] = useRegisterMutation();

  const onSubmit = (data: NewUser) => {
    registerMutation(data).unwrap();
  };

  useEffect(() => {
    isSuccess && navigate('/login')
  }, [isSuccess, navigate])

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            {...register("username", { required: 'Username é obrigatório' })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            {...register("email", { required: 'Email é obrigatório' })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            {...register("password", { required: 'Senha é obrigatória' })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit" disabled={isLoading || !isValid}>Register</button>
      </form>
    </div>
  );
};
