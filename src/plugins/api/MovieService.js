import http from './http'

export default {

    /* MOVIE MANAGEMENT */

    getMovies: async () => {
        return await http.get('/movies')
    },

    // requestPasswordRecovery: async (requestPasswordRecoveryInfo) => {
    //     return await http.post('/request-password-recovery', requestPasswordRecoveryInfo)
    // },
}