import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../config.js';

export default class ReadStoryScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: ''
    }
  }  

  updateSearch = (search) => {
    this.setState({ search });
  };

  retrieveStories=()=>{
    var allStories= []
    var stories = db.collection('stories').get().then((querySnapshot)=> {
      querySnapshot.forEach((doc)=> {
        allStories.push(doc.data())
        console.log('These are the Stories...',allStories)
      })
      this.setState({allStories})
    })
  };

  searchFilterFunction = async (text) => {
    const story = await db.collection('stories').where('title', '==', text).get();
    story.docs.map((doc) => {
      this.setState({
        search: text
      });
    });
  };

  render() {

    return(
      <View style={styles.container}>

        <SearchBar
        placeholder="Search"
        onChangeText={text => this.searchFilterFunction(text)}
        value={this.state.search}/>

      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
  });