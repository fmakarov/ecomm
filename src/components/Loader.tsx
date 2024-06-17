import { Alert, Flex, Spin } from 'antd';

export const Loader = () => {
  return <Flex gap="small" vertical>
    <Spin tip="Loading...">
      <Alert message="Получение данных" type="info" />
    </Spin>
  </Flex>;
};