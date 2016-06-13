import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import {Layout} from './components/layout';

ReactDOM.render(
    <Layout>
        <DevTools/>
    </Layout>
    , document.getElementById('app')
);
