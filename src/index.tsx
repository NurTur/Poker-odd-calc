import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module';
import { Provider } from 'react-redux';
import Routes from '@/router/routes';
import store from '@/store';
import '@/index.scss';

const tagManagerArgs = { gtmId: 'GTM-K3GMPSF' };
TagManager.initialize(tagManagerArgs);

function Parent(): ReactElement {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

ReactDOM.render(<Parent />, document.getElementById('app'));
