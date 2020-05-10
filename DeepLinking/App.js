import React from 'react';
import { Linking } from 'react-native';
import DayoutNavigator from './src/navigators/DayoutNavigator';

import { initLinking } from './src/utils/helperDeepLinking';
import { initLibrary } from './src/utils/helperFontAwesome';

export default function App() {
  initLinking(Linking);
  initLibrary();
  return <DayoutNavigator uriPrefix={'deeplinking://'} />;
}
