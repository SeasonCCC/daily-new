<template>
        <x-header>
            <span>{{renameTitle}}</span>
            <x-icon slot="right" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        </x-header>
</template>

<script>
import XHeader from 'vux/src/components/x-header'
import store from '@/vuex/store'
import {mapState} from 'vuex'

export default {
    data () {
        return {
            title: 0
        }
    },
    components: {
        XHeader
    },
    computed: {
        renameTitle () {
            const titleArr = ['Front End', 'Sports', 'Car']
            return titleArr[this.prevPath]
        },
        ...mapState(['prevPath']),
    },
    store
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