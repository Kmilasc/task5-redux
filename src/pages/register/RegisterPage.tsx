import { useForm } from 'react-hook-form';
import styles from './register.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useRegisterMutation } from '../../services/slices/authApi';
import { useEffect } from 'react';
import { Credentials, RegisterResponse } from '../../interfaces/authApiInterface';

export function RegisterPage() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<Credentials>();
  const navigate = useNavigate()
  const [registerMutation, { isLoading, isSuccess, data }] = useRegisterMutation();

  useEffect(() => {

    if(isSuccess && data && 'token' in data) {
      const token = data.token;
      localStorage.setItem('token', token);
      navigate('/');
    }
   
  }, [isSuccess, navigate])

  return (
    <div className={styles.registerContainer}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit(registerMutation)}>
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
        <button type="submit" disabled={isLoading || !isValid} className={styles.submitButton}>Registrar</button>
      </form>
      <p className={styles.loginLink}>Já tem uma conta? <Link to="/">Faça login aqui</Link></p>
    </div>
  );
};
