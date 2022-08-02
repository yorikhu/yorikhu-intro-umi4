import ErrorCodePage from '../components/ErrorCodePage';

const NotFound: React.FC = () => {
  const errorCodePageConfig = {
    errorCode: '404',
    errorText: '抱歉，你访问的页面不存在',
    homeUrl: '/home',
  };
  return <ErrorCodePage {...errorCodePageConfig} />;
};

export default NotFound;
