// app/index.js

import React , {Component}  from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListItem,
  Image,
  Platform,
} from 'react-native';
import Tabs from 'react-native-tabs';

// FUNCTIONS
function status(response) {
 if (response.status >= 200 && response.status < 300) {
   return response
 }
 throw new Error(response.statusText)
}

function json(response) {
 return response.json()
}


export default class hw extends Component {
// constructor / dynamic / variables
  constructor(props) {
    super(props);

    this.state = {
      page:'first',
      // dataSource: ds.cloneWithRows(tweets.twitter_objects.tweets)
      jsonData: ''
    };
  }

// render / stricture / html like tags
  render() {
    const { page } = this.state;
    const tabberStyles = [styles.tabbar];
//    if (Platform.OS === 'android') tabbarStyles.push(styles.androidTabbar);



    return (

      <View style={styles.container}>
        <Tabs
          selected={page}
          style={styles.tabbar}
          selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}
        >
            <Text name="first">Home - {Platform.OS}</Text>
            <Text name="second">Settings</Text>
            <Text name="third">[X]</Text>
        </Tabs>


        <Text>eCom App  &nbsp; &nbsp; |  &nbsp; &nbsp; {page}</Text>
 


        <Text style={styles.instructions}>
          Android {'\n'}
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu{'\n'}
      --{'\n'}
          iOS {'\n'}
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
      {'\n'}
          —{'\n'}
         Jose is the man - Steve 🏈
        </Text>

      </View>
    )
  }

  renderRow(rowData) {
    var user = tweets.twitter_objects.users[rowData.user.id];
    return(
      <View style={styles.tweetContainer}>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: user.profile_image_url_https}}
        />
        <Text style={styles.tweet}>
          {rowData.full_text}
        </Text>
      </View>
    )
  }

}


// Design / View / Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'red',
    borderTopWidth: 2
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('hw', () => hw);
