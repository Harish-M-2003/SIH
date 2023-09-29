
import {
    View , 
    Text ,
    StyleSheet ,
    TouchableOpacity ,
} from  "react-native";
import { Feather } from '@expo/vector-icons';
// import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons'; 

export default function BottomNavigation(){
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <AntDesign name="home" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather name="pie-chart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather name="settings" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "white",
        flexDirection : "row",
        justifyContent : "space-between",
        paddingHorizontal : "10%",
        paddingVertical : "5%",
        position : "absolute",
        bottom : 0,
        left : 0,
        right : 0,
    }
})