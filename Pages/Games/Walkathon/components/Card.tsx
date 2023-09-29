
import {
    View ,
    StyleSheet ,
    Dimensions
} from "react-native";

export default function Card({children}){
    return (
        <View style={styles.container} >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height : Dimensions.get("window").height / 5,
        width : Dimensions.get("window").width / 2 ,
        borderRadius : 20,
        backgroundColor : "white",
        // margin : "5%",
    }
})