
import {
    View , 
    Text ,
    StyleSheet ,
} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function DetailsCard(){

    return (
        <View style={styles.container}>
            <View style={styles.cardTop}>
                <View style={{flexDirection  :"row" , justifyContent :"flex-start" , gap : 10 , flex : 1}}>    
                    <Ionicons name="md-person-sharp" size={18} color="black" />
                    <Text>20 registered</Text> 
                </View>
                <View style={{flexDirection : "row" , justifyContent : 'flex-start' , gap : 10 , flex : 1 }}>
                    <AntDesign name="calendar" size={18} color="black" />
                    <Text>14 days</Text>
                </View>
            </View>
            <View style={styles.cardTop}>
                <View style={styles.cardBottom}>
                    <Text style={{fontWeight : "bold"}}>Start Date</Text>
                    <Text>14 days</Text>
                </View>
                
                <View style={styles.cardBottom}>
                    <Text style={{fontWeight : "bold"}}>End Date</Text>
                    <Text>4 days left</Text>            
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 0.2,
        marginVertical : "5%",
        borderRadius : 5,
        backgroundColor : "rgba(221, 190, 237 , 0.2)",
        padding : "5%",
    },

    cardBottom : {
        flex : 1,
        // backgroundColor : "red",
        justifyContent : "flex-start",
        // flexDirection : "row",
        gap : 10,
    },

    cardTop : {
        flex : 1 ,
        flexDirection :"row" , 
        justifyContent : "space-between",
    },


})