import React from 'react';
import 'antd/dist/antd.css';
import propTypes from 'prop-types';
import wrapper from '../store/configureStore';

const App = ( { Component } ) => {
    return(
        <Component />
    )
}

App.prototype = {
    Component : propTypes.elementType.isRequired,
}

export default wrapper.withRedux(App);