import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Hotels.module.scss';
import actions from '../../Redux/Hotels/HotelsActions/hotelsActions';

export default function Filter({ apartments }) {
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const getCity = evt => {
    setCity(evt.target.value);
  };
  const getPrice = evt => {
    setPrice(evt.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => dispatch(actions.actionFilter({ city, price })), [
    city,
    dispatch,
    price,
  ]);
  return (
    <>
      <div className={styles.filterContainer}>
        <label>
          <span>Choose city</span>
          <input
            type="text"
            name="city"
            defaultValue={city}
            onChange={getCity}
          />
        </label>
        <label>
          <span>Choose price</span>
          <input
            type="text"
            name="price"
            defaultValue={price}
            onChange={getPrice}
          />
        </label>
      </div>
    </>
  );
}
