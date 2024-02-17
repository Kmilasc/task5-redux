import { useForm } from 'react-hook-form';
import styles from './login.module.css';
import { useLoginMutation } from '../../services/slices/authApi';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Credentials } from '../../interfaces/authApiInterface';

export function LoginPage() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<Credentials>();
  const navigate = useNavigate()
  const [login, { isLoading, isSuccess }] = useLoginMutation();

  useEffect(() => {
    isSuccess && navigate('/home')
  }, [isSuccess, navigate])

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(login)}>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", { required: 'Email é obrigatório' })}
            className={errors.email ? styles.inputError : ''}
          />
          {errors.email && <p className={styles.errorMsg}>{errors.email.message}</p>}
        </div>
        <div className={styles.formGroup}>
          <label>Senha:</label>
          <input
            type="password"
            {...register("password", { required: 'Senha é obrigatória' })}
            className={errors.password ? styles.inputError : ''}
          />
          {errors.password && <p className={styles.errorMsg}>{errors.password.message}</p>}
        </div>
        <button type="submit" disabled={isLoading || !isValid} className={styles.submitButton}>Entrar</button>
      </form>
      <p className={styles.registerLink}>Ainda não tem uma conta? <Link to="/register">Registre-se aqui</Link></p>
    </div>
  );
};
