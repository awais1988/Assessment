import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Calculator from '../src/screens/Calculator';

const mockNavigation = {
  goBack: jest.fn(),
};

describe('Calculator', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <Calculator navigation={mockNavigation} />,
    );
    expect(getByText('Adding Two Numbers')).toBeTruthy();
    expect(getByPlaceholderText('Enter first number')).toBeTruthy();
    expect(getByPlaceholderText('Enter second number')).toBeTruthy();
  });

  it('adds numbers correctly', () => {
    const { getByText, getByTestId } = render(
      <Calculator navigation={mockNavigation} />,
    );

    const firstInput = getByTestId('firstNumberInput');
    const secondInput = getByTestId('secondNumberInput');
    const addButton = getByTestId('addButton');

    fireEvent.changeText(firstInput, '2');
    fireEvent.changeText(secondInput, '3');

    fireEvent.press(addButton);

    const totalText = getByTestId('totalText');
    expect(totalText).toHaveTextContent('Total: 5.000');
  });

  it('resets the inputs', () => {
    const { getByText, getByTestId } = render(
      <Calculator navigation={mockNavigation} />,
    );

    const firstInput = getByTestId('firstNumberInput');
    const secondInput = getByTestId('secondNumberInput');
    const resetButton = getByTestId('resetButton');

    fireEvent.changeText(firstInput, '5');
    fireEvent.changeText(secondInput, '3');

    fireEvent.press(resetButton);
    expect(firstInput.props.value).toBe('');
    expect(secondInput.props.value).toBe('');
  });
});
