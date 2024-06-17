import { Card, Divider, Tag, Typography } from 'antd';
import React from 'react';
import { IElectronics } from '../../types.ts';
import { PriceView } from './PriceView.tsx';
import { productImage, ProductImage } from './ProductImage.tsx';
import { ProductInfo } from './ProductInfo.tsx';

interface IProductViewProps {
  item: IElectronics;
}

export const ProductView: React.FC<IProductViewProps> = ({ item }) => {
  const { color, title, processor, price, discount, promotion } = item;

  return (
    <Card bordered={false} cover={<ProductImage src={productImage} alt={title} />}>
      <Divider />
      <ProductInfo color={color} processor={processor} />
      <Typography.Paragraph
        style={{
          textAlign: 'center',
          fontSize: '1.2rem',
          color: '#1890ff',
          minHeight: '4rem',
        }}
      >
        {promotion && <Tag color="green">Акция!</Tag>}{title} - {processor}
      </Typography.Paragraph>
      <PriceView price={price} discount={discount} />
    </Card>
  );
};