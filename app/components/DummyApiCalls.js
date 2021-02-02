
import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Container, Icon, Text, Button } from 'native-base';


export default class DummyApiCalls extends Component {
  constructor(props) {
    super(props)
    console.log("props :- ", props);
    this.state = {
      searchData: [],
      animating: false
    }
  }


  componentDidMount() {
    this.setState({ animating: true })
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((response) => {
        console.log('response', response)
        this.setState({ animating: false, searchData: response })
      }).catch((error) => {
        this.setState({ animating: false })
        console.log('error', error)
      })
  }

  delete = (index) => {
    let { searchData } = this.state;
    searchData.splice(index, 1)
    this.setState({ searchData })
  }

  _renderItem = ({ item, index }) => (
    <View style={[styles.card, { marginLeft: (index % 2) == 0 ? 0 : '10%' }]}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text><Text style={{ fontWeight: 'bold' }}>Email: </Text>{item.email}</Text>
          <Text><Text style={{ fontWeight: 'bold' }}>Name: </Text>{item.name}</Text>
          <Text><Text style={{ fontWeight: 'bold' }}>Address: </Text>{item.address.suite + ', ' + item.address.street + ', ' + item.address.city + '-' + item.address.zipcode}</Text>
          <Text><Text style={{ fontWeight: 'bold' }}>Phone: </Text>{item.phone}</Text>
        </View>
        <Icon onPress={() => this.delete(index)} style={{ fontSize: 25, color: 'red' }} name="delete" type='MaterialCommunityIcons' />
      </View>
      <Text style={styles.italicUnderline}>{item.website}</Text>
    </View >
  )

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{marginTop:150}}>
          <FlatList
            data={this.state.searchData}
            extraData={this.state}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            legacyImplementation={true}
          />
          {
            this.state.animating &&
            <View style={styles.container}>
              <ActivityIndicator size="large" />
            </View>
          }
        </View>
        <TouchableOpacity style={styles.btn}
                        onPress={()=>this.props.navigation.navigate('Signup')}
                    >
                        <Text style={styles.btnText}>Back</Text>
                    </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    borderWidth: 2,
    borderColor: '#aaa',
    borderRadius: 10,
    width: '90%',
    marginVertical: 10,
    padding: 10
  },
  mainContainer:{
    flex:1,
    backgroundColor:'#3f696e',
    width:'100%',
    justifyContent:'center',
    paddingHorizontal:15
     },
  italicUnderline: {
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '90%',
    height: '90%',
  },
  btn:{
    alignSelf:'stretch',
    alignItems:'center',
    marginTop:35,
    backgroundColor:'#11c5d9',
    paddingVertical:20,
    marginBottom:150
  },
  btnText:{
    color:'#fff',
    fontWeight:'bold'
  },
});