import { Stack ,} from "expo-router";
import "../global.css";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="(about)/about"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="(profile)/profile"
                options={{ headerShown: false }}
            />
        </Stack>
    );
}
