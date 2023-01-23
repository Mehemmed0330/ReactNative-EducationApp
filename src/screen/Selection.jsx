import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, Platform, UIManager, Pressable, Image, TouchableOpacity } from 'react-native';
import { AccordionItem } from 'react-native-accordion-list-view';
import Art from "../assets/images/art.png"
import Commerce from "../assets/images/Commerce.png"
import Maths from "../assets/images/maths.png"
import Science from "../assets/images/science.png"

const Selection = ({ navigation }) => {
    const data = [
        {
            id: 0,
            title: 'Grade 1-5',
            body: [
                {
                    id: 101,
                    text: "Art",
                    surname: `${Art}`
                },
                {
                    id: 102,
                    text: "Science",
                    surname: `${Science}`
                },

                {
                    id: 103,
                    text: "Maths",
                    surname: `${Maths}`
                },
                {
                    id: 104,
                    text: "Commerce",
                    surname: `${Commerce}`
                },

            ],
        },
        {
            id: 1,
            title: 'Grade 6-9',
            body: [
                {
                    id: 105,
                    text: "Art",
                    surname: `${Art}`
                },
                {
                    id: 106,
                    text: "Science",
                    surname: `${Science}`
                },

                {
                    id: 107,
                    text: "Maths",
                    surname: `${Maths}`
                },
                {
                    id: 108,
                    text: "Commerce",
                    surname: `${Commerce}`
                },

            ],
        },
        {
            id: 2,
            title: 'Grade 10-11',
            body: [
                {
                    id: 109,
                    text: "Art",
                    surname: `${Art}`
                },
                {
                    id: 110,
                    text: "Science",
                    surname: `${Science}`
                },

                {
                    id: 111,
                    text: "Maths",
                    surname: `${Maths}`
                },
                {
                    id: 112,
                    text: "Commerce",
                    surname: `${Commerce}`
                },

            ],
        },
        {
            id: 3,
            title: 'Grade 12-13',
            body: [
                {
                    id: 113,
                    text: "Art",
                    surname: `${Art}`
                },
                {
                    id: 114,
                    text: "Science",
                    surname: `${Science}`
                },

                {
                    id: 115,
                    text: "Maths",
                    surname: `${Maths}`
                },
                {
                    id: 116,
                    text: "Commerce",
                    surname: `${Commerce}`
                },

            ],
        },
    ];
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

    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, []);
    return (
        <ScrollView style={{ backgroundColor: "rgb(244,245,249)" }}>
            <SafeAreaView style={{ paddingHorizontal: "8%" }}>
                <View style={{ marginTop: 21 }}>
                    <Text style={{ color: "#364356", fontSize: 25, fontWeight: "600" }}>What's your grade?</Text>
                </View>
                <ScrollView style={styles.container}>
                    {data.map(item => (
                        <AccordionItem
                            isRTL={true}
                            containerStyle={{ backgroundColor: "#EDEDED", borderRadius: 8, paddingVertical: 10, marginTop: 18, paddingHorizontal: 16 }}
                            key={item.id}
                            customTitle={() => <Text style={{ paddingHorizontal: 8, fontSize: 18, fontWeight: "600" }}>{item.title}</Text>}
                            customBody={() => <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", }}>
                                {item.body.map((element) =>
                                    <TouchableOpacity onPress={() => changeColor(element.id)} key={element.id} style={{ width: 147, height: 53, backgroundColor: "red", paddingHorizontal: 16, marginTop: 16, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 10.47, backgroundColor: clickId === element.id ? itemColor : "#E6E6E6" }}>
                                        <Image source={element.surname} style={{ height: 20.79, width: 20.79 }} />
                                        <Text style={{ fontSize: 16.26, fontWeight: "500", color: "#364356", marginLeft: 20, color: clickId === element.id ? textColor : "black" }}>{element.text}</Text>
                                    </TouchableOpacity>
                                )}
                            </View>}
                            animationDuration={400}
                        />
                    ))}
                    <View style={{ backgroundColor: "rgb(244,245,249)", marginLeft: "auto", marginRight: "auto", marginTop: 80, width: "80%" }}>
                        <Pressable style={styles.button} onPress={() => navigation.navigate("ProvinceDraw")}>
                            <Text style={styles.text}>Next</Text>
                        </Pressable>
                        <Pressable style={styles.skip} onPress={() => navigation.navigate("ProvinceDraw")}>
                            <Text style={styles.skipText}>Skip</Text>
                        </Pressable>
                    </View>
                </ScrollView>


            </SafeAreaView >
        </ScrollView>

    );
};

export default Selection;
const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        paddingHorizontal: '0%',
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