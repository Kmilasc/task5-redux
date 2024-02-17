import { useForm } from 'react-hook-form';
import styles from './register.module.css';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../services/slices/authApi';
import { useEffect } from 'react';

interface NewUser {
  username: string;
  password: string;
  email: string;
}

export function RegisterPage() {
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
    <div className={styles.registerContainer}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <label>Username:</label>
          <input
            type="text"
            {...register("username", { required: 'Username é obrigatório' })}
            className={errors.username ? styles.inputError : ''}
          />
          {errors.username && <p className={styles.errorMsg}>{errors.username.message}</p>}
        </div>
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
          <label>Password:</label>
          <input
            type="password"
            {...register("password", { required: 'Senha é obrigatória' })}
            className={errors.password ? styles.inputError : ''}
          />
          {errors.password && <p className={styles.errorMsg}>{errors.password.message}</p>}
        </div>
        <button type="submit" disabled={isLoading || !isValid} className={styles.submitButton}>Register</button>
      </form>
    </div>
  );
};
