<template>
	<div>
		21313
		<tabbar>
			<tabbar-item>
				<icon type="success"></icon>
				<span slot="label">Wechat</span>
			</tabbar-item>
			<tabbar-item show-dot>
				<icon type="success"></icon>
				<span slot="label">Message</span>
			</tabbar-item>
			<tabbar-item selected link="/component/demo">
				<icon type="success"></icon>
				<span slot="label">Explore</span>
			</tabbar-item>
			<tabbar-item badge="2">
				<icon type="success"></icon>
				<span slot="label">News</span>
			</tabbar-item>
		</tabbar>
	</div>
</template>

<script>
// import { Tabbar, TabbarItem, Icon } from 'vux'
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