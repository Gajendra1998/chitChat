import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Header = ({}) => {
  const navigation = useNavigation();
  return (
     <View style={[styles.row,styles.mainContainer]}>
        <View style={[styles.row,{alignItems:"center",justifyContent:"space-between",flex:1}]}>
        
         <View style={[styles.row,{alignItems:"center"}]}>
           <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image style={styles.backArrow} source={require('../media/images/back.png')}></Image>
          </TouchableOpacity>
          <Image style={styles.dpImage} source={require('../media/images/dp.png')}></Image> 
          <Text style={styles.name}>Harshit Beta</Text>
         </View>

        <View style={[styles.row,{alignItems:"center"}]}> 
        <Image style={styles.videoImage} source={require('../media/images/video.png')}></Image> 
        <Image style={[styles.videoImage,{marginLeft:20}]} source={require('../media/images/call.png')}></Image> 
        <Image style={styles.videoImage} source={require('../media/images/menu.png')}></Image> 
        </View>

        </View>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    row:{flexDirection:"row"},
    mainContainer:{height:80,backgroundColor:"#2C3641"},
    backArrow:{width:35, height:35,tintColor:"#fff"},
    dpImage:{ resizeMode:"contain",width:40,height:40,borderRadius:20, marginHorizontal:8},
    name:{color:"white",fontWeight:"bold", fontSize:17},
    videoImage:{tintColor:"white",resizeMode:"contain",width:25,height:25, marginHorizontal:5}
})