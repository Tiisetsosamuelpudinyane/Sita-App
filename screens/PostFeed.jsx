import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet ,Image,Text} from "react-native";

const PostFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Mock data for posts
    const mockPosts = [
      {
        id: "1",
        author: {
          name: "John Doe",
          avatar: require("../assets/p1.jpg"),
        },
        content: "This is the first post",
        timestamp: "June 1, 2023",
        image: require("../assets/p3.jpg"),
      },
      {
        id: "2",
        author: {
          name: "Jane Smith",
          avatar: require("../assets/p2.jpg"),
        },
        content: "Another post here",
        timestamp: "June 5, 2023",
        image: require("../assets/p1.jpg"),
      },
      // Add more posts as needed
      {
        id: "3",
        author: {
          name: "John Doe",
          avatar: require("../assets/p1.jpg"),
        },
        content: "This is the first post",
        timestamp: "June 1, 2023",
        image: require("../assets/p3.jpg"),
      },
      {
        id: "4",
        author: {
          name: "Jane Smith",
          avatar: require("../assets/p2.jpg"),
        },
        content: "Another post here",
        timestamp: "June 5, 2023",
        image: require("../assets/p1.jpg"),
      },
    ];

    // Set the mock posts to the state
    setPosts(mockPosts);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.Header}>
              <Image source={item.author.avatar} style={styles.avatar} />
              <View style={styles.authorInfo}>
                <Text style={styles.authorName}>{item.author.name}</Text>
                <Text style={styles.timestamp}>{item.timestamp}</Text>
              </View>
            </View>
            <Text style={styles.content}>{item.content}</Text>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.postList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingVertical: 16,
  },
  postList: {
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  timestamp: {
    fontSize: 12,
    color: "gray",
  },
  content: {
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
});


export default PostFeed;
