import { StyleSheet, Text, View, ImageBackground,ScrollView, Image, StatusBar} from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Chat = () => {
    return (
        <View style={styles.mainContainer}>
        <StatusBar
        animated={true}
        backgroundColor="#2C3641"
        
        // barStyle={{}}
        // showHideTransition={{}}
        // hidden={{}}
        // barStyle={{}}
      />
           <Header/>
          <View style={{flex:1}}>
          <ImageBackground style={styles.image} source={require('../media/images/peakpx.jpg')}>
          <ScrollView>
          <View style={[styles.chatViewLeft,{width:"40%"}]}>
           <Text style={[styles.chatText]}>or beti ke lole  👋 </Text>
           </View>
           <View style={[styles.chatViewLeft, {width:"70%"}]}>
           <Text style={styles.chatText}>ek urgent kaam tha  sun busy hai kya av, call kar</Text>
           </View>
    
           <View style={[styles.chatViewRight,{width:"70%"}]}>
           <Text style={styles.chatText}>badiya bhai tu bata , kaha hai </Text>
           </View>
           <View style={[styles.chatViewRight, {width:"60%"}]}>
           <Text style={styles.chatText}>bsdk phone v ni uthata</Text>
           </View>
    
           <View style={[styles.chatViewLeft,{width:"35%"}]}>
           <Text style={[styles.chatText]}>or beti ke lole</Text>
           </View>
           <View style={[styles.chatViewLeft, {width:"70%"}]}>
           <Text style={styles.chatText}>mai badiya hu are yar, sun meko </Text>
           </View>
           <View style={[styles.chatViewLeft, {width:"70%"}]}>
           <Text style={styles.chatText}>100 rupee Gpay kar de jaldi jaldi</Text>
           </View>
           <View style={[styles.chatViewLeft, {width:"20%",alignSelf:"center"}]}>
           <Text style={[styles.chatText,{color:"grey",fontSize:15}]}>Today</Text>
           </View>
    
           <View style={[styles.chatViewRight,{width:"70%"}]}>
           <Text style={styles.chatText}>badiya bhai tu bata , kaha hai </Text>
           </View>
           <View style={[styles.chatViewRight, {width:"60%"}]}>
           <Text style={styles.chatText}>bsdk phone v ni uthata 😠</Text>
           </View>
           <View style={[styles.chatViewRight,{width:"70%"}]}>
           <Text style={styles.chatText}>badiya bhai tu bata , kaha hai </Text>
           </View>
           <View style={[styles.chatViewRight, {width:"60%"}]}>
           <Text style={styles.chatText}>bsdk phone v ni uthata 😠</Text>
           </View>
    
           <View style={[styles.chatViewLeft,{width:"45%"}]}>
           <Text style={[styles.chatText]}>Black adam  aai hai</Text>
           </View>
           <View style={[styles.chatViewLeft, {width:"70%"}]}>
           <Text style={styles.chatText}>pata to hoga ni ki kya hota h ye </Text>
           </View>
           <View style={[styles.chatViewRight,{width:"70%"}]}>
           <Text style={styles.chatText}>badiya bhai tu bata , kaha hai </Text>
           </View>
           <View style={[styles.chatViewRight, {width:"70%"}]}>
           <Text style={styles.chatText}>bsdk phone v ni uthata moji 😂 </Text>
           </View>
           <View style={[styles.chatViewLeft,{width:"35%"}]}>
           {/* <Text style={[styles.chatText]}>or beti ke lole</Text> */}
           </View>
           <View style={[styles.chatViewLeft, {width:"70%"}]}>
           <Text style={styles.chatText}>mai badiya hu are yar, sun meko </Text>
           </View>
           </ScrollView> 
           <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
           <View style={{borderWidth:0,backgroundColor:"#2C3641",width:"88%",borderRadius:20,marginTop:5,marginTop:20,height:42,flexDirection:"row",alignItems:"center"}}>
           <Image style={styles.emoji} source={require('../media/images/emoji2.png')}></Image> 
           <Text style={[styles.chatText,{color:"grey"}]}> Message</Text>
           </View>
           <Image style={[{width:40,  height:40,tintColor:"#fff",marginTop:20,backgroundColor:"#10B978",borderRadius:20,marginRight:5}]} source={require('../media/images/mic.png')}></Image> 
           </View>
          </ImageBackground>
          </View>
        </View>
      )
}

export default Chat

const styles = StyleSheet.create({
    mainContainer:{backgroundColor:"#fff",flex:1},
    image: {
      flex: 1,
      resizeMode: 'cover',
      // justifyContent: 'center',
      // opacity:0.7,
    },
    chatText:{fontSize:18,color:"#fff",padding:5,marginLeft:5,opacity:1},
    chatViewLeft:{borderWidth:0,backgroundColor:"#2C3641",width:"60%",borderRadius:10,marginTop:5,marginLeft:10,opacity:1},
    chatViewRight:{borderWidth:0,backgroundColor:"#277B5B",width:"40%",borderRadius:10,marginTop:5,marginLeft:10,alignSelf:"flex-end",opacity:1},
    emoji:{width:30, height:30,marginLeft:10,tintColor:"grey"}
  })