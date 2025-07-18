import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import React from 'react';


export default function HomePage(){
    return (
        <View style={{flex: 1}}>
            {/*Maps background img placeholder*/}
            <ImageBackground 
                source={require('../../assets/images/MapPlaceholder.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
            
                {/*Start matching button*/}
                <TouchableOpacity style={styles.matchButton}>
                    <Text style={styles.matchButtonText}>Start matches</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
        

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '125%',
  },
  matchButton: {
    backgroundColor: '#FF5A5F',
    padding: 18,
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 40,
    width: 200,
    alignItems: 'center',
  },
  matchButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
