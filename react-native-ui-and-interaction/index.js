import { registerRootComponent } from 'expo';

import App from './App';
import Styles from './styles/Styles';
import FixedDimension from './styles/FixedDimension';
import FlexDimension from './styles/FlexDimension';
import PercentageDimension from './styles/PercentageDimension';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);

//styles
// registerRootComponent(Styles);

//Fixed Dimension
// registerRootComponent(FixedDimension)

//Flex Dimension
// registerRootComponent(FlexDimension)

//Percentage Dimension
registerRootComponent(PercentageDimension)

