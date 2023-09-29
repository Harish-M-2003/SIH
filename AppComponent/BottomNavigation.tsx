
import {
    View , 
    StyleSheet ,
    TouchableOpacity ,
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function BottomNavigation({navigation , isDark}){
    return (
        <View style={[styles.container , {backgroundColor : (isDark)?"black" : "white"}]}>
            <TouchableOpacity>
                <Feather name="home" size={24} color={(!isDark)?"black" : "white"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Contest")}>
                <MaterialCommunityIcons name="gamepad-outline" size={24} color={(!isDark)?"black" : "white"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <MaterialIcons name="person-outline" size={29} color={(!isDark) ? "black" : "white"} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : "row",
        backgroundColor : "white",
        alignItems : "center",
        justifyContent : "space-between",
        position : "absolute",
        bottom : 0,
        left : 0,
        right : 0,
        paddingHorizontal : "10%",
        paddingVertical : "3%",
        borderTopWidth : 1,
        borderTopColor : "rgba(0,0,0,0.1)",
    }
})