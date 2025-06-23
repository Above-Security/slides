import React from 'react';
import styles from './CalloutBox.module.css';

const CalloutBox = ({ variant = 'hook', children }) => {
  const classNames = [styles.callout, styles[variant]].filter(Boolean).join(' ');
  return <div className={classNames}>{children}</div>;
};

export default CalloutBox;
