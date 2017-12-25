<template>
    <div class="main-container">
        <transition name="move-left" mode="out-in">
            <router-view class="router-view" />
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Main',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
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
    background: #d1d1d1;
}
.router-view {
    position: absolute;
    width: 100%;
}

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
