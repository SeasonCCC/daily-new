<template>
    <div id="app">
            <router-view name="header"></router-view>        
            <viewbox ref="viewBox">
                <router-view></router-view>
            </viewbox>
            <router-view name="footer"></router-view>
    </div>
</template>


<script>
import Drawer from 'vux/src/components/drawer'
import ViewBox from 'vux/src/components/view-box'
export default {
    name: 'app',
    components: {
        viewbox: ViewBox,
        drawer: Drawer
    }
}
</script>


<style >
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, p, blockquote, table, th, td, embed, object {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
fieldset, img, abbr {
    border: 0;
}
address, caption, cite, code, dfn, em,
h1, h2, h3, h4, h5, h6, strong, th, var {
    font-weight: normal;
    font-style: normal;
}
ul {
    list-style: none;
}
caption, th {
    text-align: left;
}
h1, h2, h3, h4, h5, h6 {
    font-size: 1.0em;
}
q:before, q:after {
    content: ”;
}
a, ins {
    text-decoration: none;
}
#app{
    height: 100%;
}
.vux-drawer {
    display: block;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>