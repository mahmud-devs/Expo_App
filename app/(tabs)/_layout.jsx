import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "red",
                    bottom: 30,
                    height: 80,
                    marginHorizontal: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                },
                tabBarIconStyle: {
                    width: "100%",
                    height: "100%",
                },
            }}
        >
            <Tabs.Screen
                name="(home)/index"
                options={{
                    tabBarIcon: (focused) => {
                        if (focused.focused) {
                            return (
                                <View className="flex-1 items-center justify-center">
                                    <Entypo
                                        name="home"
                                        size={24}
                                        color="blue"
                                    />
                                    <Text className="text-white">Home</Text>
                                </View>
                            );
                        } else {
                            return (
                                <View className="flex-1 items-center justify-center">
                                    <Entypo
                                        name="home"
                                        size={24}
                                        color="white"
                                    />
                                    <Text className="text-white">Home</Text>
                                </View>
                            );
                        }
                    },
                }}
            />
            <Tabs.Screen
                name="(login)/index"
                options={{
                    tabBarIcon: (focused) => {
                        if (focused.focused) {
                            return (
                                <View className="flex-1 items-center justify-center">
                                    <Entypo
                                        name="login"
                                        size={24}
                                        color="blue"
                                    />
                                    <Text className="text-white">Login</Text>
                                </View>
                            );
                        } else {
                            return (
                                <View className="flex-1 items-center justify-center">
                                    <Entypo
                                        name="login"
                                        size={24}
                                        color="white"
                                    />
                                    <Text className="text-white">Login</Text>
                                </View>
                            );
                        }
                    },
                }}
            />
            <Tabs.Screen
                name="(signin)/index"
                options={{
                    tabBarIcon: (focused) => {
                        if (focused.focused) {
                            return (
                                <View className="flex-1 items-center justify-center">
                                    <AntDesign
                                        name="user"
                                        size={24}
                                        color="blue"
                                    />
                                    <Text className="text-white">Sign in</Text>
                                </View>
                            );
                        } else {
                            return (
                                <View className="flex-1 items-center justify-center">
                                    <AntDesign
                                        name="user"
                                        size={24}
                                        color="white"
                                    />
                                    <Text className="text-white">Sign in</Text>
                                </View>
                            );
                        }
                    },
                }}
            />
        </Tabs>
    );
};

export default _layout;
