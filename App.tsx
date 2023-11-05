import React from 'react';
import { SafeAreaView } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from '@navigation/stackNavigator';
import FinancialProductProvider from '@context/financialProduct';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <FinancialProductProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <StackRoutes />
          </SafeAreaView>
        </FinancialProductProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
