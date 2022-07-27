import ErrorCodePage from '../components/ErrorCodePage';

const PermissionDenied: React.FC = () => {
  const errorCodePageConfig = {
    errorCode: '403',
    errorText: '抱歉，你无权访问该页面',
    homeUrl: '/home',
  };
  return <ErrorCodePage {...errorCodePageConfig} />;
};

export default PermissionDenied;
