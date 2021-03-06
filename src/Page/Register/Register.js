import React, { useState } from 'react';
import s from './Register.module.scss';
import '../Login/Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerAuth } from '../../Redux/Auth/authOperation';
import { getWaiting } from '../../Redux/Auth/authSelectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CSSTransition } from 'react-transition-group';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Register = () => {
  const dispftch = useDispatch();
  const wait = useSelector(getWaiting);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameFunc = e => setName(e.target.value);
  const emailFunc = e => setEmail(e.target.value);
  const passwordFunc = e => setPassword(e.target.value);

  const btnClick = e => {
    e.preventDefault();
    dispftch(registerAuth({ name, email, password }));
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <>    
      <div className={s.bacground}></div>
      <div className={s.overley}></div>
      <ToastContainer />
      <CSSTransition
        in={wait}
        classNames="waitingMessage"
        timeout={250}
        unmountOnExit
      >
        {/* <h2 className={s.waitingMessage}>Please Wait...</h2> */}
         <Loader className={s.waitingMessage}          
         type="Audio" color="#FFF" height={80} width={80}
      />
      </CSSTransition>
      <CSSTransition    
    in={true}
    appear={true}
    timeout={500}
    classNames={s}
    unmountOnExit
  >
      <div className={s.containerBlockReg}>
        <h1 className={s.registerH1}>Registration</h1>
        <form className={s.registerForm} onSubmit={btnClick}>
          <label className={s.registerLabel}>
            Login
            <input
              required
              className={s.registerInput}
              type="text"
              value={name}
              placeholder="Enter login"
              onChange={nameFunc}
            />
          </label>

          <label className={s.registerLabel}>
            Email
            <input
              required
              className={s.registerInput}
              type="text"
              value={email}
              placeholder="Enter email"
              onChange={emailFunc}
            />
          </label>

          <label className={s.registerLabel}>
            Password
            <input
              required
              className={s.registerInput}
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={passwordFunc}
            />
          </label>
          <br />
          <button type="submit" className={s.registerButton}>
            Registration
          </button>
        </form>
      </div>
      </CSSTransition>
    </>
  );
  // }
};

export default Register;
