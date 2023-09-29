import { StyleSheet ,
    Text ,
    TouchableOpacity ,
    View , 
    useColorScheme , 
} from "react-native";

import ProfileTop from "./Components/ProfileTop";
import { MaterialIcons } from '@expo/vector-icons';
import {useState} from "react";
import { Users } from "../../data/data";
// import useColorScheme from "react";


export default function Profile({navigation}){

    const [currentTab , setCurrentTab] = useState(0);
    const isDark = useColorScheme() === "dark";

    function changeTabColor(tab){
        if (tab === 0){
            setCurrentTab(0);
        } else if (tab === 1){
            setCurrentTab(1);
        } else {
            setCurrentTab(2);
        }
    }


    return (
        <View style={[styles.container , {backgroundColor : (isDark)?"black" : "white"}]}>
            <View style={{padding : "5%"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="keyboard-arrow-left" size={30} color={(isDark)?"white":"black"} />
                </TouchableOpacity>
            </View>
            <ProfileTop isDark={isDark}/>
            <View style={{ paddingHorizontal  : "5%" , marginBottom : "2%"}}>
                <Text style={{fontSize : 15 , color : "gray" , textAlign : "center"}}>{Users[0].about}</Text>
            </View>
            <View style={{flexDirection : "row" , marginHorizontal : "2%"}}>
                <TouchableOpacity style={{
                        borderBottomWidth : 1,
                        borderBottomColor : (currentTab === 0 )? "rgba(107, 28, 176,1)" : "transparent",
                        flex : 1 ,
                        padding : "3%" ,
                        margin : "1%" ,
                         borderRadius : 5,
                         alignItems : "center",
                        }}
                    onPress={(e) => changeTabColor(0)}
                >
                    <Text style={{color : (isDark)?"white":"black"}}>Scores</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                        borderBottomWidth : 1,
                        borderBottomColor : (currentTab === 1 )? "rgba(107, 28, 176,1)" : "transparent",
                        flex : 1 ,
                        padding : "3%" ,
                        margin : "1%" ,
                         borderRadius : 5,
                         alignItems : "center",
                        }}
                    
                        onPress={(e) => changeTabColor(1)}
                >
                    <Text style={{color : (isDark)?"white":"black"}}>History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                        borderBottomWidth : 1,
                        borderBottomColor : (currentTab === 2 )? "rgba(107, 28, 176,1)" : "transparent",
                        flex : 1 ,
                        padding : "3%" ,
                        margin : "1%" ,
                         borderRadius : 5,
                         alignItems : "center",
                    
                }}
                    
                onPress={(e) => changeTabColor(2)}
                >
                    <Text style={{color : (isDark)?"white":"black"}}>Contests</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "black",
    }
})