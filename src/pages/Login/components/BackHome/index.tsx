import { DoubleLeftOutlined } from '@ant-design/icons';
import { useNavigate } from '@umijs/max';
import styles from './index.less';

const BackHome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className={styles['back-home']}
      onClick={() => {
        navigate('/');
      }}
    >
      <DoubleLeftOutlined className={styles['back-arrow']} />
      <p>返回主页</p>
    </div>
  );
};

export default BackHome;
