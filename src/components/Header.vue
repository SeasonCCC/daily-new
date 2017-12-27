<template>
        <x-header>
            <span>Hot News</span>
            <x-icon slot="right" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        </x-header>
</template>

<script>
import XHeader from 'vux/src/components/x-header'


export default {
    components: {
        XHeader
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