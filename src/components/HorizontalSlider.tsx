import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movieInterface';
import PosterMovie from './PosterMovie';

interface Props {
  title?: string;
  movies: Movie[];
}
const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{height: 240, marginTop: 15}}>
      {title && (
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <PosterMovie movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
