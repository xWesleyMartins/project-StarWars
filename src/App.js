import React from 'react';
import './App.css';
import Table from './components/Table';
import FormFilter from './components/FormFilter';
import AppProvider from './context/AppPlanetProvider';

function App() {
  return (
    <AppProvider>
      <div>
        <FormFilter />
        <Table />
      </div>
    </AppProvider>
  );
}

export default App;
