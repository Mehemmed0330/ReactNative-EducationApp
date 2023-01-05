import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import Filter from "react-native-vector-icons/Fontisto"


export default function PropularInstitution() {
    return (
        <ScrollView>
            <View style={{ marginTop: 30 }}>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                    <Text style={{ fontSize: 20, fontWeight: "600", color: "#364356" }}>
                        Propular Teacher
                    </Text>
                    <Filter name='filter' size={25} />
                </View>

                <View style={{ marginTop: 30 }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 7, borderRadius: 12 }}>
                        <View style={{ backgroundColor: "rgb(221,225,255)", height: 145, display: "flex", justifyContent: "center", borderRadius: 12 }}>
                            <Image source={require("../assets/images/instituation1.png")} />
                        </View>
                        <View >
                            <View style={{ paddingHorizontal: 8 }}>
                                <View>
                                    <Text style={{ color: "#364356", fontSize: 20, fontWeight: "600", }}>
                                        Victory College
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 12, color: "#364356", fontWeight: "600" }}>
                                        Bio Science
                                    </Text>
                                </View>
                                <View style={{ width: 175, }}>

                                    <Text style={{ flex: 1, color: "#121212", fontSize: 12, fontWeight: "300", fontFamily: "bold", }}>
                                        Studying how CBD awareness and availability as it related to pain management alternatives.
                                    </Text>
                                </View>
                            </View>
                        </View>

                    </View>


                </View>


            </View>
        </ScrollView>
    )
}
