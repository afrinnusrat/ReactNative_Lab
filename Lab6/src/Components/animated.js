import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Login.js";
import Swipe from "./swipe.js";
import data from "./data"
import { Card ,Image} from 'react-native-elements';

export default class App extends React.Component {
  state = {
    likedJobs: 0,
    passedJobs: 0
  };
  handleLikedJob = () => {
    this.setState(({ likedJobs }) => ({
      likedJobs: likedJobs + 1
    }));
  };

  handlePassedJob = () => {
    this.setState(({ passedJobs }) => ({
      passedJobs: passedJobs + 1
    }));
  };

   renderCards(animal) {
    return (
      <Card style={styles.cards}><Card.Title >
      {animal.jobtitle}
    </Card.Title>
        <View style={{ height: 200 }}>
          <Image
            source={require('../../assets/alpaca.jpg')}
            style={{ width: '100%', height: 200 }}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{animal.location}</Text>
          <Text>{animal.formattedRelativeTime}</Text>
        </View>
        <Text numberOfLines={4}>
          {animal.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
        </Text>
      </Card>
    );
  }
  renderNoMoreCards = () => {
    return (
      <Card title="No More cards">
        <Button
          title="Do something"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
        />
      </Card>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusStyle}>
        <Text >Find Your Alpaca</Text>
          <Text >No: {this.state.passedJobs}</Text>
          <Text >Yes: {this.state.likedJobs}</Text>
        </View>
        <Swipe
         data={data} 
         onSwipeRight={this.handleLikedJob}
         onSwipeLeft={this.handlePassedJob}
        //  keyProp="jobId"
          renderCard={this.renderCards}
          renderNoMoreCards={this.renderNoMoreCards}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  statusStyle: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cards:{
    backgroundColor:"#03A9F4"
  },
});