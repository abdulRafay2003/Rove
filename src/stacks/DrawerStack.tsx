import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageProps,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {Images, Metrix, NavigationService, RouteNames, Utills} from '../config';
import {TabStack} from './TabStack';
import {Loader} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions, HomeActions} from '../redux/actions';
import utills from '../config/utills';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

const DrawerContent: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const DrawerElement = [
    {
      label: 'My Profile',
      icon: Images.ProfileInActive,
      onPress: () => {
        NavigationService.navigate(RouteNames.HomeRoutes.EditProfileScreen);
      },
    },

    {
      label: 'About us',
      icon: Images.About,
      onPress: () => {
        NavigationService.navigate(RouteNames.HomeRoutes.WebView, {
          from: 'About us',
          url: 'http://staging-app.omchouse.com/about-us',
        });
      },
    },
    {
      label: 'Terms & conditions',
      icon: Images.TermCondition,
      onPress: () => {
        NavigationService.navigate(RouteNames.HomeRoutes.WebView, {
          from: 'Terms & conditions',
          url: 'http://staging-app.omchouse.com/terms-and-conditions',
        });
      },
    },
    {
      label: 'Privacy policy',
      icon: Images.PrivacyPilicy,
      onPress: () => {
        NavigationService.navigate(RouteNames.HomeRoutes.WebView, {
          from: 'Privacy policy',
          url: 'http://staging-app.omchouse.com/privacy-and-policy',
        });
      },
    },
    {
      label: 'Logout',
      icon: Images.LogOut,
      onPress: () => {
        Alert.alert('Are you sure you want to logout?', '', [
          {
            text: 'No',
          },
          {
            text: 'Yes',
            onPress: () => {
              AsyncStorage.setItem('userData', JSON.stringify({}));
              dispatch(HomeActions.setUserDetails({}));
              dispatch(AuthActions.loginSuccess(false));
            },
          },
        ]);
      },
    },
    {
      label: 'Delete Account',
      icon: Images.Delete,
      onPress: () => {
        Alert.alert('Are you sure you want to delete your account?', '', [
          {
            text: 'No',
          },
          {
            text: 'Yes',
          },
        ]);
      },
    },
  ];
  return (
    <View style={styles.userInfoSection}>
      {/* <View style={{paddingLeft: 20, paddingVertical: 5}}>
        <Avatar.Image
          source={
            userData?.user?.user_image
              ? {
                  uri: userData?.user?.user_image,
                }
              : Images.UserPlaceholder
          }
          size={80}
        />
        {userData?.user?.first_name ? (
          <Title style={styles.title}>
            {userData?.user?.first_name + ' ' + userData?.user?.last_name}
          </Title>
        ) : null}
      </View> */}

      <View style={styles.drawerSection}>
        {DrawerElement.map((option, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            style={{
              // borderWidth:1,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingRight: Metrix.HorizontalSize(20),
            }}>
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  key={index}
                  source={option.icon}
                  style={{
                    width: Metrix.HorizontalSize(18),
                    height: Metrix.HorizontalSize(18),
                    // tintColor: Utills.selectedThemeColors().PrimaryTextColor,
                  }}
                  resizeMode="contain"
                />
              )}
              label={option.label}
              labelStyle={{
                fontSize: 14,
                color: '#222',
              }}
              onPress={option.onPress}
              style={{width: '80%'}}
            />
            <Image
              key={index}
              source={Images.Stroke}
              style={{
                width: Metrix.HorizontalSize(10),
                height: Metrix.VerticalSize(10),
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>
      <Loader isLoading={loading} />
    </View>
    // </DrawerContentScrollView>
  );
};

const HeaderIconsComponent: React.FC<{
  icon: ImageProps['source'];
  onPress: () => void;
  size?: number;
}> = ({icon, onPress, size}) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        width: Metrix.HorizontalSize(size || 30),
        height: Metrix.VerticalSize(size || 30),
        tintColor: utills.selectedThemeColors().Primary,
      }}
    />
  </TouchableOpacity>
);

const CustomHeader = ({navigation}: {navigation: any}) => {
  //   const navigation = useNavigation();

  const headerIconsData = [
    {
      id: '1',
      icon: Images.Drawer,
      onPress: () => navigation?.openDrawer(),
    },
  ];
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Metrix.HorizontalSize(10),
        marginTop: Metrix.VerticalSize(50),
        // borderWidth: 1,
      }}>
      {headerIconsData?.map(item => (
        <HeaderIconsComponent
          key={item?.id}
          icon={item?.icon}
          onPress={item?.onPress}
          size={item?.size}
        />
      ))}
    </View>
  );
};

export const DrawerStack: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: ({navigation, route, options}) => {
          return <CustomHeader navigation={navigation} />;
        },
      }}
      drawerContent={() => <DrawerContent />}>
      {/* <DrawerContent /> */}
      <Drawer.Screen
        name={RouteNames.HomeRoutes.TabStack}
        component={TabStack}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    position: 'absolute',
    zIndex: 999,
    flex: 1,
  },
  userInfoSection: {
    marginTop: 50,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    paddingTop: 25,
    borderTopWidth: 1,
    borderColor: Utills.selectedThemeColors().InActiveTabBar,
    marginTop: 25,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
