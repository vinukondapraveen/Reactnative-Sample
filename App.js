/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  View
} from 'react-native';
import Login from './Screens/LoginPage'

type Props = {};
export default class App extends Component<Props> {


  state={
    splash:true

  }
  render() {

    if(this.state.splash == false){
      return (
        
<Login/>
      );
    }
    else{
      return (
        
              <View style={styles.container}>
        
                <Image source={require('./Images/harscoBG.png')} style={styles.backgroundImage} />
              </View>
            );
    }
    
  }

  componentDidMount() {
    var nav = this.state
    setTimeout(
      () => this.setState
      ({splash:false}),
      2000
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  

});
