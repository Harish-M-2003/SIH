
import {
    View , 
    Text ,
    StyleSheet ,
} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function DetailsCard(props){

    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontWeight : "bold" , color : (props.isDark)? "white" : "black" , fontSize : 20 , marginBottom : "5%"}}>{props.title}</Text>
            </View>
            <View style={styles.cardTop}>
                <View style={{flexDirection  :"row" , justifyContent :"flex-start" , gap : 10 , flex : 1}}>    
                    <Ionicons name="md-person-sharp" size={18} color={(props.isDark)? "white" : "black"} />
                    <Text style={{color : (props.isDark)? "white" : "black"}}>20 registered</Text> 
                </View>
                <View style={{flexDirection : "row" , justifyContent : 'flex-start' , gap : 10 , flex : 1 }}>
                    <AntDesign name="calendar" size={18} color="white" />
                    <Text style={{color : (props.isDark)? "white" : "black"}}>14 days</Text>
                </View>
            </View>
            <View style={styles.cardTop}>
                <View style={styles.cardBottom}>
                    <Text style={{fontWeight : "bold" , color : (props.isDark)? "white" : "black"}}>Start Date</Text>
                    <Text style={{color : (props.isDark)? "white" : "black"}}>14 days</Text>
                </View>
                
                <View style={styles.cardBottom}>
                    <Text style={{fontWeight : "bold" , color : (props.isDark)? "white" : "black"}}>End Date</Text>
                    <Text style={{color : (props.isDark)? "white" : "black"}}>4 days left</Text>            
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
        backgroundColor : "rgba(221, 190, 237 , 0.125)",
        padding : "5%",
        gap : 10,
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