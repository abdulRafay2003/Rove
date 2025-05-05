import {FlatList, Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {DashboardProps} from '../../propTypes';
import {
  BackHeader,
  CustomText,
  FadeInImage,
  Loader,
  MainContainer,
  RadiusSquareContainer,
} from '../../../components';
import {Images, Metrix, Utills} from '../../../config';
import {normalizeFont} from '../../../config/metrix';

const dashboard_data = [
  {
    id: '1',
    icon: Images.FAQ,
    title: 'Total Products',
    count: 1,
  },
  {
    id: '2',
    icon: Images.FAQ,
    title: 'Total Services',
    count: 3,
  },
];

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  const [loading, setLoading] = useState(false);

  const renderChatItem = ({item, index}: any) => {
    return (
      <View style={styles.cardContainer}>
        <Image
          source={item?.icon}
          style={styles.cardIcon}
          resizeMode="contain"
        />
        <View style={styles.lowerContainer}>
          <CustomText.MediumText customStyle={styles.cardText}>
            {item?.title}
          </CustomText.MediumText>
          <CustomText.MediumText
            customStyle={[
              styles.cardText,
              {marginTop: Metrix.VerticalSize(5)},
            ]}>
            {item?.count}
          </CustomText.MediumText>
        </View>
      </View>
    );
  };

  return (
    <MainContainer>
      <BackHeader heading={'Dashboard'} />
      <View style={{flex: 1}}>
        <FlatList
          data={dashboard_data}
          renderItem={renderChatItem}
          contentContainerStyle={styles.flatlist}
          keyExtractor={item => item?.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
      <Loader isLoading={loading} />
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    paddingBottom: Metrix.VerticalSize(20),
    paddingHorizontal: Metrix.HorizontalSize(5),
    marginTop: Metrix.VerticalSize(10),
  },
  cardContainer: {
    width: '47%',
    height: Metrix.VerticalSize(125),
    borderRadius: Metrix.HorizontalSize(8),
    marginHorizontal: Metrix.HorizontalSize(5),
    marginVertical: Metrix.VerticalSize(10),
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.HorizontalSize(15),
    backgroundColor: Utills.selectedThemeColors().Secondary,
    ...Metrix.cardShadow,
  },
  cardIcon: {
    height: Metrix.VerticalSize(40),
    width: Metrix.HorizontalSize(40),
    tintColor: Utills.selectedThemeColors().Base,
  },
  cardText: {
    color: Utills.selectedThemeColors().Base,
    fontWeight: 'bold',
    fontSize: normalizeFont(18),
  },
  lowerContainer: {
    marginVertical: Metrix.VerticalSize(5),
    paddingVertical: Metrix.VerticalSize(5),
    // alignItems: 'center',
  },
});
