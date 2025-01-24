import { Modal,View,Text,Button,StyleSheet,Image } from "react-native";

export default function GameEnd({handleGameReset}){
    return (
    <Modal animationType="slide">
       <View style={styles.gameContainer}>
       <Image style={styles.image} source={require('../assets/images/genie2.avif')}/>
        <Text style={styles.heading}>Genie Won</Text>
        <Button title="Restart" onPress={handleGameReset}/>
       </View>
       </Modal>
    );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    backgroundColor: "#b39d0e",
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "space-apart",
    padding: 40,
    // marginTop : 80
  },
  heading: {
    marginTop: 50,
    fontSize: 35,
    borderColor: "yellow",
    borderWidth: 3,
    padding: 16,
    marginBottom: 40,
    alignSelf: "center",
    marginLeft: 20,
    color : 'white'
  },
  image : {
    height: 400,
    width : 350,
    marginTop : 40
  }
});