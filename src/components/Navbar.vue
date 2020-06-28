<template>
    <v-app-bar app dark>
        <v-btn tile text router to="/">home</v-btn>
        <v-spacer></v-spacer>
        <div>
            <v-btn tile text router to="/movies">movies</v-btn>
            <v-btn tile text router to="/shows">shows</v-btn>
        </div>
    </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name:'Navbar',
    data: () => ({}),
    components: {
    },
    computed: {
        ...mapGetters([
        ])
    },
    methods: {
        ...mapActions([
            'logout'
        ])
    },
}
</script>