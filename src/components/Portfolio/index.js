import React from 'react';
import CardList from '../CardList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <CardList category={currentCategory.name} />
    </section>
  );
}
export default Portfolio;
