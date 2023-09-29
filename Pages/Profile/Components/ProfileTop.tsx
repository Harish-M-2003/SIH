import { 
    View ,
    StyleSheet, 
    Image,
    Dimensions,
    Text,
} from "react-native";

import { Users } from "../../../data/data";

export default function ProfileTop({isDark}){

    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={{uri : Users[0].profile_image}}
                    style={{
                        height : Dimensions.get("window").height / 8.25,
                        width : Dimensions.get("window").width / 4,
                        borderRadius : 50,
                    }}
                />
            </View>
            <View style={{flex : 1}}>
                <Text style={{fontSize : 24 , color : (isDark)?"white" : "black"}}>@{Users[0].profile_name}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container : {
        flex  : 0.25,
        // backgroundColor : "red",
        // flexDirection : "row",
        gap : 20,
        alignItems : "center",
        padding : "5%",
    }
})