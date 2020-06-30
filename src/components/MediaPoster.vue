<template>
    <v-card v-if="media.poster" color="rgb(0, 0, 0, 0.0)" class="movie-card" elevation="0" tile>
        <v-hover v-slot:default="{ hover }" open-delay="10">
            <v-img :src="media.poster" alt="" :elevation="hover ? 10 : 2">
                <v-overlay  absolute :value="hover" class="text-center" opacity="0.7">
                <v-btn x-large icon router :to="/movie/+media.id">
                    <v-icon x-large>mdi-play</v-icon>
                </v-btn>
                <p class="pa-1 font-weight-bold gray--text">{{media.title}} ({{media.release_date}})</p>
              </v-overlay>
            </v-img>
        </v-hover> 
        <v-card-subtitle class="pa-2 font-weight-meduim text-truncate">
            <p class="pa-0 ma-0">{{media.title}}</p>
            <p class="pa-0 ma-0">{{media.release_date}}</p>
        </v-card-subtitle>
    </v-card>
</template>

<script>

export default {
    name:'MovieCard',
    props: {
        movie: null,
        show: null,
    }, 
    data: () => ({
        baseURL: 'http://192.168.50.251:3030/image/w500'
    }),
    computed:{
        media(){
            let media = {}
            if(this.movie){
                media.poster = this.poster(this.movie.poster_path)
                media.title = this.movie.title
                media.release_date = this.movie.release_date
            }

            if(this.show){
                media.poster = this.poster(this.show.poster_path)
                media.title = this.show.name
                media.release_date = this.show.first_air_date
            }
            
            return media
        }
    }, 
    methods: {
        poster(poster_path){
            const URI = poster_path
            return this.baseURL + URI
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
