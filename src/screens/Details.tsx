import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import { Text } from '../components/text/Text';
import PlanetHeader from '../components/PlanetHeader';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from '../svg';

export default function Details({ navigate, route }) {
  const { planet } = route.params;
  const renderImage = (name: string) => {
    switch (name) {
      case 'mercury':
        return <MercurySvg />;
      case 'venus':
        return <VenusSvg />;
      case 'earth':
        return <EarthSvg />;
      case 'mars':
        return <MarsSvg />;
      case 'jupiter':
        return <JupiterSvg />;
      case 'saturn':
        return <SaturnSvg />;
      case 'uranus':
        return <UranusSvg />;
      case 'neptune':
        return <NeptuneSvg />;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} title={planet.name} />
      <ScrollView>
        <View style={styles.planetImageView}>{renderImage(planet.name)}</View>
        <View style={styles.detailsView}>
          <Text preset="h1" style={styles.name}>
            {planet.name}
          </Text>
          <Text style={styles.description}>{planet.description}</Text>
          <Pressable style={styles.source}>
            <Text>Source: </Text>
            <Text>Wikipedia</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  planetImageView: {
    marginTop: spacing[8],
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsView: {
    marginTop: spacing[17],
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
    lineHeight: 20,
  },
  source: {
    flexDirection: 'row',
    marginTop: spacing[5],
    alignItems: 'center',
  },
});
