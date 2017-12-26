<template>
    <div id="app">

        <router-view name="header" />
        <router-view></router-view>
        <router-view name="footer" />

    </div>
</template>


<script>
export default {
    name: 'app'
}
</script>


<style >
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, p, blockquote, table, th, td, embed, object {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
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
    position: absolute;
    height: 100%;
    width: 100%;
}
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