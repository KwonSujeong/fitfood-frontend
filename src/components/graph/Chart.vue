<template>
    <div>
        <v-container 
        fluid grid-list-lg 
        class="my-1">
        <v-layout 
            justify-center 
            fill-height 
            wrap class="pa-5"
            >
            <v-flex>
            <div class="area">
              <LineChart 
                 :chart-data='datacollection'>
            </LineChart>
            </div>  
            </v-flex>
        </v-layout>
        </v-container>
    </div>
</template>

<script>
import LineChart from './Chart.js'

export default {
    components:{
        LineChart
    },
    data(){
        return{
            datacollection:null,
            loaded: false
        }
    },
    mounted(){
        this.fillData()

    },
    methods:{
        fillData(){
            this.datacollection = {
                labels : [0,1,2,3,4,5,6,7,8,9],
                datasets:[
                    {
                        label:'Temp (C)',
                        backgroundColor:'rgba(255, 0, 0, 0.2)',
                        borderColor:'lightblue',
                        pointBackgroundColor:'blue',
                        borderWidth:1,
                        pointedBorderColor:'blue',
                        data: [0,1,2,3,4,5,6,7,8,9]
                    }
                ]
            }
        }
    }
    
}
</script>

<style>
.area {
    width : 500px;
    height : 100px;
    margin : auto
}
</style>