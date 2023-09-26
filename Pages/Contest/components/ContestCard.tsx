import { 
    StyleSheet ,
    Text,
    TouchableOpacity,
    View 
} from "react-native";

// import 
import { Entypo } from '@expo/vector-icons';
import {DATA} from "../../../data/data";

export default function ContestCard(props){
    return (
        <View style={styles.container}>
            <Text style={{fontWeight : "bold"}}>{props.title}</Text>
            <Text style={{marginVertical : "4%"}}>{props.content}</Text>
            <View style={{
                flexDirection : 'row' ,
                justifyContent : "space-between",
                alignItems : "center",
            }}>
                <View style={{flexDirection : "row" , marginRight : "5%"}}>
                    <View style={{flexDirection : "row" , alignItems  : "center"}}>
                        <Entypo name="dot-single" size={24} color="black" />
                        <Text>{props.date} days</Text>
                    </View>
                    <View style={{flexDirection : "row" , alignItems  : "center"}}>
                        <Entypo name="dot-single" size={24} color="black" />
                        <Text>{props.registered} Registered</Text>
                    </View>
                </View>
               
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Details")}>
                    <Text style={{color : "white"}}>View Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        borderRadius : 5,
        padding : "5%",
        backgroundColor : 'rgba(221, 190, 237 , 0.2)',
        marginVertical : '2.5%',
    },

    button : {
        borderColor : "purple" ,
        borderWidth : 1,
        padding : "4%",
        borderRadius : 5,
        backgroundColor : "rgba(107, 28, 176,1)",
    }
})