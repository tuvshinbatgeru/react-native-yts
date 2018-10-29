'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import TextSearchHeader from './TextSearchHeader'
import MovieFilter from './MovieFilter'
import MovieList from './MovieList'

class MoviesView extends Component {
  static displayName = 'MoviesView';
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  state = {
    page: 1, //2, 3, 4, 
    quality: '', //3d, 720p
  }

  componentDidMount() {
    this.fetchMovies()
  }

  onFilterChanged = (quality) => {
    this.setState({
      quality,
      page: 1,
    }, () => this.fetchMovies())
  }

  onLoadMore = () => {
    let page = this.state.page + 1
    if(this.props.movies.fetching || page > this.props.movies.pages) return
    this.setState({
      page,
    }, () => this.fetchMovies())
  }

  onRefresh = () => {
    this.setState({
      page: 1,
    }, () => this.fetchMovies())
  }

  fetchMovies = () => {
    this.props.getMovies({
      page: this.state.page,
      quality: this.state.quality,
    })
  }

  onMoviePressed = (movie) => {
    this.props.navigation.navigate({ routeName: 'MovieDetail' })
  }

  render() {
    let {
      fetching,
      data,
      total,
    } = this.props.movies

    return ( //View = div
      <View style={styles.wrapper}>
        <StatusBar barStyle='light-content'/>
      	<TextSearchHeader />
      	<MovieFilter 
          quality={this.state.quality}
          onFilterChanged={this.onFilterChanged}
        />
      	<MovieList 
          fetching={fetching}
          page={this.state.page}
          total={total}
          movies={data}
          onRefresh={this.onRefresh}
          onLoadMore={this.onLoadMore}
          onMoviePressed={this.onMoviePressed}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: 'rgb(28, 32, 53)', //background-color: ''
    paddingTop: 20,
    //padding-top: 20px;
	}
});


export default MoviesView;