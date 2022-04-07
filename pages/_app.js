import React from 'react';
import 'antd/dist/antd.css';
import propTypes from 'prop-types';

const App = ( { Component } ) => {
    return(
        <Component />
    )
}

App.prototype = {
    Component : propTypes.elementType.isRequired,
}

export default App;