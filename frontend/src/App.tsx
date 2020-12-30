import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Dashboard from './pages/Dashboard';
import FormAddNew from './pages/FormAddNew';
import FormUpdate from './pages/FormUpdate';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Route path="/" component={Dashboard} exact />
        <Route path="/addnew" component={FormAddNew} />
        <Route path="/update/:id" component={FormUpdate} />
      </div>
    </BrowserRouter>
  );
};

export default App;
