import React, { Component } from 'react'; 
import { StyleSheet, View, Text, TouchableOpacity,Image, Dimensions } from 'react-native';
import CustomButton from '../components/button'
import SplashScreen from 'react-native-splash-screen';
const {width,height}=Dimensions.get('window')
class Language extends Component {
    componentDidMount() {
        // do stuff while splash screen is shown
          // After having done stuff (such as async tasks) hide the splash screen
          SplashScreen.hide();
      }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                <CustomButton goTo='categoryAr' lang="ar"  color="#A7414A" name="عربي"/>
                </View>
                <View style={styles.button}>
                <CustomButton goTo='categoryEn' lang="en" color="#282726" name="English"/>
                </View>

                <View style={styles.button}>
                <CustomButton goTo='nocategory' lang="it" color="#6A8A82" name="Italic"/>
                </View>
                <View style={styles.button}>
                <CustomButton goTo='nocategory' lang="ch" color="#A37C27" name="Chinese"/>
                </View>
                <View style={styles.button}>
                <CustomButton goTo='nocategory' lang="fr" color="#563838" name="French"/>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding:width*0.06,
        flexDirection:"column",
        flex:1,
        justifyContent:"center",
        backgroundColor:"#132226"
        
    },
    button:{
        marginTop:height*0.02,
        
        
    },
    
});

export default Language