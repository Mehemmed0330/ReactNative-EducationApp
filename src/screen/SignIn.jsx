import * as React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import NeForm from "../components/EpForm"

function SignIn({ navigation }) {
    return (
        <ScrollView style={{ backgroundColor: "rgb(244,245,249)" }}>
            <View>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 40 }}>
                    <Image source={require('../assets/images/SignIn.png')}
                        style={{ width: 266, height: 266, }}
                    />
                </View>
                <NeForm />
                <View style={{ marginLeft: "auto", marginRight: "auto", width: "60%", marginTop: 50 }}>
                    <Pressable style={styles.button} onPress={() => navigation.navigate("explore")}>
                        <Text style={styles.text}>Sign in</Text>
                    </Pressable>
                </View>
                <View style={{ marginTop: 33, flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 18 }}>
                        Don’t have account?
                    </Text>
                    <View style={{ marginLeft: 5 }}>
                        <Text onPress={() => navigation.navigate("Sign up")} style={{ color: "#5667FD", fontSize: 18 }}>
                            SignUp
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
export default SignIn;