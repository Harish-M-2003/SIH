import { 
    Text ,
    View ,
    TextInput, 
    TouchableOpacity,
    useColorScheme ,
} from "react-native";

export default function ContestCodeCard(){

    const isDark = useColorScheme() === "dark";

    return (
        <View style={{gap : 10}}>
            <Text style={{fontSize : 20 , fontWeight : "bold" , color : (isDark)? "white" : "black"}}>Enter your contest key</Text>
            <Text style={{color : "gray"}}>Enter the contest key sent to your email.</Text>
            <View style={{flexDirection : "row" , gap : 5}}>
                <TextInput
                    placeholder="Code."
                    style={{
                        backgroundColor : (isDark)?"rgba(111,111,111,0.5)":"lightgray",
                        borderRadius : 5,
                        padding : "2%",
                        paddingLeft : 10,
                        color : "white",
                        flex : 1,
                    }}
                    placeholderTextColor={ "gray"}
                />
                <TouchableOpacity style={{
                    backgroundColor : "rgba(107, 28, 176,1)",
                    padding : "5%",
                    // marginTop : "5%",
                    borderRadius : 5,
                    
                    alignItems : "center",
                }}>
                    <Text style={{color : "white"}}>Start</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )

}