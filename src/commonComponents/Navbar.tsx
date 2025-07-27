import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Pressable,
  useWindowDimensions,
  Easing,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/ColorConst';

interface NavItem {
  label: string;
  href: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Showcase', href: '/showcase' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
  { label: 'Analytics', href: '/analytics' },
  { label: 'Templates', href: '/templates' },
  { label: 'Enterprise', href: '/enterprise' },
];

interface NavbarProps {
  title?: string;
  navItems?: NavItem[];
  toggleMenu: () => void;
  isMenuOpen: boolean;
  isLargeScreen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  title = 'AEON',
  navItems = DEFAULT_NAV_ITEMS,
  toggleMenu,
  isMenuOpen,
  isLargeScreen,
}) => {
  const { width } = useWindowDimensions();
  const slideAnim = useRef(new Animated.Value(width)).current;
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isMenuOpen || isLargeScreen ? 0 : width,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [isMenuOpen, isLargeScreen, width]);

  if (isLargeScreen) {
    return (
      <View style={styles.desktopNavbar}>
        <View style={styles.desktopNavbarWrapper}>
          <Text style={styles.desktopLogo}>{title}</Text>
          <View style={styles.desktopNavItems}>
            {navItems.map((item, index) => (
              <Pressable
                key={`${item.label}-${index}`}
                style={styles.desktopNavItem}
              >
                <Text style={styles.desktopNavText}>{item.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>
        <View style={styles.desktopSearchContainer}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={Colors.placeholderTextColor}
            style={styles.desktopSearchInput}
          />
          <TouchableOpacity style={styles.desktopSearchIcon}>
            <Icon name="search" size={20} color={Colors.textColor} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <>
      <Animated.View
        style={[
          styles.drawer,
          {
            width: width,
            transform: [{ translateX: slideAnim }],
            right: 0,
          },
        ]}
      >
        <View style={styles.drawerHeader}>
          <Text style={styles.drawerTitle}>{title}</Text>
          <View style={styles.drawerHeaderIcons}>
            <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
              <Icon name="search" size={24} color={Colors.textColor} />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleMenu}>
              <Icon name="close" size={24} color={Colors.textColor} />
            </TouchableOpacity>
          </View>
        </View>
        {showSearch && (
          <View style={styles.drawerSearch}>
            <TextInput
              placeholder="Search"
              placeholderTextColor={Colors.placeholderTextColor}
              style={styles.drawerSearchInput}
            />
            <TouchableOpacity style={styles.drawerSearchIcon}>
              <Icon name="search" size={24} color={Colors.textColor} />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.drawerItems}>
          {navItems.map((item, index) => (
            <Pressable
              key={`${item.label}-${index}`}
              style={styles.drawerItem}
              onPress={toggleMenu}
            >
              <Text style={styles.drawerItemText}>{item.label}</Text>
            </Pressable>
          ))}
        </View>
      </Animated.View>

      {isMenuOpen && (
        <Pressable style={[styles.overlay, { width }]} onPress={toggleMenu} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: Dimensions.get('window').height,
    backgroundColor: Colors.backgroundColor,
    zIndex: 90,
    shadowColor: Colors.blackColor,
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 20,
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  drawerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.blackColor,
  },
  drawerHeaderIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  drawerSearch: {
    paddingHorizontal: 15,
  },
  drawerSearchInput: {
    borderColor: Colors.inputBorderColor,
    borderWidth: 1,
    marginBottom: 15,
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: Colors.backgroundColor,
    textAlignVertical: 'top',
  },
  drawerSearchIcon: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  drawerItems: {
    paddingHorizontal: 15,
  },
  drawerItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.cardBackgroundColor,
  },
  drawerItemText: {
    fontSize: 18,
    color: Colors.textColor,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 80,
  },

  desktopNavbar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    backgroundColor: Colors.backgroundColor,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  desktopLogo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.textColor,
    marginRight: 20,
  },
  desktopNavbarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  desktopNavItems: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  desktopNavItem: {
    paddingVertical: 8,
  },
  desktopNavText: {
    fontSize: 12,
    color: Colors.textColor,
  },
  desktopSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'flex-end',
    width: '30%',
  },
  desktopSearchInput: {
    borderColor: Colors.inputBorderColor,
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    fontSize: 12,
    backgroundColor: Colors.backgroundColor,
    textAlignVertical: 'top',
    width: '100%',
  },
  desktopSearchIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
});

export default Navbar;
