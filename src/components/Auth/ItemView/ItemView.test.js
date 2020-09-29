// templates/component/test.js

import React from 'react';
import ReactDOM from 'react-dom';
import ItemView from './ItemView';

it('It should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ItemView />, div);
    ReactDOM.unmountComponentAtNode(div);
});