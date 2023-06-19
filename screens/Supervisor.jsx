import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native";

const Supervisor = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.block}>
          <Text style={styles.title}> SITA TEAM LEADER 3</Text>
          <Text style={styles.heading}> Your Team</Text>
          <Text style={styles.description}>
            Please modify your team members Key Performance Indicators{" "}
          </Text>
        </View>

        <View style={styles.memberContainer}>
          <View style={styles.member}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1574698550747-3f839e813107?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=772&q=80",
              }}
              style={styles.memberImage}
            />
            <Text style={styles.memberName}>Neil Armstrong</Text>
            <Text style={styles.memberRole}> Level 2: Intermediate</Text>
          </View>
          <View style={styles.memberDescription}>
            <Text style={styles.memberText}>
              Currently working with on a project with ABSA-ted talks app.
            </Text>

            {/* Social media icons */}
            <View style={styles.socialMediaContainer}>
              <Image
                source={require("../assets/p1.jpg")}
                style={styles.socialMediaIcon}
              />
              <Image
                source={require("../assets/p2.jpg")}
                style={styles.socialMediaIcon}
              />
              <Image
                source={require("../assets/p3.jpg")}
                style={styles.socialMediaIcon}
              />
              <Image
                source={require("../assets/p1.jpg")}
                style={styles.socialMediaIcon}
              />
            </View>
          </View>
        </View>

        <View style={styles.memberContainer}>
          <View style={styles.member}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1574698550747-3f839e813107?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=772&q=80",
              }}
              style={styles.memberImage}
            />
            <Text style={styles.memberName}>Thabang Mokoena</Text>
            <Text style={styles.memberRole}> Level 1: Junior</Text>
          </View>
          <View style={styles.memberDescription}>
            <Text style={styles.memberText}>
              Currently working with on a project with ABSA-ted talks app.
            </Text>

            {/* Social media icons */}
            <View style={styles.socialMediaContainer}>
              <Image
                source={require("../assets/p1.jpg")}
                style={styles.socialMediaIcon}
              />
              <Image
                source={require("../assets/p2.jpg")}
                style={styles.socialMediaIcon}
              />
              <Image
                source={require("../assets/p3.jpg")}
                style={styles.socialMediaIcon}
              />
              <Image
                source={require("../assets/p1.jpg")}
                style={styles.socialMediaIcon}
              />
            </View>
          </View>
        </View>

v        {/* Social media icons */}
        <View style={styles.socialMediaContainer}>
          <Image
            source={require("../assets/p1.jpg")}
            style={styles.socialMediaIcon}
          />
          <Image
            source={require("../assets/p2.jpg")}
            style={styles.socialMediaIcon}
          />
          <Image
            source={require("../assets/p3.jpg")}
            style={styles.socialMediaIcon}
          />
          <Image
            source={require("../assets/p1.jpg")}
            style={styles.socialMediaIcon}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  block: {
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    textAlign: "center",
    marginBottom: 16,
  },
  memberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  member: {
    alignItems: "center",
  },
  memberImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  memberName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  memberRole: {
    fontSize: 12,
    color: "gray",
    marginBottom: 16,
  },
  memberDescription: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 16,
  },
  memberText: {
    textAlign: "justify",
  },
  socialMediaContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  socialMediaIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});

export default Supervisor;
