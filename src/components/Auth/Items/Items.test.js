// templates/component/test.js

import React from 'react';
import ReactDOM from 'react-dom';
import Items from './Items';

it('It should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Items />, div);
    ReactDOM.unmountComponentAtNode(div);
});