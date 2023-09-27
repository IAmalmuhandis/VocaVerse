import Welcome from "./screens/Welcome";
import Register from "./screens/Register";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Profile from "./screens/Profile";
import VocabularyPractice from "./screens/VocabularyPractice";
import SpeakingExerciseScreen from "./screens/Speaking";
import CultureInsightsScreen from "./screens/CultureInsights";
const Stack = createStackNavigator();
const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="VocabularyPractice" component={VocabularyPractice} />
        <Stack.Screen name="SpeakingExercises" component={SpeakingExerciseScreen} />
        <Stack.Screen name="CulturalInsights" component={CultureInsightsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;