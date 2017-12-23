<template>
    <div>
        <x-header>
            <span>Hot News</span>
            <x-icon slot="right" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        </x-header>
    </div>
</template>

<script>
import XHeader from 'vux/src/components/x-header'


export default {
    created(){
        this.$axios.get('/api').then((body) => {
            // console.log(body.data)
            var contentArr = this.$api.phase(body.data)
            console.log(contentArr)
        })
    },
    components: {
        XHeader
    }
}
</script>

<style scoped>

</style>