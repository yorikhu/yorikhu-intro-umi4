import Loading from '@/components/Loading';
import { OWNER_NICK_CH_NAME, OWNER_NICK_EN_NAME } from '@/constants';
import {
  GithubOutlined,
  QuestionCircleOutlined,
  WechatOutlined,
  ZhihuOutlined,
} from '@ant-design/icons';
import { history } from '@umijs/max';
import classNames from 'classNames';
import { useState } from 'react';
import styles from './index.less';

type HomeLoadingList = {
  avatarOnLoad?: boolean;
  bgOnLoad?: boolean;
};

const HomePage: React.FC = () => {
  type tipTextType = {
    ch: string;
    en: string;
  };

  const tipTuple = ['wechat', 'github', 'zhihu', 'more'] as const;

  type tipTextMapType = {
    [key in typeof tipTuple[number]]: tipTextType;
  };

  const tipTextMap: tipTextMapType = {
    wechat: {
      ch: '微信',
      en: 'wechat',
    },
    github: {
      ch: 'Github',
      en: '',
    },
    zhihu: {
      ch: '知乎',
      en: 'zhihu',
    },
    more: {
      ch: '了解更多',
      en: 'know more',
    },
  };

  const [tipText, setTipText] = useState<tipTextType>();
  const [ifShowCodepic, setIfShowCodepic] = useState<boolean>(false);
  const [loadingList, setLoadingList] = useState<HomeLoadingList>();

  const changeTipDisplay = (tipType: typeof tipTuple[number]) => {
    setTipText(tipTextMap[tipType]);
  };

  const clearTipDisplay = () => {
    setTipText({
      ch: '',
      en: '',
    });
  };

  return (
    <div className={styles.home}>
      <Loading
        isLoading={!(!!loadingList?.avatarOnLoad && !!loadingList?.bgOnLoad)}
      >
        <main>
          <img
            className={styles.bg}
            src={require('@/assets/banner.jpg')}
            onLoad={() => {
              setLoadingList((pro) => {
                return { ...pro, bgOnLoad: true };
              });
            }}
          />
          <div className={styles['owner-desc']}>
            <div className={styles['avatar']}>
              <img
                src={require('@/assets/avatar.jpg')}
                onLoad={() => {
                  setLoadingList((pro) => {
                    return { ...pro, avatarOnLoad: true };
                  });
                }}
              />
            </div>
            <div className={styles['nickname']}>
              <p className={styles['ch-name']}>{OWNER_NICK_CH_NAME}</p>
              <p className={styles['en-name']}>{OWNER_NICK_EN_NAME}</p>
            </div>
            <div
              className={styles['codepic']}
              style={{ display: ifShowCodepic ? 'block' : 'none' }}
            >
              <img src={require('@/assets/codepic.jpeg')} />
            </div>
            <div className={styles['bubbles-list']}>
              <div
                onMouseEnter={() => changeTipDisplay('wechat')}
                onMouseLeave={() => {
                  clearTipDisplay();
                  setIfShowCodepic(false);
                }}
                onClick={() => {
                  setIfShowCodepic(true);
                }}
                className={classNames(styles['bubble'], styles['wechat'])}
              >
                <WechatOutlined />
              </div>
              <div
                onMouseEnter={() => changeTipDisplay('github')}
                onMouseLeave={() => clearTipDisplay()}
                onClick={() =>
                  window.open('https://github.com/yorikhu', '_blank')
                }
                className={classNames(styles['bubble'], styles['github'])}
              >
                <GithubOutlined />
              </div>
              <div
                onMouseEnter={() => changeTipDisplay('zhihu')}
                onMouseLeave={() => clearTipDisplay()}
                onClick={() =>
                  window.open('https://www.zhihu.com/people/yorikhu', '_blank')
                }
                className={classNames(styles['bubble'], styles['zhihu'])}
              >
                <ZhihuOutlined />
              </div>
              <div
                onMouseEnter={() => changeTipDisplay('more')}
                onMouseLeave={() => clearTipDisplay()}
                onClick={() => history.push('')}
                className={classNames(styles['bubble'], styles['more'])}
              >
                <QuestionCircleOutlined />
              </div>
            </div>
            <div className={styles['tip-display']}>
              <p className={styles['text-ch']}>{tipText?.ch}</p>
              <p className={styles['text-en']}>{tipText?.en}</p>
            </div>
          </div>
        </main>
      </Loading>
    </div>
  );
};

export default HomePage;
