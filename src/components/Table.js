import React, { useContext } from 'react';
import AppContext from '../context/AppPlanetContext';

function Table() {
  const { planets } = useContext(AppContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((infoPlanet) => (
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
