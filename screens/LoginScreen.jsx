import React from "react";
import { View, Text, Button, StyleSheet ,Image} from "react-native";

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/SITA.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to SignIn Pages</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Register"
          onPress={() => navigation.navigate("Register")}
          style={styles.button}
        >
          Register
        </Button>
        <Button
          title="Login"
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        >
          Login
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 10,
  },
  image:{width:300,height:150}
});

export default LoginScreen;
