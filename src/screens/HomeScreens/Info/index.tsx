import {
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {InfoProps} from '../../propTypes';
import {
  CardComponent,
  CustomText,
  EmptyState,
  Loader,
  MainContainer,
  NormalCardComponent,
} from '../../../components';
import {t} from 'i18next';
import {
  Images,
  Metrix,
  NavigationService,
  RouteNames,
  Utills,
} from '../../../config';
import {HomeAPIS} from '../../../services/home';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthActions, HomeActions} from '../../../redux/actions';
import {useDispatch} from 'react-redux';

export const Info: React.FC<InfoProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const options = [
    {
      id: '1',
      icon: Images.HomeActive,
      title: 'Dashboard',
      onPress: () => {
        NavigationService.navigate(RouteNames.HomeRoutes.Dashboard);
      },
    },
    {
      id: '2',
      icon: Images.ProfileInActive,
      title: 'My Profile',
      onPress: () => {},
    },
    {id: '3', icon: Images.HomeActive, title: 'Products', onPress: () => {}},
    {id: '4', icon: Images.HomeActive, title: 'Services', onPress: () => {}},
    {
      id: '5',
      icon: Images.HomeActive,
      title: 'Qualifications',
      onPress: () => {},
    },
    {
      id: '6',
      icon: Images.LogOut,
      title: 'LogOut',
      onPress: () => {
        AsyncStorage.setItem('userData', JSON.stringify({}));
        dispatch(HomeActions.setUserDetails({}));
        dispatch(AuthActions.loginSuccess(false));
      },
    },
  ];

  const renderItemm = ({item}: any) => {
    return <NormalCardComponent onPress={item?.onPress} item={item} />;
  };

  return (
    <MainContainer isFlatList>
      <CustomText.LargeBoldText customStyle={styles.heading}>
        {t('Dashboard Menu')}
      </CustomText.LargeBoldText>
      <View>
        <FlatList
          data={options}
          keyExtractor={item => item?.id}
          renderItem={renderItemm}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatlist}
        />
      </View>
      <Loader isLoading={loading} />
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: '700',
    color: Utills.selectedThemeColors().Secondary,
  },
  flatlist: {
    paddingBottom: Metrix.VerticalSize(20),
    paddingHorizontal: Metrix.HorizontalSize(5),
    marginTop: Metrix.VerticalSize(10),
  },
});
