import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    return (
        <View className="flex-1 items-center ">
            <Text className="bg-black text-white w-full text-center py-4 mb-8">
                {" "}
                This is Home page
            </Text>

            <View className="flex-1 items-center justify-center gap-y-6">
                <TouchableOpacity>
                    <Link
                        href={"/about"}
                        className=" text-white  text-[25px] bg-red-500 px-10 py-10 rounded-lg"
                    >
                        Press Here
                    </Link>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Link
                        href={"/profile"}
                        className=" text-white  text-[25px] bg-blue-500 px-10 py-10 rounded-lg"
                    >
                        Press Here
                    </Link>
                </TouchableOpacity>
            </View>
        </View>
    );
}
