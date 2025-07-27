import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ScreenContainer from '../commonComponents/ScreenContainer';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../appNavigator';
import Colors from '../constants/ColorConst';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <ScreenContainer headerLabel={'Home'} navigation={navigation}>
      <Text style={styles.welcomeText}>Welcome to the App</Text>
      <Text style={[styles.welcomeText, { fontWeight: 'bold' }]}>
        For check the Navbar please turn your mobile to landscape mode
      </Text>

      <View style={styles.buttonContainer}>
        <Text style={styles.welcomeText}>
          Please select an option from the menu to get started.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Calculator')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go to Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TwoSum')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go to Two Sum</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 25,
    color: Colors.textColor,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 30,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.textColor,
    width: '80%',
  },
  buttonText: {
    color: Colors.backgroundColor,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
