import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    trendingMovies: null,
    popularMovies: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state,action) => {
      state.trailerVideo = action.payload;
    }
  },
});

export default movieSlice.reducer;

export const { addNowPlayingMovies, addTrailerVideo, addTrendingMovies, addPopularMovies } = movieSlice.actions;

