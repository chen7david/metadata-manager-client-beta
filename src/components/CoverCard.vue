<template>
    <v-card v-if="movie.poster_path" color="rgb(0, 0, 0, 0.0)" class="movie-card" elevation="0" tile>
        <v-hover v-slot:default="{ hover }" open-delay="10">
            <v-img :src="poster" alt="" :elevation="hover ? 10 : 2">
                <v-overlay  absolute :value="hover" class="text-center" opacity="0.7">
                <v-btn x-large icon router :to="/movie/+movie.id">
                    <v-icon x-large>mdi-play</v-icon>
                </v-btn>
                <p class="pa-1 font-weight-bold gray--text">{{movie.title}} ({{movie.release_date}})</p>
              </v-overlay>
            </v-img>
        </v-hover> 
        <v-card-subtitle class="pa-2 font-weight-meduim text-truncate">
              {{movie.title}}
            <p class="pa-0 ma-0">{{movie.release_date}}</p>
        </v-card-subtitle>
    </v-card>
</template>

<script>

export default {
    name:'MovieCard',
    props: {
        movie: null
    }, 
    computed:{
        poster(){
            const baseURL = 'http://192.168.50.251:3030/image/w500'
            const URI = this.movie.poster_path
            return baseURL + URI
        }
    }
}
</script>

<style scoped>
.movie-card {
    min-width: 180px;
}

.movie-card img {
    width: 100%
}
</style>
