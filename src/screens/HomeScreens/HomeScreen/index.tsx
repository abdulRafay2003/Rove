import 'react-native-gesture-handler';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {HomeScreenProps} from '../../propTypes';
import {
  CustomText,
  EmptyState,
  Loader,
  MainContainer,
  ProductCard,
} from '../../../components';
import {
  Colors,
  Images,
  Metrix,
  NavigationService,
  RouteNames,
  Utills,
} from '../../../config';
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reducers';
import {HomeAPIS} from '../../../services/home';
import {Modal} from 'react-native-paper';
import {AuthAPIS} from '../../../services/auth';
import {normalizeFont} from '../../../config/metrix';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  const {t, i18n} = useTranslation();
  const userData = useSelector((state: RootState) => state.home.userDetails);
  const fcm = useSelector((state: RootState) => state.home.fcmToken);
  console.log('fcm', fcm);
  const [productData, setProductData] = useState([
    {
      id: 1,
      image: Images.KodeReach,
      title: 'KodeReach',
      description: 'Description ......',
      profile_image: '',
      userName: 'Ubaid ur Rehman',
      date: '25-Feb-2025',
      price: '$200.00',
      type: 'product',
    },
  ]);

  const [industryData, setIndustryData] = useState([
    {
      id: 1,
      image: Images.Logo,
      title: 'Title',
      type: 'industry',
    },
    {
      id: 2,
      image: Images.Logo,
      title: 'Title',
      type: 'industry',
    },
    {
      id: 3,
      image: Images.Logo,
      title: 'Title',
      type: 'industry',
    },
    {
      id: 4,
      image: Images.Logo,
      title: 'Title',
      type: 'industry',
    },
  ]);

  const [leadsData, setLeadsData] = useState([
    {
      id: 1,
      image: Images.Logo,
      title: 'Real-Time Business Intelligence',
      description:
        'Access a dynamic, up-to-date database of professionals and decision-makers, ensuring every connection is relevant and actionable.',
      type: 'lead',
    },
    {
      id: 2,
      image: Images.Logo,
      title: 'Seamless Direct Engagement With People',
      description:
        'Reach the right people effortlessly through integrated direct messaging and LinkedIn connectivity, eliminating barriers to impactful conversations.',
      type: 'lead',
    },
    {
      id: 3,
      image: Images.Logo,
      title: 'Precision-Driven Lead Generation',
      description:
        'Secure a direct pathway to industry leaders, cutting through noise and delivering high-value opportunities with unmatched efficiency.',
      type: 'lead',
    },
  ]);

  const [servicesData, setServicesData] = useState([
    {
      id: 1,
      image: Images.Logo,
      title: 'Title',
      description: 'Description ......',
      profile_image: '',
      userName: 'Ubaid ur Rehman',
      date: '25-Feb-2025',
      price: '$200.00',
      type: 'services',
    },
    {
      id: 2,
      image: Images.Logo,
      title: 'Title',
      description: 'Description ......',
      profile_image: '',
      userName: 'Ubaid ur Rehman',
      date: '25-Feb-2025',
      price: '$200.00',
      type: 'services',
    },
  ]);

  const [loading, setLoading] = useState(false);

  // const services = () => {
  //   // setLoading(true);
  //   HomeAPIS.getUserServices()
  //     .then(res => {
  //       console.log('Response', res?.data?.data);
  //     })
  //     .catch(error => {
  //       console.log('Err', error);
  //       // setLoading(false);
  //     });
  // };

  useEffect(() => {}, []);

  const renderProductItem = ({item}: any) => {
    return <ProductCard item={item} />;
  };

  const sliderHeaders = (text: string) => {
    return (
      <CustomText.MediumText customStyle={styles.sliderHeaderText}>
        {text}
      </CustomText.MediumText>
    );
  };

  const ProductSliders = (sliderHeading: string, data: any, type: string) => {
    return (
      <View>
        {sliderHeaders(sliderHeading)}
        <FlatList
          data={data}
          keyExtractor={item => item?.id}
          renderItem={renderProductItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<EmptyState title={'No Products Found'} />}
          contentContainerStyle={{
            paddingVertical: Metrix.VerticalSize(15),
          }}
        />
      </View>
    );
  };

  return (
    <MainContainer isFlatList>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomText.LargeBoldText customStyle={styles.headingStyles}>
          {t('Build Your Network')}
        </CustomText.LargeBoldText>
        {ProductSliders(
          `Muslim Lynk Member's Products`,
          productData,
          'product',
        )}
        {ProductSliders(`Industries`, industryData, 'industry')}
        {ProductSliders(
          `Muslim Lynk Redefines Lead Generation`,
          leadsData,
          'lead',
        )}
        {ProductSliders(
          `Services Offered by Muslim Lynk Members`,
          servicesData,
          'services',
        )}

        <Loader isLoading={loading} />
      </ScrollView>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  headingStyles: {
    textAlign: 'center',
    fontWeight: '600',
  },
  sliderHeaderText: {
    fontSize: normalizeFont(20),
    color: Utills.selectedThemeColors().Secondary,
    marginTop: Metrix.VerticalSize(15),
    textDecorationLine: 'underline',
    fontWeight: '600',
    paddingHorizontal: Metrix.HorizontalSize(10),
  },
});
