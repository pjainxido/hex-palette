import Header from 'components/Header';
import Navigator from 'components/Navigator';
import React from 'react';
import styles from './Layout.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.mainWrapper}>
        <Navigator />
        <div className={styles.pageContent}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
