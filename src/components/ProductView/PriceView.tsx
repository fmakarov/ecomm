import React from 'react';
import { pricePrettifier } from '../../helpers/pricePrettifier.ts';
import { Badge, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

interface IProps {
  price: number,
  discount: number,
}

const PriceDisplay: React.FC<{ discountPrice: number }> = ({ discountPrice }) => (
  <div style={{ fontSize: '2rem', fontWeight: 600 }}>
    <span>{pricePrettifier(discountPrice)}</span>
    <span style={{ color: 'gray' }}>₽</span>
  </div>
);

const DiscountDisplay: React.FC<{ price: number, discount: number }> = ({ price, discount }) => (
  <>
    <Typography.Text delete style={{ fontSize: '2rem', color: 'gray' }}>{pricePrettifier(price)}</Typography.Text>
    <Badge count={`Скидка ${discount}%`} style={{ color: 'black', fontWeight: 'bold' }} color="#faad14" />
  </>
);

export const PriceView: React.FC<IProps> = ({ price, discount }) => {
  const discountPrice = discount > 0 ? price - (price * discount / 100) : price;

  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '2rem' }}>
        <PriceDisplay discountPrice={discountPrice} />
        {discount > 0 && <DiscountDisplay price={price} discount={discount} />}
        <ShoppingCartOutlined style={{ color: 'hotpink' }} />
      </div>
    </React.Fragment>
  );
};