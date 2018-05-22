
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  View
} from 'react-native';

type Props = {};
export default class Profile extends Component<Props> {
  
    static navigationOptions = {
        title: 'Profile',
      };
      
  render() {

      return (
        
              <View style={styles.container}>
        
                <Image source={require('../Images/harscoBG.png')} style={styles.backgroundImage} />
              </View>
            );
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
