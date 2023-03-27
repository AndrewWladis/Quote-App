import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, Modal, Share } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, {useState} from 'react';
import { Ionicons, Fontisto, AntDesign } from '@expo/vector-icons';
import ModalContent from './ModalContent';
import Styles from './Styles';

const quotes = require('./Quotes.json');

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
  let newcolorgener = [generateColor(), generateColor()]
  const [color, setColor] = useState(newcolorgener);
  const [quote, setQuote] = useState(new quoteobj(qnew.quote[Math.floor(Math.random() * qnew.quote.length)], qnew.author));
  const [modalVisible, setModalVisible] = useState(false);
  const [last, setLast] = useState([quote.quotecurrent, quote.authorcurrent, color])
  const [filter, setFilter] = useState('All');

  function setQuoteToFilter() {
    let quoteobject = {
      quotecurrent: 'bruh',
      authorcurrent: 'bigchungus'
    };
    while (!filter.characters.includes(quoteobject.authorcurrent)) {
      let newQuote = randomProperty();
      while (newQuote.author === quote.authorcurrent) {
        newQuote = randomProperty();
      }
      quoteobject = new quoteobj(newQuote.quote[Math.floor(Math.random() * newQuote.quote.length)], newQuote.author);
    }
    setColor(filter.colors);
    setQuote(quoteobject);
  }
  
  const next = () => {
    if (!modalVisible) {
      let quoteobject = {
        quotecurrent: 'bruh',
        authorcurrent: 'bigchungus'
      };
      setLast([quote.quotecurrent, quote.authorcurrent, color]);
      if (filter === 'All') {
        let newQuote = randomProperty();
      while (newQuote.author === quote.authorcurrent) {
        newQuote = randomProperty();
      }
      quoteobject = new quoteobj(newQuote.quote[Math.floor(Math.random() * newQuote.quote.length)], newQuote.author);
        setQuote(quoteobject);
        let colorsUsed = [generateColor(), generateColor()];
        setColor(colorsUsed);
      } else {
        setQuoteToFilter(filter)
      }
    }
  }

  const back = () => {
    if (!modalVisible && newcolorgener != color) {
      setQuote(new quoteobj(last[0], last[1]));
      setColor(last[2]);
    }
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
        `"${quote.quotecurrent}" - ${quote.authorcurrent}
        
        from WQuotes`,
        //put link to app store here later
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <LinearGradient colors={color} style={Styles.linearGradient}>
      <Modal style={Styles.modal} animationType="fade" transparent={true} visible={modalVisible}>
        <View style={Styles.modalContent}>
          <ModalContent changeFilter={(item) => {setFilter(item)}} onPress={() => {setModalVisible(false)}} />
        </View>
      </Modal>
      <TouchableOpacity style={Styles.clicker} onPress={next}>
        <Text style={Styles.quote}>"{quote.quotecurrent}"</Text>
        <Text style={Styles.author}>- {quote.authorcurrent}</Text>
      </TouchableOpacity>
      <View style={Styles.control}>
        <AntDesign onPress={back} name="caretleft" size={50} color="white" />
        <Ionicons onPress={() => {setModalVisible(true)}} name="ios-settings-sharp" size={50} color="white" />
        <Fontisto onPress={() => {onShare()}} name="share-a" size={47} color="white" />
      </View>
      <StatusBar style='auto' />
    </LinearGradient>
  );
}