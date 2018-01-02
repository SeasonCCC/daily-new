<template>
  <div>
    <loading :show = "show" :text = "text"></loading>
    <group>
      <cell-box v-for="(content, index) in contentArr" :key="content.id" :link="content.href">
        {{content.title}}
      </cell-box>
    </group>
  </div>
</template>

<script>
import Loading from 'vux/src/components/loading'
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import CellBox from 'vux/src/components/cell-box'

export default {
  created () {
    this.$axios.get('/apiSports').then((body) => {
      var contentArr = this.$api.phase(body.data, 'sina')
      this.contentArr = contentArr
      this.show = false
    })
  },
  data () {
    return {
      show: true,
      text: 'Loading',
      contentArr: []
    }
  },
  components: {
    Loading,
    Group,
    Cell,
    CellBox
  }

}
</script>

<style scoped>
.weui-cell_access.vux-cell-box {
  padding-right: 25px;
  position: relative;
}    
</style>