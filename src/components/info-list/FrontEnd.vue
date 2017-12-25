<template>
    <div>
        <li v-for="content in contentArr">
            {{content.title}}
        </li>
    </div>
</template>

<script>
export default {
    created(){
        this.$axios.get('/api').then((body) => {
            var contentArr = this.$api.phase(body.data, 'juejin')
            this.contentArr = contentArr
        })
    },
    data(){
        return {
            contentArr: []
        }
    }
}
</script>