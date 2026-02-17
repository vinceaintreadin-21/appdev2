import { registerRootComponent } from 'expo';

import App from './App';
import Flex from './styles/Flex';
import FlexDirection from './styles/FlexDirection';
import LayoutDirection from './styles/LayoutDirection';
import JustifyContent from './styles/JustifyContent';
import AlignItems from './styles/AlignItems';
import AlignSelf from './styles/AlignSelf';
import AlignContent from './styles/AlignContent';
import FlexWrap from './styles/FlexWrap';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

//Flex
registerRootComponent(Flex);


//Flex Direction
registerRootComponent(FlexDirection)

//Layout Direction
registerRootComponent(LayoutDirection)

//Justify Content
registerRootComponent(JustifyContent)

//Align Items
registerRootComponent(AlignItems)

//Align Self
registerRootComponent(AlignSelf)

//Align Content
registerRootComponent(AlignContent)

//Flex Wrap
registerRootComponent(FlexWrap)