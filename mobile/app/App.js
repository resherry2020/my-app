import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Safeoutput, Check } from "../components";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="safeoutput">
        <Stack.Screen name="safeoutput" component={Safeoutput} />
        <Stack.Screen name="check" component={Check} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
