import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useCreatePostsMutation, useGetAllPostsQuery } from "@/redux/features/posts/postApi";
import { Redirect, router } from "expo-router";

const TextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isSuccess, isError, error }] = useLoginMutation();

  const {data,isLoading} = useGetAllPostsQuery({})

  const [ createPosts , {isLoading:isLoadingPosts, isError: createPostsError} ] = useCreatePostsMutation()


  const handleLogin = async () => {
    try {
     await login({ email, password });
     Alert.alert("Success", "User signed in successfully");
     router.replace("/home")
     console.log("oke");
      
    } catch (error) {
      console.log(error);
    }
  };

  if(isLoading){
    return <Text>...Loading</Text>
  }

  console.log(data)

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
  },
});

export default TextPage;
