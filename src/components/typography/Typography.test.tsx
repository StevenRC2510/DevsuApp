/* eslint-disable */
//@ts-nocheck

import { screen } from '@testing-library/react-native';
import { toHaveStyle } from '@testing-library/jest-native';

import Typography from '@components/typography';
import { COLORS } from '@helpers/colors';
import { TypographyProps, VariantStyles } from '@components/typography/types';
import { makeWrapper } from '@utils/testing/wrapper';

describe('Typography::Component', () => {
  expect.extend({ toHaveStyle });

  test('Should render the component correctly', () => {
    const defaultProps: TypographyProps = {
      text: 'testing',
    };

    const testContainer = makeWrapper(Typography, { defaultProps });
    testContainer();

    const typographyComponent = screen.getByText(defaultProps.text);

    expect(typographyComponent).toBeDefined();
  });

  test('Should have the correct error styles', () => {
    const defaultProps: TypographyProps = {
      text: 'testing',
      variant: VariantStyles.ERROR,
    };

    const testContainer = makeWrapper(Typography, { defaultProps });
    testContainer();

    const typographyComponent = screen.getByText(defaultProps.text);

    expect(typographyComponent).toHaveStyle({
      fontSize: 12,
      color: COLORS.red,
    });
  });

  test('Should have the correct title styles', () => {
    const defaultProps: TypographyProps = {
      text: 'testing',
      variant: VariantStyles.TITLE,
    };

    const testContainer = makeWrapper(Typography, { defaultProps });
    testContainer();

    const typographyComponent = screen.getByText(defaultProps.text);

    expect(typographyComponent).toHaveStyle({
      fontSize: 18,
      color: COLORS.black,
    });
  });

  test('Should have the correct subtitle styles', () => {
    const defaultProps: TypographyProps = {
      text: 'testing',
      variant: VariantStyles.SUBTITLE,
    };

    const testContainer = makeWrapper(Typography, { defaultProps });
    testContainer();

    const typographyComponent = screen.getByText(defaultProps.text);

    expect(typographyComponent).toHaveStyle({
      fontSize: 14,
      color: COLORS.black,
    });
  });

  test('Should have the correct normal styles', () => {
    const defaultProps: TypographyProps = {
      text: 'testing',
      variant: VariantStyles.NORMAL,
    };

    const testContainer = makeWrapper(Typography, { defaultProps });
    testContainer();

    const typographyComponent = screen.getByText(defaultProps.text);

    expect(typographyComponent).toHaveStyle({
      fontSize: 12,
      color: COLORS.gray2,
    });
  });
});
