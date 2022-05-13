import { StyleSheet,View,Text, TouchableOpacity} from 'react-native'; 
import Login from './Login';
import Register from './Register';
import {useState} from 'react';

export default function App() {
  const[Registration,setRegistration]= useState(false);

  function Logging_in(){
    if (Registration === false)

    {
      setRegistration(true)
  
    }
    else
  {
    setRegistration(false)
  }
  } 
  
 
 return (
    <View style={styles.container}>  
       

     {Registration ? <Login/> : <Register/>  }
     <TouchableOpacity onPress={Logging_in}>
       <View style={styles.txt}>
       <Text style={{marginLeft:18, color:'white'}} >OPEN OTHER PAGE</Text>
       </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7b4397',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30
  },
  txt:
  {
    backgroundColor:'#EC407A',
    marginTop:30,
    width:150,
    borderRadius:5
  },

});
