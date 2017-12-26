<template>
        <tabbar class="tabbar">
            <tabbar-item :link="{name: 'frontEnd', params: { num: 0 }}">
                <img slot="icon" src="../assets/front-end.png" />
                <span slot="label">Front end</span>
            </tabbar-item>
            <tabbar-item :link="{name: 'sports', params: { num: 1 }}">
                <img slot="icon" src="../assets/sports.png" />
                <span slot="label">Sports</span>
            </tabbar-item>
            <tabbar-item :link="{name: 'car', params: { num: 2 }}">
                <img slot="icon" src="../assets/car.png" />
                <span slot="label">Car</span>
            </tabbar-item>
        </tabbar>
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
    },
}
</script>

<style scoped>
.weui-tabbar {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: absolute;
    z-index: 500;
    bottom: 0;
    width: 100%;
    background-color: #F7F7FA;
}

</style>