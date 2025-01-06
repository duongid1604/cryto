import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import './src/locales/i18n.ts';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AuthProvider} from './src/contexts/AuthContext.tsx';
import AppNavigator from './src/Navigation';

function App(): React.JSX.Element {
  //Hook
  const queryClient = new QueryClient();

  //Render UI
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <AppNavigator />
          </AuthProvider>
        </QueryClientProvider>
      </ApplicationProvider>
    </>
  );
}

export default App;
