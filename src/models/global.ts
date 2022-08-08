// 全局共享数据示例
import { OWNER_NICK_CH_NAME } from '@/constants';
import { useState } from 'react';

const useUser = () => {
  const [name, setName] = useState<string>(OWNER_NICK_CH_NAME);
  return {
    name,
    setName,
  };
};

export default useUser;
