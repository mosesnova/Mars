import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import { FetchCustomer } from './components/FetchCustomer';

import { AddCustomer } from './components/AddCustomer'; 

import { FetchSales } from './components/FetchSales';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata' component={FetchData} />
    <Route path='/fetchcustomer' component={FetchCustomer} />

    <Route path='/addcustomer' component={AddCustomer} />

    <Route path='/customer/edit/:id' component={AddCustomer} /> 
    <Route path='/fetchsales' component={FetchSales} />


</Layout>;
