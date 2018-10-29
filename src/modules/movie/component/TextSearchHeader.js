'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class TextSearchHeader extends Component {
	//label = Text
  render() {
    return (
      <View style={styles.header}>
      	<View style={styles.titleWrapper}>
      		<Text style={styles.title}>
      			Movies
      		</Text>
      	</View>
      	<View style={styles.searchInput}>
      		<Text style={styles.input}>
      			Search
      		</Text>
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	header: {
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	titleWrapper: {
		//paddingHorizontal: 20,
		justifyContent: 'center',
	},
	title: {
		fontSize: 34,
		color: '#fff',
		fontWeight: 'bold',
	},
	searchInput: {
		flex: 1,
		height: 40,
		justifyContent: 'center',
		marginLeft: 20,
		paddingHorizontal: 20,
		backgroundColor: 'rgb(13, 20, 43)',
		borderRadius: 5,
	},
	input: {
		fontSize: 15,
		color: '#fff',
	}
});


export default TextSearchHeader;