
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';


class SignUpForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      phone: null,
      password:''
    }
  }
  validation (){

    const {name, phone, password} = this.state
    if(name == ""){
      Alert.alert("Name is required")
      return false
    } else if(phone === null){
      Alert.alert("Phone No. is required")
      return false
    }else if(phone.length < 10){
      Alert.alert("Phone No. must be at least 10 characters")
      return false
    } else if (password == '') {
      Alert.alert("password is required")
      return false;
    } else if (password.length < 8) {
      Alert.alert("Password must be at least 8 characters")
      return false;
    } else if (password.length > 16) {
      Alert.alert("Password must be not more than 16 characters")
      return false;
    }
    return true;
  }

  submit = () =>{

    const {name, phone} = this.state
    if(this.validation()){

    this.props.navigation.navigate('Details',{name, phone})
    }
    
  }

  render(){
    
    return(
      <View style={styles.container}>
        <View style={styles.signForm}>
          <Text style={styles.header}> Sign Up</Text>
          <TextInput style={styles.inputText} placeholder="Name" 
          onChangeText={(value)=>{
            this.setState({
              name:value
            })
          }} />
          <TextInput style={styles.inputText} keyboardType="number-pad" placeholder="Phone No." 
          onChangeText={(value)=>{
            this.setState({
              phone:value
            })
          }} />
          <TextInput style={styles.inputText} secureTextEntry={true} placeholder="Password" 
          onChangeText={(value)=>{
            this.setState({
              password:value
            })
          }} />
          <TouchableOpacity style={styles.btn} 
           onPress={this.submit}
          >
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
 flex:1,
 backgroundColor:'#3f696e',
 justifyContent:'center',
 paddingHorizontal:55
  },
  signForm:{
    alignSelf:'stretch'
  },
  header:{
    fontSize:26,
    color:'#fff',
    paddingVertical:20,
    borderBottomColor:'#11c5d9',
    borderBottomWidth:1,
    marginBottom:40
  },
  inputText:{
    height:50,
    marginBottom:35,
    borderBottomColor:'#f6f6f6',
    borderBottomWidth:1,
    color:'#fff'
  },
  btn:{
    alignSelf:'stretch',
    alignItems:'center',
    padding:20,
    marginTop:35,
    backgroundColor:'#11c5d9'
  },
  btnText:{
    color:'#fff',
    fontWeight:'bold'
  }
});

export default SignUpForm;
