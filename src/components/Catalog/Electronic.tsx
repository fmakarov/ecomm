import React from "react";
import { Row, Col, Card, Divider, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { pricePrettifier } from "../../helpers/pricePrettifier";

export const Electronic = ({ electronicGoods }) => {
  return (
    <React.Fragment>
      {electronicGoods.map(({ _id, power, price, productImage, color, name }) => {
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
      })}
    </React.Fragment>
  );
}