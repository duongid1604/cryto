import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import './src/locales/i18n.ts';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import Login from './src/screens/Login';

function App(): React.JSX.Element {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {/*<AppNavigator/>*/}
        <Login />
      </ApplicationProvider>
    </>
  );
}

export default App;
