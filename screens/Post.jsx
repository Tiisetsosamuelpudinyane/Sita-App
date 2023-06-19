import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, Button } from "react-native";

const Post = ({ onSubmit }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleContentChange = (text) => {
    setContent(text);
  };

  const handleImageSelect = () => {
    // Implement image selection logic here
  };

  const handleSubmit = () => {
    const newPost = {
      content,
      image,
    };

    onSubmit(newPost);
    setContent("");
    setImage(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          value={content}
          onChangeText={handleContentChange}
          placeholder="Write your post..."
          style={styles.textInput}
          multiline
        />
      </View>
      {image && <Image source={image} style={styles.image} />}
      <View style={styles.buttonContainer}>
        <Button title="Choose Image" onPress={handleImageSelect} />
        <Button title="Post" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  header: {
    marginBottom: 8,
    height: 100, // Assign a fixed height value
  },
  textInput: {
    fontSize: 14,
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Post;
