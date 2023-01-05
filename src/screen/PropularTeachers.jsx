import React from 'react'
import { ScrollView, View, Text, Image, useWindowDimensions } from 'react-native'
import Filter from "react-native-vector-icons/Fontisto"

export default function PropularTeachers() {
    const { width } = useWindowDimensions()
    const SIZE = width * 0.3
    const data = [
        {
            id: 1,
            name: "Cassie Valdez",
            subject: "Biology",
            image: require("../assets/images/Rectangle18.png"),
            backgroundColor: "rgb(207,104,125)"

        },
        {
            id: 2,
            name: "Paul Simons",
            subject: "Chemistry",
            image: require("../assets/images/Rectangle2.png"),
            backgroundColor: "rgb(109,100,100)"

        },
        {
            id: 3,
            name: "Graham Osbor",
            subject: "Physics",
            image: require("../assets/images/Rectangle3.png"),
            backgroundColor: "rgb(231,231,231)"


        }

    ]

    return (
        <ScrollView>
            <View style={{ marginTop: 30 }}>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                    <Text style={{ fontSize: 20, fontWeight: "600", color: "#364356" }}>
                        Propular Teacher
                    </Text>
                    <Filter name='filter' size={25} />
                </View>


                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEventThrottle={16}
                    decelerationRate="fast"
                    style={{ marginTop: 30 }}
                >
                    {data.map((item) => {
                        return (
                            <View style={{ width: SIZE, height: 176, backgroundColor: "white", padding: 8, borderRadius: 12, marginRight: 16 }}>
                                <View style={{ backgroundColor: `${item.backgroundColor}`, borderRadius: 10 }}>
                                    <Image source={item.image} />
                                </View>
                                <View style={{ marginTop: 8 }}>
                                    <Text style={{ fontSize: 15, fontWeight: "600", lineHeight: 21, color: "#364356" }}>
                                        {item.name}
                                    </Text>
                                    <Text style={{ fontSize: 12, fontWeight: "400", lineHeight: 14 }}>
                                        {item.subject}
                                    </Text>
                                </View>
                            </View>
                        );
                    })}


                </ScrollView>

            </View>
        </ScrollView>
    )
}
