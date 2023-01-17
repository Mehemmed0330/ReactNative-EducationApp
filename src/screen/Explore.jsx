import React from 'react';
import { ScrollView, Text, View, Image, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useState } from 'react';
import Search from "react-native-vector-icons/AntDesign"
import CardView from 'react-native-cardview';
import Bar from "react-native-vector-icons/Foundation"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Components
import PropularTeachers from "../components/PropularTeachers"
import PropularInstitution from '../components/PropularInstitution';
import Welcome from './Welcome';
const Tab = createBottomTabNavigator();


const Explore = () => {

    return (
        <>
            <ScrollView style={{ backgroundColor: "rgb(244,245,249)" }}>
                <View style={{ width: "85%", marginLeft: "auto", marginRight: "auto" }}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
                        <View>
                            <View>
                                <Text style={{ fontSize: 32, fontWeight: "600", color: "#364356" }}>
                                    Good evening!
                                </Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: "600", color: "#636D77" }}>
                                    Hardline Scott
                                </Text>
                            </View>
                        </View>
                        <View style={{}}>
                            <Image source={require("../assets/images/Rectangle32.png")} style={{ height: 68, width: 68 }} />
                        </View>
                    </View>
                    <View style={{ marginTop: 30, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <CardView cardElevation={15}
                            cardMaxElevation={15}
                            cornerRadius={12} style={{ width: "78%" }}>
                            <View style={{ paddingHorizontal: 15, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "white" }}>
                                <TextInput
                                    placeholder='Search your teacher'
                                    style={{ fontSize: 15, fontWeight: "600", color: "#636D77", width: "80%" }}

                                />
                                <Search name='search1' size={20} style={{ backgroundColor: "#5667FD", color: "white", padding: 8, borderRadius: 10 }} />
                            </View>
                        </CardView>
                        <View>
                            <Bar name='graph-bar' size={30} color="black" />
                        </View>
                    </View>
                    <View>
                        <PropularTeachers />
                    </View>
                    <View>
                        <PropularInstitution />
                    </View>
                </View >
                {/* <Tab.Navigator>
                    <Tab.Screen name="Home" component={Welcome} options={{ headerShown: false }} />
                </Tab.Navigator> */}
            </ScrollView >
            <View>
                {/* <Tab.Navigator>
                    <Tab.Screen name="Home" component={Welcome} options={{ headerShown: false }} />
                </Tab.Navigator> */}
            </View>
        </>


    )

}

export default Explore;