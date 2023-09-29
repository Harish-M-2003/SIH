
import {
    View ,
    StyleSheet , 
    Text ,
    TouchableOpacity, 
    ScrollView,
    useColorScheme,
} from "react-native";
import { DATA } from "../../data/data";
import DetailsCard from "./component/DetailsCard";
import BottomNavigation from "../../AppComponent/BottomNavigation";
import { Entypo } from '@expo/vector-icons';
import * as Navigation from "expo-navigation-bar";
import ContestCodeCard from "./component/ContestCodeCard";

export default function Details({navigation}){

    const isDark = useColorScheme() === "dark";

    Navigation.setBackgroundColorAsync("black");

    return (
        <View style={[styles.container,{backgroundColor : (isDark)?"black" : "white"}]}>
            <ScrollView style={{flex : 1}} showsVerticalScrollIndicator = {false}>
                <Text style={{
                    fontSize : 30 ,
                    color : (isDark)? "white" : "black",
                    fontWeight : "bold",
                    marginBottom : "5%",
                }}>Contest Details</Text>
                <DetailsCard isDark={isDark} title={ DATA[0].title }/>
                <View style={{
                backgroundColor : "rgba(221, 190, 237 , 0.125)" ,
                flex : 1 ,
                marginTop : "5%" ,
                borderRadius : 5,
                paddingHorizontal : "5%",
                paddingVertical : "5%",
            }}
                >
                    
                <Text style={{fontWeight : "bold" , color : (isDark)? "white" : "black" , fontSize : 20}}>About Contest</Text>
                    {
                        DATA.map((value , index) => (
                            <View style={{flexDirection : "row" , paddingHorizontal  : "2.5%" ,marginVertical : "5%" }}>
                                <Entypo name="dot-single" size={24} color={(isDark)? "white" : "black"} />
                                <View style={{flex : 1}}>
                                    <Text style={{color : (isDark)? "white" : "black"}}>{DATA[0].content}</Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
                
                <View style={{ borderRadius : 5 , paddingBottom : "5%" , marginTop : "15%"}}>
                        <TouchableOpacity style={{
                                backgroundColor : "rgba(107, 28, 176,1)" ,
                                padding : "5%",
                                borderRadius : 5,
                                alignItems : "center",
                        }}>
                            <Text style={{color : "white"}}>Register</Text>
                        </TouchableOpacity>
                </View>
                <ContestCodeCard/>
                <View style={{height : 50}}/>
            </ScrollView>
            
            
            <BottomNavigation isDark={isDark} navigation={navigation}/>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : "5%",
    },
})