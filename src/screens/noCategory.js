import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import CustomButton from '../components/button'
import I18n from 'react-native-i18n';
const { width, height } = Dimensions.get('window')

const it = [
    " living like Lizzie McGuire", " This is what dreams are made of! (Lizzie McGuire shout-out)", " Hey now, hey now (Lizzie McGuire shout-out)", " I Duomo about you, but I love a good pun (Florence)", " Going, going, gondola (Venice)", " You wanna pisa me? (Pisa)", " Rome, you've stolen a pizza my heart", " Just Roman around", " When in Rome...", " All roads lead to Rome", " Home, sweet Rome", " There's no place like Rome, there's no place like Rome", " Life's too short. Get the double scoop", " Go nuts", " What makes you truly happy? Me: (picture of ice cream)", " I scream for ice cream", " The only man worth chasing this summer is the ice cream man", "  My head says go to the gym, my heart says eat more ice cream!", " Ice creams, nice dreams", " Ice, ice baby!", " Never settle for just one scoop", " I'll stop the world and melt for you", " Came to Italy for the sights, stayed for the gelato for Wine", "  Sip happens. It's okay to wine.", " Sip sip hooray!", " Wine not?", " I still don't know what a wine stopper is for", " I make wine disappear. What's your superpower?", " Wine is my spirit animal", " Take time to do what makes your soul happy", " Kisses From Italy", " I consider lace to be one of the prettiest imitations ever made of the fantasy of nature -- Coco Chanel", " Leather & Lace", " Just soaking up some Capri sun", "Twas on the Isle of Capri that I found her"
]

const fr = [
    " Meilleurs amis (best friends)"," Eternellement jeunes (forever young)"," N'oublie pas de vivre (don't forget to live)"," Libre comme l'air (free as a bird)"," Je suis comme je suis (I am what I am)"," Intrépide (fearless)"," Tout ira bien (everything will be fine)"," La vie est belle (life is beautiful)"," Joie de vivre (joy of living)"," Tu me fair rire (you make me laugh)"," Coup de foudre (love at first sight)"," Nouveau départ (fresh start)"," Je suis de retour (I am back)"," L'amour de ma vie (the love of my life)"," Tu me manques (I miss you)"," Plus que jamais (more than ever)"," Prends ton temps (take your time)"," Nous devrions tous être féministes (we should all be feminists)"," Tu m'appartiens (you belong to me)"," Fais avec (deal with it)"," Merci beaucoup (thank you very much)"," Je t'aime (I love you)"," belle âme (a beautiful soul)"," J’adore l' été (Ilove summer)"," Le temps passe (time files)"," La vie est belle (life is beautiful)"," Personne n’ est parfait (nobody’s perfect)"," Bonheur (happiness)"," À perte de vue (as far as the eye can see)"," Le vie en rose (life through rose colored glasses)"," L’amour de ma vie (the love of my live)"," N’oublie pas de vivre (don’t forget to live)"," C’est la vie (that’s life)"," Ça en vaut la peine ( it’s worth it)"," Pour toujours (forever)"," Vers I’infini et au-delà (to infinity an beyond)"," Rêveuse (dreamer)"," Tu ne sais rien (you know nothing)"," Putain (fuck)"," Intrépide (fearless)"," Tu me plais (i like you)"," Hiver (winter)"," Amitié (friendship)"," Chérie (sweetheart)"," Sourire (smile)"," Tout est possible (any thing is possible)"," Rien n’est éternel (nothing lasts forever) "," Tu me fais rougir (you’re making me blush "
    ]
    
const ch = [
    
" 대개 진실이 중상모략에 대한 최선의 해명이다."," 마찰 없이 보석을 광나게 할 수 없듯 시련 없이 사람을 완전하게 할수 없다."," 다른 사람에게 의지하는건 끊임없이 실망만 가져다 줄 것."," 사랑을 함으로써 잃는 것은 없다. 사랑하기를 주저하면 잃게 되지만."," 마음이 장님이면 눈은 아무 소용 없는 존재"," 우정의 깊이는 서로 얼마나 오래 알고 지냈는가에 달려있지 않다. – 타고르-"," 이세상에는 사랑과 감사에 굶주린 사람이 빵에 굶주린 사람보다 더 많다"," 다른사람에 대해 싫어하거나 강하게 대응하는 부분은 너 자신 안에도 있는 것이"," 사랑한다는 건 다른 사람 속에서 너 자신을 인식 하는 것."," 우리는 행복한 줄 모르기에 행복할 줄 모른다. – 정순철 "

]


class noCategory extends Component {
    
    qoutes() {
        let array= []
        console.log(I18n.locale);
        if(I18n.locale == 'it'){
           array = it
        }
        if(I18n.locale == 'fr'){
            array = fr
         }
         if(I18n.locale == 'ch'){
            array = ch
         }
        return array.map((data)=>{
            return (
                <ScrollView>
                    
            <Text style={styles.text}>{data}</Text>
            <Text> </Text>
            </ScrollView>
            )
        
        }
    
    
        )
    }
    render() {
        
        return(
            <View>
            <Image style={styles.fixed} source={require('../imgs/book.jpg')}>

            </Image>
            <ScrollView >
            <Text></Text>
            {this.qoutes()}
            </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 16,
        fontFamily:'Cairo-Regular',
        padding:5
    },
    fixed:{
        width: Dimensions.get("window").width,
    height: Dimensions.get("window").height, 
        zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
    }
});


export default noCategory