'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

//TouchableOpacity = a, button

class MovieFilter extends Component { //React component lifecycle //cont
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  render() {
    let {
      quality
    } = this.props

    return (
      <View style={styles.container}>
      	<TouchableOpacity 
          style={[styles.filter, quality == '720p' ? styles.selected : {}]}
          onPress={() => this.props.onFilterChanged('720p')}
        >
      		<Text style={styles.filterText}>
      			720p
      		</Text>
      	</TouchableOpacity>
      	<View style={styles.separator} />
      	<TouchableOpacity 
          style={[styles.filter, quality == '1080p' ? styles.selected : {}]}
          onPress={() => this.props.onFilterChanged('1080p')}
        >
      		<Text style={styles.filterText}>
      			1080p
      		</Text>
      	</TouchableOpacity>
      	<View style={styles.separator} />
      	<TouchableOpacity 
          style={[styles.filter, quality == '3D' ? styles.selected : {}]}
          onPress={() => this.props.onFilterChanged('3D')}
        >
      		<Text style={styles.filterText}>
      			3D
      		</Text>
      	</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 40,
		paddingHorizontal: 20,
		marginTop: 5,
		marginBottom: 5,
	},
	separator: {
		width: 10,
	},
	filter: {
    backgroundColor: 'rgb(38, 44, 72)',
		paddingHorizontal: 20,
		justifyContent: 'center',
		borderRadius: 5,
	},

  selected: {
    backgroundColor: 'rgb(61, 121, 248)',
  },

	filterText: {
		color: '#fff',
		fontSize: 17,
	}
});


export default MovieFilter;