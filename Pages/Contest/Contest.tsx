import { 
    StyleSheet ,
    View , 
    Text, 
    TextInput,
    ScrollView ,
} from "react-native";
import ContestCard from "./components/ContestCard";
import BottomNavigation from "../../AppComponent/BottomNavigation";
import { DATA } from "../../data/data";

export default function Contest({navigation}){
    return (
        <View style={{flex : 1}}>
            <ScrollView style={styles.container}>
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