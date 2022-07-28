import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  console.log(name);

  return (
    <div className={styles.home}>
      <h1>Home Page!</h1>
    </div>
  );
};

export default HomePage;
