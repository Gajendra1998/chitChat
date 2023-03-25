import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const HomeHeader = () => {
    return (
        <View style={[styles.row, styles.mainContainer]}>
            <View style={[styles.row, { alignItems: "center", justifyContent: "space-between", flex: 1 ,marginTop:15}]}>
                <View style={[styles.row, { alignItems: "center" }]}>
                    {/* <Image style={styles.backArrow} source={require('../media/images/back.png')}></Image> */}
                    {/* <Image style={styles.dpImage} source={require('../media/images/dp.png')}></Image>  */}
                    <Text style={styles.name}>WhatsApp</Text>
                </View>

                <View style={[styles.row, { alignItems: "center" }]}>
                    <Image style={styles.videoImage} source={require('../media/images/camera.png')}></Image>
                    <Image style={[styles.videoImage, { marginLeft: 20 }]} source={require('../media/images/search.png')}></Image>
                    <Image style={styles.videoImage} source={require('../media/images/menu.png')}></Image>
                </View>

            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    row: { flexDirection: "row" },
    mainContainer: {height: 40, backgroundColor: "#2C3641" },
    backArrow: { width: 35, height: 35, tintColor: "#fff" },
    dpImage: { resizeMode: "contain", width: 40, height: 40, borderRadius: 20, marginHorizontal: 8 },
    name: { color: "#C5C5C5", fontWeight: "bold", fontSize: 20,marginLeft:10 },
    videoImage: { tintColor: "#C5C5C5", resizeMode: "contain", width: 25, height: 25, marginHorizontal: 5 }
})