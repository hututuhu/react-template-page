import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { Provider } from 'mobx-react';

import { catchError } from '@/hoc';

import stores from './stores';

import Main from './components/Main';

const Page = (props: RouteConfigComponentProps<void>) => {
  return (
    <Provider {...stores}>
      <Main {...props} />
    </Provider>
  );
};

export default catchError(Page);
