import React from 'react';
import { useForm } from 'react-hook-form';
import './SignUpUser.css';

const SignUpUser = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert(JSON.stringify(data, null, 2));
    console.log(data);
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>First Name</label>
        <input {...register('firstName', { required: true })} />
        {errors.firstName && <span className="error">This field is required</span>}
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input {...register('lastName', { required: true })} />
        {errors.lastName && <span className="error">This field is required</span>}
      </div>
      <div className="form-group">
        <label>Username</label>
        <input {...register('userName', { required: true })} />
        {errors.userName && <span className="error">This field is required</span>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          {...register('email', {
            required: true,
            pattern: /^\S+@\S+$/i
          })}
        />
        {errors.email && <span className="error">This field is required and must be a valid email</span>}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span className="error">This field is required</span>}
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input type="password" {...register('confirmPassword', { required: true })} />
        {errors.confirmPassword && <span className="error">This field is required</span>}
      </div>
      <div className="form-buttons">
        <button type="submit">SUBMIT</button>
        <button type="button" onClick={() => window.location.reload()}>CANCEL</button>
      </div>
    </form>
  );
};

export default SignUpUser;
