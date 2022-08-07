import { OWNER_NICK_CH_NAME, OWNER_NICK_EN_NAME } from '@/constants';
import styles from './index.less';

const HomePage: React.FC = () => {
  return (
    <div className={styles.home}>
      <main>
        <div className={styles['owner-desc']}>
          <div className={styles['avatar']}>
            <img src={require('@/assets/avatar.jpg')} />
          </div>
          <div className={styles['nickname']}>
            <p className={styles['ch-name']}>{OWNER_NICK_CH_NAME}</p>
            <p className={styles['en-name']}>{OWNER_NICK_EN_NAME}</p>
          </div>
          <div className={styles['bubbles-list']}>
            <div className={styles['bubble']} />
            <div className={styles['bubble']} />
            <div className={styles['bubble']} />
            <div className={styles['bubble']} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
