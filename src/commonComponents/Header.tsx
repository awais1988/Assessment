import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/ColorConst';
import Navbar from './Navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header: React.FC<{
  headerLabel?: string;
  isBackButtonVisible?: boolean;
  navigation: any;
}> = ({ headerLabel, isBackButtonVisible = false, navigation }) => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 768;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={[styles.container, isLargeScreen && styles.desktopContainer]}>
      {!isLargeScreen && (
        <>
          {isBackButtonVisible && (
            <View style={styles.backButtonContainer}>
              <TouchableOpacity onPress={navigation.goBack}>
                <Icon
                  name="arrow-back-ios"
                  size={28}
                  color={Colors.textColor}
                />
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.labelContainer}>
            {headerLabel && (
              <Text style={styles.labelStyle}>{headerLabel}</Text>
            )}
          </View>
        </>
      )}

      {!isLargeScreen && (
        <TouchableOpacity
          onPress={toggleMenu}
          style={styles.menuButton}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Icon name="menu" size={28} color={Colors.textColor} />
        </TouchableOpacity>
      )}

      <Navbar
        title={headerLabel}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        isLargeScreen={isLargeScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    paddingHorizontal: 15,
    position: 'relative',
  },
  desktopContainer: {
    height: 80,
    paddingHorizontal: 24,
  },
  backButtonContainer: {
    position: 'absolute',
    left: 15,
  },
  labelContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontSize: 20,
    color: Colors.textColor,
    fontWeight: 'bold',
  },
  navbarContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    justifyContent: 'center',
  },
  txtColor: {
    color: Colors.textColor,
  },
  menuButton: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
});

export default Header;
