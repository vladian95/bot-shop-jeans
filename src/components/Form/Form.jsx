import React, { useCallback, useEffect, useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';

const Form = () => {
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [subject, setSubject] = useState('physical');
  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject,
    };
    tg.sendData(JSON.stringify(data));
  }, [country, street, subject]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'otpravit dannye',
    });
  }, []);

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street]);

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
