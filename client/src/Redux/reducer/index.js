// Import actions:
import {
  CLEAR_MOVIE_DETAIL,
  GET_MOVIE_DETAIL,
  GET_MOVIES,
  GET_TV_SHOWS,
  GET_HOME_ALL,
  START_LOADING,
  GET_SERIE_DETAIL,
  CLEAR_SERIE_DETAIL,
  GET_SEASON_DETAIL,
  GET_SEARCH,
  CLEAR_SEARCH,
  CLEAR_MOVIES,
  CLEAR_SERIES,
  GET_ALL_GENRES,
  GET_MOVIE_GENRE_BY_ID
} from "../actions/const";

// Initial state of global store:
const initialState = {
  carrousels_home: [],
  movies: [],
  series: [],
  search: [],
  movieDetail: [],
  serieDetail: [],
  seasonDetail: [],
  loading: false,
  allgenres : [],
};

// Reducer:
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
      };
    case GET_TV_SHOWS:
      return {
        ...state,
        series: action.payload,
      };
    case CLEAR_SERIES:
      return {
        ...state,
        series: [],
      };
    case GET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        search: [],
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };
    case CLEAR_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: [],
      };
    case GET_SERIE_DETAIL:
      return {
        ...state,
        serieDetail: action.payload,
      };
    case CLEAR_SERIE_DETAIL:
      return {
        ...state,
        serieDetail: [],
      };
    case GET_SEASON_DETAIL:
      return {
        ...state,
        seasonDetail: action.payload,
      };
    case GET_HOME_ALL:
      return {
        ...state,
        carrousels_home: action.payload,
        loading: false,
      };
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_GENRES:
      return {
        ...state,
        allgenres: action.payload,
      };
      case GET_MOVIE_GENRE_BY_ID:
        return {
          ...state,
          movies: action.payload,
        };
    default:
      return state;
  }
};

export default rootReducer;
