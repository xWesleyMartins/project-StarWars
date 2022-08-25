import React, { useContext } from 'react';
import AppContext from '../context/AppPlanetContext';
// import { tratamentoDeDados } from '../context/AppPlanetProvider';

function Table() {
  const { planets, filterByName } = useContext(AppContext);
  const tHeadRows = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tHeadRows.map((infosRows) => <th key={ infosRows }>{infosRows}</th>)}
          </tr>
        </thead>
        <tbody>
          { planets.filter((valueToFilter) => valueToFilter.name.toLowerCase()
            .includes(filterByName.toLowerCase()))
            .map((infoPlanet) => (
              <tr key={ infoPlanet.name }>
                <td>{infoPlanet.name}</td>
                <td>{infoPlanet.rotation_period}</td>
                <td>{infoPlanet.orbital_period}</td>
                <td>{infoPlanet.diameter}</td>
                <td>{infoPlanet.climate}</td>
                <td>{infoPlanet.gravity}</td>
                <td>{infoPlanet.terrain}</td>
                <td>{infoPlanet.surface_water}</td>
                <td>{infoPlanet.population}</td>
                <td>{infoPlanet.films}</td>
                <td>{infoPlanet.created}</td>
                <td>{infoPlanet.edited}</td>
                <td>{infoPlanet.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
