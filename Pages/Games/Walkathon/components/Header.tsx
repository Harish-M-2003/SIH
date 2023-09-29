
import {
    View ,
    StyleSheet ,
    Text ,
    ScrollView ,
} from "react-native";

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function  Header(){

    return (
        <View style={styles.container}>
            <AntDesign name="arrowleft" size={24} color="black" />
            <Entypo name="dots-three-vertical" size={18} color="black" />
        </View>
    );

}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        justifyContent : 'space-between',
        paddingHorizontal : "7%",
        paddingVertical : "5%",
    }
})