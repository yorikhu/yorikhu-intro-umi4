import { ReactElement } from 'react';
import styles from './index.less';

type Props = {
  isLoading: boolean;
  children: ReactElement;
};

const Loading: React.FC<Props> = (props) => {
  const { isLoading, children } = props;

  return (
    <>
      <div
        className={styles['loader-contain']}
        style={{ display: isLoading ? 'block' : 'none' }}
      >
        <div className={styles.loader}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div style={{ display: isLoading ? 'none' : 'block' }}>{children}</div>
    </>
  );
};

export default Loading;
