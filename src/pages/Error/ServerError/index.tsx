import ErrorCodePage from '../components/ErrorCodePage';

const ServerError: React.FC = () => {
  const errorCodePageConfig = {
    errorCode: '500',
    errorText: '抱歉，服务器出错了',
    homeUrl: '/home',
  };
  return <ErrorCodePage {...errorCodePageConfig} />;
};

export default ServerError;
