import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppPlanetContext';
import API from '../ultils/planetAPI';

function AppProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [apiPure, setApiPure] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
    // 'teste',
  ]);

  // const tratarOptions = (option) => !selectedFilters
  //   .find((filtro) => option === filtro.column);

  // const editedColumn = () => columnOptions.filter(tratarOptions);

  const [selected, setSelected] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const tratamentoDeDados = () => {
    const piruleibe = [...selectedFilters, selected];
    setSelectedFilters(piruleibe);
    piruleibe.forEach((element) => {
      switch (element.comparison) {
      case 'maior que':
        setPlanets(planets
          .filter((el) => Number(el[element.column]) > Number(element.value)));
        break;
      case 'menor que':
        setPlanets(planets
          .filter((el) => Number(el[element.column]) < Number(element.value)));
        break;
      case 'igual a':
        setPlanets(planets
          .filter((el) => Number(el[element.column]) === Number(element.value)));
        break;
      default:
        return true;
      }
      const columnFilter = columnOptions.filter((filColumn) => filColumn
      !== selected.column);
      setColumnOptions(columnFilter);
      console.log(element);
      setSelected({ ...selected, column: columnFilter[0] });
    });
  };

  useEffect(() => {
    const getResultsApi = async () => {
      const response = await API();
      setPlanets(response);
      setApiPure(response);
    };
    getResultsApi();
  }, []);

  const contextValue = {
    planets,
    setPlanets,
    apiPure,
    filterByName,
    setFilterByName,
    selected,
    setSelected,
    selectedFilters,
    setSelectedFilters,
    columnOptions,
    tratamentoDeDados,

  };

  return (
    <AppContext.Provider
      value={ contextValue }
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = { children: PropTypes.node }.isRequired;

export default AppProvider;
