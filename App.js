import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, {useState} from 'react';

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

export default function App() {

  const [color, setColor] = useState([generateColor(), generateColor()]);
  const [quote, setQuote] = useState(randomProperty());

  const onPress = () => {
    setQuote(randomProperty())
    setColor([generateColor(), generateColor()])
  }

  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <TouchableOpacity style={styles.clicker} onPress={onPress}>
        <Text style={styles.quote}>"{quote.quote[Math.floor(Math.random() * quote.quote.length)]}"</Text>
        <Text style={styles.author}>- {quote.author}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quote: {
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
    flex: 1,
    justifyContent: 'center',
    flexDirection: "column",
    alignItems: 'center',
    margin: 10
  }
});
