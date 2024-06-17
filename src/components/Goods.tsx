import React from 'react';
import { Alert, Row } from 'antd';
import { Electronic } from './ProductList/Electronic.tsx';
import { productsApi } from '../services/ProductsService.ts';
import { Loader } from './Loader.tsx';

export const Goods: React.FC = () => {
  const { data: goods, error, isLoading } = productsApi.useFetchProductsQuery('');

  if (isLoading) return <Loader />;
  if (error) return <Alert type="error" description="Ошибка при получении данных" />;

  return (
    <>
      <h2>Computers</h2>
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Electronic electronicGoods={goods} />
      </Row>
    </>
  );
};