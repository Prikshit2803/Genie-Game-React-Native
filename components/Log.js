import { ScrollView, StyleSheet ,Text,View  } from "react-native";

export default function Log({ logs }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {logs.map((log, index) => (
          <Text style={styles.text} key={index}>{"Genie Guessed : " + log.guess + " in round :  " + log.round}</Text>
        ))}
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
    container : {
        alignItems: 'flex-start',
        // width: '100%',
    },
    text : {
        color: "white",
      backgroundColor: "#4B0082",
    padding: 10,
    marginVertical: 5, 
    marginLeft: 20, 
    borderRadius: 8,
    marginBottom : 10,
    padding : 15,
    textAlign : 'right',
    fontSize : 18,
    }
});