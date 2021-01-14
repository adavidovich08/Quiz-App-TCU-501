import React from 'react';
import {
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

import {RowItem} from '../components/RowItem';

import fourth from '../data/fourth';
import fifth from '../data/fifth';
import sixth from '../data/sixth';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    backgroundColor: '#FFFFFF'
  },
  floatingButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3D3D3D',
    width: 200,
    height: 50,
    right: 30,
    bottom: 30,
    borderRadius: 50
  },
  floatingText: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 21
  },
  copyrightText: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 0,
    fontSize: 12.5,
    letterSpacing: 1.5
  },
  logoImgContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImg: {
    width: 90,
    height: 120
  }
});

class GradeIndex extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <StatusBar barStyle="dark-content" />
          <RowItem
            name="Fourth Grade"
            color="#005da4"
            iconName="numeric-4-box"
            onPress={() =>
              this.props.navigation.navigate('QuizIndex', {
                title: 'Fourth Grade',
                grade: fourth
              })
            }
          />
          <RowItem
            name="Fifth Grade"
            color="#5a445f"
            iconName="numeric-5-box"
            onPress={() =>
              this.props.navigation.navigate('QuizIndex', {
                title: 'Fifth Grade',
                grade: fifth
              })
            }
          />
          <RowItem
            name="Sixth Grade"
            color="#f37021"
            iconName="numeric-6-box"
            onPress={() =>
              this.props.navigation.navigate('QuizIndex', {
                title: 'Sixth Grade',
                grade: sixth
              })
            }
          />
          <Text style={styles.copyrightText}>
            {'\u00A9'} 2020 Created by Andrés Davidovich for
          </Text>
          <View style={styles.logoImgContainer}>
            <Image
              style={styles.logoImg}
              source={require('../assets/logo-tcu-501.jpg')}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => this.props.navigation.navigate('HighScore')}
          style={styles.floatingButton}
        >
          <Text style={styles.floatingText}>high scores</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default GradeIndex;
