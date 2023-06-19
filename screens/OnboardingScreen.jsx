import React from "react";
import { Image, Button, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Skip = ({ ...props }) => {
  return <Button title="Skip" color="grey" {...props} />;
};

const Nextbutton = ({ ...props }) => {
  return <Button title="Next" color="grey" {...props} />;
};

const DOnebutton = ({ ...props }) => {
  return <Button title="Done" color="lightblue" {...props} />;
};

function OnboardingScreen({ navigation }) {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Nextbutton}
      DoneButtonComponent={DOnebutton}
      onSkip={() => navigation.navigate("LoginScreen")}
      onDone={() => navigation.navigate("LoginScreen")}
      pages={[
        {
          backgroundColor: "lightblue",
          image: (
            <Image
              style={{ width: 300, height: 200 }}
              source={require("../assets/onboard2.jpg")}
            />
          ),
          title: "Onboarding",
          subtitle: "Welcome to Voting App",
        },
        {
          backgroundColor: "orange",
          image: (
            <Image
              style={{ width: 300, height: 200 }}
              source={require("../assets/onboard1.jpg")}
            />
          ),
          title: "BlockChain Solution",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "cyan",
          image: (
            <Image
              source={require("../assets/p3.jpg")}
              style={{ width: 300, height: 200 }}
            />
          ),
          title: "Page 3",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
}

export default OnboardingScreen;
