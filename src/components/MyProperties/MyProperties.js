import React, {useState, useRef} from 'react';
import {View, Image, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import styles from './MyProperties.styles';
import ImageLinks from '../../utils/ImagesLinks';
import commonStyles from '../../utils/common.styles';

export default function MyProperties() {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      image: ImageLinks.propertiesSliderImage1,
    },
    {
      image: ImageLinks.propertiesSliderImage2,
    },
    {
      image: ImageLinks.propertiesSliderImage1,
    },
    {
      image: ImageLinks.propertiesSliderImage2,
    },
    {
      image: ImageLinks.propertiesSliderImage1,
    },
  ];

  const carouselRef = useRef(null);

  const {
    neomorphBg,
    neomorphBorder,
    neomorphShadow,
    neomorphBorderBlue,
    modalWrapper,
    modalContent,
    bgBlue,
    bgWhite,
    w100,
    opacity50,
    flex1,
    flexRow,
    flexWrap,
    alignCenter,
    justifyBetween,
    justifyCenter,
    g16,
    g12,
    borderRadius30,
    borderRadius14,
    borderRadius10,
    borderRadius8,
    borderTopLightBlue,
    borderRightLightBlue,
    f24,
    f16,
    f14,
    f12,
    f11,
    fw600,
    fw500,
    colorBlue,
    colorLightBlue,
    colorWhite,
    colorPurple,
    colorLightPurple,
    underlineBlue,
    underlinePurple,
    textAlign,
    p30,
    pt30,
    pb30,
    pr30,
    pl30,
    p24,
    pt24,
    pb24,
    pr24,
    pl24,
    p22,
    pt22,
    pb22,
    pr22,
    pl22,
    p20,
    pr20,
    pl20,
    pb20,
    pt20,
    p16,
    pt16,
    pb16,
    pr16,
    pl16,
    p14,
    pt14,
    pb14,
    pr14,
    pl14,
    p12,
    pt12,
    pb12,
    pr12,
    pl12,
    p9,
    pt9,
    pb9,
    pr9,
    pl9,
    p8,
    pt8,
    pb8,
    pr8,
    pl8,
    mrAuto,
    mlAuto,
    m30,
    mt30,
    mb30,
    mr30,
    ml30,
    m24,
    mt24,
    mb24,
    mr24,
    ml24,
    m20,
    mr20,
    ml20,
    mb20,
    mt20,
    m16,
    mt16,
    mb16,
    mr16,
    ml16,
    m9,
    mt9,
    mb9,
    mr9,
    ml9,
  } = commonStyles;

  function _renderItem({item, index}) {
    return (
      <View>
        <Image
          source={item.image}
          style={[styles.propertiesSliderImage, mb20]}
        />
      </View>
    );
  }

  return (
    <View style={styles.propertiesWrapper}>
      <View>
        <View style={[flexRow, justifyBetween, mt20, mr20, ml20, mb9]}>
          <Text style={[colorBlue, f16, fw500]}>My properties</Text>
          <Text style={[colorLightPurple, underlinePurple, f12]}>View all</Text>
        </View>
        <View style={[flexRow, justifyBetween, mr20, ml20, mb20]}>
          <Text style={[colorLightBlue, f12, fw500]}>
            Properties in your portfolio
          </Text>
        </View>
        <View style={[mr20, ml20, mb30]}>
          <Carousel
            layout={'default'}
            ref={carouselRef}
            data={carouselItems}
            sliderWidth={500}
            itemWidth={160}
            renderItem={_renderItem}
            onSnapToItem={index => setActiveIndex(index)}
          />
        </View>
      </View>
    </View>
  );
}
