import { useForm } from 'react-hook-form';
import './login.module.css';
import { useLoginMutation } from '../../services/slices/authApi';

interface FormData {
  email: string;
  password: string;
}

export function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: FormData) => {
    try {
      await login(data).unwrap();
    } catch (error) {
      console.error('Failed to login: ', error);
    }
  };


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            {...register("email", { required: 'Email é obrigatório' })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            {...register("password", { required: 'Senha é obrigatória' })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit" disabled={isLoading}>Entrar</button>
      </form>
    </div>
  );
};
