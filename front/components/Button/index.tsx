import { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.scss';

interface IButton {
  onClick: MouseEventHandler;
  children: ReactNode;
}

const Button = ({ onClick, children }: IButton) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
