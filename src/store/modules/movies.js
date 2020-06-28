import MovieService from './../../plugins/api/MovieService'

export default {
    
    state: {
        movies:[]
    },

    getters: {
        movies: (state) => state.movies,
    },

    mutations: {
        SET_MOVIES: (state, movies) => state.movies = movies,
    },
    actions: {
        async getMovies({commit}){
            const { data } = await MovieService.getMovies()
            commit('SET_MOVIES', data)
        },
    },
  }