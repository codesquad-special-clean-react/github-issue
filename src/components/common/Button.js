import React from 'react';
import { button } from './Button.module.scss';

const Button = ({ text }) => {
  return <button className={button}>{text}</button>;
};

export default Button;
