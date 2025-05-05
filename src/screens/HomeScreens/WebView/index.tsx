import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {WebViewProps} from '../../propTypes';
import {BackHeader, Loader, MainContainer} from '../../../components';
import {useRoute} from '@react-navigation/native';
import {WebView as Web} from 'react-native-webview';

export const WebView: React.FC<WebViewProps> = ({}) => {
  const route = useRoute<any>();
  const screen = route?.params?.from;
  const url = route?.params?.url;

  // console.log('From', screen, url);

  const [loading, setLoading] = useState(false);

  return (
    <MainContainer>
      <BackHeader heading={screen} />
      <Web
        source={{uri: url}}
        style={{flex: 1}}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <Loader isLoading={loading} />
    </MainContainer>
  );
};

interface WebViewStyles {}
const styles = StyleSheet.create<WebViewStyles>({});
