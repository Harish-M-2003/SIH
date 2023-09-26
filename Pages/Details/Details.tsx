
import {
    View ,
    StyleSheet , 
    Text ,
    TouchableOpacity, 
    ScrollView,
} from "react-native";
import { DATA } from "../../data/data";
import DetailsCard from "./component/DetailsCard";
import BottomNavigation from "../../AppComponent/BottomNavigation";
import { Entypo } from '@expo/vector-icons';


export default function Details({navigation}){
    return (
        <View style={styles.container}>
            <ScrollView style={{flex : 1}} showsVerticalScrollIndicator = {false}>
                <Text style={{
                    fontSize : 20 ,
                    color : "rgba(107, 28, 176,1)",
                    fontWeight : "bold",
                    marginBottom : "5%",
                }}>Contest Details</Text>
                <Text style={{fontWeight : "bold"}}>{DATA[0].title}</Text>
                <DetailsCard/>
                <Text style={{fontWeight : "bold"}}>About the Contest</Text>
                <View style={{
                backgroundColor : "rgba(221, 190, 237 , 0.2)" ,
                flex : 1 ,
                marginTop : "5%" ,
                borderRadius : 5}}
                >
                    {
                        DATA.map((value , index) => (
                            <View style={{flexDirection : "row" , paddingHorizontal  : "2.5%" ,marginVertical : "5%" }}>
                                <Entypo name="dot-single" size={24} color="black" />
                                <View style={{flex : 1}}>
                                    <Text>{DATA[0].content}</Text>
                                </View>
                            </View>
                        ))
                    }
                    <View style={{alignItems : "center" , borderRadius : 5 , paddingBottom : "5%"}}>
                        <TouchableOpacity style={{
                                backgroundColor : "rgba(107, 28, 176,1)" ,
                                padding : "5%",
                                borderRadius : 5,
                        }}>
                            <Text style={{color : "white"}}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height : 50}}/>
            </ScrollView>
            
            
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