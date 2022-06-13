/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  Linking,
} from 'react-native';
import Text from '../components/text/text';
import PlanetHeader from '../components/planet-header';
import {colors} from '../theme/colors';
import {spacing} from '../theme/spacing';
import Mercury from '../svg/mercury-svg';
import Venus from '../svg/venus-svg';

const PlanetSection = ({title, value}) => {
  return (
    <View style={styles.planetSection}>
      <Text preset="small" style={{textTransform: 'uppercase'}}>
        {title}
      </Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
};

export default function Details({route}) {
  const planet = route.params.planet;
  const {
    name,
    description,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
    wikiLink,
  } = planet;
  const renderImg = () => {
    switch (name) {
      case 'mercury':
        return <Mercury width={150} height={150} />;
      case 'venus':
        return <Venus />;
      default:
        return <Mercury width={150} height={150} />;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />
      <ScrollView>
        <View style={styles.imageView}>
          {/* <Mercury width={150} height={150} /> */}
          {renderImg()}
        </View>

        <View style={styles.detailsView}>
          <Text preset="h2" style={styles.name}>
            {name}
          </Text>
          <Text style={{lineHeight: 30}}>{description}</Text>
          <Pressable
            onPress={() => Linking.openURL(wikiLink)}
            style={styles.source}>
            <Text>Source: </Text>
            <Text preset="h4" style={styles.wikipedia}>
              Wikipedia
            </Text>
          </Pressable>
        </View>

        <View style={{height: 40}} />

        <PlanetSection title="ROTATION TIME" value={rotationTime} />
        <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
        <PlanetSection title="RADIUS" value={radius} />
        <PlanetSection title="AVARAGE TIME" value={avgTemp} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  imageView: {
    marginTop: spacing[8],
    padding: spacing[5],
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsView: {
    marginTop: spacing[8],
    marginHorizontal: spacing[6],
    alignItems: 'center',
  },
  name: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginTop: spacing[5],
    lineHeight: 21,
  },
  source: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[5],
  },
  wikipedia: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  planetSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
  },
});
