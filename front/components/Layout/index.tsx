import Header from './Header';
import Navigator from './Navigator';
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
