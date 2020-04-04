<template>
  <div id="graph">
    <Header/>
    <Chart/>
  </div>
</template>

<script>
import Chart from '@/components/graph/Chart.vue'
import Header from '@/components/graph/Header.vue'

export default {
  name: 'graph',
  components:{
    Chart,
    Header
  }
}
</script>
