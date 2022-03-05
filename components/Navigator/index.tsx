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
          <a>New</a>
        </Link>
        <Link
          href={{
            pathname: '/',
            query: { q: 'hot' },
          }}
        >
          <a>Hot</a>
        </Link>
        <Link
          href={{
            pathname: '/',
            query: { q: 'random' },
          }}
        >
          <a>Random</a>
        </Link>
        <Link href={'/like'}>
          <a>Like</a>
        </Link>
        <Link href={'/create'}>
          <a>Create</a>
        </Link>
      </div>
      <div className={styles.tags}></div>
    </nav>
  );
};

export default Navigator;
