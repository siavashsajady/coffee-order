import CoffeeItem from './CoffeeItem/CoffeeItem';
import Card from '../UI/Card';
import styles from './AvailableCoffees.module.css';

const COFFES = [
  {
    id: 'c1',
    name: 'Latte',
    description:
      'latte is comprised of a shot of espresso and steamed milk with just a touch of foam',
    price: 17.99,
  },
  {
    id: 'c2',
    name: 'Cappuccino',
    description:
      'made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top',
    price: 19.3,
  },
  {
    id: 'c3',
    name: 'Americano',
    description: 'consists of an espresso shot diluted in hot water',
    price: 14.99,
  },
  {
    id: 'c4',
    name: 'Mocha',
    description: ' is a chocolate espresso drink with steamed milk and foam',
    price: 16.99,
  },
];

const AvailableCoffees = () => {
  const coffeesList = COFFES.map((coffee) => (
    <CoffeeItem
      key={coffee.id}
      id={coffee.id}
      name={coffee.name}
      description={coffee.description}
      price={coffee.price}
    />
  ));
  return (
    <section className={styles.coffees}>
      <Card>
        <ul>{coffeesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableCoffees;
