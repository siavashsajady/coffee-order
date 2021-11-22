import React, { Fragment } from 'react';
import CoffeesSummary from './CoffesSummary';
import AvailableCoffees from './AvailableCoffees';

const Coffees = () => {
  return (
    <Fragment>
      <CoffeesSummary />
      <AvailableCoffees />
    </Fragment>
  );
};

export default Coffees;
