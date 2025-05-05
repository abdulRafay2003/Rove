import React, {ReactNode} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Platform,
  ViewStyle,
} from 'react-native';
import {Colors, Images, Metrix, Utills} from '../../config';
import {useThemeHook} from '../../hooks';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  childrenViewStyle?: ViewStyle;
  smallModal?: boolean;
  smallContainerStyles?: ViewStyle;
};

export const CustomModal: React.FC<ModalProps> = ({
  visible,
  onClose,
  children,
  childrenViewStyle,
  smallModal,
  smallContainerStyles,
}) => {
  // const {Colors} = useThemeHook();

  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
      animationType={Platform.OS == 'ios' ? 'slide' : 'fade'}>
      <SafeAreaView
        style={[
          styles.modalContainer,
          smallModal
            ? {
                backgroundColor:
                  Utills.selectedThemeColors().BaseOpacity('0.9'),
                // borderWidth:1,
                // borderColor:'red'
              }
            : {
                backgroundColor: Utills.selectedThemeColors().Base,
              },
        ]}>
        <TouchableOpacity
          style={[
            styles.modalContainer,
            smallModal && {
              alignItems: 'center',
              justifyContent: 'center',
              // borderWidth:1,
              // borderColor:'red'
            },
          ]}
          activeOpacity={0.9}
          onPress={onClose}>
          {smallModal ? (
            <View style={[styles.smallModalContent, smallContainerStyles]}>
              {children}
            </View>
          ) : (
            <View style={styles.modalContent}>
              <TouchableOpacity activeOpacity={0.6} onPress={onClose}>
                <Image
                  source={Images.Cross}
                  resizeMode="contain"
                  style={{
                    width: Metrix.HorizontalSize(35),
                    height: Metrix.VerticalSize(35),
                  }}
                />
              </TouchableOpacity>
              <View style={[styles.childrenView, childrenViewStyle]}>
                {children}
              </View>
            </View>
          )}
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    // backgroundColor: Utills.selectedThemeColors().BaseOpacity(),
  },
  modalContent: {
    flex: 1,
    width: '100%',
    maxHeight: '100%',
    paddingTop: Metrix.VerticalSize(20),
    paddingHorizontal: Metrix.HorizontalSize(20),
    backgroundColor: Utills.selectedThemeColors().Base,
  },
  childrenView: {
    // borderWidth: 1,
    // borderColor: 'yellow',
    flex: 1,
    marginTop: Metrix.VerticalSize(20),
  },
  smallModalContent: {
    height: '30%',
    width: '80%',
    backgroundColor: Utills.selectedThemeColors().Base,
    borderRadius: Metrix.VerticalSize(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Utills.selectedThemeColors().TextInputBorderColor,
    padding: Metrix.VerticalSize(20),
    ...Metrix.createShadow,
  },
});
