import React from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';
import { useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';

const products = [
  {
    id: '1',
    title: 'джинсы',
    price: 5000,
    description: 'синего цвета прямые',
  },
  {
    id: '2',
    title: 'джинсы',
    price: 4000,
    description: 'синего цвета прямые',
  },
  {
    id: '3',
    title: 'джинсы',
    price: 3000,
    description: 'синего цвета прямые',
  },
  {
    id: '4',
    title: 'джинсы',
    price: 2000,
    description: 'синего цвета прямые',
  },
  {
    id: '5',
    title: 'джинсы',
    price: 1000,
    description: 'синего цвета прямые',
  },
  {
    id: '6',
    title: 'джинсы',
    price: 7000,
    description: 'синего цвета прямые',
  },
  {
    id: '7',
    title: 'джинсы',
    price: 8000,
    description: 'синего цвета прямые',
  },
  {
    id: '8',
    title: 'джинсы',
    price: 9000,
    description: 'синего цвета прямые',
  },
];

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);
  const { tg } = useTelegram();

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }
    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: 'купить ${getTotalPrice(newItems)}',
      });
    }
  };

  return (
    <div className={'list'}>
      {products.map((item) => (
        <ProductItem product={item} onAdd={onAdd} className={'item'} />
      ))}
    </div>
  );
};

export default ProductList;
