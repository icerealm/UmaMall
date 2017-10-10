import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../components/home';
import Navigation from '../components/navigation';
import ProductType from '../components/producttype';
import ProductTypeNew from '../components/producttype_new';
import ProductTypeUpdate from '../components/producttype_update';
import Product from '../components/product';
import ProductNew from '../components/product_new';
import ProductUpdate from '../components/product_update';
import Stock from '../components/stock';


export const router = () => {
    return (
        <Router>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/producttype/new" component={ProductTypeNew} />
                    <Route path="/producttype/:id" component={ProductTypeUpdate} />
                    <Route path="/producttype" component={ProductType} />
                    <Route path="/product/new" component={ProductNew} />
                    <Route path="/product/:id" component={ProductUpdate} />
                    <Route path="/product" component={Product} />
                    <Route path="/stock" component={Stock} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}