import styles from './CoffesSummary.module.css';

const CoffesSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Coffee, Delivered to you!</h2>
      <p>
        Choose your favorite Coffee from our broad selection of available
        Coffees and enjoy a delicious drink at home.
      </p>
      <p>
        All our coffees are maked with high-quality ingredients, just-in-time
        and of course by experienced barista!
      </p>
    </section>
  );
};

export default CoffesSummary;
