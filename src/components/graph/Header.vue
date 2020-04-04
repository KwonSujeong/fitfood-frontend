<template>
    <div>
        <v-container 
        fluid grid-list-lg 
        class="my-1">
        <v-layout 
            justify-center 
            fill-height 
            wrap
            >
            <v-flex xs12 class="center_card">
            <v-layout row wrap justify-center>
            <h2>My nutrition balance</h2>
            </v-layout>
            </v-flex>
            <v-flex xs12 sm12 md12 xl11 class="center_card" style="margin-top:30px;">
            <v-layout row wrap justify-center>
                <div>
                <v-btn class="font-weight-bold green--text" flat style="float:right;">Month</v-btn>
                <v-btn class="font-weight-bold green--text" flat style="float:right;">Year</v-btn>
                </div>
            </v-layout>
            </v-flex>
        </v-layout>
        </v-container>
    </div>
</template>

<script>

</script>

<style scoped>

</style>