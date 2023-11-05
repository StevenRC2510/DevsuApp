export function NavigationContainer({ children }) {
  return children;
}

export const useNavigation = jest.fn(() => ({
  navigate: jest.fn(),
  goBack: jest.fn(),
}));

export const useRoute = jest.fn(() => ({
  params: jest.fn(),
}));
