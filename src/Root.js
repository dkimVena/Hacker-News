import React from 'react';
import { Provider } from 'react-redux';

import router from './router';
import store from './store';

const Root = () => <Provider store={store}>{router}</Provider>;

export default Root;
