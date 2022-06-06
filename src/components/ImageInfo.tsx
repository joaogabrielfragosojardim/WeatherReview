import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  description: string;
  icon: string;
}

export const ImageInfo = ({description, icon}: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>{description}</Text>
      <Icon name={icon} size={150} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
  },

  info: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
});
