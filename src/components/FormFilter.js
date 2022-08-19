import React, { useContext } from 'react';
import AppContext from '../context/AppPlanetContext';

function FormFilter() {
  const { filterByName, setFilterByName } = useContext(AppContext);
  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          value={ filterByName }
          onChange={ ({ target: { value } }) => setFilterByName(value) }
        />
      </form>
    </div>
  );
}

export default FormFilter;
