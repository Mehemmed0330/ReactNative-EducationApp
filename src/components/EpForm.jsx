import { View, StyleSheet, TextInput, Text } from "react-native"
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/Entypo';
import NoEye from 'react-native-vector-icons/Entypo'
import { useState } from 'react';

export default function NepForm() {
    const [secure, setSecure] = useState(true);
    return (
        <View style={{ marginTop: 10 }}>
            <View style={{ marginLeft: "auto", marginRight: "auto", width: "83%", marginTop: 20 }}>
                <Text style={{ marginBottom: 11, fontSize: 16 }}>Email address</Text>
                <CardView
                    cardElevation={7}
                    cardMaxElevation={7}
                    cornerRadius={8}
                >
                    <TextInput
                        style={styles.simpleInput}
                        placeholder="name@example.com"
                    />
                </CardView>
            </View>
            <View style={{ marginLeft: "auto", marginRight: "auto", width: "83%" }}>
                <Text style={{ marginBottom: 11, marginTop: 20, fontSize: 16 }}>Password</Text>
                <CardView
                    cardElevation={7}
                    cardMaxElevation={7}
                    cornerRadius={8}
                >
                    <View style={styles.eyeSection}>
                        <TextInput
                            style={styles.inputPassword}
                            accessibilityLabel="Sign In"
                            placeholder='************'
                            secureTextEntry={secure ? true : false}
                        />
                        {!secure ? <NoEye name='eye-with-line' size={18} color="black" style={{ marginHorizontal: 5 }} onPress={() => setSecure(view => !view)} /> : <Icon name='eye' size={18} color="black" style={{ marginHorizontal: 5 }} onPress={() => setSecure(view => !view)} />}

                    </View>
                </CardView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    simpleInput: {
        height: 40,
        paddingHorizontal: 15,
        borderRadius: 8,
        backgroundColor: "white",
        fontSize: 16

    },
    inputPassword: {
        height: 40,
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        borderRadius: 8,
        backgroundColor: "white",
        fontSize: 16
    },
    eyeSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 15
    },
})