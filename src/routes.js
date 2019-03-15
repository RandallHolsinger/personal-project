import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products'
import ProductView from './components/ProductView/ProductView'
import Private from './components/Private/Private'

export default (
    <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/private' component={Private}/>
         <Route exact path='/products' component={Products}/>
         <Route path='/product/view/:productId' component={ProductView}/>
    </Switch>
)

