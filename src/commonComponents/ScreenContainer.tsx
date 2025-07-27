import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Colors from '../constants/ColorConst';
import Header from './Header';

interface ScreenContainerProps {
  headerLabel?: string;
  children: React.ReactNode;
  isBackButtonVisible?: boolean;
  navigation: any;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  headerLabel,
  children,
  isBackButtonVisible = false,
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Header
          headerLabel={headerLabel}
          isBackButtonVisible={isBackButtonVisible}
          navigation={navigation}
        />
        <View style={{ flex: 1, padding: 20 }}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  scrollView: {
    flexGrow: 1,
    paddingTop: 0,
  },
});

export default ScreenContainer;
