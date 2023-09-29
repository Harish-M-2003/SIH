import { 
    View , 
    Text ,
} from "react-native";

import { AnimatedCircularProgress } from "react-native-circular-progress";

import CircularProgress from "react-native-circular-progress-indicator";

export default function ProgressCard(){

    return (
        <View style={{  
            flex : 1 , 
            // borderWidth : 1 ,
            backgroundColor : "rgba(107, 28, 176,.1)" ,
            borderRadius : 5, 
            // backgroundColor : "white" ,
            alignItems : "center" ,
            padding : "3%",
            gap : 10 , 
    }}>
        <Text style={{fontSize : 15 , fontWeight : "bold" , color : "rgba(107, 28, 176,.5)"}}>Avg Speed</Text>
        {/* <AnimatedCircularProgress
                size={120}
                width={15}
                fill={70}
                tintColor="#rgba(107, 28, 176,1)"
                backgroundColor="rgba(107, 28, 176,.5)"
                rotation={180}
                padding={10}
                //renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="10" fill="rgba(107, 28, 176,1)" />}
        /> */}
        <CircularProgress 
            value={60} 
            inActiveStrokeWidth={5} 
            inActiveStrokeColor="rgba(107, 28, 176,.5)" 
            activeStrokeColor={'rgba(107, 28, 176,1)'} 
            progressValueColor={"rgba(107, 28, 176,1)"}
        />
    </View>
    )

}