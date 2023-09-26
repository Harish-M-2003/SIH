import { 
    StyleSheet ,
    View , 
    Text, 
    TextInput,
    ScrollView ,
    TouchableOpacity ,
} from "react-native";

import {useState} from "react";

import ContestCard from "./components/ContestCard";
import BottomNavigation from "../../AppComponent/BottomNavigation";
import { DATA } from "../../data/data";

export default function Contest({navigation}){

    const [currentTab , setCurrentTab] = useState(0);

    return (
        <View style={{flex : 1}}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator = {false}>
                <Text style={styles.title}>Contests</Text>
                <TextInput 
                    placeholder="search for contests" 
                    placeholderTextColor={"gray"}
                    style={{
                        padding : "2.5%" ,
                        borderWidth : 1 ,
                        borderColor : "rgba(0,0,0,0.2)" ,
                        borderRadius : 10,
                        marginVertical : "5%",
                    }}
                />
                <View style={{
                    flexDirection : "row" ,
                    justifyContent : "space-between" ,
                    borderWidth : 1 ,
                    borderColor : "rgba(0,0,0,0.1)",
                    borderRadius : 5,
                }}>
                    <TouchableOpacity 
                        onPress={() => setCurrentTab(0)}
                        style={{
                        flex : 1 ,
                        padding : "5%" ,
                        alignItems : "center" , 
                        borderTopLeftRadius  : 5,
                        borderBottomLeftRadius  : 5,
                        backgroundColor : (currentTab == 0)? "rgba(107, 28, 176,1)" : "transparent"
                    }} >
                        <Text style={{fontWeight : "bold" , color : (currentTab == 0)? "white" : "black"}}>All Contests</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => setCurrentTab(1)}
                        style={{ 
                            flex : 1 , 
                            padding : "5%" , 
                            alignItems : "center",
                            borderTopRightRadius  : 5,
                            borderBottomRightRadius  : 5,
                            backgroundColor : (currentTab != 0)? "rgba(107, 28, 176,1)" : "transparent"
                    }}>
                        <Text style={{fontWeight : "bold" , color : (currentTab != 0)?"white" : "black"}}>Your Contest</Text>
                    </TouchableOpacity>
                </View>
                {
                    DATA.map((value , index) => (
                        <ContestCard 
                            navigation={navigation}
                            key={value.id}
                            title={value.title} 
                            content={value.content} 
                            date={value.days}
                            registered={value.registered}
                        />
                    ))
                }
                <View style={{height : 90}}/>
            </ScrollView>
            <BottomNavigation navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        // backgroundColor  :"red",
        paddingTop : "5%",
        paddingHorizontal : "5%",
        // paddingBottom : "20%",
    },

    title : {
        color : "rgba(107, 28, 176,1)",
        fontSize : 24,
        fontWeight : "bold",
    }

});