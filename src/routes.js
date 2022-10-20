import { createNativeStackNavigator } from "@react-navigation/native-stack";



import Welcome from "./pages/Welcome/welcome";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Details from "./pages/Details/details";


const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen  name="Welcome" component={Welcome} options={{headerShown: false}}/>

      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>

      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>

      <Stack.Screen name="About" component={About} options={{headerShown: false}}/>

      <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default Routes