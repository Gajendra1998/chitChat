import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../components/HomeHeader'

const Home = ({navigation}) => {

  const [isChat, setIschat] = useState(true)
  const [isStatus, setIsstatus] = useState(false)
  const [isCall, setIscall] = useState(false)

  const data=['Harshit Beta','9834735628','Mark Zuck ','Elon chacha','Modi ji','Reena','Rahul ji','Amit Shah','Mukesh Ambani','Neeta Ambani','Ajim Premji']

  return (
    <View style={styles.mainContainer}>
      <HomeHeader />
      <View style={[styles.row, styles.tabContainer]}>
        <View style={{ flexDirection: "row", flex: 1, alignItems: "flex-end", marginLeft: 10 }}>

          <TouchableHighlight style={{ padding: 8, paddingHorizontal: 15, borderBottomWidth: 3, borderColor: "#2C3641" }} onPress={() => { }}>
            <Image style={[styles.groupImage]} source={require('../media/images/group.png')}></Image>
          </TouchableHighlight>

          <TouchableHighlight style={{ padding: 8, paddingHorizontal: 25, borderBottomWidth: 3, borderColor: "#25D366" }} onPress={() => { }}>
            <Text style={isChat ? styles.activeTab : styles.Tab}>Chats</Text>
          </TouchableHighlight>

          <TouchableHighlight style={{ padding: 8, paddingHorizontal: 25, borderBottomWidth: 3, borderColor: "#2C3641" }} onPress={() => { }}>
            <Text style={isStatus ? styles.activeTab : styles.Tab}>Status</Text>
          </TouchableHighlight>

          <TouchableHighlight style={{ padding: 8, paddingHorizontal: 15, borderBottomWidth: 3, borderColor: "#2C3641" }} onPress={() => { }}>
            <Text style={[isCall ? styles.activeTab : styles.Tab, { }]}>Calls</Text>
          </TouchableHighlight>
        </View>
      </View>
      {
        data.map((item, index)=>{
          return(
            <TouchableOpacity key={index} onPress={()=>{navigation.push('Chat')}}>
            <View style={{ borderWidth: 0, borderColor: "red", marginVertical: 10, flexDirection: "row", alignItems: "center" }}>
            <Image style={[styles.dpImage]} source={require('../media/images/dp.png')}></Image>
            <View style={{ marginLeft: 10, flex: 1 }}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "500" }}>{item}</Text>
                <Text style={{ color: "grey", fontSize: 13, marginRight: 15 }}>1:36 AM</Text>
              </View>
              <Text style={{ color: "grey", fontSize: 16 }}>nahi </Text>
            </View>
          </View>
          </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer: { backgroundColor: "#151A18", flex: 1 },
  tabContainer: { height: 60, backgroundColor: "#2C3641" },
  name: { color: "#C5C5C5", fontWeight: "500", fontSize: 18, marginLeft: 10 },
  groupImage: { tintColor: "#C5C5C5", resizeMode: "contain", width: 30, height: 30, borderRadius: 20 },
  dpImage: { resizeMode: "contain", width: 40, height: 40, borderRadius: 20, marginHorizontal: 8 },
  activeTab: { color: "#25D366", fontWeight: "500", fontSize: 18, marginLeft: 10 },
  Tab: { color: "#C5C5C5", fontWeight: "500", fontSize: 18, marginLeft: 10 }
})