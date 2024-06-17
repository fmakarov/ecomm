import React from 'react';
import { Badge, Col, Row, Space, Typography } from 'antd';

export const ProductInfo: React.FC<{ color: Array<string>, processor: string }> = ({ color, processor }) => {
  const colors: Set<string> = new Set(color);
  return <React.Fragment>
    <div style={{ color: 'grey', marginBottom: 10 }}>
      <Row gutter={[2, 8]}>
        <Col span={6}>Цвет</Col>
        <Col span={12}>
          <Space direction="horizontal">
            {Array.from(colors).map((colorItem) => {
              return <Badge key={colorItem} color={colorItem} text={colorItem} />;
            })}
          </Space>
        </Col>
      </Row>
      <Row gutter={[2, 8]}>
        <Col span={6}>Процессор</Col>
        <Col span={12}>
          <Typography.Text ellipsis>
            {processor ?? 'Данные отсутствуют'}
          </Typography.Text>
        </Col>
      </Row>
    </div>
  </React.Fragment>;
};