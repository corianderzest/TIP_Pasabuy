import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, Animated, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

interface ImageSliderProps {
  images: { id: string; uri: any }[];
  interval?: number; 
}

const Animation: React.FC<ImageSliderProps> = ({ images, interval = 12000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      Animated.timing(slideAnim, {
        toValue: -width,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        slideAnim.setValue(width);
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, interval);

    return () => clearInterval(autoSlide);
  }, [slideAnim, interval]);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ animated: false, index: currentIndex });
    }
  }, [currentIndex]);

  const renderItem = ({ item }: { item: { id: string; uri: any } }) => (
    <Animated.View style={[styles.imageWrapper, { transform: [{ translateX: slideAnim }] }]}>
      <Animated.Image source={item.uri} style={styles.image} resizeMode="cover" />
    </Animated.View>
  );

  return (
    <View style={styles.sliderContainer}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        snapToAlignment="center"
        snapToInterval={width}
      />
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicatorDot,
              currentIndex === index && styles.activeIndicatorDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    top: '10%',
    position: 'relative',
  },
  imageWrapper: {
    width,
    height: '80%',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '103%',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 55,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    marginHorizontal: 5,
  },
  activeIndicatorDot: {
    backgroundColor: '#F3C623',
  },
});

export default Animation;
