import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useLoginMutation } from '@/redux/features/auth/authApi';

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, {isSuccess, isError,error}] = useLoginMutation();
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8000/api/v1/users');
  //     const data = await response.json();
  //     console.log(response)
  //     setData(data?.users);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // if (isLoading) {
  //   return <Text>Loading...</Text>;
  // }
  const handleLogin = async () => {
    // dispatch(setLoading());
    try {
      await login({ email, password });

    } catch (error) {
     
      console.log(error)
    }
  };

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
      <Button title="Login" onPress={handleLogin}  />
      {/* <Text>{loading ? 'Logging in...' : ''}</Text> */}
      {/* {data.map((item: any) => <Text key={item.id}>{item.name}</Text>)} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
});

export default Page;
