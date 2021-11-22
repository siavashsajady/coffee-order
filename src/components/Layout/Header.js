import React, { Fragment } from 'react';

import coffeeImage from '../../assets/coffee.jpg';
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactCoffee</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={coffeeImage} alt='Delicious coffee' />
      </div>
    </Fragment>
  );
};

export default Header;
