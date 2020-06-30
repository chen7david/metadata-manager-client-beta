import axios from 'axios'
import url from 'url'
import store from './../../store'
import config from './../../../config/default'
console.log(url.format(config.server))
const http = axios.create({
    
    baseURL: url.format(config.server),
    timeout: 12000
})

http.interceptors.request.use((config) => {
    config.url = encodeURI(config.url)
    store.dispatch('isLoading', true)
    return config
}, (error) => {
    store.dispatch('isLoading', false)
    console.log({'req-error': error})
    return Promise.reject(error)
})

http.interceptors.response.use((response) => {
    const {isCargo, payload, details } = response.data
    store.dispatch('isLoading', false)
    if(isCargo) {
        response.data = payload
        if(details && details.state !== 'validation')
            store.dispatch('setSnackbar', details)
    }
    store.dispatch('setValidation', null)
    return response
}, (error) => {
    const { isCargo, details } = error.response.data
    store.dispatch('isLoading', false)
    console.log(error.response.data)
    if(isCargo) {
        if(details.state == 'validation'){
            store.dispatch('setValidation', details)
        }else{
            store.dispatch('setSnackbar', details)
        }
    }
    return Promise.reject(error)
})

export default http

