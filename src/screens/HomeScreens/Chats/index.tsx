import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {
  CustomText,
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
import {RootState} from '../../../redux/reducers';
import {useSelector} from 'react-redux';
import {ChatsProps} from '../../propTypes';

const chats = [
  {
    id: '1',
    icon: Images.TestingAvatar,
    title: 'Jahanzeb Ansari',
  },
  {
    id: '2',
    icon: Images.TestingAvatar,
    title: 'Ubaid ur Rehman',
  },
];

export const Chats: React.FC<ChatsProps> = ({}) => {
  const userDetails = useSelector((state: RootState) => state.home.userDetails);
  const [loading, setLoading] = useState(false);
  // const [chats, setChats] = useState<any>([]);

  const handleChatPress = (item: any) => {
    NavigationService.navigate(RouteNames.HomeRoutes.ChatMessages, {
      data: item,
      // id: id,
    });
  };

  const renderChatItem = ({item, index}: any) => {
    return (
      <NormalCardComponent onPress={() => handleChatPress(item)} item={item} />
    );
  };

  return (
    <MainContainer isFlatList>
      <CustomText.LargeBoldText customStyle={styles.heading}>
        {t('Chats')}
      </CustomText.LargeBoldText>
      <View style={{flex: 1}}>
        <FlatList
          data={chats}
          renderItem={renderChatItem}
          contentContainerStyle={styles.flatlist}
          keyExtractor={item => item?.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Loader isLoading={loading} />
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: Metrix.VerticalSize(0),
    paddingHorizontal: Metrix.VerticalSize(0),
  },
  flatlist: {
    paddingBottom: Metrix.VerticalSize(20),
    paddingHorizontal: Metrix.HorizontalSize(5),
    marginTop: Metrix.VerticalSize(10),
  },
  heading: {
    paddingHorizontal: Metrix.HorizontalSize(10),
    fontWeight: '700',
    color: Utills.selectedThemeColors().Secondary,
  },
});
