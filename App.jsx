import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OnboardingScreen from "./screens/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Register from "./screens/Register";
import Post from "./screens/Post";
import LoadingScreen from "./screens/LoadingScreen";
import PostFeed from "./screens/PostFeed";
import Achievement from "./screens/Achievement";
import Supervisor from "./screens/Supervisor";
import EmployerEdit from "./screens/EmployerEdit";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., API call, data fetching)
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false to hide the loading screen
    }, 3000); // Adjust the timeout duration as needed
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Drawer.Navigator>
          
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Profile" component={Profile} />
         <Drawer.Screen name="PostFeed" component={PostFeed} />
          <Stack.Screen name="EmployerEdit" component={EmployerEdit} />
          <Stack.Screen name="Supervisor" component={Supervisor} />
        
          <Stack.Screen name="Login" component={Login} />
         
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
         
           <Drawer.Screen name="Achievement" component={Achievement} />
          
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
         
          <Drawer.Screen name="Post" component={Post} />
          
          
          
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
