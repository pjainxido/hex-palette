import Link from 'next/link';
import styles from './Navigator.module.scss';

const Navigator = () => {
  return (
    <nav className={styles.Navigator}>
      <div className={styles.pageLinks}>
        <Link
          href={{
            pathname: '/',
            query: { q: 'new' },
          }}
        >
          New
        </Link>
        <Link
          href={{
            pathname: '/',
            query: { q: 'hot' },
          }}
        >
          Hot
        </Link>
        <Link
          href={{
            pathname: '/',
            query: { q: 'random' },
          }}
        >
          Random
        </Link>
        <Link href={'/like'}>Like</Link>
      </div>
      <div className={styles.tags}></div>
    </nav>
  );
};

export default Navigator;
