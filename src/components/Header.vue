<template>
  <x-header>
    <span>{{renameTitle}}</span>
    <!-- <x-icon slot="right" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon> -->
  </x-header>
</template>

<script>
import XHeader from 'vux/src/components/x-header'

export default {
  components: {
    XHeader
  },
  computed: {
    renameTitle () {
      let titleArr = ''
      if (this.$route.path === '/' || this.$route.path === '/frontEnd') {
        titleArr = 'Front End'
      } else if (this.$route.path === '/sports') {
        titleArr = 'Sports'
      } else {
        titleArr = 'Car'
      }
      return titleArr
    }
  }
}
</script>

<style scoped>
.vux-header{ 
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 100; 
  width: 100%;    
}
</style>
