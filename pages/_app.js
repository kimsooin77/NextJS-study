import React from 'react';
import 'antd/dist/antd.css';
import propTypes from 'prop-types';
import wrapper from '../store/configureStore';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = ( { Component } ) => {
    return(
        <Component />
    )
}

App.propTypes = {
    Component : propTypes.elementType.isRequired,
}

export function reportWebVitals(metric) {
    console.log(metric);
}

export default wrapper.withRedux(App);