import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './pages/home/landing';
import Login from './pages/auth/login/login';
import Signup from './pages/auth/signup/signup';
// import Home from './pages/dashboard/home';
// import Resources from './pages/dashboard/resources';
// import About from './pages/dashboard/about';
// import Profile from './pages/dashboard/profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ 
          headerShown: false 
        }}
      >
        <Stack.Screen
          name="landing"
          component={Landing}
        />
        <Stack.Screen
          name="login"
          component={Login}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
        />
        {/* <Stack.Screen
          name="home"
          component={Home}
        />
        <Stack.Screen
          name="resources"
          component={Resources}
        />
        <Stack.Screen
          name="about"
          component={About}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}