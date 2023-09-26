
import {
    View , 
    StyleSheet ,
    TouchableOpacity ,
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function BottomNavigation({navigation}){
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Feather name="home" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Contest")}>
                <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons name="person-outline" size={29} color="black" />
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
        paddingHorizontal : "7%",
        paddingVertical : "3%",
        borderTopWidth : 1,
        borderTopColor : "rgba(0,0,0,0.1)",
    }
})