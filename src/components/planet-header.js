/* eslint-disable prettier/prettier */
import {View, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Text from './text/text';
import {spacing} from '../theme/spacing';
import {colors} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';

export default function PlanetHeader({backBtn, title = 'THE PLANETS'}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text preset="h2">{title}</Text>
      {backBtn && (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>Back</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
