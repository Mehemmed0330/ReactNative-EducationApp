import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import Filter from "react-native-vector-icons/Fontisto"


export default function PropularInstitution() {

    const data = [
        {
            id: 1,
            image: require("../assets/images/instituation1.png"),
            title: "Victory College",
            kind: "Bio Science",
            text: "Studying how CBD awareness and availability as it related to pain management alternatives.",
            backgroundColor: "rgb(221,225,255)"
        },
        {
            id: 2,
            image: require("../assets/images/instituation2.png"),
            title: "New Montana",
            kind: "Bio Science",
            text: "Montana Higher Educational Institute. Gampaha montana.gampaha@gmail.com",
            backgroundColor: "rgb(255,159,146)"
        },
        {
            id: 3,
            image: require("../assets/images/instituation3.png"),
            title: "Susipwan Institute",
            kind: "Bio Science",
            text: "This is a private higher education center which conducting classes for GCE AL Students.",
            backgroundColor: "rgb(191,221,236)"
        }
    ]

    return (
        <ScrollView>
            <View style={{ marginTop: 30, width: "85%", marginLeft: "auto", marginRight: "auto", }}>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                    <Text style={{ fontSize: 20, fontWeight: "600", color: "#364356" }}>
                        Propular Institution
                    </Text>
                    <Filter name='filter' size={25} />
                </View>

                <View style={{ marginTop: 30 }}>
                    {data.map((item) => {
                        return (
                            <View key={item.id} style={{ display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 7, borderRadius: 12, marginBottom: 16 }}>
                                <View style={{ backgroundColor: `${item.backgroundColor}`, height: 161, width: 145, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: 12 }}>
                                    <Image source={item.image} />
                                </View>
                                <View >
                                    <View style={{ paddingHorizontal: 8 }}>
                                        <View>
                                            <Text style={{ color: "#364356", fontSize: 20, fontWeight: "600", }}>
                                                {item.title}
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 12, color: "#364356", fontWeight: "600" }}>
                                                {item.kind}
                                            </Text>
                                        </View>
                                        <View style={{ width: 175, }}>
                                            <Text style={{ flex: 1, color: "#121212", fontSize: 12, fontWeight: "300", fontFamily: "bold", }}>
                                                {item.text}
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        )
                    })}




                </View>


            </View>
        </ScrollView>
    )
}
