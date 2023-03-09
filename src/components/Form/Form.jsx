import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [subject, setSubject] = useState('physical');

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className={'form'}>
      <h3>введите наши данные</h3>
      <input
        className={'input'}
        type="text"
        placeholder={'Strana'}
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className={'input'}
        type="text"
        placeholder={'Ulica'}
        value={street}
        onChange={onChangeStreet}
      />
      <select className={'select'} value={subject} onChange={onChangeSubject}>
        <option value={'physical'}>физ лицо </option>
        <option value={'legal'}>юр лицо</option>
      </select>
    </div>
  );
};

export default Form;
