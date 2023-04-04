import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './Main.styles';
import ImageLinks from '../../utils/ImagesLinks';
import commonStyles from '../../utils/common.styles';

export default function Main() {
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

  return (
    <View style={styles.mainWrapper}>
      <View style={[m20]}>
        <Image
          source={ImageLinks.mainBanner}
          style={[styles.mainBanner, mb20]}
        />
      </View>
      <View>
        <View style={[flexRow, justifyBetween, mr20, ml20, mb9]}>
          <Text style={[colorBlue, f16, fw500]}>
            Products recommended for you
          </Text>
          <Text style={[colorLightPurple, underlinePurple, f12]}>View all</Text>
        </View>
        <View style={[flexRow, justifyBetween, mr20, ml20, mb20]}>
          <Text style={[colorLightBlue, f12, fw500]}>
            Products recommended for you
          </Text>
        </View>
        <View style={[flexRow, justifyBetween, mr20, ml20, mb20]}>
          <View>
            <Image
              source={ImageLinks.nameTransfer}
              style={[styles.productIcons, mb9]}
            />
            <Text style={[f11, colorBlue, mb9]}>Name Transfer</Text>
          </View>
          <View>
            <Image
              source={ImageLinks.taxAssessment}
              style={[styles.productIcons, mb9]}
            />
            <Text style={[f11, colorBlue, mb9]}>Tax Assessment</Text>
          </View>
          <View>
            <Image
              source={ImageLinks.survey}
              style={[styles.productIcons, mb9]}
            />
            <Text style={[f11, colorBlue, mb9]}>Survey Sketch</Text>
          </View>
          <View style={[alignCenter]}>
            <Image source={ImageLinks.gpa} style={[styles.productIcons, mb9]} />
            <Text style={[f11, colorBlue, mb9]}>GPA</Text>
          </View>
        </View>
        <View style={[flexRow, justifyBetween, mr20, ml20, mb20]}>
          <View>
            <Image
              source={ImageLinks.deepCleaning}
              style={[styles.productIcons, mb9]}
            />
            <Text style={[f11, colorBlue, mb9]}>Deep Cleaning</Text>
          </View>
          <View>
            <Image
              source={ImageLinks.electrical}
              style={[styles.productIcons, mb9]}
            />
            <Text style={[f11, colorBlue, mb9]}>Electrical Service</Text>
          </View>
          <View>
            <Image
              source={ImageLinks.civil}
              style={[styles.productIcons, mb9]}
            />
            <Text style={[f11, colorBlue, mb9]}>Civil Workds</Text>
          </View>
          <View style={[alignCenter]}>
            <Image
              source={ImageLinks.cctv}
              style={[styles.productIcons, mb9]}
            />
            <Text style={[f11, colorBlue, mb9]}>CCTV</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
