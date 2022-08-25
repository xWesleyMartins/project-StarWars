import React, { useContext } from 'react';
import AppContext from '../context/AppPlanetContext';

function FormFilter() {
  const { filterByName,
    setFilterByName,
    selected,
    setSelected,
    // selectedFilters,
    // setSelectedFilters,
    // editedColumn,
    columnOptions,
    tratamentoDeDados,
  } = useContext(AppContext);

  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          value={ filterByName }
          onChange={ (e) => {
            setFilterByName(e.currentTarget.value);
          } }

        />

        <select
          data-testid="column-filter"
          value={ selected.column }
          onChange={ (e) => setSelected({ ...selected, column: e.target.value }) }
        >
          { columnOptions.map((columnName) => (
            <option value={ columnName } key={ columnName }>
              {columnName}
            </option>
          ))}
        </select>

        <select
          data-testid="comparison-filter"
          value={ selected.comparison }
          onChange={ (e) => setSelected({ ...selected, comparison: e.target.value }) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={ selected.value }
          onChange={ (e) => setSelected({ ...selected, value: e.target.value }) }
        />
        <div>
          <button
            type="button"
            data-testid="button-filter"
            className="add"
            onClick={ tratamentoDeDados }
          >
            Filtrar
          </button>
          {/* <button
            type="button"
            className="clear"
            onClick={ () => {
              setSelectedFilters([]);
              setSelected({
                column: '',
                condition: '',
                value: '',
              });
            } }
          >
            LIMPAR
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default FormFilter;
