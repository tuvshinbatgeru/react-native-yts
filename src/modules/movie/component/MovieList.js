'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList, //ListView //depricated
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

class MovieItem extends Component {
	render() {
		let {
			title,
			rating,
			genres,
			medium_cover_image
		} = this.props.movie

		return (
			<TouchableOpacity 
				style={styles.movieContainer}
				onPress={() => this.props.onMoviePressed(this.props.movie)}
			>
				<View style={styles.coverContainer}>
					<Image 
						style={styles.cover}
						source={{ uri: medium_cover_image }}
					/>
				</View>
				<View style={{ height: 30, }}/>
				<View style={styles.infoContainer}>
					<View style={{ flex: 1, }}>
					</View>
					<View style={{ flex: 2, }}>
						<Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>
							{title}
						</Text>
						<Text style={{ fontSize: 15, color: 'rgb(242, 209, 64)', fontWeight: 'bold' }}>
							IMDB: {rating}
						</Text>
						<Text style={{ fontSize: 15, color: '#fff', marginTop: 10, }}>
							{
								genres.map((genre) => (
									<Text key={genre}>
										{genre + ' '}
									</Text>
								))
							}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

class MovieList extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.page != this.props.page && nextProps.page == 1) {
    	this._movieRef.scrollToOffset({
    		x: 0,
    		y: 0,
    		animated: true
    	})
    }
  }

  _renderMovie = ({ item, index }) => {
  	return (
  		<MovieItem 
  			movie={item}
  			onMoviePressed={this.props.onMoviePressed}
  		/>
  	)
  }

  _renderFooter = () => {
  	if(this.props.fetching && this.props.page != 1) {
  		return (
  			<View style={{ paddingVertical: 40, }}>
  				<ActivityIndicator 
  					size="large" 
  					color="#fff"
  				/>
  			</View>
  		)
  	}
  	return null
  }

  _renderSeparator() {
  	return (
  		<View style={{ height: 15, }} />
  	)
  }

  render() {
  	let {
		fetching,
		total,
		movies
	} = this.props

    return (
      <View style={styles.container}>
      	<View style={styles.resultContainer}>
      		<Text style={styles.total}>
      			Total: {total} movies
      		</Text>
      	</View>
      	<View style={styles.listContainer}>
      		<FlatList 
      			ref={(context) => this._movieRef = context}
      			refreshControl={
				    <RefreshControl
				        colors={["#E59F2B"]}
				        refreshing={fetching}
				        onRefresh={this.props.onRefresh}
				    />
				}
      			keyExtractor={(item, index) => String(index)}
      			data={movies}
      			renderItem={this._renderMovie}
      			ItemSeparatorComponent={this._renderSeparator}
      			ListFooterComponent={this._renderFooter}
      			onEndReachedThreshold={0.5}
      			onEndReached={this.props.onLoadMore}
      		/>
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	resultContainer: {
		flexDirection: 'row',
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	total: {
		color: '#fff',
		fontSize: 17,
		fontWeight: '400'
	},
	listContainer: {
		flex: 1,
	},
	movieContainer: {
		//height: 100,
		paddingHorizontal: 20,
		//borderRadius: 5,
	},
	infoContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'rgb(38, 44, 72)',
		borderRadius: 5,
		padding: 10,
	},
	coverContainer: {
		position: 'absolute',
		top: 0,
		left: 40,
		width: 80,
		//right: 20,
		bottom: 20,
		backgroundColor: '#C0CADB',
		borderRadius: 5,
		zIndex: 2,
	},
	cover: {
		flex: 1,
		height: null,
		width: null,
		borderRadius: 5,
	}
});


export default MovieList;