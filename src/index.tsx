import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module';
// import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
// import Icon16 from 'public/images_png/favicon_16x16.png';
// import Icon32 from 'public/images_png/favicon_32x32.png';
// import IconTouch from 'public/images_png/favicon_big.png';
// import Safari from 'public/images_svg/favicon_for_safari.svg';
import Routes from '@/router/routes';
import store from '@/store';
import '@/index.scss';

const tagManagerArgs = { gtmId: 'GTM-K3GMPSF' };
TagManager.initialize(tagManagerArgs);

function Parent(): ReactElement {
  console.log(document.body);
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

ReactDOM.render(<Parent />, document.getElementById('app'));
