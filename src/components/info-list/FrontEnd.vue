<template>
    <div>
        <loading :show="show" :text="text"></loading>
        <li v-for="content in contentArr">
            {{content.title}}
        </li>
        <li v-for="content in contentArr">
            {{content.title}}
        </li>
        
    </div>
</template>

<script>
import Loading from 'vux/src/components/loading'

export default {
    created () {
        this.$axios.get('/api').then((body) => {
            var contentArr = this.$api.phase(body.data, 'juejin')
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
        loading: Loading
    }
}
</script>