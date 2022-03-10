import Link from 'next/link';
import Filter from './Filter';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link href={'/'}>
            <a>HEX PALETTE</a>
          </Link>
        </div>
      </div>
      <div className={styles.middle}>
        <Filter />
      </div>
      <div className={styles.right}>right</div>
    </div>
  );
};

export default Header;
