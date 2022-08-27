import classNames from 'classNames';
import styles from './index.less';

type Props = {
  type: 'index' | 'login';
};

const Footer: React.FC<Props> = (props) => {
  const { type } = props;

  return (
    <div className={classNames(styles.footer, styles[type])}>
      {/* <a
        className={styles.icp}
        href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=xxxxxxxxxxxxxx&token=da019b73-d30c-40f3-a520-01cc28d36e55"
      >
        浙公网安备 xxxxxxxxxxxxxx号
      </a> */}
      <a className={styles.icp} href="https://beian.miit.gov.cn">
        浙ICP备2022024831号-1
      </a>
      <p className={styles.copyright}>Copyright ©2022 Yorikhu</p>
    </div>
  );
};

export default Footer;
