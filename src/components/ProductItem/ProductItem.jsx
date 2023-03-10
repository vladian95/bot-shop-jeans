import React from 'react';
import Button from '../Button/Button';
import './ProductItem.css';

const ProductItem = ({ product, className, onAdd }) => {
  const onAddhandler = () => {
    onAdd(product);
  };

  return (
    <div className={'product ' + className}>
      <div className={'img'} />
      <div className={'title'}>{product.title}</div>
      <div className={'description'}>{product.description}</div>
      <div className={'price'}>
        <span>
          Стоимость: <b>{product.price}</b>
        </span>
      </div>
      <Button className={'add-btn'} onClick={onAddhandler}>
        Добавить в корзину
      </Button>
    </div>
  );
};

export default ProductItem;
