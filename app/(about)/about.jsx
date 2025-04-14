import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const about = () => {
    return (
        <View className="flex-1 justify-center items-center bg-black">
            <TouchableOpacity>
                <Link href={"/profile"} className="bg-green-500 px-10 py-10 text-white rounded-lg text-[25px]">
                    Press Here to profile
                </Link>
            </TouchableOpacity>
        </View>
    );
};

export default about;
