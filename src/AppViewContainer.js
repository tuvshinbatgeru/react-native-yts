import { createStackNavigator } from 'react-navigation'

import MoviesViewContainer from './modules/movie/container/MoviesViewContainer'
import MovieDetailContainer from './modules/movie/container/MovieDetailContainer'

const AppNavigator = createStackNavigator({
  Movies: { screen: MoviesViewContainer },
  MovieDetail: {screen: MovieDetailContainer },
  //UserProfile: { screen: Userrpfiel }
}, {
  initialRouteName: "Movies",
});

export default AppNavigator