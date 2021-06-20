import React, {useState, useCallback} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

const ImageCarousel = ({images}) => {
  const windowWidth = useWindowDimensions().width;
  const [activeindex, setactiveindex] = useState(0);
  const onFlatlistchange = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setactiveindex(viewableItems[0].index || 0);
    }
  }, []);
  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 40}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatlistchange}
      />
      <View style={styles.dots}>
        {images.map((item, index) => (
          <View
            key={index + 1}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeindex ? '#c9c9c9' : '#ededed',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    margin: 10,
    height: 250,
    resizeMode: 'contain',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#ededed',
    borderColor: '#c9c9c9',
    margin: 5,
  },
});
export default ImageCarousel;
