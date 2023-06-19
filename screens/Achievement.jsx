import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Achievement = () => {
  const achievements = [
    {
      level: 1,
      milestone: "Reached 100 points",
      award: "Bronze Medal",
      image: require("../assets/p1.jpg"),
    },
    {
      level: 2,
      milestone: "Completed 10 quests",
      award: "Silver Medal",
      image: require("../assets/p2.jpg"),
    },
    {
      level: 3,
      milestone: "Unlocked secret level",
      award: "Gold Medal",
      image: require("../assets/p3.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      {achievements.map((achievement, index) => (
        <View style={styles.achievement} key={index}>
          <Image source={achievement.image} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.level}>{`Level ${achievement.level}`}</Text>
            <Text style={styles.milestone}>{achievement.milestone}</Text>
            <Text style={styles.award}>{achievement.award}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingVertical: 16,
  },
  achievement: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  level: {
    fontSize: 16,
    fontWeight: "bold",
  },
  milestone: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  award: {
    fontSize: 12,
    color: "gray",
  },
});

export default Achievement;
