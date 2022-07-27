import { Button } from 'antd';
import styles from './index.less';

const NotFound: React.FC = () => {
  return (
    <div className={styles['not-found']}>
      <section className={styles['wrapper']}>
        <div className={styles['container']}>
          <div className={styles['scene']} data-hover-only="false">
            <div className={styles['circle']} data-depth="1.2"></div>
            <div className={styles['one']} data-depth="0.9">
              <div className={styles['content']}>
                <span className={styles['piece']}></span>
                <span className={styles['piece']}></span>
                <span className={styles['piece']}></span>
              </div>
            </div>
            <div className={styles['two']} data-depth="0.60">
              <div className={styles['content']}>
                <span className={styles['piece']}></span>
                <span className={styles['piece']}></span>
                <span className={styles['piece']}></span>
              </div>
            </div>
            <div className={styles['three']} data-depth="0.40">
              <div className={styles['content']}>
                <span className={styles['piece']}></span>
                <span className={styles['piece']}></span>
                <span className={styles['piece']}></span>
              </div>
            </div>
            <p className={styles['p404']} data-depth="0.50">
              404
            </p>
            <p className={styles['p404']} data-depth="0.10">
              404
            </p>
          </div>
          <div className={styles['operation']}>
            <article>
              <article>
                <p>Uh oh! Looks like you got lost.</p>
                <Button>Back Home</Button>
              </article>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
