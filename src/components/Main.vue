<template>
    <div class="main-container">
        <transition :name="'move' + {path}" mode="out-in">
            <router-view class="router-view" />
        </transition>
    </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState} from 'vuex'


export default {
    computed: {
        ...mapState({
            path: state => state.path
        }),
    },
    store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container{
    position: absolute;
    padding-top: 46px;
    padding-bottom: 55px;
    height: 100%;
    width: 100%;
    padding-bottom: 50px;
    overflow: auto;
}
.router-view {
    position: relative;
    width: 100%;
}

/* animation */
.move-right-enter {
    transform: translate3d(-100%, 0, 0);
}
.move-right-enter-active{
    transition: all 500ms;
}
.move-right-leave-active{
    transition: all 500ms;
    transform: translate3d(100%, 0, 0);
}

.move-left-enter {
    transform: translate3d(100%, 0, 0);
}
.move-left-enter-active{
    transition: all 500ms;
}
.move-left-leave-active{
    transition: all 500ms;
    transform: translate3d(-100%, 0, 0);
}
</style>
