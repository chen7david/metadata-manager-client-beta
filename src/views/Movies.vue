<template>
    <v-content class="mx-5 gallery">
        <v-row class="gallery">
            <v-col cols="12" md="4" sm="6">
                <v-text-field
                    prepend-inner-icon="mdi-magnify"
                    placeholder="Search Movie"
                    filled
                    v-on:keyup.enter="selected(keyword)"
                    rounded
                    v-model="keyword"
                    clearable
                    clear-icon="mdi-close-circle"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-card tile class="ma-5" cols="12" md="2" sm="6" max-width="200px" v-for="movie of movies" :key="movie.id">
                <MediaPoster :movie="movie"/>
            </v-card>
        </v-row>
    </v-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MediaPoster from './../components/MediaPoster'
export default {
    name:'Movies',
    data: () => ({
        keyword: null
    }),
    components: {
        MediaPoster
    },
    computed: {
        ...mapGetters([
            'movies'
        ])
    },
    methods: {
        ...mapActions([
           'getMovies'
        ])
    },
    mounted(){
      this.getMovies()
    }
}
</script>