import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			components: {
				default: HelloWorld,
				footer: Footer,
			}
		},
		{
			path: '/footer',
			name: 'Footer',
			component: Footer
		},		
	]
})
