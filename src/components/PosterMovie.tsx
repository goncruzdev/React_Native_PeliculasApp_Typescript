import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movieInterface';
import {useNavigation} from '@react-navigation/native';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const PosterMovie = ({movie, height = 390, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.5}
      style={{
        width,
        height,
        marginHorizontal: 4,
        paddingBottom: 0,
        paddingHorizontal: 7,
      }}>
      <View style={styles.imgContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default PosterMovie;

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
