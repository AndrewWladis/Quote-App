import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    quote: {
      marginTop: 10,
      color: "white",
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    author: {
      color: "white",
      fontSize: 25,
      textAlign: 'center',
    },
    clicker: {
      flex: 6,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 10
    },
    control: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      flex: 1,
      alignSelf: 'stretch',
    },
    dropdown: {
      borderRadius: 5,
    },
    dropdowntext: {
      fontSize: 20
    },
    modal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }, 
    modalContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalInfo: {
      width: 350,
      height: 500,
      backgroundColor: '#fafafa',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderRadius: 25
    }
});

export default Styles