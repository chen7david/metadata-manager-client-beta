import ShowService from '../../plugins/api/ShowService'

export default {
    
    state: {
        shows:[]
    },

    getters: {
        shows: (state) => state.shows,
    },

    mutations: {
        SET_SHOWS: (state, shows) => state.shows = shows,
    },
    actions: {
        async getShows({commit}){
            const { data } = await ShowService.getShows()
            console.log('ddrmsmmsd')
            commit('SET_SHOWS', data)
        },
    },
  }