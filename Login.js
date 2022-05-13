import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
 
export default function Login() {
 
 
  return (
    <View style={styles.container}>
     
       <Text style={{fontWeight:'bold', fontSize:20, color:'white',marginTop:20}}>WELCOME</Text>
      <StatusBar style="auto" />
      <View style={{ 
             marginTop:15,
             backgroundColor: "#FFC0CB",
             borderRadius: 30,
             width: '98%',
             height: 45,
             marginBottom: 20,
             alignItems: "center"}}>
        <TextInput
          style={{
            height: '98%',
            flex: 1,
            padding: 10,
            marginLeft: 20,}}

          placeholder="Enter Email."
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

          placeholder="Enter Password."
          secureTextEntry
          placeholderTextColor="#003f5c"
        
        />
      </View>
 
      <TouchableOpacity>
        <Text style={{width:'108%', height: 30,marginBottom: 20,backgroundColor:'#F48FB1',borderRadius:5}}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBotton}>
        <Text style={{fontSize:14,color:'white',fontWeight:'bold',width:100, marginLeft:50}}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E65100",
    alignItems: "center",
    justifyContent: "center",
    marginTop:10,
    borderRadius:8
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
});