import useUser from '@/models/global';
import {
  BellFilled,
  ExclamationCircleFilled,
  HomeFilled,
  SettingFilled,
} from '@ant-design/icons';
import { HeaderProps } from '@ant-design/pro-components';
import { useNavigate } from '@umijs/max';
import { Avatar, Popover } from 'antd';
import styles from './index.less';
import { getFirstCharacter } from './utils/getFirstCharacter';

type Props = {
  initialState?: HeaderProps;
};

const RightContentRender: React.FC<Props> = () => {
  const { name } = useUser();

  const NavMenu: React.FC = () => {
    const navigate = useNavigate();

    const menuListConfig = [
      {
        name: '我的主页',
        icon: <HomeFilled />,
        url: '/home',
      },
      {
        name: '通知',
        icon: <BellFilled />,
        url: '/home',
      },
      {
        name: '设置',
        icon: <SettingFilled />,
        url: '/home',
      },
      {
        name: '退出',
        icon: <ExclamationCircleFilled />,
        url: '/login',
      },
    ];
    return (
      <div className={styles['nav-menu']}>
        <ul className={styles['nav-list']}>
          {menuListConfig.map((item, index) => (
            <li
              key={index}
              className={styles['nav-item']}
              onClick={() => {
                navigate(item.url);
              }}
            >
              {item.icon}
              <span className={styles['text']}>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={styles['contain']}>
      <Popover placement="bottom" content={<NavMenu />} trigger="click">
        <Avatar className={styles['avatar']} size={40}>
          {getFirstCharacter(name)}
        </Avatar>
      </Popover>
    </div>
  );
};

export default RightContentRender;