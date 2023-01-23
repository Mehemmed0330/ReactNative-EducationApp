import React from 'react';
import { Text, ScrollView, View, SafeAreaView, StyleSheet, Pressable, TouchableOpacity } from "react-native"
import { useState } from 'react';

const Province = ({ navigation }) => {
    const data = [
        {
            name: "Central",
            id: 1
        },
        {
            name: "Eastern",
            id: 2
        },
        {
            name: "North Central",
            id: 3
        },
        {
            name: "Northern",
            id: 4
        },
        {
            name: "North Western",
            id: 5
        },
        {
            name: "Sabaragamuwa",
            id: 6
        },
        {
            name: "Southern",
            id: 7
        },
        {
            name: "Uva",
            id: 8
        },
        {
            name: "Western",
            id: 9
        }
    ]
    const [itemColor, setItemColor] = useState("#5667FD");
    const [textColor, setTextColor] = useState("white");
    const [clickId, setClickId] = useState("");
    const changeColor = (id) => {
        setClickId(id)
        if (id === clickId) {
            setItemColor("#E6E6E6")
            setTextColor("black")
            setClickId("")

        }
        else {
            setItemColor("#5667FD")
            setTextColor("white")

        }
    }
    return (

        <ScrollView style={{ backgroundColor: "rgb(244,245,249)" }}>
            <SafeAreaView style={{ backgroundColor: "rgb(244,245,249)", paddingHorizontal: '8%' }}>
                <View style={{ marginTop: 21 }}>
                    <Text style={{ color: "#364356", fontSize: 25, fontWeight: "600" }}>What's your province?</Text>
                </View>
                <View style={{ backgroundColor: "#EDEDED", borderRadius: 8, paddingHorizontal: 16, paddingVertical: 18, marginTop: 33 }}>
                    <View>
                        <Text style={{ color: "#636D77", fontSize: 18, fontWeight: "600" }}>
                            Provinces if Sri Lanka
                        </Text>
                    </View>
                    <View style={{ marginTop: 11, display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", }}>
                        {data.map((element) => (
                            <TouchableOpacity onPress={() => changeColor(element.id)} key={element.id} style={{ marginBottom: 16, backgroundColor: clickId === element.id ? itemColor : "#E6E6E6", borderRadius: 10.47, width: 148, height: 53, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "#364356", fontSize: 16.26, fontWeight: "500", color: clickId === element.id ? textColor : "black" }}>
                                    {element.name}
                                </Text>
                            </TouchableOpacity>
                        ))}

                    </View>
                </View>
                <View style={{ backgroundColor: "rgb(244,245,249)", marginLeft: "auto", marginRight: "auto", paddingVertical: 100, width: "80%" }}>
                    <Pressable style={styles.button} onPress={() => navigation.navigate("ExploreDraw")}>
                        <Text style={styles.text}>Next</Text>
                    </Pressable>
                    <Pressable style={styles.skip} onPress={() => navigation.navigate("ExploreDraw")}>
                        <Text style={styles.skipText}>Skip</Text>
                    </Pressable>
                </View>
            </SafeAreaView >
        </ScrollView>

    )

}
const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        paddingHorizontal: '3%',
        backgroundColor: 'rgb(244,245,249)',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 17,
        paddingHorizontal: 32,
        borderRadius: 12,
        elevation: 3,
        backgroundColor: '#5667FD'
    },
    skip: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 17,
        paddingHorizontal: 32,
        borderWidth: 0,
        marginTop: 33
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    skipText: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: '400',
        letterSpacing: 0.25,
        color: '#5667FD',
    },
});
export default Province;