import {
    View ,
    StyleSheet ,
    Text ,
    ScrollView ,
    Dimensions , 
} from "react-native";
import BottomNavigation from "./components/BottomNavigation";
import Header from "./components/Header";
// import Card from "./components/Card";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from "react-native-svg";
import { Users } from "../../../data/data";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ProgressCard from "./components/ProgressCard";
import { LineChart } from "react-native-gifted-charts";

export default function Home(){

    const DATA  = [
        {
            id: 0,
            day : "MON",
            date : 12,
        },
        {
            id: 1,
            day : "MON",
            date : 12,
        },
        {
            id: 2,
            day : "MON",
            date : 12,
        },
    ]

    const data = [{value: 0},{value: 20},{value: 18},{value: 100},{value: 85},{value : 40} , {value : 20}];

    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView style={{flex : 1}}>
                <View style={{paddingHorizontal : "5%" , paddingVertical : "3%"}}>
                    <Text style={{fontSize : 20 , fontWeight : "bold"}}>Hello {Users[0].profile_name}</Text>
                    
                </View>
                <View style={styles.topsection}>
                    <View style={{backgroundColor : "white" , margin : "0%" , padding : "5%" , flexDirection : "row" }}>
                        {
                            DATA.map((value , index) => (
                                <View style={{
                                        backgroundColor : (value.id == 0)? "rgba(107, 28, 176,1)":"rgba(0,0,0,0.1)" ,
                                        padding : "5%" ,
                                        alignItems : "center",
                                        borderRadius : 5,
                                        margin : "1%",

                                }}>
                                    <Text style={{fontWeight : "bold" , color :  (value.id == 0)?"white" : "black"}}>{value.day}</Text>
                                    <Text style={{fontWeight  : "bold" , color : (value.id == 0)?"white" : "black"}}>{value.date}</Text>
                                </View>        
                            ))
                        }
                    </View>
                </View>
                <View style={{flex : 1 , paddingLeft : "5%" , gap : 50}}>
                    <View style={{ flex  : 1 ,flexDirection  :"row" , gap : 10}}>
                    {/* <CircularProgress value={58} /> */}
                    <ProgressCard/>
                        <ProgressCard/>
                    </View>
                    <View style={{ flex  : 1}}>
                        <LineChart 
                            data={data} 
                            areaChart
                            startFillColor="rgba(107, 28, 176,1)"
                            startOpacity={0.8}
                            endFillColor="rgba(107, 28, 176,1)"
                            endOpacity={0.3}
                            color="rgba(107,28,176,0)"
                            curved
                            isAnimated
                            // hideDataPoints
                            // hideRules
                            hideYAxisText
                            // showVerticalLines
                            // rotateLabel
                            rulesType="solid"
                            rulesColor={"rgba(0,0,0,0.03)"}
                            pointerConfig={{
                                pointerColor : "rgba(107,28,176,1)",
                                pointerLabelComponent : (item) => (
                                    <View style={{backgroundColor : "green"}}>
                                        <Text style={{color : "red"}}>{item[0].value}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>               
                </View>
            </ScrollView>
            <BottomNavigation/>
        </View>
    )

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        // backgroundColor : "white",
        backgroundColor : "rgba(255,255,255,1)",
        paddingRight : "5%"
    },

    topsection : {
        flex : 1,
        // height : Dimensions.get("window").height / 6 ,
        // backgroundColor  :"green"
    },
})