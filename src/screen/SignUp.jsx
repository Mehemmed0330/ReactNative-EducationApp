import * as React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import Nep from "../components/NepForm"

function DetailsScreen({ navigation }) {

    return (
        <ScrollView style={{ backgroundColor: "rgb(244,245,249)" }}>
            <View>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                    <Image source={require('../assets/images/SignUp.png')}
                        style={{ width: 353, height: 235, }}
                    />
                </View>
                <Nep />

                <View style={{ marginLeft: "auto", marginRight: "auto", width: "60%", marginTop: 40 }}>
                    <Pressable style={styles.button} onPress={() => navigation.navigate("Selection")}>
                        <Text style={styles.text}>Sign up</Text>
                    </Pressable>
                </View>
                <View style={{ marginTop: 33, flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 18 }}>
                        Don’t have account?
                    </Text>
                    <View style={{ marginLeft: 5 }}>
                        <Text onPress={() => navigation.navigate("Sign in")} style={{ color: "#5667FD", fontSize: 18 }}>
                            SignIn
                        </Text>
                    </View>

                </View>
            </View>
        </ScrollView>
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
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
export default DetailsScreen;