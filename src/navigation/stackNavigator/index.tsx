import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '@helpers/colors';

import Header from '@components/header';

import { FinancialProductRoutes, routes } from '@navigation/routes';

const Stack = createNativeStackNavigator();

function StackRoutes() {
  const screenOptionsConfig = {
    // eslint-disable-next-line react/no-unstable-nested-components
    header: () => <Header />,
    contentStyle: {
      borderTopColor: COLORS.gray,
      borderTopWidth: 1,
      backgroundColor: COLORS.white,
    },
  };

  return (
    <Stack.Navigator
      initialRouteName={FinancialProductRoutes.FINANCIAL_PRODUCT_LIST}
      screenOptions={screenOptionsConfig}
    >
      {routes.map((route, index) => (
        <Stack.Screen
          key={`route-$headerShown{route.name}-${index + 1}`}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...route}
        />
      ))}
    </Stack.Navigator>
  );
}

export default StackRoutes;
