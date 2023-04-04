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

import styles from './WatchList.styles';
import ImageLinks from '../../utils/ImagesLinks';
import commonStyles from '../../utils/common.styles';

export default function WatchList() {
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
      <View style={styles.watchlistWrapper}>
        <View style={[flexRow, justifyBetween, mr20, ml20, mb9]}>
          <Text style={[colorBlue, f16, fw500]}>My watchlist</Text>
          <Text style={[colorLightPurple, underlinePurple, f12]}>View all</Text>
        </View>
        <View style={[flexRow, justifyBetween, mr20, ml20, mb20]}>
          <Text style={[colorLightBlue, f12, fw500]}>
            Properties that you are tracking
          </Text>
        </View>
        <View style={[flexRow, justifyBetween, pr20, pl20, pb20]}>
          <View>
            <Image source={ImageLinks.watch1} style={[styles.watchlistImage]} />
          </View>
          <View>
            <Image source={ImageLinks.watch2} style={[styles.watchlistImage]} />
          </View>
        </View>
        <View style={[flexRow, justifyBetween, pr20, pl20, pb20]}>
          <View>
            <Image source={ImageLinks.watch3} style={[styles.watchlistImage]} />
          </View>
          <View>
            <Image source={ImageLinks.watch4} style={[styles.watchlistImage]} />
          </View>
        </View>
      </View>
    </View>
  );
}
