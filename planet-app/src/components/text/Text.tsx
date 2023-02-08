import { StyleSheet, Text as RNText, View } from 'react-native';
import React from 'react';
import { presets } from './text.preset';

interface TextProps {
  preset?: keyof typeof presets;
  style?: any;
  children?: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  children,
  preset = 'default',
  style,
}) => {
  const textStyles = StyleSheet.compose(presets[preset], style);
  return <RNText style={textStyles}>{children}</RNText>;
};
