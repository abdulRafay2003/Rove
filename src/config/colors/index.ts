import DataHandler from '../../services/dataHandler.service';

const DefaultColors = {
  Base: '#FFFFFF',
  PrimaryTextColor: '#212121',
  TextInputBaseColor: '#FFFFFF',
  WhiteOpacity: (opacity = '0.5') => `rgba(255, 255, 255, ${opacity})`,
  BlackOpacity: (opacity = '0.5') => `rgba(0, 0, 0, ${opacity})`,
  DisabledColor: (opacity = '0.5') => `rgba(20, 60, 133, ${opacity})`,
  BaseOpacity: (opacity = '0.5') => `rgba(255, 255, 255, ${opacity})`,
  PrimaryColorOpacity: (opacity = '0.5') => `rgba(218, 50, 50,${opacity})`,
  WhiteTwentyOpacity: 'rgba(255, 255, 255, 0.2)',
  Primary: '#b5be32',
  Secondary: '#263473',
  // Text Colors
  SecondaryTextColor: '#757575',
  TertiaryTextColor: '#FCB706',
  LightGreyText: 'rgba(154, 154, 154, 0.8)',
  SuccessTextColor: '#00b050',
  ErrorTextColor: 'red',
  PrimaryOpacity: '#624CFD14',
  NotFocussed: '#888888',
  Danger: 'red',
  Grey: '#00000020',
  Success: 'green',
  TextInputBorderColor: 'rgba(146, 146, 146, 0.49)',
  DotGrey: '#757575',
  TextInputPlaceholserColor: '#BBBBBB',
  InActiveTabBar: '#A6A6A6',
  LineColor: '#20233C',
  Transparent: 'rgba(255, 255, 255, 0)',
};

const DarkModeColors = {
  ...DefaultColors,
  Base: '#121212',
  PrimaryTextColor: '#FFFFFF',
  TextInputBaseColor: '#121212',
};

// let selectedTheme = (isDark?: boolean) =>
//   isDark ? DarkModeColors : DefaultColors;

export default {DefaultColors, DarkModeColors};
