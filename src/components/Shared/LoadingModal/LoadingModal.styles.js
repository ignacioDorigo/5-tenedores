import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    overlay: {
        height: 100,
        width: 200,
        backgroundColor: "#FFFFFF",
        borderColor: "#00A680",
        borderWidth: 2,
        borderRadius: 10,
    },
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#00A680",
        textTransform: "uppercase",
        marginTop: 10,
    }
});