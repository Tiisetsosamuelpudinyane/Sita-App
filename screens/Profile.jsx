import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

const employeePerformance = {
  productivity: 80, // Example value, you can replace it with actual data
  efficiency: 70, // Example value, you can replace it with actual data
  quality: 90, // Example value, you can replace it with actual data
};

const calculateOverallPerformance = () => {
  const { productivity, efficiency, quality } = employeePerformance;
  return Math.round((productivity + efficiency + quality) / 3);
};

const areasOfImprovement = [
  "Time management",
  "Communication skills",
  "Problem-solving",
];
function Profile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.empProfile}>
        <View style={styles.profileImg}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog",
            }}
            style={styles.img}
          />
          <View style={styles.fileBtn}>
            <Button title=" Change Photo" style={styles.fileBtnText}>
              <Text>Change Photo</Text>
            </Button>
            <TouchableOpacity>
              <TextInput type="file" name="file" style={styles.inputFile} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profileHead}>
          <Text style={styles.profileHeadText}>Katleho Seatlholo</Text>
          <Text style={styles.profileSubHeadText}>
            Software Developer & UX Designer
          </Text>
          <Text style={styles.profileRating}>
            RANKINGS: <Text style={styles.ratingValue}>8/10</Text>
          </Text>
        
        </View>
        <View style={styles.profileEditBtnContainer}>
          <TouchableOpacity style={styles.profileEditBtn} name="btnAddMore">
            <Text style={styles.profileEditBtnText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.row}>
          <View style={styles.profileWork}>
            <Text style={styles.profileWorkHeading}>WORK LINK</Text>
            <TouchableOpacity>
              <Text style={styles.profileWorkLink}>Website Link</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.profileWorkLink}>Bootsnipp Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.profileWorkLink}>Bootply Profile</Text>
            </TouchableOpacity>
            <Text style={styles.profileWorkHeading}>SKILLS</Text>
            <TouchableOpacity>
              <Text style={styles.profileWorkLink}>Web Designer</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.profileWorkLink}>Web Developer</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.profileWorkLink}>WordPress</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.profileWorkLink}>WooCommerce</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.profileWorkLink}>PHP, .Net</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
      <View style={styles.col}>
          <View style={styles.tabContent}>
            <View style={styles.tabPane} id="home">
              <View style={styles.row}>
                <View style={styles.col}>
                  <Text style={styles.label}>User Id</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.value}>Kshiti123</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.col}>
                  <Text style={styles.label}>Name</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.value}>Katleho Seatlholo</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.col}>
                  <Text style={styles.label}>Email</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.value}>KatlehoSeatlholo@gmail.com</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.col}>
                  <Text style={styles.label}>Phone</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.value}>067 456 7890</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.col}>
                  <Text style={styles.label}>Profession</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.value}>Web Developer and Designer</Text>
                </View>
              </View>
            </View>
            <View style={styles.tabPane} id="profile">
              <View style={styles.row}>
                <View style={styles.col}>
                  <Text style={styles.label}>Experience</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.value}>Expert</Text>
                </View>
              </View>
            

              <View style={styles.row}>
                <View style={styles.col}>
                  <Text style={styles.label}>Availability</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.value}>Employed</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.col}>
                  <Text style={styles.label}>Your Bio</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.value}>Your detail description</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      <View style={styles.container}>
        <View style={styles.dashboard}>
          <Text style={styles.dashboardTitle}>Employee Performance</Text>
          <View style={styles.performanceMetrics}>
            <View style={styles.metric}>
              <Text style={styles.metricLabel}>Productivity</Text>
              <Text style={styles.metricValue}>
                {employeePerformance.productivity}%
              </Text>
            </View>
            <View style={styles.metric}>
              <Text style={styles.metricLabel}>Efficiency</Text>
              <Text style={styles.metricValue}>
                {employeePerformance.efficiency}%
              </Text>
            </View>
            <View style={styles.metric}>
              <Text style={styles.metricLabel}>Quality</Text>
              <Text style={styles.metricValue}>
                {employeePerformance.quality}%
              </Text>
            </View>
          </View>
          <View style={styles.overallPerformance}>
            <Text style={styles.overallPerformanceLabel}>
              Overall Performance
            </Text>
            <Text style={styles.overallPerformanceValue}>
              {calculateOverallPerformance()}%
            </Text>
          </View>
          <View style={styles.improvementAreas}>
            <Text style={styles.improvementAreasTitle}>
              Areas of Improvement
            </Text>
            {areasOfImprovement.map((area, index) => (
              <Text style={styles.improvementArea} key={index}>
                {area}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    padding: 10,
  },
  empProfile: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 15,
  },
  profileImg: {
    alignItems: "center",
  },
  img: {
    width: "70%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    padding: 10,
  },
  dashboard: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 15,
  },
  dashboardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  performanceMetrics: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  metric: {
    alignItems: "center",
  },
  metricLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  metricValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  overallPerformance: {
    alignItems: "center",
    marginBottom: 10,
  },
  overallPerformanceLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  overallPerformanceValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0062cc",
  },
  improvementAreas: {
    marginBottom: 10,
  },
  improvementAreasTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  improvementArea: {
    fontSize: 14,
    marginBottom: 2,
  },
  fileBtn: {
    position: "relative",
    overflow: "hidden",
    width: "70%",
    borderRadius: 10,
    backgroundColor: "#212529b8",
    color: "#fff",
    textAlign: "center",
    paddingTop: 10,
    cursor: "pointer",
  },
  fileBtnText: {
    color: "#fff",
    fontSize: 15,
  },
  inputFile: {
    position: "absolute",
    opacity: 0,
    right: 0,
    top: 0,
  },
  profileHead: {
    marginTop: 20,
  },
  profileHeadText: {
    color: "#333",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  profileSubHeadText: {
    color: "#0062cc",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  profileRating: {
    fontSize: 12,
    color: "#818182",
    marginTop: 10,
    textAlign: "center",
  },
  ratingValue: {
    color: "#495057",
    fontSize: 15,
    fontWeight: "bold",
  },
  navTabs: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  navItem: {
    marginRight: 20,
  },
  navLink: {
    color: "#333",
    fontSize: 16,
  },
  navLinkActive: {
    color: "#0062cc",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileEditBtnContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profileEditBtn: {
    backgroundColor: "#0062cc",
    color: "#fff",
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
  col: {
    flex: 1,
    padding: 5,
  },
  profileWork: {
    padding: 10,
  },
  profileWorkHeading: {
    fontSize: 14,
    color: "#818182",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  profileWorkLink: {
    textDecorationLine: "none",
    color: "#495057",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
  },
  tabContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  tabPane: {
    marginTop: 20,
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    fontWeight: "bold",
    color: "#0062cc",
  },
});

export default Profile;
