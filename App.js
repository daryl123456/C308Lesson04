/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import moment from 'moment-timezone';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Welcome = () => {
  return <Text>Welcome to C308 Web Frameworks!</Text>;
};
class MyFirstApp extends React.Component {
  render() {
    return <Text>My first React Native app {'\n'}</Text>;
  }
}
const SemModule = (props) => {
  return (
    <Text>
      {props.day} - {props.module}
    </Text>
  );
};
class Eats extends React.Component {
  render() {
    return (
      <Text>
        {this.props.name} {'\n'}
        {this.props.location} {'\n'}
      </Text>
    );
  }
}
class Clocks extends React.Component {
  render() {
    let location = this.props.name;
    let time = moment.tz(location).format('HH mm Z');
    return (
      <Text>
        {location} - {time}
      </Text>
    );
  }
}
const WorldClock = () => {
  return (
    <View>
      <Clocks name="Asia/Singapore" />
      <Clocks name="Europe/Volgograd" />
      <Clocks name="Atlantic/Reykjavik" />
      <Clocks name="Europe/Oslo" />
    </View>
  );
};
const App: () => React$Node = () => {
  console.log('Listing semester modules and recommended eats');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Welcome />
              <MyFirstApp />
              <Text>My module this semester</Text>
              <SemModule day="Monday" module="C348" />
              <SemModule day="Tuesday" module="C273" />
              <SemModule day="Wednesday" module="C390" />
              <SemModule day="Thursday" module="H001" />
              <SemModule day="Thursday" module="T002" />
              <SemModule day="Friday" module="C208" />
              <SemModule day="Friday" module="G962" />
              <Text>{'\n'}Recommended Eats @RP</Text>
              <Eats
                name="Sweet Tooth Waffles"
                location="W6 Level 1, E-Canteen"
              />
              <Eats name="Crowded Bowl" location="W4/W6 Lawn Canteen" />
              <WorldClock />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
