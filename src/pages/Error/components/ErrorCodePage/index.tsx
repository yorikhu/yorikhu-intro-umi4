import { useNavigate } from '@umijs/max';
import { Button } from 'antd';
import styles from './index.less';

type Props = {
  errorCode: string;
  errorText: string;
  homeUrl: string;
};

const ErrorCodePage: React.FC<Props> = (props) => {
  const { errorCode, errorText, homeUrl } = props;
  const navigate = useNavigate();
  return (
    <div className={styles['not-found']}>
      <section className={styles['wrapper']}>
        <div className={styles['container']}>
          <div className={styles['scene']}>
            <div className={styles['one']}>
              <div className={styles['content']}>
                <span className={styles['piece']} />
                <span className={styles['piece']} />
                <span className={styles['piece']} />
              </div>
            </div>
            <div className={styles['two']}>
              <div className={styles['content']}>
                <span className={styles['piece']} />
                <span className={styles['piece']} />
                <span className={styles['piece']} />
              </div>
            </div>
            <div className={styles['three']}>
              <div className={styles['content']}>
                <span className={styles['piece']} />
                <span className={styles['piece']} />
                <span className={styles['piece']} />
              </div>
            </div>
            <p className={styles['p-error-code']}>{errorCode}</p>
            <p className={styles['p-error-code']}>{errorCode}</p>
          </div>
          <div className={styles['operation']}>
            <article>
              <p>{errorText}</p>
              <Button
                onClick={() => {
                  navigate(homeUrl, { replace: true });
                }}
              >
                返回首页
              </Button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorCodePage;
