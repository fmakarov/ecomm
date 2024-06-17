import React from 'react';
import { useParams } from 'react-router-dom';
import { productsApi } from '../../services/ProductsService.ts';
import { IElectronics } from '../../types.ts';
import { ProductView } from '../ProductView/ProductView.tsx';
import { Badge } from 'antd';
import { calculateDownPayment } from '../../helpers/pricePrettifier.ts';

export const ProductDetail: React.FC = () => {
  const { productId } = useParams();
  const { data: goods, isLoading, error } = productsApi.useFetchProductsQuery('');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  const productItem: IElectronics = Object.values(goods)
    .find(it => it._id === productId);

  if (!productItem) return <div>Product not found</div>;

  return (
    <>
      <Badge.Ribbon text={`от ${calculateDownPayment(productItem.price)}₽ в мес`} color="magenta">
        <ProductView item={productItem} />
      </Badge.Ribbon>
    </>
  );
};