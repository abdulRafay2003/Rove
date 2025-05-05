import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SearchProps} from '../../propTypes';
import {
  CustomText,
  EmptyState,
  FadeInImage,
  Loader,
  MainContainer,
  RoundImageContainer,
} from '../../../components';
import {t} from 'i18next';
import {
  Images,
  Metrix,
  NavigationService,
  RouteNames,
  Utills,
} from '../../../config';
import {CustomSearchBar} from '../../../components/SearchBar';
import utills from '../../../config/utills';
import {normalizeFont} from '../../../config/metrix';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reducers';

const data = [
  {
    id: '1',
    name: 'Syed Wahaj Gilani',
    title: 'Chief Executive Officer (CEO), Founder at ANOVUS',
    address: 'San Francisco Bay CA United States',
    industry: 'Hospitals and Health Care',
    memberDate: 'Mar 18, 2025',
  },
  {
    id: '2',
    name: 'Tasnim McCormick Benhalim',
    title: 'Founder at The Advanced',
    address: 'San Francisco Bay CA United States',
    industry: 'Hospitals and Health Care',
    memberDate: 'Mar 18, 2025',
  },
  {
    id: '3',
    name: 'Jacob Doe',
    title: 'Founder at The Advanced',
    address: 'San Francisco Bay CA United States',
    industry: 'Hospitals and Health Care',
    memberDate: 'Mar 18, 2025',
  },
  {
    id: '4',
    name: 'Jacob Doe',
    title: 'Founder at The Advanced',
    address: 'San Francisco Bay CA United States',
    industry: 'Hospitals and Health Care',
    memberDate: 'Mar 18, 2025',
  },
];

const contact_icons = [
  {
    id: '1',
    icon: Images.Chat,
    backgroundColor: Utills.selectedThemeColors().Primary,
    onPress: () => {},
  },
  {
    id: '2',
    icon: Images.View,
    backgroundColor: Utills.selectedThemeColors().Success,
    onPress: () => {},
  },
  {
    id: '3',
    icon: Images.LinkedIn,
    backgroundColor: Utills.selectedThemeColors().Secondary,
    onPress: () => {},
  },
];

export const Search: React.FC<SearchProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const userCity = useSelector((state: RootState) => state.home.userCity);

  const renderItemm = ({item}: any) => {
    return (
      <View key={item?.id} style={styles.profileCard}>
        <View style={styles.imageContainer}>
          <RoundImageContainer
            resizeMode="contain"
            source={Images.TestingAvatar}
            circleWidth={80}
            borderWidth={1}
            borderColor={Utills.selectedThemeColors().Secondary}
          />
        </View>
        <View style={styles.detailsContainer}>
          <CustomText.MediumText
            numberOfLines={1}
            customStyle={styles.userName}>
            {item?.name}
          </CustomText.MediumText>

          <CustomText.MediumText
            numberOfLines={1}
            customStyle={[styles.title, styles.spacing]}>
            {item?.title}
          </CustomText.MediumText>

          <CustomText.RegularText numberOfLines={1}>
            {item?.address}
          </CustomText.RegularText>

          <CustomText.RegularText
            numberOfLines={1}
            customStyle={[styles.spacing, {fontWeight: 'bold'}]}>
            Industry:{' '}
            <CustomText.RegularText
              numberOfLines={1}
              customStyle={[{fontWeight: '400'}]}>
              {item?.industry}
            </CustomText.RegularText>
          </CustomText.RegularText>

          <CustomText.RegularText
            numberOfLines={1}
            customStyle={[{fontWeight: 'bold'}]}>
            Member since:{' '}
            <CustomText.RegularText
              numberOfLines={1}
              customStyle={[{fontWeight: '400'}]}>
              {item?.memberDate}
            </CustomText.RegularText>
          </CustomText.RegularText>
        </View>
        <View style={styles.iconsContainer}>
          {contact_icons?.map((item: any) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  backgroundColor: item?.backgroundColor,
                  width: item?.id == '2' ? '34%' : '33%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomLeftRadius:
                    item?.id == '1' ? Metrix.HorizontalSize(5) : 0,
                  borderBottomRightRadius:
                    item?.id == '3' ? Metrix.HorizontalSize(5) : 0,
                }}>
                <Image
                  source={item?.icon}
                  resizeMode="contain"
                  style={styles.socialIcons}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const FloatingButton = () => {
    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.filterContainer}>
        <Image
          source={Images.Filter}
          resizeMode="contain"
          style={styles.filterIcon}
        />
      </TouchableOpacity>
    );
  };
  return (
    <MainContainer isFlatList>
      <View style={styles.headingContainer}>
        <CustomText.LargeBoldText customStyle={styles.heading}>
          {t('Search')}
        </CustomText.LargeBoldText>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            NavigationService.navigate(RouteNames.HomeRoutes.Location);
          }}>
          <CustomText.MediumText customStyle={styles.countryText}>
            {userCity}
          </CustomText.MediumText>
        </TouchableOpacity>
      </View>
      <CustomSearchBar placeholder={'Search Product, Service or Industry'} />
      <FlatList
        data={data}
        keyExtractor={item => item?.id}
        renderItem={renderItemm}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlist}
        ListEmptyComponent={<EmptyState title={'Users'} />}
      />
      {FloatingButton()}
      <Loader isLoading={loading} />
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontWeight: '700',
    color: Utills.selectedThemeColors().Secondary,
  },
  countryText: {
    color: Utills.selectedThemeColors().Primary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  flatlist: {
    paddingBottom: Metrix.VerticalSize(50),
    paddingTop: Metrix.VerticalSize(20),
    paddingHorizontal: Metrix.HorizontalSize(5),
  },
  profileCard: {
    width: '100%',
    // height: Metrix.VerticalSize(220),
    marginVertical: Metrix.VerticalSize(30),
    borderRadius: Metrix.HorizontalSize(8),
    backgroundColor: Utills.selectedThemeColors().Base,
    borderWidth: 2,
    borderColor: Utills.selectedThemeColors().Primary,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Metrix.VerticalSize(-40),
    position: 'absolute',
    zIndex: 100,
    alignSelf: 'center',
    // borderWidth: 2,
  },
  detailsContainer: {
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(5),
    paddingBottom: Metrix.VerticalSize(15),
    marginTop: Metrix.VerticalSize(40),
  },
  userName: {
    fontSize: normalizeFont(20),
    fontWeight: '600',
    color: utills.selectedThemeColors().Secondary,
    textAlign: 'center',
  },
  title: {fontWeight: '500', textAlign: 'center'},
  spacing: {lineHeight: Metrix.VerticalSize(32)},
  iconsContainer: {
    height: Metrix.VerticalSize(40),
    flexDirection: 'row',
  },
  socialIcons: {
    width: Metrix.HorizontalSize(20),
    height: Metrix.VerticalSize(20),
    tintColor: Utills.selectedThemeColors().Base,
  },
  filterContainer: {
    width: Metrix.HorizontalSize(48),
    height: Metrix.VerticalSize(48),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 100,
    backgroundColor: Utills.selectedThemeColors().Primary,
    bottom: '3%',
    right: '10%',
    borderRadius: Metrix.HorizontalSize(100),
    ...Metrix.cardShadow,
  },
  filterIcon: {
    width: Metrix.HorizontalSize(20),
    height: Metrix.VerticalSize(20),
    tintColor: Utills.selectedThemeColors().Secondary,
  },
});
