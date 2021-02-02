import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';

class EnterDetails extends React.Component{
    constructor(props){
        super(props);
        console.log('props:- ', props);
        this.state={

        }
    }
    render(){
        const {name, phone } = this.props.navigation.state.params
        return (
            <View style={styles.container}>
                <View style={styles.rows}>
                    <Text style={styles.label}>Name :-</Text>
                    <Text>{name}</Text>
                </View>
                <View style={styles.rows}>
                    <Text style={styles.label}>Phone :-</Text>
                    <Text>{phone}</Text>
                </View>
                <TouchableOpacity style={styles.btn}
                        onPress={()=>this.props.navigation.navigate('Signup')}
                    >
                        <Text style={styles.btnText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}
                        onPress={()=>this.props.navigation.navigate('Dummyapi')}
                    >
                        <Text style={styles.btnText}>Dummy Api</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rows:{
        flexDirection:'row',
        marginBottom:20
    },
    container:{
   flex:1,
   backgroundColor:'#3f696e',
   justifyContent:'center',
   paddingHorizontal:55
    },
    btn:{
      alignSelf:'stretch',
      alignItems:'center',
      padding:20,
      marginTop:35,
      backgroundColor:'#11c5d9',
      paddingVertical:20
    },
    btnText:{
      color:'#fff',
      fontWeight:'bold'
    },
    label:{
        fontWeight:'bold',
        width:'50%'
      }
  });
    

export default EnterDetails