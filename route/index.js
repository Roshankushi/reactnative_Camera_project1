import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Products from '../pages/Products';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Invoice from '../pages/Invoice';

const Route = createStackNavigator(
    {
        Home:Home,
        Cart:Cart,
        Invoice:Invoice,
        Products:Products,
    },
    {
        initialRouteName: "Home"
    }
);
const Routerconfig = createAppContainer(Route);

export default Routerconfig;