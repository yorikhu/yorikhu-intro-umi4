import styles from './index.less';

const HomePage: React.FC = () => {
  return (
    <div className={styles.home}>
      <header></header>
      <main>{"page's content"}</main>
    </div>
  );
};

export default HomePage;
