<template>
    <div>
        <tabbar class="tabbar">
            <tabbar-item>
                <img slot="icon" src="../assets/front-end.png" />
                <span slot="label">Front end</span>
            </tabbar-item>
            <tabbar-item>
                <img slot="icon" src="../assets/sports.png" />
                <span slot="label">Sports</span>
            </tabbar-item>
            <tabbar-item link="/component/demo">
                <img slot="icon" src="../assets/joke.png" />
                <span slot="label">Joke</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import Tabbar from 'vux/src/components/tabbar/tabbar'
import TabbarItem from 'vux/src/components/tabbar/tabbar-item'
import Icon from 'vux/src/components/icon'

export default {
    components: {
        Tabbar,
        TabbarItem,
        Icon,
    }
}
</script>

<style scoped>
.tabbar{
    position: fixed;
}
</style>