import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Root, Tabs } from '../Screens/TabbarRouter';

type Props = {};
export default class LoginPage extends Component<Props> {
  state = {
    email: '',
    password: ''
  };
  render() {
    let { email } = this.state;
    let { password } = this.state;
    state={
      loginSuccess:false
  
    }
  
    if(this.state.loginSuccess == true){
      return (
        
<Root/>
      );
    }
    else{
    return (

      <View style={styles.container}>

        <Image source={require('../Images/harscoBG.png')} style={styles.backgroundImage} />
        <View style={styles.containerOverlay} />
        <View style={styles.loginHoldingView}>
          <Image source={require('../Images/hr_logo.png')} style={styles.logoImage} />

          <View style={styles.loginFieldsHoldingView}>
            <View style={styles.textFieldsHoldingView}>
              <TextField
                label='Email ID'
                value={email}
                onChangeText={(email) => this.setState({ email })} baseColor='rgba(211, 211, 211, 0.8)' textColor='white' fontSize={10}
              />
              <TextField
                label='Password'
                value={password}
                onChangeText={(password) => this.setState({ password })} baseColor='rgba(211, 211, 211, 0.8)' textColor='white' fontSize={10}
              />
            </View>
          </View>
          <TouchableHighlight style={styles.accessButtonStyle} onPress={() => this.setState
      ({loginSuccess:true})} >
          <Text style={{color:'white', fontWeight:'bold',fontSize:20}}>ACCESS YOUR MACHINE </Text>
        </TouchableHighlight>

        </View>
      </View>
    );
  }
}
}

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    width: '100%',
    height: '100%',

  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logoImage: {
    top: 10,
    height: '15%',
    width: '70%',
    // alignItems: 'center',
    //   justifyContent:'center',
    resizeMode: 'contain',
    overflow: 'hidden',
    marginLeft: 'auto',
    marginRight: 'auto',
    // backgroundColor:'red'

    // height:'30%',
    // width:'30%',
    // top:100,
    // // flex:0.3,

    // resizeMode:'contain',
    // // overflow: 'hidden',
    // alignItems: 'center'
  },
  loginHoldingView: {
    top: '20%',
    // backgroundColor:'yellow',
    height: '48%',
    // backgroundColor: 'yellow'
  },
  textFieldsHoldingView: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // flex: 0.8
    // height:'40%'
  },

  loginFieldsHoldingView: {
    top: 20,
    height: '50%',
    width: '90%',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(211, 211, 211, 0.6)',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
    // backgroundColor: 'yellow'

  },

  accessButtonStyle: {
    top: 40,
    height: 50,
    width: '90%',
    overflow: 'hidden',
    borderRadius:5,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'rgba(33, 125, 185, 1)',
    alignItems: 'center',
    justifyContent: 'center',

  }

});
