import { 
    ScrollView ,
    StyleSheet ,
    Text ,
    TextInput ,
    TouchableOpacity ,
    View ,
    useColorScheme 
} from "react-native";

import * as NavigationBar from 'expo-navigation-bar';

export default function SignUP({navigation}){

    const isDark = useColorScheme() === "dark";

    NavigationBar.setBackgroundColorAsync((isDark)?"black":"white")

    return (
        <View style={[styles.container , {backgroundColor : (isDark)?"black":"white"}]}>
            <View style={{gap : 10 , paddingTop : "20%"}}>
                <Text style={{fontSize : 45 , fontWeight : "bold" , color : (!isDark)?"black":"white"}}>Sign Up</Text>
                <Text style={{paddingLeft : 2 , color : (!isDark)?"black":"white"}}>Sign in to continue</Text>
                
                <TextInput 
                    placeholder="Username" 
                    placeholderTextColor={"gray"}
                    style={{
                        marginVertical : "2.5%",
                        borderWidth : 1,
                        borderColor : "rgba(111,111,111,0.5)",
                        borderRadius : 5,
                        padding : "3%",
                        fontSize : 15,
                        color : "white"
                    }}
                />
                <TextInput 
                placeholder="Email" 
                keyboardType="email-address"
                placeholderTextColor={"gray"}
                style={{
                    marginVertical : "2.5%",
                    borderWidth : 1,
                    borderColor : "rgba(111,111,111,0.5)",
                    borderRadius : 5,
                    padding : "3%",
                    fontSize : 15,
                    color : "white"
                }}
            />
            <TextInput 
                placeholder="Password" 
                placeholderTextColor={"gray"}
                style={{
                    marginVertical : "2.5%",
                    borderWidth : 1,
                    borderColor : "rgba(111,111,111,0.5)",
                    borderRadius : 5,
                    padding : "3%",
                    fontSize : 15,
                    color : "white"
                }}
            />
            <TextInput 
                placeholder="Confirm password" 
                placeholderTextColor={"gray"}
                style={{
                    marginVertical : "2.5%",
                    borderWidth : 1,
                    borderColor : "rgba(111,111,111,0.5)",
                    borderRadius : 5,
                    padding : "3%",
                    fontSize : 15,
                    color : "white"
                }}
            />
            <TouchableOpacity 
                    style={{
                        backgroundColor : "rgba(107, 28, 176,1)" ,
                        padding : "5%",
                        borderRadius : 10,
                        alignItems : "center",
                        
                    }}>
                <Text style={{ color  :"white" , fontWeight : "bold"}}>Sign Up</Text>
            </TouchableOpacity>
            <View style={{flexDirection : "row" , justifyContent : "center" , marginTop  : "5%"}}>
                <Text style={{marginRight : "1%" , color : (!isDark)?"black":"white"}}>Already have an Account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{textDecorationLine:"underline" , fontWeight : "bold" , color  :(!isDark)?"black":"white"}}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : "5%",
        justifyContent : "center"
    }
})