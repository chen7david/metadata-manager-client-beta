

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
            <v-card cols="12" md="2" sm="6" v-for="movie of movies" :key="movie.id">
                <CoverCard :movie="movie"/>
            </v-card>
        </v-row>
    </v-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CoverCard from './../components/CoverCard'
export default {
    name:'Movies',
    data: () => ({}),
    components: {
        CoverCard
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