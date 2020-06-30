import http from './http'

export default {

    /* SHOWS MANAGEMENT */

    getShows: async () => {
        return await http.get('/shows')
    },
}