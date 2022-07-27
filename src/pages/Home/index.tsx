import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  console.log(name)
  
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        Home
      </div>
    </PageContainer>
  );
};

export default HomePage;
