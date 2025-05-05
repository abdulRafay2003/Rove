import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {CustomText} from '..';
import {FontType, Metrix, Utills} from '../../config';
import {useTranslation} from 'react-i18next';

type CategoryBtnsListProps = {
  listData: {id: string; title: string; isChecked: boolean}[];
  topheading?: string;
  onPressCoursesBtn?: () => void;
};

export const TopHeading: React.FC<{
  heading?: string;
  isAllCoursesHeading?: boolean;
  onPress?: () => void;
}> = ({heading, onPress, isAllCoursesHeading = true}) => {
  const {t, i18n} = useTranslation();

  return (
    <View style={styles.topHeadingContainer}>
      <CustomText.LargeBoldText customStyle={{fontSize: FontType.FontRegular}}>
        {heading || ''}
      </CustomText.LargeBoldText>
      {isAllCoursesHeading && (
        <TouchableOpacity onPress={onPress}>
          <CustomText.MediumText
            customStyle={{
              color: Utills.selectedThemeColors().Primary,
              fontSize: FontType.FontSmall,
            }}>
            {t('all_courses')}
          </CustomText.MediumText>
        </TouchableOpacity>
      )}
    </View>
  );
};

export const CategoryBtnsList: React.FC<CategoryBtnsListProps> = ({
  listData,
  topheading,
  onPressCoursesBtn,
}) => {
  const [categoryData, setCategoryData] = useState(listData || []);

  const onPressBtn = (id: string, type: boolean) => {
    const updatedListData = [...categoryData].map(val => {
      if (val.id == id) {
        return {...val, isChecked: type};
      } else {
        return val;
      }
    });
    setCategoryData(updatedListData);
  };

  const renderItem = ({
    item,
  }: {
    item: {id: string; title: string; isChecked: boolean};
  }) => {
    return (
      <TouchableOpacity
        style={[
          styles.renderItemContainer,
          item?.isChecked && {
            backgroundColor: Utills.selectedThemeColors().Primary,
          },
        ]}
        onPress={() => onPressBtn(item?.id, !item?.isChecked)}>
        <CustomText.LargeSemiBoldText
          customStyle={[
            {fontSize: FontType.FontSmall},
            item?.isChecked && {
              color: '#ffffff',
            },
          ]}
          isSecondaryColor>
          {item?.title}
        </CustomText.LargeSemiBoldText>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginVertical: Metrix.VerticalSize(10)}}>
      <TopHeading heading={topheading} onPress={onPressCoursesBtn} />
      <FlatList
        data={categoryData}
        renderItem={renderItem}
        style={{
          //   borderWidth: 1,
          paddingVertical: Metrix.VerticalSize(10),
        }}
        horizontal
        keyExtractor={item => item?.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  renderItemContainer: {
    //   borderWidth: 1,
    paddingHorizontal: Metrix.HorizontalSize(17),
    paddingVertical: Metrix.VerticalSize(7),
    marginRight: Metrix.HorizontalSize(7),
    borderRadius: Metrix.VerticalSize(20),

    backgroundColor: Utills.selectedThemeColors().Base,
    ...Metrix.createShadow,
  },
  topHeadingContainer: {
    // paddingHorizontal: Metrix.HorizontalSize(17),
    paddingVertical: Metrix.VerticalSize(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
