import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, ToastAndroid, KeyboardAvoidingView } from 'react-native';
//import {Header} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import db from '../config.js';
//import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        title: '',
        author: '',
        story: '',
    }
}

  submitStory =()=>{
    db.collection("stories").add({
        'title': this.state.title,
        'author': this.state.author,
        'story': this.state.story,
        //'date': firebase.firestore.Timestamp.now().toDate()
    });
    this.setState({
        title: '',
        author: '',
        story: ''
    });
    ToastAndroid.showWithGravity("Your story has been Submitted!", ToastAndroid.LONG, ToastAndroid.BOTTOM)
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headertext}>📝 Story Hub 📝</Text>
        </View>

        <TextInput 
          style={styles.inputBox}
          placeholder="Title"
          value={this.state.title}
          onChangeText={(text)=> this.setState({ title: text})}
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Author"
          value={this.state.author}
          onChangeText={(text)=> this.setState({ author: text})}
        />

        <TextInput
          style={styles.storyBox}
          placeholder="Start Writing"
          multiline={true}
          value={this.state.story}
          onChangeText={(text)=> this.setState({ story: text})}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitStory}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'
    },
    inputBox:{
      justifyContent: 'center',
      width: 410,
      height: 50,
      borderWidth: 3,
      fontSize: 20,
      marginTop: 10,
      textAlign:'center',
      backgroundColor:'floralwhite',
    },
    storyBox:{
      justifyContent: 'center',
      width: 410,
      height: 440,
      borderWidth: 3,
      fontSize: 20,
      marginTop: 10,
      textAlign:'center',
      backgroundColor:'floralwhite',
    },
    submitButton:{
      backgroundColor: 'mistyrose',
      width: 100,
      height: 40,
      alignSelf: 'center',
      marginTop: 10,
      borderWidth: 3,
    },
    submitButtonText:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight:'bold',
      marginTop: 2,
    },
    header:{
      backgroundColor: 'mistyrose',
      width: 420,
      height: 100,
      alignSelf: 'center',
      marginTop: -55,
      marginBottom: 20,
    },
    headertext:{
      textAlign: 'center',
      fontSize: 40,
      fontWeight:'bold',
      marginTop: 28,
    }
  });