import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TouchableOpacity>
                {/* <Link href={"/about"} className="bg-red-500 px-10 py-10 text-white rounded-lg text-[25px]">Press Here</Link> */}
                <Text className="bg-red-500 px-10 py-10 text-white rounded-lg text-[25px]">
                    <Link href={"/about"}> Press Here</Link>
                </Text>
            </TouchableOpacity>
        </View>
    );
}
