import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { twoSum } from '../utils/twoSum';
import ScreenContainer from '../commonComponents/ScreenContainer';
import Colors from '../constants/ColorConst';

interface TwoSumProps {
  navigation: any;
}

const TwoSum: React.FC<TwoSumProps> = ({ navigation }) => {
  const [numbersInput, setNumbersInput] = useState<string>('');
  const [targetInput, setTargetInput] = useState<string>('');
  const [result, setResult] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = (): void => {
    setError(null);
    setResult([]);
    if (!numbersInput.trim() || !targetInput.trim()) {
      setError('Please enter both numbers array and target');
      return;
    }

    try {
      const numbers = numbersInput
        .split(',')
        .map(num => num.trim())
        .filter(num => num !== '')
        .map(num => {
          const parsed = parseFloat(num);
          if (isNaN(parsed)) throw new Error('Invalid number in array');
          return parsed;
        });

      const target = parseFloat(targetInput);
      if (isNaN(target)) throw new Error('Invalid target number');

      const indices = twoSum(numbers, target);
      setResult(indices);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Invalid input';
      setError(errorMessage);
      setResult([]);
    }
  };

  const resetForm = (): void => {
    setNumbersInput('');
    setTargetInput('');
    setResult([]);
    setError(null);
  };

  return (
    <ScreenContainer
      headerLabel={'Two Sum'}
      navigation={navigation}
      isBackButtonVisible={true}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Text style={styles.title}>Two Sum II - Input Array Is Sorted</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter numbers separated by commas (e.g., 2,7,11,15)"
          placeholderTextColor={Colors.placeholderTextColor}
          value={numbersInput}
          onChangeText={setNumbersInput}
          multiline
        />

        <TextInput
          style={styles.input}
          placeholder="Enter target number"
          placeholderTextColor={Colors.placeholderTextColor}
          keyboardType="numeric"
          value={targetInput}
          onChangeText={setTargetInput}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleCalculate}
            style={[styles.button, styles.addButton]}
          >
            <Text style={styles.buttonText}>Find Indices</Text>
          </TouchableOpacity>
          <View style={styles.buttonSpacer} />
          <TouchableOpacity
            onPress={resetForm}
            style={[styles.button, styles.resetButton]}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        {error && <Text style={styles.errorText}>{error}</Text>}

        {result.length > 0 && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Output: [{result.join(', ')}]</Text>
            <Text style={styles.explanationText}>
              The sum of {result.map(i => `numbers[${i - 1}]`).join(' and ')} is{' '}
              {targetInput}
            </Text>
          </View>
        )}
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.cardBackgroundColor,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: Colors.cardTextColor,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: Colors.cardTextColor,
    textAlign: 'center',
  },
  input: {
    height: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: Colors.backgroundColor,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    color: Colors.backgroundColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSpacer: {
    width: 15,
  },
  errorText: {
    color: Colors.redButtonColor,
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 16,
  },
  resultContainer: {
    backgroundColor: Colors.blueBackgroundColor,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.blueHeadingColor,
    textAlign: 'center',
    marginBottom: 5,
  },
  explanationText: {
    fontSize: 14,
    color: Colors.cardTextColor,
    textAlign: 'center',
  },
});

export default TwoSum;
