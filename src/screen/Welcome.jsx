import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Button, Pressable } from 'react-native';

const Welcome = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: "rgb(244,245,249)" }}>
            <View >
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingVertical: 20, marginTop: 20 }}>
                    <Image
                        source={require('../assets/images/Main.png')}
                        style={{ width: 324, height: 324, }}
                    />
                </View>
                <View>
                    <Text style={{ textAlign: "center", fontWeight: "600", fontSize: 20, color: "#364356" }}>
                        Let's find the "A" with us
                    </Text>
                    <Text style={{ textAlign: "center", color: "#636D77", fontSize: 18, lineHeight: 24, fontWeight: "500", marginTop: 16 }}>
                        Please Sign in to view personalized
                        recommendations
                    </Text>
                </View>
                <View style={{ marginLeft: "auto", marginRight: "auto", width: "60%", marginTop: 100 }}>
                    <Pressable style={styles.button} onPress={() => navigation.navigate("Sign up")}>
                        <Text Text style={styles.text}>Sign up</Text>
                    </Pressable>
                    <Pressable style={styles.skip} onPress={() => navigation.navigate("Sign in")}>
                        <Text style={styles.skipText}>Skip</Text>
                    </Pressable>
                </View>
            </View >

        </ScrollView >

    );


}
const styles = StyleSheet.create({
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
export default Welcome;