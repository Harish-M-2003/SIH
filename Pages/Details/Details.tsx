
import {
    View ,
    StyleSheet , 
    Text ,
} from "react-native";
import { DATA } from "../../data/data";
import DetailsCard from "./component/DetailsCard";
import BottomNavigation from "../../AppComponent/BottomNavigation";

export default function Details({navigation}){
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize : 20 ,
                color : "rgba(107, 28, 176,1)",
                fontWeight : "bold",
                marginBottom : "5%",
            }}>Contest Details</Text>
            <Text style={{fontWeight : "bold"}}>{DATA[0].title}</Text>
            <DetailsCard/>
            <BottomNavigation navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : "5%",
    },
})