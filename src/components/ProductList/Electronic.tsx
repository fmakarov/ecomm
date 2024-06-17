import React from 'react';
import { Badge, Col } from 'antd';
import { IElectronics } from '../../types.ts';
import { ProductView } from '../ProductView/ProductView.tsx';
import { calculateDownPayment } from '../../helpers/pricePrettifier.ts';
import { Link } from 'react-router-dom';

interface IProps {
  electronicGoods: IElectronics[];
}

export const Electronic: React.FC<IProps> = ({ electronicGoods }) => {
  return (
    <React.Fragment>
      {electronicGoods.map((item) => {
        const id = item._id.toString();
        return (
          <Col span={6} key={id}>
            <Link to={`/product/${id}`}>
              {item.downPayment ? (
                <Badge.Ribbon text={`от ${calculateDownPayment(item.price)}₽ в мес`} color="magenta">
                  <ProductView item={item} />
                </Badge.Ribbon>
              ) : (
                <ProductView item={item} />
              )}

            </Link>
          </Col>
        );
      })}
    </React.Fragment>
  );
};