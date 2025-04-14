import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const profile = () => {
    return (
        <View className="flex-1  items-center bg-blue-500">
            <Text className="bg-black text-white w-full text-center py-4 mb-8">
                This is profile page
            </Text>

            <View className="flex-1 items-center justify-center gap-y-6">
                <TouchableOpacity>
                    <Link
                        href={"/about"}
                        className=" text-white  text-[25px] bg-red-500 px-10 py-10 rounded-lg"
                    >
                        Press Here to About
                    </Link>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default profile;
