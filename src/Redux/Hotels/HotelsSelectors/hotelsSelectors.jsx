import { createSelector } from '@reduxjs/toolkit';

const getApartments = state => state.booking.apartments;
const getFilter = state => state.booking.filter;
const getCities = state => state.booking.cities;
const getVisibleApartments = createSelector(
  [getApartments, getFilter],
  (items, { city, price }) => {
    return items.filter(item => {
      return (
        item.location.city
          .toLowerCase()
          .includes(city.toLowerCase()) && item.price > price
      );
    });
  },
);
const exported = {
  getApartments,
  getVisibleApartments,
  getCities,
};

export default exported;
