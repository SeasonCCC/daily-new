<template>
	<div>

		<tabbar class="tabbar">
			<tabbar-item>
				<span slot="label">Wechat</span>
			</tabbar-item>
			<tabbar-item show-dot>
				<span slot="label">Message</span>
			</tabbar-item>
			<tabbar-item selected link="/component/demo">
				<span slot="label">Explore</span>
			</tabbar-item>
			<tabbar-item badge="2">
				<span slot="label">News</span>
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