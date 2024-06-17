import React, { ReactNode } from 'react';
import { Layout, Menu } from 'antd';
import { Goods } from './components/Goods';
import { Link, Route, Routes } from 'react-router-dom';
import { ProductDetail } from './components/ProductDetail/ProductDetail';

interface MenuItem {
  key: string;
  label: string | ReactNode;
}

const { Header, Content, Footer } = Layout;
const menuNav: MenuItem[] = [
  {
    key: '1', label: (
      <Link to="/">Главная</Link>
    ),
  },
  {
    key: '2', label: (
      <Link to="/catalog">Каталог</Link>
    ),
  },
];

const App: React.FC = () => {
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={menuNav}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <div style={{ padding: 24, minHeight: '50vh' }}>
          <Routes location={location}>
            <Route path="/" element={<Goods />} />
            <Route path="/catalog" element={<Goods />} />
            <Route path="product/:productId" element={<ProductDetail />} />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default App;