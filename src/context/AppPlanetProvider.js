import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppPlanetContext';
import API from '../ultils/planetAPI';

function AppProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getResultsApi = async () => {
      const response = await API();
      setPlanets(response);
    };
    getResultsApi();
  }, []);

  return (
    <AppContext.Provider
      value={ { planets } }
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = { children: PropTypes.node }.isRequired;

export default AppProvider;
