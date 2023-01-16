import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Linking,
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

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text preset="small" style={styles.planetSectionTitle}>
        {title}
      </Text>
      <Text preset="h2" style={styles.planetSectionValue}>
        {value}
      </Text>
    </View>
  );
};

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
  const onPressLink = () => {
    Linking.openURL(planet.wikiLink);
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} title={planet.name} />
      <ScrollView>
        {/* Image */}
        <View style={styles.planetImageView}>{renderImage(planet.name)}</View>
        {/* Details */}
        <View style={styles.detailsView}>
          <Text preset="h1" style={styles.name}>
            {planet.name}
          </Text>
          <Text style={styles.description}>{planet.description}</Text>
          <Pressable onPress={onPressLink} style={styles.source}>
            <Text>Source: </Text>
            <Text preset="h4" style={styles.wikipedia}>
              Wikipedia
            </Text>
          </Pressable>
        </View>
        {/* Planet Details */}
        <PlanetSection title="Rotation Time" value={planet.rotationTime} />
        <PlanetSection title="Revolution Time" value={planet.revolutionTime} />
        <PlanetSection title="Radius" value={planet.radius} />
        <PlanetSection title="Average Temp" value={planet.avgTemp} />
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
    alignItems: 'center',
    marginTop: spacing[5],
    marginBottom: spacing[5],
  },
  wikipedia: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  planetSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing[2],
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    border: 1,
    borderWidth: 1,
    borderColor: colors.gray,
    marginHorizontal: spacing[5],
    marginBottom: spacing[2],
  },
  planetSectionTitle: {
    textTransform: 'uppercase',
  },
  planetSectionValue: {},
});
