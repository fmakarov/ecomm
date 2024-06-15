import React from 'react';
import { IGoods } from '../types.ts';
import { Row, Col, Card, Divider, Typography} from 'antd';
import { ShoppingCartOutlined} from '@ant-design/icons'
import { Electronic } from './Catalog/Electronic.tsx';

const catalogType: TCatalog[] = [
  { _id: 1, title: "одежда" },
  { _id: 2, title: "электроника" },
  { _id: 3, title: "мебель" },
  { _id: 4, title: "продукты"},
];

const goods: IGoods[] = [
  {
    _id: 1,
    name: "Ноутбук Huawei MateBook",
    price: "199990",
    catalogType: 2,
    color: "red",
    power: "Intel Core i5 12450H 2 ГГц (4.4 ГГц, в режиме Turbo)",
    productImage:
      "https://c.dns-shop.ru/thumb/st1/fit/200/200/715cb29f15be29f29e9d92d198d35310/5e1044853a04608a581af844e6af50af49ddddbbe1947c42bba95c74101cb825.jpg.webp",
  },
  {
    _id: 2,
    name: "Ноутбук Huawei MateBook X Pro VanGoghH 53014ANN",
    price: "199990",
    catalogType: 2,
    productImage:
      "https://c.dns-shop.ru/thumb/st1/fit/200/200/715cb29f15be29f29e9d92d198d35310/5e1044853a04608a581af844e6af50af49ddddbbe1947c42bba95c74101cb825.jpg.webp",
  },
  {
    _id: 3,
    name: "Ноутбук Huawei MateBook X Pro VanGoghH 53014ANN",
    price: "199990",
    catalogType: 2,
    productImage:
      "https://c.dns-shop.ru/thumb/st1/fit/200/200/715cb29f15be29f29e9d92d198d35310/5e1044853a04608a581af844e6af50af49ddddbbe1947c42bba95c74101cb825.jpg.webp",
  },
  {
    _id: 4,
    name: "Ноутбук Huawei MateBook X Pro VanGoghH 53014ANN",
    price: "199990",
    catalogType: 2,
    productImage:
      "https://c.dns-shop.ru/thumb/st1/fit/200/200/715cb29f15be29f29e9d92d198d35310/5e1044853a04608a581af844e6af50af49ddddbbe1947c42bba95c74101cb825.jpg.webp",
  },
  {
    _id: 5,
    name: "Ноутбук Huawei MateBook X Pro VanGoghH 53014ANN",
    price: "199990",
    catalogType: 2,
    productImage:
      "https://c.dns-shop.ru/thumb/st1/fit/200/200/715cb29f15be29f29e9d92d198d35310/5e1044853a04608a581af844e6af50af49ddddbbe1947c42bba95c74101cb825.jpg.webp",
  },
  {
    _id: 6,
    name: "Ноутбук Huawei MateBook X Pro VanGoghH 53014ANN",
    price: "199990",
    catalogType: 2,
    productImage:
      "https://c.dns-shop.ru/thumb/st1/fit/200/200/715cb29f15be29f29e9d92d198d35310/5e1044853a04608a581af844e6af50af49ddddbbe1947c42bba95c74101cb825.jpg.webp",
  },
  {
    _id: 7,
    name: "Ноутбук Huawei MateBook X Pro VanGoghH 53014ANN",
    price: "199990",
    catalogType: 2,
    productImage:
      "https://c.dns-shop.ru/thumb/st1/fit/200/200/715cb29f15be29f29e9d92d198d35310/5e1044853a04608a581af844e6af50af49ddddbbe1947c42bba95c74101cb825.jpg.webp",
  },
  {
    _id: 8,
    name: "Ноутбук Huawei MateBook X Pro VanGoghH 53014ANN",
    price: "199990",
    catalogType: 2,
    productImage:
      "https://c.dns-shop.ru/thumb/st1/fit/200/200/715cb29f15be29f29e9d92d198d35310/5e1044853a04608a581af844e6af50af49ddddbbe1947c42bba95c74101cb825.jpg.webp",
  },
];

export const Goods = () => {

  
  return (
    <>
      <Row gutter={[16, 16]} justify="center" align="middle">
        {/* {goods.map(({_id, power, price, productImage, color, name}) => {
          return (
            <Col key={_id} span={6}>
              <Card
                bordered={false}
                cover={
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={productImage} style={{ padding: 24 }} />
                  </div>
                }
              >
                <Divider />
                <div style={{ color: "grey", marginBottom: 10 }}>
                  <Row gutter={[2, 8]}>
                    <Col span={6}>Цвет</Col>
                    <Col span={12}>{color ?? "Данные отсутствуют"}</Col>
                  </Row>
                  <Row gutter={[2, 8]}>
                    <Col span={6}>Процессор</Col>
                    <Col span={12}>
                      <Typography.Text ellipsis>
                        {power ?? "Данные отсутствуют"}
                      </Typography.Text>
                    </Col>
                  </Row>
                </div>
                <Typography.Paragraph
                  style={{
                    textAlign: "center",
                    fontSize: "1.2rem",
                    color: "#1890ff",
                    minHeight: "4rem",
                  }}
                >
                  {name}
                </Typography.Paragraph>
                <div
                  style={{
                    fontSize: "2rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 600,
                    }}
                  >
                    <span>{pricePrettifier(price)}</span>
                    <span style={{ color: "gray" }}>₽</span>
                  </div>
                  <ShoppingCartOutlined style={{ color: "hotpink" }} />
                </div>
              </Card>
            </Col>
          );
        })} */}
        <Electronic electronicGoods={goods} />
      </Row>
    </>
  );
}