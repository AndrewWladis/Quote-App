import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Modal, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';

const quotes = require('./Quotes.json');

const themecolors = {
  batman: ['#f2de02', '#0f0f0f'],
  boys: ['#db2c3d', '#2e4ad9'],
  breakingbad: ['#2a6123', '#6acbe6'],
  starwars: ['#359edb', '#d6c16d'],
}

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};

const randomProperty = () => {
  var keys = Object.keys(quotes.quotes);
  return quotes.quotes[keys[ keys.length * Math.random() << 0]];
};

class quoteobj {
  constructor(quotecurrent, authorcurrent) {
    this.quotecurrent = quotecurrent;
    this.authorcurrent = authorcurrent;
  }
}

export default function App() {
  let qnew = randomProperty();
  const [color, setColor] = useState([generateColor(), generateColor()]);
  const [quote, setQuote] = useState(new quoteobj(qnew.quote[Math.floor(Math.random() * qnew.quote.length)], qnew.author));
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const next = () => {
    if (!modalVisible) {
      let newQuote = randomProperty();
      setQuote(new quoteobj(newQuote.quote[Math.floor(Math.random() * newQuote.quote.length)], newQuote.author));
      setColor([generateColor(), generateColor()]);
    }
  }

  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <Modal style={styles.modal} animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalInfo}>
        <Switch
        trackColor={{false: '#767577', true: '#36f569'}}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
        </View>
      </Modal>
      <TouchableOpacity style={styles.clicker} onPress={next}>
        <Text style={styles.quote}>"{quote.quotecurrent}"</Text>
        <Text style={styles.author}>- {quote.authorcurrent}</Text>
      </TouchableOpacity>
      <View style={styles.control}>
        <Ionicons onPress={() => {setModalVisible(true)}} name="ios-settings-sharp" size={50} color="white" />
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  modalInfo: {
    flex: 1,
    backgroundColor: 'white',
    opacity: 0.97,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
