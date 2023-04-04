import React, {useEffect} from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './RecomendedServices.styles';
import ImageLinks from '../../utils/ImagesLinks';
import commonStyles from '../../utils/common.styles';
import Footer from '../Footer';
import Header from '../Header';
import Hero from '../Hero';
import Main from '../Main';

export default function RecomendedServices() {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    LogBox.ignoreAllLogs();
  }, []);

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

  return (
    <View style={styles.main}>
      <LinearGradient
        colors={['#81184F', '#5E0E38', '#420525']}
        useAngle={true}
        angle={139.42}
        angleCenter={{x: 0.5, y: 0.5}}
        style={styles.linearGradient}>
        <View>
          <ImageBackground
            source={ImageLinks.homeBackground}
            style={styles.backgroundImage}>
            <View style={[p20]}>
              <Text style={[f16, fw500, colorWhite]}>
                Recommended for Jay's properties
              </Text>
              <Text style={[f12, colorWhite]}>
                Frequently availed for properties like yours
              </Text>
            </View>
            <View
              style={[flexRow, justifyBetween, pr20, pl20, pb20, alignCenter]}>
              <View style={[alignCenter]}>
                <Image source={ImageLinks.legal} style={[styles.exIcon]} />
                <Text stylele={[f11, colorWhite]}>Legal</Text>
                <Text stylele={[f11, colorWhite]}>assistance</Text>
              </View>
              <View style={[alignCenter]}>
                <Image source={ImageLinks.interior} style={[styles.exIcon]} />
                <Text stylele={[f11, colorWhite]}>Interior Project</Text>
                <Text stylele={[f11, colorWhite]}>Management</Text>
              </View>
              <View style={[alignCenter]}>
                <Image source={ImageLinks.exSell} style={[styles.exIcon]} />
                <Text stylele={[f11, colorWhite]}>Gardening</Text>
                <Text stylele={[f11, colorWhite]}></Text>
              </View>
              <View style={[alignCenter]}>
                <Image source={ImageLinks.exViewMore} style={[styles.exIcon]} />
                <Text stylele={[f11, colorWhite]}>View more</Text>
                <Text stylele={[f11, colorWhite]}></Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </LinearGradient>
    </View>
  );
}
