import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import ScreenContainer from '../commonComponents/ScreenContainer';
import Colors from '../constants/ColorConst';

interface CalculatorProps {
  testID?: string;
  navigation: any;
}

const Calculator: React.FC<CalculatorProps> = ({
  testID = 'calculator',
  navigation,
}) => {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAdd = (): void => {
    setError(null);

    if (!firstNumber.trim() || !secondNumber.trim()) {
      setError('Please enter both numbers');
      return;
    }

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      setError('Please enter valid numbers');
      return;
    }

    setTotal(num1 + num2);
  };

  const resetCalculator = (): void => {
    setFirstNumber('');
    setSecondNumber('');
    setTotal(null);
    setError(null);
  };

  return (
    <ScreenContainer
      headerLabel={'Calculator'}
      navigation={navigation}
      isBackButtonVisible={true}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        testID={testID}
      >
        <Text style={styles.title}>Adding Two Numbers</Text>

        <TextInput
          testID="firstNumberInput"
          style={styles.input}
          placeholder="Enter first number"
          placeholderTextColor={Colors.placeholderTextColor}
          keyboardType="numeric"
          value={firstNumber}
          onChangeText={setFirstNumber}
          onSubmitEditing={handleAdd}
          inputMode="numeric"
        />

        <TextInput
          testID="secondNumberInput"
          style={styles.input}
          placeholder="Enter second number"
          placeholderTextColor={Colors.placeholderTextColor}
          keyboardType="numeric"
          value={secondNumber}
          onChangeText={setSecondNumber}
          onSubmitEditing={handleAdd}
          inputMode="numeric"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            testID="addButton"
            style={[styles.button, styles.addButton]}
            onPress={handleAdd}
            accessibilityLabel="Add numbers"
          >
            <Text style={styles.buttonText}>Add Numbers</Text>
          </TouchableOpacity>

          <TouchableOpacity
            testID="resetButton"
            style={[styles.button, styles.resetButton]}
            onPress={resetCalculator}
            accessibilityLabel="Reset calculator"
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        {error && (
          <Text testID="errorText" style={styles.errorText}>
            {error}
          </Text>
        )}

        {total !== null && (
          <Text testID="totalText" style={styles.totalText}>
            Total: <Text style={styles.totalValue}>{total.toFixed(3)}</Text>
          </Text>
        )}
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: Colors.cardBackgroundColor,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: Colors.cardTextColor,
  },
  input: {
    height: 50,
    borderColor: Colors.inputBorderColor,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: Colors.backgroundColor,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  addButton: {
    backgroundColor: Colors.blueButtonColor,
  },
  resetButton: {
    backgroundColor: Colors.redButtonColor,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: Colors.redButtonColor,
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 14,
  },
  totalText: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.cardTextColor,
  },
  totalValue: {
    fontWeight: 'bold',
    color: Colors.blueHeadingColor,
  },
});

export default Calculator;
