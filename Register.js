import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
 
export default function Register() {
 
 
  return (

    <ScrollView>
    <View style={styles.container}>
    <Image
              style={{width:200,height:200}}
              source={require('./Instagram-Logo.wine.png')}/>
      <Text style={{color:'white',fontSize:15}} >Register in order to have </Text>
      <Text style={{color:'white',fontSize:15}}>access to this application</Text>
 
      <StatusBar style="auto" />
      <View style={styles.textinput}>
        <TextInput
          style={{
            height: '98%',
            flex: 1,
            padding: 10,
            marginLeft: 20,}}

          placeholder=" Enter Full Names."
          placeholderTextColor="#003f5c"/>
      </View>

      <View style={styles.textinput}>
        <TextInput
          style={{
            height: '98%',
            flex: 1,
            padding: 10,
            marginLeft: 20,}}

          placeholder="Enter Mobile Number."
          placeholderTextColor="#003f5c"/>
      </View>
      <View style={styles.textinput}>
        <TextInput
          style={{
            height: '98%',
            flex: 1,
            padding: 10,
            marginLeft: 20,}}

          placeholder="Enter Email."
          placeholderTextColor="#003f5c"/>
      </View>

      <View style={styles.textinput}>
        <TextInput
          style={{
            height: '98%',
            flex: 1,
            padding: 10,
            marginLeft: 20,}}

          placeholder="Enter New Password."
          secureTextEntry
          placeholderTextColor="#003f5c"/>
      </View>
 
      <View style={{ 
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: '98%',
    height: 45,
    marginBottom: 20,
    alignItems: "center"}}>
        <TextInput
          style={{
            height: 50,
            flex: 1,
            padding: 10,
            marginLeft: 20,}}

          placeholder="Confirm Password."
          secureTextEntry
          placeholderTextColor="#003f5c"/>
      </View>

      <View style={styles.textinput}>
        <TextInput
          style={{
            height: '98%',
            flex: 1,
            padding: 10,
            marginLeft: 20,}}

          placeholder="Enter verification Code."
          secureTextEntry
          placeholderTextColor="#003f5c"/>
      </View>
      <Text style={{borderStyle:'solid', borderWidth:1,borderColor:'red',width:'91%'}}>YOUR DONE REGISTERING</Text>
        <TouchableOpacity style={styles.loginBotton}>
        <Text style={{fontSize:14,color:'white',fontWeight:'bold'}}>REGISTER</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E65100",
    alignItems: "center",
    justifyContent: "center",
    marginTop:10,
    borderRadius:10
  },
   
  loginBotton: {
    width: '100%',
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#3F51B5",
  },
  textinput:{

    marginTop:15,
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: '98%',
    height: 45,
    marginBottom: 20,
    alignItems: "center"
  },
  
});