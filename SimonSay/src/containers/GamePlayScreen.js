//import liraries
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const ColorButton = (props) => (
    <TouchableOpacity style={{
        padding:10, 
        width: props.size, 
        height: props.size}} onPress={props.onPress}
    >
        <View style={{ 
            flex: 1,
            borderRadius: 4,
            backgroundColor: props.backgroundColor, 
            }}
        />
    </TouchableOpacity>
)
// create a component
class GamePlayScreen extends PureComponent {
  state = {
      score : 0,
      input : [],
      count : 0
  }

  componentDidMount = () => {
    this.setState({
        score : 0,
        input : [Math.floor(Math.random() * 4)],
        count : 0
    })
  }
  
  _next = () => {
    this.setState({
        score : this.state.score + 1,
        input: this.state.input.concat([Math.floor(Math.random() * 4)]),
        count : 0
    })
  }

  _updateCount = () => {
    this.setState({
        count : this.state.count + 1
    })
  }

  _handleButtonTap = (id) => {
    id !== this.state.input[this.state.count] ? this.componentDidMount() : this.state.count === this.state.input.length - 1 ? this._next() : this._updateCount()
  };

  _createButtonHandler = (id) => () => this._handleButtonTap(id)

  render() {
    const {height, width} = Dimensions.get('window');
    const halfshortSide = Math.min(width, height)/2;

    return (
        <View style={styles.container}>
          <Text>{this.state.input.join(', ')}</Text>
          <Text>Score: {this.state.score}</Text>
          <View style={styles.row}>
            <ColorButton 
                onPress={this._createButtonHandler(0)} 
                backgroundColor="#D32F2F" 
                size={halfshortSide} 
            />
            <ColorButton 
                onPress= {this._createButtonHandler(1)}  
                backgroundColor="#303F9F" 
                size={halfshortSide} 
            />
          </View>
          <View style={styles.row}>
            <ColorButton 
                onPress= {this._createButtonHandler(2)}  
                backgroundColor="#388E3C" 
                size={halfshortSide} 
            />
            <ColorButton 
                onPress= {this._createButtonHandler(3)}  
                backgroundColor="#7B1FA2" 
                size={halfshortSide} 
            />
          </View>
        </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
 container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#ffffff',
 },
 row: {
     flex: 0,
     flexDirection : 'row'
 }
});

//make this component available to the app
export default GamePlayScreen;
