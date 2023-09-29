import { 
    StyleSheet ,
    View , 
    Text, 
    TextInput,
    ScrollView ,
    TouchableOpacity, 
    useColorScheme,
} from "react-native";

import {useState} from "react";
import * as NavigationBar from "expo-navigation-bar";

import ContestCard from "./components/ContestCard";
import BottomNavigation from "../../AppComponent/BottomNavigation";
import { DATA } from "../../data/data";

export default function Contest({navigation}){

    
    const isDark = useColorScheme() === "dark";
    
    const [currentTab , setCurrentTab] = useState(0);
    const [contests , setContest] = useState(DATA);


    NavigationBar.setBackgroundColorAsync("black")

    function findContest(name){
        
            let events = DATA.filter((contest) =>  contest.title.toLowerCase().includes(name.toLowerCase()));
            setContest(events);
        
    }

    return (
        <View style={{flex : 1 , backgroundColor : (isDark)?"black" : "white"}}>
            
            <ScrollView style={styles.container} showsVerticalScrollIndicator = {false}>
                <Text style={[styles.title, {color : (isDark)?"white":"black"}]}>Contests</Text>
                <TextInput 
                    onChangeText = {(e) => findContest(e)}
                    placeholder="Search by Contest Name" 
                    placeholderTextColor={"gray"}
                    style={{
                        padding : "2.5%" ,
                        // borderWidth : 1 ,
                        // borderColor : "rgba(111,111,111,0.5)" ,
                        // backgroundColor : "rgba(111,111,111,0.5)",
                        backgroundColor : "rgba(111,111,111,0.2)",
                        borderRadius : 10,
                        marginVertical : "5%",
                        color : (isDark)?"white":"black",
                    }}
                />
                <View style={{
                    flexDirection : "row" ,
                    justifyContent : "space-between" ,
                    borderWidth : 1 ,
                    borderColor : "rgba(0,0,0,0.1)",
                    borderRadius : 5,
                    padding : "0.5%"
                }}>
                    <TouchableOpacity 
                        onPress={() => setCurrentTab(0)}
                        style={{
                        flex : 1 ,
                        padding : "5%" ,
                        alignItems : "center" , 
                        borderRadius  : 5,
                        backgroundColor : (currentTab == 0)? "rgba(107, 28, 176,1)" : "transparent"
                    }} >
                        <Text style={{fontWeight : "bold" , color : (isDark)?"white":(currentTab !== 0)?"rgba(107, 28, 176,1)":"white"}}>All Contests</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => setCurrentTab(1)}
                        style={{ 
                            flex : 1 , 
                            padding : "5%" , 
                            alignItems : "center",
                            borderRadius  : 5,
                            backgroundColor : (currentTab != 0)? "rgba(107, 28, 176,1)" : "transparent"
                    }}>
                        <Text style={{fontWeight : "bold" , color : (isDark)?"white":(currentTab !== 1)?"rgba(107, 28, 176,1)":"white"}}>Your Contest</Text>
                    </TouchableOpacity>
                </View>
                {
                    contests.map((value , index) => (
                        <ContestCard 
                            isDark={isDark}
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
            <BottomNavigation navigation={navigation} isDark={isDark}/>
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
        // color : "rgba(107, 28, 176,1)",rgba(107, 28, 176,1)
        color : "white",
        fontSize : 30,
        fontWeight : "bold",
    }

});