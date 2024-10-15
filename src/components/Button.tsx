import {ReactNode} from 'react';
import Star from './assets/Star.tsx';
import styles from "./Button.module.scss";

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'destructive';
  color?: 'color' | 'gray';
  size?: 'm' | 'l' | 'xl' | 'xxl';
  icon?: 'left' | 'right' | 'both' | 'none' | 'only';
  disabled?: boolean;
  children?: ReactNode;
}

export default function Button({
  type = 'primary',
  color = 'color',
  size = "m",
  icon = "right",
  disabled = false,
  children
}: ButtonProps) {

  let classes = `${styles.btn} ${styles[type]} ${styles[size]}`;

  if (type === 'link' && color === "gray") {
    classes += ` ${styles[color]}`;
  }
  if (icon === 'only') {
    classes += ` ${styles.iconOnly}`;
  }

  return (
    <button className={classes} disabled={disabled}>
      {icon !== 'only' ?
        <>
          {(icon === 'left') || (icon === "both") ? <Star size={size === 'xxl' ? 'large' : 'small'} /> : null}
          {children}
          {(icon === 'right') || (icon === "both") ? <Star size={size === 'xxl' ? 'large' : 'small'} /> : null}
        </>
      : <Star size={size === 'xxl' ? 'large' : 'small'} />}
    </button>
  );
}
