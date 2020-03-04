import React, { Component } from 'react'; 
import { StyleSheet,ScrollView, View, Text, TouchableOpacity,Image, Dimensions } from 'react-native';
import CustomButton from '../components/button'
const {width,height}=Dimensions.get('window')
class En extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.button}>
                <CustomButton goTo='english' lang="Funny"  color="#A7414A" name="Funny"/>
                </View>
                <View style={styles.button}>
                <CustomButton goTo='english' lang="Love" color="#282726" name="Love"/>
                </View>

                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Best Friend" color="#A37C27" name="Best Friend"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Flirty" color="#A37C27" name="Flirty"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Success" color="#A37C27" name="Success"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Lit" color="#A37C27" name="Lit"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Travel" color="#A37C27" name="Travel"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Food" color="#A37C27" name="Food"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Pets" color="#A37C27" name="Pets"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Instagram" color="#A37C27" name="Instagram Captions for Winter & Christmas"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Pets" color="#A37C27" name="Pets"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Pets" color="#A37C27" name="Pets"/>
                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding:width*0.06,
        flexDirection:"column",
        flex:1,
        backgroundColor:"#132226"
        
    },
    button:{
        marginTop:height*0.02,
        
        
    },
    
});

export default En