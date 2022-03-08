import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.logo}>
        <Link href={'/'}>
          <a>HEX PALETTE</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
