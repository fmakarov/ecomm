import React from 'react';

export const productImage: string = 'https://c.dns-shop.ru/thumb/st4/fit/200/200/435af658ffc1ce1d753a54fa28fc6b84/3eddffc9e6550be8d81af851c81f7fec9e2a02eb0fa8f5181218488689d4b13a.jpg.webp';

export const ProductImage: React.FC<{ src: string, alt: string }> = ({ src, alt }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={src} style={{ padding: 24 }} alt={alt} />
  </div>
);