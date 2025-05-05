import {
  View,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Linking,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Bubble, Day, GiftedChat, MessageText} from 'react-native-gifted-chat';
import {useRoute} from '@react-navigation/native';
import Metrix, {normalizeFont} from '../../../config/metrix';
import {
  CustomInput,
  CustomText,
  FadeInImage,
  BackHeader,
} from '../../../components';
import {useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ChatMessagesProps} from '../../propTypes';
import {FontType, Images, Utills} from '../../../config';
import {RootState} from '../../../redux/reducers';

export const ChatMessages: React.FC<ChatMessagesProps> = ({}) => {
  const route = useRoute<any>();
  const userName = route?.params?.data?.name;
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState<any>([]);
  const userDetails = useSelector((state: RootState) => state.home.userDetails);

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <BackHeader heading={userName || 'User not available'} />
      </View>
    );
  };

  const renderDay = (props: any) => {
    return (
      <Day
        {...props}
        textStyle={{
          color: Utills.selectedThemeColors().Base,
          fontSize: FontType.FontSmall,
          fontWeight: '700',
        }}
        wrapperStyle={styles.dayWrapper}
      />
    );
  };

  const renderComposer = () => {
    return (
      <View style={{paddingBottom: Metrix.VerticalSize(20)}}>
        <View style={styles.composerContainer}>
          <View style={styles.coposerContainer}>
            <CustomInput
              value={message}
              onChangeText={msg => {
                setMessage(msg);
              }}
              placeholderTextColor={'#00000080'}
              placeholder="Type a message..."
              autoCapitalize="none"
              keyboardType="default"
              returnKeyType={Platform.OS == 'android' ? 'none' : 'done'}
              multiline={true}
              //   inputContainerStyles={styles.inputContainerStyle}
              customStyle={{
                paddingTop: Metrix.VerticalSize(13),
                paddingLeft: Metrix.VerticalSize(10),
                fontSize: normalizeFont(14),
              }}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={() => {
                if (message?.length) {
                  //   onSend(message);
                }
              }}>
              <FadeInImage
                source={Images.Send}
                resizeMode="contain"
                customImageContainerStyle={styles.sendIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderNoChat = () => {
    return (
      <View style={styles.noChatContainer}>
        <Image
          source={Images.EmptyState}
          style={styles.noChatImage}
          resizeMode="contain"
        />

        <CustomText.RegularText customStyle={styles.noChatText}>
          {'No Data \n Found !'}
        </CustomText.RegularText>
      </View>
    );
  };

  //   const renderScrollToBottom = () => {
  //     return (
  //       <Ionicons
  //         name="ios-arrow-back-sharp"
  //         color={Utills.selectedThemeColors().Primary}
  //         size={25}
  //         style={{transform: [{rotate: '-90deg'}]}}
  //       />
  //     );
  //   };

  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      <KeyboardAwareScrollView
        extraScrollHeight={Metrix.VerticalSize(50)}
        contentContainerStyle={{flex: 1}}
        scrollEnabled={false}>
        <GiftedChat
          messages={messageList}
          //   listViewProps={{showsVerticalScrollIndicator: false}}
          messagesContainerStyle={{height: '89%'}}
          //   scrollToBottom
          isLoadingEarlier
          infiniteScroll
          renderAvatar={null}
          imageStyle={styles.imageStyles}
          user={{_id: route?.params?.id}}
          renderComposer={renderComposer}
          renderChatEmpty={renderNoChat}
          //   scrollToBottomComponent={renderScrollToBottom}
          scrollToBottomStyle={styles.scrollToBootomContainer}
          renderDay={props => {
            return renderDay(props);
          }}
          parsePatterns={linkStyle => [
            {
              type: 'url',
              style: {
                color: Utills.selectedThemeColors().Base,
                textDecorationLine: 'underline',
                fontWeight: '400',
              },
              onPress: (text: string) => {
                if (text.startsWith('http://') || text.startsWith('https://')) {
                  Linking.openURL(text);
                } else {
                  Linking.openURL(`https://${text}`);
                }
              },
            },
          ]}
          renderBubble={props => {
            return (
              <Bubble
                {...props}
                wrapperStyle={{
                  right: styles.rightBubble,
                  left: styles.leftBubble,
                }}
                renderMessageText={props => (
                  <MessageText
                    {...props}
                    textStyle={{left: styles.leftText, right: styles.rightText}}
                  />
                )}
              />
            );
          }}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyles: {
    marginHorizontal: Metrix.HorizontalSize(5),
    marginVertical: Metrix.VerticalSize(5),
    width: Metrix.HorizontalSize(180),
    height: Metrix.VerticalSize(120),
  },
  suggestionMainContainer: {
    backgroundColor: Utills.selectedThemeColors().Base,
    paddingHorizontal: Metrix.HorizontalSize(5),
    paddingVertical: Metrix.VerticalSize(10),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Utills.selectedThemeColors().TextInputBorderColor,
  },
  suggestionItem: {
    backgroundColor: Utills.selectedThemeColors().Primary,
    borderWidth: 1,
    borderColor: Utills.selectedThemeColors().Primary,
    borderRadius: Metrix.HorizontalSize(100),
    paddingHorizontal: Metrix.HorizontalSize(15),
    paddingVertical: Metrix.VerticalSize(10),
    marginHorizontal: Metrix.HorizontalSize(5),
  },
  sendContainer: {
    width: '13%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  composerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Metrix.VerticalSize(10),
    paddingHorizontal: Metrix.HorizontalSize(15),
    width: '100%',
    // height: Metrix.VerticalSize(40),
  },
  inputContainerStyle: {
    marginVertical: 0,
    width: '90%',
    borderWidth: 0,
  },
  dayWrapper: {
    paddingVertical: Metrix.VerticalSize(5),
    paddingHorizontal: Metrix.HorizontalSize(10),
    borderRadius: Metrix.HorizontalSize(5),
    backgroundColor: Utills.selectedThemeColors().InActiveTabBar,
    marginTop: Metrix.VerticalSize(5),
  },
  topFunctionalButtons: {
    // borderWidth: 1,
    borderRadius: Metrix.VerticalSize(100),
    padding: 0,
    height: Metrix.VerticalSize(34),
    width: Metrix.VerticalSize(34),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Utills.selectedThemeColors().Base,
  },
  scrollToBootomContainer: {
    backgroundColor: Utills.selectedThemeColors().Base,
    opacity: 1,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: {width: -1, height: 4},
    shadowOpacity: 0.4,
    elevation: 12,
    right: Metrix.HorizontalSize(20),
  },
  headerContainer: {
    paddingHorizontal: Metrix.HorizontalSize(20),
    paddingTop: Metrix.VerticalSize(40),
  },
  backArrowContainer: {
    paddingVertical: 8,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  rightHeaderContainer: {
    width: '90%',
    paddingVertical: Metrix.VerticalSize(15),
    paddingHorizontal: Metrix.HorizontalSize(10),
    justifyContent: 'flex-end',
  },
  heading: {
    fontSize: normalizeFont(18),
    color: Utills.selectedThemeColors().Base,
  },
  coposerContainer: {
    borderWidth: 2,
    borderColor: Utills.selectedThemeColors().TextInputBorderColor,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: Metrix.HorizontalSize(100),
    paddingHorizontal: Metrix.HorizontalSize(10),
  },
  sendIcon: {
    width: Metrix.HorizontalSize(25),
    height: Metrix.VerticalSize(25),
    borderColor: Utills.selectedThemeColors().Primary,
  },
  noChatContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Utills.selectedThemeColors().Base,
  },
  rightBubble: {
    backgroundColor: Utills.selectedThemeColors().Primary,
    borderTopRightRadius: Metrix.VerticalSize(0),
    borderTopLeftRadius: Metrix.Radius,
    borderBottomLeftRadius: Metrix.Radius,
    borderBottomRightRadius: Metrix.Radius,
    marginVertical: Metrix.VerticalSize(5),
  },
  leftBubble: {
    backgroundColor: '#E0E0E0',
    borderTopLeftRadius: Metrix.VerticalSize(0),
    borderTopRightRadius: Metrix.Radius,
    borderBottomLeftRadius: Metrix.Radius,
    borderBottomRightRadius: Metrix.Radius,
    marginVertical: Metrix.VerticalSize(5),
  },
  leftText: {
    color: Utills.selectedThemeColors().PrimaryTextColor,
    fontSize: FontType.FontMedium,
    paddingVertical: Metrix.VerticalSize(3),
  },
  rightText: {
    color: Utills.selectedThemeColors().Base,
    fontSize: FontType.FontMedium,
    paddingVertical: Metrix.VerticalSize(3),
  },
  noChatImage: {width: '40%', height: '40%', transform: [{rotate: '180deg'}]},
  noChatText: {
    position: 'absolute',
    top: '45%',
    textAlign: 'center',
    fontWeight: '600',
    color: Utills.selectedThemeColors().Primary,
    transform: [{scaleX: -1}, {rotate: '180deg'}],
  },
});
