### Vue3 + Spring Boot + Uniapp开发校园二手交易平台小程序/管理系统实战视频教程





#### 第01讲 课程介绍与项目展示

##### 1、课程适合对象

```js
有Vue2、Vue3组合api基础知识，TypeScript基础知识的小伙伴；
```

##### 2、课程涉及技术

```js
1、CSS3
2、TypeScript
3、Vue3.2
4、Pinia
5、Vue Router4.x
6、Vite2.x
7、Element Plus
8、Spring Boot
9、MySql5.7
```

##### 3、课程收获

```js
掌握vue3+typescript开发后台系统；
掌握vue3+uniapp开发小程序；
掌握springboot+vue3+ts+uniapp开发小程序；
```















#### 第02讲 创建uniapp+vue3项目

**准备工作：**

```js
1、下载hbuilderX开发工具
	https://hx.dcloud.net.cn/Tutorial/install/windows
	https://hx.dcloud.net.cn/Tutorial/install/macosx

2、下载微信小程序开发工具
	https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

3、注册小程序账号
	小程序官网  https://mp.weixin.qq.com/
	注册地址  https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html#%E7%94%B3%E8%AF%B7%E5%B8%90%E5%8F%B7

4、安装node.js16
```



##### 1、uniapp官网地址

```js
https://uniapp.dcloud.net.cn/quickstart-cli.html
```



##### 2、注意事项

```js
1、node.js版本 >= 16
```



##### 3、创建命令

```js
npx degit dcloudio/uni-preset-vue#vite shop-wx
```



![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\w-1.png)





##### 4、安装依赖

###### 4.1、cd shop-wx进入项目根目录，然后安装项目依赖

```js
npm install
```

###### 4.2、Hbuilderx导入创建的项目

```js
hbuilderx左上角文件，导入，选择从本地目录导入，选择shop-wx文件夹打开
```



##### 5、运行项目到微信小程序开发工具问题

###### 5.1、提示提示项目下缺少manifest.json文件

```js
选中项目名称，右键，重新识别项目类型，再次运行
```

###### 5.2、HBuilderX 运行[uniapp](https://so.csdn.net/so/search?q=uniapp&spm=1001.2101.3001.7020)到微信开发者工具，提示工具的服务端口已关闭

```js
手动打开微信开发者工具   找到 设置 -> 安全设置，将服务端口开启
```



##### 6、微信小程序控制台报TypeError: Cannot read property ‘forceUpdate‘ of undefined

```js
manifest.json – 微信小程序配置 – AppID
```



##### 7、Hbuilder控制台报如下错误

```js
DeprecationWarning: Use of deprecated folder mapping "./" in the "exports" field module resolution of the package at D:\项目实战\23\vue3+springboot校园点餐小程序\备课\小程序\order-test\node_modules\vuex\package.json.
```

```js
找到项目中，node_modules/vuex/package.json文件
其中exports配置中的


"./": "./"

改为

"./*": "./*"

```















#### 第03讲  配置小程序底部tabbar

##### 1、效果展示

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\w-3.jpg)

##### 2、新建页面

项目src/pages目录右键，新建页面，写入页面名称，并且勾选在pages.json，点击创建

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\w-2.png)





```js
分别创建write(发布)、unused(闲置)、buy(求购)、mine(我的)页面
```



##### 3、配置tabBar

###### 2.1、官网地址

```js
https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar
```

###### 2.2、pages.json文件

项目src下page.json文件，图标注意看课程资料logo文件夹里面

```js
{
	"pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "首页"
			}
		}, {
			"path": "pages/write/write",
			"style": {
				"navigationBarTitleText": "发布",
				"enablePullDownRefresh": false
			}

		}, {
			"path": "pages/mine/mine",
			"style": {
				"navigationBarTitleText": "我的",
				"enablePullDownRefresh": false
			}

		}, {
			"path": "pages/buy/buy",
			"style": {
				"navigationBarTitleText": "求购",
				"enablePullDownRefresh": false
			}

		}, {
			"path": "pages/unused/unused",
			"style": {
				"navigationBarTitleText": "闲置",
				"enablePullDownRefresh": false
			}

		}
	],
	"globalStyle": {
		// 导航字体颜色，仅支持 black/white
		"navigationBarTextStyle": "white",
		//导航全局标题，当页面没有配置的时候生效
		"navigationBarTitleText": "校园二手交易小程序",
		//导航字体颜色
		"navigationBarBackgroundColor": "#FF7670",
		// "navigationBarBackgroundColor": "#F3AF28",
		//下拉显示出来的窗口的背景色
		"backgroundColor": "#F8F8F8"
	},
	"tabBar": {
			"color": "#333333",
			"selectedColor": "#FF7670",
			"borderStyle": "black",
			"backgroundColor": "#ffffff",
			"list": [{
				"pagePath": "pages/index/index",
				"iconPath": "static/home.png",
				"selectedIconPath": "static/home_select.png",
				"text": "首页"
			}, {
				"pagePath": "pages/unused/unused",
				"iconPath": "static/unused.png",
				"selectedIconPath": "static/unused_select.png",
				"text": "闲置"
			}, {
				"pagePath": "pages/write/write",
				"iconPath": "static/write.png",
				"selectedIconPath": "static/write_select.png",
				"text": "发布"
			}, {
				"pagePath": "pages/buy/buy",
				"iconPath": "static/buy.png",
				"selectedIconPath": "static/buy_select.png",
				"text": "求购"
			}, {
				"pagePath": "pages/mine/mine",
				"iconPath": "static/mine.png",
				"selectedIconPath": "static/mine_select.png",
				"text": "我的"
			}]
		}
}

```

##### 4、tabar图标制作

图标颜色

```js
1、默认图标颜色   #2c2c2c
2、选中图标的颜色  #FF7670
```

###### 4.1、注册/登录iconfont官网

```js
https://www.iconfont.cn/
```

###### 4.2、选择图标，放到购物车

###### 4.3、下载，放到小程序项目的static目录下面











#### 第04讲 项目安装uview组件

##### 1、官网地址

```js
https://vkuviewdoc.fsq.pub/
https://vkuviewdoc.fsq.pub/components/install.html
```

##### 2、安装sass 及 sass-loader

```js
进入到项目根目录(shop-wx下)，执行如下代码

#安装 sass
npm i sass -D

#安装 sass-loader
npm i sass-loader@10.1.1 -D 
```

##### 3、从uniapp插件市场安装uview组件

```js
https://ext.dcloud.net.cn/plugin?id=6692

打开上面网址，点击使用HbuilderX导入插件

安装插件提示  uni_modules处理外部应用请求未能完成 的问题

解决方式： 菜单【工具 - 插件安装】，卸载uni_modules，重装此插件试试
```

##### 4、main.js 引入 vk-uview-ui

```js
import {
	createSSRApp
} from "vue";
// 引入 uView UI
import uView from './uni_modules/vk-uview-ui';
import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	// 使用 uView UI
	app.use(uView)
	return {
		app,
	};
}
```

##### 5、App.vue 引入基础样式（注意style标签需声明scss属性支持）

```js
<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>
<style lang="scss">
	@import "./uni_modules/vk-uview-ui/index.scss";
</style>

```

##### 6、uni.scss 引入全局 scss 变量文件

```js
@import "@/uni_modules/vk-uview-ui/theme.scss";
```

##### 7、测试

```js
<template>
  <view class="content">
   <u-button type="primary">主要按钮</u-button>
   <u-button type="success">成功按钮</u-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() {},
  methods: {},
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

```













#### 第05讲 首页轮播图制作

##### 1、轮播图组件

```js
https://uniapp.dcloud.net.cn/component/swiper.html
```

##### 2、页面

```js
<template>
	<!-- 轮播图 -->
	<view class="u-wrap">
		<swiper class="swipper-container" circular :indicator-dots="indicatorDots" :indicator-color='indicatorColor'
			:autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item,index) in swipperList">
				<image class="imgs" :src='item.image'></image>
			</swiper-item>
		</swiper>
	</view>
	
</template>

<script setup>
	import {
		ref
	} from 'vue';
	
	const indicatorDots = ref(true)
	const indicatorColor = ref("#FFF")
	const autoplay = ref(true)
	const interval = ref(2000)
	const duration = ref(500)

	//轮播图数据
	const swipperList = ref([{
		image: '/static/33.jpeg'
	}, {
		image: '/static/44.jpg'
	}, {
		image: '/static/66.jpeg'
	}])

</script>

<style lang="scss">
	.swipper-container {
		height: 180px;
		.item {
			height: 180px;
		}
	}

	.imgs {
		height: 180px;
		width: 100%;
	}
</style>

```

##### 3、轮播图图片课程资料里面













#### 第06讲首页瀑布流布局

##### 1、瀑布流插件

```js
https://vkuviewdoc.fsq.pub/components/search.html
https://vkuviewdoc.fsq.pub/components/waterfall.html
```

##### 2、完整代码

```js
<template>
	<view class="u-wrap">
		<!-- 轮播图 -->
		<swiper class="swiper-container" circular :indicatorColor="indicatorColor" :indicator-dots="indicatorDots"
			:autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item,index) in swipperList">
				<image class="imgs" :src="item.image"></image>
			</swiper-item>
		</swiper>
		<!-- 搜索框 -->
		<view class="tab-strickt">
			<u-search bg-color="#FFF" margin="8px" style="flex-grow: 1;" :show-action="true" action-text="搜索" :animation="true"></u-search>
		</view>
		<view class="">
			<u-waterfall v-model="flowList" ref="uWaterfall1">
				<template v-slot:left="{leftList}">
					<view class="demo-warter-left" v-for="(item, index) in leftList" :key="index">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-price">
							{{item.price}}元
						</view>
						<view class="demo-tag">
							<view class="demo-tag-owner">
								自营
							</view>
							<view class="demo-tag-text">
								放心购
							</view>
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
						<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"
							@click="remove(item.id)"></u-icon>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter-right" v-for="(item, index) in rightList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-price">
							{{item.price}}元
						</view>
						<view class="demo-tag">
							<view class="demo-tag-owner">
								自营
							</view>
							<view class="demo-tag-text">
								放心购
							</view>
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
						<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"
							@click="remove(item.id)"></u-icon>
					</view>
				</template>
			</u-waterfall>
			<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const indicatorDots = ref(true)
	const indicatorColor = ref("#FFF")
	const autoplay = ref(true)
	const interval = ref(2000)
	const duration = ref(500)
	//轮播图数据
	const swipperList = ref([{
		image: '/static/33.jpeg'
	}, {
		image: '/static/44.jpg'
	}, {
		image: '/static/66.jpeg'
	}])
	//瀑布流
	const flowList = ref([{
			price: 75,
			title: '笔记本电脑',
			image: '/static/11.jpg',
		},
		{
			price: 385,
			title: '手机',
			image: '/static/22.jpeg',
		},
		{
			price: 784,
			title: '台式电脑',
			image: '/static/33.jpeg',
		},
		{
			price: 7891,
			title: '电脑',
			image: '/static/44.jpg',
		},
		{
			price: 2341,
			title: '自行车',
			image: '/static/66.jpeg',
		},
		{
			price: 2342,
			title: '考研英语',
			image: '/static/55.jpg',
		},
		{
			price: 2341,
			title: '苹果手机',
			image: '/static/11.jpg',
		},
		{
			price: 2342,
			title: '球鞋',
			image: '/static/22.jpeg',
		}
	])
</script>

<style lang='scss'>
	.swiper-container {
		height: 180px;

		.item {
			height: 180px;
		}

		.imgs {
			height: 180px;
			width: 100%;
		}
	}

	.demo-warter-left {
		border-radius: 8px;
		margin: 5px 0px 5px 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.demo-warter-right {
		border-radius: 8px;
		margin: 5px 5px 5px 0px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}

	.tab-strickt {
		position: sticky;
		z-index: 99;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		background-color: #f2f2f2;
	}
</style>

```











#### 第07讲 闲置、求购页面制作

##### 1、uview官网

```js
https://vkuviewdoc.fsq.pub/
```

##### 2、页面

```js
<template>
	<view class="u-wrap">
		<!-- 搜索框 -->
		<u-search margin="20rpx 0rpx" :show-action="true" action-text="搜索" :animation="true"></u-search>
		<view class="tab-strickt">
			<u-tabs active-color="#FF7670" name="cate_name" count="cate_count" :list="tabList" :is-scroll="true"
				v-model="current" @change="change"></u-tabs>
		</view>
		<!-- 瀑布流列表 -->
		<view class="">
			<u-waterfall v-model="flowList" ref="uWaterfall1">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-price">
							{{item.price}}元
						</view>
						<view class="demo-tag">
							<view class="demo-tag-owner">
								自营
							</view>
							<view class="demo-tag-text">
								放心购
							</view>
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
						<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"
							@click="remove(item.id)">
						</u-icon>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-price">
							{{item.price}}元
						</view>
						<view class="demo-tag">
							<view class="demo-tag-owner">
								自营
							</view>
							<view class="demo-tag-text">
								放心购
							</view>
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
						<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"
							@click="remove(item.id)">
						</u-icon>
					</view>
				</template>
			</u-waterfall>
		</view>
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const tabList = ref([{
		cate_name: '全部'
	}, {
		cate_name: '手机'
	}, {
		cate_name: '电脑'
	}, {
		cate_name: '衣服'
	}, {
		cate_name: '鞋子'
	}, {
		cate_name: '图书'
	}, {
		cate_name: '时尚'
	}, {
		cate_name: '手作'
	}])
	const current = ref(0)
	//瀑布流
	const flowList = ref([{
			price: 75,
			title: '小炒肉盖饭',
			image: '/static/11.jpg',
		},
		{
			price: 385,
			title: '手拉面',
			image: '/static/22.jpeg',
		},
		{x
			price: 784,
			title: '小笼包',
			image: '/static/33.jpeg',
		},
		{
			price: 7891,
			title: '馄饨',
			image: '/static/44.jpg',
		},
		{
			price: 2341,
			title: '香菇肉片盖饭',
			image: '/static/66.jpeg',
		},
		{
			price: 2342,
			title: '番茄鸡蛋盖饭',
			image: '/static/55.jpg',
		},
		{
			price: 2341,
			title: '香菇肉片盖饭',
			image: '/static/11.jpg',
		},
		{
			price: 2342,
			title: '番茄鸡蛋盖饭',
			image: '/static/22.jpeg',
		}, {
			price: 75,
			title: '华硕笔记本电脑',
			image: '/static/11.jpg',
		},
		{
			price: 385,
			title: '笔记本电脑',
			image: '/static/22.jpeg',
		}
	])
</script>

<style lang="scss">
	.tab-strickt {
		position: sticky;
		z-index: 99;
		top: 0;
		left: 0;
	}

	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}

	.tab-sticky {
		position: sticky;
		z-index: 99;
		top: 0;
		left: 0;
		background-color: #f2f2f2;
		display: flex;
		align-items: center;
	}
</style>

```









#### 第08讲 个人中心页面制作

##### 1、解决手机tabs横向滚动条问题

```js
/*去掉tabs选项卡滚动条*/
scroll-view ::v-deep ::-webkit-scrollbar {
   width: 0;
   height: 0;
   color: transparent
}
```

##### 2、个人中心页面

```js
https://vkuviewdoc.fsq.pub/
```

```js
<template>
	<view>
		<!-- <u-navbar :is-back="false" title="　" :border-bottom="false">
			<view class="u-flex u-row-right" style="width: 100%;">
				<view class="camera u-flex u-row-center">
					<u-icon name="camera-fill" color="#000000" size="48"></u-icon>
				</view>
			</view>
		</u-navbar> -->
		<view class="u-flex user-box u-p-30">
			<view class="u-m-r-10">
				<u-avatar  src="/static/user.jpg" size="100"></u-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">大幕孤烟直</view>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="star" title="我的发布"></u-cell-item>
				<u-cell-item icon="photo" title="我的求购"></u-cell-item>
				<u-cell-item icon="heart" title="我的收藏"></u-cell-item>
				<u-cell-item icon="red-packet" title="购买订单"></u-cell-item>
				<u-cell-item icon="order" title="出售订单"></u-cell-item>
				<u-cell-item icon="edit-pen" title="修改密码"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="setting" title="退出账号"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script setup>
	// import logo form '../../static/'
import { ref } from 'vue';
	const pic = ref('https://uviewui.com/common/logo.png')
	const show = ref(true)
	
</script>

<style lang="scss">
page{
	background-color: #ededed;
}

.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
</style>

```













#### 第09讲 发布页面制作

```js
https://vkuviewdoc.fsq.pub/
```



##### 1、新建write.vue页面

```js
<template>
	<view class="u-wrap u-p-l-20 u-p-r-20">
		<u-form :model="addModel" ref="form1">
			<u-form-item label="类型:">
				<u-radio-group v-model="addModel.type">
					<u-radio activeColor="#FF7670" v-for="(item, index) in list" :key="index" :name="item.name"
						:disabled="item.disabled">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="名称:">
				<u-input placeholder="请输入名称" v-model="addModel.title" />
			</u-form-item>
			<u-form-item label="简介:">
				<u-input placeholder="请输入简介" v-model="addModel.introduce" />
			</u-form-item>
			<u-form-item label="价格:">
				<u-input placeholder="请输入价格" v-model="addModel.price" />
			</u-form-item>
			<u-form-item label-width="auto" label="联系人:">
				<u-input placeholder="请输入联系人" v-model="addModel.userName" />
			</u-form-item>
			<u-form-item label-width="auto" label="联系电话:">
				<u-input placeholder="请输入联系电话" v-model="addModel.phone" />
			</u-form-item>
			<u-form-item label="图片:"></u-form-item>
			<u-upload :action="action" :file-list="fileList" ></u-upload>
		</u-form>
		<u-button :custom-style="customStyle">发布</u-button>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	const addModel = reactive({
		type: '',
		title: '',
		introduce: '',
		price: '',
		userName: '',
		phone: '',
		image: ''
	})
	const list = [{
			name: '闲置',
			disabled: false
		},
		{
			name: '求购',
			disabled: false
		}
	]
	const value = ref('')
	const action = ref('')
	const fileList = ref([])
	const customStyle = reactive({
		background:'#FF7670',
		color:'#FFF',
		marginTop:'50px',
		width:'100%'
	})
	
</script>

<style>

</style>

```











#### 第10讲 登录页面制作

##### 1、新建login.vue页面

```js
<template>
	<view class="u-p-t-40 u-p-r-60 u-p-b-30 u-p-l-60 logincontainer">
		<u-avatar size="140" src="/static/user.jpg" mode="circle"></u-avatar>
		<u-form class="forms" :model="loginModel" ref="form1">
			<u-form-item left-icon="account-fill" left-icon-style="font-size:24px;color:#FF7670;">
				<u-input placeholder="请输入账户" v-model="loginModel.username" />
			</u-form-item>
			<u-form-item left-icon="lock" left-icon-style="font-size:24px;color:#FF7670;">
				<u-input placeholder="请输入密码" v-model="loginModel.password" />
			</u-form-item>
			<view class="passtext">
				忘记密码
			</view>
			<u-button :custom-style="customStyle1">登录</u-button>
			<u-button type="success" :custom-style="customStyle2">注册</u-button>
			
		</u-form>
		
	</view>
</template>

<script setup>
	import {
		reactive
	} from 'vue';
	const loginModel = reactive({
		username: '',
		password: ''
	})
	const customStyle1 = reactive({
		marginTop: '40px',
		background:'#FF7670',
		color:'#FFF',
		width:'100%'
	})
	const customStyle2 = reactive({
		marginTop: '35px',
		// background:'#FF7670',
		color:'#FFF',
		width:'100%'
	})
</script>

<style lang="scss">
	.logincontainer {
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;

		.forms {
			width: 100%;
		}
	}
	.passtext{
		display: flex;
		justify-content: flex-end;
		color:#FF7670;
		margin-top: 15px;
	}
</style>

```















#### 第11讲 注册页面制作

```js
https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html
```

##### 1、新建register.vue页面

```js
<template>
	<view class="u-p-t-40 u-p-r-60 u-p-b-30 u-p-l-60 logincontainer">
		<button class="avatarwrap" open-type="chooseAvatar" bind:chooseavatar="onChooseAvatar">
		  <image class="avatar" :src="avatarUrl"></image>
		</button> 
		<!-- <u-avatar size="140" src="/static/user.jpg" mode="circle"></u-avatar> -->
		<u-form class="forms" :model="loginModel" ref="form1">
			<u-form-item left-icon="account-fill" left-icon-style="font-size:24px;color:#FF7670;">
				<u-input placeholder="请输入电话" v-model="loginModel.username" />
			</u-form-item>
			<u-form-item left-icon="account-fill" left-icon-style="font-size:24px;color:#FF7670;">
				<u-input placeholder="请输入账户" v-model="loginModel.username" />
			</u-form-item>
			<u-form-item left-icon="lock" left-icon-style="font-size:24px;color:#FF7670;">
				<u-input placeholder="请输入密码" v-model="loginModel.password" />
			</u-form-item>
			<u-form-item left-icon="lock" left-icon-style="font-size:24px;color:#FF7670;">
				<u-input placeholder="请输入确定密码" v-model="loginModel.password" />
			</u-form-item>
			<view class="passtext">
				已有账号，去登录
			</view>
			<u-button :custom-style="customStyle1">登录</u-button>
			
			
		</u-form>
		
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	const loginModel = reactive({
		phone: '',
		username: '',
		password: ''
	})
	const customStyle1 = reactive({
		marginTop: '40px',
		background:'#FF7670',
		color:'#FFF',
		width:'100%'
	})
	const customStyle2 = reactive({
		marginTop: '35px',
		// background:'#FF7670',
		color:'#FFF',
		width:'100%'
	})
	const onChooseAvatar = (e)=>{
		
	}
	const avatarUrl = ref('/static/user.jpg')
</script>

<style lang="scss">
	.logincontainer {
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;

		.forms {
			width: 100%;
		}
	}
	.passtext{
		display: flex;
		justify-content: flex-end;
		color:#FF7670;
		margin-top: 15px;
	}
	.avatarwrap{
		border-radius:100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 70px;
		width: 70px;
		padding: 0px;
		.avatar{
			border-radius:100%;
			height: 70px;
			width: 70px;
		}
	}
</style>

```













#### 第12讲 创建后台系统项目

**兼容性注意**

```js
Vite官网：https://vitejs.dev/
Vite中文网： https://cn.vitejs.dev/
Vite 需要 Node.js 版本 >= 14.0.0，建议使用16版本

node -v  //查看版本号
```





##### 1、新建项目

创建存放项目目录，cmd 进入到存放目录，执行如下命令创建项目

```js
npm create vite@latest
```

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\p-1.png)

##### 2、如下图所示，输入  y  回车

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\p-2.png)



##### 3、输入项目名称 shop-pc

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\p-3.png)



##### 4、选择vue框架

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\p-4.png)



##### 5、选择 TypeScript

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\p-5.png)

##### 6、cd 进入刚刚创建的项目

录入 cd shop-pc  执行 npm install 

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\p-6.png)



##### 7、运行项目

```js
npm run dev
```

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\p-7.png)

















#### 第13讲 路由安装

**vs code官网**

```js
https://code.visualstudio.com/
```



##### 1、项目配置别名

###### 1.1、vite.config.ts配置文件，添加如下配置

```js
server: {
    host: '0.0.0.0', //解决控制台 ：Network: use --host to expose
    port: 8080, //配置端口号
    hmr: true, //开启热更新
    open: true //启动在浏览器打开
  }
```

###### 1.2、vite 配置别名

```js
npm install @types/node@18.7.14 --save-dev
```



```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', //解决控制台 ：Network: use --host to expose
    port: 8080, //配置端口号
    hmr: true, //开启热更新
    open: true //启动在浏览器打开
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  }
})

```



###### 1.3、tsconfig.json里面添加如下代码

添加baseUrl和paths

```js
{
  "compilerOptions": {
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],
    "skipLibCheck": true,
    "baseUrl": ".",// paths 路径解析起点
    "paths": {
      "@/*": [   // 别名路径设置
        "src/*"
      ]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```

###### 1.4、如果别名配置还报错的，src下新建vite-env.d.ts

```js
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

```







##### 2、安装路由

**官网**

```js
https://router.vuejs.org/zh/introduction.html
```



###### 2.1、安装依赖

```js
npm install vue-router@4
```

###### 2.2、新建路由文件

src目录下新建router文件夹，然后新建index.ts文件

```js
// vue2-router
const router = new VueRouter({
  mode:  history ,
  ...
})

// vue-next-router
import { createRouter, createWebHistory } from  'vue-router'
const router = createRouter({
  history: createWebHistory(),
  ...
})
```

```js
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: Layout
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```



###### 2.3、main.ts里面引入路由

```js
import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './router/index'
const app = createApp(App);
app.use(router).mount('#app')

```



###### 2.4、修改App.vue为如下所示

```js
<template>
  <router-view/>
</template>

<style lang="scss">
</style>

```











#### 第14讲 安装element-plus

**官网**

```js
https://element-plus.org/zh-CN/#/zh-CN
```



##### 1、安装element plus

```js
npm install element-plus --save

npm install @element-plus/icons-vue
```

##### 2、main.ts引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
//引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App);
app.use(ElementPlus).use(router).mount('#app')
//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

```

##### 3、HelloWorld.vue页面使用

```js
<script setup lang="ts">
  //局部使用的方式，需要单独引入
import {Edit} from '@element-plus/icons-vue'
</script>

<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  <el-icon>
      <Edit />
    </el-icon>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

```













#### 第15讲 Pinia初识与安装

##### 1、开发插件安装

```js
1、禁用Vetur
2、安装Vue Language Features (Volar)
3、安装Element UI Snippets
4、Element UI VSCode Snippets
```



##### 2、pinia官网

```js
https://pinia.vuejs.org/
https://pinia.vuejs.org/introduction.html
```



##### 3、pinia安装

###### 3.1、安装依赖

```js
npm install pinia
```

###### 3.2、main.ts引入pinia

```js
//引入Pinia构造函数
import { createPinia } from 'pinia'
实// 例化 Pinia
const pinia = createPinia()
const app = createApp(App);
app.use(ElementPlus).use(router).use(pinia).mount('#app')
```



##### 4、使用pinia

###### 4.1、src下新建store

然后store下新建test目录，并建index.ts文件

```js
import { defineStore } from "pinia";
//创建store
//defineStore第一个参数：唯一的，不能重复 
export const testStore = defineStore('testStore',{
    state:()=>{
        return{
            count:0
        }
    },
    //获取值
    getters:{
        getCount(state){
            return state.count
        }
    }, 
    //改变state的值
    actions:{
        setCount(count:number){
            this.count = count;
        }
    }
})
```

###### 4.2、HelloWorld.vue页面

```js
<template>
  <div>{{ count }}</div>
  <div>666</div>
  <el-button icon="Edit" type="primary">编辑</el-button>
  <el-button @click="addBtn" icon="Plus" type="success">新增</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button icon="Close" type="danger">Danger</el-button>
  <el-icon>
      <Edit />
    </el-icon>
</template>
<script setup lang="ts">
import { computed } from "vue";
import {testStore} from '@/store/test/index'
//获取store
const store = testStore()
//从store里面获取count
const count = computed(()=>{
  return store.getCount
})
//改变store里面的值
const addBtn = ()=>{
  store.setCount(++store.count)
}
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>

```















#### 第16讲 主界面布局

```js
https://element-plus.gitee.io/zh-CN/component/container.html
```



##### 1、安装sass

```js
npm install --save-dev sass
```

##### 2、找到index.html添加如下style里面的样式

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
<style>
  html,body,#app{
    padding: 0px;
    margin: 0px;
    height: 100%;
    box-sizing: border-box;
  }
</style>

```

##### 3、App.vue修改为如下所示

```js
<template>
  <router-view/>
</template>

<style lang="scss">
</style>
```

##### 4、src目录下新建layout目录，并新建Index.vue主页面组件

```js
<template>
   <el-container class="mycontainer">
      <el-aside width="230px" class="asside">Aside</el-aside>
      <el-container>
        <el-header class="header">Header</el-header>
        <el-main class="mymain">Main</el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.mycontainer{
    height: 100%;
    .asside{
        background-color: burlywood;
    }
    .header{
        background-color: blueviolet;
    }
    .mymain{
        background-color: seagreen;
    }
}
</style>
```

##### 5、在router中引入主页面组件

```js
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: Layout
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

##### 6、启动项目



















#### 第17讲 左侧导航菜单制作

**官网**

```js
https://element-plus.org/zh-CN/component/menu.html
```



##### 1、layout下新建MenuItem.vue

```js
<template>
  <template v-for="menu in menuList" :key="menu.path">
    <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
      <template #title>
        <el-icon>
            <!-- 动态组件 -->
            <component :is="menu.meta.icon"></component>
        </el-icon>
        <span>{{menu.meta.title}}</span>
      </template>
      <!-- 递归调用生成下级菜单  递归：自己调用自己-->
      <menu-item :menuList="menu.children"></menu-item>
    </el-sub-menu>
    <el-menu-item v-else :index="menu.path">
      <el-icon>
        <!-- 动态组件 -->
        <component :is="menu.meta.icon"></component>
      </el-icon>
      <template #title>
        {{menu.meta.title}}
      </template>
    </el-menu-item>
</template>
</template>

<script setup lang="ts">
//接收父组件传递过来的参数
defineProps(['menuList'])
</script>

<style scoped></style>

```

##### 2、layout下新建Menu.vue组件

```js
<template>
  <el-menu
    default-active="/dashboard"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    unique-opened
    router
    @open="handleOpen"
    @close="handleClose"
    background-color="#304156"
  >
    <MenuItem :menuList="menuList"></MenuItem>
  </el-menu>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'
import MenuItem from './MenuItem.vue';
//菜单数据
let menuList = reactive([
  {
    path: "/dashboard",
    component: "Layout",
    name: "dashboard",
    meta: {
      title: "首页",
      icon: "HomeFilled",
      roles: ["sys:dashboard"],
    },
  },
  {
    path: "/system",
    component: "Layout",
    name: "system",
    meta: {
      title: "系统管理",
      icon: "Setting",
      roles: ["sys:manage"],
    },
    children: [
      {
        path: "/adminUser",
        component: "/system/AdminUser",
        name: "adminUser",
        meta: {
          title: "管理员管理",
          icon: "UserFilled",
          roles: ["sys:adminUser"],
        },
      },
      {
        path: "/userList",
        component: "/system/UserList",
        name: "userList",
        meta: {
          title: "用户管理",
          icon: "Wallet",
          roles: ["sys:userList"],
        },
      },
      {
        path: "/menuList",
        component: "/system/MenuList",
        name: "menuList",
        meta: {
          title: "菜单管理",
          icon: "Menu",
          roles: ["sys:menu"],
        },
      },
    ],
  },
  {
    path: "/goodsRoot",
    component: "Layout",
    name: "goodsRoot",
    meta: {
      title: "商品管理",
      icon: "Setting",
      roles: ["sys:goodsRoot"],
    },
    children: [
      {
        path: "/goodsType",
        component: "/goods/GoodsType",
        name: "goodsType",
        meta: {
          title: "商品分类",
          icon: "UserFilled",
          roles: ["sys:goodsType"],
        },
      },
      {
        path: "/unusedList",
        component: "/goods/UnusedList",
        name: "unusedList",
        meta: {
          title: "闲置商品",
          icon: "Wallet",
          roles: ["sys:unusedList"],
        },
      },
      {
        path: "/buyList",
        component: "/goods/BuyList",
        name: "buyList",
        meta: {
          title: "求购商品",
          icon: "Wallet",
          roles: ["sys:buyList"],
        },
      },
    ],
  },
  {
    path: "/order",
    component: "Layout",
    name: "order",
    meta: {
      title: "订单管理",
      icon: "Setting",
      roles: ["sys:order"],
    },
    children: [
      {
        path: "/unusedOrder",
        component: "/order/UnusedOrder",
        name: "unusedOrder",
        meta: {
          title: "闲置订单",
          icon: "UserFilled",
          roles: ["sys:unusedOrder"],
        },
      },
      {
        path: "/buyOrder",
        component: "/order/BuyOrder",
        name: "buyOrder",
        meta: {
          title: "求购订单",
          icon: "Wallet",
          roles: ["sys:buyOrder"],
        },
      },
    ],
  },
  {
    path: "/comment",
    component: "Layout",
    name: "comment",
    meta: {
      title: "评论管理",
      icon: "Setting",
      roles: ["sys:comment"],
    },
    children: [
      {
        path: "/commentList",
        component: "/comment/CommentList",
        name: "commentList",
        meta: {
          title: "评论列表",
          icon: "UserFilled",
          roles: ["sys:commentList"],
        },
      },
    ],
  },
]);
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}
.el-menu {
  border-right: none;
}

:deep(.el-sub-menu .el-sub-menu__title) {
  color: #f4f4f5 !important;
}

:deep(.el-menu .el-menu-item) {
  color: #bfcbd9;
}
/* 菜单点中文字的颜色 */

:deep(.el-menu-item.is-active) {
  color: #409eff !important;
}
/* 当前打开菜单的所有子菜单颜色 */

:deep(.is-opened .el-menu-item) {
  background-color: #1f2d3d !important;
}
/* 鼠标移动菜单的颜色 */

:deep(.el-menu-item:hover) {
  background-color: #001528 !important;
}
</style>

```

##### 3、layout/Index.vue中使用菜单组件

```js
<template>
  <el-container class="layout">
    <el-aside width="230px" class="asside">
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header class="header">Header</el-header>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import Menu from './Menu.vue';
</script>
<style lang="scss">
.layout {
  height: 100%;
  .asside {
    background-color: #304156;
  }
  .header {
    background-color: chocolate;
  }
  .main {
    background-color: darkcyan;
  }
}
</style>

```

















#### 第18讲  路由配置与页面创建

```js
https://router.vuejs.org/zh/
```

**功能分析**

```js
点击左侧菜单，能够在内容展示区展示对应页面
```

**前置知识**

```js
由于我们在 setup 里面没有访问 this，所以我们不能再直接访问 this.$router 或 this.$route；我们使用 useRouter 和 useRoute 替代；
const router = useRouter()  ->   this.$router
const route = useRoute()    ->   this.$route
```



##### 1、router/index.ts路由修改为如下

```js
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/layout/dashboard.vue'),
        name: 'dashboard',
        meta: {
          title: '首页',
          icon: '#icondashboard'
        }
      }
    ]
  },
  {
    path: "/system",
    component: Layout,
    name: "system",
    meta: {
      title: "系统管理",
      icon: "Setting",
      roles: ["sys:manage"],
    },
    children: [
      {
        path: "/adminUser",
        component: () => import('@/views/system/AdminUser.vue'),
        name: "adminUser",
        meta: {
          title: "管理员管理",
          icon: "UserFilled",
          roles: ["sys:adminUser"],
        },
      },
      {
        path: "/userList",
        component: () => import('@/views/system/UserList.vue'),
        name: "userList",
        meta: {
          title: "用户管理",
          icon: "Wallet",
          roles: ["sys:userList"],
        },
      },
      {
        path: "/menuList",
        component: () => import('@/views/system/MenuList.vue'),
        name: "menuList",
        meta: {
          title: "菜单管理",
          icon: "Menu",
          roles: ["sys:menu"],
        },
      },
    ],
  },
  {
    path: "/goodsRoot",
    component: Layout,
    name: "goodsRoot",
    meta: {
      title: "商品管理",
      icon: "Setting",
      roles: ["sys:goodsRoot"],
    },
    children: [
      {
        path: "/goodsType",
        component: () => import('@/views/goods/GoodsType.vue'),
        name: "goodsType",
        meta: {
          title: "商品分类",
          icon: "UserFilled",
          roles: ["sys:goodsType"],
        },
      },
      {
        path: "/unusedList",
        component: () => import('@/views/goods/UnusedList.vue'),
        name: "unusedList",
        meta: {
          title: "闲置商品",
          icon: "Wallet",
          roles: ["sys:unusedList"],
        },
      },
      {
        path: "/buyList",
        component: () => import('@/views/goods/BuyList.vue'),
        name: "buyList",
        meta: {
          title: "求购商品",
          icon: "Wallet",
          roles: ["sys:buyList"],
        },
      },
    ],
  },
  {
    path: "/order",
    component: Layout,
    name: "order",
    meta: {
      title: "订单管理",
      icon: "Setting",
      roles: ["sys:order"],
    },
    children: [
      {
        path: "/unusedOrder",
        component: () => import('@/views/order/UnusedOrder.vue'),
        name: "unusedOrder",
        meta: {
          title: "闲置订单",
          icon: "UserFilled",
          roles: ["sys:unusedOrder"],
        },
      },
      {
        path: "/buyOrder",
        component: () => import('@/views/order/BuyOrder.vue'),
        name: "buyOrder",
        meta: {
          title: "求购订单",
          icon: "Wallet",
          roles: ["sys:buyOrder"],
        },
      },
    ],
  },
  {
    path: "/comment",
    component: Layout,
    name: "comment",
    meta: {
      title: "评论管理",
      icon: "Setting",
      roles: ["sys:comment"],
    },
    children: [
      {
        path: "/commentList",
        component: () => import('@/views/comment/CommentList.vue'),
        name: "commentList",
        meta: {
          title: "评论列表",
          icon: "UserFilled",
          roles: ["sys:commentList"],
        },
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

##### 2、创建路由对应的页面



##### 3、在MenuBar.vue组件的el-menu添加 router属性

```js
router: 是否启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转
```

##### 4、src/layout/Index.vue的<el-main>添加路由 <router-view>

```js
<el-main class="main">
    <router-view></router-view>
</el-main>
```

##### 5、MenuBar.vue设置当前激活的菜单 default-active

```js
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical-demo"
    unique-opened
    background-color="#304156"
    router
  >
    <MenuItem :menuList="menuList"></MenuItem>
  </el-menu>
</template>
<script setup lang="ts">
import {  reactive,computed } from 'vue'
import MenuItem from "@/layout/MenuItem.vue";
import { useRoute } from 'vue-router';
const route = useRoute();
//获取激活的菜单
const activeIndex = computed(()=>{
    const {path} = route;
    return path;
})


let menuList = reactive([
  {
    path: "/dashboard",
    component: "Layout",
    name: "dashboard",
    meta: {
      title: "首页",
      icon: "HomeFilled",
      roles: ["sys:dashboard"],
    },
  },
  {
    path: "/system",
    component: "Layout",
    name: "system",
    meta: {
      title: "系统管理",
      icon: "Setting",
      roles: ["sys:manage"],
    },
    children: [
      {
        path: "/adminUser",
        component: "/system/AdminUser",
        name: "adminUser",
        meta: {
          title: "管理员管理",
          icon: "UserFilled",
          roles: ["sys:adminUser"],
        },
      },
      {
        path: "/userList",
        component: "/system/UserList",
        name: "userList",
        meta: {
          title: "用户管理",
          icon: "Wallet",
          roles: ["sys:userList"],
        },
      },
      {
        path: "/menuList",
        component: "/system/MenuList",
        name: "menuList",
        meta: {
          title: "菜单管理",
          icon: "Menu",
          roles: ["sys:menu"],
        },
      },
    ],
  },
  {
    path: "/goodsRoot",
    component: "Layout",
    name: "goodsRoot",
    meta: {
      title: "商品管理",
      icon: "Setting",
      roles: ["sys:goodsRoot"],
    },
    children: [
      {
        path: "/goodsType",
        component: "/goods/GoodsType",
        name: "goodsType",
        meta: {
          title: "商品分类",
          icon: "UserFilled",
          roles: ["sys:goodsType"],
        },
      },
      {
        path: "/unusedList",
        component: "/goods/UnusedList",
        name: "unusedList",
        meta: {
          title: "闲置商品",
          icon: "Wallet",
          roles: ["sys:unusedList"],
        },
      },
      {
        path: "/buyList",
        component: "/goods/BuyList",
        name: "buyList",
        meta: {
          title: "求购商品",
          icon: "Wallet",
          roles: ["sys:buyList"],
        },
      },
    ],
  },
  {
    path: "/order",
    component: "Layout",
    name: "order",
    meta: {
      title: "订单管理",
      icon: "Setting",
      roles: ["sys:order"],
    },
    children: [
      {
        path: "/unusedOrder",
        component: "/order/UnusedOrder",
        name: "unusedOrder",
        meta: {
          title: "闲置订单",
          icon: "UserFilled",
          roles: ["sys:unusedOrder"],
        },
      },
      {
        path: "/buyOrder",
        component: "/order/BuyOrder",
        name: "buyOrder",
        meta: {
          title: "求购订单",
          icon: "Wallet",
          roles: ["sys:buyOrder"],
        },
      },
    ],
  },
  {
    path: "/comment",
    component: "Layout",
    name: "comment",
    meta: {
      title: "评论管理",
      icon: "Setting",
      roles: ["sys:comment"],
    },
    children: [
      {
        path: "/commentList",
        component: "/comment/CommentList",
        name: "commentList",
        meta: {
          title: "评论列表",
          icon: "UserFilled",
          roles: ["sys:commentList"],
        },
      },
    ],
  },
]);
</script>
<style scoped lang="scss">

</style>

```















#### 第19讲 菜单logo制作

**菜单文字选择颜色**

```js
#f07810
```



##### 1、项目assets里面加入logo

##### 2、layout下新建MenuLogo.vue组件

```js
<template>
  <div class="logo">
    <img :src="MenuLogo" alt="logo" />
    <span  class="logo-title">{{ title }}</span>
  </div>
</template>
<script setup lang="ts">
import MenuLogo from '@/assets/MenuLogo.png'
import { ref } from "vue";

const title = ref("校园二手交易系统");

</script>
<style lang="scss" scoped>
.logo {
    display: flex;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #2b2f3a;
    text-align: center;
    cursor: pointer;
    align-items: center;
    img {
        width: 36px;
        height: 36px;
        margin-right: 12px;
        margin-left: 20px;
    }
    .logo-title {
        color: #fff;
        font-weight: 800;
        line-height: 60px;
        font-size: 22px;
        font-family: FangSong;
    }
}
</style>

```

##### 3、MenuBar.vue里面引入

















#### 第20讲 菜单折叠制作

##### 1、折叠实现原理

```js
使用menu组件的collapse属性实现菜单折叠
https://element-plus.gitee.io/zh-CN/component/menu.html#menu-attributes
```

##### 2、store下新建collapse目录，并建index.ts

```js
import { defineStore } from "pinia";
//定义store
export const collapseStore = defineStore('collapseStore',{
    state:()=> {
        return{
            collapse:false
        }
    },
    actions:{
        setCollapse(collapse:boolean){
            this.collapse = collapse;
        }
    },
    getters:{
        getCollapse(state){
            return state.collapse
        }
    }
})
```

##### 3、layout下新建Collapse.vue组件

```js
<template>
    <el-icon :size="30" style="cursor: pointer;color: #FFF;" @click="iconClick">
      d
    </el-icon>
  </template>
  
  <script setup lang="ts">
  import { Expand,Fold } from "@element-plus/icons-vue";
  import { computed } from 'vue';
  import { collapseStore } from '@/store/collapse/index';
  const store = collapseStore()
  const status = computed(()=>{
      return store.getCollapse
  })
  const iconClick = ()=>{
      store.setCollapse(!store.collapse)
  }
  </script>
  
  <style scoped></style>
  
```

##### 4、Index.vue组件使用折叠图标

```js
<template>
   <el-container class="mycontainer">
      <el-aside width="auto" class="asside">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <Collapse></Collapse>
        </el-header>
        <el-main class="mymain">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Menu from './Menu.vue'
import Collapse from './Collapse.vue';
</script>

<style scoped lang="scss">
.mycontainer{
    height: 100%;
    .asside{
        background-color: #304156;
    }
    .header{
        background-color: #009688;
        display: flex;
        align-items: center;
        color: #FFF;
    }
    .mymain{
        // background-color: seagreen;
    }
}
</style>
```

##### 5、Menu.vue组件的菜单添加collapse属性

```js
<template>
  <MenuLogo></MenuLogo>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    unique-opened
    router
    background-color="#304156"
  >
    <MenuItem :menuList="menuList"></MenuItem>
  </el-menu>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import {  useRoute } from 'vue-router'
import MenuItem from './MenuItem.vue';
import MenuLogo from './MenuLogo.vue';
import { collapseStore } from '@/store/collapse/index';
const collStore = collapseStore()
const isCollapse = computed(()=>{
  return collStore.getCollapse
})

//获取当前路由
const route = useRoute()
//当前激活的导航菜单
const activeIndex = computed(()=>{
  const {path} = route;
  return path;
})
//菜单数据
let menuList = reactive([
  {
    path: "/dashboard",
    component: "Layout",
    name: "dashboard",
    meta: {
      title: "首页",
      icon: "HomeFilled",
      roles: ["sys:dashboard"],
    },
  },
  {
    path: "/system",
    component: "Layout",
    name: "system",
    meta: {
      title: "系统管理",
      icon: "Setting",
      roles: ["sys:manage"],
    },
    children: [
      {
        path: "/adminUser",
        component: "/system/AdminUser",
        name: "adminUser",
        meta: {
          title: "管理员管理",
          icon: "UserFilled",
          roles: ["sys:adminUser"],
        },
      },
      {
        path: "/userList",
        component: "/system/UserList",
        name: "userList",
        meta: {
          title: "用户管理",
          icon: "Wallet",
          roles: ["sys:userList"],
        },
      },
      {
        path: "/menuList",
        component: "/system/MenuList",
        name: "menuList",
        meta: {
          title: "菜单管理",
          icon: "Menu",
          roles: ["sys:menu"],
        },
      },
    ],
  },
  {
    path: "/goodsRoot",
    component: "Layout",
    name: "goodsRoot",
    meta: {
      title: "商品管理",
      icon: "DocumentAdd",
      roles: ["sys:goodsRoot"],
    },
    children: [
      {
        path: "/goodsType",
        component: "/goods/GoodsType",
        name: "goodsType",
        meta: {
          title: "商品分类",
          icon: "UserFilled",
          roles: ["sys:goodsType"],
        },
      },
      {
        path: "/unusedList",
        component: "/goods/UnusedList",
        name: "unusedList",
        meta: {
          title: "闲置商品",
          icon: "Wallet",
          roles: ["sys:unusedList"],
        },
      },
      {
        path: "/buyList",
        component: "/goods/BuyList",
        name: "buyList",
        meta: {
          title: "求购商品",
          icon: "Wallet",
          roles: ["sys:buyList"],
        },
      },
    ],
  },
  {
    path: "/order",
    component: "Layout",
    name: "order",
    meta: {
      title: "订单管理",
      icon: "Tickets",
      roles: ["sys:order"],
    },
    children: [
      {
        path: "/unusedOrder",
        component: "/order/UnusedOrder",
        name: "unusedOrder",
        meta: {
          title: "闲置订单",
          icon: "UserFilled",
          roles: ["sys:unusedOrder"],
        },
      },
      {
        path: "/buyOrder",
        component: "/order/BuyOrder",
        name: "buyOrder",
        meta: {
          title: "求购订单",
          icon: "Wallet",
          roles: ["sys:buyOrder"],
        },
      },
    ],
  },
  {
    path: "/comment",
    component: "Layout",
    name: "comment",
    meta: {
      title: "评论管理",
      icon: "Briefcase",
      roles: ["sys:comment"],
    },
    children: [
      {
        path: "/commentList",
        component: "/comment/CommentList",
        name: "commentList",
        meta: {
          title: "评论列表",
          icon: "UserFilled",
          roles: ["sys:commentList"],
        },
      },
    ],
  },
]);

</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}
.el-menu {
  border-right: none;
}

:deep(.el-sub-menu .el-sub-menu__title){
	 color: #f4f4f5 !important;
}

:deep(.el-menu .el-menu-item){
	color: #bfcbd9;
}
/* 菜单点中文字的颜色 */

:deep(.el-menu-item.is-active){
	color: #f07810 !important;
}
/* 当前打开菜单的所有子菜单颜色 */

:deep(.is-opened .el-menu-item){
	background-color: #1f2d3d !important;
}
/* 鼠标移动菜单的颜色 */

:deep(.el-menu-item:hover){
	background-color: #001528 !important;
}
</style>

```

##### 6、MenuLogo.vue组件

```js
<template>
    <div class="logo">
        <img :src="MenuLogo"/>
        <span v-if="show" class="logo-title">{{ title }}</span>
    </div>
</template>

<script setup lang="ts">
import MenuLogo from '@/assets/MenuLogo.png'
import { ref,watch } from 'vue';
import { collapseStore } from '@/store/collapse/index';
const store = collapseStore()
const title = ref('校园二手交易系统')
const show = ref(true)
watch(
    ()=>store.getCollapse,
    (collapsed:boolean)=>{
        if(!collapsed){
            setTimeout(() => {
                show.value = !collapsed;
            }, 300);
        }else{
            show.value = !collapsed;
        }
    }
)
</script>

<style scoped lang="scss">
.logo{
    display: flex;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #2b2f3a;
    cursor: pointer;
    align-items: center;
    img{
        width: 46px;
        height: 46px;
        margin-left: 5px;
    }
    .logo-title{
        color: #FFF;
        font-weight: 600;
        font-size: 22px;
        font-family: FangSong;
    }
}
</style>
```













#### 第21讲 面包屑导航制作

##### 1、实现方式：Breadcrumb 面包屑

```js
https://element-plus.gitee.io/zh-CN/component/breadcrumb.html
```

##### 2、layout目录下新建BreadCrumb.vue组件

```js
<template>
    <el-breadcrumb class="bred" separator="/">
      <el-breadcrumb-item v-for="item in tabs">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref, Ref, watch } from "vue";
  import { useRoute, RouteLocationMatched } from "vue-router";
  //获取当前路由
  const route = useRoute();
  //定义面包屑导航数据
  const tabs: Ref<RouteLocationMatched[]> = ref([]);
  //监听当前路由
  watch(
    () => route.path,
    () => getBredcrumb()
  );
  //获取面包屑导航数据
  const getBredcrumb = () => {
      //找出有title的数据
      let mached = route.matched.filter((item)=>item.meta && item.meta.title);
      // console.log(mached)
      const first = mached[0]
      console.log(first)
      if(first.path !== '/dashboard'){
          mached = [{path:'/dashboard',meta:{title:'首页'}} as any].concat(mached)
      }
      tabs.value = mached
  };
  onMounted(()=>{
      getBredcrumb()
  })
  </script>
  <style scoped lang="scss">
  //修改字体颜色
  :deep(.el-breadcrumb__inner) {
    color: #fff !important;
  }
  .bred {
    margin-left: 20px;
  }
  // 修改字体大小
  :deep(.el-breadcrumb__item) {
    font-size: 15px !important;
  }
  </style>
  
```

##### 3、layout下的Index.vue组件引入使用















#### 第22讲 弹框组件封装

```js
https://element-plus.gitee.io/zh-CN/component/dialog.html
```

##### 1、components下面新建SysDialog.vue组件

```js
<template>
    <el-dialog
      :title="title"
      :model-value="visible"
      :before-close="onClose"
      append-to-body
      :width="width + 'px'"
      :close-on-click-modal="false"
    >
      <div class="container" :style="{ height: height + 'px' }">
        <slot name="content"></slot>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="danger" @click="onClose">取消</el-button>
          <el-button type="primary" @click="onConfirm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  <script setup lang="ts">
  interface DialogProps{
      title:string,
      visible:boolean,
      width:number,
      height:number
  }
  const props = withDefaults(defineProps<DialogProps>(), {
    title: '标题',
    visible:false,
    width:630,
    height:280
  });
  const emit = defineEmits(["onClose", "onConfirm"]);
  //定义弹框的关闭
  const onClose = () => {
    emit("onClose");
  };
  //定义弹框的确定
  const onConfirm = () => {
    emit("onConfirm");
  };
  
  </script>
  <style lang="scss" scope>
  .container {
    overflow-x: initial;
    overflow-y: auto;
  }
  .el-dialog {
    border-top-left-radius: 7px !important;
    border-top-right-radius: 7px !important;
    .el-dialog__header {
      margin-right: 0px;
      border-top-left-radius: 7px !important;
      border-top-right-radius: 7px !important;
      background-color: #17223b !important;
      .el-dialog__title {
        color: #fff;
        font-size: 16px;
        font-weight: 600;
      }
    }
    .el-dialog__headerbtn {
      .el-dialog__close {
        color: #fff;
      }
    }
    .el-dialog__body {
      padding: 10px;
    }
    .el-dialog__footer {
      border-top: 1px solid #e8eaec !important;
      padding: 10px;
    }
  }
  </style>
  
```

##### 2、layout/dashboard.vue组件引入使用

```js
<template>
  <div>
    <el-button type="primary" icon="Plus" size="default" @click="addBtn"
      >新增</el-button
    >
  </div>
  <SysDialog
    :title="dialog.title"
    :visible="dialog.visible"
    @onClose="onClose"
    @onConfirm="onConfirm"
  >
    <template v-slot:content> 
        弹框测试
    </template>
  </SysDialog>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import SysDialog from "@/components/SysDialog.vue";
//弹框属性
const dialog = reactive({
  title: "新增",
  visible: false,
});
//弹框关闭
const onClose = () => {
  dialog.visible = false;
};
//弹框确定
const onConfirm = () => {
  dialog.visible = false;
};
//按钮点击事件
const addBtn = () => {
  dialog.visible = true;
};
</script>

<style scoped></style>

```

##### 3、弹框hooks封装

```js
import { reactive } from "vue";
export default function useDialog() {
    //弹框属性
    const dialog = reactive({
        title: "新增",
        visible: false,
        width:630,
        height:280
    });
    //弹框关闭
    const onClose = () => {
        dialog.visible = false
    };
    //弹框确定
    const onConfirm = () => {
        dialog.visible = false
    };
    //弹框显示
    const onShow = ()=>{
        dialog.visible = true;
    }
    return{
        dialog,
        onClose,
        onConfirm,
        onShow
    }
}
```

##### 4、hooks使用

```js
<template>
  <div>
    <el-button type="primary" size="default" @click="onShow">新增</el-button>
    <!-- 弹框组件 -->
    <SysDialog
      :title="dialog.title"
      :visible="dialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <template v-slot:content> 弹框测试 </template>
    </SysDialog>
  </div>
</template>

<script setup lang="ts">
import SysDialog from "@/components/SysDialog.vue";
import { reactive } from "vue";
import  useDialog  from "@/hooks/useDialog";
//获取弹框属性
const {dialog,onClose,onConfirm,onShow} = useDialog()
// //弹框属性
// const dialog = reactive({
//   title: "新增",
//   visible: false,
// });
//新增按钮点击事件
// const addBtn = () => {
//     dialog.visible = true
// };
// const onClose = () => {
//     dialog.visible = false
// };
// const onConfirm = () => {
//     dialog.visible = false
// };
</script>

<style scoped></style>

```















#### 第23讲 新增管理员页面制作1

##### 1、AdminUser.vue页面

```js
<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input
          v-model="searchParm.nickName"
          placeholder="请输入姓名"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search">搜索</el-button>
        <el-button icon="Close" type="danger" plain>重置</el-button>
        <el-button type="primary" icon="Plus" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 新增、编辑弹框 -->
    <SysDialog
      :title="dialog.title"
      :width="dialog.width"
      :height="dialog.height"
      :visible="dialog.visible"
      @on-close="onClose"
      @on-confirm="onConfirm"
    >
      <template v-slot:content> 弹框内容 </template>
    </SysDialog>
  </el-main>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
//获取弹框属性
const { dialog, onClose, onConfirm } = useDialog();
//搜索绑定的对象
const searchParm = reactive({
  nickName: "",
});
//新增按钮
const addBtn = () => {
//   dialog.height = 150;
  dialog.visible = true;
};
</script>

<style scoped></style>

```

















#### 第24讲 新增管理员页面制作2

##### 1、AdminUser.vue页面

```js
<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input
          placeholder="请输入姓名"
          v-model="searchParm.nickName"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search" @click="searchBtn">搜索</el-button>
        <el-button type="danger" plain icon="Close" @click="resetBtn"
          >重置</el-button
        >
        <el-button icon="Plus" type="primary" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 新增弹框 -->
    <SysDialog
      :title="dialog.title"
      :visible="dialog.visible"
      :height="dialog.height"
      @on-close="onClose"
      @on-confirm="commit"
    >
      <template v-slot:content>
        <el-form
          :model="addModel"
          ref="addFormRef"
          :rules="rules"
          :inline="false"
          label-width="80px"
          size="normal"
        >
          <el-form-item prop="nickName" label="姓名">
            <el-input v-model="addModel.nickName"></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别">
            <el-radio-group v-model="addModel.sex">
              <el-radio :label="'0'">男</el-radio>
              <el-radio :label="'1'">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="phone" label="电话">
            <el-input v-model="addModel.phone"></el-input>
          </el-form-item>
          <el-form-item prop="username" label="登录账户">
            <el-input v-model="addModel.username"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input v-model="addModel.password"></el-input>
          </el-form-item>
          <el-form-item prop="status" label="状态">
            <el-radio-group v-model="addModel.status">
              <el-radio :label="'0'">启用</el-radio>
              <el-radio :label="'1'">停用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
  </el-main>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import { User } from "@/api/user/UserModel";
//弹框属性
const { dialog, onClose, onShow } = useDialog();
//搜索表单绑定的对象
const searchParm = reactive({
  nickName: "",
});
//新增按钮
const addBtn = () => {
  dialog.height = 300;
  onShow();
};
//搜索按钮
const searchBtn = () => {};
//重置按钮
const resetBtn = () => {};
//表单绑定的数据对象
const addModel = reactive<User>({
  userId: "",
  username: "",
  password: "",
  nickName: "",
  phone: "",
  sex: "",
  status: "",
});
//表单验证规则
//1.el-form-item加prop属性
//2.编写表单验证规则 rules
//3.表单要绑定 :rules="rules"
const rules = reactive({
  username: [{ required: true, message: "请输入登录账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入登录密码", trigger: "blur" }],
  nickName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  phone: [{ required: true, message: "请输入电话", trigger: "blur" }],
  sex: [{ required: true, message: "请输入性别", trigger: "blur" }],
});
const commit = () => {};
</script>

<style scoped></style>

```



















#### 第25讲 后台接口多模块系统搭建

**开发环境配置**

```js
1、JDK安装配置 1.8
2、IDEA安装 2020
3、maven安装 3.5
4、MySql安装 5.7
5、数据库可视化工具 Navicat安装
```

**maven配置**

```js
1、配置仓库: <localRepository>D:\javaDe\apache-maven-3.5.4\repo</localRepository>
2、修改镜像： 
<mirror>
  <id>nexus-aliyun</id>
  <mirrorOf>central</mirrorOf>
  <name>Nexus aliyun</name>
  <url>http://maven.aliyun.com/nexus/content/groups/public</url>
</mirror>
```



##### 1、项目版本号

JDk1.8、Maven3.5、MySq5.7



##### 2、项目结构

| team-api         | 父模块，pom类型、统一管理子模块 |
| ---------------- | ------------------------------- |
| itmk-base-common | 公共模块、如通用工具的封装等    |
| itmk-base-web    | 前端接口模块，提供api接口       |

##### 3、创建team-api父模块

1、打开IDEA，file -> new - > project

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\1-8.jpg)



2、选择左侧**Maven**，Project SDK选择**1.8**，点击Next

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\1-9.jpg)



3、Name里面输入**模块名称**，Location选择**项目存储路径**，GroupId:**输入包名，同一个项目，各个模块的包名一致**    ArtifactId: **模块名称**；点击Finish

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\1-10.jpg)



##### 4、由于team-api作为父模块，把生成的模块中的src删除；

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\1-11.jpg)



##### 5、创建itmk-base-common模块

###### 1.在父模块team-api上右键->New->Module，如下所示

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\1-12.jpg)



###### 2、选择Maven,SDK选择1.8及以上，点击Next

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\1-14.jpg)



###### 3、Name:输入模块名称 itmk-base-common，点击Finish

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\1-15.jpg)



##### 6、创建itmk-base-web模块

###### 1.team-api模块右键，点击New->Module

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\1-12.jpg)

###### 2.选择Maven，SDK选择1.8及以上，点击 Next

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\1-14.jpg)

###### 3.Name填入模块名称itmk-base-web，点击Finish

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\1-16.jpg)



##### 7、项目最终模块

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\1-17.jpg)













#### 第26讲 引入各个模块依赖

##### 1、修改package类型

​	修改父模块 team-api的pom.xml打包类型为 pom; 

​	itmk-base-common的pom.xml打包类型为 jar；

​	itmk-base-web的pom.xml打包类型为jar

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\1-18.jpg)



##### 2、team-api pom.xml文件

```js
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.itmk</groupId>
    <artifactId>team-api</artifactId>
    <packaging>pom</packaging>
    <version>1.0-SNAPSHOT</version>
    <modules>
        <module>itmk-base-common</module>
        <module>itmk-base-web</module>
    </modules>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.4.4</version>
    </parent>
    <properties>
        <java.version>1.8</java.version>
        <swagger2.version>3.0.0</swagger2.version>
        <lombok-version>1.18.12</lombok-version>
        <mybatis-plus.version>3.4.2</mybatis-plus.version>
        <druid.version>1.2.1</druid.version>
        <kaptcha.version>2.3.2</kaptcha.version>
        <fastjson.version>1.2.68</fastjson.version>
        <commons-lang.version>2.6</commons-lang.version>
        <commons-collections.version>3.2.2</commons-collections.version>
        <commons-io.version>2.6</commons-io.version>
        <mysql-connection.version>8.0.21</mysql-connection.version>
    </properties>
    <dependencyManagement>
        <dependencies>
            <!-- lombok依赖 -->
            <dependency>
                <groupId>org.projectlombok</groupId>
                <artifactId>lombok</artifactId>
                <version>${lombok-version}</version>
                <scope>provided</scope>
            </dependency>
            <dependency>
                <groupId>mysql</groupId>
                <artifactId>mysql-connector-java</artifactId>
                <version>${mysql-connection.version}</version>
                <scope>runtime</scope>
            </dependency>
            <!--druid连接池-->
            <dependency>
                <groupId>com.alibaba</groupId>
                <artifactId>druid-spring-boot-starter</artifactId>
                <version>${druid.version}</version>
            </dependency>
            <!--mybatis-plus依赖-->
            <dependency>
                <groupId>com.baomidou</groupId>
                <artifactId>mybatis-plus-boot-starter</artifactId>
                <version>${mybatis-plus.version}</version>
            </dependency>
            <!-- kaptcha 图形验证码 -->
            <dependency>
                <groupId>com.github.penggle</groupId>
                <artifactId>kaptcha</artifactId>
                <version>${kaptcha.version}</version>
            </dependency>

            <!-- JSON转换工具类依赖 -->
            <dependency>
                <groupId>com.alibaba</groupId>
                <artifactId>fastjson</artifactId>
                <version>${fastjson.version}</version>
            </dependency>

            <dependency>
                <groupId>commons-lang</groupId>
                <artifactId>commons-lang</artifactId>
                <version>${commons-lang.version}</version>
            </dependency>
            <dependency>
                <groupId>commons-collections</groupId>
                <artifactId>commons-collections</artifactId>
                <version>${commons-collections.version}</version>
            </dependency>
            <dependency>
                <groupId>commons-io</groupId>
                <artifactId>commons-io</artifactId>
                <version>${commons-io.version}</version>
            </dependency>
            <dependency>
                <groupId>io.springfox</groupId>
                <artifactId>springfox-boot-starter</artifactId>
                <version>${swagger2.version}</version>
            </dependency>
        </dependencies>
    </dependencyManagement>

</project>
```



##### 3、itmk-base-common  pom.xml

```js
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>team-api</artifactId>
        <groupId>com.itmk</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <packaging>jar</packaging>
    <modelVersion>4.0.0</modelVersion>

    <artifactId>itmk-base-common</artifactId>
     <dependencies>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
        <!-- jwt-->
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt</artifactId>
            <version>0.9.0</version>
        </dependency>
        <!-- 工具类依赖 -->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
        </dependency>
    </dependencies>

</project>
```



##### 4、itmk-base-web  pom.xml

```js
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>team-api</artifactId>
        <groupId>com.itmk</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>
    <packaging>jar</packaging>
    <artifactId>itmk-base-web</artifactId>
    <dependencies>
        <dependency>
            <groupId>com.itmk</groupId>
            <artifactId>itmk-base-common</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>
        <!--web启动器,对springmvc,serlvet等支持-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-aop</artifactId>
        </dependency>

        <!--数据库依赖-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-jdbc</artifactId>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>
        <!--mybatis-plus启动器-->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
        </dependency>
        <!--druid连接池-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
        </dependency>
        <!-- swagger api文档 -->
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-boot-starter</artifactId>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-compress</artifactId>
            <version>1.18</version>
        </dependency>
		<dependency>
            <groupId>commons-lang</groupId>
            <artifactId>commons-lang</artifactId>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <version>2.1.4.RELEASE</version>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.1</version>
                <configuration>
                    <source>${java.version}</source>
                    <target>${java.version}</target>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>2.19.1</version>
                <configuration>
                    <skipTests>true</skipTests>    <!--打包过程默认关掉单元测试 -->
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>
```











#### 第27讲 整合MyBatis Plus

mybatis plus官方教程**

```js
https://baomidou.com/
```



##### **1、新建application.yml文件**

​	1.1、在itmk-base-web模块resources文件下新建 application-test.yml文件

```js
#端口号配置
server:
  port: 8089
#数据库连接配置
spring:
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/school_team?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8
    username: root
    password: 123456

#mybatis plus配置
mybatis-plus:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
  global-config:
    db-config:
      #配置mybatis plus 在更新时只更新非空和非NULL的字段
      update-strategy: not_empty

logging:
  pattern:
    console: '%d{yyyy-MM-dd} [%thread] %-5level %logger- %msg%n'
```

1.2、在itmk-base-web模块resources文件下新建 application.yml文件

```js
spring:
  profiles:
    active: test
```

##### 2、配置MyBatis Plus配置文件

```js
package com.itmk.config.mybatis;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan("com.itmk.*.*.mapper")
public class MyBatisPlusConfig {
    // 最新版
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));
        return interceptor;
    }
}
```



##### 3、封装返回值

在itmk-base-common下新建 com.itmk.utils包

```js
package com.itmk.utils;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResultVo<T> {
    private String msg;
    private int code;
    private T data;
}
```



##### 4、返回状态码定义

在itmk-base-common模块新建com.itmk.status包，然后新建 StatusCode类，如下所示

```js
package com.itmk.status;

/**
 * 返回状态码
 */
public class StatusCode {
    //返回成功
    public static final int SUCCESS_CODE = 200;
    //错误状态码
    public static final int ERROR_CODE = 500;
    //无权限
    public static final int NO_LOGIN = 600;
    public static final int NO_AUTH = 700;
}
```



##### 5、返回工具类的封装

在itmk-base-common模块下的com.itmk.utils包中新建ResultUtils类

```js
package com.itmk.utils;

import com.itmk.status.StatusCode;

/**
 * 数据返回工具类
 */
public class ResultUtils {
    /**
     * 无参数返回
     * @return
     */
    public static ResultVo succcess() {
        return Vo(null, StatusCode.SUCCESS_CODE, null);
    }
    public static ResultVo success(String msg){
        return Vo(msg,StatusCode.SUCCESS_CODE,null);
    }
    /**
     * 返回带参数
     * @param msg
     * @param data
     * @return
     */
    public static ResultVo success(String msg,Object data){
        return Vo(msg,StatusCode.SUCCESS_CODE,data);
    }
    public static ResultVo success(String msg,int code,Object data){
        return Vo(msg,code,data);
    }
    public static ResultVo Vo(String msg, int code, Object data) {
        return new ResultVo(msg, code, data);
    }

    /**
     * 错误返回
     * @return
     */
    public static ResultVo error(){
        return Vo(null,StatusCode.ERROR_CODE,null);
    }
    public static ResultVo error(String msg){
        return Vo(msg,StatusCode.ERROR_CODE,null);
    }
    public static ResultVo error(String msg,int code,Object data){
        return Vo(msg,code,data);
    }
    public static ResultVo error(String msg,int code){
        return Vo(msg,code,null);
    }
    public static ResultVo error(String msg,Object data){
        return Vo(msg, StatusCode.ERROR_CODE,data);
    }
}
```

##### 6、itmk-base-web模块的com.itmk下新建启动类

```js
package com.itmk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@SpringBootApplication
public class ShopApplication {
    public static void main(String[] args) {
        SpringApplication.run(ShopApplication.class,args);
    }
}

```















#### 第28讲 管理员表设计与接口开发

##### 1、sql脚本

```js
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '登录账户',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '登录密码',
  `nick_name` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '姓名',
  `sex` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT ' 0:男 1：女',
  `phone` varchar(18) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '电话',
  `status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '0:启用 1：停用',
  `is_admin` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0' COMMENT '0:普通 1：超级管理员',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

```

##### 2、新建实体类

```js
package com.itmk.web.sys_user.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
@TableName("sys_user")
public class SysUser {
    @TableId(type = IdType.AUTO)
    private Long userId;
    private String username;
    private String password;
    private String nickName;
    private String sex;
    private String phone;
    private String status;
    private String isAdmin;
}

```

```js
package com.itmk.web.sys_user.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class PageParm {
    private Long currentPage;
    private Long pageSize;
    private String nickName;
}

```

##### 3、新建mapper接口

```js
package com.itmk.web.sys_user.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itmk.web.sys_user.entity.SysUser;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface SysUserMapper extends BaseMapper<SysUser> {
}

```

映射文件SysUserMapper.xml

```js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.sys_user.mapper.SysUserMapper">

</mapper>
```

##### 4、新建service层

```js
package com.itmk.web.sys_user.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itmk.web.sys_user.entity.SysUser;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface SysUserService extends IService<SysUser> {
}

```

实现类

```js
package com.itmk.web.sys_user.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.sys_user.entity.SysUser;
import com.itmk.web.sys_user.mapper.SysUserMapper;
import com.itmk.web.sys_user.service.SysUserService;
import org.springframework.stereotype.Service;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Service
public class SysUserServiceImpl extends ServiceImpl<SysUserMapper, SysUser> implements SysUserService {
}

```

##### 5、新建控制器

```js
package com.itmk.web.sys_user.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.sys_user.entity.PageParm;
import com.itmk.web.sys_user.entity.SysUser;
import com.itmk.web.sys_user.service.SysUserService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @Author java实战基地
 * @Version 2383404558
 *  /api/sysUser/getList
 */
@RestController
@RequestMapping("/api/sysUser")
public class SysUserController {
    @Autowired
    private SysUserService sysUserService;

    //新增
    @PostMapping
    public ResultVo add(@RequestBody SysUser sysUser){
        if(sysUserService.save(sysUser)){
            return ResultUtils.success("新增成功!");
        }
        return ResultUtils.error("新增失败!");
    }

    //编辑
    @PutMapping
    public ResultVo edit(@RequestBody SysUser sysUser){
        if(sysUserService.updateById(sysUser)){
            return ResultUtils.success("编辑成功!");
        }
        return ResultUtils.error("编辑失败!");
    }

     //删除
    @DeleteMapping("/{userId}")
    public ResultVo delete(@PathVariable("userId") Long userId){
        if(sysUserService.removeById(userId)){
            return ResultUtils.success("删除成功!");
        }
        return ResultUtils.error("删除失败!");
    }

    //列表
    @GetMapping("/getList")
    public ResultVo getList(PageParm parm){
        //构造查询条件
        QueryWrapper<SysUser> query = new QueryWrapper<>();
        query.lambda().like(StringUtils.isNotEmpty(parm.getNickName()),SysUser::getNickName,parm.getNickName());
        //构造分页对象
        IPage<SysUser> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        //查询
        IPage<SysUser> list = sysUserService.page(page, query);
        return ResultUtils.success("查询成功",list);
    }
}

```















#### 第29讲 新增管理员接口对接

##### 1、安装axios

```js
npm install axios@1.3.6
```

##### 2、http工具封装

```js
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { ElMessage } from 'element-plus';

//axios请求配置
const config = {
    // baseURL: 'http://localhost:8089',
    baseURL: '/api',
    timeout: 10000
}
//定义返回值类型
export interface Result<T = any> {
    code: number;
    msg: string;
    data: T;
}
class Http {
    //axios实例
    private instance: AxiosInstance;
    //构造函数里面初始化
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        //定义拦截器
        this.interceptors()
    }
    //拦截器
    private interceptors() {
        //axios发送请求之前的处理
        this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            //在请求头部携带token
            // let token = sessionStorage.getItem('token');
            let token = '';
            if (token) {
                config.headers!['token'] = token
                //把token放到headers里面
                // (config.headers as AxiosRequestHeaders).token = token
            }
            console.log(config)
            return config;
        }, (error: any) => {
            error.data = {}
            error.data.msg = '服务器异常，请联系管理员!'
            return error;
        })
        //axios请求返回之后的处理
        //请求返回之后的处理
        this.instance.interceptors.response.use((res: AxiosResponse) => {
            // console.log(res.data)
            if (res.data.code != 200) {
                ElMessage.error(res.data.msg || '服务器出错!')
                return Promise.reject(res.data.msg || '服务器出错')
            } else {
                return res.data
            }
        }, (error) => {
            console.log('进入错误')
            error.data = {};
            if (error && error.response) {
                switch (error.response.status) {
                    case 400:
                        error.data.msg = '错误请求';
                        ElMessage.error(error.data.msg)
                        break
                    case 401:
                        error.data.msg = '未授权，请重新登录';
                        ElMessage.error(error.data.msg)
                        break
                    case 403:
                        error.data.msg = '拒绝访问';
                        ElMessage.error(error.data.msg)
                        break
                    case 404:
                        error.data.msg = '请求错误,未找到该资源';
                        ElMessage.error(error.data.msg)
                        break
                    case 405:
                        error.data.msg = '请求方法未允许';
                        ElMessage.error(error.data.msg)
                        break
                    case 408:
                        error.data.msg = '请求超时';
                        ElMessage.error(error.data.msg)
                        break
                    case 500:
                        error.data.msg = '服务器端出错';
                        ElMessage.error(error.data.msg)
                        break
                    case 501:
                        error.data.msg = '网络未实现';
                        ElMessage.error(error.data.msg)
                        break
                    case 502:
                        error.data.msg = '网络错误';
                        ElMessage.error(error.data.msg)
                        break
                    case 503:
                        error.data.msg = '服务不可用';
                        ElMessage.error(error.data.msg)
                        break
                    case 504:
                        error.data.msg = '网络超时';
                        ElMessage.error(error.data.msg)
                        break
                    case 505:
                        error.data.msg = 'http版本不支持该请求';
                        ElMessage.error(error.data.msg)
                        break
                    default:
                        error.data.msg = `连接错误${error.response.status}`;
                        ElMessage.error(error.data.msg)
                }
            } else {
                error.data.msg = "连接到服务器失败";
                ElMessage.error(error.data.msg)
            }
            return Promise.reject(error)
        })
    }

    /* GET 方法 */
    get<T = Result>(url: string, params?: object): Promise<T> {
        return this.instance.get(url, { params })
    }
    /* POST 方法 */
    post<T = Result>(url: string, data?: object): Promise<T> {
        return this.instance.post(url, data)
    }
    /* PUT 方法 */
    put<T = Result>(url: string, data?: object): Promise<T> {
        return this.instance.put(url, data)
    }
    /* DELETE 方法 */
    delete<T = Result>(url: string): Promise<T> {
        return this.instance.delete(url)
    }
}
export default new Http(config)
```

##### 2、api/user新建index.ts

```js
import http from "@/http";
import { User } from "./UserModel";
//新增
export const addUserApi = (parm:User)=>{
    return http.post("/api/user",parm)
}
```

api/user下新建UserModel.ts

```js
//定义用户的数据类型:interface 和 type 
export type User = {
    userId?:string,
    username:string,
    password:string,
    nickName:string,
    phone:string,
    sex:string,
    status:string
}
```



##### 3、AdminUser.vue组件

```js
<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input
          v-model="searchParm.nickName"
          placeholder="请输入姓名"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search">搜索</el-button>
        <el-button icon="Close" type="danger" plain>重置</el-button>
        <el-button type="primary" icon="Plus" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 新增、编辑弹框 -->
    <SysDialog
      :title="dialog.title"
      :width="dialog.width"
      :height="dialog.height"
      :visible="dialog.visible"
      @on-close="onClose"
      @on-confirm="commit"
    >
      <template v-slot:content>
        <el-form
          :model="addModel"
          ref="addRef"
          :rules="rules"
          label-width="80px"
          :inline="false"
          size="default"
        >
          <el-form-item prop="nickName" label="姓名:">
            <el-input v-model="addModel.nickName"></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别:">
            <el-radio-group v-model="addModel.sex">
              <el-radio :label="'0'">男</el-radio>
              <el-radio :label="'1'">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="phone" label="电话:">
            <el-input v-model="addModel.phone"></el-input>
          </el-form-item>
          <el-form-item prop="username" label="账号:">
            <el-input v-model="addModel.username"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码:">
            <el-input v-model="addModel.password"></el-input>
          </el-form-item>
          <el-form-item prop="status" label="状态:">
            <el-radio-group v-model="addModel.status">
              <el-radio :label="'0'">启用</el-radio>
              <el-radio :label="'1'">停用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
  </el-main>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import { ElMessage, type FormInstance } from "element-plus";
import { addAdminUserApi } from "@/api/user/index";
//表单ref属性
const addRef = ref<FormInstance>();
//获取弹框属性
const { dialog, onClose } = useDialog();
//搜索绑定的对象
const searchParm = reactive({
  nickName: "",
});
//新增按钮
const addBtn = () => {
  dialog.height = 300;
  dialog.visible = true;
};
//新增表单绑定的对象
const addModel = reactive({
  userId: "",
  username: "",
  password: "",
  nickName: "",
  phone: "",
  sex: "",
  status: "",
});
//表单验证规则
const rules = {
  nickName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
  phone: [{ required: true, message: "请输入电话", trigger: "blur" }],
  username: [{ required: true, message: "请输入账户", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  status: [{ required: true, message: "请选择状态", trigger: "blur" }],
};
//新增、编辑提交
const commit = () => {
  //表单验证
  addRef.value?.validate(async (valid) => {
    if (valid) {
      console.log(addModel);
      //提交数据
      const res = await addAdminUserApi(addModel);
      if (res && res.code == 200) {
        //信息提示
        ElMessage.success(res.msg)
        //关闭弹框
        dialog.visible = false;
      }
    }
  });
};
</script>

<style scoped></style>

```

##### 4、跨域报错解决

```js
Access to XMLHttpRequest at 'http://localhost:8089/api/sysUser' from origin 'http://localhost:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
index.ts:56 进入错误
```

###### 4.1、前端配置解决

在vite.config.ts里面做如下配置

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', //解决控制台 ：Network: use --host to expose
    port: 8080, //配置端口号
    hmr: true, //开启热更新
    open: true, //启动在浏览器打开
    proxy: {
      '/api': {
        target: 'http://localhost:8089/',	//接口地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  }
})

```

###### 4.2、后端配置跨域

```js
package com.itmk.config.mvc;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Configuration
public class MvcConfiguration implements WebMvcConfigurer {
   
    /**
     * 跨域配置
     * @param registry
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns("*")
                .allowedMethods("*")
                .allowedHeaders("*")
                .maxAge(3600)
                .allowCredentials(true);
    }
}

```

















#### 第30讲 管理员列表页面制作与接口对接

##### 1、api/user的UserModel添加ListParm

```js
//定义用户的数据类型:interface 和 type 
export type User = {
    userId?:string,
    username:string,
    password:string,
    nickName:string,
    phone:string,
    sex:string,
    status:string
}
//定义列表查询的参数
export type ListParm = {
    currentPage:number,
    pageSize:number,
    nickName:string,
    total?:number
}
```

##### 2、api/user/index.ts添加getListApi()方法

```js
import http from "@/http";
import { ListParm, User } from "./UserModel";
//新增
export const addAdminUserApi = (parm:User)=>{
    return http.post("/api/sysUser",parm)
} 
//列表
export const getListApi = (parm:ListParm)=>{
    return http.get("/api/sysUser/getList",parm)
}
```

##### 3、AdminUser.vue组件

```js
<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input
          v-model="searchParm.nickName"
          placeholder="请输入姓名"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search" @click="searchBtn">搜索</el-button>
        <el-button icon="Close" type="danger" plain @click="resetBtn">重置</el-button>
        <el-button type="primary" icon="Plus" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :height="tableHeight" :data="tableList" border stripe>
      <el-table-column prop="nickName" label="姓名"></el-table-column>
      <el-table-column prop="sex" label="性别">
        <template  #default="scope">
            <el-tag v-if="scope.row.sex == '1'" type="danger"   effect="dark">女</el-tag>
            <el-tag v-if="scope.row.sex == '0'"   effect="dark">男</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="username" label="账户"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template  #default="scope">
            <el-tag v-if="scope.row.status == '1'" type="danger"   effect="dark">停用</el-tag>
            <el-tag v-if="scope.row.status == '0'"   effect="dark">启用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="220" align="center">
        <template  #default="scope">
            <el-button type="primary" icon="Edit" size="default" @click="editBtn(scope.row)">编辑</el-button>
            <el-button type="danger" icon="Delete" size="default" @click="deleteBtn(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="searchParm.currentPage"
      :page-sizes="[10,20, 40, 80, 100]"
      :page-size="searchParm.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="searchParm.total" background>
    </el-pagination>
    
    <!-- 新增、编辑弹框 -->
    <SysDialog
      :title="dialog.title"
      :width="dialog.width"
      :height="dialog.height"
      :visible="dialog.visible"
      @on-close="onClose"
      @on-confirm="commit"
    >
      <template v-slot:content>
        <el-form
          :model="addModel"
          ref="addRef"
          :rules="rules"
          label-width="80px"
          :inline="false"
          size="default"
        >
          <el-form-item prop="nickName" label="姓名:">
            <el-input v-model="addModel.nickName"></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别:">
            <el-radio-group v-model="addModel.sex">
              <el-radio :label="'0'">男</el-radio>
              <el-radio :label="'1'">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="phone" label="电话:">
            <el-input v-model="addModel.phone"></el-input>
          </el-form-item>
          <el-form-item prop="username" label="账号:">
            <el-input v-model="addModel.username"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码:">
            <el-input v-model="addModel.password"></el-input>
          </el-form-item>
          <el-form-item prop="status" label="状态:">
            <el-radio-group v-model="addModel.status">
              <el-radio :label="'0'">启用</el-radio>
              <el-radio :label="'1'">停用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
  </el-main>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import { ElMessage, type FormInstance } from "element-plus";
import { addAdminUserApi ,getListApi} from "@/api/user/index";
import {User} from '@/api/user/UserModel'
//表单ref属性
const addRef = ref<FormInstance>();
//获取弹框属性
const { dialog, onClose } = useDialog();
//搜索绑定的对象
const searchParm = reactive({
  nickName: "",
  pageSize:10,
  currentPage:1,
  total:0
});
//表格高度
const tableHeight = ref(0)
//表格数据
const tableList = ref([])
//新增按钮
const addBtn = () => {
  dialog.height = 300;
  dialog.visible = true;
};
//新增表单绑定的对象
const addModel = reactive({
  userId: "",
  username: "",
  password: "",
  nickName: "",
  phone: "",
  sex: "",
  status: "",
});
//表单验证规则
const rules = {
  nickName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
  phone: [{ required: true, message: "请输入电话", trigger: "blur" }],
  username: [{ required: true, message: "请输入账户", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  status: [{ required: true, message: "请选择状态", trigger: "blur" }],
};
//新增、编辑提交
const commit = () => {
  //表单验证
  addRef.value?.validate(async (valid) => {
    if (valid) {
      console.log(addModel);
      //提交数据
      const res = await addAdminUserApi(addModel);
      if (res && res.code == 200) {
        //信息提示
        ElMessage.success(res.msg)
        //关闭弹框
        dialog.visible = false;
      }
    }
  });
};
//列表查询
const getList = async()=>{
  let res = await getListApi(searchParm)
  if(res && res.code == 200){
    console.log(res)
    tableList.value = res.data.records;
    searchParm.total = res.data.total;
  }
}
//编辑
const editBtn = (row:User)=>{
  console.log(row)
}
//删除
const deleteBtn = (row:User)=>{
  console.log(row)
}
//搜索
const searchBtn = ()=>{
  getList()
}
//重置
const resetBtn = ()=>{
  searchParm.nickName = ''
  getList()
}
//页容量改变时触发
const sizeChange = (size:number)=>{
  console.log(size)
}
//页数改变时触发
const currentChange = (page:number)=>{
  console.log(page)
}
onMounted(()=>{
  //计算表格高度
  tableHeight.value = window.innerHeight - 200
  getList()
})
</script>

<style scoped></style>

```





















#### 第31讲 管理员编辑、删除接口对接

##### 1、src目录下新建utils目录，然后新建myconfirm.ts

```js
/**
 * 信息确定提示框
 */
 import { ElMessageBox } from 'element-plus'
 export default function myconfirm(text: string) {
     return new Promise((resolve, reject) => {
         ElMessageBox.confirm(text, '系统提示', {
             confirmButtonText: '确定',
             cancelButtonText: '取消',
             type: 'warning',
         }
         ).then(() => { //确定按钮
             resolve(true)
         }).catch(() => { //取消
             reject(false)
         })
     }).catch(() => {
         return false;
     })
 }
```

##### 2、main.ts挂载

```js
import myconfirm from './utils/myconfirm'

//全局挂载
app.config.globalProperties.$myconfirm = myconfirm;
```

##### 3、在hooks下新建useInstance工具，获取全局挂载属性

```js
import { getCurrentInstance,ComponentInternalInstance  } from "vue";

export default function useInstance(){
    const {appContext,proxy} =  getCurrentInstance() as ComponentInternalInstance 
    const global = appContext.config.globalProperties;
    return{
        proxy,
        global
    }
}
```



##### 4、type下新建BaseEnum.ts

```js
export enum EditType{
    ADD = '0', //代表新增
    EDIT = '1' //代表编辑
}

//定义弹框的标题
export enum Title {
    ADD = '新增',
    EDIT = '编辑'
}

```

##### 5、api/user/index.ts

```js
import http from "@/http";
import { ListParm, User } from "./UserModel";
//新增
export const addAdminUserApi = (parm:User)=>{
    return http.post("/api/sysUser",parm)
} 
//列表
export const getListApi = (parm:ListParm)=>{
    return http.get("/api/sysUser/getList",parm)
}
//编辑
export const editApi = (parm:User)=>{
    return http.put("/api/sysUser",parm)
}
//删除
export const deleteApi = (userId:string)=>{
    return http.delete(`/api/sysUser/${userId}`)
}
```

##### 6、AdminUser.vue页面

```js
<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input
          v-model="searchParm.nickName"
          placeholder="请输入姓名"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search" @click="searchBtn">搜索</el-button>
        <el-button icon="Close" type="danger" plain @click="resetBtn">重置</el-button>
        <el-button type="primary" icon="Plus" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :height="tableHeight" :data="tableList" border stripe>
      <el-table-column prop="nickName" label="姓名"></el-table-column>
      <el-table-column prop="sex" label="性别">
        <template  #default="scope">
            <el-tag v-if="scope.row.sex == '1'" type="danger"   effect="dark">女</el-tag>
            <el-tag v-if="scope.row.sex == '0'"   effect="dark">男</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="username" label="账户"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template  #default="scope">
            <el-tag v-if="scope.row.status == '1'" type="danger"   effect="dark">停用</el-tag>
            <el-tag v-if="scope.row.status == '0'"   effect="dark">启用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="220" align="center">
        <template  #default="scope">
            <el-button type="primary" icon="Edit" size="default" @click="editBtn(scope.row)">编辑</el-button>
            <el-button type="danger" icon="Delete" size="default" @click="deleteBtn(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="searchParm.currentPage"
      :page-sizes="[10,20, 40, 80, 100]"
      :page-size="searchParm.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="searchParm.total" background>
    </el-pagination>
    
    <!-- 新增、编辑弹框 -->
    <SysDialog
      :title="dialog.title"
      :width="dialog.width"
      :height="dialog.height"
      :visible="dialog.visible"
      @on-close="onClose"
      @on-confirm="commit"
    >
      <template v-slot:content>
        <el-form
          :model="addModel"
          ref="addRef"
          :rules="rules"
          label-width="80px"
          :inline="false"
          size="default"
        >
          <el-form-item prop="nickName" label="姓名:">
            <el-input v-model="addModel.nickName"></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别:">
            <el-radio-group v-model="addModel.sex">
              <el-radio :label="'0'">男</el-radio>
              <el-radio :label="'1'">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="phone" label="电话:">
            <el-input v-model="addModel.phone"></el-input>
          </el-form-item>
          <el-form-item prop="username" label="账号:">
            <el-input v-model="addModel.username"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码:">
            <el-input v-model="addModel.password"></el-input>
          </el-form-item>
          <el-form-item prop="status" label="状态:">
            <el-radio-group v-model="addModel.status">
              <el-radio :label="'0'">启用</el-radio>
              <el-radio :label="'1'">停用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
  </el-main>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import { ElMessage, type FormInstance } from "element-plus";
import { addAdminUserApi ,getListApi,editApi,deleteApi} from "@/api/user/index";
import {User} from '@/api/user/UserModel'
import {Title} from '@/type/BaseEnum'
import useInstance from '@/hooks/useInstance'
//获取全局属性
const {global} = useInstance()
//表单ref属性
const addRef = ref<FormInstance>();
//获取弹框属性
const { dialog, onClose } = useDialog();
//搜索绑定的对象
const searchParm = reactive({
  nickName: "",
  pageSize:10,
  currentPage:1,
  total:0
});
//表格高度
const tableHeight = ref(0)
//表格数据
const tableList = ref([])
const tags = ref('')
//新增按钮
const addBtn = () => {
  tags.value = '0'
  //设置弹框标题
  dialog.title = Title.EDIT
  dialog.height = 300;
  dialog.visible = true;
  //清空表单
  addRef.value?.resetFields()
};
//新增表单绑定的对象
const addModel = reactive({
  userId: "",
  username: "",
  password: "",
  nickName: "",
  phone: "",
  sex: "",
  status: "",
});
//表单验证规则
const rules = {
  nickName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
  phone: [{ required: true, message: "请输入电话", trigger: "blur" }],
  username: [{ required: true, message: "请输入账户", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  status: [{ required: true, message: "请选择状态", trigger: "blur" }],
};

//列表查询
const getList = async()=>{
  let res = await getListApi(searchParm)
  if(res && res.code == 200){
    console.log(res)
    tableList.value = res.data.records;
    searchParm.total = res.data.total;
  }
}
//编辑
const editBtn = (row:User)=>{
  tags.value = '1'
  console.log(row)
  //设置弹框标题
  dialog.title = Title.EDIT
  dialog.height = 300;
  dialog.visible = true;
  //设置数据回显
  nextTick(()=>{
    Object.assign(addModel,row)
  })
}
//新增、编辑提交
const commit = () => {
  console.log(tags.value)
  //表单验证
  addRef.value?.validate(async (valid) => {
    if (valid) {
      console.log(addModel);
      //提交数据
      let res = null;
      if(tags.value == '0'){
        res = await addAdminUserApi(addModel);
      }else{
        res = await editApi(addModel);
      }
      if (res && res.code == 200) {
        //信息提示
        ElMessage.success(res.msg)
        //刷新表格
        getList()
        //关闭弹框
        dialog.visible = false;
      }
    }
  });
};
//删除
const deleteBtn = async(row:User)=>{
  console.log(row)
  //信息提示
  console.log(global)
  const confirm = await global.$myconfirm('确定删除该数据吗?')
  if(confirm){
    let res = await deleteApi(row.userId)
    if(res && res.code == 200){
      ElMessage.success(res.msg)
      getList()
    }
  }
}
//搜索
const searchBtn = ()=>{
  getList()
}
//重置
const resetBtn = ()=>{
  searchParm.nickName = ''
  getList()
}
//页容量改变时触发
const sizeChange = (size:number)=>{
  console.log(size)
}
//页数改变时触发
const currentChange = (page:number)=>{
  console.log(page)
}
onMounted(()=>{
  //计算表格高度
  tableHeight.value = window.innerHeight - 200
  getList()
})
</script>

<style scoped></style>

```

















#### 第32讲 左侧菜单改为一级菜单

##### 1、Menu.vue组件修改为如下MenuOne.vue组件

```js
<!-- 一级菜单实现 -->
<template>
    <MenuLogo></MenuLogo>
    <el-menu
      :collapse="collapse"
      router
      background-color="#304156"
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
    >
      <el-menu-item index="/dashboard">
        <el-icon><Menu /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="/adminUser">
        <el-icon><Menu /></el-icon>
        <template #title>管理员管理</template>
      </el-menu-item>
      <el-menu-item index="/userList">
        <el-icon><Menu /></el-icon>
        <template #title>用户管理</template>
      </el-menu-item>
      <el-menu-item index="/menuList">
        <el-icon><Menu /></el-icon>
        <template #title>菜单管理</template>
      </el-menu-item>
      <el-menu-item index="/goodsType">
        <el-icon><Menu /></el-icon>
        <template #title>商品分类</template>
      </el-menu-item>
      <el-menu-item index="/unusedList">
        <el-icon><Memo /></el-icon>
        <template #title>商品管理</template>
      </el-menu-item>
      <el-menu-item index="/unusedOrder">
        <el-icon><Monitor /></el-icon>
        <template #title>订单管理</template>
      </el-menu-item>
      <el-menu-item index="/bannerList">
        <el-icon><Calendar /></el-icon>
        <template #title>广告管理</template>
      </el-menu-item>
    </el-menu>
  </template>
  
  <script setup lang="ts">
  import { collapseStore } from "@/store/collapse/index";
  import { useRoute } from "vue-router";
  import MenuLogo from "./MenuLogo.vue";
  import { Menu, Memo, Monitor, Calendar } from "@element-plus/icons-vue";
  import { computed } from "vue";
  //获取store
  const store = collapseStore()
  //当前路由
  const route = useRoute();
  //获取激活的选项
  const activeIndex = computed(() => {
    const { path } = route;
    return path;
  });
  //获取菜单状态
  const collapse = computed(()=>{
    return store.getCollapse
  })
  </script>
  
  <style scoped lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    min-height: 400px;
  }
  .el-menu {
    border-right: none;
  }
  .el-menu .el-menu-item {
    color: #bfcbd9;
    font-size: 15px;
    font-weight: bold;
  }
  .el-menu-item.is-active {
    color: #409eff !important;
    background-color: #1f2d3d !important;
  }
  /* 鼠标移动菜单的颜色 */
  
  :deep(.el-menu-item:hover) {
    background-color: #001528 !important;
  }
  </style>
  
```

##### 2、router/index.ts修改为如下

```js
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/layout/dashboard.vue'),
        name: 'dashboard',
        meta: {
          title: '首页',
          icon: '#icondashboard'
        }
      },
      {
        path: "/adminUser",
        component: () => import('@/views/system/AdminUser.vue'),
        name: "adminUser",
        meta: {
          title: "管理员管理",
          icon: "UserFilled",
          roles: ["sys:adminUser"],
        }
      },
      {
        path: "/userList",
        component: () => import('@/views/system/UserList.vue'),
        name: "userList",
        meta: {
          title: "用户管理",
          icon: "Wallet",
          roles: ["sys:userList"],
        }
      },
      {
        path: "/menuList",
        component: () => import('@/views/menu/index.vue'),
        name: "menuList",
        meta: {
          title: "菜单管理",
          icon: "Menu",
          roles: ["sys:menu"],
        }
      },
      {
        path: "/goodsType",
        component: () => import('@/views/goods/GoodsType.vue'),
        name: "goodsType",
        meta: {
          title: "商品分类",
          icon: "UserFilled",
          roles: ["sys:goodsType"],
        }
      },
      {
        path: "/unusedList",
        component: () => import('@/views/goods/UnusedList.vue'),
        name: "unusedList",
        meta: {
          title: "商品管理",
          icon: "Wallet",
          roles: ["sys:unusedList"],
        }
      },
      {
        path: "/unusedOrder",
        component: () => import('@/views/order/UnusedOrder.vue'),
        name: "unusedOrder",
        meta: {
          title: "闲置订单",
          icon: "UserFilled",
          roles: ["sys:unusedOrder"],
        }
      },
      {
        path: "/bannerList",
        component: () => import('@/views/banner/Index.vue'),
        name: "bannerList",
        meta: {
          title: "广告列表",
          icon: "UserFilled",
          roles: ["sys:bannerList"],
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```













#### 第33讲 商品分类表设计与接口开发

##### 1、sql文件

```js
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `goods_category`;
CREATE TABLE `goods_category`  (
  `category_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '分类id',
  `category_name` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '分类名称',
  `order_num` int(11) NULL DEFAULT NULL COMMENT '序号',
  PRIMARY KEY (`category_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

```

##### 2、新建实体类

```js
package com.itmk.web.goods_category.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
@TableName("goods_category")
public class GoodsCategory {
    @TableId(type = IdType.AUTO)
    private Long categoryId;
    private String categoryName;
    private Integer orderNum;
}

```

```js
package com.itmk.web.category.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class ListParm {
    private Integer currentPage; //当前页
    private Integer pageSize;//每页查询的条数
    private String categoryName;
}

```

```js
package com.itmk.web.category.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class SelectType {
    private Long value;
    private String label;
}
```

##### 3、新建mapper层

```js
package com.itmk.web.goods_category.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itmk.web.goods_category.entity.GoodsCategory;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsCategoryMapper extends BaseMapper<GoodsCategory> {
}

```

SysCategoryMapper.xml

```js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.goods_category.mapper.GoodsCategoryMapper">

</mapper>
```

##### 4、新建service层

```js
package com.itmk.web.goods_category.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itmk.web.goods_category.entity.GoodsCategory;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsCategoryService extends IService<GoodsCategory> {
}

```

实现类

```js
package com.itmk.web.goods_category.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.goods_category.entity.GoodsCategory;
import com.itmk.web.goods_category.mapper.GoodsCategoryMapper;
import com.itmk.web.goods_category.service.GoodsCategoryService;
import org.springframework.stereotype.Service;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Service
public class GoodsCategoryServiceImpl extends ServiceImpl<GoodsCategoryMapper, GoodsCategory> implements GoodsCategoryService {
}

```

##### 5、控制器

```js
package com.itmk.web.goods_category.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.goods_category.entity.GoodsCategory;
import com.itmk.web.goods_category.entity.ListParm;
import com.itmk.web.goods_category.entity.SelectType;
import com.itmk.web.goods_category.service.GoodsCategoryService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RestController
@RequestMapping("/api/category")
public class GoodsCategoryController {
    @Autowired
    private GoodsCategoryService goodsCategoryService;

    //新增
    @PostMapping
    public ResultVo add(@RequestBody GoodsCategory goodsCategory) {
        if (goodsCategoryService.save(goodsCategory)) {
            return ResultUtils.success("新增成功!");
        }
        return ResultUtils.error("新增失败!");
    }

    //编辑
    @PutMapping
    public ResultVo edit(@RequestBody GoodsCategory goodsCategory) {
        if (goodsCategoryService.updateById(goodsCategory)) {
            return ResultUtils.success("编辑成功!");
        }
        return ResultUtils.error("编辑失败!");
    }

    //删除
    @DeleteMapping("/{categoryId}")
    public ResultVo delete(@PathVariable("categoryId") Long categoryId) {
        if (goodsCategoryService.removeById(categoryId)) {
            return ResultUtils.success("删除成功!");
        }
        return ResultUtils.error("删除失败!");
    }

    //列表
    @GetMapping("/list")
    public ResultVo list(ListParm parm) {
        //构造分页对象
        IPage<GoodsCategory> page = new Page<>(parm.getCurrentPage(), parm.getPageSize());
        //构造查询条件
        QueryWrapper<GoodsCategory> query = new QueryWrapper<>();
        query.lambda().like(StringUtils.isNotEmpty(parm.getCategoryName()), GoodsCategory::getCategoryName, parm.getCategoryName())
                .orderByDesc(GoodsCategory::getOrderNum);
        //查询数据
        IPage<GoodsCategory> list = goodsCategoryService.page(page, query);
        return ResultUtils.success("查询成功", list);

    }

    //小程序分类
    @GetMapping("/getSelectList")
    public ResultVo getSelectList() {
        //查询分类列表
        QueryWrapper<GoodsCategory> query = new QueryWrapper<>();
        query.lambda().orderByAsc(GoodsCategory::getOrderNum);
        List<GoodsCategory> list = goodsCategoryService.list(query);
        //存储小程序需要的类型
        List<SelectType> selectList = new ArrayList<>();
        //构造小程序需要的类型
        Optional.ofNullable(list).orElse(new ArrayList<>())
                .stream()
                .forEach(item -> {
                    SelectType type = new SelectType();
                    type.setLabel(item.getCategoryName());
                    type.setValue(item.getCategoryId());
                    selectList.add(type);
                });
        return ResultUtils.success("查询成功", selectList);
    }

}

```











#### 第34讲 新增分类页面制作与接口对接

##### 1、api下新建category目录，并建CategoryModel.ts

```js
//定义分类数据类型
export  type Category = {
    categoryId:string,
    categoryName:string,
    orderNum:string
}
//列表查询数据类型
export type CategoryListParm = {
    currentPage:number,
    pageSize:number,
    categoryName:string,
    total?:number
}
```

##### 2、api下新建category目录，并建index.ts

```js
import http from "@/http";
import { Category,CategoryListParm } from "./CategoryModel";
//新增
export const addCategoryApi = (parm:Category)=>{
    return http.post("/api/category",parm)
} 
//列表
export const listApi = (parm:CategoryListParm)=>{
    return http.get("/api/category/list",parm)
} 
```

##### 3、GoodsType.vue页面

```js
<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input
          placeholder="请输入分类名称"
          v-model="searchParm.categoryName"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search">搜索</el-button>
        <el-button type="danger" plain icon="Close">重置</el-button>
        <el-button icon="Plus" type="primary" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 弹框组件 -->
    <SysDialog
      :title="dialog.title"
      :visible="dialog.visible"
      :width="dialog.width"
      :height="dialog.height"
      @onClose="onClose"
      @onConfirm="commit"
    >
      <template v-slot:content>
        <el-form
          :model="addModel"
          ref="addForm"
          :rules="rules"
          label-width="80px"
          size="default"
        >
          <el-form-item prop="categoryName" label="名称">
            <el-input v-model="addModel.categoryName"></el-input>
          </el-form-item>
          <el-form-item prop="orderNum" label="序号">
            <el-input type="number" v-model="addModel.orderNum"></el-input>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
  </el-main>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import useDialog from "@/hooks/useDialog";
import SysDialog from "@/components/SysDialog.vue";
import { ElMessage, FormInstance } from "element-plus";
import {addCategoryApi} from '@/api/category/index'
//表单ref属性
const addForm = ref<FormInstance>();
//弹框属性
const { dialog, onClose, onShow } = useDialog();
//搜索绑定的对象,列表查询的参数
const searchParm = reactive({
  currentPage: 1,
  pageSize: 10,
  categoryName: "",
});
//表单绑定对象
const addModel = reactive({
  categoryId: "",
  categoryName: "",
  orderNum: "",
});
//表单验证规则
const rules = reactive({
  categoryName: [
    { required: true, message: "请填写分类名称", trigger: "blur" },
  ],
  orderNum: [
    { required: true, message: "请填写分类序号", trigger: "blur" },
  ],
});
//新增按钮
const addBtn = () => {
  dialog.height = 150;
  //弹框显示
  onShow();
};
//表单提交
const commit = ()=>{
    //表单验证
    addForm.value?.validate(async(valid)=>{
        if(valid){
            console.log('验证通过')
            //提交
            let res = await addCategoryApi(addModel)
            if(res && res.code == 200){
                ElMessage.success(res.msg)
                onClose()
            }
        }
    })
}
</script>

<style scoped></style>

```















#### 第35讲 分类列表页面制作与对接

##### 1、api/category/index.ts

```js
import http from "@/http";
import { Category,CategoryListParm } from "./CategoryModel";
//新增
export const addCategoryApi = (parm:Category)=>{
    return http.post("/api/category",parm)
} 
//列表
export const listApi = (parm:CategoryListParm)=>{
    return http.get("/api/category/list",parm)
} 
```

##### 2、GoodsType.vue页面

```js
<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input
          placeholder="请输入分类名称"
          v-model="searchParm.categoryName"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search">搜索</el-button>
        <el-button type="danger" plain icon="Close">重置</el-button>
        <el-button icon="Plus" type="primary" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :height="tableHeight" :data="tableList" border stripe>
      <el-table-column prop="categoryName" label="名称"></el-table-column>
      <el-table-column prop="orderNum" label="序号"></el-table-column>
      <el-table-column  label="操作" align="center" width="200">
        <template #default>
          <el-button type="primary" icon="Plus" size="default" @click="">编辑</el-button>
          <el-button type="danger" icon="Delete" size="default" @click="">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="searchParm.currentPage"
      :page-sizes="[10,20, 40, 80, 100]"
      :page-size="searchParm.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="searchParm.total" background>
    </el-pagination>
    
    <!-- 弹框组件 -->
    <SysDialog
      :title="dialog.title"
      :visible="dialog.visible"
      :width="dialog.width"
      :height="dialog.height"
      @onClose="onClose"
      @onConfirm="commit"
    >
      <template v-slot:content>
        <el-form
          :model="addModel"
          ref="addForm"
          :rules="rules"
          label-width="80px"
          size="default"
        >
          <el-form-item prop="categoryName" label="名称">
            <el-input v-model="addModel.categoryName"></el-input>
          </el-form-item>
          <el-form-item prop="orderNum" label="序号">
            <el-input type="number" v-model="addModel.orderNum"></el-input>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
  </el-main>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue";
import useDialog from "@/hooks/useDialog";
import SysDialog from "@/components/SysDialog.vue";
import { ElMessage, FormInstance } from "element-plus";
import {addCategoryApi,listApi} from '@/api/category/index'
//表单ref属性
const addForm = ref<FormInstance>();
//弹框属性
const { dialog, onClose, onShow } = useDialog();
//搜索绑定的对象,列表查询的参数
const searchParm = reactive({
  currentPage: 1,
  pageSize: 10,
  categoryName: "",
  total:0
});
//表单绑定对象
const addModel = reactive({
  categoryId: "",
  categoryName: "",
  orderNum: "",
});
//表单验证规则
const rules = reactive({
  categoryName: [
    { required: true, message: "请填写分类名称", trigger: "blur" },
  ],
  orderNum: [
    { required: true, message: "请填写分类序号", trigger: "blur" },
  ],
});
//新增按钮
const addBtn = () => {
  dialog.height = 150;
  //弹框显示
  onShow();
};
//表单提交
const commit = ()=>{
    //表单验证
    addForm.value?.validate(async(valid)=>{
        if(valid){
            console.log('验证通过')
            //提交
            let res = await addCategoryApi(addModel)
            if(res && res.code == 200){
                ElMessage.success(res.msg)
                //刷新表格数据
                getList()
                onClose()
            }
        }
    })
}
//表格数据
const tableList = ref([])
//表格高度
const tableHeight = ref(0)
//获取表格数据
const getList = async()=>{
  let res = await listApi(searchParm)
  if(res && res.code == 200){
    console.log(res)
    //设置表格数据
    tableList.value = res.data.records;
    //设置分页总条数
    searchParm.total = res.data.total;
  }
}
//页容量改变时触发
const sizeChange = (size:number)=>{
  searchParm.pageSize = size;
  getList()
}
//页数改变时触发
const currentChange = (page:number)=>{
  searchParm.currentPage = page;
  getList()
}
//加载数据
onMounted(()=>{
  getList()
  //计算表格高度
  nextTick(()=>{
    tableHeight.value = window.innerHeight - 200
  })
})
</script>

<style scoped></style>

```













#### 第36讲 分类编辑、删除接口对接

##### 1、api/category/index.ts

```js
import http from "@/http";
import { Category,CategoryListParm } from "./CategoryModel";
//新增
export const addCategoryApi = (parm:Category)=>{
    return http.post("/api/category",parm)
} 
//列表
export const listApi = (parm:CategoryListParm)=>{
    return http.get("/api/category/list",parm)
} 
//编辑
export const editCategoryApi = (parm:Category)=>{
    return http.put("/api/category",parm)
} 
//删除
export const deleteCategoryApi = (parm:Category)=>{
    return http.delete(`/api/category/${parm.categoryId}`)
} 
```

##### 2、GoodsType.vue

```js
<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input
          placeholder="请输入分类名称"
          v-model="searchParm.categoryName"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search" @click="searchBtn">搜索</el-button>
        <el-button type="danger" @click="resetBtn" plain icon="Close">重置</el-button>
        <el-button icon="Plus" type="primary" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :height="tableHeight" :data="tableList" border stripe>
      <el-table-column prop="categoryName" label="名称"></el-table-column>
      <el-table-column prop="orderNum" label="序号"></el-table-column>
      <el-table-column  label="操作" align="center" width="200">
        <template #default="scope">
          <el-button type="primary" icon="Plus" size="default" @click="editBtn(scope.row)">编辑</el-button>
          <el-button type="danger" icon="Delete" size="default" @click="deleteBtn(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="searchParm.currentPage"
      :page-sizes="[10,20, 40, 80, 100]"
      :page-size="searchParm.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="searchParm.total" background>
    </el-pagination>
    
    <!-- 弹框组件 -->
    <SysDialog
      :title="dialog.title"
      :visible="dialog.visible"
      :width="dialog.width"
      :height="dialog.height"
      @onClose="onClose"
      @onConfirm="commit"
    >
      <template v-slot:content>
        <el-form
          :model="addModel"
          ref="addForm"
          :rules="rules"
          label-width="80px"
          size="default"
        >
          <el-form-item prop="categoryName" label="名称">
            <el-input v-model="addModel.categoryName"></el-input>
          </el-form-item>
          <el-form-item prop="orderNum" label="序号">
            <el-input type="number" v-model="addModel.orderNum"></el-input>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
  </el-main>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue";
import useDialog from "@/hooks/useDialog";
import SysDialog from "@/components/SysDialog.vue";
import { ElMessage, FormInstance } from "element-plus";
import {addCategoryApi,listApi,editCategoryApi,deleteCategoryApi} from '@/api/category/index'
import {Category} from '@/api/category/CategoryModel'
import { EditType } from "@/type/BaseEnum";
import useInstance from "@/hooks/useInstance";
//获取全局属性
const {global} = useInstance()
//表单ref属性
const addForm = ref<FormInstance>();
//弹框属性
const { dialog, onClose, onShow } = useDialog();
//搜索绑定的对象,列表查询的参数
const searchParm = reactive({
  currentPage: 1,
  pageSize: 10,
  categoryName: "",
  total:0
});
//表单绑定对象
const addModel = reactive({
  categoryId: "",
  categoryName: "",
  orderNum: "",
});
//表单验证规则
const rules = reactive({
  categoryName: [
    { required: true, message: "请填写分类名称", trigger: "blur" },
  ],
  orderNum: [
    { required: true, message: "请填写分类序号", trigger: "blur" },
  ],
});
//状态：0 新增 1编辑
const tags = ref('')
//新增按钮
const addBtn = () => {
  tags.value = '0'
  dialog.height = 150;
  //弹框显示
  onShow();
  //清空表单
  addForm.value?.resetFields()
};
//编辑
const editBtn = (row:Category)=>{
  tags.value = '1'
  dialog.height = 150;
  //弹框显示
  onShow();
  //清空表单
  addForm.value?.resetFields()
  //回显数据
  nextTick(()=>{
    Object.assign(addModel,row)
  })
}
//删除
const deleteBtn = async(row:Category)=>{
  //确定信息
  let confirm = await global.$myconfirm('确定删除该数据吗?')
  if(confirm){
    let res = await deleteCategoryApi(row)
    if(res && res.code == 200){
      ElMessage.success(res.msg)
      //刷新表格
      getList()
    }
  }
}
//搜索按钮
const searchBtn = ()=>{
  getList()
}
//重置按钮
const resetBtn = ()=>{
  searchParm.categoryName = ''
  getList()
}
//表单提交
const commit = ()=>{
    //表单验证
    addForm.value?.validate(async(valid)=>{
        if(valid){
            console.log('验证通过')
            //提交
            let res = null;
            if(tags.value == EditType.ADD){
              res = await addCategoryApi(addModel)
            }else {
              res = await editCategoryApi(addModel)
            }
            if(res && res.code == 200){
                ElMessage.success(res.msg)
                //刷新表格数据
                getList()
                onClose()
            }
        }
    })
}
//表格数据
const tableList = ref([])
//表格高度
const tableHeight = ref(0)
//获取表格数据
const getList = async()=>{
  let res = await listApi(searchParm)
  if(res && res.code == 200){
    console.log(res)
    //设置表格数据
    tableList.value = res.data.records;
    //设置分页总条数
    searchParm.total = res.data.total;
  }
}
//页容量改变时触发
const sizeChange = (size:number)=>{
  searchParm.pageSize = size;
  getList()
}
//页数改变时触发
const currentChange = (page:number)=>{
  searchParm.currentPage = page;
  getList()
}
//加载数据
onMounted(()=>{
  getList()
  //计算表格高度
  nextTick(()=>{
    tableHeight.value = window.innerHeight - 200
  })
})
</script>

<style scoped></style>

```

















#### 第37讲 用户表设计与登录注册接口开发

##### 1、sql文件

```js
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `wx_user`;
CREATE TABLE `wx_user`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `nick_name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '昵称',
  `picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '头像',
  `phone` varchar(18) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '电话',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '登录账户',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '登录密码',
  `status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0' COMMENT '0：启用 1：停用',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

```



##### 2、新建实体类

```js
package com.itmk.web.wx_user.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
@TableName("wx_user")
public class WxUser {
    @TableId(type = IdType.AUTO)
    private Long userId;
    private String nickName;
    private String name;
    private String picture;
    private String phone;
    private String username;
    private String password;
    //0：启用 1：停用
    private String status;
}

```

```js
package com.itmk.web.wx_user.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class LoginVo {
    private Long userId;
    private String phone;
    private String nickName;
    private String token;
}

```



##### 3、mapper层

```js
package com.itmk.web.wx_user.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itmk.web.wx_user.entity.WxUser;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface WxUserMapper extends BaseMapper<WxUser> {
}

```

WxUserMapper.xml

```js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.wx_user.mapper.WxUserMapper">

</mapper>
```



##### 4、service层

```js
package com.itmk.web.wx_user.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itmk.web.wx_user.entity.WxUser;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface WxUserService extends IService<WxUser> {
}

```

实现类

```js
package com.itmk.web.wx_user.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.wx_user.entity.WxUser;
import com.itmk.web.wx_user.mapper.WxUserMapper;
import com.itmk.web.wx_user.service.WxUserService;
import org.springframework.stereotype.Service;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Service
public class WxUserServiceImpl extends ServiceImpl<WxUserMapper, WxUser> implements WxUserService {
}

```



##### 5、controller层

```js
package com.itmk.web.wx_user.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.wx_user.entity.LoginVo;
import com.itmk.web.wx_user.entity.WxUser;
import com.itmk.web.wx_user.service.WxUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RestController
@RequestMapping("/api/wxUser")
public class WxUserController {
    @Autowired
    private WxUserService wxUserService;

    //注册
    @PostMapping("/register")
    public ResultVo register(@RequestBody WxUser user){
        //判断账户是否被占用
        QueryWrapper<WxUser> query = new QueryWrapper<>();
        query.lambda().eq(WxUser::getUsername,user.getUsername());
        //查询用户
        WxUser one = wxUserService.getOne(query);
        if(one != null){
            return ResultUtils.error("用户名被占用!");
        }
        //密码加密
        user.setPassword(DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
        //存到数据库
        if(wxUserService.saveOrUpdate(user)){
            return ResultUtils.success("注册成功！");
        }
        return ResultUtils.error("注册失败!");
    }

    //登录
    @PostMapping("/login")
    public ResultVo login(@RequestBody WxUser user){
        //构造查询条件
        QueryWrapper<WxUser> query = new QueryWrapper<>();
        query.lambda().eq(WxUser::getUsername,user.getUsername()).eq(WxUser::getPassword,
                DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
        WxUser wxUser = wxUserService.getOne(query);
        if(wxUser != null){
            if(wxUser.getStatus().equals("1")){
                return ResultUtils.error("您的账户被停用，请联系管理员!");
            }
            //返回成功的数据
            LoginVo vo = new LoginVo();
            vo.setNickName(wxUser.getNickName());
            vo.setPhone(wxUser.getPhone());
            vo.setUserId(wxUser.getUserId());
            return ResultUtils.success("登录成功",vo);
        }
        return ResultUtils.error("用户密码或密码错误!");
    }

}

```















#### 第38讲 小程序注册接口对接

##### 1、src下新建common目录，并建http.js

```js
// const baseUrl = 'http://localhost:8089'
const baseUrl = 'http://192.168.31.70:8089'  
const http = (options = {}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + options.url || '',
			method: options.type || 'GET',
			data: options.data || {},
			header: options.header || {},
		}).then((response) => {
			// console.log(response)
			if (response.data && response.data.code == 200) {
				resolve(response.data);
			} else {
				// console.log('')
				uni.showToast({
					icon: 'none',
					title: response.data.msg,
					duration: 2000
				});
			}

		}).catch(error => {
			reject(error)
		})
	});
}
const get = (url, data, options = {}) => {
	options.type = 'get';
	options.data = data;
	options.url = url;
	return http(options)
}
const post = (url, data, options = {}) => {
	options.type = 'post';
	options.data = data;
	options.url = url;
	return http(options)
}
const put = (url, data, options = {}) => {
	options.type = 'put';
	options.data = data;
	options.url = url;
	return http(options)
}
const upload = (parm) => {
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: baseUrl + parm.url,
			filePath: parm.filePath,
			name: 'file',
			formData: {
				openid: uni.getStorageSync('openid')
			},
			header: {
				// Authorization: uni.getStorageSync("token")
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (error) => {
				reject(error)
			}
		})
	})
}
export default {
	get,
	post,
	put,
	upload,
	baseUrl
}

```

##### 2、src下新建api，并建user.js

```js
import http from '../common/http.js'
//注册
export const registerApi = (parm)=>{
	return http.post('/api/wxUser/register',parm)
}
```

##### 3、register.vue组件

```js
<template>
	<view class="u-p-t-40 u-p-r-60 u-p-b-30 u-p-l-60 logincontainer">
		<button class="avatarwrap" open-type="chooseAvatar" bind:chooseavatar="onChooseAvatar">
			<image class="avatar" :src="avatarUrl"></image>
		</button>
		<!-- <u-avatar size="140" src="/static/user.jpg" mode="circle"></u-avatar> -->
		<u-form class="forms" :model="loginModel" ref="form1">
			<u-form-item prop="phone" left-icon="phone" left-icon-style="font-size:24px;color:#FF7670;">
				<u-input placeholder="请输入电话" v-model="loginModel.phone" />
			</u-form-item>
			<u-form-item prop="username" left-icon="account-fill" left-icon-style="font-size:24px;color:#FF7670;">
				<u-input placeholder="请输入账户" v-model="loginModel.username" />
			</u-form-item>
			<u-form-item prop="password" left-icon="lock" left-icon-style="font-size:24px;color:#FF7670;">
				<u-input type='password' placeholder="请输入密码" v-model="loginModel.password" />
			</u-form-item>
			<u-form-item prop="confirm" left-icon="lock" left-icon-style="font-size:24px;color:#FF7670;">
				<u-input type='password' placeholder="请输入确定密码" v-model="loginModel.confirm" />
			</u-form-item>
			<view @click="toLogin" class="passtext">
				已有账号，去登录
			</view>
			<u-button @click="commit" :custom-style="customStyle1">注册</u-button>
		</u-form>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	import {onReady} from '@dcloudio/uni-app'
	//表单ref属性
	const form1 = ref()
	import {
		registerApi
	} from '../../api/user.js'
	const loginModel = reactive({
		phone: '',
		username: '',
		password: '',
		confirm: ""
	})
	const customStyle1 = reactive({
		marginTop: '40px',
		background: '#FF7670',
		color: '#FFF',
		width: '100%'
	})
	const customStyle2 = reactive({
		marginTop: '35px',
		// background:'#FF7670',
		color: '#FFF',
		width: '100%'
	})
	const onChooseAvatar = (e) => {

	}
	const avatarUrl = ref('/static/user.jpg')
	//去登录
	const toLogin = () => {
		uni.navigateTo({
			url: '../login/login'
		})
	}
	//表单验证规则
	const rules = reactive({
		phone: [{
			required: true,
			message: '请输入电话',
			// 可以单个或者同时写两个触发验证方式 
			trigger: ['change', 'blur'],
		}],
		username: [{
			required: true,
			message: '请输入账号',
			// 可以单个或者同时写两个触发验证方式 
			trigger: ['change', 'blur'],
		}],
		password: [{
			required: true,
			message: '请输入密码',
			// 可以单个或者同时写两个触发验证方式 
			trigger: ['change', 'blur'],
		}],
		confirm: [{
			required: true,
			message: '请输入确定密码',
			// 可以单个或者同时写两个触发验证方式 
			trigger: ['change', 'blur'],
		}],
	})
	//注册提交
	const commit =  () => {
		form1.value.validate(async(valid)=>{
			if(valid){
				if(loginModel.confirm != loginModel.password){
					uni.showToast({
						title:'密码和确定密码不一致',
						icon: 'none',
						duration: 2000
					})
					return;
				}
				let res = await registerApi(loginModel)
				if (res && res.code == 200) {
					uni.navigateTo({
						url: '../login/login'
					})
				}
			}
		})
	}
	// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
	onReady(()=>{
		form1.value.setRules(rules);
	}) 
</script>

<style lang="scss">
	.logincontainer {
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;

		.forms {
			width: 100%;
		}
	}

	.passtext {
		display: flex;
		justify-content: flex-end;
		color: #FF7670;
		margin-top: 15px;
	}

	.avatarwrap {
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 70px;
		width: 70px;
		padding: 0px;

		.avatar {
			border-radius: 100%;
			height: 70px;
			width: 70px;
		}
	}
</style>

```













#### 第39讲 小程序登录接口对接

##### 1、api/user.js

```js
import http from '../common/http.js'
//注册
export const registerApi = (parm)=>{
	return http.post('/api/wxUser/register',parm)
}
//登录
export const loginApi = (parm)=>{
	return http.post('/api/wxUser/login',parm)
}
```

##### 2、login.vue页面

```js
<template>
	<view class="u-p-t-40 u-p-r-60 u-p-b-30 u-p-l-60 logincontainer">
		<u-avatar size="140" src="/static/user.jpg" mode="circle"></u-avatar>
		<u-form class="forms" :model="loginModel" ref="form1">
			<u-form-item left-icon="account-fill" left-icon-style="font-size:24px;color:#FF7670;">
				<u-input placeholder="请输入账户" v-model="loginModel.username" />
			</u-form-item>
			<u-form-item left-icon="lock" left-icon-style="font-size:24px;color:#FF7670;">
				<u-input placeholder="请输入密码" v-model="loginModel.password" />
			</u-form-item>
			<view class="passtext">
				忘记密码
			</view>
			<u-button @click="toCommit" :custom-style="customStyle1">登录</u-button>
			<u-button @click="toRegister" type="success" :custom-style="customStyle1">注册</u-button>
			
		</u-form>
		
	</view>
</template>

<script setup>
	import {
		reactive
	} from 'vue';
	import {loginApi} from '../../api/user.js'
	const loginModel = reactive({
		username: '',
		password: ''
	})
	const customStyle1 = reactive({
		marginTop: '40px',
		background:'#FF7670',
		color:'#FFF',
		width:'100%'
	})
	const customStyle2 = reactive({
		marginTop: '35px',
		// background:'#FF7670',
		color:'#FFF',
		width:'100%'
	})
	//去注册
	const toRegister = ()=>{
		uni.navigateTo({
			url:'../register/register'
		})
	}
	//登录
	const toCommit = async()=>{
		if(!loginModel.username){
			uni.showToast({
				title:'请输入账号',
				icon: 'none',
				duration: 2000
			})
			return;
		}
		if(!loginModel.password){
			uni.showToast({
				title:'请输入密码',
				icon: 'none',
				duration: 2000
			})
			return;
		}
		let res = await loginApi(loginModel)
		if(res && res.code == 200){
			//存储用户id
			console.log(res)
			uni.setStorageSync('userId',res.data.userId)
			//跳转首页
			uni.switchTab({
				url:'../index/index'
			})
		}
	}
</script>

<style lang="scss">
	.logincontainer {
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;

		.forms {
			width: 100%;
		}
	}
	.passtext{
		display: flex;
		justify-content: flex-end;
		color:#FF7670;
		margin-top: 15px;
	}
</style>

```









#### 第40讲 图片上传接口开发

##### 1、图片上传接口开发

```js
package com.itmk.upload.image;

import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.UUID;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RestController
@RequestMapping("/api/upload")
public class ImageUploadController {
    //图片上传的路径
    @Value("${web.uploadpath}")
    private String webUploadpath;

    @RequestMapping("/uploadImage")
    public ResultVo uploadImage(@RequestParam("file") MultipartFile file){
        String Url = "";
        String fileName = file.getOriginalFilename();
        //获取文件扩展名
        String fileExtenionName = fileName.substring(fileName.indexOf("."));
        //新的文件名
        String newName = UUID.randomUUID().toString()+fileExtenionName;
        String path = webUploadpath;
        File fileDir = new File(path);
        if(!fileDir.exists()){
            fileDir.mkdirs();
            //设置权限
            fileDir.setWritable(true);
        }
        File targetFile = new File(path,newName);
        try{
            file.transferTo(targetFile);
            Url = "/" + targetFile.getName();
        }catch (Exception e){
            return  null;
        }
        return ResultUtils.success("成功", "/images" + Url);
    }
}

```

##### 2、配置文件添加图片上传配置

```js
#端口号配置
server:
  port: 8089
#数据库连接配置
spring:
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/shop-second-test?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8
    username: root
    password: 123456

#mybatis plus配置
mybatis-plus:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
  global-config:
    db-config:
      #配置mybatis plus 在更新时只更新非空和非NULL的字段
      update-strategy: not_empty


#图片上传
web:
  uploadpath: D:/images/  #图片上传的路径
  load-path: file:D://images/ #图片访问、加载的路径


logging:
  pattern:
    console: '%d{yyyy-MM-dd} [%thread] %-5level %logger- %msg%n'
```















#### 第41讲 小程序图片上传对接

##### 1、小程序write.vue页面

```js
<template>
	<view class="u-wrap u-p-l-20 u-p-r-20">
		<u-form :model="addModel" ref="form1">
			<u-form-item label="类型:">
				<u-radio-group v-model="addModel.type">
					<u-radio activeColor="#FF7670" v-for="(item, index) in list" :key="index" :name="item.name"
						:disabled="item.disabled">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="名称:">
				<u-input placeholder="请输入名称" v-model="addModel.title" />
			</u-form-item>
			<u-form-item label="简介:">
				<u-input placeholder="请输入简介" v-model="addModel.introduce" />
			</u-form-item>
			<u-form-item label="价格:">
				<u-input placeholder="请输入价格" v-model="addModel.price" />
			</u-form-item>
			<u-form-item label-width="auto" label="联系人:">
				<u-input placeholder="请输入联系人" v-model="addModel.userName" />
			</u-form-item>
			<u-form-item label-width="auto" label="联系电话:">
				<u-input placeholder="请输入联系电话" v-model="addModel.phone" />
			</u-form-item>
			<u-form-item label-width='100%' label="图片:(默认取第一张图片为主图)"></u-form-item>
			<u-upload @onChange='onChange' @onRemove='onRemove' :action="uploadUrl" max-count="6"></u-upload>
		</u-form>
		<u-button :custom-style="customStyle">发布</u-button>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	import {
		uploadImageApi
	} from '../../api/write.js'
	const addModel = reactive({
		type: '',
		title: '',
		introduce: '',
		price: '',
		userName: '',
		phone: '',
		image: ''
	})
	const list = [{
			name: '闲置',
			disabled: false
		},
		{
			name: '求购',
			disabled: false
		}
	]
	const value = ref('')
	const uploadUrl = ref('http://localhost:8089/api/upload/uploadImage')
	
	
	const customStyle = reactive({
		background: '#FF7670',
		color: '#FFF',
		marginTop: '50px',
		width: '100%'
	})
	//图片地址
	const imgUrl = ref([]);
	//图片上传后触发
	const onChange = (res, index, lists, name) => {
		//转为JSON
		let result = JSON.parse(res.data)
		imgUrl.value.push(result.data);
		//把图片路径拼接为逗号分隔的字符串
		let url = "";
		for (let k = 0; k < imgUrl.value.length; k++) {
			url = url + imgUrl.value[k] + ",";
		}
		//去掉末尾的逗号
		addModel.image = url.substring(0, url.lastIndexOf(","));
	}
	//删除图片时触发
	const onRemove = (index)=>{
		imgUrl.value.splice(index,1);
		let url = "";
		for (let k = 0; k < imgUrl.value.length; k++) {
			url = url + imgUrl.value[k] + ",";
		}
		//去掉末尾的逗号
		addModel.image = url.substring(0, url.lastIndexOf(","));
	} 
</script>

<style>

</style>

```

##### 2、解决图片不能访问问题

```js
package com.itmk.config.mvc;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Configuration
public class MvcConfiguration implements WebMvcConfigurer {
    @Value("${web.load-path}")
    private String loadPath;
    /**
     * 跨域配置
     * @param registry
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns("*")
                .allowedMethods("*")
                .allowedHeaders("*")
                .maxAge(3600)
                .allowCredentials(true);
    }

     @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/images/**")
                .addResourceLocations(loadPath);
    }
}

```















#### 第42讲 发布页面分类对接与改进

##### 1、api下新建goods.js

```js
import http from '../common/http.js'
//发布分类
export const categoryApi = (parm)=>{
	return http.get('/api/category/getSelectList',parm)
}
```



##### 2、小程序write.vue页面

```js
<template>
	<view class="u-wrap u-p-l-20 u-p-r-20">
		<u-form :model="addModel" ref="form1">
			<u-form-item prop="name" label="类型:">
				<u-radio-group v-model="addModel.name">
					<u-radio @change="radioChange" activeColor="#FF7670" v-for="(item, index) in list" :key="index" :name="item.name"
						:disabled="item.disabled">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item prop="goodsName" label="名称:">
				<u-input placeholder="请输入名称" v-model="addModel.goodsName" />
			</u-form-item>
			<u-form-item prop="categoryName" label="分类:">
				<u-input @click="openSelect" placeholder="请选择分类" v-model="addModel.categoryName" />
				<u-select @confirm="selectConfirm" v-model="show" :list="selectList"></u-select>
			</u-form-item>
			<u-form-item prop="goodsDesc" label="简介:">
				<u-input placeholder="请输入简介" v-model="addModel.goodsDesc" />
			</u-form-item>
			<u-form-item prop="goodsPrice" label="价格:">
				<u-input placeholder="请输入价格" v-model="addModel.goodsPrice" />
			</u-form-item>
			<u-form-item prop="userName" label-width="auto" label="联系人:">
				<u-input placeholder="请输入联系人" v-model="addModel.userName" />
			</u-form-item>
			<u-form-item prop="phone" label-width="auto" label="联系电话:">
				<u-input placeholder="请输入联系电话" v-model="addModel.phone" />
			</u-form-item>
			<u-form-item prop="wxNum" label-width="auto" label="微信号:">
				<u-input placeholder="请输入微信号" v-model="addModel.wxNum" />
			</u-form-item>
			<u-form-item prop="address" label-width="auto" label="联系地址:">
				<u-input v-model="addModel.address" />
			</u-form-item>
			<u-form-item prop="image" label="图片:"></u-form-item>
			<u-upload @on-remove="onRemove" @on-change="onChange" :action="action"></u-upload>
		</u-form>
		<u-button @click="commit" :custom-style="customStyle">发布</u-button>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	import {
		onReady
	} from '@dcloudio/uni-app'
	import http from '../../common/http.js'
	import {
		categoryApi
	} from '../../api/goods.js'
	//表单ref属性
	const form1 = ref()
	const addModel = reactive({
		userId: uni.getStorageSync('userId'),
		name: '',
		type: '',
		goodsName: '',
		categoryId: '',
		categoryName: '',
		goodsDesc: '',
		goodsPrice: '',
		userName: '',
		phone: '',
		wxNum: '',
		image: '',
		address: ''
	})
	const list = [{
			value: '0',
			name: '闲置',
			disabled: false
		},
		{
			value: '1',
			name: '求购',
			disabled: false
		}
	]
	const rules = reactive({
			name: [{
				required: true,
				message: '请选择类型',
				trigger: ['change', 'blur'],
			}],
			goodsName: [{
				required: true,
				message: '请填写名称',
				trigger: ['change', 'blur'],
			}],
			goodsDesc: [{
				required: true,
				message: '请填写描述',
				trigger: ['change', 'blur'],
			}],
			goodsPrice: [{
				required: true,
				message: '请填写价格',
				trigger: ['change', 'blur'],
			}],
			userName: [{
				required: true,
				message: '请填写姓名',
				trigger: ['change', 'blur'],
			}],
			phone: [{
				required: true,
				message: '请填写电话',
				trigger: ['change', 'blur'],
			}],
			wxNum: [{
				required: true,
				message: '请填写微信号',
				trigger: ['change', 'blur'],
			}],
			address: [{
				required: true,
				message: '请填写发布/求购地址',
				trigger: ['change', 'blur'],
			}]
		})
	const value = ref('')
	const fileList = ref([])
	const customStyle = reactive({
		background: '#FF7670',
		color: '#FFF',
		marginTop: '50px',
		width: '100%'
	})
	//图片上传路径
	const action = ref(http.baseUrl + "/api/upload/uploadImage")
	//存储图片路径
	const imgUrl = ref([])
	//图片上传触发
	const onChange = (res, index, lists, name) => {
		// console.log(res.data)
		let result = JSON.parse(res.data)
		//把返回的图片放到imgUrl
		imgUrl.value.push(http.baseUrl + result.data)
		//把数组里面的图片转为逗号分隔的字符串
		let url = ''
		for (let k = 0; k < imgUrl.value.length; k++) {
			url = url + imgUrl.value[k] + ','
		}
		// console.log(url)
		//去掉末尾的逗号
		addModel.image = url.substring(0, url.lastIndexOf(','))
		console.log(addModel)
	}
	//删除图片
	const onRemove = (index) => {
		//删除图片
		imgUrl.value.splice(index, 1)
		let url = ''
		for (let k = 0; k < imgUrl.value.length; k++) {
			url = url + imgUrl.value[k] + ','
		}
		// console.log(url)
		//去掉末尾的逗号
		addModel.image = url.substring(0, url.lastIndexOf(','))
		console.log(addModel)
	}
	//分类
	const show = ref(false)
	//分类数据
	const selectList = ref([])
	const getSelectList = async () => {
		let res = await categoryApi()
		if (res && res.code == 200) {
			console.log(res)
			selectList.value = res.data;
		}
	}
	//打开分类
	const openSelect = ()=>{
		show.value = true;
	}
	//分类确定
	const selectConfirm = (e)=>{
		console.log(e)
		addModel.categoryName = e[0].label;
		addModel.categoryId = e[0].value;
	}
	//发布提交
	const commit = ()=>{
		form1.value.validate((valid)=>{
			console.log(valid)
		})
		console.log(addModel)
	}
	//类型点击事件
	const radioChange = (e)=>{
		console.log(e)
		for(let i = 0;i<list.length;i++){
			if(list[i].name == e){
				addModel.type = list[i].value;
			}
		}
	}
	onReady(() => {
		//设置表单验证规则
		form1.value.setRules(rules);
		//获取分类数据
		getSelectList()
	})
</script>

<style>

</style>

```



















#### 第43讲 发布表设计与接口开发

##### 1、sql脚本

```js
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `goods_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL COMMENT '发布人id',
  `category_id` int(11) NULL DEFAULT NULL COMMENT '分类id',
  `type` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '0:闲置 1：求购',
  `goods_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '商品名称',
  `goods_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '简介',
  `goods_price` decimal(10, 2) NULL DEFAULT NULL COMMENT '价格',
  `user_name` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '联系人',
  `phone` varchar(18) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '联系电话',
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '图片',
  `wx_num` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '微信号',
  `status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0' COMMENT '0:上架 1：下架',
  `sell_status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0' COMMENT '0:未出售 1：已出售',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `set_index` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0' COMMENT '0:未推荐 1：推荐到首页',
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '发布/求购地址',
  `delete_status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0' COMMENT '0:未删除 1：删除',
  PRIMARY KEY (`goods_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 43 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

```

##### 2、新建实体类

```js
package com.itmk.web.goods.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
@TableName("goods")
public class Goods {
    //商品id
    @TableId(type = IdType.AUTO)
    private Long goodsId;
    //发布人id
    private Long userId;
    //订单id
    @TableField(exist = false)
    private Long orderId;
    //分类id
    private Long categoryId;
    //类型 0：闲置 1：求购
    private String type;
    //商品名称
    private String goodsName;
    //商品描述
    private String goodsDesc;
    //价格
    private BigDecimal goodsPrice;
    //交易价格
    @TableField(exist = false)
    private BigDecimal price;
    //姓名
    private String userName;
    //电话
    private String phone;
    //发布/求购地址
    private String address;
    //图片
    private String image;
    //微信号
    private String wxNum;
    //状态 0：上架 1：下架
    private String status;
    //0：未出售 1：已出售
    private String sellStatus;
    //创建时间
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date createTime;
    //交易时间
    @TableField(exist = false)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date sellTime;
    // 0：未推荐 1：推荐首页
    private String setIndex;
    // 0：未删除 1：已删除
    private String deleteStatus;
}

```

##### 3、新建mapper层

```js
package com.itmk.web.goods.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itmk.web.goods.entity.Goods;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsMapper extends BaseMapper<Goods> {
}

```

GoodsMapper.xml

```js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.goods.mapper.GoodsMapper">

</mapper>
```

##### 4、新建service层

```js
package com.itmk.web.goods.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itmk.web.goods.entity.Goods;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsService extends IService<Goods> {
}

```

实现类

```js
package com.itmk.web.goods.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.goods.entity.Goods;
import com.itmk.web.goods.mapper.GoodsMapper;
import com.itmk.web.goods.service.GoodsService;
import org.springframework.stereotype.Service;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Service
public class GoodsServiceImpl extends ServiceImpl<GoodsMapper, Goods> implements GoodsService {
}

```

##### 5、新建控制器

```js
package com.itmk.web.goods.controller;

import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.goods.entity.Goods;
import com.itmk.web.goods.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RestController
@RequestMapping("/api/goods")
public class GoodsController {
    @Autowired
    private GoodsService goodsService;

    //发布
    @PostMapping("/release")
    public ResultVo release(@RequestBody Goods goods){
        //设置时间
        goods.setCreateTime(new Date());
        if(goodsService.save(goods)){
            return ResultUtils.success("发布成功!");
        }
        return ResultUtils.error("发布失败!");
    }
}

```

##### 6、api/goods.js

```js
import http from '../common/http.js'
//发布分类
export const categoryApi = (parm)=>{
	return http.get('/api/category/getSelectList',parm)
}
//发布
export const releaseApi = (parm)=>{
	return http.post('/api/goods/release',parm)
}
```

##### 7、write.vue页面

```js
<template>
	<view class="u-wrap u-p-l-20 u-p-r-20">
		<u-form :model="addModel" ref="form1">
			<u-form-item prop="name" label="类型:">
				<u-radio-group v-model="addModel.name">
					<u-radio @change="radioChange" activeColor="#FF7670" v-for="(item, index) in list" :key="index" :name="item.name"
						:disabled="item.disabled">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item prop="goodsName" label="名称:">
				<u-input placeholder="请输入名称" v-model="addModel.goodsName" />
			</u-form-item>
			<u-form-item prop="categoryName" label="分类:">
				<u-input @click="openSelect" placeholder="请选择分类" v-model="addModel.categoryName" />
				<u-select @confirm="selectConfirm" v-model="show" :list="selectList"></u-select>
			</u-form-item>
			<u-form-item prop="goodsDesc" label="简介:">
				<u-input placeholder="请输入简介" v-model="addModel.goodsDesc" />
			</u-form-item>
			<u-form-item prop="goodsPrice" label="价格:">
				<u-input placeholder="请输入价格" v-model="addModel.goodsPrice" />
			</u-form-item>
			<u-form-item prop="userName" label-width="auto" label="联系人:">
				<u-input placeholder="请输入联系人" v-model="addModel.userName" />
			</u-form-item>
			<u-form-item prop="phone" label-width="auto" label="联系电话:">
				<u-input placeholder="请输入联系电话" v-model="addModel.phone" />
			</u-form-item>
			<u-form-item prop="wxNum" label-width="auto" label="微信号:">
				<u-input placeholder="请输入微信号" v-model="addModel.wxNum" />
			</u-form-item>
			<u-form-item prop="address" label-width="auto" label="联系地址:">
				<u-input v-model="addModel.address" />
			</u-form-item>
			<u-form-item prop="image" label="图片:"></u-form-item>
			<u-upload @on-remove="onRemove" @on-change="onChange" :action="action"></u-upload>
		</u-form>
		<u-button @click="commit" :custom-style="customStyle">发布</u-button>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	import {
		onReady
	} from '@dcloudio/uni-app'
	import http from '../../common/http.js'
	import {
		categoryApi,
		releaseApi
	} from '../../api/goods.js'
	//表单ref属性
	const form1 = ref()
	const addModel = reactive({
		userId: uni.getStorageSync('userId'),
		name: '',
		type: '',
		goodsName: '',
		categoryId: '',
		categoryName: '',
		goodsDesc: '',
		goodsPrice: '',
		userName: '',
		phone: '',
		wxNum: '',
		image: '',
		address: ''
	})
	const list = [{
			value: '0',
			name: '闲置',
			disabled: false
		},
		{
			value: '1',
			name: '求购',
			disabled: false
		}
	]
	const rules = reactive({
			name: [{
				required: true,
				message: '请选择类型',
				trigger: ['change', 'blur'],
			}],
			goodsName: [{
				required: true,
				message: '请填写名称',
				trigger: ['change', 'blur'],
			}],
			goodsDesc: [{
				required: true,
				message: '请填写描述',
				trigger: ['change', 'blur'],
			}],
			goodsPrice: [{
				required: true,
				message: '请填写价格',
				trigger: ['change', 'blur'],
			}],
			userName: [{
				required: true,
				message: '请填写姓名',
				trigger: ['change', 'blur'],
			}],
			phone: [{
				required: true,
				message: '请填写电话',
				trigger: ['change', 'blur'],
			}],
			wxNum: [{
				required: true,
				message: '请填写微信号',
				trigger: ['change', 'blur'],
			}],
			address: [{
				required: true,
				message: '请填写发布/求购地址',
				trigger: ['change', 'blur'],
			}]
		})
	const value = ref('')
	const fileList = ref([])
	const customStyle = reactive({
		background: '#FF7670',
		color: '#FFF',
		marginTop: '50px',
		width: '100%'
	})
	//图片上传路径
	const action = ref(http.baseUrl + "/api/upload/uploadImage")
	//存储图片路径
	const imgUrl = ref([])
	//图片上传触发
	const onChange = (res, index, lists, name) => {
		// console.log(res.data)
		let result = JSON.parse(res.data)
		//把返回的图片放到imgUrl
		imgUrl.value.push(http.baseUrl + result.data)
		//把数组里面的图片转为逗号分隔的字符串
		let url = ''
		for (let k = 0; k < imgUrl.value.length; k++) {
			url = url + imgUrl.value[k] + ','
		}
		// console.log(url)
		//去掉末尾的逗号
		addModel.image = url.substring(0, url.lastIndexOf(','))
		console.log(addModel)
	}
	//删除图片
	const onRemove = (index) => {
		//删除图片
		imgUrl.value.splice(index, 1)
		let url = ''
		for (let k = 0; k < imgUrl.value.length; k++) {
			url = url + imgUrl.value[k] + ','
		}
		// console.log(url)
		//去掉末尾的逗号
		addModel.image = url.substring(0, url.lastIndexOf(','))
		console.log(addModel)
	}
	//分类
	const show = ref(false)
	//分类数据
	const selectList = ref([])
	const getSelectList = async () => {
		let res = await categoryApi()
		if (res && res.code == 200) {
			console.log(res)
			selectList.value = res.data;
		}
	}
	//打开分类
	const openSelect = ()=>{
		show.value = true;
	}
	//分类确定
	const selectConfirm = (e)=>{
		console.log(e)
		addModel.categoryName = e[0].label;
		addModel.categoryId = e[0].value;
	}
	//发布提交
	const commit = ()=>{
		form1.value.validate(async(valid)=>{
			console.log(valid)
			if(valid){
				let res = await releaseApi(addModel)
				if(res && res.code == 200){
					console.log(res)
				}
			}
		})
		console.log(addModel)
	}
	//类型点击事件
	const radioChange = (e)=>{
		console.log(e)
		for(let i = 0;i<list.length;i++){
			if(list[i].name == e){
				addModel.type = list[i].value;
			}
		}
	}
	onReady(() => {
		//设置表单验证规则
		form1.value.setRules(rules);
		//获取分类数据
		getSelectList()
	})
</script>

<style>

</style>

```















#### 第44讲 后台商品列表制作与对接

##### 1、新建分页参数

```js
package com.itmk.web.goods.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class GoodsListParm {
    private Long currentPage;
    private Long pageSize;
    private String goodsName;
}

```

##### 2、GoodsController控制器添加getList()方法

```js
package com.itmk.web.goods.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.goods.entity.Goods;
import com.itmk.web.goods.entity.GoodsListParm;
import com.itmk.web.goods.service.GoodsService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RestController
@RequestMapping("/api/goods")
public class GoodsController {
    @Autowired
    private GoodsService goodsService;

    //发布
    @PostMapping("/release")
    public ResultVo release(@RequestBody Goods goods){
        //设置时间
        goods.setCreateTime(new Date());
        if(goodsService.save(goods)){
            return ResultUtils.success("发布成功!");
        }
        return ResultUtils.error("发布失败!");
    }

    //列表
    @GetMapping("/list")
    public ResultVo getList(GoodsListParm parm){
        //构造分页对象
        IPage<Goods> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        //构造查询条件
        QueryWrapper<Goods> query = new QueryWrapper<>();
        query.lambda().like(StringUtils.isNotEmpty(parm.getGoodsName()),Goods::getGoodsName,parm.getGoodsName())
                .orderByDesc(Goods::getCreateTime);
        IPage<Goods> list = goodsService.page(page, query);
        return ResultUtils.success("查询成功",list);
    }
}

```

##### 3、api下新建goods目录，并建index.ts和GoodsModel.ts

GoodsModel.ts

```js
//列表查询数据类型
export type GoodsListParm = {
    currentPage:number,
    pageSize:number,
    goodsName:string,
    total?:number
}
```

index.ts

```js
import http from "@/http";
import { GoodsListParm } from "./GoodsModel";
//列表
export const getGoodsListApi = (parm:GoodsListParm)=>{
    return http.get("/api/goods/list",parm)
}
```

##### 4、UnusedList.vue组件

```js
<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input
          placeholder="请输入商品名称"
          v-model="searchParm.goodsName"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="searchBtn" icon="Search">搜索</el-button>
        <el-button @click="resetBtn" type="danger" plain icon="Close">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :height="tableHeight" :data="tableList" border stripe>
      <el-table-column prop="image" label="商品图片">
        <template #default="scope">
          <el-image
            v-if="scope.row.image"
            style="width: 100px; height: 60px"
            :src="scope.row.image.split(',')[0]"
          />
        </template>
      </el-table-column>
      <el-table-column prop="goodsName" label="商品名称"></el-table-column>
      <el-table-column prop="type" label="类型">
        <template #default="scope">
          <el-tag
            type="danger"
            v-if="scope.row.type == '0'"
            size="default"
            effect="dark"
            >闲置</el-tag
          >
          <el-tag
            type="success"
            v-if="scope.row.type == '1'"
            size="default"
            effect="dark"
            >求购</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="goodsPrice" label="商品价格"></el-table-column>
      <el-table-column prop="goodsDesc" label="商品描述"></el-table-column>
      <el-table-column prop="userName" label="发布人"></el-table-column>
      <el-table-column prop="phone" label="发布人电话"></el-table-column>
      <el-table-column prop="wxNum" label="发布人微信"></el-table-column>
      <el-table-column prop="address" label="商品地址"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-tag
            type="success"
            v-if="scope.row.status == '0'"
            size="default"
            effect="dark"
            >上架</el-tag
          >
          <el-tag
            type="success"
            v-if="scope.row.status == '1'"
            size="default"
            effect="dark"
            >下架</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="setIndex" label="推荐首页">
        <template #default="scope">
          <el-tag
            type="danger"
            v-if="scope.row.setIndex == '0'"
            size="default"
            effect="dark"
            >未推荐</el-tag
          >
          <el-tag
            type="success"
            v-if="scope.row.setIndex == '1'"
            size="default"
            effect="dark"
            >已推荐</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="sellStatus" label="出售状态">
        <template #default="scope">
          <el-tag
            type="danger"
            v-if="scope.row.sellStatus == '0'"
            size="default"
            effect="dark"
            >未出售</el-tag
          >
          <el-tag
            type="success"
            v-if="scope.row.sellStatus == '1'"
            size="default"
            effect="dark"
            >已出售</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button
            type="danger"
            icon="Delete"
            size="default"
            @click="deleteBtn(scope.row.goodsId)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="searchParm.currentPage"
      :page-sizes="[10, 20, 40, 80, 100]"
      :page-size="searchParm.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="searchParm.total"
      background
    >
    </el-pagination>
  </el-main>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, nextTick } from "vue";
import { getGoodsListApi } from "@/api/goods/index";
//搜索栏绑定对象
const searchParm = reactive({
  currentPage: 1,
  pageSize: 10,
  goodsName: "",
  total: 0,
});
//表格数据
const tableList = ref([]);
//获取表格数据
const getGoodsList = async () => {
  let res = await getGoodsListApi(searchParm);
  if (res && res.code == 200) {
    console.log(res);
    tableList.value = res.data.records;
    searchParm.total = res.data.total;
  }
};
//删除
const deleteBtn = (goodsId: string) => {
  console.log(goodsId);
};
//页容量改变时触发
const sizeChange = (size: number) => {
  searchParm.pageSize = size;
  getGoodsList();
};
//页数改变时触发
const currentChange = (page: number) => {
  searchParm.currentPage = page;
  getGoodsList();
};
//重置
const resetBtn = ()=>{
    searchParm.goodsName = '';
    getGoodsList();
}
//搜索
const searchBtn = ()=>{
    getGoodsList();
}
//表格高度
const tableHeight = ref(0);
onMounted(() => {
  getGoodsList();
  nextTick(() => {
    //计算表格高度
    tableHeight.value = window.innerHeight - 200;
  });
});
</script>

<style scoped></style>

```













#### 第45讲 商品上架、推荐、删除对接

##### 1、GoodsController控制器

```js
package com.itmk.web.goods.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.goods.entity.Goods;
import com.itmk.web.goods.entity.GoodsListParm;
import com.itmk.web.goods.entity.UpandDownParm;
import com.itmk.web.goods.service.GoodsService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RestController
@RequestMapping("/api/goods")
public class GoodsController {
    @Autowired
    private GoodsService goodsService;

    //发布
    @PostMapping("/release")
    public ResultVo release(@RequestBody Goods goods){
        //设置时间
        goods.setCreateTime(new Date());
        if(goodsService.save(goods)){
            return ResultUtils.success("发布成功!");
        }
        return ResultUtils.error("发布失败!");
    }

    //列表
    @GetMapping("/list")
    public ResultVo getList(GoodsListParm parm){
        //构造分页对象
        IPage<Goods> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        //构造查询条件
        QueryWrapper<Goods> query = new QueryWrapper<>();
        query.lambda().like(StringUtils.isNotEmpty(parm.getGoodsName()),Goods::getGoodsName,parm.getGoodsName())
                .eq(Goods::getDeleteStatus,"0")
                .orderByDesc(Goods::getCreateTime);
        IPage<Goods> list = goodsService.page(page, query);
        return ResultUtils.success("查询成功",list);
    }

    //上架下架
    @PostMapping("/upanddown")
    public ResultVo upanddown(@RequestBody UpandDownParm parm){
        UpdateWrapper<Goods> query = new UpdateWrapper<>();
        query.lambda().set(Goods::getStatus,parm.getStatus())
                .eq(Goods::getGoodsId,parm.getGoodsId());
        if(goodsService.update(query)){
            return ResultUtils.success("设置成功!");
        }
        return ResultUtils.error("设置失败!");
    }

    //推荐首页
    @PostMapping("/setIndex")
    public ResultVo setIndex(@RequestBody UpandDownParm parm){
        UpdateWrapper<Goods> query = new UpdateWrapper<>();
        query.lambda().set(Goods::getSetIndex,parm.getSetIndex())
                .eq(Goods::getGoodsId,parm.getGoodsId());
        if(goodsService.update(query)){
            return ResultUtils.success("设置成功!");
        }
        return ResultUtils.error("设置失败!");
    }

    //删除
    @PostMapping("/delete")
    public ResultVo delete(@RequestBody UpandDownParm parm){
        UpdateWrapper<Goods> query = new UpdateWrapper<>();
        query.lambda().set(Goods::getDeleteStatus,"1")
                .eq(Goods::getGoodsId,parm.getGoodsId());
        if(goodsService.update(query)){
            return ResultUtils.success("删除成功!");
        }
        return ResultUtils.error("删除失败!");
    }

}

```

```js
package com.itmk.web.goods.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class UpandDownParm {
    private Long goodsId;
    private String status;
    private String setIndex;
}

```

##### 2、api/goods/index.ts

```js
import http from "@/http";
import { GoodsListParm, UpdateParm } from "./GoodsModel";
//列表
export const getGoodsListApi = (parm:GoodsListParm)=>{
    return http.get("/api/goods/list",parm)
}
//上架下架
export const upanddownApi = (parm:UpdateParm)=>{
    return http.post("/api/goods/upanddown",parm)
}
//推荐首页
export const setIndexApi = (parm:UpdateParm)=>{
    return http.post("/api/goods/setIndex",parm)
}
//删除
export const deleteApi = (parm:UpdateParm)=>{
    return http.post("/api/goods/delete",parm)
}
```

##### 3、UnusedList.vue页面

```js
<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input
          placeholder="请输入商品名称"
          v-model="searchParm.goodsName"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="searchBtn" icon="Search">搜索</el-button>
        <el-button @click="resetBtn" type="danger" plain icon="Close"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :height="tableHeight" :data="tableList" border stripe>
      <el-table-column prop="image" label="商品图片">
        <template #default="scope">
          <el-image
            v-if="scope.row.image"
            style="width: 100px; height: 60px"
            :src="scope.row.image.split(',')[0]"
          />
        </template>
      </el-table-column>
      <el-table-column prop="goodsName" label="商品名称"></el-table-column>
      <el-table-column prop="type" label="类型">
        <template #default="scope">
          <el-tag
            type="danger"
            v-if="scope.row.type == '0'"
            size="default"
            effect="dark"
            >闲置</el-tag
          >
          <el-tag
            type="success"
            v-if="scope.row.type == '1'"
            size="default"
            effect="dark"
            >求购</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="goodsPrice" label="商品价格"></el-table-column>
      <el-table-column prop="goodsDesc" label="商品描述"></el-table-column>
      <el-table-column prop="userName" label="发布人"></el-table-column>
      <el-table-column prop="phone" label="发布人电话"></el-table-column>
      <el-table-column prop="wxNum" label="发布人微信"></el-table-column>
      <el-table-column prop="address" label="商品地址"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-switch
            v-model="scope.row.status"
            :active-value="'0'"
            :inactive-value="'1'"
            :before-change="beforeStatus"
            @change="changeStatus(scope.row.status, scope.row.goodsId)"
          />
        </template>
      </el-table-column>
      <el-table-column prop="setIndex" label="推荐首页">
        <template #default="scope">
          <el-switch
            v-model="scope.row.setIndex"
            :active-value="'1'"
            :inactive-value="'0'"
            :before-change="beforeSetIndex"
            @change="changeSetIndex(scope.row.setIndex, scope.row.goodsId)"
          />
        </template>
      </el-table-column>
      <el-table-column prop="sellStatus" label="出售状态">
        <template #default="scope">
          <el-tag
            type="danger"
            v-if="scope.row.sellStatus == '0'"
            size="default"
            effect="dark"
            >未出售</el-tag
          >
          <el-tag
            type="success"
            v-if="scope.row.sellStatus == '1'"
            size="default"
            effect="dark"
            >已出售</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button
            type="danger"
            icon="Delete"
            size="default"
            @click="deleteBtn(scope.row.goodsId)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="searchParm.currentPage"
      :page-sizes="[10, 20, 40, 80, 100]"
      :page-size="searchParm.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="searchParm.total"
      background
    >
    </el-pagination>
  </el-main>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, nextTick } from "vue";
import useInstance from "@/hooks/useInstance";
import {
  getGoodsListApi,
  upanddownApi,
  setIndexApi,
  deleteApi,
} from "@/api/goods/index";
//获取全局属性
const { global } = useInstance();
//搜索栏绑定对象
const searchParm = reactive({
  currentPage: 1,
  pageSize: 10,
  goodsName: "",
  total: 0,
});
//表格数据
const tableList = ref([]);
//获取表格数据
const getGoodsList = async () => {
  let res = await getGoodsListApi(searchParm);
  if (res && res.code == 200) {
    console.log(res);
    tableList.value = res.data.records;
    searchParm.total = res.data.total;
  }
};
//删除
const deleteBtn = async (goodsId: string) => {
  console.log(goodsId);
  let confirm = await global.$myconfirm("确定删除吗？");
  if (confirm) {
    let res = await deleteApi({
      goodsId: goodsId,
    });
    if (res && res.code == 200) {
      getGoodsList();
    }
  }
};
//页容量改变时触发
const sizeChange = (size: number) => {
  searchParm.pageSize = size;
  getGoodsList();
};
//页数改变时触发
const currentChange = (page: number) => {
  searchParm.currentPage = page;
  getGoodsList();
};
//重置
const resetBtn = () => {
  searchParm.goodsName = "";
  getGoodsList();
};
//搜索
const searchBtn = () => {
  getGoodsList();
};
//上架下架操作之前的事件
const beforeStatus = async () => {
  let confirm = await global.$myconfirm("确定上下架吗？");
  return new Promise((resolve, reject) => {
    if (confirm) {
      return resolve(confirm);
    } else {
      return reject(confirm);
    }
  });
};
//上下架操作
const changeStatus = async (type: string, goodsId: string) => {
  console.log(type);
  console.log(goodsId);
  let res = await upanddownApi({
    goodsId: goodsId,
    status: type,
  });
  if (res && res.code == 200) {
    getGoodsList();
  }
};
//推荐首页操作之前的事件
const beforeSetIndex = async () => {
  let confirm = await global.$myconfirm("确定操作吗？");
  return new Promise((resolve, reject) => {
    if (confirm) {
      return resolve(confirm);
    } else {
      return reject(confirm);
    }
  });
};
//首页操作
const changeSetIndex = async (type: string, goodsId: string) => {
  console.log(type);
  console.log(goodsId);
  let res = await setIndexApi({
    goodsId: goodsId,
    setIndex: type,
  });
  if (res && res.code == 200) {
    getGoodsList();
  }
};
//表格高度
const tableHeight = ref(0);
onMounted(() => {
  getGoodsList();
  nextTick(() => {
    //计算表格高度
    tableHeight.value = window.innerHeight - 200;
  });
});
</script>

<style scoped></style>

```



















#### 第46讲 用户管理列表页面制作与对接

##### 1、WxUserController控制器添加getList()和stopUser()方法

```js
package com.itmk.web.wx_user.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.wx_user.entity.LoginVo;
import com.itmk.web.wx_user.entity.WxUser;
import com.itmk.web.wx_user.entity.WxUserParm;
import com.itmk.web.wx_user.service.WxUserService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RestController
@RequestMapping("/api/wxUser")
public class WxUserController {
    @Autowired
    private WxUserService wxUserService;

    //注册
    @PostMapping("/register")
    public ResultVo register(@RequestBody WxUser user){
        //判断账户是否被占用
        QueryWrapper<WxUser> query = new QueryWrapper<>();
        query.lambda().eq(WxUser::getUsername,user.getUsername());
        //查询用户
        WxUser one = wxUserService.getOne(query);
        if(one != null){
            return ResultUtils.error("用户名被占用!");
        }
        //密码加密
        user.setPassword(DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
        //存到数据库
        if(wxUserService.saveOrUpdate(user)){
            return ResultUtils.success("注册成功！");
        }
        return ResultUtils.error("注册失败!");
    }

    //登录
    @PostMapping("/login")
    public ResultVo login(@RequestBody WxUser user){
        //构造查询条件
        QueryWrapper<WxUser> query = new QueryWrapper<>();
        query.lambda().eq(WxUser::getUsername,user.getUsername()).eq(WxUser::getPassword,
                DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
        WxUser wxUser = wxUserService.getOne(query);
        if(wxUser != null){
            if(wxUser.getStatus().equals("1")){
                return ResultUtils.error("您的账户被停用，请联系管理员!");
            }
            //返回成功的数据
            LoginVo vo = new LoginVo();
            vo.setNickName(wxUser.getNickName());
            vo.setPhone(wxUser.getPhone());
            vo.setUserId(wxUser.getUserId());
            return ResultUtils.success("登录成功",vo);
        }
        return ResultUtils.error("用户密码或密码错误!");
    }

    //列表
    @GetMapping("/list")
    public ResultVo getList(WxUserParm parm){
        //构造分页对象
        IPage<WxUser> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        //构造查询条件
        QueryWrapper<WxUser> query = new QueryWrapper<>();
        query.lambda().like(StringUtils.isNotEmpty(parm.getPhone()),WxUser::getPhone,parm.getPhone())
        .orderByDesc(WxUser::getUsername);
        IPage<WxUser> list = wxUserService.page(page, query);
        return ResultUtils.success("查询成功",list);
    }

    @PostMapping("/stopUser")
    public ResultVo stopUser(@RequestBody WxUser user){
        UpdateWrapper<WxUser> query = new UpdateWrapper<>();
        query.lambda().set(WxUser::getStatus,user.getStatus())
                .eq(WxUser::getUserId,user.getUserId());
        if(wxUserService.update(query)){
            return ResultUtils.success("设置成功!");
        }
        return ResultUtils.error("设置失败!");
    }
}

```

##### 2、api下新建wxuser目录，并建WxUserModel.ts和index.ts

WxUserModel.ts

```js
//定义列表查询的参数
export type WxUserListParm = {
    currentPage:number,
    pageSize:number,
    phone:string,
    total?:number
}
//用户数据类型
export type WxUser = {
    userId:string,
    nickName?:string,
    name?:string,
    picture?:string,
    phone?:string,
    username?:string,
    status?:string
}
```

index.ts

```js
import http from "@/http";
import { WxUserListParm,WxUser } from "./WxUserModel";
//查询列表
export const getListApi = (parm:WxUserListParm)=>{
    return http.get("/api/wxUser/list",parm)
}
//停用
export const stopUserApi = (parm:WxUser)=>{
    return http.post("/api/wxUser/stopUser",parm)
}
```

##### 3、UserList.vue组件

```js
<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input
          placeholder="请输入电话"
          v-model="searchParm.phone"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search" @click="searchBtn">搜索</el-button>
        <el-button type="danger" @click="closeBtn" plain icon="Close"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :height="tableHeight" :data="tableList" border stripe>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="nickName" label="昵称"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="username" label="账户"></el-table-column>
      <el-table-column prop="status" label="停用">
        <template #default="scope">
          <el-switch
            v-model="scope.row.status"
            :active-value="'0'"
            :inactive-value="'1'"
            :before-change="beforeStatus"
            @change="changeStatus(scope.row.status, scope.row.userId)"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="250">
        <template #default="scope">
          <el-button
            icon="Setting"
            type="success"
            size="default"
            @click="resetPas(scope.row)"
            >重置密码</el-button
          >
          <el-button
            icon="Delete"
            type="danger"
            size="default"
            @click="deleteBtn(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="searchParm.currentPage"
      :page-sizes="[10, 20, 40, 80, 100]"
      :page-size="searchParm.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="searchParm.total"
      background
    >
    </el-pagination>
  </el-main>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue";
import { getListApi, stopUserApi } from "@/api/wxuser/index";
import { WxUser } from "@/api/wxuser/WxUserModel";
import useInstance from "@/hooks/useInstance";
//获取全局属性
const { global } = useInstance();
//搜索参数
const searchParm = reactive({
  currentPage: 1,
  pageSize: 10,
  phone: "",
  total: 0,
});
//表格数据
const tableList = ref([]);
//获取表格数据
const getList = async () => {
  let res = await getListApi(searchParm);
  if (res && res.code == 200) {
    // console.log(res)
    tableList.value = res.data.records;
    searchParm.total = res.data.total;
  }
};
//搜索
const searchBtn = () => {};
//重置
const closeBtn = () => {};
const beforeStatus = async () => {
  let confirm = await global.$myconfirm("确定停用吗？");
  return new Promise((resolve, reject) => {
    if (confirm) {
      return resolve(confirm);
    } else {
      return reject(confirm);
    }
  });
};
//上下架操作
const changeStatus = async (type: string, goodsId: string) => {
  console.log(type);
  console.log(goodsId);
  let res = await stopUserApi({
    userId: goodsId,
    status: type,
  });
  if (res && res.code == 200) {
    getList();
  }
};
//重置密码
const resetPas = (row: WxUser) => {
  console.log(row);
};
//删除
const deleteBtn = (row: WxUser) => {
  console.log(row);
};
//页容量改变时触发
const sizeChange = (size: number) => {
  console.log(size);
  searchParm.pageSize = size;
  getList();
};
//页数改变时触发
const currentChange = (page: number) => {
  console.log(page);
  searchParm.currentPage = page;
  getList();
};
//表格高度
const tableHeight = ref(0);
onMounted(() => {
  nextTick(() => {
    tableHeight.value = window.innerHeight - 220;
  });
  getList();
});
</script>

<style scoped></style>

```















#### 第47讲 用户重置密码、删除接口对接

##### 1、WxUserController控制器添加updatePassword()和delete()方法

```js
package com.itmk.web.wx_user.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.wx_user.entity.LoginVo;
import com.itmk.web.wx_user.entity.WxUser;
import com.itmk.web.wx_user.entity.WxUserParm;
import com.itmk.web.wx_user.service.WxUserService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RestController
@RequestMapping("/api/wxUser")
public class WxUserController {
    @Autowired
    private WxUserService wxUserService;

    //注册
    @PostMapping("/register")
    public ResultVo register(@RequestBody WxUser user){
        //判断账户是否被占用
        QueryWrapper<WxUser> query = new QueryWrapper<>();
        query.lambda().eq(WxUser::getUsername,user.getUsername());
        //查询用户
        WxUser one = wxUserService.getOne(query);
        if(one != null){
            return ResultUtils.error("用户名被占用!");
        }
        //密码加密
        user.setPassword(DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
        //存到数据库
        if(wxUserService.saveOrUpdate(user)){
            return ResultUtils.success("注册成功！");
        }
        return ResultUtils.error("注册失败!");
    }

    //登录
    @PostMapping("/login")
    public ResultVo login(@RequestBody WxUser user){
        //构造查询条件
        QueryWrapper<WxUser> query = new QueryWrapper<>();
        query.lambda().eq(WxUser::getUsername,user.getUsername()).eq(WxUser::getPassword,
                DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
        WxUser wxUser = wxUserService.getOne(query);
        if(wxUser != null){
            if(wxUser.getStatus().equals("1")){
                return ResultUtils.error("您的账户被停用，请联系管理员!");
            }
            //返回成功的数据
            LoginVo vo = new LoginVo();
            vo.setNickName(wxUser.getNickName());
            vo.setPhone(wxUser.getPhone());
            vo.setUserId(wxUser.getUserId());
            return ResultUtils.success("登录成功",vo);
        }
        return ResultUtils.error("用户密码或密码错误!");
    }

    //列表
    @GetMapping("/list")
    public ResultVo getList(WxUserParm parm){
        //构造分页对象
        IPage<WxUser> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        //构造查询条件
        QueryWrapper<WxUser> query = new QueryWrapper<>();
        query.lambda().like(StringUtils.isNotEmpty(parm.getPhone()),WxUser::getPhone,parm.getPhone())
        .orderByDesc(WxUser::getUsername);
        IPage<WxUser> list = wxUserService.page(page, query);
        return ResultUtils.success("查询成功",list);
    }

    @PostMapping("/stopUser")
    public ResultVo stopUser(@RequestBody WxUser user){
        UpdateWrapper<WxUser> query = new UpdateWrapper<>();
        query.lambda().set(WxUser::getStatus,user.getStatus())
                .eq(WxUser::getUserId,user.getUserId());
        if(wxUserService.update(query)){
            return ResultUtils.success("设置成功!");
        }
        return ResultUtils.error("设置失败!");
    }

    //重置密码
    @PostMapping("/updatePassword")
    public ResultVo updatePassword(@RequestBody WxUser user){
        //默认重置密码为666666
        String pas = "666666";
        UpdateWrapper<WxUser> query = new UpdateWrapper<>();
        query.lambda().set(WxUser::getPassword,DigestUtils.md5DigestAsHex(pas.getBytes()))
                .eq(WxUser::getUserId,user.getUserId());
        if(wxUserService.update(query)){
            return ResultUtils.success("重置成功!");
        }
        return ResultUtils.error("重置失败!");
    }

    //删除用户
    @DeleteMapping("/{userId}")
    public ResultVo delete(@PathVariable("userId") Long userId){
        if(wxUserService.removeById(userId)){
            return ResultUtils.success("删除成功!");
        }
        return ResultUtils.error("删除失败!");
    }

}

```

##### 2、api/wxuser/index.ts

```js
import http from "@/http";
import { WxUserListParm,WxUser } from "./WxUserModel";
//查询列表
export const getListApi = (parm:WxUserListParm)=>{
    return http.get("/api/wxUser/list",parm)
}
//停用
export const stopUserApi = (parm:WxUser)=>{
    return http.post("/api/wxUser/stopUser",parm)
}
//重置密码
export const updatePasswordApi = (parm:WxUser)=>{
    return http.post("/api/wxUser/updatePassword",parm)
}
//删除
export const deleteApi = (parm:WxUser)=>{
    return http.delete(`/api/wxUser/${parm.userId}`)
}
```

##### 3、UserList.vue组件

```js
<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input
          placeholder="请输入电话"
          v-model="searchParm.phone"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search" @click="searchBtn">搜索</el-button>
        <el-button type="danger" @click="closeBtn" plain icon="Close"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :height="tableHeight" :data="tableList" border stripe>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="nickName" label="昵称"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="username" label="账户"></el-table-column>
      <el-table-column prop="status" label="停用">
        <template #default="scope">
          <el-switch
            v-model="scope.row.status"
            :active-value="'0'"
            :inactive-value="'1'"
            :before-change="beforeStatus"
            @change="changeStatus(scope.row.status, scope.row.userId)"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="250">
        <template #default="scope">
          <el-button
            icon="Setting"
            type="success"
            size="default"
            @click="resetPas(scope.row)"
            >重置密码</el-button
          >
          <el-button
            icon="Delete"
            type="danger"
            size="default"
            @click="deleteBtn(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="searchParm.currentPage"
      :page-sizes="[10, 20, 40, 80, 100]"
      :page-size="searchParm.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="searchParm.total"
      background
    >
    </el-pagination>
  </el-main>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue";
import { getListApi, stopUserApi,updatePasswordApi,deleteApi } from "@/api/wxuser/index";
import { WxUser } from "@/api/wxuser/WxUserModel";
import useInstance from "@/hooks/useInstance";
import { ElMessage } from "element-plus";
//获取全局属性
const { global } = useInstance();
//搜索参数
const searchParm = reactive({
  currentPage: 1,
  pageSize: 10,
  phone: "",
  total: 0,
});
//表格数据
const tableList = ref([]);
//获取表格数据
const getList = async () => {
  let res = await getListApi(searchParm);
  if (res && res.code == 200) {
    // console.log(res)
    tableList.value = res.data.records;
    searchParm.total = res.data.total;
  }
};
//搜索
const searchBtn = () => {
  getList()
};
//重置
const closeBtn = () => {
  searchParm.phone = ''
  getList()
};
const beforeStatus = async () => {
  let confirm = await global.$myconfirm("确定停用吗？");
  return new Promise((resolve, reject) => {
    if (confirm) {
      return resolve(confirm);
    } else {
      return reject(confirm);
    }
  });
};
//停用操作
const changeStatus = async (type: string, goodsId: string) => {
  console.log(type);
  console.log(goodsId);
  let res = await stopUserApi({
    userId: goodsId,
    status: type,
  });
  if (res && res.code == 200) {
    getList();
  }
};
//重置密码
const resetPas = async(row: WxUser) => {
  const confirm = await global.$myconfirm('确定重置密码吗，重置后的密码为【666666】?')
  if(confirm){
    let res = await updatePasswordApi({
      userId:row.userId
    })
    if(res && res.code == 200){
      ElMessage.success(res.msg)
      getList()
    }
  }
};
//删除
const deleteBtn = async(row: WxUser) => {
  console.log(row);
  const confirm = await global.$myconfirm('确定删除该数据吗?')
  if(confirm){
    let res = await deleteApi({
      userId:row.userId
    })
    if(res && res.code == 200){
      ElMessage.success(res.msg)
      getList()
    }
  }
};
//页容量改变时触发
const sizeChange = (size: number) => {
  console.log(size);
  searchParm.pageSize = size;
  getList();
};
//页数改变时触发
const currentChange = (page: number) => {
  console.log(page);
  searchParm.currentPage = page;
  getList();
};
//表格高度
const tableHeight = ref(0);
onMounted(() => {
  nextTick(() => {
    tableHeight.value = window.innerHeight - 220;
  });
  getList();
});
</script>

<style scoped></style>

```

















#### 第48讲 菜单表设计与接口开发

##### 1、sql脚本

```js
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `menu_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `parent_id` int(11) NULL DEFAULT NULL COMMENT '上级id',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '菜单名称',
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '权限字段',
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '图标',
  `order_num` int(11) NULL DEFAULT NULL COMMENT '序号',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `parent_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '上级菜单名称',
  `type` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '1:菜单 2：按钮',
  `path` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '路由名称',
  PRIMARY KEY (`menu_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

```

##### 2、新建实体类

```js
package com.itmk.web.sys_menu.entity;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
@TableName("sys_menu")
public class SysMenu {
    @TableId(type = IdType.AUTO)
    private Long menuId;
    private Long parentId;
    private String title;
    private String code;
    @TableField(exist = false)
    private Long value;
    @TableField(exist = false)
    private String label;
    private String type;
    private String icon;
    private String path;
    private String parentName;
    private Integer orderNum;
    private Date createTime;
    @TableField(exist = false)
    private List<SysMenu> children = new ArrayList<>();
}
```

```js
package com.itmk.web.sys_menu.entity;


import org.springframework.beans.BeanUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public class MakeMenuTree {
    public static List<SysMenu> makeTree(List<SysMenu> menuList, Long pid) {
        //接收组装后的树数据
        List<SysMenu> list = new ArrayList<>();
        //判断menuList是否为空，如果为空，直接返回空的数据
        Optional.ofNullable(menuList).orElse(new ArrayList<>())
                .stream()
                .filter(item -> item != null && item.getParentId().equals(pid))
                .forEach(item -> {
                    //组装树数据
                    SysMenu menu = new SysMenu();
                    //快速复制值
                    BeanUtils.copyProperties(item, menu);
                    //设置
                    menu.setLabel(item.getTitle());
                    menu.setValue(item.getMenuId());
                    //递归查找下级,自己调用自己
                    List<SysMenu> children = makeTree(menuList, item.getMenuId());
                    menu.setChildren(children);
                    list.add(menu);
                });
        return list;
    }
}
```

##### 3、新建mapper层

```js
package com.itmk.web.sys_menu.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itmk.web.sys_menu.entity.SysMenu;

import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface SysMenuMapper extends BaseMapper<SysMenu> {
   
}

```

SysMenuMapper.xml映射文件

```js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.sys_menu.mapper.SysMenuMapper">
    
</mapper>
```

##### 4、service层

```js
package com.itmk.web.sys_menu.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itmk.web.sys_menu.entity.SysMenu;
import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface SysMenuService extends IService<SysMenu> {
    List<SysMenu> getParent();
}

```

实现类

```js
package com.itmk.web.sys_menu.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.sys_menu.entity.MakeMenuTree;
import com.itmk.web.sys_menu.entity.SysMenu;
import com.itmk.web.sys_menu.mapper.SysMenuMapper;
import com.itmk.web.sys_menu.service.SysMenuService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Service
public class SysMenuServiceImpl extends ServiceImpl<SysMenuMapper, SysMenu> implements SysMenuService {
    @Override
    public List<SysMenu> getParent() {
        //查询菜单
        QueryWrapper<SysMenu> query = new QueryWrapper<>();
        query.lambda().eq(SysMenu::getType,"1");
        List<SysMenu> menuList = this.baseMapper.selectList(query);
        //构造顶级
        SysMenu menu = new SysMenu();
        menu.setMenuId(0L);
        menu.setParentId(-1L);
        menu.setTitle("顶级菜单");
        menu.setLabel("顶级菜单");
        menu.setValue(0L);
        menuList.add(menu);
        //组装树数据
        return MakeMenuTree.makeTree(menuList,-1L);
    }
}

```

##### 5、控制器

```js
package com.itmk.web.sys_menu.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.sys_menu.entity.MakeMenuTree;
import com.itmk.web.sys_menu.entity.SysMenu;
import com.itmk.web.sys_menu.service.SysMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RestController
@RequestMapping("/api/menu")
public class SysMenuController {
    @Autowired
    private SysMenuService sysMenuService;

    //新增
    @PostMapping
    public ResultVo add(@RequestBody SysMenu sysMenu){
        sysMenu.setCreateTime(new Date());
        if(sysMenuService.save(sysMenu)){
            return ResultUtils.success("新增成功!");
        }
        return ResultUtils.error("新增失败!");
    }

    //编辑
    @PutMapping
    public ResultVo edit(@RequestBody SysMenu sysMenu){
        if(sysMenuService.updateById(sysMenu)){
            return ResultUtils.success("编辑成功!");
        }
        return ResultUtils.error("编辑失败!");
    }

     //删除
    @DeleteMapping("/{menuId}")
    public ResultVo delete(@PathVariable("menuId") Long menuId){
        if(sysMenuService.removeById(menuId)){
            return ResultUtils.success("删除成功!");
        }
        return ResultUtils.error("删除失败!");
    }

    //列表
    @GetMapping("/list")
    public ResultVo list(){
        QueryWrapper<SysMenu> query = new QueryWrapper<>();
        query.lambda().orderByAsc(SysMenu::getOrderNum);
        List<SysMenu> menuList = sysMenuService.list(query);
        //组装树形数据
        List<SysMenu> list = MakeMenuTree.makeTree(menuList, 0L);
        return ResultUtils.success("查询成功",list);
    }

    //上级菜单
    @GetMapping("/getParent")
    public ResultVo getParent(){
        List<SysMenu> parent = sysMenuService.getParent();
        return ResultUtils.success("查询成功",parent);
    }
}

```





















#### 第49讲 新增菜单页面制作

##### 1、api/menu添加index.ts

```js
import http from "@/http";
//获取上级菜单树数据
export const getParentApi = ()=>{
    return http.get("/api/menu/getParent")
}
```

##### 2、views/menu/Index.vue页面

```js
<template>
  <el-main>
    <el-button icon="Plus" type="primary" size="default" @click="addBtn"
      >新增</el-button
    >
  </el-main>
  <!-- 新增弹框 -->
  <SysDialog
    :title="dialog.title"
    :visible="dialog.visible"
    :height="dialog.height"
    :width="dialog.width"
    @onClose="onClose"
    @onConfirm="onConfirm"
  >
    <template v-slot:content>
      <el-form
        :model="addModel"
        ref="addRef"
        :rules="rules"
        label-width="80px"
        :inline="false"
        size="default"
      >
        <el-form-item label="菜单类型">
          <el-radio-group v-model="addModel.type">
            <el-radio :label="'1'">菜单</el-radio>
            <el-radio :label="'2'">按钮</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-row>
          <el-col :span="12" :offset="0">
            <el-form-item label="上级菜单">
              <el-tree-select
                v-model="addModel.parentId"
                :data="parentList"
                :render-after-expand="false"
                show-checkbox
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item label="菜单名称">
              <el-input v-model="addModel.title"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" :offset="0">
            <el-form-item label="权限字段">
              <el-input v-model="addModel.code"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item label="菜单序号">
              <el-input v-model="addModel.orderNum"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="addModel.type !='2'">
          <el-col :span="12" :offset="0">
            <el-form-item label="路由">
              <el-input v-model="addModel.path"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item label="菜单图标">
              <el-input v-model="addModel.icon"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </template>
  </SysDialog>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import { getParentApi } from "@/api/menu/index";
//弹框属性
const { dialog, onClose, onConfirm, onShow } = useDialog();
const addBtn = () => {
    dialog.height = 220;
  //获取上级菜单
  getParentList();
  //展示弹框
  onShow();
};
//弹框绑定的属性
const addModel = reactive({
  menuId: "",
  parentId: "",
  title: "",
  code: "",
  type: "",
  icon: "",
  path: "",
  parentName: "",
  orderNum: "",
});
//表单验证规则
const rules = reactive({});
//上级菜单树的数据
const parentList = ref([]);
//获取上级菜单数据
const getParentList = async () => {
  let res = await getParentApi();
  if (res && res.code == 200) {
    parentList.value = res.data;
  }
};
onMounted(() => {});
</script>

<style scoped></style>

```

















#### 第50讲 新增菜单接口对接

##### 1、api/menu下新建MenuModel.ts

```js
//菜单数据类型
export type Menu = {
    menuId: string,
    parentId: string,
    title: string,
    code: string,
    type: string,
    icon: string,
    path: string,
    parentName: string,
    orderNum: string,
}
```

##### 2、api/menu/index.ts

```js
import http from "@/http";
import { Menu } from '@/api/menu/MenuModel'
//获取上级菜单树数据
export const getParentApi = () => {
    return http.get("/api/menu/getParent")
}
//新增
export const addApi = (parm: Menu) => {
    return http.post("/api/menu", parm)
}
```

##### 3、菜单页面

```js
<template>
  <el-main>
    <el-button icon="Plus" type="primary" size="default" @click="addBtn"
      >新增</el-button
    >
  </el-main>
  <!-- 新增弹框 -->
  <SysDialog
    :title="dialog.title"
    :visible="dialog.visible"
    :height="dialog.height"
    :width="dialog.width"
    @onClose="onClose"
    @onConfirm="commit"
  >
    <template v-slot:content>
      <el-form
        :model="addModel"
        ref="addRef"
        :rules="rules"
        label-width="80px"
        :inline="false"
        size="default"
      >
        <el-form-item prop="type" label="菜单类型">
          <el-radio-group v-model="addModel.type">
            <el-radio :label="'1'">菜单</el-radio>
            <el-radio :label="'2'">按钮</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-row>
          <el-col :span="12" :offset="0">
            <el-form-item prop="parentId" label="上级菜单">
              <el-tree-select
                @check="nodeClick"
                v-model="addModel.parentId"
                :data="parentList"
                :render-after-expand="false"
                show-checkbox
                check-strictly
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item prop="title" label="菜单名称">
              <el-input v-model="addModel.title"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" :offset="0">
            <el-form-item prop="code" label="权限字段">
              <el-input v-model="addModel.code"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item prop="orderNum" label="菜单序号">
              <el-input v-model="addModel.orderNum"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="addModel.type != '2'">
          <el-col :span="12" :offset="0">
            <el-form-item prop="path" label="路由">
              <el-input v-model="addModel.path"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item prop="icon" label="菜单图标">
              <el-input v-model="addModel.icon"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </template>
  </SysDialog>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import { getParentApi, addApi } from "@/api/menu/index";
import { ElMessage, FormInstance } from "element-plus";
//表单ref属性
const addRef = ref<FormInstance>();
//弹框属性
const { dialog, onClose, onShow } = useDialog();
const addBtn = () => {
  dialog.height = 220;
  //获取上级菜单
  getParentList();
  //展示弹框
  onShow();
};
//弹框绑定的属性
const addModel = reactive({
  menuId: "",
  parentId: "",
  title: "",
  code: "",
  type: "",
  icon: "",
  path: "",
  parentName: "",
  orderNum: "",
});
//表单验证规则
const rules = reactive({
  type: [
    {
      required: true,
      message: "请选择菜单类型",
      trigger: "change",
    },
  ],
  parentId: [
    {
      required: true,
      message: "请选择上级菜单",
      trigger: "change",
    },
  ],
  title: [
    {
      required: true,
      message: "请填写菜单标题",
      trigger: "change",
    },
  ],
  code: [
    {
      required: true,
      message: "请填写菜单权限字段",
      trigger: "change",
    },
  ],
  icon: [
    {
      required: true,
      message: "请填写菜单图标",
      trigger: "change",
    },
  ],
  path: [
    {
      required: true,
      message: "请填写菜单path",
      trigger: "change",
    },
  ],
  orderNum: [
    {
      required: true,
      message: "请填写序号",
      trigger: "change",
    },
  ],
});
//上级菜单树的数据
const parentList = ref([]);
//获取上级菜单数据
const getParentList = async () => {
  let res = await getParentApi();
  if (res && res.code == 200) {
    parentList.value = res.data;
  }
};

const nodeClick = (e: any) => {
//   console.log(e.title);
  addModel.parentName = e.title;
};
//确定
const commit = () => {
  addRef.value?.validate(async (valid) => {
    if (valid) {
      let res = await addApi(addModel);
      console.log(res);
      if (res && res.code == 200) {
        ElMessage.success(res.msg);
        onClose();
      }
    }
  });
};
onMounted(() => {});
</script>

<style scoped></style>

```















#### 第51讲 菜单列表页面制作与对接

##### 1、api/menu/index.ts

```js
import http from "@/http";
import { Menu } from '@/api/menu/MenuModel'
//获取上级菜单树数据
export const getParentApi = () => {
    return http.get("/api/menu/getParent")
}
//新增
export const addApi = (parm: Menu) => {
    return http.post("/api/menu", parm)
}
//表格列表
export const listApi = () => {
    return http.get("/api/menu/list")
}
```

##### 2、菜单页面

```js
<template>
  <el-main>
    <el-button icon="Plus" type="primary" size="default" @click="addBtn"
      >新增</el-button
    >
  </el-main>
  <!-- 表格 -->
  <el-table :tree-props="{ children: 'children', hasChildren: 'hasChildren' }" row-key="menuId" :data="tableList" border stripe>
    <el-table-column prop="title" label="菜单名称"></el-table-column>
    <el-table-column prop="type" label="菜单类型">
      <template #default="scope">
        <el-tag v-if="scope.row.type == '1'" type="success" size="default">菜单</el-tag>
        <el-tag v-if="scope.row.type == '2'" type="danger" size="default">按钮</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="icon" label="图标">
      <template #default="scope">
        <el-icon>
          <!-- 动态组件展示图标 -->
          <component v-if="scope.row.icon" :is="scope.row.icon"></component>
        </el-icon>
      </template>
    </el-table-column>
    <el-table-column prop="parentName" label="上级菜单"></el-table-column>
    <el-table-column prop="path" label="路由"></el-table-column>
    <el-table-column prop="code" label="权限字段"></el-table-column>
    <el-table-column prop="orderNum" label="序号"></el-table-column>
    <el-table-column  label="操作" align="center">
      <template #default="scope" width="120">
        <el-button icon="Edit" type="primary" size="default" @click="editBtn(scope.row)">编辑</el-button>
        <el-button icon="Delete" type="danger" size="default" @click="deletBtn(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  
  <!-- 新增弹框 -->
  <SysDialog
    :title="dialog.title"
    :visible="dialog.visible"
    :height="dialog.height"
    :width="dialog.width"
    @onClose="onClose"
    @onConfirm="commit"
  >
    <template v-slot:content>
      <el-form
        :model="addModel"
        ref="addRef"
        :rules="rules"
        label-width="80px"
        :inline="false"
        size="default"
      >
        <el-form-item prop="type" label="菜单类型">
          <el-radio-group v-model="addModel.type">
            <el-radio :label="'1'">菜单</el-radio>
            <el-radio :label="'2'">按钮</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-row>
          <el-col :span="12" :offset="0">
            <el-form-item prop="parentId" label="上级菜单">
              <el-tree-select
                @check="nodeClick"
                v-model="addModel.parentId"
                :data="parentList"
                :render-after-expand="false"
                show-checkbox
                check-strictly
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item prop="title" label="菜单名称">
              <el-input v-model="addModel.title"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" :offset="0">
            <el-form-item prop="code" label="权限字段">
              <el-input v-model="addModel.code"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item prop="orderNum" label="菜单序号">
              <el-input v-model="addModel.orderNum"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="addModel.type != '2'">
          <el-col :span="12" :offset="0">
            <el-form-item prop="path" label="路由">
              <el-input v-model="addModel.path"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item prop="icon" label="菜单图标">
              <el-input v-model="addModel.icon"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </template>
  </SysDialog>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import { getParentApi, addApi,listApi } from "@/api/menu/index";
import { Menu } from "@/api/menu/MenuModel";
import { ElMessage, FormInstance } from "element-plus";
//表单ref属性
const addRef = ref<FormInstance>();
//弹框属性
const { dialog, onClose, onShow } = useDialog();
const addBtn = () => {
  dialog.height = 220;
  //获取上级菜单
  getParentList();
  //展示弹框
  onShow();
};
//弹框绑定的属性
const addModel = reactive({
  menuId: "",
  parentId: "",
  title: "",
  code: "",
  type: "",
  icon: "",
  path: "",
  parentName: "",
  orderNum: "",
});
//表单验证规则
const rules = reactive({
  type: [
    {
      required: true,
      message: "请选择菜单类型",
      trigger: "change",
    },
  ],
  parentId: [
    {
      required: true,
      message: "请选择上级菜单",
      trigger: "change",
    },
  ],
  title: [
    {
      required: true,
      message: "请填写菜单标题",
      trigger: "change",
    },
  ],
  code: [
    {
      required: true,
      message: "请填写菜单权限字段",
      trigger: "change",
    },
  ],
  icon: [
    {
      required: true,
      message: "请填写菜单图标",
      trigger: "change",
    },
  ],
  path: [
    {
      required: true,
      message: "请填写菜单path",
      trigger: "change",
    },
  ],
  orderNum: [
    {
      required: true,
      message: "请填写序号",
      trigger: "change",
    },
  ],
});
//上级菜单树的数据
const parentList = ref([]);
//获取上级菜单数据
const getParentList = async () => {
  let res = await getParentApi();
  if (res && res.code == 200) {
    parentList.value = res.data;
  }
};

const nodeClick = (e: any) => {
//   console.log(e.title);
  addModel.parentName = e.title;
};
//确定
const commit = () => {
  addRef.value?.validate(async (valid) => {
    if (valid) {
      let res = await addApi(addModel);
      console.log(res);
      if (res && res.code == 200) {
        ElMessage.success(res.msg);
        getList()
        onClose();
      }
    }
  });
};
//表格数据
const tableList = ref([])
//获取表格数据
const getList = async()=>{
  let res = await listApi()
  if(res && res.code == 200){
    console.log(res)
    tableList.value = res.data;
  }
}
//删除
const deletBtn = (row:Menu)=>{
  console.log(row)
}
//编辑
const editBtn = (row:Menu)=>{
  console.log(row)
}
onMounted(() => {
  getList()
});
</script>

<style scoped></style>

```















#### 第52讲 菜单编辑、删除对接

##### 1、api/menu/index.ts

```js
import http from "@/http";
import { Menu } from '@/api/menu/MenuModel'
//获取上级菜单树数据
export const getParentApi = () => {
    return http.get("/api/menu/getParent")
}
//新增
export const addApi = (parm: Menu) => {
    return http.post("/api/menu", parm)
}
//表格列表
export const listApi = () => {
    return http.get("/api/menu/list")
}
//编辑
export const editApi = (parm: Menu) => {
    return http.put("/api/menu", parm)
}
//删除
export const deleteApi = (parm: Menu) => {
    return http.delete(`/api/menu/${parm.menuId}`)
}

```

##### 2、菜单页面

```js
<template>
  <el-main style="padding: 15px 30px 20px 30px;">
    <el-button style="margin-bottom: 15px;" icon="Plus" type="primary" size="default" @click="addBtn"
      >新增</el-button
    >
    <!-- 表格 -->
  <el-table
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    row-key="menuId"
    :data="tableList"
    border
    stripe
  >
    <el-table-column prop="title" label="菜单名称"></el-table-column>
    <el-table-column prop="type" label="菜单类型">
      <template #default="scope">
        <el-tag v-if="scope.row.type == '1'" type="success" size="default"
          >菜单</el-tag
        >
        <el-tag v-if="scope.row.type == '2'" type="danger" size="default"
          >按钮</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column prop="icon" label="图标">
      <template #default="scope">
        <el-icon>
          <!-- 动态组件展示图标 -->
          <component v-if="scope.row.icon" :is="scope.row.icon"></component>
        </el-icon>
      </template>
    </el-table-column>
    <el-table-column prop="parentName" label="上级菜单"></el-table-column>
    <el-table-column prop="path" label="路由"></el-table-column>
    <el-table-column prop="code" label="权限字段"></el-table-column>
    <el-table-column prop="orderNum" label="序号"></el-table-column>
    <el-table-column label="操作" align="center">
      <template #default="scope" width="120">
        <el-button
          icon="Edit"
          type="primary"
          size="default"
          @click="editBtn(scope.row)"
          >编辑</el-button
        >
        <el-button
          icon="Delete"
          type="danger"
          size="default"
          @click="deletBtn(scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  </el-main>
  <!-- 新增弹框 -->
  <SysDialog
    :title="dialog.title"
    :visible="dialog.visible"
    :height="dialog.height"
    :width="dialog.width"
    @onClose="onClose"
    @onConfirm="commit"
  >
    <template v-slot:content>
      <el-form
        :model="addModel"
        ref="addRef"
        :rules="rules"
        label-width="80px"
        :inline="false"
        size="default"
      >
        <el-form-item prop="type" label="菜单类型">
          <el-radio-group v-model="addModel.type">
            <el-radio :label="'1'">菜单</el-radio>
            <el-radio :label="'2'">按钮</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-row>
          <el-col :span="12" :offset="0">
            <el-form-item prop="parentId" label="上级菜单">
              <el-tree-select
                @check="nodeClick"
                v-model="addModel.parentId"
                :data="parentList"
                :render-after-expand="false"
                show-checkbox
                check-strictly
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item prop="title" label="菜单名称">
              <el-input v-model="addModel.title"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" :offset="0">
            <el-form-item prop="code" label="权限字段">
              <el-input v-model="addModel.code"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item prop="orderNum" label="菜单序号">
              <el-input v-model="addModel.orderNum"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="addModel.type != '2'">
          <el-col :span="12" :offset="0">
            <el-form-item prop="path" label="路由">
              <el-input v-model="addModel.path"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item prop="icon" label="菜单图标">
              <el-input v-model="addModel.icon"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </template>
  </SysDialog>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import {
  getParentApi,
  addApi,
  listApi,
  editApi,
  deleteApi,
} from "@/api/menu/index";
import { Menu } from "@/api/menu/MenuModel";
import { ElMessage, FormInstance } from "element-plus";
import { EditType } from "@/type/BaseEnum";
import useInstance from "@/hooks/useInstance";
//获取全局属性
const { global } = useInstance();
//表单ref属性
const addRef = ref<FormInstance>();
//弹框属性
const { dialog, onClose, onShow } = useDialog();

//弹框绑定的属性
const addModel = reactive({
  menuId: "",
  parentId: "",
  title: "",
  code: "",
  type: "",
  icon: "",
  path: "",
  parentName: "",
  orderNum: "",
});
//表单验证规则
const rules = reactive({
  type: [
    {
      required: true,
      message: "请选择菜单类型",
      trigger: "change",
    },
  ],
  parentId: [
    {
      required: true,
      message: "请选择上级菜单",
      trigger: "change",
    },
  ],
  title: [
    {
      required: true,
      message: "请填写菜单标题",
      trigger: "change",
    },
  ],
  code: [
    {
      required: true,
      message: "请填写菜单权限字段",
      trigger: "change",
    },
  ],
  icon: [
    {
      required: true,
      message: "请填写菜单图标",
      trigger: "change",
    },
  ],
  path: [
    {
      required: true,
      message: "请填写菜单path",
      trigger: "change",
    },
  ],
  orderNum: [
    {
      required: true,
      message: "请填写序号",
      trigger: "change",
    },
  ],
});
//上级菜单树的数据
const parentList = ref([]);
//获取上级菜单数据
const getParentList = async () => {
  let res = await getParentApi();
  if (res && res.code == 200) {
    parentList.value = res.data;
  }
};

const nodeClick = (e: any) => {
  //   console.log(e.title);
  addModel.parentName = e.title;
};

//表格数据
const tableList = ref([]);
//获取表格数据
const getList = async () => {
  let res = await listApi();
  if (res && res.code == 200) {
    console.log(res);
    tableList.value = res.data;
  }
};
//删除
const deletBtn = async (row: Menu) => {
  console.log(row);
  //信息确定
  const confirm = await global.$myconfirm("确定删除该数据吗？");
  if (confirm) {
    let res = await deleteApi(row);
    if (res && res.code == 200) {
      ElMessage.success(res.msg);
      getList();
    }
  }
};
//新增编辑的标识
const tags = ref("");
//新增
const addBtn = () => {
  tags.value = "0";
  dialog.height = 220;
  //获取上级菜单
  getParentList();
  //展示弹框
  onShow();
  //清空表单
  addRef.value?.resetFields();
};
//编辑
const editBtn = (row: Menu) => {
  tags.value = "1";
  console.log(row);
  dialog.height = 220;
  //获取上级菜单
  getParentList();
  // 数据回显
  nextTick(() => {
    Object.assign(addModel, row);
  });
  //显示弹框
  onShow();
  //清空表单
  addRef.value?.resetFields();
};
//确定
const commit = () => {
  addRef.value?.validate(async (valid) => {
    if (valid) {
      let res = null;
      if (tags.value == EditType.ADD) {
        res = await addApi(addModel);
      } else {
        res = await editApi(addModel);
      }
      console.log(res);
      if (res && res.code == 200) {
        ElMessage.success(res.msg);
        getList();
        onClose();
      }
    }
  });
};
onMounted(() => {
  getList();
});
</script>

<style scoped></style>

```



















#### 第53讲 广告管理图片上传制作

```js
https://element-plus.gitee.io/zh-CN/component/upload.html
```



##### 1、vite.config.ts添加如下

```js
define: {
    'process.env': {
      'BASE_API': "http://192.168.31.70:8089"
      // 'BASE_API':"http://localhost:8089"
    }
  },
```

##### 2、http.ts添加图片上传的方法

```js
//图片上传
upload<T = Result>(url: string, params?: object): Promise<T> {
    return this.instance.post(url, params, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
```

##### 3、api下新建img文件目录，并建index.ts

```js
import http from "@/http";
//图片上传
export const uploadImageApi = (parm:object)=>{
    return http.upload("/api/upload/uploadImage",parm)
}
```

##### 4、type下新建BaseType.ts

```js
//图片上传数据类型
export type NewType = {
    newImgUrl:Array<{url:string}>;
    deleteUrl:Array<{url:string}>;
}

```

##### 5、封装图片上传组件

```js
<template>
  <el-upload
    action="#"
    list-type="picture-card"
    :auto-upload="false"
    ref="uploadRef"
    :on-change="uploadFile"
    :on-remove="handleRemove"
    :file-list="fileList"
    :limit="3"
    :on-exceed="moreLimit"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>
  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>

<script setup lang="ts">
import { uploadImageApi } from "@/api/img/index";
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
import { NewType } from "@/type/BaseType";
import { ElMessage, UploadFile, UploadUserFile,UploadFiles } from "element-plus";
//注册事件
const emits = defineEmits(['getImg'])
//图片上传组件的ref属性
const uploadRef = ref();
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
type PropType = {
  fileList: UploadUserFile[];
  oldUrl: Array<{ url: string }>;
};
//接收父组件传递的参数
const props = withDefaults(defineProps<PropType>(), {
  fileList: () => [],
  oldUrl: () => [],
});
//返回给父组件的值
const newImgRes = ref<NewType>({
  newImgUrl: [],
  deleteUrl: [],
});

//删除图片
const handleRemove = (file: UploadFile) => {
  if(props.oldUrl.some(item => item.url === file.name)){
    newImgRes.value.deleteUrl.push({url:file.name})
    emits("getImg", newImgRes.value);
  }else{
    let images = newImgRes.value.newImgUrl.filter((item) => item.url != file.name);
    newImgRes.value.newImgUrl = images;
    emits("getImg", newImgRes.value);
  }
};
//文件个数超出
const moreLimit = (files: File[], uploadFiles: UploadFiles) => {
  ElMessage.warning("最多只能上传" + uploadFiles.length + "张图片!");
};
//上传数据提交
const uploadFile = async (file: any) => {
  //判断选择的图片是不是图片类型
  const typeArr = ["image/png", "image/gif", "image/jpeg", "image/jpg"];
  const isImg = typeArr.indexOf(file.raw.type) !== -1;
  const isMore3M = file.size / 1024 / 1024 < 3;
  if (!isImg) {
    ElMessage.warning("只能上传图片类型!");
    uploadRef.value?.clearFiles();
    return;
  }
  if (!isMore3M) {
    ElMessage.warning("图片大小不能超过3M!");
    uploadRef.value?.clearFiles();
    return;
  }
  //组装上传的数据
  const formData = new FormData();
  formData.append("file", file.raw);
  //提交数据
  const res = await uploadImageApi(formData)
  if(res && res.code == 200 && res.data){
    ElMessage.success('图片上传成功')
    file.name = process.env.BASE_API + res.data;
    //设置到返回子组件的数据里面
    newImgRes.value.newImgUrl.push({
      url:process.env.BASE_API + res.data
    })
    emits('getImg',newImgRes.value)
  }
};
//清空数据
const clearimg = ()=>{
  uploadRef.value?.clearFiles();
  newImgRes.value.deleteUrl = [];
  newImgRes.value.newImgUrl = [];
}
defineExpose({
  clearimg
})
</script>

<style scoped></style>

```

##### 3、图片上传使用

```js
<template>
  <el-main height="">
    <el-form :model="searchParm" ref="form" :inline="true" size="default">
      <el-form-item>
        <el-input
          placeholder="请输入标题"
          v-model="searchParm.title"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search">搜索</el-button>
        <el-button type="danger" plain icon="Close">重置</el-button>
        <el-button icon="Plus" type="primary" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 弹框 -->
    <SysDialog
      :title="dialog.title"
      :visible="dialog.visible"
      :width="dialog.width"
      :height="dialog.height"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <template v-slot:content>
        <el-form
          :model="addModel"
          ref="addRef"
          :rules="rules"
          label-width="80px"
          :inline="false"
          size="default"
        >
          <el-form-item label="标题">
            <el-input v-model="addModel.title"></el-input>
          </el-form-item>
          <el-form-item label="图片">
            <UploadImage
              ref="upImgRef"
              @getImg="getImg"
              :oldUrl="oldUrl"
              :fileList="fileList"
            ></UploadImage>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
  </el-main>
</template>

<script setup lang="ts">
import { reactive,ref } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import UploadImage from "@/components/UploadImage.vue";
import {NewType} from '@/type/BaseType'
import type {  UploadUserFile } from 'element-plus'
//图片上传的ref属性
const upImgRef = ref();
//图片初始值
const fileList = ref<Array<UploadUserFile>>([]);
//回显的图片
const oldUrl = ref<Array<{ url: string }>>([]);
//图片地址
const imgUrl = ref<Array<{ url: string }>>([]);
//获取弹框属性
const { dialog, onClose, onConfirm, onShow } = useDialog();
//搜索参数
const searchParm = reactive({
  title: "",
});
//表单绑定的对象
const addModel = reactive({
  banId: "",
  goodsId: "",
  title: "",
  images: "",
  status: "",
  orderNum: "",
});
//表单验证规则
const rules = reactive({});
//接收图片上传地址
const getImg = (img: NewType) => {
  console.log("999");
  console.log(img);
  imgUrl.value = oldUrl.value.concat(img.newImgUrl);
  if (img.deleteUrl.length > 0) {
    let newArr = imgUrl.value.filter(
      (x) => !img.deleteUrl.some((item) => x.url === item.url)
    );
    imgUrl.value = newArr;
  }
  // console.log(imgUrl.value)
  //把图片路径拼接为逗号分隔的字符串
  let url = "";
  for (let k = 0; k < imgUrl.value.length; k++) {
    url = url + imgUrl.value[k].url + ",";
  }
  addModel.images = url.substring(0, url.lastIndexOf(","));
  console.log(addModel.images);
};
//新增
const addBtn = () => {
  onShow();
};
</script>

<style scoped></style>

```











#### 第54讲 广告管理数据库设计与接口开发

##### 1、sql脚本

```js
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `sys_banner`;
CREATE TABLE `sys_banner`  (
  `ban_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '广告id',
  `goods_id` int(11) NULL DEFAULT NULL COMMENT '菜品id',
  `title` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '标题',
  `images` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '图片',
  `status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT ' 0:下架  1：上架',
  `order_num` int(11) NULL DEFAULT NULL COMMENT '序号',
  PRIMARY KEY (`ban_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

```

##### 2、新建实体类

```js
package com.itmk.web.sys_banner.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
@TableName("sys_banner")
public class SysBanner {
    @TableId(type = IdType.AUTO)
    private Long banId;
    private Long goodsId;
    private String title;
    private String images;
    private String status;
    private Integer orderNum;
}

```

```js
package com.itmk.web.sys_banner.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class BannerParm {
    private Long currentPage;
    private Long pageSize;
    private String title;
}

```

##### 3、新建mapper层

```js
package com.itmk.web.sys_banner.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itmk.web.sys_banner.entity.SysBanner;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface SysBannerMapper extends BaseMapper<SysBanner> {
}

```

映射文件

```js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.sys_banner.mapper.SysBannerMapper">

</mapper>
```

##### 4、新建service层

```js
package com.itmk.web.sys_banner.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itmk.web.sys_banner.entity.SysBanner;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface SysBannerService extends IService<SysBanner> {
}

```

实现类

```js
package com.itmk.web.sys_banner.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.sys_banner.entity.SysBanner;
import com.itmk.web.sys_banner.mapper.SysBannerMapper;
import com.itmk.web.sys_banner.service.SysBannerService;
import org.springframework.stereotype.Service;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Service
public class SysBannerServiceImpl extends ServiceImpl<SysBannerMapper, SysBanner> implements SysBannerService {
}

```

##### 5、新建控制器

```js
package com.itmk.web.sys_banner.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.goods.entity.Goods;
import com.itmk.web.goods.service.GoodsService;
import com.itmk.web.goods_category.entity.SelectType;
import com.itmk.web.sys_banner.entity.BannerParm;
import com.itmk.web.sys_banner.entity.SysBanner;
import com.itmk.web.sys_banner.service.SysBannerService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RequestMapping("/api/banner")
@RestController
public class SysBannerController {
    @Autowired
    private SysBannerService sysBannerService;
    @Autowired
    private GoodsService goodsService;

    //新增
    @PostMapping
    public ResultVo add(@RequestBody SysBanner sysBanner){
        if(sysBannerService.save(sysBanner)){
            return ResultUtils.success("新增成功!");
        }
        return ResultUtils.error("新增失败!");
    }

    //编辑
    @PutMapping
    public ResultVo edit(@RequestBody SysBanner sysBanner){
        if(sysBannerService.updateById(sysBanner)){
            return ResultUtils.success("编辑成功!");
        }
        return ResultUtils.error("编辑失败!");
    }

    //删除
    @DeleteMapping("/{banId}")
    public ResultVo delete(@PathVariable("banId") Long banId){
        if(sysBannerService.removeById(banId)){
            return ResultUtils.success("删除成功!");
        }
        return ResultUtils.error("删除失败!");
    }

     //列表
    @GetMapping("/list")
    public ResultVo list(BannerParm parm){
        //构造分页对象
        IPage<SysBanner> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        //构造查询条件
        QueryWrapper<SysBanner> query = new QueryWrapper<>();
        query.lambda().like(StringUtils.isNotEmpty(parm.getTitle()),SysBanner::getTitle,parm.getTitle())
        .orderByDesc(SysBanner::getOrderNum);
        IPage<SysBanner> list = sysBannerService.page(page, query);
        return ResultUtils.success("查询成功!",list);
    }

    //商品列表
    @GetMapping("/getGoods")
    public ResultVo getGoods(){
        //查询商品
        QueryWrapper<Goods> query = new QueryWrapper<>();
        query.lambda().eq(Goods::getStatus,"0").eq(Goods::getSellStatus,"0");
        List<Goods> list = goodsService.list(query);
        //组装select需要的数据格式
        List<SelectType> selectList = new ArrayList<>();
        for(int i=0;i<list.size();i++){
            SelectType type = new SelectType();
            type.setValue(list.get(i).getGoodsId());
            type.setLabel(list.get(i).getGoodsName());
            selectList.add(type);
        }
        return ResultUtils.success("查询成功",selectList);
    }
}

```















#### 第55讲 新增广告页面制作与对接

##### 1、api下新建banner目录，并建index.ts和BannerModel.ts

```js
import http from "@/http";
import {Banner} from './BannerModel'
export const getGoodsListApi = ()=>{
    return http.get("/api/banner/getGoods")
}
//新增
export const addCategoryApi = (parm:Banner)=>{
    return http.post("/api/banner",parm)
} 
```

BannerModel.ts

```js
//banner数据类型
export type Banner = {
    banId: string,
    goodsId: string,
    title: string,
    images: string,
    status: string,
    orderNum: string
}
```

##### 2、广告页面

```js
<template>
  <el-main height="">
    <el-form :model="searchParm" ref="form" :inline="true" size="default">
      <el-form-item>
        <el-input
          placeholder="请输入标题"
          v-model="searchParm.title"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search">搜索</el-button>
        <el-button type="danger" plain icon="Close">重置</el-button>
        <el-button icon="Plus" type="primary" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 弹框 -->
    <SysDialog
      :title="dialog.title"
      :visible="dialog.visible"
      :width="dialog.width"
      :height="dialog.height"
      @onClose="onClose"
      @onConfirm="commit"
    >
      <template v-slot:content>
        <el-form
          :model="addModel"
          ref="addRef"
          :rules="rules"
          label-width="80px"
          :inline="false"
          size="default"
        >
          <el-form-item prop="title" label="标题">
            <el-input v-model="addModel.title"></el-input>
          </el-form-item>
          <el-form-item prop="goodsId" label="商品">
            <el-select
              v-model="addModel.goodsId"
              class="m-2"
              placeholder="请选择商品"
              size="default"
              style="width: 100%;"
            >
              <el-option
                v-for="item in selectList"
                :key="item['value']"
                :label="item['label']"
                :value="item['value']"
              />
            </el-select>
          </el-form-item>
          <el-form-item prop="images" label="图片">
            <UploadImage
              ref="upImgRef"
              @getImg="getImg"
              :oldUrl="oldUrl"
              :fileList="fileList"
            ></UploadImage>
          </el-form-item>
          <el-form-item prop="orderNum" label="序号">
            <el-input v-model="addModel.orderNum"></el-input>
          </el-form-item>
          <el-form-item prop="status" label="状态:">
            <el-radio-group v-model="addModel.status">
              <el-radio :label="'0'">启用</el-radio>
              <el-radio :label="'1'">停用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
  </el-main>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import UploadImage from "@/components/UploadImage.vue";
import { NewType } from "@/type/BaseType";
import { ElMessage, type FormInstance, type UploadUserFile } from "element-plus";
import {getGoodsListApi,addCategoryApi} from '@/api/banner/index'
//表单ref属性
const addRef = ref<FormInstance>()
//图片上传的ref属性
const upImgRef = ref();
//图片初始值
const fileList = ref<Array<UploadUserFile>>([]);
//回显的图片
const oldUrl = ref<Array<{ url: string }>>([]);
//图片地址
const imgUrl = ref<Array<{ url: string }>>([]);
//获取弹框属性
const { dialog, onClose,  onShow } = useDialog();
//搜索参数
const searchParm = reactive({
  title: "",
});
//表单绑定的对象
const addModel = reactive({
  banId: "",
  goodsId: "",
  title: "",
  images: "",
  status: "",
  orderNum: "",
});
//表单验证规则
const rules = reactive({
  title:[
    {
      required:true,
      trigger:'change',
      message:'请填写标题'
    }
  ],
  goodsId:[
    {
      required:true,
      trigger:'change',
      message:'请选择商品'
    }
  ],
  images:[
    {
      required:true,
      trigger:'change',
      message:'请上传图片'
    }
  ],
  status:[
    {
      required:true,
      trigger:'change',
      message:'请选择状态'
    }
  ],
  orderNum:[
    {
      required:true,
      trigger:'change',
      message:'请填写序号'
    }
  ]
});
//接收图片上传地址
const getImg = (img: NewType) => {
  console.log("999");
  console.log(img);
  imgUrl.value = oldUrl.value.concat(img.newImgUrl);
  if (img.deleteUrl.length > 0) {
    let newArr = imgUrl.value.filter(
      (x) => !img.deleteUrl.some((item) => x.url === item.url)
    );
    imgUrl.value = newArr;
  }
  // console.log(imgUrl.value)
  //把图片路径拼接为逗号分隔的字符串
  let url = "";
  for (let k = 0; k < imgUrl.value.length; k++) {
    url = url + imgUrl.value[k].url + ",";
  }
  addModel.images = url.substring(0, url.lastIndexOf(","));
  console.log(addModel.images);
};
//新增
const addBtn = () => {
  dialog.width = 700;
  dialog.height = 400;
  // 获取商品数据
  getGoodsList();
  onShow();
};
//定义商品数据
const selectList = ref([])
//获取下拉商品列表
const getGoodsList = async()=>{
  let res = await getGoodsListApi()
  if(res && res.code == 200){
    selectList.value = res.data;
  }
}
//表单提交
const commit = ()=>{
  addRef.value?.validate(async(valid)=>{
    if(valid){
      let res = await addCategoryApi(addModel)
      if(res && res.code == 200){
        ElMessage.success(res.msg)
        onClose()
      }
    }
  })
}
</script>

<style scoped></style>

```

















#### 第56讲 广告列表页面制作

##### 1、api/banner/index.ts

```js
import http from "@/http";
import {Banner,BannerListParm} from './BannerModel'
export const getGoodsListApi = ()=>{
    return http.get("/api/banner/getGoods")
}
//新增
export const addCategoryApi = (parm:Banner)=>{
    return http.post("/api/banner",parm)
} 
//列表
export const getListApi = (parm:BannerListParm)=>{
    return http.get("/api/banner/list",parm)
}
//上架下架
export const upandownApi = (parm:Banner)=>{
    return http.post("/api/banner/upandown",parm)
} 
```

##### 2、SysBannerController控制器

```js
package com.itmk.web.sys_banner.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.goods.entity.Goods;
import com.itmk.web.goods.service.GoodsService;
import com.itmk.web.goods_category.entity.SelectType;
import com.itmk.web.sys_banner.entity.BannerParm;
import com.itmk.web.sys_banner.entity.SysBanner;
import com.itmk.web.sys_banner.service.SysBannerService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RequestMapping("/api/banner")
@RestController
public class SysBannerController {
    @Autowired
    private SysBannerService sysBannerService;
    @Autowired
    private GoodsService goodsService;

    //新增
    @PostMapping
    public ResultVo add(@RequestBody SysBanner sysBanner){
        if(sysBannerService.save(sysBanner)){
            return ResultUtils.success("新增成功!");
        }
        return ResultUtils.error("新增失败!");
    }

    //编辑
    @PutMapping
    public ResultVo edit(@RequestBody SysBanner sysBanner){
        if(sysBannerService.updateById(sysBanner)){
            return ResultUtils.success("编辑成功!");
        }
        return ResultUtils.error("编辑失败!");
    }

    //删除
    @DeleteMapping("/{banId}")
    public ResultVo delete(@PathVariable("banId") Long banId){
        if(sysBannerService.removeById(banId)){
            return ResultUtils.success("删除成功!");
        }
        return ResultUtils.error("删除失败!");
    }

     //列表
    @GetMapping("/list")
    public ResultVo list(BannerParm parm){
        //构造分页对象
        IPage<SysBanner> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        //构造查询条件
        QueryWrapper<SysBanner> query = new QueryWrapper<>();
        query.lambda().like(StringUtils.isNotEmpty(parm.getTitle()),SysBanner::getTitle,parm.getTitle())
        .orderByDesc(SysBanner::getOrderNum);
        IPage<SysBanner> list = sysBannerService.page(page, query);
        return ResultUtils.success("查询成功!",list);
    }

    //商品列表
    @GetMapping("/getGoods")
    public ResultVo getGoods(){
        //查询商品
        QueryWrapper<Goods> query = new QueryWrapper<>();
        query.lambda().eq(Goods::getStatus,"0").eq(Goods::getSellStatus,"0");
        List<Goods> list = goodsService.list(query);
        //组装select需要的数据格式
        List<SelectType> selectList = new ArrayList<>();
        for(int i=0;i<list.size();i++){
            SelectType type = new SelectType();
            type.setValue(list.get(i).getGoodsId());
            type.setLabel(list.get(i).getGoodsName());
            selectList.add(type);
        }
        return ResultUtils.success("查询成功",selectList);
    }

    //上架下架
    @PostMapping("/upandown")
    public ResultVo upandown(@RequestBody SysBanner sysBanner){
        UpdateWrapper<SysBanner> query = new UpdateWrapper<>();
            query.lambda().set(SysBanner::getStatus,sysBanner.getStatus())
                    .eq(SysBanner::getBanId,sysBanner.getBanId());
        if(sysBannerService.update(query)){
            return ResultUtils.success("设置成功!");
        }
        return ResultUtils.error("设置失败!");
    }
}

```

##### 3、页面

```js
<template>
  <el-main height="">
    <el-form :model="searchParm" ref="form" :inline="true" size="default">
      <el-form-item>
        <el-input
          placeholder="请输入标题"
          v-model="searchParm.title"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search" @click="searchBtn">搜索</el-button>
        <el-button type="danger" @click="resetBtn" plain icon="Close">重置</el-button>
        <el-button icon="Plus" type="primary" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格数据 -->
    <el-table :height="tableHeight" :data="tableList" border stripe>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="images" label="图片">
        <template #default="scope">
          <el-image
            v-if="scope.row.images"
            style="width: 100px; height: 60px"
            :src="scope.row.images.split(',')[0]"
          />
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-switch
            v-model="scope.row.status"
            :active-value="'0'"
            :inactive-value="'1'"
            :before-change="beforeStatus"
            @change="changeStatus(scope.row.status, scope.row.banId)"
          />
        </template>
      </el-table-column>
      <el-table-column prop="orderNum" label="序号"></el-table-column>
      <el-table-column  label="操作" align="center" width="220">
        <el-button icon="Edit" type="primary" size="default" @click="">编辑</el-button>
        <el-button icon="Delete" type="danger" size="default" @click="">删除</el-button>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="searchParm.currentPage"
      :page-sizes="[10,20, 40, 80, 100]"
      :page-size="searchParm.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="searchParm.total" background>
    </el-pagination>
    
    <!-- 弹框 -->
    <SysDialog
      :title="dialog.title"
      :visible="dialog.visible"
      :width="dialog.width"
      :height="dialog.height"
      @onClose="onClose"
      @onConfirm="commit"
    >
      <template v-slot:content>
        <el-form
          :model="addModel"
          ref="addRef"
          :rules="rules"
          label-width="80px"
          :inline="false"
          size="default"
        >
          <el-form-item prop="title" label="标题">
            <el-input v-model="addModel.title"></el-input>
          </el-form-item>
          <el-form-item prop="goodsId" label="商品">
            <el-select
              v-model="addModel.goodsId"
              class="m-2"
              placeholder="请选择商品"
              size="default"
              style="width: 100%;"
            >
              <el-option
                v-for="item in selectList"
                :key="item['value']"
                :label="item['label']"
                :value="item['value']"
              />
            </el-select>
          </el-form-item>
          <el-form-item prop="images" label="图片">
            <UploadImage
              ref="upImgRef"
              @getImg="getImg"
              :oldUrl="oldUrl"
              :fileList="fileList"
            ></UploadImage>
          </el-form-item>
          <el-form-item prop="orderNum" label="序号">
            <el-input v-model="addModel.orderNum"></el-input>
          </el-form-item>
          <el-form-item prop="status" label="状态:">
            <el-radio-group v-model="addModel.status">
              <el-radio :label="'0'">启用</el-radio>
              <el-radio :label="'1'">停用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
  </el-main>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import UploadImage from "@/components/UploadImage.vue";
import { NewType } from "@/type/BaseType";
import { ElMessage, type FormInstance, type UploadUserFile } from "element-plus";
import {getGoodsListApi,addCategoryApi,getListApi,upandownApi} from '@/api/banner/index'
import useInstance from "@/hooks/useInstance";
const {global} = useInstance()
//表单ref属性
const addRef = ref<FormInstance>()
//图片上传的ref属性
const upImgRef = ref();
//图片初始值
const fileList = ref<Array<UploadUserFile>>([]);
//回显的图片
const oldUrl = ref<Array<{ url: string }>>([]);
//图片地址
const imgUrl = ref<Array<{ url: string }>>([]);
//获取弹框属性
const { dialog, onClose,  onShow } = useDialog();
//搜索参数
const searchParm = reactive({
  title: "",
  currentPage:1,
  pageSize:10,
  total:0
});
//表单绑定的对象
const addModel = reactive({
  banId: "",
  goodsId: "",
  title: "",
  images: "",
  status: "",
  orderNum: "",
});
//表单验证规则
const rules = reactive({
  title:[
    {
      required:true,
      trigger:'change',
      message:'请填写标题'
    }
  ],
  goodsId:[
    {
      required:true,
      trigger:'change',
      message:'请选择商品'
    }
  ],
  images:[
    {
      required:true,
      trigger:'change',
      message:'请上传图片'
    }
  ],
  status:[
    {
      required:true,
      trigger:'change',
      message:'请选择状态'
    }
  ],
  orderNum:[
    {
      required:true,
      trigger:'change',
      message:'请填写序号'
    }
  ]
});
//接收图片上传地址
const getImg = (img: NewType) => {
  console.log("999");
  console.log(img);
  imgUrl.value = oldUrl.value.concat(img.newImgUrl);
  if (img.deleteUrl.length > 0) {
    let newArr = imgUrl.value.filter(
      (x) => !img.deleteUrl.some((item) => x.url === item.url)
    );
    imgUrl.value = newArr;
  }
  // console.log(imgUrl.value)
  //把图片路径拼接为逗号分隔的字符串
  let url = "";
  for (let k = 0; k < imgUrl.value.length; k++) {
    url = url + imgUrl.value[k].url + ",";
  }
  addModel.images = url.substring(0, url.lastIndexOf(","));
  console.log(addModel.images);
};
//新增
const addBtn = () => {
  dialog.width = 700;
  dialog.height = 400;
  // 获取商品数据
  getGoodsList();
  onShow();
};
//定义商品数据
const selectList = ref([])
//获取下拉商品列表
const getGoodsList = async()=>{
  let res = await getGoodsListApi()
  if(res && res.code == 200){
    selectList.value = res.data;
  }
}
//表单提交
const commit = ()=>{
  addRef.value?.validate(async(valid)=>{
    if(valid){
      let res = await addCategoryApi(addModel)
      if(res && res.code == 200){
        ElMessage.success(res.msg)
        onClose()
      }
    }
  })
}
//表格数据
const tableList  =ref([])
//获取列表
const getList = async()=>{
  let res = await getListApi(searchParm)
  if(res && res.code == 200){
    tableList.value = res.data.records;
    searchParm.total = res.data.total;
  }
}
//上架下架操作之前的事件
const beforeStatus = async () => {
  let confirm = await global.$myconfirm("确定上下架吗？");
  return new Promise((resolve, reject) => {
    if (confirm) {
      return resolve(confirm);
    } else {
      return reject(confirm);
    }
  });
};
//上下架操作
const changeStatus = async (type: string, goodsId: string) => {
  console.log(type);
  console.log(goodsId);
  let res = await upandownApi({
    banId: goodsId,
    status: type,
  });
  if (res && res.code == 200) {
    getGoodsList();
  }
};
//页容量改变时触发
const sizeChange = (size: number) => {
  searchParm.pageSize = size;
  getList();
};
//页数改变时触发
const currentChange = (page: number) => {
  searchParm.currentPage = page;
  getList();
};
//重置
const resetBtn = () => {
  searchParm.title = "";
  getList();
};
//搜索
const searchBtn = () => {
  getList();
};
//表格高度
const tableHeight = ref(0)
onMounted(()=>{
  getList()
  nextTick(()=>{
    tableHeight.value = window.innerHeight - 220
  })
})
</script>

<style scoped></style>

```

















#### 第57讲 广告编辑、删除接口对接

##### 1、api/banner/index.ts

```js
import http from "@/http";
import {Banner,BannerListParm} from './BannerModel'
export const getGoodsListApi = ()=>{
    return http.get("/api/banner/getGoods")
}
//新增
export const addCategoryApi = (parm:Banner)=>{
    return http.post("/api/banner",parm)
} 
//列表
export const getListApi = (parm:BannerListParm)=>{
    return http.get("/api/banner/list",parm)
}
//上架下架
export const upandownApi = (parm:Banner)=>{
    return http.post("/api/banner/upandown",parm)
} 
//编辑
export const editApi = (parm:Banner)=>{
    return http.put("/api/banner",parm)
} 
//删除
export const deleteApi = (parm:Banner)=>{
    return http.delete(`/api/banner/${parm.banId}`)
} 
```

##### 2、页面

```js
<template>
  <el-main height="">
    <el-form :model="searchParm" ref="form" :inline="true" size="default">
      <el-form-item>
        <el-input
          placeholder="请输入标题"
          v-model="searchParm.title"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search" @click="searchBtn">搜索</el-button>
        <el-button type="danger" @click="resetBtn" plain icon="Close"
          >重置</el-button
        >
        <el-button icon="Plus" type="primary" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格数据 -->
    <el-table :height="tableHeight" :data="tableList" border stripe>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="images" label="图片">
        <template #default="scope">
          <el-image
            v-if="scope.row.images"
            style="width: 100px; height: 60px"
            :src="scope.row.images.split(',')[0]"
          />
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-switch
            v-model="scope.row.status"
            :active-value="'0'"
            :inactive-value="'1'"
            :before-change="beforeStatus"
            @change="changeStatus(scope.row.status, scope.row.banId)"
          />
        </template>
      </el-table-column>
      <el-table-column prop="orderNum" label="序号"></el-table-column>
      <el-table-column label="操作" align="center" width="220">
        <template #default="scope">
          <el-button
            @click="editBtn(scope.row)"
            icon="Edit"
            type="primary"
            size="default"
            >编辑</el-button
          >
          <el-button
            @click="deleteBtn(scope.row)"
            icon="Delete"
            type="danger"
            size="default"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="searchParm.currentPage"
      :page-sizes="[10, 20, 40, 80, 100]"
      :page-size="searchParm.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="searchParm.total"
      background
    >
    </el-pagination>

    <!-- 弹框 -->
    <SysDialog
      :title="dialog.title"
      :visible="dialog.visible"
      :width="dialog.width"
      :height="dialog.height"
      @onClose="onClose"
      @onConfirm="commit"
    >
      <template v-slot:content>
        <el-form
          :model="addModel"
          ref="addRef"
          :rules="rules"
          label-width="80px"
          :inline="false"
          size="default"
        >
          <el-form-item prop="title" label="标题">
            <el-input v-model="addModel.title"></el-input>
          </el-form-item>
          <el-form-item prop="goodsId" label="商品">
            <el-select
              v-model="addModel.goodsId"
              class="m-2"
              placeholder="请选择商品"
              size="default"
              style="width: 100%"
            >
              <el-option
                v-for="item in selectList"
                :key="item['value']"
                :label="item['label']"
                :value="item['value']"
              />
            </el-select>
          </el-form-item>
          <el-form-item prop="images" label="图片">
            <UploadImage
              ref="upImgRef"
              @getImg="getImg"
              :oldUrl="oldUrl"
              :fileList="fileList"
            ></UploadImage>
          </el-form-item>
          <el-form-item prop="orderNum" label="序号">
            <el-input v-model="addModel.orderNum"></el-input>
          </el-form-item>
          <el-form-item prop="status" label="状态:">
            <el-radio-group v-model="addModel.status">
              <el-radio :label="'0'">启用</el-radio>
              <el-radio :label="'1'">停用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
  </el-main>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import UploadImage from "@/components/UploadImage.vue";
import { NewType } from "@/type/BaseType";
import {
  ElMessage,
  type FormInstance,
  type UploadUserFile,
} from "element-plus";
import {
  getGoodsListApi,
  addCategoryApi,
  getListApi,
  upandownApi,
  editApi,
  deleteApi,
} from "@/api/banner/index";
import useInstance from "@/hooks/useInstance";
import { Banner } from "@/api/banner/BannerModel";
import { EditType } from "@/type/BaseEnum";
const { global } = useInstance();
//表单ref属性
const addRef = ref<FormInstance>();
//图片上传的ref属性
const upImgRef = ref();
//图片初始值
const fileList = ref<Array<UploadUserFile>>([]);
//回显的图片
const oldUrl = ref<Array<{ url: string }>>([]);
//图片地址
const imgUrl = ref<Array<{ url: string }>>([]);
//获取弹框属性
const { dialog, onClose, onShow } = useDialog();
//搜索参数
const searchParm = reactive({
  title: "",
  currentPage: 1,
  pageSize: 10,
  total: 0,
});
//表单绑定的对象
const addModel = reactive({
  banId: "",
  goodsId: "",
  title: "",
  images: "",
  status: "",
  orderNum: "",
});
//表单验证规则
const rules = reactive({
  title: [
    {
      required: true,
      trigger: "change",
      message: "请填写标题",
    },
  ],
  goodsId: [
    {
      required: true,
      trigger: "change",
      message: "请选择商品",
    },
  ],
  images: [
    {
      required: true,
      trigger: "change",
      message: "请上传图片",
    },
  ],
  status: [
    {
      required: true,
      trigger: "change",
      message: "请选择状态",
    },
  ],
  orderNum: [
    {
      required: true,
      trigger: "change",
      message: "请填写序号",
    },
  ],
});
//接收图片上传地址
const getImg = (img: NewType) => {
  console.log("999");
  console.log(img);
  imgUrl.value = oldUrl.value.concat(img.newImgUrl);
  if (img.deleteUrl.length > 0) {
    let newArr = imgUrl.value.filter(
      (x) => !img.deleteUrl.some((item) => x.url === item.url)
    );
    imgUrl.value = newArr;
  }
  // console.log(imgUrl.value)
  //把图片路径拼接为逗号分隔的字符串
  let url = "";
  for (let k = 0; k < imgUrl.value.length; k++) {
    url = url + imgUrl.value[k].url + ",";
  }
  addModel.images = url.substring(0, url.lastIndexOf(","));
  console.log(addModel.images);
};

//定义商品数据
const selectList = ref([]);
//获取下拉商品列表
const getGoodsList = async () => {
  let res = await getGoodsListApi();
  if (res && res.code == 200) {
    selectList.value = res.data;
  }
};

//表格数据
const tableList = ref([]);
//获取列表
const getList = async () => {
  let res = await getListApi(searchParm);
  if (res && res.code == 200) {
    tableList.value = res.data.records;
    searchParm.total = res.data.total;
  }
};
//上架下架操作之前的事件
const beforeStatus = async () => {
  let confirm = await global.$myconfirm("确定上下架吗？");
  return new Promise((resolve, reject) => {
    if (confirm) {
      return resolve(confirm);
    } else {
      return reject(confirm);
    }
  });
};
//上下架操作
const changeStatus = async (type: string, goodsId: string) => {
  console.log(type);
  console.log(goodsId);
  let res = await upandownApi({
    banId: goodsId,
    status: type,
  });
  if (res && res.code == 200) {
    getGoodsList();
  }
};
//页容量改变时触发
const sizeChange = (size: number) => {
  searchParm.pageSize = size;
  getList();
};
//页数改变时触发
const currentChange = (page: number) => {
  searchParm.currentPage = page;
  getList();
};
//重置
const resetBtn = () => {
  searchParm.title = "";
  getList();
};
//搜索
const searchBtn = () => {
  getList();
};
//表格高度
const tableHeight = ref(0);
//表示
const tags = ref("");
//新增
const addBtn = () => {
  //清空图片数据
  imgUrl.value = [];
  oldUrl.value = [];
  fileList.value = [];
  dialog.width = 700;
  dialog.height = 400;
  tags.value = "0";
  dialog.width = 700;
  dialog.height = 400;
  // 获取商品数据
  getGoodsList();
  onShow();
};
//编辑
const editBtn = (row: Banner) => {
  tags.value = "1";
  //清空图片数据
  imgUrl.value = [];
  oldUrl.value = [];
  fileList.value = [];
  dialog.width = 700;
  dialog.height = 400;
  // 获取商品数据
  getGoodsList();
  console.log(row);
  onShow();
  // 数据回显
  nextTick(() => {
    Object.assign(addModel, row);
    //图片回显
    if (addModel.images) {
      //逗号分隔转数组
      let imgs = addModel.images.split(",");
      for (let i = 0; i < imgs.length; i++) {
        let img = { name: "", url: "" };
        img.name = imgs[i];
        img.url = imgs[i];
        fileList.value.push(img);
        oldUrl.value.push({ url: imgs[i] });
      }
    }
  });
  //清空表单
  addRef.value?.resetFields();
};
//删除
const deleteBtn = async (row: Banner) => {
  console.log(row);
  let confirm = await global.$myconfirm("确实删除该数据吗?");
  if (confirm) {
    let res = await deleteApi(row);
    if (res && res.code == 200) {
      ElMessage.success(res.msg);
      getList();
    }
  }
};
//表单提交
const commit = () => {
  addRef.value?.validate(async (valid) => {
    if (valid) {
      let res = null;
      if (tags.value == EditType.ADD) {
        res = await addCategoryApi(addModel);
      } else {
        res = await editApi(addModel);
      }
      if (res && res.code == 200) {
        ElMessage.success(res.msg);
        //清空图片
        upImgRef.value.clearimg();
        getList();
        onClose();
      }
    }
  });
};
onMounted(() => {
  getList();
  nextTick(() => {
    tableHeight.value = window.innerHeight - 220;
  });
});
</script>

<style scoped></style>

```

















#### 第58讲 管理员菜单表设计与接口开发

##### 1、sql语句

```js
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `user_menu`;
CREATE TABLE `user_menu`  (
  `user_menu_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户id',
  `menu_id` int(11) NULL DEFAULT NULL COMMENT '菜单id',
  PRIMARY KEY (`user_menu_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

```

##### 2、实体类

```js
package com.itmk.web.user_menu.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
@TableName("user_menu")
public class UserMenu {
    @TableId(type = IdType.AUTO)
    private Long userMenuId;
    private Long userId;
    private Long menuId;
}

```

```js
package com.itmk.web.sys_user.entity;

import lombok.Data;

import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class AssignParm {
    private Long assId;
    private List<Long> list;
}

```

##### 3、新建mapper层

```js
package com.itmk.web.user_menu.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itmk.web.user_menu.entity.UserMenu;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface UserMenuMapper extends BaseMapper<UserMenu> {
    boolean saveMenu(@Param("useId") Long userId, @Param("menuIds")List<Long> menuIds);
}

```

UserMenuMapper.xml映射文件

```js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.user_menu.mapper.UserMenuMapper">
    <insert id="saveMenu">
        insert into user_menu(user_id,menu_id) values
        <foreach collection="menuIds" separator="," item="item" index="index">
            (#{userId},#{item})
        </foreach>
    </insert>
</mapper>
```

##### 4、新建service层

```js
package com.itmk.web.user_menu.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itmk.web.sys_user.entity.AssignParm;
import com.itmk.web.user_menu.entity.UserMenu;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface UserMenuService extends IService<UserMenu> {
    void saveMenu(AssignParm parm);
}

```

实现类

```js
package com.itmk.web.user_menu.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.sys_user.entity.AssignParm;
import com.itmk.web.user_menu.entity.UserMenu;
import com.itmk.web.user_menu.mapper.UserMenuMapper;
import com.itmk.web.user_menu.service.UserMenuService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Service
public class UserMenuServiceImpl extends ServiceImpl<UserMenuMapper, UserMenu> implements UserMenuService {

    @Override
    @Transactional
    public void saveMenu(AssignParm parm) {
        //先删除，再插入
        //1、删除
        QueryWrapper<UserMenu> query = new QueryWrapper<>();
        query.lambda().eq(UserMenu::getUserId,parm.getAssId());
        int delete = this.baseMapper.delete(query);
        //2、删除成功，再插入
        if(delete > 0){
            this.baseMapper.saveMenu(parm.getAssId(),parm.getList());
        }
    }
}

```

















#### 第59讲 登录和验证码接口开发

##### 1、itmk-base-web.pom.xml下添加如下依赖

```js
<!--图片验证码-->
<dependency>
    <groupId>com.github.penggle</groupId>
    <artifactId>kaptcha</artifactId>
</dependency>
```

##### 2、后端接口src的config下新建imagecode包，创建ImageConfig验证码验配置类

```js
package com.itmk.config.imagecode;

/**
 * @Author java实战基地
 * @Version 2383404558
 * 验证码配置类
 */

import com.google.code.kaptcha.Constants;
import com.google.code.kaptcha.impl.DefaultKaptcha;
import com.google.code.kaptcha.util.Config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Properties;

/**
 * 验证码配置类
 */
@Configuration
public class ImageConfig {
    @Bean
    public DefaultKaptcha getDefaultKaptcha(){
        DefaultKaptcha defaultKaptcha = new DefaultKaptcha();
        Properties properties = new Properties();
        //验证码是否有边框
        properties.setProperty(Constants.KAPTCHA_BORDER, "yes");
        //边框颜色
        properties.setProperty(Constants.KAPTCHA_BORDER_COLOR, "105,179,90");
        //字体颜色
        properties.setProperty(Constants.KAPTCHA_TEXTPRODUCER_FONT_COLOR, "blue");
        //验证码图片宽度
        properties.setProperty(Constants.KAPTCHA_IMAGE_WIDTH, "200");
        //验证码图片高度
        properties.setProperty(Constants.KAPTCHA_IMAGE_HEIGHT, "36");
        //生成验证码的字符
        properties.setProperty(Constants.KAPTCHA_TEXTPRODUCER_CHAR_STRING, "0123456789");
        //去掉干扰线
        properties.setProperty(Constants.KAPTCHA_NOISE_IMPL,"com.google.code.kaptcha.impl.NoNoise");
        //字体大小
        properties.setProperty(Constants.KAPTCHA_TEXTPRODUCER_FONT_SIZE, "34");
        //字体样式
        properties.setProperty(Constants.KAPTCHA_TEXTPRODUCER_FONT_NAMES, "楷体");
        //验证码位数
        properties.setProperty(Constants.KAPTCHA_TEXTPRODUCER_CHAR_LENGTH, "4");
        // 图片效果
        properties.setProperty(Constants.KAPTCHA_OBSCURIFICATOR_IMPL, "com.google.code.kaptcha.impl.ShadowGimpy");
        Config config = new Config(properties);
        defaultKaptcha.setConfig(config);
        return defaultKaptcha;
    }
}

```

##### 3、SysUserController控制器添加imageCode()和login()方法

```js
package com.itmk.web.sys_user.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.google.code.kaptcha.impl.DefaultKaptcha;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.sys_user.entity.LoginParm;
import com.itmk.web.sys_user.entity.PageParm;
import com.itmk.web.sys_user.entity.SysUser;
import com.itmk.web.sys_user.service.SysUserService;
import com.itmk.web.wx_user.entity.LoginVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;
import sun.misc.BASE64Encoder;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

/**
 * @Author java实战基地
 * @Version 2383404558
 * /api/sysUser/getList
 */
@RestController
@RequestMapping("/api/sysUser")
public class SysUserController {
    @Autowired
    private SysUserService sysUserService;
    @Autowired
    private DefaultKaptcha defaultKaptcha;

    //新增
    @PostMapping
    public ResultVo add(@RequestBody SysUser sysUser) {
        if (sysUserService.save(sysUser)) {
            return ResultUtils.success("新增成功!");
        }
        return ResultUtils.error("新增失败!");
    }

    //编辑
    @PutMapping
    public ResultVo edit(@RequestBody SysUser sysUser) {
        if (sysUserService.updateById(sysUser)) {
            return ResultUtils.success("编辑成功!");
        }
        return ResultUtils.error("编辑失败!");
    }

    //删除
    @DeleteMapping("/{userId}")
    public ResultVo delete(@PathVariable("userId") Long userId) {
        if (sysUserService.removeById(userId)) {
            return ResultUtils.success("删除成功!");
        }
        return ResultUtils.error("删除失败!");
    }

    //列表
    @GetMapping("/getList")
    public ResultVo getList(PageParm parm) {
        //构造查询条件
        QueryWrapper<SysUser> query = new QueryWrapper<>();
        query.lambda().like(StringUtils.isNotEmpty(parm.getNickName()), SysUser::getNickName, parm.getNickName());
        //构造分页对象
        IPage<SysUser> page = new Page<>(parm.getCurrentPage(), parm.getPageSize());
        //查询
        IPage<SysUser> list = sysUserService.page(page, query);
        return ResultUtils.success("查询成功", list);
    }

    //生成验证码
    @PostMapping("/image")
    public ResultVo imageCode(HttpServletRequest request) {
        //生成验证码 4562
        String text = defaultKaptcha.createText();
        //验证码存到session
        HttpSession session = request.getSession();
        session.setAttribute("code", text);
        //生成图片,转换为base64
        BufferedImage bufferedImage = defaultKaptcha.createImage(text);
        ByteArrayOutputStream outputStream = null;
        try {
            outputStream = new ByteArrayOutputStream();
            ImageIO.write(bufferedImage, "jpg", outputStream);
            BASE64Encoder encoder = new BASE64Encoder();
            String base64 = encoder.encode(outputStream.toByteArray());
            String captchaBase64 = "data:image/jpeg;base64," + base64.replaceAll("\r\n", "");
            ResultVo result = new ResultVo("生成成功", 200, captchaBase64);
            return result;
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (outputStream != null) {
                    outputStream.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    //登录
    @PostMapping("/login")
    public ResultVo login(@RequestBody LoginParm parm,HttpServletRequest request){
        //获取sesson里面的code验证码
        HttpSession session = request.getSession();
        String code = (String)session.getAttribute("code");
        //获取前端传递过来的验证码
        String codeParm = parm.getCode();
        if(StringUtils.isEmpty(code)){
            return ResultUtils.error("验证码过期!");
        }
        //对比验证码
        if(!codeParm.equals(code)){
            return ResultUtils.error("验证码错误!");
        }
        //验证用户信息
        QueryWrapper<SysUser> query = new QueryWrapper<>();
        query.lambda().eq(SysUser::getUsername,parm.getUsername())
                .eq(SysUser::getPassword, DigestUtils.md5DigestAsHex(parm.getPassword().getBytes()));
        SysUser user = sysUserService.getOne(query);
        if(user == null){
            return ResultUtils.error("用户名或者密码错误!");
        }
        if(user.getStatus().equals("1")){
            return ResultUtils.error("账户被停用，请联系管理员!");
        }
        //返回登录信息
        LoginVo vo = new LoginVo();
        vo.setUserId(user.getUserId());
        vo.setNickName(user.getNickName());
        return ResultUtils.success("登录成功",vo);
    }
}

```

##### 4、参数接收实体类

```js
package com.itmk.web.sys_user.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class LoginParm {
    private String username;
    private String password;
    private String code;
}

```

```js
package com.itmk.web.sys_user.entity;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class LoginVo {
    private Long userId;
    private String nickName;
}

```















#### 第60讲 用户登录页面制作

##### 1、api/user/index.ts

```js
import http from "@/http";
import { ListParm, User,LoginParm } from "./UserModel";
//新增
export const addAdminUserApi = (parm:User)=>{
    return http.post("/api/sysUser",parm)
} 
//列表
export const getListApi = (parm:ListParm)=>{
    return http.get("/api/sysUser/getList",parm)
}
//编辑
export const editApi = (parm:User)=>{
    return http.put("/api/sysUser",parm)
}
//删除
export const deleteApi = (userId:string)=>{
    return http.delete(`/api/sysUser/${userId}`)
}
//验证码
export const imageApi = ()=>{
    return http.post("/api/sysUser/image")
} 
//登录
export const lgoinApi = (parm:LoginParm)=>{
    return http.post("/api/sysUser/login",parm)
} 
```

UserModel.ts

```js
//定义用户的数据类型:interface 和 type 
export type User = {
    userId:string,
    username:string,
    password:string,
    nickName:string,
    phone:string,
    sex:string,
    status:string
}
//定义列表查询的参数
export type ListParm = {
    currentPage:number,
    pageSize:number,
    nickName:string,
    total?:number
}
//登录参数
export type LoginParm = {
    username:string,
    password:string,
    code:string
   
}
```

##### 2、login.vue页面

```js
<template>
  <div class="logincontainer">
    <el-form
      class="loginform"
      :model="loginModel"
      ref="form"
      :rules="rules"
      :inline="false"
      size="large"
    >
      <el-form-item>
        <div class="logintitle">系统登录</div>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          placeholder="请输入账户"
          v-model="loginModel.username"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
        type="password"
          placeholder="请输入密码"
          v-model="loginModel.password"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-row :gutter="20">
          <el-col :span="16" :offset="0">
            <el-input
              placeholder="请输入验证码"
              v-model="loginModel.code"
            ></el-input>
          </el-col>
          <el-col :span="8" :offset="0">
            <img @click="getImg" class="image" :src="imgsrc" />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-row style="width: 100%;">
          <el-col  style="padding-right: 10px; padding-left: 0px" :span="12" :offset="0">
            <el-button style="width: 100%;" type="primary" size="large" @click="commit">登录</el-button>       
          </el-col>
          <el-col style="padding-right: 0px; padding-left: 10px" :span="12" :offset="0">
            <el-button style="width: 100%;" type="primary" size="large" @click="">重置</el-button> 
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { FormInstance } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import {imageApi,lgoinApi} from '@/api/user/index'
import {userStore} from '@/store/user/index'
import { useRouter } from "vue-router";
const router = useRouter()
const store = userStore()
//验证码
const imgsrc = ref('')
//表单的ref属性
const form = ref<FormInstance>();
//表单绑定的对象
const loginModel = reactive({
  username: "",
  password: "",
  code: "",
});
//表单验证规则
const rules = reactive({
    username:[{required:true,message:'请填写账户',trigger:'change'}],
    password:[{required:true,message:'请填写密码',trigger:'change'}],
    code:[{required:true,message:'请填写验证码',trigger:'change'}]
});
//获取验证码
const getImg = async()=>{
    let res = await imageApi()
    if(res && res.code == 200){
        console.log(res)
        imgsrc.value = res.data;
    }
}
//登录提交
const commit = ()=>{
    form.value?.validate(async(valid)=>{
        if(valid){
            let res = await lgoinApi(loginModel)
            console.log(res)
            store.setUserId(res.data.userId)
            router.push({path:'/home'})
        }
    })
}
onMounted(()=>{
    getImg()
})
</script>

<style lang="scss" scoped>
.logincontainer {
  height: 100%;
  background-color: #fff;
  background-image: url("../../assets/login.png");
  display: flex;
  justify-content: center;
  align-items: center;
  .loginform {
    height: 320px;
    width: 420px;
    padding: 20px 35px;
    border-radius: 10px;
    background-color: #fff;
    .logintitle {
      display: flex;
      justify-content: center;
      color: #606266;
      width: 100%;
      font-size: 24px;
      font-weight: 600;
    }
    .image{
        height: 40px;
        width: 100%;
        cursor: pointer;
    }
  }
}
</style>

```

##### 3、http.ts添加如下

```js
withCredentials: true //解决sesson不一致的问题
```

##### 4、vite.config.ts地址改为localhost

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', //解决控制台 ：Network: use --host to expose
    port: 8080, //配置端口号
    hmr: true, //开启热更新
    open: true, //启动在浏览器打开
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8089/',	//接口地址
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   },
    // }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  define: {
    'process.env': {
      // 'BASE_API': "http://192.168.31.70:8089"
      'BASE_API':"http://localhost:8089"
    }
  }
})

```

##### 5、路由配置

```js
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect:'login',
    name: "/"
  },
  {
    path: "/login",
    component: () => import('@/views/login/login.vue'),
    name: "login"
  },
  {
    path: '/home',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/layout/dashboard.vue'),
        name: 'dashboard',
        meta: {
          title: '首页',
          icon: '#icondashboard'
        }
      },
      {
        path: "/adminUser",
        component: () => import('@/views/system/AdminUser.vue'),
        name: "adminUser",
        meta: {
          title: "管理员管理",
          icon: "UserFilled",
          roles: ["sys:adminUser"],
        }
      },
      {
        path: "/userList",
        component: () => import('@/views/system/UserList.vue'),
        name: "userList",
        meta: {
          title: "用户管理",
          icon: "Wallet",
          roles: ["sys:userList"],
        }
      },
      {
        path: "/menuList",
        component: () => import('@/views/menu/Index.vue'),
        name: "menuList",
        meta: {
          title: "菜单管理",
          icon: "Menu",
          roles: ["sys:menu"],
        }
      },
      {
        path: "/goodsType",
        component: () => import('@/views/goods/GoodsType.vue'),
        name: "goodsType",
        meta: {
          title: "商品分类",
          icon: "UserFilled",
          roles: ["sys:goodsType"],
        }
      },
      {
        path: "/unusedList",
        component: () => import('@/views/goods/UnusedList.vue'),
        name: "unusedList",
        meta: {
          title: "商品管理",
          icon: "Wallet",
          roles: ["sys:unusedList"],
        }
      },
      {
        path: "/unusedOrder",
        component: () => import('@/views/order/UnusedOrder.vue'),
        name: "unusedOrder",
        meta: {
          title: "闲置订单",
          icon: "UserFilled",
          roles: ["sys:unusedOrder"],
        }
      },
      {
        path: "/bannerList",
        component: () => import('@/views/banner/Index.vue'),
        name: "bannerList",
        meta: {
          title: "广告列表",
          icon: "UserFilled",
          roles: ["sys:bannerList"],
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```





















#### 第61讲 分配菜单树数据查询

##### 1、新建实体类

```js
package com.itmk.web.sys_user.entity;

import com.itmk.web.sys_menu.entity.SysMenu;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class PermissonVo {
    //当前用户的菜单
    List<SysMenu> menuList = new ArrayList<>();
    //回显的数据：被分配的用户的菜单
    private Object[] checkList;
}

```

##### 2、SysMenuMapper接口添加getMenuByUserId()方法

```js
package com.itmk.web.sys_menu.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itmk.web.sys_menu.entity.SysMenu;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface SysMenuMapper extends BaseMapper<SysMenu> {
    //根据用户id查询菜单
    List<SysMenu> getMenuByUserId(@Param("userId") Long userId);
}

```

映射文件

````js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.sys_menu.mapper.SysMenuMapper">
    <select id="getMenuByUserId" resultType="com.itmk.web.sys_menu.entity.SysMenu">
        SELECT m.* FROM user_menu as um
        left join sys_menu as m
        on um.menu_id = m.menu_id
        where um.user_id =#{userId}
    </select>
</mapper>
````

##### 3、SysMenuService接口

```js
package com.itmk.web.sys_menu.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itmk.web.sys_menu.entity.SysMenu;
import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface SysMenuService extends IService<SysMenu> {
    List<SysMenu> getParnet();
    //根据用户id查询菜单
    List<SysMenu> getMenuByUserId(Long userId);
}

```

实现类

```js
package com.itmk.web.sys_menu.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.sys_menu.entity.MakeMenuTree;
import com.itmk.web.sys_menu.entity.SysMenu;
import com.itmk.web.sys_menu.mapper.SysMenuMapper;
import com.itmk.web.sys_menu.service.SysMenuService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Service
public class SysMenuServiceImpl extends ServiceImpl<SysMenuMapper, SysMenu> implements SysMenuService {
    @Override
    public List<SysMenu> getParnet() {
        //查询出所有的菜单
        QueryWrapper<SysMenu> query = new QueryWrapper<>();
        query.lambda().eq(SysMenu::getType,"1")
        .orderByAsc(SysMenu::getOrderNum);
        List<SysMenu> menuList = this.baseMapper.selectList(query);
        //构造顶级菜单
        SysMenu menu = new SysMenu();
        menu.setMenuId(0L);
        menu.setParentId(-1L);
        menu.setTitle("顶级菜单");
        menu.setLabel("顶级菜单");
        menu.setValue(0L);
        //添加到菜单数据
        menuList.add(menu);
        //组装树形数据
        return MakeMenuTree.makeTree(menuList,-1L);
    }

    @Override
    public List<SysMenu> getMenuByUserId(Long userId) {
        return this.baseMapper.getMenuByUserId(userId);
    }
}

```

##### 4、SysMenuController控制器

```js
package com.itmk.web.sys_menu.congtroller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.sys_menu.entity.MakeMenuTree;
import com.itmk.web.sys_menu.entity.SysMenu;
import com.itmk.web.sys_menu.service.SysMenuService;
import com.itmk.web.sys_user.entity.PermissonVo;
import com.itmk.web.sys_user.entity.SysUser;
import com.itmk.web.sys_user.service.SysUserService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RestController
@RequestMapping("/api/menu")
public class SysMenuController {
    @Autowired
    private SysMenuService sysMenuService;
    @Autowired
    private SysUserService sysUserService;

    //新增
    @PostMapping
    public ResultVo add(@RequestBody SysMenu sysMenu){
        sysMenu.setCreateTime(new Date());
        if(sysMenuService.save(sysMenu)){
            return ResultUtils.success("新增成功!");
        }
        return ResultUtils.error("新增失败!");
    }

     //编辑
    @PutMapping
    public ResultVo edit(@RequestBody SysMenu sysMenu){
        if(sysMenuService.updateById(sysMenu)){
            return ResultUtils.success("编辑成功!");
        }
        return ResultUtils.error("编辑失败!");
    }

      //删除
    @DeleteMapping("/{menuId}")
    public ResultVo edit(@PathVariable("menuId") Long menuId){
        if(sysMenuService.removeById(menuId)){
            return ResultUtils.success("删除成功!");
        }
        return ResultUtils.error("删除失败!");
    }

    //列表
    @GetMapping("/list")
    public ResultVo list(){
        QueryWrapper<SysMenu> query = new QueryWrapper<>();
        query.lambda().orderByAsc(SysMenu::getOrderNum);
        List<SysMenu> menuList = sysMenuService.list(query);
        //组装树数据
        List<SysMenu> list = MakeMenuTree.makeTree(menuList, 0L);
        return ResultUtils.success("查询成功!",list);
    }

     //查询上级菜单
    @GetMapping("/getParent")
    public ResultVo getParent(){
        List<SysMenu> list = sysMenuService.getParnet();
        return ResultUtils.success("查询成功!",list);
    }

    //分配菜单树数据查询和回显
    @GetMapping("/getAssignTree")
    public ResultVo getAssignTree(Long userId,Long assId){
        //查询当前用户的信息
        SysUser user = sysUserService.getById(userId);
        //查询菜单信息
        List<SysMenu> menuList = null;
        //判断用户是否是超级管理员，超级管理员拥有所有的权限
        if(StringUtils.isNotEmpty(user.getIsAdmin()) && "1".equals(user.getIsAdmin())){
             menuList = sysMenuService.list();
        }else{
            //根据用户id查询
            menuList = sysMenuService.getMenuByUserId(userId);
        }
        //组装树数据
        List<SysMenu> menus = MakeMenuTree.makeTree(menuList, 0L);
        //设置菜单数据
        PermissonVo vo = new PermissonVo();
        vo.setMenuList(menus);
        //查询回显的数据
        List<SysMenu> menuByUserId = sysMenuService.getMenuByUserId(assId);
        List<Long> ids = new ArrayList<>();
        Optional.ofNullable(menuByUserId).orElse(new ArrayList<>())
                .stream()
                .filter(item -> item != null)
                .forEach(item ->{
                    ids.add(item.getMenuId());
                });
        vo.setCheckList(ids.toArray());
        return ResultUtils.success("查询成功！",vo);
    }

}

```















#### 第62讲 分配权限页面制作

##### 1、新建数据类型

```js
export type AssignParm = {
    assId:string,
    userId:string
}
//保存权限的数据类型
export type SaveAssignParm = {
    assId:string,
    list:Array<string>
}
```

##### 2、api/user/index.ts添加getAssignTreeApi

```js
//获取树的数据
export const getAssignTreeApi = (parm:AssignParm)=>{
    return http.get("/api/menu/getAssignTree",parm)
}
```

##### 3、新建AssignTree.vue页面

```js
<template>
  <SysDialog
    :title="dialog.title"
    :width="dialog.width"
    :height="dialog.height"
    :visible="dialog.visible"
    @onClose="onClose"
    @onConfirm="onConfirm"
  >
    <template v-slot:content>
      <el-tree
        ref="assignTeee"
        :data="assignTreeData.list"
        node-key=""
        :props="defaultProps"
        empty-text="暂无数据"
        show-checkbox="true"
        highlight-current="true"
        @node-click=""
      ></el-tree>
    </template>
  </SysDialog>
</template>

<script setup lang="ts">
import { User } from "@/api/user/UserModel";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import { getAssignTreeApi } from "@/api/user/index";
import { reactive } from "vue";
import { userStore } from "@/store/user";
const defaultProps = {
  children: 'children',
  label: 'label',
}
const store = userStore()
//获取弹框属性
const { dialog, onClose, onConfirm, onShow } = useDialog();
//查询树的参数
const parms = reactive({
  userId: "", //当前登录用户的id
  assId: "",
});
//弹框显示的方法
const show = (row: User) => {
  //要分配的用户的id
  parms.assId = row.userId;
  parms.userId = store.getUserId
  console.log(parms)
  getAssignTree();
  console.log(row);
  dialog.title = "为【" + row.nickName + "】分配菜单";
  dialog.width = 300;
  dialog.height = 450;
  onShow();
};
//定义树的数据
const assignTreeData = reactive({
  list: [],
});
//获取树数据
const getAssignTree = async () => {
  let res = await getAssignTreeApi(parms);
  if (res && res.code == 200) {
    assignTreeData.list = res.data.menuList;
  }
};
//暴露出去，给外部组件调用
defineExpose({
  show,
});
</script>

<style scoped></style>

```

##### 4、AdminUser.vue组件

```js
<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input
          v-model="searchParm.nickName"
          placeholder="请输入姓名"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search" @click="searchBtn">搜索</el-button>
        <el-button icon="Close" type="danger" plain @click="resetBtn"
          >重置</el-button
        >
        <el-button type="primary" icon="Plus" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :height="tableHeight" :data="tableList" border stripe>
      <el-table-column prop="nickName" label="姓名"></el-table-column>
      <el-table-column prop="sex" label="性别">
        <template #default="scope">
          <el-tag v-if="scope.row.sex == '1'" type="danger" effect="dark"
            >女</el-tag
          >
          <el-tag v-if="scope.row.sex == '0'" effect="dark">男</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="username" label="账户"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-tag v-if="scope.row.status == '1'" type="danger" effect="dark"
            >停用</el-tag
          >
          <el-tag v-if="scope.row.status == '0'" effect="dark">启用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="320" align="center">
        <template #default="scope">
          <el-button
            type="primary"
            icon="Edit"
            size="default"
            @click="editBtn(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="success"
            icon="Setting"
            size="default"
            @click="assignBtn(scope.row)"
            >分配菜单</el-button
          >
          <el-button
            type="danger"
            icon="Delete"
            size="default"
            @click="deleteBtn(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="searchParm.currentPage"
      :page-sizes="[10, 20, 40, 80, 100]"
      :page-size="searchParm.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="searchParm.total"
      background
    >
    </el-pagination>

    <!-- 新增、编辑弹框 -->
    <SysDialog
      :title="dialog.title"
      :width="dialog.width"
      :height="dialog.height"
      :visible="dialog.visible"
      @on-close="onClose"
      @on-confirm="commit"
    >
      <template v-slot:content>
        <el-form
          :model="addModel"
          ref="addRef"
          :rules="rules"
          label-width="80px"
          :inline="false"
          size="default"
        >
          <el-form-item prop="nickName" label="姓名:">
            <el-input v-model="addModel.nickName"></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别:">
            <el-radio-group v-model="addModel.sex">
              <el-radio :label="'0'">男</el-radio>
              <el-radio :label="'1'">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="phone" label="电话:">
            <el-input v-model="addModel.phone"></el-input>
          </el-form-item>
          <el-form-item prop="username" label="账号:">
            <el-input v-model="addModel.username"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码:">
            <el-input v-model="addModel.password"></el-input>
          </el-form-item>
          <el-form-item prop="status" label="状态:">
            <el-radio-group v-model="addModel.status">
              <el-radio :label="'0'">启用</el-radio>
              <el-radio :label="'1'">停用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
    <!-- 分配菜单 -->
    <AssignTree ref="assignTree"></AssignTree>
  </el-main>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import AssignTree from "./AssignTree.vue";
import useDialog from "@/hooks/useDialog";
import { ElMessage, type FormInstance } from "element-plus";
import {
  addAdminUserApi,
  getListApi,
  editApi,
  deleteApi,
} from "@/api/user/index";
import { User } from "@/api/user/UserModel";
import { Title } from "@/type/BaseEnum";
import useInstance from "@/hooks/useInstance";
//分配菜单ref属性
const assignTree = ref()
//获取全局属性
const { global } = useInstance();
//表单ref属性
const addRef = ref<FormInstance>();
//获取弹框属性
const { dialog, onClose } = useDialog();
//搜索绑定的对象
const searchParm = reactive({
  nickName: "",
  pageSize: 10,
  currentPage: 1,
  total: 0,
});
//表格高度
const tableHeight = ref(0);
//表格数据
const tableList = ref([]);
const tags = ref("");
//新增按钮
const addBtn = () => {
  tags.value = "0";
  //设置弹框标题
  dialog.title = Title.EDIT;
  dialog.height = 300;
  dialog.visible = true;
  //清空表单
  addRef.value?.resetFields();
};
//分配菜单
const assignBtn = (row:User)=>{
  console.log(row)
  console.log(assignTree.value)
  assignTree.value.show(row)
}
//新增表单绑定的对象
const addModel = reactive({
  userId: "",
  username: "",
  password: "",
  nickName: "",
  phone: "",
  sex: "",
  status: "",
});
//表单验证规则
const rules = {
  nickName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
  phone: [{ required: true, message: "请输入电话", trigger: "blur" }],
  username: [{ required: true, message: "请输入账户", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  status: [{ required: true, message: "请选择状态", trigger: "blur" }],
};

//列表查询
const getList = async () => {
  let res = await getListApi(searchParm);
  if (res && res.code == 200) {
    console.log(res);
    tableList.value = res.data.records;
    searchParm.total = res.data.total;
  }
};
//编辑
const editBtn = (row: User) => {
  tags.value = "1";
  console.log(row);
  //设置弹框标题
  dialog.title = Title.EDIT;
  dialog.height = 300;
  dialog.visible = true;
  //设置数据回显
  nextTick(() => {
    Object.assign(addModel, row);
  });
};
//新增、编辑提交
const commit = () => {
  console.log(tags.value);
  //表单验证
  addRef.value?.validate(async (valid) => {
    if (valid) {
      console.log(addModel);
      //提交数据
      let res = null;
      if (tags.value == "0") {
        res = await addAdminUserApi(addModel);
      } else {
        res = await editApi(addModel);
      }
      if (res && res.code == 200) {
        //信息提示
        ElMessage.success(res.msg);
        //刷新表格
        getList();
        //关闭弹框
        dialog.visible = false;
      }
    }
  });
};
//删除
const deleteBtn = async (row: User) => {
  console.log(row);
  //信息提示
  console.log(global);
  const confirm = await global.$myconfirm("确定删除该数据吗?");
  if (confirm) {
    let res = await deleteApi(row.userId);
    if (res && res.code == 200) {
      ElMessage.success(res.msg);
      getList();
    }
  }
};
//搜索
const searchBtn = () => {
  getList();
};
//重置
const resetBtn = () => {
  searchParm.nickName = "";
  getList();
};
//页容量改变时触发
const sizeChange = (size: number) => {
  console.log(size);
};
//页数改变时触发
const currentChange = (page: number) => {
  console.log(page);
};
onMounted(() => {
  nextTick(() => {
    //计算表格高度
    tableHeight.value = window.innerHeight - 200;
  });
  getList();
});
</script>

<style scoped></style>

```



















#### 第63讲 分配菜单接口对接

##### 1、安装pinia持久化插件

###### 1.1、持久化插件官网

```js
https://seb-l.github.io/pinia-plugin-persist/
```

###### 1.2、安装插件

```js
npm install pinia-plugin-persist
```

##### 2、持久化插件引入main.ts

```js
import piniaPersist from 'pinia-plugin-persist'

// 实例化 Pinia
const pinia = createPinia()
//使用持久化插件
pinia.use(piniaPersist)
```

##### 3、userStore中使用

```js
import { defineStore } from "pinia";
//创建store
//defineStore第一个参数：唯一的，不能重复 
export const userStore = defineStore('userStore',{
    state:()=>{
        return{
            userId:'',
            nickName:""
        }
    },
    //获取值
    getters:{
        getUserId(state){
            return state.userId
        }
    }, 
    //改变state的值
    actions:{
        setUserId(userId:string){
            this.userId = userId;
        }
    },
    persist: {
        enabled: true,
        strategies: [
            { storage: localStorage, paths: ['userId','nickName'] },
        ]
    }
})
```



##### 4、新建实体类

```js
package com.itmk.web.sys_user.entity;

import lombok.Data;

import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class AssignParm {
    private Long assId;
    private List<Long> list;
}

```

##### 5、保存菜单接口

```js
//分配菜单保存
@PostMapping("/assignSave")
public ResultVo assignSave(@RequestBody AssignParm parm) {
    //判断是否是超级管理员
    SysUser user = sysUserService.getById(parm.getAssId());
    if (user != null && StringUtils.isNotEmpty(user.getIsAdmin()) && user.getIsAdmin().equals("1")) {
        return ResultUtils.error("当前用户是超级管理员，无需分配菜单!");
    }
    userMenuService.saveUserMenu(parm);
    return ResultUtils.success("分配菜单成功!");
}
```



##### 6、数据回显

```js
//获取树数据
    const getAssignTree = async (parm: AssignParm) => {
        let res = await getAssignTreeApi(parm)
        if (res && res.code == 200) {
            //设置权限树数据
            assignTreeData.list = res.data.menuList
            //设置角色原来的权限Id
            assignTreeData.assignTreeChecked = res.data.checkList
            //数据回显，判断角色原来是否已经分配过权限，如果有，回显
            if (assignTreeData.assignTreeChecked.length > 0) {
                let newArr: any = [];
                assignTreeData.assignTreeChecked.forEach((item => {
                    checked(item, assignTreeData.list, newArr)
                }))
                assignTreeData.assignTreeChecked = newArr;
            }
        }
    }
    const checked = (id: number, data: any, newArr: any) => {
        data.forEach((item: any) => {
            if (item.menuId == id) {
                if (item.children && item.children.length == 0) {
                    newArr.push(item.menuId)
                }
            } else {
                if (item.children && item.children.length != 0) {
                    //递归调用
                    checked(id, item.children, newArr)
                }
            }
        })
    }
```

















#### 第64讲 动态菜单接对接

##### 1、新建实体类

```js
package com.itmk.web.sys_menu.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class MenuVo {
    private Long menuId;
    private String title;
    private String path;
    private String icon;
}

```

```js
package com.itmk.web.sys_menu.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class CodeVo {
    private String code;
}

```

```js
package com.itmk.web.sys_user.entity;

import com.itmk.web.sys_menu.entity.CodeVo;
import com.itmk.web.sys_menu.entity.MenuVo;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class LoginVo {
    private Long userId;
    private String nickName;
    private List<MenuVo> menuList = new ArrayList<>();
    private List<String> codeList = new ArrayList<>();
}

```

##### 2、sysUserController控制器login()方法改为如下

```js
package com.itmk.web.sys_user.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.google.code.kaptcha.impl.DefaultKaptcha;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.sys_menu.entity.SysMenu;
import com.itmk.web.sys_menu.service.SysMenuService;
import com.itmk.web.sys_user.entity.*;
import com.itmk.web.sys_user.service.SysUserService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;
import sun.misc.BASE64Encoder;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * @Author java实战基地
 * @Version 2383404558
 * /api/sysUser/getList
 */
@RestController
@RequestMapping("/api/sysUser")
public class SysUserController {
    @Autowired
    private SysUserService sysUserService;
    @Autowired
    private DefaultKaptcha defaultKaptcha;
    @Autowired
    private SysMenuService sysMenuService;

    //新增
    @PostMapping
    public ResultVo add(@RequestBody SysUser sysUser) {
        sysUser.setPassword(DigestUtils.md5DigestAsHex(sysUser.getPassword().getBytes()));
        if (sysUserService.save(sysUser)) {
            return ResultUtils.success("新增成功!");
        }
        return ResultUtils.error("新增失败!");
    }

    //编辑
    @PutMapping
    public ResultVo edit(@RequestBody SysUser sysUser) {
        if (sysUserService.updateById(sysUser)) {
            return ResultUtils.success("编辑成功!");
        }
        return ResultUtils.error("编辑失败!");
    }

    //删除
    @DeleteMapping("/{userId}")
    public ResultVo delete(@PathVariable("userId") Long userId) {
        if (sysUserService.removeById(userId)) {
            return ResultUtils.success("删除成功!");
        }
        return ResultUtils.error("删除失败!");
    }

    //列表
    @GetMapping("/getList")
    public ResultVo getList(PageParm parm) {
        //构造查询条件
        QueryWrapper<SysUser> query = new QueryWrapper<>();
        query.lambda().like(StringUtils.isNotEmpty(parm.getNickName()), SysUser::getNickName, parm.getNickName());
        //构造分页对象
        IPage<SysUser> page = new Page<>(parm.getCurrentPage(), parm.getPageSize());
        //查询
        IPage<SysUser> list = sysUserService.page(page, query);
        return ResultUtils.success("查询成功", list);
    }

    //生成验证码
    @PostMapping("/image")
    public ResultVo imageCode(HttpServletRequest request) {
        //生成验证码 4562
        String text = defaultKaptcha.createText();
        //验证码存到session
        HttpSession session = request.getSession();
        session.setAttribute("code", text);
        //生成图片,转换为base64
        BufferedImage bufferedImage = defaultKaptcha.createImage(text);
        ByteArrayOutputStream outputStream = null;
        try {
            outputStream = new ByteArrayOutputStream();
            ImageIO.write(bufferedImage, "jpg", outputStream);
            BASE64Encoder encoder = new BASE64Encoder();
            String base64 = encoder.encode(outputStream.toByteArray());
            String captchaBase64 = "data:image/jpeg;base64," + base64.replaceAll("\r\n", "");
            ResultVo result = new ResultVo("生成成功", 200, captchaBase64);
            return result;
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (outputStream != null) {
                    outputStream.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    //登录
    @PostMapping("/login")
    public ResultVo login(@RequestBody LoginParm parm, HttpServletRequest request) {
        //获取sesson里面的code验证码
        HttpSession session = request.getSession();
        String code = (String) session.getAttribute("code");
        //获取前端传递过来的验证码
        String codeParm = parm.getCode();
        if (StringUtils.isEmpty(code)) {
            return ResultUtils.error("验证码过期!");
        }
        //对比验证码
        if (!codeParm.equals(code)) {
            return ResultUtils.error("验证码错误!");
        }
        //验证用户信息
        QueryWrapper<SysUser> query = new QueryWrapper<>();
        query.lambda().eq(SysUser::getUsername, parm.getUsername())
                .eq(SysUser::getPassword, DigestUtils.md5DigestAsHex(parm.getPassword().getBytes()));
        SysUser user = sysUserService.getOne(query);
        if (user == null) {
            return ResultUtils.error("用户名或者密码错误!");
        }
        if (user.getStatus().equals("1")) {
            return ResultUtils.error("账户被停用，请联系管理员!");
        }
        //返回登录信息
        LoginVo vo = new LoginVo();
        vo.setUserId(user.getUserId());
        vo.setNickName(user.getNickName());
        //返回用户的菜单和按钮
        List<SysMenu> menuList = null;
        //是超级管理员
        if (StringUtils.isNotEmpty(user.getIsAdmin()) && "1".equals(user.getIsAdmin())) {
            menuList = sysMenuService.list();
        } else {
            menuList = sysMenuService.getMenuByUserId(user.getUserId());
        }
        //获取权限字段
        List<String> codeList = Optional.ofNullable(menuList).orElse(new ArrayList<>())
                .stream()
                .map(item -> item.getCode()).collect(Collectors.toList());
        vo.setCodeList(codeList);
        //获取菜单
        List<MenuVo> menuVoList = Optional.ofNullable(menuList).orElse(new ArrayList<>())
                .stream()
                .filter(item -> item.getType().equals("1"))
                .map(item -> new MenuVo(item.getMenuId(), item.getTitle(), item.getPath(), item.getIcon())).collect(Collectors.toList());
        vo.setMenuList(menuVoList);
        return ResultUtils.success("登录成功", vo);
    }
}

```

##### 3、store/userStore改为如下

```js
import { defineStore } from "pinia";
//创建store
//defineStore第一个参数：唯一的，不能重复 
export const userStore = defineStore('userStore',{
    state:()=>{
        return{
            userId:'',
            nickName:"",
            menuList:[],
            codeList:[]
        }
    },
    //获取值
    getters:{
        getUserId(state){
            return state.userId
        },
        getMenuList(state){
            return state.menuList
        },
        getCodeList(state){
            return state.codeList
        }
    }, 
    //改变state的值
    actions:{
        setUserId(userId:string){
            this.userId = userId;
        },
        setMenuList(menuList:any){
            this.menuList = menuList;
        },
        setCodeList(codeList:any){
            this.codeList = codeList;
        }
    },
    persist: {
        enabled: true,
        strategies: [
            { storage: sessionStorage, paths: ['userId','nickName','menuList','codeList'] },
        ]
    }
})
```

##### 4、登录login.vue页面

```js
<template>
  <div class="logincontainer">
    <el-form
      class="loginform"
      :model="loginModel"
      ref="form"
      :rules="rules"
      :inline="false"
      size="large"
    >
      <el-form-item>
        <div class="logintitle">系统登录</div>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          placeholder="请输入账户"
          v-model="loginModel.username"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
        type="password"
          placeholder="请输入密码"
          v-model="loginModel.password"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-row :gutter="20">
          <el-col :span="16" :offset="0">
            <el-input
              placeholder="请输入验证码"
              v-model="loginModel.code"
            ></el-input>
          </el-col>
          <el-col :span="8" :offset="0">
            <img @click="getImg" class="image" :src="imgsrc" />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-row style="width: 100%;">
          <el-col  style="padding-right: 10px; padding-left: 0px" :span="12" :offset="0">
            <el-button style="width: 100%;" type="primary" size="large" @click="commit">登录</el-button>       
          </el-col>
          <el-col style="padding-right: 0px; padding-left: 10px" :span="12" :offset="0">
            <el-button style="width: 100%;" type="primary" size="large" @click="">重置</el-button> 
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { FormInstance } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import {imageApi,lgoinApi} from '@/api/user/index'
import {userStore} from '@/store/user/index'
import { useRouter } from "vue-router";
const router = useRouter()
const store = userStore()
//验证码
const imgsrc = ref('')
//表单的ref属性
const form = ref<FormInstance>();
//表单绑定的对象
const loginModel = reactive({
  username: "",
  password: "",
  code: "",
});
//表单验证规则
const rules = reactive({
    username:[{required:true,message:'请填写账户',trigger:'change'}],
    password:[{required:true,message:'请填写密码',trigger:'change'}],
    code:[{required:true,message:'请填写验证码',trigger:'change'}]
});
//获取验证码
const getImg = async()=>{
    let res = await imageApi()
    if(res && res.code == 200){
        console.log(res)
        imgsrc.value = res.data;
    }
}
//登录提交
const commit = ()=>{
    form.value?.validate(async(valid)=>{
        if(valid){
            let res = await lgoinApi(loginModel)
            console.log(res)
            store.setUserId(res.data.userId)
            store.setCodeList(res.data.codeList)
            store.setMenuList(res.data.menuList)
            router.push({path:'/home'})
        }
    })
}
onMounted(()=>{
    getImg()
})
</script>

<style lang="scss" scoped>
.logincontainer {
  height: 100%;
  background-color: #fff;
  background-image: url("../../assets/login.png");
  display: flex;
  justify-content: center;
  align-items: center;
  .loginform {
    height: 320px;
    width: 420px;
    padding: 20px 35px;
    border-radius: 10px;
    background-color: #fff;
    .logintitle {
      display: flex;
      justify-content: center;
      color: #606266;
      width: 100%;
      font-size: 24px;
      font-weight: 600;
    }
    .image{
        height: 40px;
        width: 100%;
        cursor: pointer;
    }
  }
}
</style>

```

##### 5、MenuOne.vue页面

```js
<!-- 一级菜单实现 -->
<template>
    <MenuLogo></MenuLogo>
    <el-menu
      :collapse="collapse"
      router
      background-color="#304156"
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
    >
      <el-menu-item v-for="item in menuList" :index="item['path']">
        <el-icon>
          <component :is="item['icon']"></component>
        </el-icon>
        <template #title>{{ item['title'] }}</template>
      </el-menu-item>
      <!-- <el-menu-item index="/adminUser">
        <el-icon><UserFilled /></el-icon>
        <template #title>管理员管理</template>
      </el-menu-item>
      <el-menu-item index="/userList">
        <el-icon><Wallet /></el-icon>
        <template #title>用户管理</template>
      </el-menu-item>
      <el-menu-item index="/menuList">
        <el-icon><Menu /></el-icon>
        <template #title>菜单管理</template>
      </el-menu-item>
      <el-menu-item index="/goodsType">
        <el-icon><UserFilled /></el-icon>
        <template #title>商品分类</template>
      </el-menu-item>
      <el-menu-item index="/unusedList">
        <el-icon><Memo /></el-icon>
        <template #title>商品管理</template>
      </el-menu-item>
      <el-menu-item index="/unusedOrder">
        <el-icon><Monitor /></el-icon>
        <template #title>订单管理</template>
      </el-menu-item>
      <el-menu-item index="/bannerList">
        <el-icon><Calendar /></el-icon>
        <template #title>广告管理</template>
      </el-menu-item> -->
    </el-menu>
  </template>
  
  <script setup lang="ts">
  import { collapseStore } from "@/store/collapse/index";
  import { useRoute } from "vue-router";
  import MenuLogo from "./MenuLogo.vue";
  // import { Menu, Memo, Monitor, Calendar } from "@element-plus/icons-vue";
  import { computed } from "vue";
  import { userStore } from "@/store/user";
  const ustore = userStore()
  //获取store
  const store = collapseStore()
  //当前路由
  const route = useRoute();
  //获取激活的选项
  const activeIndex = computed(() => {
    const { path } = route;
    return path;
  });
  //获取菜单状态
  const collapse = computed(()=>{
    return store.getCollapse
  })
  //获取菜单数据
  const menuList = computed(()=>{
    return ustore.getMenuList
  })
  </script>
  
  <style scoped lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    min-height: 400px;
  }
  .el-menu {
    border-right: none;
  }
  .el-menu .el-menu-item {
    color: #bfcbd9;
    font-size: 15px;
    font-weight: bold;
  }
  .el-menu-item.is-active {
    color: #409eff !important;
    background-color: #1f2d3d !important;
  }
  /* 鼠标移动菜单的颜色 */
  
  :deep(.el-menu-item:hover) {
    background-color: #001528 !important;
  }
  </style>
  
```



















#### 第65讲 退出登录功能讲解

##### 1、layout下新建LoginOut.vue组件

```js
<template>
    <el-dropdown>
    <span class="el-dropdown-link">
      <img class="userimg" src="@/assets/user.jpg" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item @click="loginBtn">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import useInstance from '@/hooks/useInstance';
const router = useRouter()
//获取全局属性
const {global} = useInstance()
//退出登录按钮
const loginBtn = async()=>{
    const confirm = await global.$myconfirm('确定退出登录吗?')
    if(confirm){
        //清空缓存
        sessionStorage.clear()
        //跳转登录
        router.push({name:'login'})
    }
}
</script>

<style scoped>
.userimg{
    height: 55px;
    width: 55px;
    border-radius: 50%;
}
</style>
```

##### 2、layout/index.vue组件引入

```js
<template>
  <el-container class="mycontainer">
    <el-aside width="auto" class="asside">
      <MenuOne></MenuOne>
    </el-aside>
    <el-container>
      <el-header class="header">
        <div class="header-left">
          <Collapse></Collapse>
          <BreadCrumb></BreadCrumb>
        </div>
        <LoginOut></LoginOut>
      </el-header>
      <el-main class="mymain">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
// import Menu from './Menu.vue'
import MenuOne from "./MenuOne.vue";
import Collapse from "./Collapse.vue";
import BreadCrumb from "./BreadCrumb.vue";
import LoginOut from "./LoginOut.vue";
</script>

<style scoped lang="scss">
.mycontainer {
  height: 100%;
  .asside {
    background-color: #304156;
  }
  .header {
    background-color: #009688;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header-left{
      display: flex;
      align-items: center;
    }
  }
  .mymain {
    padding: 0px;
  }
}
</style>

```



















#### 第66讲 修改密码功能实现

##### 1、SysUserController控制器添加updatePassword()方法

```js
//修改密码
@PutMapping("/updatePassword")
public ResultVo updatePassword(@RequestBody UpdatePasswordParm parm){
    //验证原密码是否正确
    SysUser user = sysUserService.getById(parm.getUserId());
    //原密码加密
    String oldPassword = DigestUtils.md5DigestAsHex(parm.getOldPassword().getBytes());
    if(!user.getPassword().equals(oldPassword)){
        return ResultUtils.error("原密码不正确!");
    }
    UpdateWrapper<SysUser> query = new UpdateWrapper<>();
    query.lambda().set(SysUser::getPassword,DigestUtils.md5DigestAsHex(parm.getPassword().getBytes()))
            .eq(SysUser::getUserId,parm.getUserId());
    if(sysUserService.update(query)){
        return ResultUtils.success("修改成功!");
    }
    return ResultUtils.error("修改失败！");
}
```

```js
package com.itmk.web.sys_user.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class UpdatePasswordParm {
    private Long userId;
    private String password;
    private String oldPassword;
}

```

##### 2、api/user/index.ts添加updatePasswordApi()方法

```js
//修改密码
export const updatePasswordApi = (parm:UpdateParm)=>{
    return http.put("/api/sysUser/updatePassword",parm)
}
```

```js
export type UpdateParm = {
    password:string,
    userId:string
    oldPassword:string
}
```

##### 3、LoginOut.vue组件

```js
<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <img alt="" class="userimg" src="@/assets/user.jpg" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="upBtn">修改密码</el-dropdown-item>
        <el-dropdown-item @click="loginBtn">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 修改密码弹框 -->
  <SysDialog
    :title="dialog.title"
    :width="dialog.width"
    :height="dialog.height"
    :visible="dialog.visible"
    @onClose="onClose"
    @onConfirm="commit"
  >
    <template v-slot:content>
      <el-form
        :model="addModel"
        ref="form"
        :rules="rules"
        label-width="80px"
        :inline="false"
        size="default"
      >
        <el-form-item prop="oldPassword" label="原密码">
          <el-input v-model="addModel.oldPassword"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="新密码">
          <el-input v-model="addModel.password"></el-input>
        </el-form-item>
        <el-form-item prop="newPassword" label="确定密码">
          <el-input v-model="addModel.newPassword"></el-input>
        </el-form-item>
      </el-form>
    </template>
  </SysDialog>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import useInstance from "@/hooks/useInstance";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import { ElMessage, FormInstance } from "element-plus";
import { updatePasswordApi } from "@/api/user/index";
import { userStore } from "@/store/user";
const store = userStore();
const { dialog, onClose, onShow } = useDialog();
//表单ref属性
const form = ref<FormInstance>();
const router = useRouter();
//表单验证规则
const rules = reactive({
  oldPassword: [
    {
      required: "true",
      trigger: "change",
      message: "请输入原密码",
    },
  ],
  password: [
    {
      required: "true",
      trigger: "change",
      message: "请输入新密码",
    },
  ],
  newPassword: [
    {
      required: "true",
      trigger: "change",
      message: "请输入确定密码",
    },
  ],
});
//表单绑定的对象
const addModel = reactive({
  userId: "",
  password: "",
  oldPassword: "",
  newPassword: "",
});
//获取全局属性
const { global } = useInstance();
//退出登录按钮
const loginBtn = async () => {
  const confirm = await global.$myconfirm("确定退出登录吗?");
  if (confirm) {
    //清空缓存
    sessionStorage.clear();
    //跳转登录
    router.push({ name: "login" });
  }
};
//修改密码
const upBtn = () => {
  addModel.userId = store.getUserId;
  dialog.title = "修改密码";
  dialog.height = 180;
  onShow();
};
//表单提交
const commit = () => {
  //新密码和确定密码判断
  if (addModel.newPassword != addModel.password) {
    ElMessage.warning("新密码和确定密码不一致!");
    return;
  }
  form.value?.validate(async (valid) => {
    if (valid) {
      let res = await updatePasswordApi(addModel);
      if (res && res.code == 200) {
        ElMessage.success(res.msg);
        //清空缓存，重新登录
        sessionStorage.clear();
        //跳转登录
        router.push({ name: "login" });
      }
    }
  });
};
</script>

<style scoped>
.userimg {
  height: 55px;
  width: 55px;
  border-radius: 50%;
  cursor: pointer;
}
.el-dropdown-link:focus {
  outline: none;
}
</style>

```















#### 第67讲 小程序首页轮播图对接

##### 1、解决发布跳转、清空表单

write.vue页面修改为如下

```js
<template>
	<view class="u-wrap u-p-l-20 u-p-r-20">
		<u-form :model="addModel" ref="form1">
			<u-form-item prop="name" label="类型:">
				<u-radio-group v-model="addModel.name">
					<u-radio @change="radioChange" activeColor="#FF7670" v-for="(item, index) in list" :key="index" :name="item.name"
						:disabled="item.disabled">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item prop="goodsName" label="名称:">
				<u-input placeholder="请输入名称" v-model="addModel.goodsName" />
			</u-form-item>
			<u-form-item prop="categoryName" label="分类:">
				<u-input @click="openSelect" placeholder="请选择分类" v-model="addModel.categoryName" />
				<u-select @confirm="selectConfirm" v-model="show" :list="selectList"></u-select>
			</u-form-item>
			<u-form-item prop="goodsDesc" label="简介:">
				<u-input placeholder="请输入简介" v-model="addModel.goodsDesc" />
			</u-form-item>
			<u-form-item prop="goodsPrice" label="价格:">
				<u-input placeholder="请输入价格" v-model="addModel.goodsPrice" />
			</u-form-item>
			<u-form-item prop="userName" label-width="auto" label="联系人:">
				<u-input placeholder="请输入联系人" v-model="addModel.userName" />
			</u-form-item>
			<u-form-item prop="phone" label-width="auto" label="联系电话:">
				<u-input placeholder="请输入联系电话" v-model="addModel.phone" />
			</u-form-item>
			<u-form-item prop="wxNum" label-width="auto" label="微信号:">
				<u-input placeholder="请输入微信号" v-model="addModel.wxNum" />
			</u-form-item>
			<u-form-item prop="address" label-width="auto" label="联系地址:">
				<u-input v-model="addModel.address" />
			</u-form-item>
			<u-form-item prop="image" label="图片:"></u-form-item>
			<u-upload ref="imgRef" @on-remove="onRemove" @on-change="onChange" :action="action"></u-upload>
		</u-form>
		<u-button @click="commit" :custom-style="customStyle">发布</u-button>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	import {
		onReady
	} from '@dcloudio/uni-app'
	import http from '../../common/http.js'
	import {
		categoryApi,
		releaseApi
	} from '../../api/goods.js'
	//表单ref属性
	const form1 = ref()
	const imgRef = ref()
	const addModel = reactive({
		userId: uni.getStorageSync('userId'),
		name: '',
		type: '',
		goodsName: '',
		categoryId: '',
		categoryName: '',
		goodsDesc: '',
		goodsPrice: '',
		userName: '',
		phone: '',
		wxNum: '',
		image: '',
		address: ''
	})
	const list = [{
			value: '0',
			name: '闲置',
			disabled: false
		},
		{
			value: '1',
			name: '求购',
			disabled: false
		}
	]
	const rules = reactive({
			name: [{
				required: true,
				message: '请选择类型',
				trigger: ['change', 'blur'],
			}],
			goodsName: [{
				required: true,
				message: '请填写名称',
				trigger: ['change', 'blur'],
			}],
			goodsDesc: [{
				required: true,
				message: '请填写描述',
				trigger: ['change', 'blur'],
			}],
			goodsPrice: [{
				required: true,
				message: '请填写价格',
				trigger: ['change', 'blur'],
			}],
			userName: [{
				required: true,
				message: '请填写姓名',
				trigger: ['change', 'blur'],
			}],
			phone: [{
				required: true,
				message: '请填写电话',
				trigger: ['change', 'blur'],
			}],
			wxNum: [{
				required: true,
				message: '请填写微信号',
				trigger: ['change', 'blur'],
			}],
			address: [{
				required: true,
				message: '请填写发布/求购地址',
				trigger: ['change', 'blur'],
			}]
		})
	const value = ref('')
	const fileList = ref([])
	const customStyle = reactive({
		background: '#FF7670',
		color: '#FFF',
		marginTop: '50px',
		width: '100%'
	})
	//图片上传路径
	const action = ref(http.baseUrl + "/api/upload/uploadImage")
	//存储图片路径
	const imgUrl = ref([])
	//图片上传触发
	const onChange = (res, index, lists, name) => {
		// console.log(res.data)
		let result = JSON.parse(res.data)
		//把返回的图片放到imgUrl
		imgUrl.value.push(http.baseUrl + result.data)
		//把数组里面的图片转为逗号分隔的字符串
		let url = ''
		for (let k = 0; k < imgUrl.value.length; k++) {
			url = url + imgUrl.value[k] + ','
		}
		// console.log(url)
		//去掉末尾的逗号
		addModel.image = url.substring(0, url.lastIndexOf(','))
		console.log(addModel)
	}
	//删除图片
	const onRemove = (index) => {
		//删除图片
		imgUrl.value.splice(index, 1)
		let url = ''
		for (let k = 0; k < imgUrl.value.length; k++) {
			url = url + imgUrl.value[k] + ','
		}
		// console.log(url)
		//去掉末尾的逗号
		addModel.image = url.substring(0, url.lastIndexOf(','))
		console.log(addModel)
	}
	//分类
	const show = ref(false)
	//分类数据
	const selectList = ref([])
	const getSelectList = async () => {
		let res = await categoryApi()
		if (res && res.code == 200) {
			console.log(res)
			selectList.value = res.data;
		}
	}
	//打开分类
	const openSelect = ()=>{
		show.value = true;
	}
	//分类确定
	const selectConfirm = (e)=>{
		console.log(e)
		addModel.categoryName = e[0].label;
		addModel.categoryId = e[0].value;
	}
	//发布提交
	const commit = ()=>{
		form1.value.validate(async(valid)=>{
			console.log(valid)
			if(valid){
				let res = await releaseApi(addModel)
				if(res && res.code == 200){
					console.log(res)
					if(addModel.type == '0'){
						uni.switchTab({
							url:'../unused/unused'
						})
					}else{
						uni.switchTab({
							url:'../buy/buy'
						})
					}
					//清空数据
					form1.value.resetFields()
					imgUrl.value = []
					addModel.image = '';
					fileList.value = []
					imgRef.value.clear()
				}
			}
		})
		console.log(addModel)
	}
	//类型点击事件
	const radioChange = (e)=>{
		console.log(e)
		for(let i = 0;i<list.length;i++){
			if(list[i].name == e){
				addModel.type = list[i].value;
			}
		}
	}
	onReady(() => {
		//设置表单验证规则
		form1.value.setRules(rules);
		//获取分类数据
		getSelectList()
	})
</script>

<style>

</style>

```

##### 2、编写轮播图接口

在SysBannerController控制器添加getIndexBanner()方法

```js
//查询小程序首页轮播图数据
@GetMapping("/getIndexBanner")
public ResultVo getIndexBanner(){
    QueryWrapper<SysBanner> query = new QueryWrapper<>();
    query.lambda().eq(SysBanner::getStatus,"0")
            .orderByAsc(SysBanner::getOrderNum);
    List<SysBanner> list = sysBannerService.list(query);
    return ResultUtils.success("查询成功",list);
}
```

##### 3、小程序api下新建index.js文件

```js
import http from '../common/http.js'
//首页轮播图数据查询
export const getIndexBannerApi = ()=>{
	return http.get('/api/banner/getIndexBanner')
}
```

##### 4、index.vue页面

```js
<template>
	<view class="u-wrap">
		<!-- 轮播图 -->
		<swiper class="swiper-container" circular :indicatorColor="indicatorColor" :indicator-dots="indicatorDots"
			:autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item,index) in swipperList" :key='index'>
				<image class="imgs" :src="item.images.split(',')[0]"></image>
			</swiper-item>
		</swiper>
		<!-- 搜索框 -->
		<view class="tab-strickt">
			<u-search bg-color="#FFF" margin="8px" style="flex-grow: 1;" :show-action="true" action-text="搜索" :animation="true"></u-search>
		</view>
		<view class="">
			<u-waterfall v-model="flowList" ref="uWaterfall1">
				<template v-slot:left="{leftList}">
					<view class="demo-warter-left" v-for="(item, index) in leftList" :key="index">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-price">
							{{item.price}}元
						</view>
						<view class="demo-tag">
							<view class="demo-tag-owner">
								自营
							</view>
							<view class="demo-tag-text">
								放心购
							</view>
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
						<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"
							@click="remove(item.id)"></u-icon>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter-right" v-for="(item, index) in rightList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-price">
							{{item.price}}元
						</view>
						<view class="demo-tag">
							<view class="demo-tag-owner">
								自营
							</view>
							<view class="demo-tag-text">
								放心购
							</view>
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
						<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"
							@click="remove(item.id)"></u-icon>
					</view>
				</template>
			</u-waterfall>
			<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		</view>
	</view>
</template>

<script setup>
	import { onReady } from '@dcloudio/uni-app';
import {
		ref
	} from 'vue';
	import {getIndexBannerApi} from '../../api/index.js'
	const indicatorDots = ref(true)
	const indicatorColor = ref("#FFF")
	const autoplay = ref(true)
	const interval = ref(2000)
	const duration = ref(500)
	//轮播图数据
	const swipperList = ref([])
	//瀑布流
	const flowList = ref([{
			price: 75,
			title: '笔记本电脑',
			image: '/static/11.jpg',
		},
		{
			price: 385,
			title: '手机',
			image: '/static/22.jpeg',
		},
		{
			price: 784,
			title: '台式电脑',
			image: '/static/33.jpeg',
		},
		{
			price: 7891,
			title: '电脑',
			image: '/static/44.jpg',
		},
		{
			price: 2341,
			title: '自行车',
			image: '/static/66.jpeg',
		},
		{
			price: 2342,
			title: '考研英语',
			image: '/static/55.jpg',
		},
		{
			price: 2341,
			title: '苹果手机',
			image: '/static/11.jpg',
		},
		{
			price: 2342,
			title: '球鞋',
			image: '/static/22.jpeg',
		}
	])
	const getBannerList = async()=>{
		let res = await getIndexBannerApi()
		if(res && res.code == 200){
			console.log(res)
			swipperList.value = res.data;
		}
	}
	onReady(()=>{
		getBannerList()
	})
</script>

<style lang='scss'>
	.swiper-container {
		height: 180px;

		.item {
			height: 180px;
		}

		.imgs {
			height: 180px;
			width: 100%;
		}
	}

	.demo-warter-left {
		border-radius: 8px;
		margin: 5px 0px 5px 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.demo-warter-right {
		border-radius: 8px;
		margin: 5px 5px 5px 0px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}

	.tab-strickt {
		position: sticky;
		z-index: 99;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		background-color: #f2f2f2;
	}
</style>

```















#### 第68讲 小程序首页推荐列表对接

##### 1、新建实体类

```js
package com.itmk.web.goods.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class WxIndexParm {
    private Long currentPage;
    private Long pageSize;
    private String keywords;
}

```

##### 2、GoodsController控制器添加getIndexList()方法

```js
//小程序首页推荐列表
@GetMapping("/getIndexList")
public ResultVo getIndexList(WxIndexParm parm){
    QueryWrapper<Goods> query = new QueryWrapper<>();
    query.lambda().like(StringUtils.isNotEmpty(parm.getKeywords()),Goods::getGoodsName,parm.getKeywords())
            .eq(Goods::getSetIndex,"1")
            .eq(Goods::getStatus,"0")
            .orderByDesc(Goods::getCreateTime);
    IPage<Goods> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
    IPage<Goods> list = goodsService.page(page,query);
    return ResultUtils.success("查询成功",list);
}
```

##### 3、api/index.js

```js
import http from '../common/http.js'
//首页轮播图数据查询
export const getIndexBannerApi = ()=>{
	return http.get('/api/banner/getIndexBanner')
}
//首页热推数据查询
export const getIndexListApi = (parm)=>{
	return http.get('/api/goods/getIndexList',parm)
}
```

##### 4、index.vue页面

```js
<template>
	<view class="u-wrap">
		<!-- 轮播图 -->
		<swiper class="swiper-container" circular :indicatorColor="indicatorColor" :indicator-dots="indicatorDots"
			:autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item,index) in swipperList" :key='index'>
				<image class="imgs" :src="item.images.split(',')[0]"></image>
			</swiper-item>
		</swiper>
		<!-- 搜索框 -->
		<view class="tab-strickt">
			<u-search @change="searchList" v-model="keywords" bg-color="#FFF" margin="8px" style="flex-grow: 1;" :show-action="true" action-text="搜索"
				:animation="true"></u-search>
		</view>
		<view class="">
			<u-waterfall v-if="flowList.length > 0" v-model="flowList" ref="uWaterfall1">
				<template v-slot:left="{leftList}">
					<view class="demo-warter-left" v-for="(item, index) in leftList" :key="index">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.goodsName}}
						</view>
						<view class="demo-price">
							{{item.goodsPrice}}元
						</view>
						<view class="demo-shop">
							{{item.address}}
						</view>
						<view class="demo-tag">
							<view v-if="item.type == '0'" class="demo-tag-owner">
								闲置
							</view>
							<view style="margin-left: 0;" v-else class="demo-tag-text">
								求购
							</view>
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter-right" v-for="(item, index) in rightList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.goodsName}}
						</view>
						<view class="demo-price">
							{{item.goodsPrice}}元
						</view>
						<view class="demo-shop">
							{{item.address}}
						</view>
						<view class="demo-tag">
							<view v-if="item.type == '0'" class="demo-tag-owner">
								闲置
							</view>
							<view style="margin-left: 0;" v-else class="demo-tag-text">
								求购
							</view>
						</view>
					</view>
				</template>
			</u-waterfall>
			<u-loadmore @loadmore="loadMore" bg-color="rgb(240, 240, 240)" :status="loadStatus"></u-loadmore>
		</view>
	</view>
</template>

<script setup>
	import {
		onReady,
		onReachBottom
	} from '@dcloudio/uni-app';
	import {
		ref
	} from 'vue';
	import {
		getIndexBannerApi,
		getIndexListApi
	} from '../../api/index.js'
	const indicatorDots = ref(true)
	const indicatorColor = ref("#FFF")
	const autoplay = ref(true)
	const interval = ref(2000)
	const duration = ref(500)
	//轮播图数据
	const swipperList = ref([])
	//瀑布流
	const flowList = ref([])
	//首页轮播图
	const getBannerList = async () => {
		let res = await getIndexBannerApi()
		if (res && res.code == 200) {
			console.log(res)
			swipperList.value = res.data;
		}
	}
	//首页热推
	const loadStatus = ref('loadmore')
	//当前页数
	const currentPage = ref(1)
	//每页查询条数
	const pageSize = ref(10)
	//总页数
	const pages = ref(0)
	const keywords = ref('')
	const getIndexList = async () => {
		let res = await getIndexListApi({
			currentPage: currentPage.value,
			pageSize: pageSize.value,
			keywords: keywords.value
		})
		if (res && res.code == 200) {
			//设置总页数
			pages.value = res.data.pages
			flowList.value = flowList.value.concat(res.data.records);
			loadStatus.value = 'loadmore';
		}
	}
	//加载更多
	const loadMore = ()=>{
		console.log('点击加载更多')
		// 如果当前页数大于等于总页数，状态修改为没有更多了，不再继续往下执行代码
		if (currentPage.value >= pages.value) {
			loadStatus.value = 'nomore';
			return;
		};
		loadStatus.value = 'loading'; //状态改为加载中
		currentPage.value = ++currentPage.value
		//修改页数后，重新获取数据
		getIndexList()
	}
	//触底加载
	onReachBottom(() => {
		console.log('触底加载更多')
		// 如果当前页数大于等于总页数，状态修改为没有更多了，不再继续往下执行代码
		if (currentPage.value >= pages.value) {
			loadStatus.value = 'nomore';
			return;
		};
		loadStatus.value = 'loading'; //状态改为加载中
		currentPage.value = ++currentPage.value
		//修改页数后，重新获取数据
		getIndexList()
	})
	//搜索
	const uWaterfall1 = ref()
	const searchList = ()=>{
		uWaterfall1.value.clear()
		currentPage.value = 1;
		loadStatus.value = 'loading';
		getIndexList()
	}
	
	onReady(() => {
		getBannerList()
		getIndexList()
	})
</script>

<style lang='scss'>
	.swiper-container {
		height: 180px;

		.item {
			height: 180px;
		}

		.imgs {
			height: 180px;
			width: 100%;
		}
	}

	.demo-warter-left {
		border-radius: 8px;
		margin: 5px 0px 5px 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.demo-warter-right {
		border-radius: 8px;
		margin: 5px 5px 5px 0px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}

	.tab-strickt {
		position: sticky;
		z-index: 99;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		background-color: #f2f2f2;
	}
</style>

```











#### 第69讲 小程序闲置页面接口开发

##### 1、WxIndexParm实体类

```js
package com.itmk.web.goods.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class WxIndexParm {
    private Long currentPage;
    private Long pageSize;
    private Long categoryId;
    private String keywords;
}

```

##### 2、GoodsCategoryController控制器添加getCateList()方法

```js
//小程序分类接口
@GetMapping("/getCateList")
public ResultVo getCateList(){
    List<GoodsCategory> list = goodsCategoryService.list();
    return ResultUtils.success("查询成功",list);
}
```

##### 3、GoodsController控制器添加getUsedList()和getBuyList()方法

```js
//小程序闲置列表查询
@GetMapping("/getUsedList")
public ResultVo getUsedList(WxIndexParm parm){
    //构造查询条件
    QueryWrapper<Goods> query = new QueryWrapper<>();
    query.lambda().like(StringUtils.isNotEmpty(parm.getKeywords()),Goods::getGoodsName,parm.getKeywords())
            .eq(Goods::getStatus,"0")
            .eq(Goods::getDeleteStatus,"0")
            .eq(Goods::getType,"0")
            .eq(Goods::getSellStatus,"0")
            .eq(Goods::getCategoryId,parm.getCategoryId())
            .orderByDesc(Goods::getCreateTime);
    //构造分页对象
    IPage<Goods> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
    IPage<Goods> list = goodsService.page(page, query);
    return ResultUtils.success("查询成功",list);
}

 //小程序求购列表查询
@GetMapping("/getBuyList")
public ResultVo getBuyList(WxIndexParm parm){
    //构造查询条件
    QueryWrapper<Goods> query = new QueryWrapper<>();
    query.lambda().like(StringUtils.isNotEmpty(parm.getKeywords()),Goods::getGoodsName,parm.getKeywords())
            .eq(Goods::getStatus,"0")
            .eq(Goods::getDeleteStatus,"0")
            .eq(Goods::getType,"1")
            .eq(Goods::getSellStatus,"0")
            .eq(Goods::getCategoryId,parm.getCategoryId())
            .orderByDesc(Goods::getCreateTime);
    //构造分页对象
    IPage<Goods> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
    IPage<Goods> list = goodsService.page(page, query);
    return ResultUtils.success("查询成功",list);
}
```

















#### 第70讲 闲置求购分类接口对接

##### 1、api/goods.js添加getCateListApi()方法

```js
import http from '../common/http.js'
//发布分类
export const categoryApi = (parm)=>{
	return http.get('/api/category/getSelectList',parm)
}
//发布
export const releaseApi = (parm)=>{
	return http.post('/api/goods/release',parm)
}
//闲置分类
export const getCateListApi = ()=>{
	return http.get('/api/category/getCateList')
}
```

##### 2、unused.vue页面

```js
<template>
	<view class="u-wrap">
		<!-- 搜索框 -->
		<u-search margin="20rpx 0rpx" :show-action="true" action-text="搜索" :animation="true"></u-search>
		<view class="tab-strickt">
			<u-tabs active-color="#FF7670" name="categoryName" count="cate_count" :list="tabList" :is-scroll="true"
				v-model="current" @change="change"></u-tabs>
		</view>
		<!-- 瀑布流列表 -->
		<view class="">
			<u-waterfall v-model="flowList" ref="uWaterfall1">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-price">
							{{item.price}}元
						</view>
						<view class="demo-tag">
							<view class="demo-tag-owner">
								自营
							</view>
							<view class="demo-tag-text">
								放心购
							</view>
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
						<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"
							@click="remove(item.id)">
						</u-icon>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-price">
							{{item.price}}元
						</view>
						<view class="demo-tag">
							<view class="demo-tag-owner">
								自营
							</view>
							<view class="demo-tag-text">
								放心购
							</view>
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
						<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"
							@click="remove(item.id)">
						</u-icon>
					</view>
				</template>
			</u-waterfall>
		</view>
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
	</view>
</template>

<script setup>
	import { onReady } from '@dcloudio/uni-app';
import {
		ref
	} from 'vue';
	import {getCateListApi} from '../../api/goods.js'
	const tabList = ref([])
	const current = ref(0)
	//瀑布流
	const flowList = ref([{
			price: 75,
			title: '小炒肉盖饭',
			image: '/static/11.jpg',
		},
		{
			price: 385,
			title: '手拉面',
			image: '/static/22.jpeg',
		},
		{
			price: 784,
			title: '小笼包',
			image: '/static/33.jpeg',
		},
		{
			price: 7891,
			title: '馄饨',
			image: '/static/44.jpg',
		},
		{
			price: 2341,
			title: '香菇肉片盖饭',
			image: '/static/66.jpeg',
		},
		{
			price: 2342,
			title: '番茄鸡蛋盖饭',
			image: '/static/55.jpg',
		},
		{
			price: 2341,
			title: '香菇肉片盖饭',
			image: '/static/11.jpg',
		},
		{
			price: 2342,
			title: '番茄鸡蛋盖饭',
			image: '/static/22.jpeg',
		}, {
			price: 75,
			title: '华硕笔记本电脑',
			image: '/static/11.jpg',
		},
		{
			price: 385,
			title: '笔记本电脑',
			image: '/static/22.jpeg',
		}
	])
	//获取分类数据
	const getCateList = async()=>{
		let res = await getCateListApi()
		if(res && res.code == 200){
			console.log(res)
			tabList.value = res.data;
			//分类数据的第一位添加全部
			tabList.value.unshift({
				categoryId:'',
				categoryName:'全部',
				orderNum:0
			})
		}
	}
	//分类点击事件
	const categoryId = ref('')
	const change = (e)=>{
		categoryId.value = tabList.value[e].categoryId
		console.log(categoryId.value)
	}
	onReady(()=>{
		getCateList()
	})
</script>

<style lang="scss">
	.tab-strickt {
		position: sticky;
		z-index: 99;
		top: 0;
		left: 0;
	}

	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}

	.tab-sticky {
		position: sticky;
		z-index: 99;
		top: 0;
		left: 0;
		background-color: #f2f2f2;
		display: flex;
		align-items: center;
	}
	/*去掉tabs选项卡滚动条*/
	scroll-view ::v-deep ::-webkit-scrollbar {
	   width: 0;
	   height: 0;
	   color: transparent
	}
</style>

```

##### 3、buy.vue页面

```js
<template>
	<view class="u-wrap">
		<!-- 搜索框 -->
		<u-search margin="20rpx 0rpx" :show-action="true" action-text="搜索" :animation="true"></u-search>
		<view class="tab-strickt">
			<u-tabs active-color="#FF7670" name="categoryName" count="cate_count" :list="tabList" :is-scroll="true"
				v-model="current" @change="change"></u-tabs>
		</view>
		<!-- 瀑布流列表 -->
		<view class="">
			<u-waterfall v-model="flowList" ref="uWaterfall1">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-price">
							{{item.price}}元
						</view>
						<view class="demo-tag">
							<view class="demo-tag-owner">
								自营
							</view>
							<view class="demo-tag-text">
								放心购
							</view>
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
						<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"
							@click="remove(item.id)">
						</u-icon>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-price">
							{{item.price}}元
						</view>
						<view class="demo-tag">
							<view class="demo-tag-owner">
								自营
							</view>
							<view class="demo-tag-text">
								放心购
							</view>
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
						<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"
							@click="remove(item.id)">
						</u-icon>
					</view>
				</template>
			</u-waterfall>
		</view>
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
	</view>
</template>

<script setup>
	import { onReady } from '@dcloudio/uni-app';
	import {
		ref
	} from 'vue';
	import {getCateListApi} from '../../api/goods.js'
	const tabList = ref([])
	const current = ref(0)
	//瀑布流
	const flowList = ref([{
			price: 75,
			title: '小炒肉盖饭',
			image: '/static/11.jpg',
		},
		{
			price: 385,
			title: '手拉面',
			image: '/static/22.jpeg',
		},
		{
			price: 784,
			title: '小笼包',
			image: '/static/33.jpeg',
		},
		{
			price: 7891,
			title: '馄饨',
			image: '/static/44.jpg',
		},
		{
			price: 2341,
			title: '香菇肉片盖饭',
			image: '/static/66.jpeg',
		},
		{
			price: 2342,
			title: '番茄鸡蛋盖饭',
			image: '/static/55.jpg',
		},
		{
			price: 2341,
			title: '香菇肉片盖饭',
			image: '/static/11.jpg',
		},
		{
			price: 2342,
			title: '番茄鸡蛋盖饭',
			image: '/static/22.jpeg',
		}, {
			price: 75,
			title: '华硕笔记本电脑',
			image: '/static/11.jpg',
		},
		{
			price: 385,
			title: '笔记本电脑',
			image: '/static/22.jpeg',
		}
	])
	//获取分类数据
	const getCateList = async()=>{
		let res = await getCateListApi()
		if(res && res.code == 200){
			console.log(res)
			tabList.value = res.data;
			//分类数据的第一位添加全部
			tabList.value.unshift({
				categoryId:'',
				categoryName:'全部',
				orderNum:0
			})
		}
	}
	//分类点击事件
	const categoryId = ref('')
	const change = (e)=>{
		categoryId.value = tabList.value[e].categoryId
		console.log(categoryId.value)
	}
	onReady(()=>{
		getCateList()
	})
</script>

<style lang="scss">
	.tab-strickt {
		position: sticky;
		z-index: 99;
		top: 0;
		left: 0;
	}

	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}

	.tab-sticky {
		position: sticky;
		z-index: 99;
		top: 0;
		left: 0;
		background-color: #f2f2f2;
		display: flex;
		align-items: center;
	}
	/*去掉tabs选项卡滚动条*/
	scroll-view ::v-deep ::-webkit-scrollbar {
	   width: 0;
	   height: 0;
	   color: transparent
	}
</style>

```













#### 第71讲 闲置和求购列表对接

##### 1、api/goods.js添加getUsedListApi()和getBuyListApi()方法

```js
import http from '../common/http.js'
//发布分类
export const categoryApi = (parm)=>{
	return http.get('/api/category/getSelectList',parm)
}
//发布
export const releaseApi = (parm)=>{
	return http.post('/api/goods/release',parm)
}
//闲置分类
export const getCateListApi = ()=>{
	return http.get('/api/category/getCateList')
}
//闲置列表
export const getUsedListApi = (parm)=>{
	return http.get('/api/goods/getUsedList',parm)
}
//求购列表
export const getBuyListApi = (parm)=>{
	return http.get('/api/goods/getBuyList',parm)
}
```

##### 2、unused.vue

```js
<template>
	<view class="u-wrap">
		<!-- 搜索框 -->
		<u-search v-model="keywords" @change="searchBtn" margin="20rpx 0rpx" :show-action="true" action-text="搜索" :animation="true"></u-search>
		<view class="tab-strickt">
			<u-tabs active-color="#FF7670" name="categoryName" count="cate_count" :list="tabList" :is-scroll="true"
				v-model="current" @change="change"></u-tabs>
		</view>
		<!-- 瀑布流列表 -->
		<view class="">
			<u-waterfall v-model="flowList" ref="uWaterfall1">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.goodsName}}
						</view>
						<view class="demo-price">
							{{item.goodsPrice}}元
						</view>
						<view class="demo-tag">
							<view v-if="item.type == '0'" class="demo-tag-owner">
								闲置
							</view>
							<view style="margin-left: 0;" v-else class="demo-tag-text">
								求购
							</view>
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.goodsName}}
						</view>
						<view class="demo-price">
							{{item.goodsPrice}}元
						</view>
						<view class="demo-tag">
							<view v-if="item.type == '0'" class="demo-tag-owner">
								闲置
							</view>
							<view style="margin-left: 0;" v-else class="demo-tag-text">
								求购
							</view>
						</view>
					</view>
				</template>
			</u-waterfall>
		</view>
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="loadMore"></u-loadmore>
	</view>
</template>

<script setup>
	import { onReady,onReachBottom } from '@dcloudio/uni-app';
import {
		ref
	} from 'vue';
	import {getCateListApi,getUsedListApi} from '../../api/goods.js'
	const tabList = ref([])
	const current = ref(0)
	const uWaterfall1 = ref()
	const loadStatus = ref('loadmore')
	//瀑布流
	const flowList = ref([])
	//获取分类数据
	const getCateList = async()=>{
		let res = await getCateListApi()
		if(res && res.code == 200){
			console.log(res)
			tabList.value = res.data;
			//分类数据的第一位添加全部
			tabList.value.unshift({
				categoryId:'',
				categoryName:'全部',
				orderNum:0
			})
		}
	}
	//分类点击事件
	const categoryId = ref('')
	const change = (e)=>{
		categoryId.value = tabList.value[e].categoryId
		console.log(categoryId.value)
		//清空列表数据
		currentPage.value = 1;
		//清空瀑布流的数据
		uWaterfall1.value.clear()
		//调用列表
		getUsedList()
	}
	//获取闲置列表数据
	const currentPage = ref(1)
	const pageSize = ref(10)
	const keywords = ref('')
	const pages = ref(0)
	const getUsedList = async()=>{
		let res = await getUsedListApi({
			currentPage:currentPage.value,
			pageSize:pageSize.value,
			categoryId:categoryId.value,
			keywords:keywords.value
		})
		if(res && res.code == 200){
			console.log(res)
			flowList.value = flowList.value.concat(res.data.records)
			pages.value = res.data.pages
		}
	}
	//关键字搜索
	const searchBtn = ()=>{
		currentPage.value = 1;
		//清空瀑布流的数据
		uWaterfall1.value.clear()
		//获取数据
		getUsedList()
	}
	//加载更多
	const loadMore = ()=>{
		console.log('加载更多')
		if(currentPage.value >= pages.value){
			loadStatus.value = 'nomore'
			return;
		}
		loadStatus.value = 'loading'
		//页数加1
		currentPage.value = ++currentPage.value;
		//获取数据
		getUsedList()
	}
	//触底加载
	onReachBottom(()=>{
		console.log('触底加载')
		if(currentPage.value >= pages.value){
			loadStatus.value = 'nomore'
			return;
		}
		loadStatus.value = 'loading'
		//页数加1
		currentPage.value = ++currentPage.value;
		//获取数据
		getUsedList()
	})
	onReady(()=>{
		getCateList()
		getUsedList()
	})
</script>

<style lang="scss">
	.tab-strickt {
		position: sticky;
		z-index: 99;
		top: 0;
		left: 0;
	}

	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}

	.tab-sticky {
		position: sticky;
		z-index: 99;
		top: 0;
		left: 0;
		background-color: #f2f2f2;
		display: flex;
		align-items: center;
	}
	/*去掉tabs选项卡滚动条*/
	scroll-view ::v-deep ::-webkit-scrollbar {
	   width: 0;
	   height: 0;
	   color: transparent
	}
</style>

```

##### 3、buy.vue页面

```js
<template>
	<view class="u-wrap">
		<!-- 搜索框 -->
		<u-search v-model="keywords" @change="searchBtn" margin="20rpx 0rpx" :show-action="true" action-text="搜索" :animation="true"></u-search>
		<view class="tab-strickt">
			<u-tabs active-color="#FF7670" name="categoryName" count="cate_count" :list="tabList" :is-scroll="true"
				v-model="current" @change="change"></u-tabs>
		</view>
		<!-- 瀑布流列表 -->
		<view class="">
			<u-waterfall v-model="flowList" ref="uWaterfall1">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.goodsName}}
						</view>
						<view class="demo-price">
							{{item.goodsPrice}}元
						</view>
						<view class="demo-tag">
							<view v-if="item.type == '0'" class="demo-tag-owner">
								闲置
							</view>
							<view style="margin-left: 0;" v-else class="demo-tag-text">
								求购
							</view>
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.goodsName}}
						</view>
						<view class="demo-price">
							{{item.goodsPrice}}元
						</view>
						<view class="demo-tag">
							<view v-if="item.type == '0'" class="demo-tag-owner">
								闲置
							</view>
							<view style="margin-left: 0;" v-else class="demo-tag-text">
								求购
							</view>
						</view>
					</view>
				</template>
			</u-waterfall>
		</view>
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="loadMore"></u-loadmore>
	</view>
</template>

<script setup>
	import { onReady,onReachBottom } from '@dcloudio/uni-app';
import {
		ref
	} from 'vue';
	import {getCateListApi,getBuyListApi} from '../../api/goods.js'
	const tabList = ref([])
	const current = ref(0)
	const uWaterfall1 = ref()
	const loadStatus = ref('loadmore')
	//瀑布流
	const flowList = ref([])
	//获取分类数据
	const getCateList = async()=>{
		let res = await getCateListApi()
		if(res && res.code == 200){
			console.log(res)
			tabList.value = res.data;
			//分类数据的第一位添加全部
			tabList.value.unshift({
				categoryId:'',
				categoryName:'全部',
				orderNum:0
			})
		}
	}
	//分类点击事件
	const categoryId = ref('')
	const change = (e)=>{
		categoryId.value = tabList.value[e].categoryId
		console.log(categoryId.value)
		//清空列表数据
		currentPage.value = 1;
		//清空瀑布流的数据
		uWaterfall1.value.clear()
		//调用列表
		getUsedList()
	}
	//获取闲置列表数据
	const currentPage = ref(1)
	const pageSize = ref(10)
	const keywords = ref('')
	const pages = ref(0)
	const getUsedList = async()=>{
		let res = await getBuyListApi({
			currentPage:currentPage.value,
			pageSize:pageSize.value,
			categoryId:categoryId.value,
			keywords:keywords.value
		})
		if(res && res.code == 200){
			console.log(res)
			flowList.value = flowList.value.concat(res.data.records)
			pages.value = res.data.pages
		}
	}
	//关键字搜索
	const searchBtn = ()=>{
		currentPage.value = 1;
		//清空瀑布流的数据
		uWaterfall1.value.clear()
		//获取数据
		getUsedList()
	}
	//加载更多
	const loadMore = ()=>{
		console.log('加载更多')
		if(currentPage.value >= pages.value){
			loadStatus.value = 'nomore'
			return;
		}
		loadStatus.value = 'loading'
		//页数加1
		currentPage.value = ++currentPage.value;
		//获取数据
		getUsedList()
	}
	//触底加载
	onReachBottom(()=>{
		console.log('触底加载')
		if(currentPage.value >= pages.value){
			loadStatus.value = 'nomore'
			return;
		}
		loadStatus.value = 'loading'
		//页数加1
		currentPage.value = ++currentPage.value;
		//获取数据
		getUsedList()
	})
	onReady(()=>{
		getCateList()
		getUsedList()
	})
</script>

<style lang="scss">
	.tab-strickt {
		position: sticky;
		z-index: 99;
		top: 0;
		left: 0;
	}

	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}

	.tab-sticky {
		position: sticky;
		z-index: 99;
		top: 0;
		left: 0;
		background-color: #f2f2f2;
		display: flex;
		align-items: center;
	}
	/*去掉tabs选项卡滚动条*/
	scroll-view ::v-deep ::-webkit-scrollbar {
	   width: 0;
	   height: 0;
	   color: transparent
	}
</style>

```











#### 第72讲 闲置、求购详情页制作

##### 1、新建unused_detail页面

```js
<template>
	<view style="overflow-y: auto;">
		<u-swiper name='image' border-radius='1' :duration='duration' :interval='interval' :height="height"
			:list="swipperList">
		</u-swiper>
		<view class="header">
			<view class="title">
				笔记本电脑
			</view>
			<view class="price">
				￥1500
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				物品简介
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				一台8成新的笔记本电脑
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				物品位置
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				西北风大学
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				交易流程
			</view>
		</view>
		<view class="info">
			<u-steps active-color="#FF7670" style="width: 100%;" mode="number" :list="numlist" :current="4"></u-steps>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				交易方式
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				自行协商.自提|送货上门|约定交易点|当面验货交易
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				发布时间
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				2023-08-07
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				联系方式
			</view>
		</view>
		<view class="useinfo">
			<view class="title-desc">
				电话:125464654
			</view>
			<view class="title-desc">
				微信:itm123
			</view>
		</view>
		<view class="navigation">
			<view class="left">
				<view class="item">
					<u-icon name="home" :size="40"></u-icon>
					<view class="text u-line-1">首页</view>
				</view>
				<view class="item">
					<u-icon :size="40" name="star"></u-icon>
					<view class="text u-line-1">收藏</view>
				</view>
				<view class="item car">
					<u-icon name="info-circle" :size="40"></u-icon>
					<view class="text u-line-1">举报</view>
				</view>
			</view>
			<view class="right">
				<view class="cart btn u-line-1">电话咨询</view>
				<view class="buy btn u-line-1">立即交易</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	//轮播图高度
	const height = ref('350')
	//是否显示面板指示点
	const indicatorDots = ref(true)
	//是否自动播放
	const autoplay = ref(true)
	//自动切换时间间隔
	const interval = ref(2000)
	//滑动动画时长
	const duration = ref(500)
	const swipperList = ref([{
		image: '/static/33.jpeg'
	}, {
		image: '/static/44.jpg'
	}, {
		image: '/static/66.jpeg'
	}])
	const numlist = ref([{
		name: '发布信息'
	}, {
		name: '电话/微信沟通'
	}, {
		name: '当面交易'
	}, {
		name: '交易完成'
	}])
</script>

<style lang="scss">
	.header {
		display: flex;
	}

	.title {
		color: #303133;
		font-weight: bold;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.price {
		color: #FF7670;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.info-fa {
		display: flex;
		align-items: center;
	}

	.fa-left {
		width: 1px;
		height: 12px;
		border-left: 3px solid #FF7670;
		margin-left: 10px;
	}

	.goodsInfo {
		padding: 5px;
		color: #F3AF28;
	}

	.info {
		display: flex;
		align-items: center;
		background-color: #FFF;
		margin-bottom: 25px;
		padding: 0px 20px;
	}

	.useinfo {
		display: flex;
		flex-direction: column;
		margin-left: 20px;
		margin-bottom: 80px;
	}

	.navigation {
		display: flex;
		margin-top: 100rpx;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 16rpx 0;
		position: fixed;
		width: 100%;
		bottom: 0;

		.left {
			display: flex;
			font-size: 20rpx;

			.item {
				margin: 0 30rpx;

				&.car {
					text-align: center;
					position: relative;

					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}

		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;

			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}

			.cart {
				background-color: #FF7670;
				margin-right: 30rpx;
			}

			.buy {
				background-color: #F3AF28;
			}
		}
	}
</style>

```

##### 2、新建buy_detail页面

```js
<template>
	<view style="overflow-y: auto;">
		<u-swiper name='image' border-radius='1' :duration='duration' :interval='interval' :height="height"
			:list="swipperList">
		</u-swiper>
		<view class="header">
			<view class="title">
				笔记本电脑
			</view>
			<view class="price">
				￥1500
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				物品简介
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				一台8成新的笔记本电脑
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				物品位置
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				西北风大学
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				交易流程
			</view>
		</view>
		<view class="info">
			<u-steps active-color="#FF7670" style="width: 100%;" mode="number" :list="numlist" :current="4"></u-steps>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				交易方式
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				自行协商.自提|送货上门|约定交易点|当面验货交易
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				发布时间
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				2023-08-07
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				联系方式
			</view>
		</view>
		<view class="useinfo">
			<view class="title-desc">
				电话:125464654
			</view>
			<view class="title-desc">
				微信:itm123
			</view>
		</view>
		<view class="navigation">
			<view class="left">
				<view class="item">
					<u-icon name="home" :size="40"></u-icon>
					<view class="text u-line-1">首页</view>
				</view>
				<view class="item">
					<u-icon :size="40" name="star"></u-icon>
					<view class="text u-line-1">收藏</view>
				</view>
				<view class="item car">
					<u-icon name="info-circle" :size="40"></u-icon>
					<view class="text u-line-1">举报</view>
				</view>
			</view>
			<view class="right">
				<view class="cart btn u-line-1">电话咨询</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	//轮播图高度
	const height = ref('350')
	//是否显示面板指示点
	const indicatorDots = ref(true)
	//是否自动播放
	const autoplay = ref(true)
	//自动切换时间间隔
	const interval = ref(2000)
	//滑动动画时长
	const duration = ref(500)
	const swipperList = ref([{
		image: '/static/33.jpeg'
	}, {
		image: '/static/44.jpg'
	}, {
		image: '/static/66.jpeg'
	}])
	const numlist = ref([{
		name: '发布信息'
	}, {
		name: '电话/微信沟通'
	}, {
		name: '当面交易'
	}, {
		name: '交易完成'
	}])
</script>

<style lang="scss">
	.header {
		display: flex;
	}

	.title {
		color: #303133;
		font-weight: bold;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.price {
		color: #FF7670;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.info-fa {
		display: flex;
		align-items: center;
	}

	.fa-left {
		width: 1px;
		height: 12px;
		border-left: 3px solid #FF7670;
		margin-left: 10px;
	}

	.goodsInfo {
		padding: 5px;
		color: #F3AF28;
	}

	.info {
		display: flex;
		align-items: center;
		background-color: #FFF;
		margin-bottom: 25px;
		padding: 0px 20px;
	}

	.useinfo {
		display: flex;
		flex-direction: column;
		margin-left: 20px;
		margin-bottom: 80px;
	}

	.navigation {
		display: flex;
		margin-top: 100rpx;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 16rpx 0;
		position: fixed;
		width: 100%;
		bottom: 0;

		.left {
			display: flex;
			font-size: 20rpx;

			.item {
				margin: 0 30rpx;

				&.car {
					text-align: center;
					position: relative;

					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}

		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;

			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}

			.cart {
				background-color: #FF7670;
				margin-right: 30rpx;
			}

			.buy {
				background-color: #F3AF28;
			}
		}
	}
</style>

```













#### 第73讲 闲置、求购详情页数据回显

##### 1、页面跳转详情页

```js

```

##### 2、详情页

```js
//名称
const goodsName = ref('')
//价格
const goodsPrice = ref('')
//简介
const goodsDesc = ref('')
//位置
const address = ref('')
const wxNum = ref('')
const phone = ref('')
//发布时间
const createTime = ref('')

onLoad((options) => {
    const goods = JSON.parse(options.goods)
    console.log(goods)
    goodsId.value = goods.goodsId;
    addModel.goodsId = goods.goodsId;
    release.value = goods.userId;
    if (goods.image) {
        swipperList.value = goods.image.split(",");
    }
    goodsName.value = goods.goodsName;
    goodsDesc.value = goods.goodsDesc;
    address.value = goods.address;
    goodsPrice.value = goods.goodsPrice
    createTime.value = goods.createTime
    phone.value = goods.phone
    wxNum.value = goods.wxNum
})
```















#### 第74讲 交易、举报页面制作

##### 1、unused_detail.vue页面

```js
<template>
	<view style="overflow-y: auto;">
		<u-swiper name='image' border-radius='1' :duration='duration' :interval='interval' :height="height"
			:list="swipperList">
		</u-swiper>
		<view class="header">
			<view class="title">
				{{goodsName}}
			</view>
			<view class="price">
				￥{{goodsPrice}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				物品简介
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{goodsDesc}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				物品位置
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{address}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				交易流程
			</view>
		</view>
		<view class="info">
			<u-steps active-color="#FF7670" style="width: 100%;" mode="number" :list="numlist" :current="4"></u-steps>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				交易方式
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				自行协商.自提|送货上门|约定交易点|当面验货交易
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				发布时间
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{createTime}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				联系方式
			</view>
		</view>
		<view class="useinfo">
			<view class="title-desc">
				电话:{{phone}}
			</view>
			<view class="title-desc">
				微信:{{wxNum}}
			</view>
		</view>
		<view class="navigation">
			<view class="left">
				<view @click="toHome" class="item">
					<u-icon name="home" :size="40"></u-icon>
					<view class="text u-line-1">首页</view>
				</view>
				<view class="item">
					<u-icon :size="40" name="star"></u-icon>
					<view class="text u-line-1">收藏</view>
				</view>
				<view @click="toRepory" class="item car">
					<u-icon name="info-circle" :size="40"></u-icon>
					<view class="text u-line-1">举报</view>
				</view>
			</view>
			<view class="right">
				<view @click="callPhone" class="cart btn u-line-1">电话咨询</view>
				<view @click="toBuy" class="buy btn u-line-1">立即交易</view>
			</view>
		</view>
		<!-- 立即交易 -->
		<u-popup :mask-close-able="false" border-radius="15" width="85%" height="200px" v-model="show" mode="center">
			<view style="padding: 50px 15px 30px 15px;">
				<u-form label-width="auto" :model="addModel" ref="form1">
					<u-form-item label="请输入交易金额" prop="price"><u-input v-model="addModel.price" /></u-form-item>
				</u-form>
			</view>
			<view class="conBtn">
				<u-button @click="cancel" style="margin-right: 15px;" type="info">取消交易</u-button>
				<u-button @click="confirm" style="margin-left: 15px;" :custom-style="customStyle" type="error">确定交易</u-button>
			</view>
		</u-popup>
		<!-- 举报 -->
		<u-popup :mask-close-able="false" border-radius="15" width="85%" height="200px" v-model="reportShow" mode="center">
			<view style="padding: 50px 15px 30px 15px;">
				<u-form label-width="auto" :model="reportModel" ref="form1">
					<u-form-item label="请输入举报原因" prop="reason"><u-input v-model="addModel.reason" /></u-form-item>
				</u-form>
			</view>
			<view class="conBtn">
				<u-button @click="reportCancel" style="margin-right: 15px;" type="info">取消举报</u-button>
				<u-button @click="reportConfirm" style="margin-left: 15px;" :custom-style="customStyle" type="error">确定举报</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		reactive,
		ref
	} from 'vue';
	const customStyle = reactive({
		background:'#FF7670'
	})
	//轮播图高度
	const height = ref('350')
	//是否显示面板指示点
	const indicatorDots = ref(true)
	//是否自动播放
	const autoplay = ref(true)
	//自动切换时间间隔
	const interval = ref(2000)
	//滑动动画时长
	const duration = ref(500)
	const swipperList = ref([])
	const numlist = ref([{
		name: '发布信息'
	}, {
		name: '电话/微信沟通'
	}, {
		name: '当面交易'
	}, {
		name: '交易完成'
	}])
	const goodsId = ref('')
	//名称
	const goodsName = ref('')
	//价格
	const goodsPrice = ref('')
	//简介
	const goodsDesc = ref('')
	//位置
	const address = ref('')
	const wxNum = ref('')
	const phone = ref('')
	//发布时间
	const createTime = ref('')
	//跳转首页
	const toHome = ()=>{
		uni.switchTab({
			url:"../index/index"
		})
	}
	//电话咨询
	const callPhone = ()=>{
		uni.makePhoneCall({
			phoneNumber:phone.value,
			success:(res)=>{},
			fail: (res) => {
				
			}
		})
	}
	//立即交易按钮
	const show = ref(false)
	const toBuy = ()=>{
		show.value = true;
	}
	const addModel = reactive({
		price:""
	})
	//交易取消
	const cancel = ()=>{
		show.value = false;
	}
	//交易确定
	const confirm = ()=>{
		show.value = false;
	}
	
	//举报按钮
	const reportShow = ref(false)
	const toRepory = ()=>{
		reportShow.value = true;
	}
	const reportModel = reactive({
		reason:""
	})
	//交易取消
	const reportCancel = ()=>{
		reportShow.value = false;
	}
	//交易确定
	const reportConfirm = ()=>{
		reportShow.value = false;
	}
	onLoad((options) => {
		const goods = JSON.parse(options.goods)
		console.log(goods)
		goodsId.value = goods.goodsId;
		//物品的图片:轮播图数据
		if (goods.image) {
			swipperList.value = goods.image.split(",");
		}
		goodsName.value = goods.goodsName;
		goodsDesc.value = goods.goodsDesc;
		address.value = goods.address;
		goodsPrice.value = goods.goodsPrice
		createTime.value = goods.createTime
		phone.value = goods.phone
		wxNum.value = goods.wxNum
	})
</script>

<style lang="scss">
	.conBtn{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.header {
		display: flex;
	}

	.title {
		color: #303133;
		font-weight: bold;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.price {
		color: #FF7670;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.info-fa {
		display: flex;
		align-items: center;
	}

	.fa-left {
		width: 1px;
		height: 12px;
		border-left: 3px solid #FF7670;
		margin-left: 10px;
	}

	.goodsInfo {
		padding: 5px;
		color: #F3AF28;
	}

	.info {
		display: flex;
		align-items: center;
		background-color: #FFF;
		margin-bottom: 25px;
		padding: 0px 20px;
	}

	.useinfo {
		display: flex;
		flex-direction: column;
		margin-left: 20px;
		margin-bottom: 80px;
	}

	.navigation {
		display: flex;
		margin-top: 100rpx;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 16rpx 0;
		position: fixed;
		width: 100%;
		bottom: 0;

		.left {
			display: flex;
			font-size: 20rpx;

			.item {
				margin: 0 30rpx;

				&.car {
					text-align: center;
					position: relative;

					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}

		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;

			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}

			.cart {
				background-color: #FF7670;
				margin-right: 30rpx;
			}

			.buy {
				background-color: #F3AF28;
			}
		}
	}
</style>

```



















#### 第75讲 交易订单接口开发

##### 1、订单sql脚本

```js
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `goods_order`;
CREATE TABLE `goods_order`  (
  `order_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单id',
  `goods_id` int(11) NULL DEFAULT NULL COMMENT '商品id',
  `order_user` int(11) NULL DEFAULT NULL COMMENT '下单人id',
  `price` decimal(10, 2) NULL DEFAULT NULL COMMENT '订单金额',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '下单时间',
  PRIMARY KEY (`order_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

```

##### 2、实体类

```js
package com.itmk.web.goods_order.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
@TableName("goods_order")
public class GoodsOrder {
    @TableId(type = IdType.AUTO)
    private Long orderId;
    private Long goodsId;
    private Long orderUser;
    private BigDecimal price;
    private Date createTime;
}

```

##### 3、新建mapper层

```js
package com.itmk.web.goods_order.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itmk.web.goods_order.entity.GoodsOrder;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsOrderMapper extends BaseMapper<GoodsOrder> {
}

```

GoodsOrderMapper.xml

```js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.goods_order.mapper.GoodsOrderMapper">

</mapper>
```

##### 4、新建service层

```js
package com.itmk.web.goods_order.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itmk.web.goods_order.entity.GoodsOrder;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsOrderService extends IService<GoodsOrder> {
    void replaceOrder(GoodsOrder goodsOrder);
}

```

实现类

```js
package com.itmk.web.goods_order.service.impl;

import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.goods.entity.Goods;
import com.itmk.web.goods.service.GoodsService;
import com.itmk.web.goods_order.entity.GoodsOrder;
import com.itmk.web.goods_order.mapper.GoodsOrderMapper;
import com.itmk.web.goods_order.service.GoodsOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Service
public class GoodsOrderServiceImpl extends ServiceImpl<GoodsOrderMapper, GoodsOrder> implements GoodsOrderService {

    @Autowired
    private GoodsService goodsService;

    @Override
    @Transactional
    public void replaceOrder(GoodsOrder goodsOrder) {
        //1、插入订单数据
        goodsOrder.setCreateTime(new Date());
        int insert = this.baseMapper.insert(goodsOrder);
        //2、更新商品状态
        if(insert > 0){
            UpdateWrapper<Goods> query = new UpdateWrapper<>();
            query.lambda().set(Goods::getSellStatus,"1")
                    .set(Goods::getStatus,"1")
                    .eq(Goods::getGoodsId,goodsOrder.getGoodsId());
            goodsService.update(query);
        }
    }
}

```

##### 5、新建controller控制器

```js
package com.itmk.web.goods_order.controller;

import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.goods_order.entity.GoodsOrder;
import com.itmk.web.goods_order.service.GoodsOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RestController
@RequestMapping("/api/goodsOrder")
public class GoodsOrderController {
    @Autowired
    private GoodsOrderService goodsOrderService;

    //交易订单
    @PostMapping("/replaceOrder")
    public ResultVo replaceOrder(@RequestBody GoodsOrder order){
        goodsOrderService.replaceOrder(order);
        return ResultUtils.success("交易成功!");
    }
}

```















#### 第76讲 交易订单对接

##### 1、小程序api下新建order.js

```js
import http from '../common/http.js'
//提交交易
export const replaceOrderApi = (parm)=>{
	return http.post('/api/goodsOrder/replaceOrder',parm)
}
```

##### 2、unused_detail.vue页面

```js
<template>
	<view style="overflow-y: auto;">
		<u-swiper name='image' border-radius='1' :duration='duration' :interval='interval' :height="height"
			:list="swipperList">
		</u-swiper>
		<view class="header">
			<view class="title">
				{{goodsName}}
			</view>
			<view class="price">
				￥{{goodsPrice}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				物品简介
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{goodsDesc}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				物品位置
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{address}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				交易流程
			</view>
		</view>
		<view class="info">
			<u-steps active-color="#FF7670" style="width: 100%;" mode="number" :list="numlist" :current="4"></u-steps>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				交易方式
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				自行协商.自提|送货上门|约定交易点|当面验货交易
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				发布时间
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{createTime}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				联系方式
			</view>
		</view>
		<view class="useinfo">
			<view class="title-desc">
				电话:{{phone}}
			</view>
			<view class="title-desc">
				微信:{{wxNum}}
			</view>
		</view>
		<view class="navigation">
			<view class="left">
				<view @click="toHome" class="item">
					<u-icon name="home" :size="40"></u-icon>
					<view class="text u-line-1">首页</view>
				</view>
				<view class="item">
					<u-icon :size="40" name="star"></u-icon>
					<view class="text u-line-1">收藏</view>
				</view>
				<view @click="toRepory" class="item car">
					<u-icon name="info-circle" :size="40"></u-icon>
					<view class="text u-line-1">举报</view>
				</view>
			</view>
			<view class="right">
				<view @click="callPhone" class="cart btn u-line-1">电话咨询</view>
				<view @click="toBuy" class="buy btn u-line-1">立即交易</view>
			</view>
		</view>
		<!-- 立即交易 -->
		<u-popup :mask-close-able="false" border-radius="15" width="85%" height="200px" v-model="show" mode="center">
			<view style="padding: 50px 15px 30px 15px;">
				<u-form label-width="auto" :model="addModel" ref="form1">
					<u-form-item label="请输入交易金额" prop="price"><u-input v-model="addModel.price" /></u-form-item>
				</u-form>
			</view>
			<view class="conBtn">
				<u-button @click="cancel" style="margin-right: 15px;" type="info">取消交易</u-button>
				<u-button @click="confirm" style="margin-left: 15px;" :custom-style="customStyle" type="error">确定交易</u-button>
			</view>
		</u-popup>
		<!-- 举报 -->
		<u-popup :mask-close-able="false" border-radius="15" width="85%" height="200px" v-model="reportShow" mode="center">
			<view style="padding: 50px 15px 30px 15px;">
				<u-form label-width="auto" :model="reportModel" ref="form1">
					<u-form-item label="请输入举报原因" prop="reason"><u-input v-model="addModel.reason" /></u-form-item>
				</u-form>
			</view>
			<view class="conBtn">
				<u-button @click="reportCancel" style="margin-right: 15px;" type="info">取消举报</u-button>
				<u-button @click="reportConfirm" style="margin-left: 15px;" :custom-style="customStyle" type="error">确定举报</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		reactive,
		ref
	} from 'vue';
	import {replaceOrderApi} from '../../api/order.js'
	const customStyle = reactive({
		background:'#FF7670'
	})
	//轮播图高度
	const height = ref('350')
	//是否显示面板指示点
	const indicatorDots = ref(true)
	//是否自动播放
	const autoplay = ref(true)
	//自动切换时间间隔
	const interval = ref(2000)
	//滑动动画时长
	const duration = ref(500)
	const swipperList = ref([])
	const numlist = ref([{
		name: '发布信息'
	}, {
		name: '电话/微信沟通'
	}, {
		name: '当面交易'
	}, {
		name: '交易完成'
	}])
	const goodsId = ref('')
	//名称
	const goodsName = ref('')
	//价格
	const goodsPrice = ref('')
	//简介
	const goodsDesc = ref('')
	//位置
	const address = ref('')
	const wxNum = ref('')
	const phone = ref('')
	//发布时间
	const createTime = ref('')
	//跳转首页
	const toHome = ()=>{
		uni.switchTab({
			url:"../index/index"
		})
	}
	//电话咨询
	const callPhone = ()=>{
		uni.makePhoneCall({
			phoneNumber:phone.value,
			success:(res)=>{},
			fail: (res) => {
				
			}
		})
	}
	//商品创建人的id
	const creatUser = ref('')
	//立即交易按钮
	const show = ref(false)
	const toBuy = ()=>{
		show.value = true;
	}
	const addModel = reactive({
		price:"",
		goodsId:"",
		orderUser:uni.getStorageSync("userId")
	})
	//交易取消
	const cancel = ()=>{
		show.value = false;
	}
	//交易确定
	const confirm = async()=>{
		//是否填写金额
		if(!addModel.price){
			uni.showToast({
				title:'请填写交易金额',
				icon:"none",
				mask:true,
				duration:3000
			})
			return;
		}
		if(creatUser.value == addModel.orderUser){
			uni.showToast({
				title:'不能交易自己发布的商品！',
				icon:"none",
				mask:true,
				duration:3000
			})
			return;
		}
		let res = await replaceOrderApi(addModel)
		if(res && res.code == 200){
			show.value = false;
		}
		
	}
	
	//举报按钮
	const reportShow = ref(false)
	const toRepory = ()=>{
		reportShow.value = true;
	}
	const reportModel = reactive({
		reason:""
	})
	//交易取消
	const reportCancel = ()=>{
		reportShow.value = false;
	}
	//交易确定
	const reportConfirm = ()=>{
		reportShow.value = false;
	}
	onLoad((options) => {
		const goods = JSON.parse(options.goods)
		console.log(goods)
		goodsId.value = goods.goodsId;
		addModel.goodsId = goods.goodsId;
		creatUser.value = goods.userId;
		//物品的图片:轮播图数据
		if (goods.image) {
			swipperList.value = goods.image.split(",");
		}
		goodsName.value = goods.goodsName;
		goodsDesc.value = goods.goodsDesc;
		address.value = goods.address;
		goodsPrice.value = goods.goodsPrice
		createTime.value = goods.createTime
		phone.value = goods.phone
		wxNum.value = goods.wxNum
	})
</script>

<style lang="scss">
	.conBtn{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.header {
		display: flex;
	}

	.title {
		color: #303133;
		font-weight: bold;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.price {
		color: #FF7670;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.info-fa {
		display: flex;
		align-items: center;
	}

	.fa-left {
		width: 1px;
		height: 12px;
		border-left: 3px solid #FF7670;
		margin-left: 10px;
	}

	.goodsInfo {
		padding: 5px;
		color: #F3AF28;
	}

	.info {
		display: flex;
		align-items: center;
		background-color: #FFF;
		margin-bottom: 25px;
		padding: 0px 20px;
	}

	.useinfo {
		display: flex;
		flex-direction: column;
		margin-left: 20px;
		margin-bottom: 80px;
	}

	.navigation {
		display: flex;
		margin-top: 100rpx;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 16rpx 0;
		position: fixed;
		width: 100%;
		bottom: 0;

		.left {
			display: flex;
			font-size: 20rpx;

			.item {
				margin: 0 30rpx;

				&.car {
					text-align: center;
					position: relative;

					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}

		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;

			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}

			.cart {
				background-color: #FF7670;
				margin-right: 30rpx;
			}

			.buy {
				background-color: #F3AF28;
			}
		}
	}
</style>

```

















#### 第77讲 收藏接口开发

##### 1、sql脚本

```js
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `goods_collect`;
CREATE TABLE `goods_collect`  (
  `collect_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户id',
  `goods_id` int(11) NULL DEFAULT NULL COMMENT '商品id',
  `collect_time` datetime(0) NULL DEFAULT NULL COMMENT '收藏时间',
  PRIMARY KEY (`collect_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

```

##### 2、新建实体类

```js
package com.itmk.web.goods_collect.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
@TableName("goods_collect")
public class GoodsCollect {
    @TableId(type = IdType.AUTO)
    private Long collectId;
    private Long userId;
    private Long goodsId;
    private Date collectTime;
}

```

##### 3、新建mapper层

```js
package com.itmk.web.goods_collect.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itmk.web.goods_collect.entity.GoodsCollect;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsCollectMapper extends BaseMapper<GoodsCollect> {
}

```

GoodsCollectMapper.xml

```js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.goods_collect.mapper.GoodsCollectMapper">

</mapper>
```

##### 4、新建service层

```js
package com.itmk.web.goods_collect.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itmk.web.goods_collect.entity.GoodsCollect;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsCollectService extends IService<GoodsCollect> {
}

```

实现类

```js
package com.itmk.web.goods_collect.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.goods_collect.entity.GoodsCollect;
import com.itmk.web.goods_collect.mapper.GoodsCollectMapper;
import com.itmk.web.goods_collect.service.GoodsCollectService;
import org.springframework.stereotype.Service;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Service
public class GoodsCollectServiceImpl extends ServiceImpl<GoodsCollectMapper, GoodsCollect> implements GoodsCollectService {
}

```

##### 5、新建控制器

```js
package com.itmk.web.goods_collect.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.goods_collect.entity.GoodsCollect;
import com.itmk.web.goods_collect.service.GoodsCollectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RequestMapping("/api/collect")
@RestController
public class GoodsCollectController {
    @Autowired
    private GoodsCollectService goodsCollectService;

    //收藏
    @PostMapping("/collect")
    public ResultVo collect(@RequestBody GoodsCollect goodsCollect){
        //判断是否已经收藏
        QueryWrapper<GoodsCollect> query = new QueryWrapper<>();
        query.lambda().eq(GoodsCollect::getGoodsId,goodsCollect.getGoodsId())
                .eq(GoodsCollect::getUserId,goodsCollect.getUserId());
        GoodsCollect one = goodsCollectService.getOne(query);
        if(one == null){ //未收藏
            goodsCollect.setCollectTime(new Date());
            if(goodsCollectService.save(goodsCollect)){
                return ResultUtils.success("收藏成功!");
            }
            return ResultUtils.error("收藏失败!");
        }else{ //已收藏,取消收藏
            if(goodsCollectService.remove(query)){
              return ResultUtils.success("收藏成功!");
            }
            return ResultUtils.error("收藏失败!");
        }
    }

    //判断是否已经收藏
    @GetMapping("/hasCollect")
    public ResultVo hasCollect(GoodsCollect goodsCollect){
        //判断是否已经收藏
        QueryWrapper<GoodsCollect> query = new QueryWrapper<>();
        query.lambda().eq(GoodsCollect::getGoodsId,goodsCollect.getGoodsId())
                .eq(GoodsCollect::getUserId,goodsCollect.getUserId());
        GoodsCollect one = goodsCollectService.getOne(query);
        if(one != null){ //已经收藏
            return ResultUtils.success("查询成功","1");
        }else{ //未收藏
            return ResultUtils.success("查询成功","0");
        }
    }
}

```















#### 第78讲 小程序收藏接口对接

##### 1、api下新建unused.js

```js
import http from '../common/http.js'
//收藏
export const collectApi = (parm)=>{
	return http.post('/api/collect/collect',parm)
}
//是否收藏
export const hasCollectApi = (parm)=>{
	return http.get('/api/collect/hasCollect',parm)
}

```

##### 2、unused_detail.vue页面

```js
<template>
	<view style="overflow-y: auto;">
		<u-swiper name='image' border-radius='1' :duration='duration' :interval='interval' :height="height"
			:list="swipperList">
		</u-swiper>
		<view class="header">
			<view class="title">
				{{goodsName}}
			</view>
			<view class="price">
				￥{{goodsPrice}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				物品简介
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{goodsDesc}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				物品位置
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{address}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				交易流程
			</view>
		</view>
		<view class="info">
			<u-steps active-color="#FF7670" style="width: 100%;" mode="number" :list="numlist" :current="4"></u-steps>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				交易方式
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				自行协商.自提|送货上门|约定交易点|当面验货交易
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				发布时间
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{createTime}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				联系方式
			</view>
		</view>
		<view class="useinfo">
			<view class="title-desc">
				电话:{{phone}}
			</view>
			<view class="title-desc">
				微信:{{wxNum}}
			</view>
		</view>
		<view class="navigation">
			<view class="left">
				<view @click="toHome" class="item">
					<u-icon name="home" :size="40"></u-icon>
					<view class="text u-line-1">首页</view>
				</view>
				<view @click="collectBtn" class="item">
					<u-icon v-if="hasStatus == '0'" :size="40" name="star"></u-icon>
					<u-icon v-if="hasStatus == '1'" color="#FF7670" :size="40" name="star"></u-icon>
					<view v-if="hasStatus == '0'" class="text u-line-1">收藏</view>
					<view v-if="hasStatus == '1'" style="color:#FF7670" class="text u-line-1">收藏</view>
				</view>
				<view @click="toRepory" class="item car">
					<u-icon name="info-circle" :size="40"></u-icon>
					<view class="text u-line-1">举报</view>
				</view>
			</view>
			<view class="right">
				<view @click="callPhone" class="cart btn u-line-1">电话咨询</view>
				<view @click="toBuy" class="buy btn u-line-1">立即交易</view>
			</view>
		</view>
		<!-- 立即交易 -->
		<u-popup :mask-close-able="false" border-radius="15" width="85%" height="200px" v-model="show" mode="center">
			<view style="padding: 50px 15px 30px 15px;">
				<u-form label-width="auto" :model="addModel" ref="form1">
					<u-form-item label="请输入交易金额" prop="price"><u-input v-model="addModel.price" /></u-form-item>
				</u-form>
			</view>
			<view class="conBtn">
				<u-button @click="cancel" style="margin-right: 15px;" type="info">取消交易</u-button>
				<u-button @click="confirm" style="margin-left: 15px;" :custom-style="customStyle" type="error">确定交易</u-button>
			</view>
		</u-popup>
		<!-- 举报 -->
		<u-popup :mask-close-able="false" border-radius="15" width="85%" height="200px" v-model="reportShow" mode="center">
			<view style="padding: 50px 15px 30px 15px;">
				<u-form label-width="auto" :model="reportModel" ref="form1">
					<u-form-item label="请输入举报原因" prop="reason"><u-input v-model="addModel.reason" /></u-form-item>
				</u-form>
			</view>
			<view class="conBtn">
				<u-button @click="reportCancel" style="margin-right: 15px;" type="info">取消举报</u-button>
				<u-button @click="reportConfirm" style="margin-left: 15px;" :custom-style="customStyle" type="error">确定举报</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		reactive,
		ref
	} from 'vue';
	import {replaceOrderApi} from '../../api/order.js'
	import {collectApi,hasCollectApi} from '../../api/unused.js'
	const customStyle = reactive({
		background:'#FF7670'
	})
	//轮播图高度
	const height = ref('350')
	//是否显示面板指示点
	const indicatorDots = ref(true)
	//是否自动播放
	const autoplay = ref(true)
	//自动切换时间间隔
	const interval = ref(2000)
	//滑动动画时长
	const duration = ref(500)
	const swipperList = ref([])
	const numlist = ref([{
		name: '发布信息'
	}, {
		name: '电话/微信沟通'
	}, {
		name: '当面交易'
	}, {
		name: '交易完成'
	}])
	const goodsId = ref('')
	//名称
	const goodsName = ref('')
	//价格
	const goodsPrice = ref('')
	//简介
	const goodsDesc = ref('')
	//位置
	const address = ref('')
	const wxNum = ref('')
	const phone = ref('')
	//发布时间
	const createTime = ref('')
	//跳转首页
	const toHome = ()=>{
		uni.switchTab({
			url:"../index/index"
		})
	}
	//电话咨询
	const callPhone = ()=>{
		uni.makePhoneCall({
			phoneNumber:phone.value,
			success:(res)=>{},
			fail: (res) => {
				
			}
		})
	}
	//商品创建人的id
	const creatUser = ref('')
	//立即交易按钮
	const show = ref(false)
	const toBuy = ()=>{
		show.value = true;
	}
	const addModel = reactive({
		price:"",
		goodsId:"",
		orderUser:uni.getStorageSync("userId")
	})
	//交易取消
	const cancel = ()=>{
		show.value = false;
	}
	//交易确定
	const confirm = async()=>{
		//是否填写金额
		if(!addModel.price){
			uni.showToast({
				title:'请填写交易金额',
				icon:"none",
				mask:true,
				duration:3000
			})
			return;
		}
		if(creatUser.value == addModel.orderUser){
			uni.showToast({
				title:'不能交易自己发布的商品！',
				icon:"none",
				mask:true,
				duration:3000
			})
			return;
		}
		let res = await replaceOrderApi(addModel)
		if(res && res.code == 200){
			show.value = false;
		}
		
	}
	
	//举报按钮
	const reportShow = ref(false)
	const toRepory = ()=>{
		reportShow.value = true;
	}
	const reportModel = reactive({
		reason:""
	})
	//交易取消
	const reportCancel = ()=>{
		reportShow.value = false;
	}
	//交易确定
	const reportConfirm = ()=>{
		reportShow.value = false;
	}
	//收藏按钮
	const collectBtn = async()=>{
		let res = await collectApi({
			userId:uni.getStorageSync("userId"),
			goodsId:goodsId.value
		})
		if(res && res.code == 200){
			console.log(res)
			hasCollect()
		}
	}
	//查询是否收藏
	const hasStatus = ref('0')
	const hasCollect = async()=>{
		let res = await hasCollectApi({
			userId:uni.getStorageSync("userId"),
			goodsId:goodsId.value
		})
		if(res && res.code == 200){
			console.log(res)
			hasStatus.value = res.data
		}
	}
	onLoad((options) => {
		const goods = JSON.parse(options.goods)
		console.log(goods)
		goodsId.value = goods.goodsId;
		addModel.goodsId = goods.goodsId;
		creatUser.value = goods.userId;
		//物品的图片:轮播图数据
		if (goods.image) {
			swipperList.value = goods.image.split(",");
		}
		goodsName.value = goods.goodsName;
		goodsDesc.value = goods.goodsDesc;
		address.value = goods.address;
		goodsPrice.value = goods.goodsPrice
		createTime.value = goods.createTime
		phone.value = goods.phone
		wxNum.value = goods.wxNum
		//查询是否收藏
		hasCollect()
	})
</script>

<style lang="scss">
	.conBtn{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.header {
		display: flex;
	}

	.title {
		color: #303133;
		font-weight: bold;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.price {
		color: #FF7670;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.info-fa {
		display: flex;
		align-items: center;
	}

	.fa-left {
		width: 1px;
		height: 12px;
		border-left: 3px solid #FF7670;
		margin-left: 10px;
	}

	.goodsInfo {
		padding: 5px;
		color: #F3AF28;
	}

	.info {
		display: flex;
		align-items: center;
		background-color: #FFF;
		margin-bottom: 25px;
		padding: 0px 20px;
	}

	.useinfo {
		display: flex;
		flex-direction: column;
		margin-left: 20px;
		margin-bottom: 80px;
	}

	.navigation {
		display: flex;
		margin-top: 100rpx;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 16rpx 0;
		position: fixed;
		width: 100%;
		bottom: 0;

		.left {
			display: flex;
			font-size: 20rpx;

			.item {
				margin: 0 30rpx;

				&.car {
					text-align: center;
					position: relative;

					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}

		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;

			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}

			.cart {
				background-color: #FF7670;
				margin-right: 30rpx;
			}

			.buy {
				background-color: #F3AF28;
			}
		}
	}
</style>

```

##### 3、buy_detail.vue页面

```js
<template>
	<view style="overflow-y: auto;">
		<u-swiper name='image' border-radius='1' :duration='duration' :interval='interval' :height="height"
			:list="swipperList">
		</u-swiper>
		<view class="header">
			<view class="title">
				{{goodsName}}
			</view>
			<view class="price">
				￥{{goodsPrice}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				物品简介
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{goodsDesc}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				物品位置
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{address}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				交易流程
			</view>
		</view>
		<view class="info">
			<u-steps active-color="#FF7670" style="width: 100%;" mode="number" :list="numlist" :current="4"></u-steps>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				交易方式
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				自行协商.自提|送货上门|约定交易点|当面验货交易
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				发布时间
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{createTime}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				联系方式
			</view>
		</view>
		<view class="useinfo">
			<view class="title-desc">
				电话:{{phone}}
			</view>
			<view class="title-desc">
				微信:{{wxNum}}
			</view>
		</view>
		<view class="navigation">
			<view class="left">
				<view @click="toHome" class="item">
					<u-icon name="home" :size="40"></u-icon>
					<view class="text u-line-1">首页</view>
				</view>
				<view @click="collectBtn" class="item">
					<u-icon v-if="hasStatus == '0'" :size="40" name="star"></u-icon>
					<u-icon v-if="hasStatus == '1'" color="#FF7670" :size="40" name="star"></u-icon>
					<view v-if="hasStatus == '0'" class="text u-line-1">收藏</view>
					<view v-if="hasStatus == '1'" style="color:#FF7670" class="text u-line-1">收藏</view>
				</view>
				<view class="item car">
					<u-icon name="info-circle" :size="40"></u-icon>
					<view class="text u-line-1">举报</view>
				</view>
			</view>
			<view class="right">
				<view @click="callPhone" class="cart btn u-line-1">电话咨询</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		ref
	} from 'vue';
	import {collectApi,hasCollectApi} from '../../api/unused.js'
	//轮播图高度
	const height = ref('350')
	//是否显示面板指示点
	const indicatorDots = ref(true)
	//是否自动播放
	const autoplay = ref(true)
	//自动切换时间间隔
	const interval = ref(2000)
	//滑动动画时长
	const duration = ref(500)
	const swipperList = ref([])
	const numlist = ref([{
		name: '发布信息'
	}, {
		name: '电话/微信沟通'
	}, {
		name: '当面交易'
	}, {
		name: '交易完成'
	}])
	const goodsId = ref('')
	//名称
	const goodsName = ref('')
	//价格
	const goodsPrice = ref('')
	//简介
	const goodsDesc = ref('')
	//位置
	const address = ref('')
	const wxNum = ref('')
	const phone = ref('')
	//发布时间
	const createTime = ref('')
	//跳转首页
	const toHome = ()=>{
		uni.switchTab({
			url:"../index/index"
		})
	}
	//电话咨询
	const callPhone = ()=>{
		uni.makePhoneCall({
			phoneNumber:phone.value,
			success:(res)=>{},
			fail: (res) => {
				
			}
		})
	}
	//收藏按钮
	const collectBtn = async()=>{
		let res = await collectApi({
			userId:uni.getStorageSync("userId"),
			goodsId:goodsId.value
		})
		if(res && res.code == 200){
			console.log(res)
			hasCollect()
		}
	}
	//查询是否收藏
	const hasStatus = ref('0')
	const hasCollect = async()=>{
		let res = await hasCollectApi({
			userId:uni.getStorageSync("userId"),
			goodsId:goodsId.value
		})
		if(res && res.code == 200){
			console.log(res)
			hasStatus.value = res.data
		}
	}
	onLoad((options) => {
		const goods = JSON.parse(options.goods)
		console.log(goods)
		goodsId.value = goods.goodsId;
		//物品的图片:轮播图数据
		if (goods.image) {
			swipperList.value = goods.image.split(",");
		}
		goodsName.value = goods.goodsName;
		goodsDesc.value = goods.goodsDesc;
		address.value = goods.address;
		goodsPrice.value = goods.goodsPrice
		createTime.value = goods.createTime
		phone.value = goods.phone
		wxNum.value = goods.wxNum
		//查询是否收藏
		hasCollect()
	})
</script>

<style lang="scss">
	.header {
		display: flex;
	}

	.title {
		color: #303133;
		font-weight: bold;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.price {
		color: #FF7670;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.info-fa {
		display: flex;
		align-items: center;
	}

	.fa-left {
		width: 1px;
		height: 12px;
		border-left: 3px solid #FF7670;
		margin-left: 10px;
	}

	.goodsInfo {
		padding: 5px;
		color: #F3AF28;
	}

	.info {
		display: flex;
		align-items: center;
		background-color: #FFF;
		margin-bottom: 25px;
		padding: 0px 20px;
	}

	.useinfo {
		display: flex;
		flex-direction: column;
		margin-left: 20px;
		margin-bottom: 80px;
	}

	.navigation {
		display: flex;
		margin-top: 100rpx;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 16rpx 0;
		position: fixed;
		width: 100%;
		bottom: 0;

		.left {
			display: flex;
			font-size: 20rpx;

			.item {
				margin: 0 30rpx;

				&.car {
					text-align: center;
					position: relative;

					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}

		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;

			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}

			.cart {
				background-color: #FF7670;
				margin-right: 30rpx;
			}

			.buy {
				background-color: #F3AF28;
			}
		}
	}
</style>

```

















#### 第79讲 小程序举报接口开发

##### 1、sql脚本

```js
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `goods_report`;
CREATE TABLE `goods_report`  (
  `report_id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_id` int(11) NULL DEFAULT NULL COMMENT '商品id',
  `report_user` int(255) NULL DEFAULT NULL COMMENT '举报人id',
  `reason` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '举报原因',
  `report_time` datetime(0) NULL DEFAULT NULL COMMENT '举报时间',
  PRIMARY KEY (`report_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

```

##### 2、新建实体类

```js
package com.itmk.web.goods_report.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
@TableName("goods_report")
public class GoodsReport {
    @TableId(type = IdType.AUTO)
    private Long reportId;
    private Long goodsId;
    private Long reportUser;
    private String reason;
    private Date reportTime;
}

```

##### 3、新建mapper层

```js
package com.itmk.web.goods_report.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itmk.web.goods_report.entity.GoodsReport;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsReportMapper extends BaseMapper<GoodsReport> {
}

```

GoodsReportMapper.xml

```js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.goods_report.mapper.GoodsReportMapper">

</mapper>
```

##### 4、新建service层

```js
package com.itmk.web.goods_report.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itmk.web.goods_report.entity.GoodsReport;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsReportService extends IService<GoodsReport> {
}

```

实现类

```js
package com.itmk.web.goods_report.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.goods_report.entity.GoodsReport;
import com.itmk.web.goods_report.mapper.GoodsReportMapper;
import com.itmk.web.goods_report.service.GoodsReportService;
import org.springframework.stereotype.Service;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Service
public class GoodsReportServiceImpl extends ServiceImpl<GoodsReportMapper, GoodsReport> implements GoodsReportService {
}

```

##### 5、控制器

```js
package com.itmk.web.goods_report.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.goods_report.entity.GoodsReport;
import com.itmk.web.goods_report.service.GoodsReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RequestMapping("/api/report")
@RestController
public class GoodsReportController {
    @Autowired
    private GoodsReportService goodsReportService;

    //举报
    @PostMapping("/report")
    public ResultVo report(@RequestBody GoodsReport report){
        //判断是否已经举报
        QueryWrapper<GoodsReport> query = new QueryWrapper<>();
        query.lambda().eq(GoodsReport::getGoodsId,report.getGoodsId())
                .eq(GoodsReport::getReportUser,report.getReportUser());
        GoodsReport one = goodsReportService.getOne(query);
        if(one != null){
            return ResultUtils.error("您已经举报，不用重复举报!");
        }
        report.setReportTime(new Date());
        if(goodsReportService.save(report)){
            return ResultUtils.success("举报成功!");
        }
        return ResultUtils.error("举报失败!");
    }

    //查询是否已经举报
    @GetMapping("/hasReport")
    public ResultVo hasReport(Long userId,Long goodsId){
        QueryWrapper<GoodsReport> query = new QueryWrapper<>();
        query.lambda().eq(GoodsReport::getGoodsId,goodsId)
                .eq(GoodsReport::getReportUser,userId);
        GoodsReport one = goodsReportService.getOne(query);
        if(one != null){ //已经举报
            return ResultUtils.success("查询成功","1");
        }else{
            return ResultUtils.success("查询成功","0");
        }
    }

}

```















#### 第80讲 小程序举报接口对接

##### 1、小程序api/unused.js添加举报方法

```js
import http from '../common/http.js'
//收藏
export const collectApi = (parm)=>{
	return http.post('/api/collect/collect',parm)
}
//是否收藏
export const hasCollectApi = (parm)=>{
	return http.get('/api/collect/hasCollect',parm)
}
//举报
export const reportApi = (parm)=>{
	return http.post('/api/report/report',parm)
}
//是否举报
export const hasReportApi = (parm)=>{
	return http.get('/api/report/hasReport',parm)
}
```

##### 2、unused_detail.vue页面

```js
<template>
	<view style="overflow-y: auto;">
		<u-swiper name='image' border-radius='1' :duration='duration' :interval='interval' :height="height"
			:list="swipperList">
		</u-swiper>
		<view class="header">
			<view class="title">
				{{goodsName}}
			</view>
			<view class="price">
				￥{{goodsPrice}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				物品简介
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{goodsDesc}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				物品位置
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{address}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				交易流程
			</view>
		</view>
		<view class="info">
			<u-steps active-color="#FF7670" style="width: 100%;" mode="number" :list="numlist" :current="4"></u-steps>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				交易方式
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				自行协商.自提|送货上门|约定交易点|当面验货交易
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				发布时间
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{createTime}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				联系方式
			</view>
		</view>
		<view class="useinfo">
			<view class="title-desc">
				电话:{{phone}}
			</view>
			<view class="title-desc">
				微信:{{wxNum}}
			</view>
		</view>
		<view class="navigation">
			<view class="left">
				<view @click="toHome" class="item">
					<u-icon name="home" :size="40"></u-icon>
					<view class="text u-line-1">首页</view>
				</view>
				<view @click="collectBtn" class="item">
					<u-icon v-if="hasStatus == '0'" :size="40" name="star"></u-icon>
					<u-icon v-if="hasStatus == '1'" color="#FF7670" :size="40" name="star"></u-icon>
					<view v-if="hasStatus == '0'" class="text u-line-1">收藏</view>
					<view v-if="hasStatus == '1'" style="color:#FF7670" class="text u-line-1">收藏</view>
				</view>
				<view @click="toRepory" class="item car">
					<u-icon v-if="hasReportStatus == '0'" name="info-circle" :size="40"></u-icon>
					<u-icon v-if="hasReportStatus == '1'" style="color:#F3AF28" name="info-circle" :size="40"></u-icon>
					<view v-if="hasReportStatus == '0'" class="text u-line-1">举报</view>
					<view v-if="hasReportStatus == '1'" style="color:#F3AF28" class="text u-line-1">举报</view>
				</view>
			</view>
			<view class="right">
				<view @click="callPhone" class="cart btn u-line-1">电话咨询</view>
				<view @click="toBuy" class="buy btn u-line-1">立即交易</view>
			</view>
		</view>
		<!-- 立即交易 -->
		<u-popup :mask-close-able="false" border-radius="15" width="85%" height="200px" v-model="show" mode="center">
			<view style="padding: 50px 15px 30px 15px;">
				<u-form label-width="auto" :model="addModel" ref="form1">
					<u-form-item label="请输入交易金额" prop="price"><u-input v-model="addModel.price" /></u-form-item>
				</u-form>
			</view>
			<view class="conBtn">
				<u-button @click="cancel" style="margin-right: 15px;" type="info">取消交易</u-button>
				<u-button @click="confirm" style="margin-left: 15px;" :custom-style="customStyle" type="error">确定交易</u-button>
			</view>
		</u-popup>
		<!-- 举报 -->
		<u-popup :mask-close-able="false" border-radius="15" width="85%" height="200px" v-model="reportShow" mode="center">
			<view style="padding: 50px 15px 30px 15px;">
				<u-form label-width="auto" :model="reportModel" ref="form1">
					<u-form-item label="请输入举报原因" prop="reason"><u-input v-model="reportModel.reason" /></u-form-item>
				</u-form>
			</view>
			<view class="conBtn">
				<u-button @click="reportCancel" style="margin-right: 15px;" type="info">取消举报</u-button>
				<u-button @click="reportConfirm" style="margin-left: 15px;" :custom-style="customStyle" type="error">确定举报</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		reactive,
		ref
	} from 'vue';
	import {replaceOrderApi} from '../../api/order.js'
	import {collectApi,hasCollectApi,reportApi,hasReportApi} from '../../api/unused.js'
	const customStyle = reactive({
		background:'#FF7670'
	})
	//轮播图高度
	const height = ref('350')
	//是否显示面板指示点
	const indicatorDots = ref(true)
	//是否自动播放
	const autoplay = ref(true)
	//自动切换时间间隔
	const interval = ref(2000)
	//滑动动画时长
	const duration = ref(500)
	const swipperList = ref([])
	const numlist = ref([{
		name: '发布信息'
	}, {
		name: '电话/微信沟通'
	}, {
		name: '当面交易'
	}, {
		name: '交易完成'
	}])
	const goodsId = ref('')
	//名称
	const goodsName = ref('')
	//价格
	const goodsPrice = ref('')
	//简介
	const goodsDesc = ref('')
	//位置
	const address = ref('')
	const wxNum = ref('')
	const phone = ref('')
	//发布时间
	const createTime = ref('')
	//跳转首页
	const toHome = ()=>{
		uni.switchTab({
			url:"../index/index"
		})
	}
	//电话咨询
	const callPhone = ()=>{
		uni.makePhoneCall({
			phoneNumber:phone.value,
			success:(res)=>{},
			fail: (res) => {
				
			}
		})
	}
	//商品创建人的id
	const creatUser = ref('')
	//立即交易按钮
	const show = ref(false)
	const toBuy = ()=>{
		show.value = true;
	}
	const addModel = reactive({
		price:"",
		goodsId:"",
		orderUser:uni.getStorageSync("userId")
	})
	//交易取消
	const cancel = ()=>{
		show.value = false;
	}
	//交易确定
	const confirm = async()=>{
		//是否填写金额
		if(!addModel.price){
			uni.showToast({
				title:'请填写交易金额',
				icon:"none",
				mask:true,
				duration:3000
			})
			return;
		}
		if(creatUser.value == addModel.orderUser){
			uni.showToast({
				title:'不能交易自己发布的商品！',
				icon:"none",
				mask:true,
				duration:3000
			})
			return;
		}
		let res = await replaceOrderApi(addModel)
		if(res && res.code == 200){
			show.value = false;
		}
		
	}
	
	//举报按钮
	const reportShow = ref(false)
	const toRepory = ()=>{
		reportShow.value = true;
	}
	const reportModel = reactive({
		reason:"",
		goodsId:'',
		reportUser:uni.getStorageSync("userId")
	})
	//取消举报
	const reportCancel = ()=>{
		reportShow.value = false;
	}
	//确定举报
	const reportConfirm = async()=>{
		if(!reportModel.reason){
			uni.showToast({
				title:'请填写举报原因',
				icon:"none",
				mask:true,
				duration:3000
			})
			return;
		}
		reportModel.goodsId = goodsId.value
		let res = await reportApi(reportModel)
		if(res &&res.code == 200){
			console.log(res)
			hasReport()
			reportShow.value = false;
		}
	}
	//查询是否举报
	const hasReportStatus = ref('0')
	const hasReport = async()=>{
		let res =await hasReportApi({
			goodsId:goodsId.value,
			userId:uni.getStorageSync("userId")
		})
		if(res && res.code == 200){
			hasReportStatus.value = res.data;
		}
	}
	//收藏按钮
	const collectBtn = async()=>{
		let res = await collectApi({
			userId:uni.getStorageSync("userId"),
			goodsId:goodsId.value
		})
		if(res && res.code == 200){
			console.log(res)
			hasCollect()
		}
	}
	//查询是否收藏
	const hasStatus = ref('0')
	const hasCollect = async()=>{
		let res = await hasCollectApi({
			userId:uni.getStorageSync("userId"),
			goodsId:goodsId.value
		})
		if(res && res.code == 200){
			console.log(res)
			hasStatus.value = res.data
		}
	}
	onLoad((options) => {
		const goods = JSON.parse(options.goods)
		console.log(goods)
		goodsId.value = goods.goodsId;
		addModel.goodsId = goods.goodsId;
		creatUser.value = goods.userId;
		//物品的图片:轮播图数据
		if (goods.image) {
			swipperList.value = goods.image.split(",");
		}
		goodsName.value = goods.goodsName;
		goodsDesc.value = goods.goodsDesc;
		address.value = goods.address;
		goodsPrice.value = goods.goodsPrice
		createTime.value = goods.createTime
		phone.value = goods.phone
		wxNum.value = goods.wxNum
		//查询是否收藏
		hasCollect()
		//是否举报
		hasReport()
	})
</script>

<style lang="scss">
	.conBtn{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.header {
		display: flex;
	}

	.title {
		color: #303133;
		font-weight: bold;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.price {
		color: #FF7670;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.info-fa {
		display: flex;
		align-items: center;
	}

	.fa-left {
		width: 1px;
		height: 12px;
		border-left: 3px solid #FF7670;
		margin-left: 10px;
	}

	.goodsInfo {
		padding: 5px;
		color: #F3AF28;
	}

	.info {
		display: flex;
		align-items: center;
		background-color: #FFF;
		margin-bottom: 25px;
		padding: 0px 20px;
	}

	.useinfo {
		display: flex;
		flex-direction: column;
		margin-left: 20px;
		margin-bottom: 80px;
	}

	.navigation {
		display: flex;
		margin-top: 100rpx;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 16rpx 0;
		position: fixed;
		width: 100%;
		bottom: 0;

		.left {
			display: flex;
			font-size: 20rpx;

			.item {
				margin: 0 30rpx;

				&.car {
					text-align: center;
					position: relative;

					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}

		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;

			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}

			.cart {
				background-color: #FF7670;
				margin-right: 30rpx;
			}

			.buy {
				background-color: #F3AF28;
			}
		}
	}
</style>

```

##### 3、buy_detail.vue页面

```js
<template>
	<view style="overflow-y: auto;">
		<u-swiper name='image' border-radius='1' :duration='duration' :interval='interval' :height="height"
			:list="swipperList">
		</u-swiper>
		<view class="header">
			<view class="title">
				{{goodsName}}
			</view>
			<view class="price">
				￥{{goodsPrice}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				物品简介
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{goodsDesc}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				物品位置
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{address}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				交易流程
			</view>
		</view>
		<view class="info">
			<u-steps active-color="#FF7670" style="width: 100%;" mode="number" :list="numlist" :current="4"></u-steps>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				交易方式
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				自行协商.自提|送货上门|约定交易点|当面验货交易
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				发布时间
			</view>
		</view>
		<view class="info">
			<view class="title-desc">
				{{createTime}}
			</view>
		</view>
		<view class="info-fa">
			<view class="fa-left"></view>
			<view class="goodsInfo">
				联系方式
			</view>
		</view>
		<view class="useinfo">
			<view class="title-desc">
				电话:{{phone}}
			</view>
			<view class="title-desc">
				微信:{{wxNum}}
			</view>
		</view>
		<view class="navigation">
			<view class="left">
				<view @click="toHome" class="item">
					<u-icon name="home" :size="40"></u-icon>
					<view class="text u-line-1">首页</view>
				</view>
				<view @click="collectBtn" class="item">
					<u-icon v-if="hasStatus == '0'" :size="40" name="star"></u-icon>
					<u-icon v-if="hasStatus == '1'" color="#FF7670" :size="40" name="star"></u-icon>
					<view v-if="hasStatus == '0'" class="text u-line-1">收藏</view>
					<view v-if="hasStatus == '1'" style="color:#FF7670" class="text u-line-1">收藏</view>
				</view>
				<view @click="toRepory" class="item car">
					<u-icon v-if="hasReportStatus == '0'" name="info-circle" :size="40"></u-icon>
					<u-icon v-if="hasReportStatus == '1'" style="color:#F3AF28" name="info-circle" :size="40"></u-icon>
					<view v-if="hasReportStatus == '0'" class="text u-line-1">举报</view>
					<view v-if="hasReportStatus == '1'" style="color:#F3AF28" class="text u-line-1">举报</view>
				</view>
			</view>
			<view class="right">
				<view @click="callPhone" class="cart btn u-line-1">电话咨询</view>
			</view>
		</view>
		<!-- 举报 -->
		<u-popup :mask-close-able="false" border-radius="15" width="85%" height="200px" v-model="reportShow" mode="center">
			<view style="padding: 50px 15px 30px 15px;">
				<u-form label-width="auto" :model="reportModel" ref="form1">
					<u-form-item label="请输入举报原因" prop="reason"><u-input v-model="reportModel.reason" /></u-form-item>
				</u-form>
			</view>
			<view class="conBtn">
				<u-button @click="reportCancel" style="margin-right: 15px;" type="info">取消举报</u-button>
				<u-button @click="reportConfirm" style="margin-left: 15px;" :custom-style="customStyle" type="error">确定举报</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		ref,
		reactive
	} from 'vue';
	import {collectApi,hasCollectApi,reportApi,hasReportApi} from '../../api/unused.js'
	//轮播图高度
	const height = ref('350')
	//是否显示面板指示点
	const indicatorDots = ref(true)
	//是否自动播放
	const autoplay = ref(true)
	//自动切换时间间隔
	const interval = ref(2000)
	//滑动动画时长
	const duration = ref(500)
	const swipperList = ref([])
	const numlist = ref([{
		name: '发布信息'
	}, {
		name: '电话/微信沟通'
	}, {
		name: '当面交易'
	}, {
		name: '交易完成'
	}])
	const goodsId = ref('')
	//名称
	const goodsName = ref('')
	//价格
	const goodsPrice = ref('')
	//简介
	const goodsDesc = ref('')
	//位置
	const address = ref('')
	const wxNum = ref('')
	const phone = ref('')
	const customStyle = reactive({
		background:'#FF7670'
	})
	//发布时间
	const createTime = ref('')
	//跳转首页
	const toHome = ()=>{
		uni.switchTab({
			url:"../index/index"
		})
	}
	//电话咨询
	const callPhone = ()=>{
		uni.makePhoneCall({
			phoneNumber:phone.value,
			success:(res)=>{},
			fail: (res) => {
				
			}
		})
	}
	//收藏按钮
	const collectBtn = async()=>{
		let res = await collectApi({
			userId:uni.getStorageSync("userId"),
			goodsId:goodsId.value
		})
		if(res && res.code == 200){
			console.log(res)
			hasCollect()
		}
	}
	//查询是否收藏
	const hasStatus = ref('0')
	const hasCollect = async()=>{
		let res = await hasCollectApi({
			userId:uni.getStorageSync("userId"),
			goodsId:goodsId.value
		})
		if(res && res.code == 200){
			console.log(res)
			hasStatus.value = res.data
		}
	}
	//举报按钮
	const reportShow = ref(false)
	const toRepory = ()=>{
		reportShow.value = true;
	}
	const reportModel = reactive({
		reason:"",
		goodsId:'',
		reportUser:uni.getStorageSync("userId")
	})
	//取消举报
	const reportCancel = ()=>{
		reportShow.value = false;
	}
	//确定举报
	const reportConfirm = async()=>{
		if(!reportModel.reason){
			uni.showToast({
				title:'请填写举报原因',
				icon:"none",
				mask:true,
				duration:3000
			})
			return;
		}
		reportModel.goodsId = goodsId.value
		let res = await reportApi(reportModel)
		if(res &&res.code == 200){
			console.log(res)
			hasReport()
			reportShow.value = false;
		}
	}
	//查询是否举报
	const hasReportStatus = ref('0')
	const hasReport = async()=>{
		let res =await hasReportApi({
			goodsId:goodsId.value,
			userId:uni.getStorageSync("userId")
		})
		if(res && res.code == 200){
			hasReportStatus.value = res.data;
		}
	}
	onLoad((options) => {
		const goods = JSON.parse(options.goods)
		console.log(goods)
		goodsId.value = goods.goodsId;
		//物品的图片:轮播图数据
		if (goods.image) {
			swipperList.value = goods.image.split(",");
		}
		goodsName.value = goods.goodsName;
		goodsDesc.value = goods.goodsDesc;
		address.value = goods.address;
		goodsPrice.value = goods.goodsPrice
		createTime.value = goods.createTime
		phone.value = goods.phone
		wxNum.value = goods.wxNum
		//查询是否收藏
		hasCollect()
		//是否举报
		hasReport()
	})
</script>

<style lang="scss">
	.conBtn{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.header {
		display: flex;
	}

	.title {
		color: #303133;
		font-weight: bold;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.price {
		color: #FF7670;
		padding: 20rpx;
		font-size: 30rpx;
	}

	.info-fa {
		display: flex;
		align-items: center;
	}

	.fa-left {
		width: 1px;
		height: 12px;
		border-left: 3px solid #FF7670;
		margin-left: 10px;
	}

	.goodsInfo {
		padding: 5px;
		color: #F3AF28;
	}

	.info {
		display: flex;
		align-items: center;
		background-color: #FFF;
		margin-bottom: 25px;
		padding: 0px 20px;
	}

	.useinfo {
		display: flex;
		flex-direction: column;
		margin-left: 20px;
		margin-bottom: 80px;
	}

	.navigation {
		display: flex;
		margin-top: 100rpx;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 16rpx 0;
		position: fixed;
		width: 100%;
		bottom: 0;

		.left {
			display: flex;
			font-size: 20rpx;

			.item {
				margin: 0 30rpx;

				&.car {
					text-align: center;
					position: relative;

					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}

		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;

			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}

			.cart {
				background-color: #FF7670;
				margin-right: 30rpx;
			}

			.buy {
				background-color: #F3AF28;
			}
		}
	}
</style>

```















#### 第81讲 我的闲置和求购页面制作

##### 1、mine.vue页面

```js
<template>
	<view>
		<view class="u-flex user-box u-p-30">
			<view class="u-m-r-10">
				<u-avatar  src="/static/user.jpg" size="100"></u-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">大幕孤烟直</view>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item @click="toMyUnused" icon="star" title="我的闲置"></u-cell-item>
				<u-cell-item @click="toMyBy" icon="photo" title="我的求购"></u-cell-item>
				<u-cell-item @click="toCollect" icon="heart" title="我的收藏"></u-cell-item>
				<u-cell-item @click="toOrder" icon="red-packet" title="购买订单"></u-cell-item>
				<u-cell-item @click="toSellOrder" icon="order" title="出售订单"></u-cell-item>
				<u-cell-item @click="toUpdate" icon="edit-pen" title="修改密码"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item @click="loginOut" icon="setting" title="退出账号"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script setup>
	// import logo form '../../static/'
import { ref } from 'vue';
	const pic = ref('https://uviewui.com/common/logo.png')
	const show = ref(true)
	//我的闲置
	const toMyUnused = ()=>{
		uni.navigateTo({
			url:"../my_unused/my_unused"
		})
	}
	//我的求购
	const toMyBy = ()=>{
		uni.navigateTo({
			url:"../my_buy/my_buy"
		})
	}
	//我的收藏
	const toCollect = ()=>{
		uni.navigateTo({
			url:"../my_collect/my_collect"
		})
	}
	//购买订单
	const toOrder = ()=>{
		uni.navigateTo({
			url:"../my_order/my_order"
		})
	}
	//出售订单
	const toSellOrder = ()=>{
		uni.navigateTo({
			url:"../sell_order/sell_order"
		})
	}
	//修改密码
	const toUpdate = ()=>{
		uni.navigateTo({
			url:"../update_password/update_password"
		})
	}
	//退出登录
	const loginOut = ()=>{
		uni.clearStorageSync()
		uni.navigateTo({
			url:"../login/login"
		})
	}
</script>

<style lang="scss">
page{
	background-color: #ededed;
}

.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
</style>

```

##### 2、my_unused.vue页面

```js
<template>
	<view class="page-box">
		<view class="order" v-for="(item, index) in list" :key="item.goodsId">
			<view class="top">
				<view class="left">
					<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
					<view class="store">{{ item.goodsName }}</view>
					<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<image :src="item.goodsUrl" mode="aspectFill"></image>
				</view>
				<view class="content">
					<view class="title u-line-2">{{ item.title }}</view>
					<view class="type">{{ item.type }}</view>
					<view class="delivery-time">发货时间 {{ item.deliveryTime }}</view>
				</view>
				<view class="right">
					<view class="price">
						￥{{ item.price }}
					</view>
					<view class="number">x1</view>
				</view>
			</view>
			<view class="bottom">
				<view class="logistics btn">查看</view>
				<view class="exchange btn">下架</view>
				<view class="evaluate btn">编辑</view>
				<view class="evaluate btn">删除</view>
			</view>
		</view>
		<u-loadmore  bgColor="#f2f2f2"></u-loadmore>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const list = ref([
	{
		goodsUrl: '//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg',
		title: '【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风',
		type: '灰色;M',
		deliveryTime: '付款后30天内发货',
		price: '348.58',
		number: 2,
		goodsId:'1',
		goodsName:'2020冬装新款小清新宽松软糯毛衣外套'
	},
	{
		goodsUrl: '//img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg',
		title: '【葡萄藤】现货小清新学院风制服格裙百褶裙女短款百搭日系甜美风原创jk制服女2020新款',
		type: '45cm;S',
		deliveryTime: '付款后30天内发货',
		price: '135.00',
		number: 1,
		goodsId:'2',
		goodsName:'【葡萄藤】现货小清新学院风制服格裙百褶裙'
	}
])
</script>

<style lang="scss">
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: space-between;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
			margin-right: 10px;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
</style>

```

##### 3、my_buy.vue页面

```js
<template>
	<view class="page-box">
		<view class="order" v-for="(item, index) in list" :key="item.goodsId">
			<view class="top">
				<view class="left">
					<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
					<view class="store">{{ item.goodsName }}</view>
					<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<image :src="item.goodsUrl" mode="aspectFill"></image>
				</view>
				<view class="content">
					<view class="title u-line-2">{{ item.title }}</view>
					<view class="type">{{ item.type }}</view>
					<view class="delivery-time">发货时间 {{ item.deliveryTime }}</view>
				</view>
				<view class="right">
					<view class="price">
						￥{{ item.price }}
					</view>
					<view class="number">x1</view>
				</view>
			</view>
			<view class="bottom">
				<view class="logistics btn">查看</view>
				<view class="exchange btn">下架</view>
				<view class="evaluate btn">编辑</view>
				<view class="evaluate btn">删除</view>
			</view>
		</view>
		<u-loadmore  bgColor="#f2f2f2"></u-loadmore>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const list = ref([
	{
		goodsUrl: '//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg',
		title: '【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风',
		type: '灰色;M',
		deliveryTime: '付款后30天内发货',
		price: '348.58',
		number: 2,
		goodsId:'1',
		goodsName:'2020冬装新款小清新宽松软糯毛衣外套'
	},
	{
		goodsUrl: '//img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg',
		title: '【葡萄藤】现货小清新学院风制服格裙百褶裙女短款百搭日系甜美风原创jk制服女2020新款',
		type: '45cm;S',
		deliveryTime: '付款后30天内发货',
		price: '135.00',
		number: 1,
		goodsId:'2',
		goodsName:'【葡萄藤】现货小清新学院风制服格裙百褶裙'
	}
])
</script>

<style lang="scss">
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: space-between;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
			margin-right: 10px;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
</style>

```

##### 4、my_collect.vue页面

```js
<template>
	<view class="page-box">
		<view class="order" v-for="(item, index) in list" :key="item.goodsId">
			<view class="top">
				<view class="left">
					<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
					<view class="store">{{ item.goodsName }}</view>
					<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<image :src="item.goodsUrl" mode="aspectFill"></image>
				</view>
				<view class="content">
					<view class="title u-line-2">{{ item.title }}</view>
					<view class="type">{{ item.type }}</view>
					<view class="delivery-time">发货时间 {{ item.deliveryTime }}</view>
				</view>
				<view class="right">
					<view class="price">
						￥{{ item.price }}
					</view>
					<view class="number">x1</view>
				</view>
			</view>
			<view class="bottom">
				<view class="logistics btn">查看</view>
				<view class="evaluate btn">取消收藏</view>
			</view>
		</view>
		<u-loadmore  bgColor="#f2f2f2"></u-loadmore>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const list = ref([
	{
		goodsUrl: '//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg',
		title: '【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风',
		type: '灰色;M',
		deliveryTime: '付款后30天内发货',
		price: '348.58',
		number: 2,
		goodsId:'1',
		goodsName:'2020冬装新款小清新宽松软糯毛衣外套'
	},
	{
		goodsUrl: '//img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg',
		title: '【葡萄藤】现货小清新学院风制服格裙百褶裙女短款百搭日系甜美风原创jk制服女2020新款',
		type: '45cm;S',
		deliveryTime: '付款后30天内发货',
		price: '135.00',
		number: 1,
		goodsId:'2',
		goodsName:'【葡萄藤】现货小清新学院风制服格裙百褶裙'
	}
])
</script>

<style lang="scss">
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: flex-end;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
			margin-right: 10px;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
</style>

```



















#### 第82讲 我的闲置、求购接口开发与对接

##### 1、新建参数实体类

```js
package com.itmk.web.goods.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class MyGoodsParm {
    //用户id
    private Long userId;
    //类型 0：闲置 1：求购
    private String type;
    private Long currentPage;
    private Long pageSize;
}

```

##### 2、GoodsController添加getMyUnusedList()方法

```js
//小程序我发布的闲置
    @GetMapping("/getMyUnusedList")
    public ResultVo getMyUnusedList(MyGoodsParm parm){
        //构造查询条件
        QueryWrapper<Goods> query = new QueryWrapper<>();
        query.lambda().eq(Goods::getUserId,parm.getUserId())
                .eq(Goods::getType,parm.getType())
                .eq(Goods::getDeleteStatus,"0");
        //构造分页对象
        IPage<Goods> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        IPage<Goods> list = goodsService.page(page, query);
        return ResultUtils.success("查询成",list);
    }
```

##### 3、小程序api/goods.js添加getMyUnusedListApi()方法

```js
import http from '../common/http.js'
//发布分类
export const categoryApi = (parm)=>{
	return http.get('/api/category/getSelectList',parm)
}
//发布
export const releaseApi = (parm)=>{
	return http.post('/api/goods/release',parm)
}
//闲置分类
export const getCateListApi = ()=>{
	return http.get('/api/category/getCateList')
}
//闲置列表
export const getUsedListApi = (parm)=>{
	return http.get('/api/goods/getUsedList',parm)
}
//求购列表
export const getBuyListApi = (parm)=>{
	return http.get('/api/goods/getBuyList',parm)
}
//我的求购列表
export const getMyUnusedListApi = (parm)=>{
	return http.get('/api/goods/getMyUnusedList',parm)
}
```

##### 4、my_unused.vue页面

```js
<template>
	<view class="page-box">
		<view class="order" v-for="(item, index) in list" :key="item.goodsId">
			<view class="top">
				<view class="left">
					<!-- <u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon> -->
					<view class="store">{{ item.goodsName }}</view>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<image :src="item.image.split(',')[0]" mode="aspectFill"></image>
				</view>
				<view class="content">
					<view class="title u-line-2">{{ item.goodsDesc }}</view>
					<view class="type">{{ item.address }}</view>
					<view class="delivery-time">发布时间 {{ item.createTime }}</view>
				</view>
				<view class="right">
					<view style="color: #FF7670;" class="price">
						￥{{ item.goodsPrice }}
					</view>
					<view class="number">x1</view>
				</view>
			</view>
			<view class="bottom">
				<view class="logistics btn">查看</view>
				<view class="exchange btn">下架</view>
				<view class="evaluate btn">编辑</view>
				<view class="evaluate btn">删除</view>
			</view>
		</view>
		<u-loadmore :status="loadstatus" @loadmore="loadMore" bgColor="#f2f2f2"></u-loadmore>
	</view>
</template>

<script setup>
import { onReachBottom, onReady } from '@dcloudio/uni-app';
import { reactive, ref } from 'vue';
import {getMyUnusedListApi} from '../../api/goods.js'
const list = ref([])
//列表查询的参数
const parm = reactive({
	userId:uni.getStorageSync("userId"),
	type:'0',
	currentPage:1,
	pageSize:10
})
//获取列表数据
//总页数
const pages = ref(0)
const getMyUnusedList = async()=>{
	let res =await getMyUnusedListApi(parm)
	if(res && res.code == 200){
		console.log(res)
		pages.value = res.data.pages;
		list.value = list.value.concat(res.data.records)
	}
}
const loadstatus = ref('loadmore')
//加载更多
const loadMore = ()=>{
	console.log('点击加载更多了')
	if(parm.currentPage >= pages.value){
		loadstatus.value = "nomore"
		return;
	}
	loadstatus.value = "loading"
	parm.currentPage = ++ parm.currentPage;
	getMyUnusedList()
}
onReachBottom(()=>{
	console.log('触底加载更多了')
	if(parm.currentPage >= pages.value){
		loadstatus.value = "nomore"
		return;
	}
	loadstatus.value = "loading"
	parm.currentPage = ++ parm.currentPage;
	getMyUnusedList()
})
onReady(()=>{
	getMyUnusedList()
})
</script>

<style lang="scss">
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: space-between;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
			margin-right: 10px;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
</style>

```

##### 5、my_buy.vue页面

```js
<template>
	<view class="page-box">
		<view class="order" v-for="(item, index) in list" :key="item.goodsId">
			<view class="top">
				<view class="left">
					<!-- <u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon> -->
					<view class="store">{{ item.goodsName }}</view>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<image :src="item.image.split(',')[0]" mode="aspectFill"></image>
				</view>
				<view class="content">
					<view class="title u-line-2">{{ item.goodsDesc }}</view>
					<view class="type">{{ item.address }}</view>
					<view class="delivery-time">发布时间 {{ item.createTime }}</view>
				</view>
				<view class="right">
					<view style="color: #FF7670;" class="price">
						￥{{ item.goodsPrice }}
					</view>
					<view class="number">x1</view>
				</view>
			</view>
			<view class="bottom">
				<view class="logistics btn">查看</view>
				<view class="exchange btn">下架</view>
				<view class="evaluate btn">编辑</view>
				<view class="evaluate btn">删除</view>
			</view>
		</view>
		<u-loadmore :status="loadstatus" @loadmore="loadMore" bgColor="#f2f2f2"></u-loadmore>
	</view>
</template>

<script setup>
import { onReachBottom, onReady } from '@dcloudio/uni-app';
import { reactive, ref } from 'vue';
import {getMyUnusedListApi} from '../../api/goods.js'
const list = ref([])
//列表查询的参数
const parm = reactive({
	userId:uni.getStorageSync("userId"),
	type:'1',
	currentPage:1,
	pageSize:10
})
//获取列表数据
//总页数
const pages = ref(0)
const getMyUnusedList = async()=>{
	let res =await getMyUnusedListApi(parm)
	if(res && res.code == 200){
		console.log(res)
		pages.value = res.data.pages;
		list.value = list.value.concat(res.data.records)
	}
}
const loadstatus = ref('loadmore')
//加载更多
const loadMore = ()=>{
	console.log('点击加载更多了')
	if(parm.currentPage >= pages.value){
		loadstatus.value = "nomore"
		return;
	}
	loadstatus.value = "loading"
	parm.currentPage = ++ parm.currentPage;
	getMyUnusedList()
}
onReachBottom(()=>{
	console.log('触底加载更多了')
	if(parm.currentPage >= pages.value){
		loadstatus.value = "nomore"
		return;
	}
	loadstatus.value = "loading"
	parm.currentPage = ++ parm.currentPage;
	getMyUnusedList()
})
onReady(()=>{
	getMyUnusedList()
})
</script>

<style lang="scss">
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: space-between;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
			margin-right: 10px;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
</style>

```













#### 第83讲 闲置求购编辑、删除接口开发

##### 1、GoodsController控制器添加edit()方法

```js
//编辑
@PostMapping("/edit")
public ResultVo edit(@RequestBody Goods goods){
    if(goodsService.updateById(goods)){
        return ResultUtils.success("编辑成功！");
    }
    return ResultUtils.error("编辑失败!");
}
```

##### 2、api/goods.js添加editApi()方法

```js
//编辑
export const editApi = (parm)=>{
	return http.post('/api/goods/edit',parm)
}
```

##### 3、unused_edit.vue页面

```js
<template>
	<view class="u-wrap u-p-l-20 u-p-r-20">
		<u-form :model="addModel" ref="form1">
			<u-form-item prop="name" label="类型:">
				<u-radio-group v-model="addModel.name">
					<u-radio @change="radioChange" activeColor="#FF7670" v-for="(item, index) in list" :key="index" :name="item.name"
						:disabled="item.disabled">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item prop="goodsName" label="名称:">
				<u-input placeholder="请输入名称" v-model="addModel.goodsName" />
			</u-form-item>
			<u-form-item prop="categoryName" label="分类:">
				<u-input @click="openSelect" placeholder="请选择分类" v-model="addModel.categoryName" />
				<u-select @confirm="selectConfirm" v-model="show" :list="selectList"></u-select>
			</u-form-item>
			<u-form-item prop="goodsDesc" label="简介:">
				<u-input placeholder="请输入简介" v-model="addModel.goodsDesc" />
			</u-form-item>
			<u-form-item prop="goodsPrice" label="价格:">
				<u-input placeholder="请输入价格" v-model="addModel.goodsPrice" />
			</u-form-item>
			<u-form-item prop="userName" label-width="auto" label="联系人:">
				<u-input placeholder="请输入联系人" v-model="addModel.userName" />
			</u-form-item>
			<u-form-item prop="phone" label-width="auto" label="联系电话:">
				<u-input placeholder="请输入联系电话" v-model="addModel.phone" />
			</u-form-item>
			<u-form-item prop="wxNum" label-width="auto" label="微信号:">
				<u-input placeholder="请输入微信号" v-model="addModel.wxNum" />
			</u-form-item>
			<u-form-item prop="address" label-width="auto" label="联系地址:">
				<u-input v-model="addModel.address" />
			</u-form-item>
			<u-form-item prop="image" label="图片:"></u-form-item>
			<u-upload ref="imgRef" :file-list="fileList"  @on-remove="onRemove" @on-change="onChange" :action="action"></u-upload>
		</u-form>
		<u-button @click="commit" :custom-style="customStyle">确定编辑</u-button>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'
	import http from '../../common/http.js'
	import {
		categoryApi,
		editApi
	} from '../../api/goods.js'
	//表单ref属性
	const form1 = ref()
	const imgRef = ref()
	const addModel = reactive({
		userId: uni.getStorageSync('userId'),
		name: '',
		type: '',
		goodsName: '',
		categoryId: '',
		categoryName: '',
		goodsDesc: '',
		goodsPrice: '',
		userName: '',
		phone: '',
		wxNum: '',
		image: '',
		address: ''
	})
	const list = [{
			value: '0',
			name: '闲置',
			disabled: false
		},
		{
			value: '1',
			name: '求购',
			disabled: false
		}
	]
	const rules = reactive({
			name: [{
				required: true,
				message: '请选择类型',
				trigger: ['change', 'blur'],
			}],
			goodsName: [{
				required: true,
				message: '请填写名称',
				trigger: ['change', 'blur'],
			}],
			goodsDesc: [{
				required: true,
				message: '请填写描述',
				trigger: ['change', 'blur'],
			}],
			goodsPrice: [{
				required: true,
				message: '请填写价格',
				trigger: ['change', 'blur'],
				transform(value){
					return String(value)
				}
			}],
			userName: [{
				required: true,
				message: '请填写姓名',
				trigger: ['change', 'blur'],
			}],
			phone: [{
				required: true,
				message: '请填写电话',
				trigger: ['change', 'blur'],
			}],
			wxNum: [{
				required: true,
				message: '请填写微信号',
				trigger: ['change', 'blur'],
			}],
			address: [{
				required: true,
				message: '请填写发布/求购地址',
				trigger: ['change', 'blur'],
			}]
		})
	const value = ref('')
	const fileList = ref([])
	const customStyle = reactive({
		background: '#FF7670',
		color: '#FFF',
		marginTop: '50px',
		width: '100%'
	})
	//图片上传路径
	const action = ref(http.baseUrl + "/api/upload/uploadImage")
	//存储图片路径
	const imgUrl = ref([])
	//图片上传触发
	const onChange = (res, index, lists, name) => {
		// console.log(res.data)
		let result = JSON.parse(res.data)
		//把返回的图片放到imgUrl
		imgUrl.value.push(http.baseUrl + result.data)
		//把数组里面的图片转为逗号分隔的字符串
		let url = ''
		for (let k = 0; k < imgUrl.value.length; k++) {
			url = url + imgUrl.value[k] + ','
		}
		// console.log(url)
		//去掉末尾的逗号
		addModel.image = url.substring(0, url.lastIndexOf(','))
		console.log(addModel)
	}
	//删除图片
	const onRemove = (index) => {
		//删除图片
		imgUrl.value.splice(index, 1)
		let url = ''
		for (let k = 0; k < imgUrl.value.length; k++) {
			url = url + imgUrl.value[k] + ','
		}
		// console.log(url)
		//去掉末尾的逗号
		addModel.image = url.substring(0, url.lastIndexOf(','))
		console.log(addModel)
	}
	//分类
	const show = ref(false)
	//分类数据
	const cageId = ref('')
	const selectList = ref([])
	const getSelectList = async () => {
		let res = await categoryApi()
		if (res && res.code == 200) {
			console.log(res)
			selectList.value = res.data;
			//设置分类
			if(cageId.value){
				for(let k=0;k<selectList.value.length;k++){
					if(selectList.value[k].value == cageId.value){
						addModel.categoryName = selectList.value[k].label;
					}
				}
			}
		}
	}
	//打开分类
	const openSelect = ()=>{
		show.value = true;
	}
	//分类确定
	const selectConfirm = (e)=>{
		console.log(e)
		addModel.categoryName = e[0].label;
		addModel.categoryId = e[0].value;
	}
	//发布提交
	const commit = ()=>{
		form1.value.validate(async(valid)=>{
			console.log(addModel)
			if(valid){
				let res = await editApi(addModel)
				if(res && res.code == 200){
					console.log(res)
					uni.navigateTo({
						url:'../my_unused/my_unused'
					})
					//清空数据
					form1.value.resetFields()
					imgUrl.value = []
					addModel.image = '';
					fileList.value = []
					imgRef.value.clear()
				}
			}
		})
		console.log(addModel)
	}
	//类型点击事件
	const radioChange = (e)=>{
		console.log(e)
		for(let i = 0;i<list.length;i++){
			if(list[i].name == e){
				addModel.type = list[i].value;
			}
		}
	}
	onReady(() => {
		//设置表单验证规则
		form1.value.setRules(rules);
		//设置图片回显
		imgRef.value.lists = fileList.value
		//获取分类数据
		getSelectList()
	})
	
	onLoad((options)=>{
		imgUrl.value = [];
		fileList.value = [];
		const goods = JSON.parse(options.goods)
		cageId.value = goods.categoryId;
		console.log(goods)
		addModel.goodsId = goods.goodsId;
		addModel.categoryId = goods.categoryId;
		addModel.image = goods.image;
		//物品的图片回显
		if (goods.image) {
			let imgs = goods.image.split(",");
			for(let g=0;g<imgs.length;g++){
				imgUrl.value.push(imgs[g]);
				let obj = {url:''}
				obj.url = imgs[g]
				fileList.value.push(obj)
			}
		}
		addModel.goodsName = goods.goodsName;
		addModel.goodsDesc = goods.goodsDesc;
		addModel.address = goods.address;
		addModel.goodsPrice = goods.goodsPrice
		addModel.userName = goods.userName;
		addModel.phone = goods.phone
		addModel.type = goods.type
		addModel.wxNum = goods.wxNum
		//设置类型
		for(let i=0;i<list.length;i++){
			if(list[i].value == goods.type){
				addModel.name = list[i].name;
			}
		}
		
	})
</script>

<style>

</style>

```

##### 4、buy_edit.vue页面

```js
<template>
	<view class="u-wrap u-p-l-20 u-p-r-20">
		<u-form :model="addModel" ref="form1">
			<u-form-item prop="name" label="类型:">
				<u-radio-group v-model="addModel.name">
					<u-radio @change="radioChange" activeColor="#FF7670" v-for="(item, index) in list" :key="index" :name="item.name"
						:disabled="item.disabled">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item prop="goodsName" label="名称:">
				<u-input placeholder="请输入名称" v-model="addModel.goodsName" />
			</u-form-item>
			<u-form-item prop="categoryName" label="分类:">
				<u-input @click="openSelect" placeholder="请选择分类" v-model="addModel.categoryName" />
				<u-select @confirm="selectConfirm" v-model="show" :list="selectList"></u-select>
			</u-form-item>
			<u-form-item prop="goodsDesc" label="简介:">
				<u-input placeholder="请输入简介" v-model="addModel.goodsDesc" />
			</u-form-item>
			<u-form-item prop="goodsPrice" label="价格:">
				<u-input placeholder="请输入价格" v-model="addModel.goodsPrice" />
			</u-form-item>
			<u-form-item prop="userName" label-width="auto" label="联系人:">
				<u-input placeholder="请输入联系人" v-model="addModel.userName" />
			</u-form-item>
			<u-form-item prop="phone" label-width="auto" label="联系电话:">
				<u-input placeholder="请输入联系电话" v-model="addModel.phone" />
			</u-form-item>
			<u-form-item prop="wxNum" label-width="auto" label="微信号:">
				<u-input placeholder="请输入微信号" v-model="addModel.wxNum" />
			</u-form-item>
			<u-form-item prop="address" label-width="auto" label="联系地址:">
				<u-input v-model="addModel.address" />
			</u-form-item>
			<u-form-item prop="image" label="图片:"></u-form-item>
			<u-upload ref="imgRef" :file-list="fileList"  @on-remove="onRemove" @on-change="onChange" :action="action"></u-upload>
		</u-form>
		<u-button @click="commit" :custom-style="customStyle">确定编辑</u-button>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'
	import http from '../../common/http.js'
	import {
		categoryApi,
		editApi
	} from '../../api/goods.js'
	//表单ref属性
	const form1 = ref()
	const imgRef = ref()
	const addModel = reactive({
		userId: uni.getStorageSync('userId'),
		name: '',
		type: '',
		goodsName: '',
		categoryId: '',
		categoryName: '',
		goodsDesc: '',
		goodsPrice: '',
		userName: '',
		phone: '',
		wxNum: '',
		image: '',
		address: ''
	})
	const list = [{
			value: '0',
			name: '闲置',
			disabled: false
		},
		{
			value: '1',
			name: '求购',
			disabled: false
		}
	]
	const rules = reactive({
			name: [{
				required: true,
				message: '请选择类型',
				trigger: ['change', 'blur'],
			}],
			goodsName: [{
				required: true,
				message: '请填写名称',
				trigger: ['change', 'blur'],
			}],
			goodsDesc: [{
				required: true,
				message: '请填写描述',
				trigger: ['change', 'blur'],
			}],
			goodsPrice: [{
				required: true,
				message: '请填写价格',
				trigger: ['change', 'blur'],
				transform(value){
					return String(value)
				}
			}],
			userName: [{
				required: true,
				message: '请填写姓名',
				trigger: ['change', 'blur'],
			}],
			phone: [{
				required: true,
				message: '请填写电话',
				trigger: ['change', 'blur'],
			}],
			wxNum: [{
				required: true,
				message: '请填写微信号',
				trigger: ['change', 'blur'],
			}],
			address: [{
				required: true,
				message: '请填写发布/求购地址',
				trigger: ['change', 'blur'],
			}]
		})
	const value = ref('')
	const fileList = ref([])
	const customStyle = reactive({
		background: '#FF7670',
		color: '#FFF',
		marginTop: '50px',
		width: '100%'
	})
	//图片上传路径
	const action = ref(http.baseUrl + "/api/upload/uploadImage")
	//存储图片路径
	const imgUrl = ref([])
	//图片上传触发
	const onChange = (res, index, lists, name) => {
		// console.log(res.data)
		let result = JSON.parse(res.data)
		//把返回的图片放到imgUrl
		imgUrl.value.push(http.baseUrl + result.data)
		//把数组里面的图片转为逗号分隔的字符串
		let url = ''
		for (let k = 0; k < imgUrl.value.length; k++) {
			url = url + imgUrl.value[k] + ','
		}
		// console.log(url)
		//去掉末尾的逗号
		addModel.image = url.substring(0, url.lastIndexOf(','))
		console.log(addModel)
	}
	//删除图片
	const onRemove = (index) => {
		//删除图片
		imgUrl.value.splice(index, 1)
		let url = ''
		for (let k = 0; k < imgUrl.value.length; k++) {
			url = url + imgUrl.value[k] + ','
		}
		// console.log(url)
		//去掉末尾的逗号
		addModel.image = url.substring(0, url.lastIndexOf(','))
		console.log(addModel)
	}
	//分类
	const show = ref(false)
	//分类数据
	const cageId = ref('')
	const selectList = ref([])
	const getSelectList = async () => {
		let res = await categoryApi()
		if (res && res.code == 200) {
			console.log(res)
			selectList.value = res.data;
			//设置分类
			if(cageId.value){
				for(let k=0;k<selectList.value.length;k++){
					if(selectList.value[k].value == cageId.value){
						addModel.categoryName = selectList.value[k].label;
					}
				}
			}
		}
	}
	//打开分类
	const openSelect = ()=>{
		show.value = true;
	}
	//分类确定
	const selectConfirm = (e)=>{
		console.log(e)
		addModel.categoryName = e[0].label;
		addModel.categoryId = e[0].value;
	}
	//发布提交
	const commit = ()=>{
		form1.value.validate(async(valid)=>{
			console.log(addModel)
			if(valid){
				let res = await editApi(addModel)
				if(res && res.code == 200){
					console.log(res)
					uni.navigateTo({
						url:'../my_buy/my_buy'
					})
					//清空数据
					form1.value.resetFields()
					imgUrl.value = []
					addModel.image = '';
					fileList.value = []
					imgRef.value.clear()
				}
			}
		})
		console.log(addModel)
	}
	//类型点击事件
	const radioChange = (e)=>{
		console.log(e)
		for(let i = 0;i<list.length;i++){
			if(list[i].name == e){
				addModel.type = list[i].value;
			}
		}
	}
	onReady(() => {
		//设置表单验证规则
		form1.value.setRules(rules);
		//设置图片回显
		imgRef.value.lists = fileList.value
		//获取分类数据
		getSelectList()
	})
	
	onLoad((options)=>{
		imgUrl.value = [];
		fileList.value = [];
		const goods = JSON.parse(options.goods)
		cageId.value = goods.categoryId;
		console.log(goods)
		addModel.goodsId = goods.goodsId;
		addModel.categoryId = goods.categoryId;
		addModel.image = goods.image;
		//物品的图片回显
		if (goods.image) {
			let imgs = goods.image.split(",");
			for(let g=0;g<imgs.length;g++){
				imgUrl.value.push(imgs[g]);
				let obj = {url:''}
				obj.url = imgs[g]
				fileList.value.push(obj)
			}
		}
		addModel.goodsName = goods.goodsName;
		addModel.goodsDesc = goods.goodsDesc;
		addModel.address = goods.address;
		addModel.goodsPrice = goods.goodsPrice
		addModel.userName = goods.userName;
		addModel.phone = goods.phone
		addModel.type = goods.type
		addModel.wxNum = goods.wxNum
		//设置类型
		for(let i=0;i<list.length;i++){
			if(list[i].value == goods.type){
				addModel.name = list[i].name;
			}
		}
		
	})
</script>

<style>

</style>

```















#### 第84讲 查看、下架、删除接口对接

##### 1、api/goods.js添加upanddownpi()和deleteApi()方法

```js
import http from '../common/http.js'
//发布分类
export const categoryApi = (parm)=>{
	return http.get('/api/category/getSelectList',parm)
}
//发布
export const releaseApi = (parm)=>{
	return http.post('/api/goods/release',parm)
}
//闲置分类
export const getCateListApi = ()=>{
	return http.get('/api/category/getCateList')
}
//闲置列表
export const getUsedListApi = (parm)=>{
	return http.get('/api/goods/getUsedList',parm)
}
//求购列表
export const getBuyListApi = (parm)=>{
	return http.get('/api/goods/getBuyList',parm)
}
//我的求购列表
export const getMyUnusedListApi = (parm)=>{
	return http.get('/api/goods/getMyUnusedList',parm)
}
//编辑
export const editApi = (parm)=>{
	return http.post('/api/goods/edit',parm)
}
//下架
export const upanddownpi = (parm)=>{
	return http.post('/api/goods/upanddown',parm)
}
//删除
export const deleteApi = (parm)=>{
	return http.post('/api/goods/delete',parm)
}
```

##### 2、my_unused.vue页面

```js
<template>
	<view class="page-box">
		<view class="order" v-for="(item, index) in list" :key="item.goodsId">
			<view class="top">
				<view class="left">
					<!-- <u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon> -->
					<view class="store">{{ item.goodsName }}</view>
				</view>
				<view style="color: #82848a;" v-if="item.status == '0'" class="right">已上架</view>
				<view style="color: #FF7670;" v-if="item.status == '1'" class="right">已下架</view>
			</view>
			<view class="item">
				<view class="left">
					<image :src="item.image.split(',')[0]" mode="aspectFill"></image>
				</view>
				<view class="content">
					<view class="title u-line-2">{{ item.goodsDesc }}</view>
					<view class="type">{{ item.address }}</view>
					<view class="delivery-time">发布时间 {{ item.createTime }}</view>
				</view>
				<view class="right">
					<view style="color: #FF7670;" class="price">
						￥{{ item.goodsPrice }}
					</view>
					<view class="number">x1</view>
				</view>
			</view>
			<view class="bottom">
				<view @click="lookBtn(item)" class="logistics btn">查看</view>
				<view @click="upanddownBtn(item)" class="exchange btn">
					<spna v-if="item.status == '0'">下架</spna>
					<spna v-if="item.status == '1'">上架</spna>
				</view>
				<view @click="editBtn(item)" class="evaluate btn">编辑</view>
				<view @click="deleteBtn(item)" class="evaluate btn">删除</view>
			</view>
		</view>
		<u-loadmore :status="loadstatus" @loadmore="loadMore" bgColor="#f2f2f2"></u-loadmore>
		<u-popup :mask-close-able="false" border-radius="15" width="70%" height="120px" v-model="show" mode="center">
			<view style="padding: 20px 15px 20px 15px;">
				确定删除该数据吗?
			</view>
			<view class="conBtn">
				<u-button @click="cancel" style="margin-right: 15px;" type="info">取消</u-button>
				<u-button @click="confirm" style="margin-left: 15px;" :custom-style="customStyle" type="error">确定</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script setup>
import { onReachBottom, onReady } from '@dcloudio/uni-app';
import { reactive, ref } from 'vue';
import {getMyUnusedListApi,upanddownpi,deleteApi} from '../../api/goods.js'
const list = ref([])
const customStyle = reactive({
		background:'#FF7670'
	})
//列表查询的参数
const parm = reactive({
	userId:uni.getStorageSync("userId"),
	type:'0',
	currentPage:1,
	pageSize:10
})
//获取列表数据
//总页数
const pages = ref(0)
const getMyUnusedList = async()=>{
	let res =await getMyUnusedListApi(parm)
	if(res && res.code == 200){
		console.log(res)
		pages.value = res.data.pages;
		list.value = list.value.concat(res.data.records)
	}
}
const loadstatus = ref('loadmore')
//加载更多
const loadMore = ()=>{
	console.log('点击加载更多了')
	if(parm.currentPage >= pages.value){
		loadstatus.value = "nomore"
		return;
	}
	loadstatus.value = "loading"
	parm.currentPage = ++ parm.currentPage;
	getMyUnusedList()
}
onReachBottom(()=>{
	console.log('触底加载更多了')
	if(parm.currentPage >= pages.value){
		loadstatus.value = "nomore"
		return;
	}
	loadstatus.value = "loading"
	parm.currentPage = ++ parm.currentPage;
	getMyUnusedList()
})
//编辑
const editBtn = (item)=>{
	uni.navigateTo({
		url:"../unused_edit/unused_edit?goods=" + JSON.stringify(item)
	})
}
//查看
const lookBtn = (item)=>{
	uni.navigateTo({
		url:"../look_unused/look_unused?goods=" + JSON.stringify(item)
	})
}
//下架
const upanddownBtn = async(item)=>{
	console.log(item)
	let res = await upanddownpi({
		goodsId:item.goodsId,
		status: item.status=='1' ? '0' : '1'
	})
	if(res && res.code == 200){
		list.value = []
		parm.currentPage = 1;
		getMyUnusedList()
	}
}
//删除
const deleteId = ref('')
const show = ref(false)
//删除按钮点击事件
const deleteBtn = (item)=>{
	console.log(item)
	deleteId.value = item.goodsId;
	show.value = true;
	console.log(deleteId.value)
}
const cancel = ()=>{
	show.value = false;
}
const confirm = async()=>{
	let res = await deleteApi({
		goodsId:deleteId.value
	})
	if(res && res.code == 200){
		list.value = []
		parm.currentPage = 1;
		getMyUnusedList()
		show.value = false;
	}
}
onReady(()=>{
	getMyUnusedList()
})
</script>

<style lang="scss">
	.conBtn{
		display: flex;
		justify-content: center;
		align-items: center;
	}
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: space-between;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
			margin-right: 10px;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
</style>

```

##### 3、my_buy.vue页面

```js
<template>
	<view class="page-box">
		<view class="order" v-for="(item, index) in list" :key="item.goodsId">
			<view class="top">
				<view class="left">
					<!-- <u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon> -->
					<view class="store">{{ item.goodsName }}</view>
				</view>
				<view style="color: #82848a;" v-if="item.status == '0'" class="right">已上架</view>
				<view style="color: #FF7670;" v-if="item.status == '1'" class="right">已下架</view>
			</view>
			<view class="item">
				<view class="left">
					<image :src="item.image.split(',')[0]" mode="aspectFill"></image>
				</view>
				<view class="content">
					<view class="title u-line-2">{{ item.goodsDesc }}</view>
					<view class="type">{{ item.address }}</view>
					<view class="delivery-time">发布时间 {{ item.createTime }}</view>
				</view>
				<view class="right">
					<view style="color: #FF7670;" class="price">
						￥{{ item.goodsPrice }}
					</view>
					<view class="number">x1</view>
				</view>
			</view>
			<view class="bottom">
				<view @click="lookBtn(item)" class="logistics btn">查看</view>
				<view @click="upanddownBtn(item)" class="exchange btn">
					<spna v-if="item.status == '0'">下架</spna>
					<spna v-if="item.status == '1'">上架</spna>
				</view>
				<view @click="editBtn(item)" class="evaluate btn">编辑</view>
				<view @click="deleteBtn(item)" class="evaluate btn">删除</view>
			</view>
		</view>
		<u-loadmore :status="loadstatus" @loadmore="loadMore" bgColor="#f2f2f2"></u-loadmore>
		<u-popup :mask-close-able="false" border-radius="15" width="70%" height="120px" v-model="show" mode="center">
			<view style="padding: 20px 15px 20px 15px;">
				确定删除该数据吗?
			</view>
			<view class="conBtn">
				<u-button @click="cancel" style="margin-right: 15px;" type="info">取消</u-button>
				<u-button @click="confirm" style="margin-left: 15px;" :custom-style="customStyle" type="error">确定</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script setup>
import { onReachBottom, onReady } from '@dcloudio/uni-app';
import { reactive, ref } from 'vue';
import {getMyUnusedListApi,upanddownpi,deleteApi} from '../../api/goods.js'
const list = ref([])
const customStyle = reactive({
		background:'#FF7670'
	})
//列表查询的参数
const parm = reactive({
	userId:uni.getStorageSync("userId"),
	type:'1',
	currentPage:1,
	pageSize:10
})
//获取列表数据
//总页数
const pages = ref(0)
const getMyUnusedList = async()=>{
	let res =await getMyUnusedListApi(parm)
	if(res && res.code == 200){
		console.log(res)
		pages.value = res.data.pages;
		list.value = list.value.concat(res.data.records)
	}
}
const loadstatus = ref('loadmore')
//加载更多
const loadMore = ()=>{
	console.log('点击加载更多了')
	if(parm.currentPage >= pages.value){
		loadstatus.value = "nomore"
		return;
	}
	loadstatus.value = "loading"
	parm.currentPage = ++ parm.currentPage;
	getMyUnusedList()
}
onReachBottom(()=>{
	console.log('触底加载更多了')
	if(parm.currentPage >= pages.value){
		loadstatus.value = "nomore"
		return;
	}
	loadstatus.value = "loading"
	parm.currentPage = ++ parm.currentPage;
	getMyUnusedList()
})
//编辑
const editBtn = (item)=>{
	uni.navigateTo({
		url:"../buy_edit/buy_edit?goods=" + JSON.stringify(item)
	})
}
//查看
const lookBtn = (item)=>{
	uni.navigateTo({
		url:"../look_buy/look_buy?goods=" + JSON.stringify(item)
	})
}
//下架
const upanddownBtn = async(item)=>{
	console.log(item)
	let res = await upanddownpi({
		goodsId:item.goodsId,
		status: item.status=='1' ? '0' : '1'
	})
	if(res && res.code == 200){
		list.value = []
		parm.currentPage = 1;
		getMyUnusedList()
	}
}
//删除
const deleteId = ref('')
const show = ref(false)
//删除按钮点击事件
const deleteBtn = (item)=>{
	console.log(item)
	deleteId.value = item.goodsId;
	show.value = true;
	console.log(deleteId.value)
}
const cancel = ()=>{
	show.value = false;
}
const confirm = async()=>{
	let res = await deleteApi({
		goodsId:deleteId.value
	})
	if(res && res.code == 200){
		list.value = []
		parm.currentPage = 1;
		getMyUnusedList()
		show.value = false;
	}
}
onReady(()=>{
	getMyUnusedList()
})
</script>

<style lang="scss">
	.conBtn{
		display: flex;
		justify-content: center;
		align-items: center;
	}
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: space-between;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
			margin-right: 10px;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
</style>

```

##### 4、look_buy.vue页面

```js
<template>
	<view class="u-wrap u-p-l-20 u-p-r-20">
		<u-form :model="addModel" ref="form1">
			<u-form-item prop="name" label="类型:">
				<u-radio-group v-model="addModel.name">
					<u-radio :disabled="true" @change="radioChange" activeColor="#FF7670" v-for="(item, index) in list" :key="index" :name="item.name">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item prop="goodsName" label="名称:">
				<u-input disabled placeholder="请输入名称" v-model="addModel.goodsName" />
			</u-form-item>
			<u-form-item prop="categoryName" label="分类:">
				<u-input disabled placeholder="请选择分类" v-model="addModel.categoryName" />
			</u-form-item>
			<u-form-item prop="goodsDesc" label="简介:">
				<u-input disabled placeholder="请输入简介" v-model="addModel.goodsDesc" />
			</u-form-item>
			<u-form-item prop="goodsPrice" label="价格:">
				<u-input disabled placeholder="请输入价格" v-model="addModel.goodsPrice" />
			</u-form-item>
			<u-form-item prop="userName" label-width="auto" label="联系人:">
				<u-input disabled placeholder="请输入联系人" v-model="addModel.userName" />
			</u-form-item>
			<u-form-item prop="phone" label-width="auto" label="联系电话:">
				<u-input disabled placeholder="请输入联系电话" v-model="addModel.phone" />
			</u-form-item>
			<u-form-item prop="wxNum" label-width="auto" label="微信号:">
				<u-input disabled placeholder="请输入微信号" v-model="addModel.wxNum" />
			</u-form-item>
			<u-form-item prop="address" label-width="auto" label="联系地址:">
				<u-input disabled v-model="addModel.address" />
			</u-form-item>
			<u-form-item prop="image" label="图片:"></u-form-item>
			<u-upload  ref="imgRef" :file-list="fileList" :deletable="false"></u-upload>
		</u-form>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'
	import http from '../../common/http.js'
	import {
		categoryApi,
		editApi
	} from '../../api/goods.js'
	//表单ref属性
	const form1 = ref()
	const imgRef = ref()
	const addModel = reactive({
		userId: uni.getStorageSync('userId'),
		name: '',
		type: '',
		goodsName: '',
		categoryId: '',
		categoryName: '',
		goodsDesc: '',
		goodsPrice: '',
		userName: '',
		phone: '',
		wxNum: '',
		image: '',
		address: ''
	})
	const list = [{
			value: '0',
			name: '闲置',
			disabled: false
		},
		{
			value: '1',
			name: '求购',
			disabled: false
		}
	]
	
	const value = ref('')
	const fileList = ref([])
	const customStyle = reactive({
		background: '#FF7670',
		color: '#FFF',
		marginTop: '50px',
		width: '100%'
	})
	//图片上传路径
	const action = ref(http.baseUrl + "/api/upload/uploadImage")
	//存储图片路径
	const imgUrl = ref([])
	//分类
	const show = ref(false)
	//分类数据
	const cageId = ref('')
	const selectList = ref([])
	const getSelectList = async () => {
		let res = await categoryApi()
		if (res && res.code == 200) {
			console.log(res)
			selectList.value = res.data;
			//设置分类
			if(cageId.value){
				for(let k=0;k<selectList.value.length;k++){
					if(selectList.value[k].value == cageId.value){
						addModel.categoryName = selectList.value[k].label;
					}
				}
			}
		}
	}
	//打开分类
	const openSelect = ()=>{
		show.value = true;
	}
	//分类确定
	const selectConfirm = (e)=>{
		console.log(e)
		addModel.categoryName = e[0].label;
		addModel.categoryId = e[0].value;
	}
	
	//类型点击事件
	const radioChange = (e)=>{
		console.log(e)
		for(let i = 0;i<list.length;i++){
			if(list[i].name == e){
				addModel.type = list[i].value;
			}
		}
	}
	onReady(() => {
		//设置图片回显
		imgRef.value.lists = fileList.value
		//获取分类数据
		getSelectList()
	})
	
	onLoad((options)=>{
		imgUrl.value = [];
		fileList.value = [];
		const goods = JSON.parse(options.goods)
		cageId.value = goods.categoryId;
		console.log(goods)
		addModel.goodsId = goods.goodsId;
		addModel.categoryId = goods.categoryId;
		addModel.image = goods.image;
		//物品的图片回显
		if (goods.image) {
			let imgs = goods.image.split(",");
			for(let g=0;g<imgs.length;g++){
				imgUrl.value.push(imgs[g]);
				let obj = {url:''}
				obj.url = imgs[g]
				fileList.value.push(obj)
			}
		}
		addModel.goodsName = goods.goodsName;
		addModel.goodsDesc = goods.goodsDesc;
		addModel.address = goods.address;
		addModel.goodsPrice = goods.goodsPrice
		addModel.userName = goods.userName;
		addModel.phone = goods.phone
		addModel.type = goods.type
		addModel.wxNum = goods.wxNum
		//设置类型
		for(let i=0;i<list.length;i++){
			if(list[i].value == goods.type){
				addModel.name = list[i].name;
			}
		}
		
	})
</script>

<style>

</style>

```

##### 5、look_unused.vue页面

```js
<template>
	<view class="u-wrap u-p-l-20 u-p-r-20">
		<u-form :model="addModel" ref="form1">
			<u-form-item prop="name" label="类型:">
				<u-radio-group v-model="addModel.name">
					<u-radio :disabled="true" @change="radioChange" activeColor="#FF7670" v-for="(item, index) in list" :key="index" :name="item.name">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item prop="goodsName" label="名称:">
				<u-input disabled placeholder="请输入名称" v-model="addModel.goodsName" />
			</u-form-item>
			<u-form-item prop="categoryName" label="分类:">
				<u-input disabled placeholder="请选择分类" v-model="addModel.categoryName" />
			</u-form-item>
			<u-form-item prop="goodsDesc" label="简介:">
				<u-input disabled placeholder="请输入简介" v-model="addModel.goodsDesc" />
			</u-form-item>
			<u-form-item prop="goodsPrice" label="价格:">
				<u-input disabled placeholder="请输入价格" v-model="addModel.goodsPrice" />
			</u-form-item>
			<u-form-item prop="userName" label-width="auto" label="联系人:">
				<u-input disabled placeholder="请输入联系人" v-model="addModel.userName" />
			</u-form-item>
			<u-form-item prop="phone" label-width="auto" label="联系电话:">
				<u-input disabled placeholder="请输入联系电话" v-model="addModel.phone" />
			</u-form-item>
			<u-form-item prop="wxNum" label-width="auto" label="微信号:">
				<u-input disabled placeholder="请输入微信号" v-model="addModel.wxNum" />
			</u-form-item>
			<u-form-item prop="address" label-width="auto" label="联系地址:">
				<u-input disabled v-model="addModel.address" />
			</u-form-item>
			<u-form-item prop="image" label="图片:"></u-form-item>
			<u-upload  ref="imgRef" :file-list="fileList" :deletable="false"></u-upload>
		</u-form>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'
	import http from '../../common/http.js'
	import {
		categoryApi,
		editApi
	} from '../../api/goods.js'
	//表单ref属性
	const form1 = ref()
	const imgRef = ref()
	const addModel = reactive({
		userId: uni.getStorageSync('userId'),
		name: '',
		type: '',
		goodsName: '',
		categoryId: '',
		categoryName: '',
		goodsDesc: '',
		goodsPrice: '',
		userName: '',
		phone: '',
		wxNum: '',
		image: '',
		address: ''
	})
	const list = [{
			value: '0',
			name: '闲置',
			disabled: false
		},
		{
			value: '1',
			name: '求购',
			disabled: false
		}
	]
	
	const value = ref('')
	const fileList = ref([])
	const customStyle = reactive({
		background: '#FF7670',
		color: '#FFF',
		marginTop: '50px',
		width: '100%'
	})
	//图片上传路径
	const action = ref(http.baseUrl + "/api/upload/uploadImage")
	//存储图片路径
	const imgUrl = ref([])
	//分类
	const show = ref(false)
	//分类数据
	const cageId = ref('')
	const selectList = ref([])
	const getSelectList = async () => {
		let res = await categoryApi()
		if (res && res.code == 200) {
			console.log(res)
			selectList.value = res.data;
			//设置分类
			if(cageId.value){
				for(let k=0;k<selectList.value.length;k++){
					if(selectList.value[k].value == cageId.value){
						addModel.categoryName = selectList.value[k].label;
					}
				}
			}
		}
	}
	//打开分类
	const openSelect = ()=>{
		show.value = true;
	}
	//分类确定
	const selectConfirm = (e)=>{
		console.log(e)
		addModel.categoryName = e[0].label;
		addModel.categoryId = e[0].value;
	}
	
	//类型点击事件
	const radioChange = (e)=>{
		console.log(e)
		for(let i = 0;i<list.length;i++){
			if(list[i].name == e){
				addModel.type = list[i].value;
			}
		}
	}
	onReady(() => {
		//设置图片回显
		imgRef.value.lists = fileList.value
		//获取分类数据
		getSelectList()
	})
	
	onLoad((options)=>{
		imgUrl.value = [];
		fileList.value = [];
		const goods = JSON.parse(options.goods)
		cageId.value = goods.categoryId;
		console.log(goods)
		addModel.goodsId = goods.goodsId;
		addModel.categoryId = goods.categoryId;
		addModel.image = goods.image;
		//物品的图片回显
		if (goods.image) {
			let imgs = goods.image.split(",");
			for(let g=0;g<imgs.length;g++){
				imgUrl.value.push(imgs[g]);
				let obj = {url:''}
				obj.url = imgs[g]
				fileList.value.push(obj)
			}
		}
		addModel.goodsName = goods.goodsName;
		addModel.goodsDesc = goods.goodsDesc;
		addModel.address = goods.address;
		addModel.goodsPrice = goods.goodsPrice
		addModel.userName = goods.userName;
		addModel.phone = goods.phone
		addModel.type = goods.type
		addModel.wxNum = goods.wxNum
		//设置类型
		for(let i=0;i<list.length;i++){
			if(list[i].value == goods.type){
				addModel.name = list[i].name;
			}
		}
		
	})
</script>

<style>

</style>

```















#### 第85讲 收藏接口开发

##### 1、新建实体类

```js
package com.itmk.web.goods_collect.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class CollectParm {
    private Long userId;
    private Long currentPage;
    private Long pageSize;
}

```

##### 2、GoodsCollectMapper接口添加getMyCollect()方法

```js
package com.itmk.web.goods_collect.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.itmk.web.goods.entity.Goods;
import com.itmk.web.goods_collect.entity.GoodsCollect;
import org.apache.ibatis.annotations.Param;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsCollectMapper extends BaseMapper<GoodsCollect> {
    //小程序我的收藏列表
    IPage<Goods> getMyCollect(IPage<Goods> page, @Param("userId") Long userId);
}

```

##### 3、映射文件GoodsCollectMapper.xml

```js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.goods_collect.mapper.GoodsCollectMapper">
    <select id="getMyCollect" resultType="com.itmk.web.goods.entity.Goods">
        select g.* from goods_collect as gc
        left join goods as g  on g.goods_id = gc.goods_id
        where gc.user_id =#{userId}
    </select>
</mapper>
```

##### 4、GoodsCollectService接口添加getMyCollect()方法

```js
package com.itmk.web.goods_collect.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.itmk.web.goods.entity.Goods;
import com.itmk.web.goods_collect.entity.CollectParm;
import com.itmk.web.goods_collect.entity.GoodsCollect;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsCollectService extends IService<GoodsCollect> {
    IPage<Goods> getMyCollect(CollectParm parm);
}

```

实现类

```js
package com.itmk.web.goods_collect.service.impl;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.goods.entity.Goods;
import com.itmk.web.goods_collect.entity.CollectParm;
import com.itmk.web.goods_collect.entity.GoodsCollect;
import com.itmk.web.goods_collect.mapper.GoodsCollectMapper;
import com.itmk.web.goods_collect.service.GoodsCollectService;
import org.springframework.stereotype.Service;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Service
public class GoodsCollectServiceImpl extends ServiceImpl<GoodsCollectMapper, GoodsCollect> implements GoodsCollectService {
    @Override
    public IPage<Goods> getMyCollect(CollectParm parm) {
        //构造分页对象
        IPage<Goods> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        return this.baseMapper.getMyCollect(page,parm.getUserId());
    }
}

```

##### 5、GoodsCollectController控制器添加getMyCollect()方法

```js
//小程序我的收藏列表
@GetMapping("/getMyCollect")
public ResultVo getMyCollect(CollectParm parm){
    IPage<Goods> list = goodsCollectService.getMyCollect(parm);
    return ResultUtils.success("查询成功",list);
}
```













#### 第86讲 小程序收藏列接口对接

##### 1、api/goods.js添加收藏方法getMyCollectApi()

```js
//收藏列表
export const getMyCollectApi = (parm)=>{
	return http.get('/api/collect/getMyCollect',parm)
}
```

##### 2、my_collect.vue页面

```js
<template>
	<view class="page-box">
		<view class="order" v-for="(item, index) in list" :key="item.goodsId">
			<view class="top">
				<view class="left">
					<!-- <u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon> -->
					<view class="store">{{ item.goodsName }}</view>
					<!-- <u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon> -->
				</view>
				<view v-if="item.type == '0'" class="right">闲置</view>
				<view style="color: #FF7670;" v-if="item.type == '1'" class="right">求购</view>
			</view>
			<view class="item">
				<view class="left">
					<image :src="item.image.split(',')[0]" mode="aspectFill"></image>
				</view>
				<view class="content">
					<view class="title u-line-2">{{ item.goodsDesc }}</view>
					<view class="delivery-time">发布时间 {{ item.createTime }}</view>
				</view>
				<view class="right">
					<view class="price">
						￥{{ item.goodsPrice }}
					</view>
					<view class="number">x1</view>
				</view>
			</view>
			<view class="bottom">
				<view class="logistics btn">查看</view>
				<view class="evaluate btn">取消收藏</view>
			</view>
		</view>
		<u-loadmore :status="status" @loadmore="loadmore" bgColor="#f2f2f2"></u-loadmore>
	</view>
</template>

<script setup>
import { onReachBottom, onReady } from '@dcloudio/uni-app';
import { reactive, ref } from 'vue';
import {getMyCollectApi} from '../../api/goods.js'
const list = ref([])
//列表参数
const parm = reactive({
	userId:uni.getStorageSync("userId"),
	currentPage:1,
	pageSize:10
})
//总页数
const pages = ref(0)
//获取列表数据
const getMyCollect = async()=>{
	let res = await getMyCollectApi(parm)
	if(res && res.code == 200){
		console.log(res)
		pages.value = res.data.pages;
		list.value = list.value.concat(res.data.records)
	}
}
const status = ref('loadmore')
//加载更多
const loadmore = ()=>{
	console.log('点击加载更多')
	if(parm.currentPage >= pages.value){
		status.value = "nomore";
		return;
	}
	status.value = "loading"
	parm.currentPage = ++parm.currentPage;
	getMyCollect()
}
//触底加载
onReachBottom(()=>{
	console.log('触底加载')
	if(parm.currentPage >= pages.value){
		status.value = "nomore";
		return;
	}
	status.value = "loading"
	parm.currentPage = ++parm.currentPage;
	getMyCollect()
})
onReady(()=>{
	getMyCollect()
})
</script>

<style lang="scss">
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: flex-end;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
			margin-right: 10px;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
</style>

```













#### 第87讲 收藏查看、取消对接

##### 1、GoodsCollectController添加cancel()方法

```js
package com.itmk.web.goods_collect.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.goods.entity.Goods;
import com.itmk.web.goods_collect.entity.CollectParm;
import com.itmk.web.goods_collect.entity.GoodsCollect;
import com.itmk.web.goods_collect.service.GoodsCollectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RequestMapping("/api/collect")
@RestController
public class GoodsCollectController {
    @Autowired
    private GoodsCollectService goodsCollectService;

    //收藏
    @PostMapping("/collect")
    public ResultVo collect(@RequestBody GoodsCollect goodsCollect){
        //判断是否已经收藏
        QueryWrapper<GoodsCollect> query = new QueryWrapper<>();
        query.lambda().eq(GoodsCollect::getGoodsId,goodsCollect.getGoodsId())
                .eq(GoodsCollect::getUserId,goodsCollect.getUserId());
        GoodsCollect one = goodsCollectService.getOne(query);
        if(one == null){ //未收藏
            goodsCollect.setCollectTime(new Date());
            if(goodsCollectService.save(goodsCollect)){
                return ResultUtils.success("收藏成功!");
            }
            return ResultUtils.error("收藏失败!");
        }else{ //已收藏,取消收藏
            if(goodsCollectService.remove(query)){
              return ResultUtils.success("收藏成功!");
            }
            return ResultUtils.error("收藏失败!");
        }
    }

    //判断是否已经收藏
    @GetMapping("/hasCollect")
    public ResultVo hasCollect(GoodsCollect goodsCollect){
        //判断是否已经收藏
        QueryWrapper<GoodsCollect> query = new QueryWrapper<>();
        query.lambda().eq(GoodsCollect::getGoodsId,goodsCollect.getGoodsId())
                .eq(GoodsCollect::getUserId,goodsCollect.getUserId());
        GoodsCollect one = goodsCollectService.getOne(query);
        if(one != null){ //已经收藏
            return ResultUtils.success("查询成功","1");
        }else{ //未收藏
            return ResultUtils.success("查询成功","0");
        }
    }

    //小程序我的收藏列表
    @GetMapping("/getMyCollect")
    public ResultVo getMyCollect(CollectParm parm){
        IPage<Goods> list = goodsCollectService.getMyCollect(parm);
        return ResultUtils.success("查询成功",list);
    }

    //取消收藏
    @PostMapping("/cancel")
    public ResultVo cancel(@RequestBody GoodsCollect collect){
        if(goodsCollectService.removeById(collect.getCollectId())){
            return ResultUtils.success("取消成功!");
        }
        return ResultUtils.error("取消失败!");
    }

}

```

##### 2、小程序api/goods.js添加cancelCollectApi()方法

```js
//取消收藏
export const cancelCollectApi = (parm)=>{
	console.log(parm)
	return http.post('/api/collect/cancel',parm)
}
```

##### 3、my_collect.vue页面

```js
<template>
	<view class="page-box">
		<view class="order" v-for="(item, index) in list" :key="item.goodsId">
			<view class="top">
				<view class="left">
					<!-- <u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon> -->
					<view class="store">{{ item.goodsName }}</view>
					<!-- <u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon> -->
				</view>
				<view v-if="item.type == '0'" class="right">闲置</view>
				<view style="color: #FF7670;" v-if="item.type == '1'" class="right">求购</view>
			</view>
			<view class="item">
				<view class="left">
					<image :src="item.image.split(',')[0]" mode="aspectFill"></image>
				</view>
				<view class="content">
					<view class="title u-line-2">{{ item.goodsDesc }}</view>
					<view class="delivery-time">发布时间 {{ item.createTime }}</view>
				</view>
				<view class="right">
					<view class="price">
						￥{{ item.goodsPrice }}
					</view>
					<view class="number">x1</view>
				</view>
			</view>
			<view class="bottom">
				<view @click="toLook(item)" class="logistics btn">查看</view>
				<view @click="cancelBtn(item)" class="evaluate btn">取消收藏</view>
			</view>
		</view>
		<!-- 取消收藏 -->
		<u-popup :mask-close-able="false" border-radius="15" width="70%" height="120px" v-model="show" mode="center">
			<view style="padding: 20px 15px 20px 15px;">
				确定取消吗?
			</view>
			<view class="conBtn">
				<u-button @click="cancel" style="margin-right: 15px;" type="info">取消</u-button>
				<u-button @click="confirm" style="margin-left: 15px;" :custom-style="customStyle" type="error">确定</u-button>
			</view>
		</u-popup>
		<u-loadmore :status="status" @loadmore="loadmore" bgColor="#f2f2f2"></u-loadmore>
	</view>
</template>

<script setup>
import { onReachBottom, onReady } from '@dcloudio/uni-app';
import { reactive, ref } from 'vue';
import {getMyCollectApi,cancelCollectApi} from '../../api/goods.js'
const show = ref(false)
const list = ref([])
//列表参数
const parm = reactive({
	userId:uni.getStorageSync("userId"),
	currentPage:1,
	pageSize:10
})
//总页数
const pages = ref(0)
//获取列表数据
const getMyCollect = async()=>{
	let res = await getMyCollectApi(parm)
	if(res && res.code == 200){
		console.log(res)
		pages.value = res.data.pages;
		list.value = list.value.concat(res.data.records)
	}
}
const status = ref('loadmore')
//加载更多
const loadmore = ()=>{
	console.log('点击加载更多')
	if(parm.currentPage >= pages.value){
		status.value = "nomore";
		return;
	}
	status.value = "loading"
	parm.currentPage = ++parm.currentPage;
	getMyCollect()
}
//触底加载
onReachBottom(()=>{
	console.log('触底加载')
	if(parm.currentPage >= pages.value){
		status.value = "nomore";
		return;
	}
	status.value = "loading"
	parm.currentPage = ++parm.currentPage;
	getMyCollect()
})
//查看
const toLook = (item)=>{
	if(item.type == '0'){//跳转闲置
		uni.navigateTo({
			url:"../look_unused/look_unused?goods=" + JSON.stringify(item)
		})
	}else{//跳转求购
		uni.navigateTo({
			url:"../look_buy/look_buy?goods=" + JSON.stringify(item)
		})
	}
}
//取消收藏按钮
const collectId = ref('')
const cancelBtn = (item)=>{
	console.log(item)
	collectId.value = item.collectId
	show.value = true;
}
//确定取消
const confirm = async()=>{
	console.log(collectId.value)
	let res = await cancelCollectApi({
		collectId:collectId.value
	})
	if(res && res.code == 200){
		parm.currentPage = 1;
		list.value = []
		getMyCollect()
		show.value = false;
	}
	
}
//取消
const cancel = ()=>{
	show.value = false;
}
onReady(()=>{
	getMyCollect()
})
</script>

<style lang="scss">
.conBtn{
		display: flex;
		justify-content: center;
		align-items: center;
	}
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: flex-end;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
			margin-right: 10px;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
</style>

```













#### 第88讲 我的订单、出售订单接口开发

##### 1、GoodsMapper添加如下方法

```js
package com.itmk.web.goods.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.itmk.web.goods.entity.Goods;
import org.apache.ibatis.annotations.Param;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsMapper extends BaseMapper<Goods> {
    //查询我的订单
    IPage<Goods> getMyOrder(IPage<Goods> page, @Param("userId") Long userId);
    //查询出售订单
    IPage<Goods> getSellOrder(IPage<Goods> page, @Param("userId") Long userId);
}

```

##### 2、GoodsMapper.xml映射文件

```js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.goods.mapper.GoodsMapper">
    <select id="getMyOrder" resultType="com.itmk.web.goods.entity.Goods">
        select g.*,gr.order_id,gr.create_time as sell_time,gr.price from goods_order as gr
        left join  goods as g
        on g.goods_id = gr.goods_id
        where gr.order_user =#{userId}
    </select>
    <select id="getSellOrder" resultType="com.itmk.web.goods.entity.Goods">
        select g.*,gr.order_id,gr.create_time as sell_time,gr.price from goods_order as gr
        left join  goods as g
        on g.goods_id = gr.goods_id
        where g.user_id =#{userId}
    </select>
</mapper>
```

##### 3、Goods实体类

```js
package com.itmk.web.goods.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
@TableName("goods")
public class Goods {
     //商品id
    @TableId(type = IdType.AUTO)
    private Long goodsId;
    //发布人id
    private Long userId;
    //订单id
    @TableField(exist = false)
    private Long orderId;
    //分类id
    private Long categoryId;
    //类型 0：闲置 1：求购
    private String type;
    //商品名称
    private String goodsName;
    //商品描述
    private String goodsDesc;
    //价格
    private BigDecimal goodsPrice;
    //交易价格
    @TableField(exist = false)
    private BigDecimal price;
    //姓名
    private String userName;
    //电话
    private String phone;
    //发布/求购地址
    private String address;
    //图片
    private String image;
    //微信号
    private String wxNum;
    //状态 0：上架 1：下架
    private String status;
    //0：未出售 1：已出售
    private String sellStatus;
    //创建时间
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date createTime;
    // 0：未推荐 1：推荐首页
    private String setIndex;
    // 0：未删除 1：已删除
    private String deleteStatus;
    //收藏id
    @TableField(exist = false)
    private Long collectId;
    //交易时间
    @TableField(exist = false)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date sellTime;
}

```

##### 4、GoodsService接口添加如下方法

```js
package com.itmk.web.goods.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.itmk.web.goods.entity.Goods;
import com.itmk.web.goods.entity.MyGoodsParm;


/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsService extends IService<Goods> {
    //查询我的订单
    IPage<Goods> getMyOrder(MyGoodsParm parm);
    //查询出售订单
    IPage<Goods> getSellOrder(MyGoodsParm parm);
}

```

实现类

```js
package com.itmk.web.goods.service.impl;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.goods.entity.Goods;
import com.itmk.web.goods.entity.MyGoodsParm;
import com.itmk.web.goods.mapper.GoodsMapper;
import com.itmk.web.goods.service.GoodsService;
import org.springframework.stereotype.Service;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Service
public class GoodsServiceImpl extends ServiceImpl<GoodsMapper, Goods> implements GoodsService {
    @Override
    public IPage<Goods> getMyOrder(MyGoodsParm parm) {
        //构造分页对象
        IPage<Goods> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        return this.baseMapper.getMyOrder(page,parm.getUserId());
    }

    @Override
    public IPage<Goods> getSellOrder(MyGoodsParm parm) {
        //构造分页对象
        IPage<Goods> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        return this.baseMapper.getSellOrder(page,parm.getUserId());
    }
}

```

##### 5、GoodsController控制器

```js
package com.itmk.web.goods.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.goods.entity.*;
import com.itmk.web.goods.service.GoodsService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RestController
@RequestMapping("/api/goods")
public class GoodsController {
    @Autowired
    private GoodsService goodsService;

    //发布
    @PostMapping("/release")
    public ResultVo release(@RequestBody Goods goods){
        //设置时间
        goods.setCreateTime(new Date());
        if(goodsService.save(goods)){
            return ResultUtils.success("发布成功!");
        }
        return ResultUtils.error("发布失败!");
    }

    //列表
    @GetMapping("/list")
    public ResultVo getList(GoodsListParm parm){
        //构造分页对象
        IPage<Goods> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        //构造查询条件
        QueryWrapper<Goods> query = new QueryWrapper<>();
        query.lambda().like(StringUtils.isNotEmpty(parm.getGoodsName()),Goods::getGoodsName,parm.getGoodsName())
                .eq(Goods::getDeleteStatus,"0")
                .orderByDesc(Goods::getCreateTime);
        IPage<Goods> list = goodsService.page(page, query);
        return ResultUtils.success("查询成功",list);
    }

    //上架下架
    @PostMapping("/upanddown")
    public ResultVo upanddown(@RequestBody UpandDownParm parm){
        UpdateWrapper<Goods> query = new UpdateWrapper<>();
        query.lambda().set(Goods::getStatus,parm.getStatus())
                .eq(Goods::getGoodsId,parm.getGoodsId());
        if(goodsService.update(query)){
            return ResultUtils.success("设置成功!");
        }
        return ResultUtils.error("设置失败!");
    }

    //推荐首页
    @PostMapping("/setIndex")
    public ResultVo setIndex(@RequestBody UpandDownParm parm){
        UpdateWrapper<Goods> query = new UpdateWrapper<>();
        query.lambda().set(Goods::getSetIndex,parm.getSetIndex())
                .eq(Goods::getGoodsId,parm.getGoodsId());
        if(goodsService.update(query)){
            return ResultUtils.success("设置成功!");
        }
        return ResultUtils.error("设置失败!");
    }

    //删除
    @PostMapping("/delete")
    public ResultVo delete(@RequestBody UpandDownParm parm){
        UpdateWrapper<Goods> query = new UpdateWrapper<>();
        query.lambda().set(Goods::getDeleteStatus,"1")
                .eq(Goods::getGoodsId,parm.getGoodsId());
        if(goodsService.update(query)){
            return ResultUtils.success("删除成功!");
        }
        return ResultUtils.error("删除失败!");
    }

    //小程序首页列表查询
    @GetMapping("/getIndexList")
    public ResultVo getIndexList(WxIndexParm parm){
        //构造查询条件
        QueryWrapper<Goods> query = new QueryWrapper<>();
        query.lambda().like(StringUtils.isNotEmpty(parm.getKeywords()),Goods::getGoodsName,parm.getKeywords())
                .eq(Goods::getStatus,"0")
                .eq(Goods::getDeleteStatus,"0")
                .eq(Goods::getSetIndex,"1")
                .eq(Goods::getSellStatus,"0")
                .orderByDesc(Goods::getCreateTime);
        //构造分页对象
        IPage<Goods> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        IPage<Goods> list = goodsService.page(page, query);
        return ResultUtils.success("查询成功",list);
    }

     //小程序闲置列表查询
    @GetMapping("/getUsedList")
    public ResultVo getUsedList(WxIndexParm parm){
        //构造查询条件
        QueryWrapper<Goods> query = new QueryWrapper<>();
        query.lambda().like(StringUtils.isNotEmpty(parm.getKeywords()),Goods::getGoodsName,parm.getKeywords())
                .eq(Goods::getStatus,"0")
                .eq(Goods::getDeleteStatus,"0")
                .eq(Goods::getType,"0")
                .eq(Goods::getSellStatus,"0")
                .eq(StringUtils.isNotEmpty(parm.getCategoryId()),Goods::getCategoryId,parm.getCategoryId())
                .orderByDesc(Goods::getCreateTime);
        //构造分页对象
        IPage<Goods> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        IPage<Goods> list = goodsService.page(page, query);
        return ResultUtils.success("查询成功",list);
    }

     //小程序求购列表查询
    @GetMapping("/getBuyList")
    public ResultVo getBuyList(WxIndexParm parm){
        //构造查询条件
        QueryWrapper<Goods> query = new QueryWrapper<>();
        query.lambda().like(StringUtils.isNotEmpty(parm.getKeywords()),Goods::getGoodsName,parm.getKeywords())
                .eq(Goods::getStatus,"0")
                .eq(Goods::getDeleteStatus,"0")
                .eq(Goods::getType,"1")
                .eq(Goods::getSellStatus,"0")
                .eq(StringUtils.isNotEmpty(parm.getCategoryId()),Goods::getCategoryId,parm.getCategoryId())
                .orderByDesc(Goods::getCreateTime);
        //构造分页对象
        IPage<Goods> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        IPage<Goods> list = goodsService.page(page, query);
        return ResultUtils.success("查询成功",list);
    }

    //小程序我发布的闲置
    @GetMapping("/getMyUnusedList")
    public ResultVo getMyUnusedList(MyGoodsParm parm){
        //构造查询条件
        QueryWrapper<Goods> query = new QueryWrapper<>();
        query.lambda().eq(Goods::getUserId,parm.getUserId())
                .eq(Goods::getType,parm.getType())
                .eq(Goods::getDeleteStatus,"0");
        //构造分页对象
        IPage<Goods> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        IPage<Goods> list = goodsService.page(page, query);
        return ResultUtils.success("查询成",list);
    }

    //编辑
    @PostMapping("/edit")
    public ResultVo edit(@RequestBody Goods goods){
        if(goodsService.updateById(goods)){
            return ResultUtils.success("编辑成功！");
        }
        return ResultUtils.error("编辑失败!");
    }

    //小程序我的订单
    @GetMapping("/getMyOrder")
    public ResultVo getMyOrder(MyGoodsParm parm){
        IPage<Goods> list = goodsService.getMyOrder(parm);
        return ResultUtils.success("查询成功！",list);
    }

    //我的出售订单
    @GetMapping("/getSellOrder")
    public ResultVo getSellOrder(MyGoodsParm parm){
        IPage<Goods> list = goodsService.getSellOrder(parm);
        return ResultUtils.success("查询成功！",list);
    }

}

```



















#### 第89讲 我的订单、出售订单对接

##### 1、把我的订单和出售订单放到 GoodsOrderController

```js
package com.itmk.web.goods_order.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.goods.entity.Goods;
import com.itmk.web.goods.entity.MyGoodsParm;
import com.itmk.web.goods.service.GoodsService;
import com.itmk.web.goods_order.entity.GoodsOrder;
import com.itmk.web.goods_order.service.GoodsOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RestController
@RequestMapping("/api/goodsOrder")
public class GoodsOrderController {
    @Autowired
    private GoodsOrderService goodsOrderService;
    @Autowired
    private GoodsService goodsService;
    //交易订单
    @PostMapping("/replaceOrder")
    public ResultVo replaceOrder(@RequestBody GoodsOrder order){
        goodsOrderService.replaceOrder(order);
        return ResultUtils.success("交易成功!");
    }
    //小程序我的订单
    @GetMapping("/getMyOrder")
    public ResultVo getMyOrder(MyGoodsParm parm){
        IPage<Goods> list = goodsService.getMyOrder(parm);
        return ResultUtils.success("查询成功！",list);
    }

    //我的出售订单
    @GetMapping("/getSellOrder")
    public ResultVo getSellOrder(MyGoodsParm parm){
        IPage<Goods> list = goodsService.getSellOrder(parm);
        return ResultUtils.success("查询成功！",list);
    }
}

```

##### 2、小程序api/order.js

```js
import http from '../common/http.js'
//提交交易
export const replaceOrderApi = (parm)=>{
	return http.post('/api/goodsOrder/replaceOrder',parm)
}
//我的订单
export const getMyOrderApi = (parm)=>{
	return http.get('/api/goodsOrder/getMyOrder',parm)
}
//出售订单
export const getSellOrderApi = (parm)=>{
	return http.get('/api/goodsOrder/getSellOrder',parm)
}
```

##### 3、my_order.vue页面

```js
<template>
	<view class="page-box">
		<view class="order" v-for="(item, index) in list" :key="item.goodsId">
			<view class="top">
				<view class="left">
					<!-- <u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon> -->
					<view class="store">{{ item.goodsName }}</view>
					<!-- <u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon> -->
				</view>
				<view v-if="item.type == '0'" class="right">闲置</view>
				<view style="color: #FF7670;" v-if="item.type == '1'" class="right">求购</view>
			</view>
			<view class="item">
				<view class="left">
					<image :src="item.image.split(',')[0]" mode="aspectFill"></image>
				</view>
				<view class="content">
					<view class="title u-line-2">{{ item.goodsDesc }}</view>
					<view class="delivery-time">发布时间 {{ item.createTime }}</view>
				</view>
				<view class="right">
					<view class="price">
						￥{{ item.goodsPrice }}
					</view>
					<view class="number">x1</view>
				</view>
			</view>
			<view class="bottom">
				<view @click="toLook(item)" class="logistics btn">查看</view>
				<view @click="cancelBtn(item)" class="evaluate btn">删除订单</view>
			</view>
		</view>
		<!-- 取消收藏 -->
		<u-popup :mask-close-able="false" border-radius="15" width="70%" height="120px" v-model="show" mode="center">
			<view style="padding: 20px 15px 20px 15px;">
				确定取消吗?
			</view>
			<view class="conBtn">
				<u-button @click="cancel" style="margin-right: 15px;" type="info">取消</u-button>
				<u-button @click="confirm" style="margin-left: 15px;" :custom-style="customStyle" type="error">确定</u-button>
			</view>
		</u-popup>
		<u-loadmore :status="status" @loadmore="loadmore" bgColor="#f2f2f2"></u-loadmore>
	</view>
</template>

<script setup>
import { onReachBottom, onReady } from '@dcloudio/uni-app';
import { reactive, ref } from 'vue';
import {getMyOrderApi} from '../../api/order.js'
const show = ref(false)
const list = ref([])
//列表参数
const parm = reactive({
	userId:uni.getStorageSync("userId"),
	currentPage:1,
	pageSize:10
})
const status = ref('loadmore')
//总页数
const pages = ref(0)
//获取列表数据
const getMyCollect = async()=>{
	let res = await getMyOrderApi(parm)
	if(res && res.code == 200){
		console.log(res)
		if(res.data.records.length == 0){
			status.value = "nomore"
		}
		pages.value = res.data.pages;
		list.value = list.value.concat(res.data.records)
	}
}

//加载更多
const loadmore = ()=>{
	console.log('点击加载更多')
	if(parm.currentPage >= pages.value){
		status.value = "nomore";
		return;
	}
	status.value = "loading"
	parm.currentPage = ++parm.currentPage;
	getMyCollect()
}
//触底加载
onReachBottom(()=>{
	console.log('触底加载')
	if(parm.currentPage >= pages.value){
		status.value = "nomore";
		return;
	}
	status.value = "loading"
	parm.currentPage = ++parm.currentPage;
	getMyCollect()
})
//查看
const toLook = (item)=>{
	if(item.type == '0'){//跳转闲置
		uni.navigateTo({
			url:"../look_unused/look_unused?goods=" + JSON.stringify(item)
		})
	}else{//跳转求购
		uni.navigateTo({
			url:"../look_buy/look_buy?goods=" + JSON.stringify(item)
		})
	}
}
//取消收藏按钮
const collectId = ref('')
const cancelBtn = (item)=>{
	console.log(item)
	collectId.value = item.collectId
	show.value = true;
}
//确定取消
const confirm = async()=>{
	// console.log(collectId.value)
	// let res = await cancelCollectApi({
	// 	collectId:collectId.value
	// })
	// if(res && res.code == 200){
	// 	parm.currentPage = 1;
	// 	list.value = []
	// 	getMyCollect()
	// 	show.value = false;
	// }
	
}
//取消
const cancel = ()=>{
	show.value = false;
}
onReady(()=>{
	getMyCollect()
})
</script>

<style lang="scss">
.conBtn{
		display: flex;
		justify-content: center;
		align-items: center;
	}
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: flex-end;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
			margin-right: 10px;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
</style>

```

##### 4、sell_order.vue页面

```js
<template>
	<view class="page-box">
		<view class="order" v-for="(item, index) in list" :key="item.goodsId">
			<view class="top">
				<view class="left">
					<!-- <u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon> -->
					<view class="store">{{ item.goodsName }}</view>
					<!-- <u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon> -->
				</view>
				<view v-if="item.type == '0'" class="right">闲置</view>
				<view style="color: #FF7670;" v-if="item.type == '1'" class="right">求购</view>
			</view>
			<view class="item">
				<view class="left">
					<image :src="item.image.split(',')[0]" mode="aspectFill"></image>
				</view>
				<view class="content">
					<view class="title u-line-2">{{ item.goodsDesc }}</view>
					<view class="delivery-time">发布时间 {{ item.createTime }}</view>
				</view>
				<view class="right">
					<view class="price">
						￥{{ item.goodsPrice }}
					</view>
					<view class="number">x1</view>
				</view>
			</view>
			<view class="bottom">
				<view @click="toLook(item)" class="logistics btn">查看</view>
			</view>
		</view>
		<u-loadmore :status="status" @loadmore="loadmore" bgColor="#f2f2f2"></u-loadmore>
	</view>
</template>

<script setup>
import { onReachBottom, onReady } from '@dcloudio/uni-app';
import { reactive, ref } from 'vue';
import {getSellOrderApi} from '../../api/order.js'
const list = ref([])
//列表参数
const parm = reactive({
	userId:uni.getStorageSync("userId"),
	currentPage:1,
	pageSize:10
})
//总页数
const pages = ref(0)
//获取列表数据
const getMyCollect = async()=>{
	let res = await getSellOrderApi(parm)
	if(res && res.code == 200){
		if(res.data.records.length == 0){
			status.value = "nomore"
		}
		pages.value = res.data.pages;
		list.value = list.value.concat(res.data.records)
	}
}
const status = ref('loadmore')
//加载更多
const loadmore = ()=>{
	console.log('点击加载更多')
	if(parm.currentPage >= pages.value){
		status.value = "nomore";
		return;
	}
	status.value = "loading"
	parm.currentPage = ++parm.currentPage;
	getMyCollect()
}
//触底加载
onReachBottom(()=>{
	console.log('触底加载')
	if(parm.currentPage >= pages.value){
		status.value = "nomore";
		return;
	}
	status.value = "loading"
	parm.currentPage = ++parm.currentPage;
	getMyCollect()
})
//查看
const toLook = (item)=>{
	if(item.type == '0'){//跳转闲置
		uni.navigateTo({
			url:"../look_unused/look_unused?goods=" + JSON.stringify(item)
		})
	}else{//跳转求购
		uni.navigateTo({
			url:"../look_buy/look_buy?goods=" + JSON.stringify(item)
		})
	}
}
onReady(()=>{
	getMyCollect()
})
</script>

<style lang="scss">
.conBtn{
		display: flex;
		justify-content: center;
		align-items: center;
	}
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: flex-end;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
			margin-right: 10px;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
</style>

```















#### 第90讲 删除订单接口开发与对接

##### 1、GoodsOrderController控制器添加deleteOrder()方法

```js
//删除订单
@PostMapping("/deleteOrder")
public ResultVo deleteOrder(@RequestBody GoodsOrder parm){
    if(goodsOrderService.removeById(parm.getOrderId())){
        return ResultUtils.success("删除成功!");
    }
    return ResultUtils.error("删除失败!");
}
```

##### 2、api/order.js

```js
import http from '../common/http.js'
//提交交易
export const replaceOrderApi = (parm)=>{
	return http.post('/api/goodsOrder/replaceOrder',parm)
}
//我的订单
export const getMyOrderApi = (parm)=>{
	return http.get('/api/goodsOrder/getMyOrder',parm)
}
//出售订单
export const getSellOrderApi = (parm)=>{
	return http.get('/api/goodsOrder/getSellOrder',parm)
}
//删除
export const deleteOrderApi = (parm)=>{
	return http.post('/api/goodsOrder/deleteOrder',parm)
}
```

##### 3、my_order.vue页面

```js
<template>
	<view class="page-box">
		<view class="order" v-for="(item, index) in list" :key="item.goodsId">
			<view class="top">
				<view class="left">
					<!-- <u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon> -->
					<view class="store">{{ item.goodsName }}</view>
					<!-- <u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon> -->
				</view>
				<view v-if="item.type == '0'" class="right">闲置</view>
				<view style="color: #FF7670;" v-if="item.type == '1'" class="right">求购</view>
			</view>
			<view class="item">
				<view class="left">
					<image :src="item.image.split(',')[0]" mode="aspectFill"></image>
				</view>
				<view class="content">
					<view class="title u-line-2">{{ item.goodsDesc }}</view>
					<view class="delivery-time">发布时间 {{ item.createTime }}</view>
				</view>
				<view class="right">
					<view class="price">
						￥{{ item.goodsPrice }}
					</view>
					<view class="number">x1</view>
				</view>
			</view>
			<view class="bottom">
				<view @click="toLook(item)" class="logistics btn">查看</view>
				<view @click="cancelBtn(item)" class="evaluate btn">删除订单</view>
			</view>
		</view>
		<!-- 取消收藏 -->
		<u-popup :mask-close-able="false" border-radius="15" width="70%" height="120px" v-model="show" mode="center">
			<view style="padding: 20px 15px 20px 15px;">
				确定删除订单吗?
			</view>
			<view class="conBtn">
				<u-button @click="cancel" style="margin-right: 15px;" type="info">取消</u-button>
				<u-button @click="confirm" style="margin-left: 15px;" :custom-style="customStyle" type="error">确定</u-button>
			</view>
		</u-popup>
		<u-loadmore :status="status" @loadmore="loadmore" bgColor="#f2f2f2"></u-loadmore>
	</view>
</template>

<script setup>
import { onReachBottom, onReady } from '@dcloudio/uni-app';
import { reactive, ref } from 'vue';
import {getMyOrderApi,deleteOrderApi} from '../../api/order.js'
const show = ref(false)
const list = ref([])
//列表参数
const parm = reactive({
	userId:uni.getStorageSync("userId"),
	currentPage:1,
	pageSize:10
})
const status = ref('loadmore')
//总页数
const pages = ref(0)
//获取列表数据
const getMyCollect = async()=>{
	let res = await getMyOrderApi(parm)
	if(res && res.code == 200){
		console.log(res)
		if(res.data.records.length == 0){
			status.value = "nomore"
		}
		pages.value = res.data.pages;
		list.value = list.value.concat(res.data.records)
	}
}

//加载更多
const loadmore = ()=>{
	console.log('点击加载更多')
	if(parm.currentPage >= pages.value){
		status.value = "nomore";
		return;
	}
	status.value = "loading"
	parm.currentPage = ++parm.currentPage;
	getMyCollect()
}
//触底加载
onReachBottom(()=>{
	console.log('触底加载')
	if(parm.currentPage >= pages.value){
		status.value = "nomore";
		return;
	}
	status.value = "loading"
	parm.currentPage = ++parm.currentPage;
	getMyCollect()
})
//查看
const toLook = (item)=>{
	if(item.type == '0'){//跳转闲置
		uni.navigateTo({
			url:"../look_unused/look_unused?goods=" + JSON.stringify(item)
		})
	}else{//跳转求购
		uni.navigateTo({
			url:"../look_buy/look_buy?goods=" + JSON.stringify(item)
		})
	}
}
//取消收藏按钮
const orderId = ref('')
const cancelBtn = (item)=>{
	console.log(item)
	orderId.value = item.orderId
	show.value = true;
}
//确定删除
const confirm = async()=>{
	console.log(orderId.value)
	let res = await deleteOrderApi({
		orderId:orderId.value
	})
	if(res && res.code == 200){
		parm.currentPage = 1;
		list.value = []
		getMyCollect()
		show.value = false;
	}
}
//取消
const cancel = ()=>{
	show.value = false;
}
onReady(()=>{
	getMyCollect()
})
</script>

<style lang="scss">
.conBtn{
		display: flex;
		justify-content: center;
		align-items: center;
	}
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: flex-end;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
			margin-right: 10px;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
</style>

```





















#### 第91讲 修改密码接口开发

##### 1、新建实体类

```js
package com.itmk.web.login.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class UpadateParm {
    private Long userId;
    private String password;
    private String oldPassword;
}

```

##### 2、WxUserController控制器添加updatePassword()方法

```js
//小程序更新密码
@PostMapping("/wxupdatePassword")
public ResultVo wxupdatePassword(@RequestBody UpadateParm parm){
    //判断原密码是否正确
    QueryWrapper<WxUser> query = new QueryWrapper<>();
    query.lambda().eq(WxUser::getUserId,parm.getUserId())
            .eq(WxUser::getPassword,DigestUtils.md5DigestAsHex(parm.getOldPassword().getBytes()));
    WxUser one = wxUserService.getOne(query);
    if(one == null){
        return ResultUtils.error("原密码不正确!");
    }
    UpdateWrapper<WxUser> update = new UpdateWrapper<>();
    update.lambda().set(WxUser::getPassword,DigestUtils.md5DigestAsHex(parm.getPassword().getBytes()))
            .eq(WxUser::getUserId,parm.getUserId());
    if(wxUserService.update(update)){
        return ResultUtils.success("密码修改成功!");
    }
    return ResultUtils.error("密码修改失败！");
}
```

















#### 第92讲 修改密码页面制作与对接

##### 1、api/user.ts添加wxupdatePasswordApi()方法

```js
import http from '../common/http.js'
//注册
export const registerApi = (parm)=>{
	return http.post('/api/wxUser/register',parm)
}
//登录
export const loginApi = (parm)=>{
	return http.post('/api/wxUser/login',parm)
}
//修改密码
export const wxupdatePasswordApi = (parm)=>{
	return http.post('/api/wxUser/wxupdatePassword',parm)
}
```

##### 2、update_password.vue页面

```js
<template>
	<view class="u-wrap u-p-l-20 u-p-r-20">
		<u-form label-width="auto" :model="addModel" ref="form1">
			<u-form-item label="原密码" prop="oldPassword">
				<u-input v-model="addModel.oldPassword" />
			</u-form-item>
			<u-form-item label="新密码" prop="password">
				<u-input v-model="addModel.password" />
			</u-form-item>
			<u-form-item label="确定密码" prop="confirm">
				<u-input v-model="addModel.confirm" />
			</u-form-item>
		</u-form>
		<u-button @click='commit' :custom-style="customStyle">确定修改</u-button>
	</view>
</template>

<script setup>
	import {
		onReady
	} from '@dcloudio/uni-app';
	import {
		ref,
		reactive
	} from 'vue';
	import {
		wxupdatePasswordApi
	} from '../../api/user.js'
	const form1 = ref('')
	const addModel = reactive({
		userId: uni.getStorageSync("userId"),
		password: '',
		oldPassword: '',
		confirm: ''
	})
	const customStyle = reactive({
		background: '#FF7670',
		color: '#FFF',
		marginTop: '50px',
		width: '100%'
	})
	const rules = reactive({
		oldPassword: [{
			required: true,
			message: '请输入原密码',
			trigger: ['change'],
		}],
		password: [{
			required: true,
			message: '请输入新密码',
			trigger: ['change'],
		}],
		confirm: [{
			required: true,
			message: '请输入确定密码',
			trigger: ['change'],
		}]
	})
	//表单提交
	const commit = () => {
		form1.value.validate(async (valid) => {
			if (addModel.confirm != addModel.password) {
				uni.showToast({
					title: '新密码和确定密码不一致!',
					icon: 'none',
					mask: true,
					duration: 3000
				})
				return;
			}
			if (valid) {
				console.log('验证通过')
				let res = await wxupdatePasswordApi(addModel)
				if (res && res.code == 200) {
					//清空缓存
					uni.clearStorageSync();
					//重新登录：关闭所有的页面
					uni.reLaunch({
						url: '../login/login'
					});
				}
			}
		})
	}
	onReady(() => {
		form1.value.setRules(rules);
	})
</script>

<style>

</style>

```



















#### 第93讲 个人中心页面制作

##### 1、新建user_info.vue页面

```js
<template>
	<view class="u-wrap u-p-l-20 u-p-r-20">
		<u-form label-width="auto" :model="addModel" ref="form1">
			<u-form-item label="昵称" prop="nickName">
				<u-input v-model="addModel.nickName" />
			</u-form-item>
			<u-form-item label="姓名" prop="name">
				<u-input v-model="addModel.name" />
			</u-form-item>
			<u-form-item label="电话" prop="phone">
				<u-input v-model="addModel.phone" />
			</u-form-item>
			<u-form-item prop="picture" label="图片:"></u-form-item>
			<u-upload max-count="1" ref="imgRef" :file-list="fileList"  @on-remove="onRemove" @on-change="onChange" :action="action"></u-upload>
		</u-form>
		<u-button @click='commit' :custom-style="customStyle">确定修改</u-button>
	</view>
</template>

<script setup>
	import {
		onReady
	} from '@dcloudio/uni-app';
	import {
		ref,
		reactive
	} from 'vue';
	import http from '../../common/http.js'
	const imgRef = ref()
	import {
		wxupdatePasswordApi
	} from '../../api/user.js'
	const form1 = ref('')
	const fileList = ref([])
	const addModel = reactive({
		userId: uni.getStorageSync("userId"),
		nickName: '',
		name: '',
		phone: '',
		picture:''
	})
	const customStyle = reactive({
		background: '#FF7670',
		color: '#FFF',
		marginTop: '50px',
		width: '100%'
	})
	const rules = reactive({
		nickName: [{
			required: true,
			message: '请输入昵称',
			trigger: ['change'],
		}],
		name: [{
			required: true,
			message: '请输入姓名',
			trigger: ['change'],
		}],
		phone: [{
			required: true,
			message: '请输入电话',
			trigger: ['change'],
		}],
		picture: [{
			required: true,
			message: '请上传头像',
			trigger: ['change'],
		}]
	})
	//图片上传路径
	const action = ref(http.baseUrl + "/api/upload/uploadImage")
	//存储图片路径
	const imgUrl = ref([])
	//图片上传触发
	const onChange = (res, index, lists, name) => {
		// console.log(res.data)
		let result = JSON.parse(res.data)
		//把返回的图片放到imgUrl
		imgUrl.value.push(http.baseUrl + result.data)
		//把数组里面的图片转为逗号分隔的字符串
		let url = ''
		for (let k = 0; k < imgUrl.value.length; k++) {
			url = url + imgUrl.value[k] + ','
		}
		// console.log(url)
		//去掉末尾的逗号
		addModel.picture = url.substring(0, url.lastIndexOf(','))
		console.log(addModel)
	}
	//删除图片
	const onRemove = (index) => {
		//删除图片
		imgUrl.value.splice(index, 1)
		let url = ''
		for (let k = 0; k < imgUrl.value.length; k++) {
			url = url + imgUrl.value[k] + ','
		}
		// console.log(url)
		//去掉末尾的逗号
		addModel.picture = url.substring(0, url.lastIndexOf(','))
		console.log(addModel)
	}
	//表单提交
	const commit = () => {
		form1.value.validate(async (valid) => {
			if (valid) {
				console.log('验证通过')
				
			}
		})
	}
	onReady(() => {
		form1.value.setRules(rules);
	})
</script>

<style>

</style>

```















#### 第94讲 修改个人信息接口开发

##### 1、WxUserController控制器添加editInfo()和getInfo()方法

```js
//小程序修改信息
@PostMapping("/editInfo")
public ResultVo editInfo(@RequestBody WxUser wxUser){
    if(wxUserService.updateById(wxUser)){
        return ResultUtils.success("修改成功!");
    }
    return ResultUtils.error("修改失败!");
}

//小程序查询个人信息
@GetMapping("/getInfo")
public ResultVo getInfo(Long userId){
    WxUser user = wxUserService.getById(userId);
    return ResultUtils.success("查询成功!",user);
}
```













#### 第95讲 修改个人信息接口对接

##### 1、api/user.js添加editInfoApi()和getInfoApi()方法

```js
import http from '../common/http.js'
//注册
export const registerApi = (parm)=>{
	return http.post('/api/wxUser/register',parm)
}
//登录
export const loginApi = (parm)=>{
	return http.post('/api/wxUser/login',parm)
}
//修改密码
export const wxupdatePasswordApi = (parm)=>{
	return http.post('/api/wxUser/wxupdatePassword',parm)
}
//修改个人信息
export const editInfoApi = (parm)=>{
	return http.post('/api/wxUser/editInfo',parm)
}
//查询个人信息
export const getInfoApi = (parm)=>{
	return http.get('/api/wxUser/getInfo',parm)
}
```

##### 2、mine.vue页面

```js
<template>
	<view>
		<view @click="toUserInfo" class="u-flex user-box u-p-30">
			<view class="u-m-r-10">
				<u-avatar v-if="picture" :src="picture" size="100"></u-avatar>
				<u-avatar  v-else src="/static/user.jpg" size="100"></u-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">{{nickName}}</view>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item @click="toMyUnused" icon="star" title="我的闲置"></u-cell-item>
				<u-cell-item @click="toMyBy" icon="photo" title="我的求购"></u-cell-item>
				<u-cell-item @click="toCollect" icon="heart" title="我的收藏"></u-cell-item>
				<u-cell-item @click="toOrder" icon="red-packet" title="购买订单"></u-cell-item>
				<u-cell-item @click="toSellOrder" icon="order" title="出售订单"></u-cell-item>
				<u-cell-item @click="toUpdate" icon="edit-pen" title="修改密码"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item @click="loginOut" icon="setting" title="退出账号"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script setup>
	// import logo form '../../static/'
import { ref } from 'vue';
import {onShow}from '@dcloudio/uni-app'
import {getInfoApi} from '../../api/user.js'
	const pic = ref('https://uviewui.com/common/logo.png')
	const show = ref(true)
	//我的闲置
	const toMyUnused = ()=>{
		uni.navigateTo({
			url:"../my_unused/my_unused"
		})
	}
	//我的求购
	const toMyBy = ()=>{
		uni.navigateTo({
			url:"../my_buy/my_buy"
		})
	}
	//我的收藏
	const toCollect = ()=>{
		uni.navigateTo({
			url:"../my_collect/my_collect"
		})
	}
	//购买订单
	const toOrder = ()=>{
		uni.navigateTo({
			url:"../my_order/my_order"
		})
	}
	//出售订单
	const toSellOrder = ()=>{
		uni.navigateTo({
			url:"../sell_order/sell_order"
		})
	}
	//修改密码
	const toUpdate = ()=>{
		uni.navigateTo({
			url:"../update_password/update_password"
		})
	}
	//退出登录
	const loginOut = ()=>{
		uni.clearStorageSync()
		uni.reLaunch({
			url:"../login/login"
		})
	}
	
	//昵称
	const nickName = ref('大幕孤烟直')
	//头像
	const picture = ref('')
	//用户信息
	let userInfo = null;
	//获取个人信息
	const getInfo = async()=>{
		let res = await getInfoApi({
			userId:uni.getStorageSync("userId")
		})
		if(res && res.code == 200){
			console.log(res)
			nickName.value = res.data.nickName
			picture.value = res.data.picture
			userInfo = res.data;
		}
	}
	//修改个人信息
	const toUserInfo = ()=>{
		uni.navigateTo({
			url:"../user_info/user_info?userInfo="+JSON.stringify(userInfo)
		})
	}
	onShow(()=>{
		getInfo()
	})
</script>

<style lang="scss">
page{
	background-color: #ededed;
}

.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
</style>

```

##### 3、user_info.vue页面

```js
<template>
	<view class="u-wrap u-p-l-20 u-p-r-20">
		<u-form label-width="auto" :model="addModel" ref="form1">
			<u-form-item label="昵称" prop="nickName">
				<u-input v-model="addModel.nickName" />
			</u-form-item>
			<u-form-item label="姓名" prop="name">
				<u-input v-model="addModel.name" />
			</u-form-item>
			<u-form-item label="电话" prop="phone">
				<u-input v-model="addModel.phone" />
			</u-form-item>
			<u-form-item prop="picture" label="图片:"></u-form-item>
			<u-upload max-count="1" ref="imgRef" :file-list="fileList"  @on-remove="onRemove" @on-change="onChange" :action="action"></u-upload>
		</u-form>
		<u-button @click='commit' :custom-style="customStyle">确定修改</u-button>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app';
	import {
		ref,
		reactive
	} from 'vue';
	import http from '../../common/http.js'
	const imgRef = ref()
	import {
		editInfoApi
	} from '../../api/user.js'
	const form1 = ref('')
	const fileList = ref([])
	const addModel = reactive({
		userId: uni.getStorageSync("userId"),
		nickName: '',
		name: '',
		phone: '',
		picture:''
	})
	const customStyle = reactive({
		background: '#FF7670',
		color: '#FFF',
		marginTop: '50px',
		width: '100%'
	})
	const rules = reactive({
		nickName: [{
			required: true,
			message: '请输入昵称',
			trigger: ['change'],
		}],
		name: [{
			required: true,
			message: '请输入姓名',
			trigger: ['change'],
		}],
		phone: [{
			required: true,
			message: '请输入电话',
			trigger: ['change'],
		}],
		picture: [{
			required: true,
			message: '请上传头像',
			trigger: ['change'],
		}]
	})
	//图片上传路径
	const action = ref(http.baseUrl + "/api/upload/uploadImage")
	//存储图片路径
	const imgUrl = ref([])
	//图片上传触发
	const onChange = (res, index, lists, name) => {
		// console.log(res.data)
		let result = JSON.parse(res.data)
		//把返回的图片放到imgUrl
		imgUrl.value.push(http.baseUrl + result.data)
		//把数组里面的图片转为逗号分隔的字符串
		let url = ''
		for (let k = 0; k < imgUrl.value.length; k++) {
			url = url + imgUrl.value[k] + ','
		}
		// console.log(url)
		//去掉末尾的逗号
		addModel.picture = url.substring(0, url.lastIndexOf(','))
		console.log(addModel)
	}
	//删除图片
	const onRemove = (index) => {
		//删除图片
		imgUrl.value.splice(index, 1)
		let url = ''
		for (let k = 0; k < imgUrl.value.length; k++) {
			url = url + imgUrl.value[k] + ','
		}
		// console.log(url)
		//去掉末尾的逗号
		addModel.picture = url.substring(0, url.lastIndexOf(','))
		console.log(addModel)
	}
	//表单提交
	const commit = () => {
		form1.value.validate(async (valid) => {
			if (valid) {
				console.log('验证通过')
				let res = await editInfoApi(addModel)
				if(res && res.code == 200){
					//关闭当前页面
					uni.navigateBack({
						delta:1
					})
				}
			}
		})
	}
	onReady(() => {
		form1.value.setRules(rules);
		//设置图片回显
		imgRef.value.lists = fileList.value
	})
	onLoad((options)=>{
		console.log(options)
		const userInfo = JSON.parse(options.userInfo)
		addModel.name = userInfo.name;
		addModel.nickName = userInfo.nickName
		addModel.phone = userInfo.phone
		addModel.picture = userInfo.picture
		//头像回显
		if (userInfo.picture) {
			let imgs = userInfo.picture.split(",");
			for(let g=0;g<imgs.length;g++){
				imgUrl.value.push(imgs[g]);
				let obj = {url:''}
				obj.url = imgs[g]
				fileList.value.push(obj)
			}
		}
	})
</script>

<style>

</style>

```















#### 第96讲 忘记密码页面制作

##### 1、common下新建mcaptcha.js

```js
// mcaptcha.js
 
export class Mcaptcha {
  constructor(options) {
    this.options = options;
    this.fontSize = options.height * 3 / 6;
    this.init();
    this.refresh();
  }
  init() {
    this.ctx = uni.createCanvasContext(this.options.el);
    this.ctx.setTextBaseline("middle");
    this.ctx.setFillStyle(this.randomColor(180, 240));
  }
  refresh() {
    var code = '';
    var txtArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',0,1,2,3,4,5,6,7,8,9]
    for(var i=0;i<4;i++){
      code += txtArr[this.randomNum(0, txtArr.length)];
    }
    this.options.createCodeImg = code;
    let arr = (code + '').split('');
    if (arr.length === 0) {
      arr = ['e', 'r', 'r','o','r'];
    };
    let offsetLeft = this.options.width * 0.6 / (arr.length - 1);
    let marginLeft = this.options.width * 0.2;
    arr.forEach((item, index) => {
      this.ctx.setFillStyle(this.randomColor(0, 180));
      let size = this.randomNum(24, this.fontSize);
      this.ctx.setFontSize(size);
      let dis = offsetLeft * index + marginLeft - size * 0.3;
      let deg = this.randomNum(-30, 30);
      this.ctx.translate(dis, this.options.height*0.5);
      this.ctx.rotate(deg * Math.PI / 180);
      this.ctx.fillText(item, 0, 0);
      this.ctx.rotate(-deg * Math.PI / 180);
      this.ctx.translate(-dis, -this.options.height * 0.5);
    })
    for (var i = 0; i < 4; i++) {
      this.ctx.strokeStyle = this.randomColor(40, 180);
      this.ctx.beginPath();
      this.ctx.moveTo(this.randomNum(0, this.options.width), this.randomNum(0, this.options.height));
      this.ctx.lineTo(this.randomNum(0, this.options.width), this.randomNum(0, this.options.height));
      this.ctx.stroke();
    }
    for (var i = 0; i < this.options.width / 4; i++) {
      this.ctx.fillStyle = this.randomColor(0, 255);
      this.ctx.beginPath();
      this.ctx.arc(this.randomNum(0, this.options.width), this.randomNum(0, this.options.height), 1, 0, 2 * Math.PI);
      this.ctx.fill();
    }
    this.ctx.draw();
  }
  validate(code){
    var code = code.toLowerCase();
    var v_code = this.options.createCodeImg.toLowerCase();
    console.log(code)
    console.log(v_code.substring(v_code.length - 4))
    if (code == v_code.substring(v_code.length - 4)) {
      return true;
    } else {
      return false;
    }
  }
  randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  randomColor(min, max) {
    let r = this.randomNum(min, max);
    let g = this.randomNum(min, max);
    let b = this.randomNum(min, max);
    return "rgb(" + r + "," + g + "," + b + ")";
  }
}
```

##### 2、新建forget_password.vue页面

```js
<template>
	<view class="u-wrap u-p-l-20 u-p-r-20">
		<u-form label-width="auto" :model="addModel" ref="form1">
			<u-form-item label="登录账户" prop="username">
				<u-input v-model="addModel.username" />
			</u-form-item>
			<u-form-item label="电话号码" prop="phone">
				<u-input v-model="addModel.phone" />
			</u-form-item>
			<u-form-item label="新密码" prop="password">
				<u-input v-model="addModel.password" />
			</u-form-item>
			<u-form-item label="确定密码" prop="confirm">
				<u-input v-model="addModel.confirm" />
			</u-form-item>
			<u-form-item label="验证码" prop="code">
				<u-input v-model="addModel.code" />
				<template v-slot:right>
					<view class="code-img-wrapper" @click="updateImageCode">
						<canvas style="width:220rpx;height:86rpx;" canvas-id="canvas"></canvas>
					</view>
				</template>
			</u-form-item>
		</u-form>
		<u-button @click='commit' :custom-style="customStyle">确定修改</u-button>
	</view>
</template>

<script setup>
	import {
		onReady
	} from '@dcloudio/uni-app';
	import {
		Mcaptcha
	} from '../../common/mcaptcha.js'
	import {
		ref,
		reactive
	} from 'vue';
	const form1 = ref('')
	const addModel = reactive({
		userId: uni.getStorageSync("userId"),
		password: '',
		username: '',
		confirm: '',
		phone: '',
		code: ''
	})
	//验证码定义
	let mcaptcha = null;
	const customStyle = reactive({
		background: '#FF7670',
		color: '#FFF',
		marginTop: '50px',
		width: '100%'
	})
	const rules = reactive({
		username: [{
			required: true,
			message: '请输入登录账户',
			trigger: ['change'],
		}],
		phone: [{
			required: true,
			message: '请输入电话号码',
			trigger: ['change'],
		}],
		password: [{
			required: true,
			message: '请输入新密码',
			trigger: ['change'],
		}],
		confirm: [{
			required: true,
			message: '请输入确定密码',
			trigger: ['change'],
		}],
		code: [{
				required: true,
				message: '请输入验证码',
				trigger: ['change'],
			},
			{
				validator: (rule, value, callback) => {
					let validate = mcaptcha.validate(addModel.code)
					return validate;
				},
				message: '验证码不正确！'
			}
		],
	})
	//表单提交
	const commit = () => {
		form1.value.validate(async (valid) => {
			console.log('验证通过')
		})
	}
	//点击验证码事件
	const updateImageCode = () => {
		mcaptcha.refresh()
	}
	onReady(() => {
		//初始化验证码
		mcaptcha = new Mcaptcha({
			el: 'canvas',
			width: 80,
			height: 35,
			createCodeImg: ""
		});
		form1.value.setRules(rules);
	})
</script>

<style>

</style>

```















#### 第97讲 忘记密码接口开发与对接

##### 1、新建实体类

```js
package com.itmk.web.wx_user.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class ForgetParm {
    private String phone;
    private String username;
    private String password;
}

```

##### 2、WxUserController控制器添加forget()方法

```js
//忘记密码
@PostMapping("/forget")
public ResultVo forget(@RequestBody ForgetParm parm){
    //查询用户是否存在
    QueryWrapper<WxUser> query = new QueryWrapper<>();
    query.lambda().eq(WxUser::getUsername,parm.getUsername())
            .eq(WxUser::getPhone,parm.getPhone());
    WxUser one = wxUserService.getOne(query);
    if(one == null){
        return ResultUtils.error("账户或电话号码不正确!");
    }
    //更新条件
    UpdateWrapper<WxUser> update = new UpdateWrapper<>();
    update.lambda().set(WxUser::getPassword,DigestUtils.md5DigestAsHex(parm.getPassword().getBytes()))
            .eq(WxUser::getUsername,parm.getUsername())
            .eq(WxUser::getPhone,parm.getPhone());
    if(wxUserService.update(update)){
        return ResultUtils.success("重置成功!");
    }
    return ResultUtils.error("修改失败!");
}
```

##### 3、api/user.js添加forgetApi()方法

```js
import http from '../common/http.js'
//注册
export const registerApi = (parm)=>{
	return http.post('/api/wxUser/register',parm)
}
//登录
export const loginApi = (parm)=>{
	return http.post('/api/wxUser/login',parm)
}
//修改密码
export const wxupdatePasswordApi = (parm)=>{
	return http.post('/api/wxUser/wxupdatePassword',parm)
}
//修改个人信息
export const editInfoApi = (parm)=>{
	return http.post('/api/wxUser/editInfo',parm)
}
//查询个人信息
export const getInfoApi = (parm)=>{
	return http.get('/api/wxUser/getInfo',parm)
}
//忘记密码
export const forgetApi = (parm)=>{
	return http.post('/api/wxUser/forget',parm)
}
```

##### 4、forget_password.vue页面

```js
<template>
	<view class="u-wrap u-p-l-20 u-p-r-20">
		<u-form label-width="auto" :model="addModel" ref="form1">
			<u-form-item label="登录账户" prop="username">
				<u-input v-model="addModel.username" />
			</u-form-item>
			<u-form-item label="电话号码" prop="phone">
				<u-input v-model="addModel.phone" />
			</u-form-item>
			<u-form-item label="新密码" prop="password">
				<u-input type="password" v-model="addModel.password" />
			</u-form-item>
			<u-form-item label="确定密码" prop="confirm">
				<u-input type="password" v-model="addModel.confirm" />
			</u-form-item>
			<u-form-item label="验证码" prop="code">
				<u-input v-model="addModel.code" />
				<template v-slot:right>
					<view class="code-img-wrapper" @click="updateImageCode">
						<canvas style="width:220rpx;height:86rpx;" canvas-id="canvas"></canvas>
					</view>
				</template>
			</u-form-item>
		</u-form>
		<u-button @click='commit' :custom-style="customStyle">确定修改</u-button>
	</view>
</template>

<script setup>
	import {
		onReady
	} from '@dcloudio/uni-app';
	import {
		Mcaptcha
	} from '../../common/mcaptcha.js'
	import {
		forgetApi
	} from '../../api/user.js'
	import {
		ref,
		reactive
	} from 'vue';
	const form1 = ref('')
	const addModel = reactive({
		password: '',
		username: '',
		confirm: '',
		phone: '',
		code: ''
	})
	//验证码定义
	let mcaptcha = null;
	const customStyle = reactive({
		background: '#FF7670',
		color: '#FFF',
		marginTop: '50px',
		width: '100%'
	})
	const rules = reactive({
		username: [{
			required: true,
			message: '请输入登录账户',
			trigger: ['change'],
		}],
		phone: [{
			required: true,
			message: '请输入电话号码',
			trigger: ['change'],
		}],
		password: [{
			required: true,
			message: '请输入新密码',
			trigger: ['change'],
		}],
		confirm: [{
				required: true,
				message: '请输入确定密码',
				trigger: ['change'],
			},
			{
				validator: (rule, value, callback) => {
					let validate = (value == addModel.password)
					return validate;
				},
				message: '新密码和确定密码不一致！！'
			}
		],
		code: [{
				required: true,
				message: '请输入验证码',
				trigger: ['change'],
			},
			{
				validator: (rule, value, callback) => {
					let validate = mcaptcha.validate(addModel.code)
					return validate;
				},
				message: '验证码不正确！'
			}
		],
	})
	//表单提交
	const commit = () => {
		form1.value.validate(async (valid) => {
			console.log('验证通过')
			if (valid) {
				let res = await forgetApi(addModel)
				if (res && res.code == 200) {
					uni.navigateBack({
						delta: 1
					})
				}
			}
		})
	}
	//点击验证码事件
	const updateImageCode = () => {
		mcaptcha.refresh()
	}
	onReady(() => {
		//初始化验证码
		mcaptcha = new Mcaptcha({
			el: 'canvas',
			width: 80,
			height: 35,
			createCodeImg: ""
		});
		form1.value.setRules(rules);
	})
</script>

<style>

</style>

```















#### 第98讲 小程序首页轮播图接口改进

##### 1、SysBanner实体类添加goods字段

```js
package com.itmk.web.sys_banner.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.itmk.web.goods.entity.Goods;
import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
@TableName("sys_banner")
public class SysBanner {
    @TableId(type = IdType.AUTO)
    private Long banId;
    private Long goodsId;
    private String title;
    private String images;
    private String status;
    private Integer orderNum;
    @TableField(exist = false)
    private Goods goods;
}

```

##### 2、SysBannerController控制器getIndexBanner()方法修改为如下

```js
//查询小程序首页轮播图数据
@GetMapping("/getIndexBanner")
public ResultVo getIndexBanner(){
    QueryWrapper<SysBanner> query = new QueryWrapper<>();
    query.lambda().eq(SysBanner::getStatus,"0")
            .orderByAsc(SysBanner::getOrderNum);
    List<SysBanner> list = sysBannerService.list(query);
    if(list.size() > 0){
        for (int i=0;i<list.size();i++){
            Long goodsId = list.get(i).getGoodsId();
            Goods goods = goodsService.getById(goodsId);
            list.get(i).setGoods(goods);
        }
    }
    return ResultUtils.success("查询成功",list);
}
```

##### 3、小程序index.vue页面

```js
<template>
	<view class="u-wrap">
		<!-- 轮播图 -->
		<swiper class="swiper-container" circular :indicatorColor="indicatorColor" :indicator-dots="indicatorDots"
			:autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item @click="toDetail(item.goods)" v-for="(item,index) in swipperList" :key='index'>
				<image class="imgs" :src="item.images.split(',')[0]"></image>
			</swiper-item>
		</swiper>
		<!-- 搜索框 -->
		<view class="tab-strickt">
			<u-search v-model="keywords" @change="searchBtn" bg-color="#FFF" margin="8px" style="flex-grow: 1;" :show-action="true" action-text="搜索" :animation="true"></u-search>
		</view>
		<view class="">
			<u-waterfall v-model="flowList" ref="uWaterfall1">
				<template v-slot:left="{leftList}">
					<view class="demo-warter-left" v-for="(item, index) in leftList" :key="index">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<u-lazy-load @click="toDetail(item)" threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.goodsName}}
						</view>
						<view class="demo-price">
							{{item.goodsPrice}}元
						</view>
						<view class="demo-tag">
							<view v-if="item.type == '0'" class="demo-tag-owner">
								闲置
							</view>
							<view style="margin-left: 0;" v-else class="demo-tag-text">
								求购
							</view>
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter-right" v-for="(item, index) in rightList" :key="index">
						<u-lazy-load @click="toDetail(item)" threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load>
						<view class="demo-title">
							{{item.goodsName}}
						</view>
						<view class="demo-price">
							{{item.goodsPrice}}元
						</view>
						<view class="demo-tag">
							<view v-if="item.type == '0'" class="demo-tag-owner">
								闲置
							</view>
							<view style="margin-left: 0;" v-else class="demo-tag-text">
								求购
							</view>
						</view>
					</view>
				</template>
			</u-waterfall>
			<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="loadMore"></u-loadmore>
		</view>
	</view>
</template>

<script setup>
	import { onReady,onReachBottom } from '@dcloudio/uni-app';
import {
		ref
	} from 'vue';
	import {getIndexBannerApi,getIndexListApi} from '../../api/index.js'
	const indicatorDots = ref(true)
	const indicatorColor = ref("#FFF")
	const autoplay = ref(true)
	const interval = ref(2000)
	const duration = ref(500)
	const uWaterfall1 = ref()
	//轮播图数据
	const swipperList = ref([])
	//瀑布流
	const flowList = ref([])
	//轮播图数据
	const getBannerList = async()=>{
		let res = await getIndexBannerApi()
		if(res && res.code == 200){
			console.log(res)
			swipperList.value = res.data;
		}
	}
	//热推数据
	const loadStatus = ref('loadmore')
	const currentPage = ref(1)
	const pageSize = ref(10)
	const keywords = ref('')
	const pages = ref(0)
	const getIndexList = async()=>{
		let res = await getIndexListApi({
			currentPage:currentPage.value,
			pageSize:pageSize.value,
			keywords:keywords.value
		})
		if(res && res.code == 200){
			console.log(res)
			flowList.value = flowList.value.concat(res.data.records)
			pages.value = res.data.pages;
		}
	}
	//关键字搜索
	const searchBtn = ()=>{
		currentPage.value = 1;
		//清空瀑布流的数据
		uWaterfall1.value.clear()
		//获取数据
		getIndexList()
	}
	//加载更多
	const loadMore = ()=>{
		console.log('加载更多')
		if(currentPage.value >= pages.value){
			loadStatus.value = 'nomore'
			return;
		}
		loadStatus.value = 'loading'
		//页数加1
		currentPage.value = ++currentPage.value;
		//获取数据
		getIndexList()
	}
	//触底加载
	onReachBottom(()=>{
		console.log('触底加载')
		if(currentPage.value >= pages.value){
			loadStatus.value = 'nomore'
			return;
		}
		loadStatus.value = 'loading'
		//页数加1
		currentPage.value = ++currentPage.value;
		//获取数据
		getIndexList()
	})
	//跳转详情页
	const toDetail = (item)=>{
		if(item.type == '0'){
			uni.navigateTo({
				url:"../unused_detail/unused_detail?goods=" + JSON.stringify(item)
			})
		}else{
			uni.navigateTo({
				url:"../buy_detail/buy_detail?goods=" + JSON.stringify(item)
			})
		}
	}
	onReady(()=>{
		getBannerList()
		getIndexList()
	})
</script>

<style lang='scss'>
	.swiper-container {
		height: 180px;

		.item {
			height: 180px;
		}

		.imgs {
			height: 180px;
			width: 100%;
		}
	}

	.demo-warter-left {
		border-radius: 8px;
		margin: 5px 0px 5px 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.demo-warter-right {
		border-radius: 8px;
		margin: 5px 5px 5px 0px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}

	.tab-strickt {
		position: sticky;
		z-index: 99;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		background-color: #f2f2f2;
	}
</style>

```













#### 第99讲 闲置订单接口开发

##### 1、新建实体类

```js
package com.itmk.web.goods_order.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class OrderParm {
    private Long currentPage;
    private Long pageSize;
}

```

```js
package com.itmk.web.goods_order.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class OrderVo {
    private Long orderId;
    private String goodsName;
    private String image;
    private String nickName;
    private BigDecimal goodsPrice;
    private BigDecimal price;
    //创建时间
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date createTime;
}

```

##### 2、GoodsOrderMapper接口添加getList()方法

```js
package com.itmk.web.goods_order.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.itmk.web.goods_order.entity.GoodsOrder;
import com.itmk.web.goods_order.entity.OrderVo;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsOrderMapper extends BaseMapper<GoodsOrder> {
    IPage<OrderVo> getList(IPage<OrderVo> page);
}

```

##### 3、GoodsOrderMapper.xml

```js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.goods_order.mapper.GoodsOrderMapper">
    <select id="getList" resultType="com.itmk.web.goods_order.entity.OrderVo">
        select go.order_id,g.goods_name,g.goods_price,g.image,u.nick_name,go.price,go.create_time from goods_order as go
        inner join goods as g  on g.goods_id = go.goods_id
        inner join wx_user as u on u.user_id = go.order_user
        order by go.create_time desc
    </select>
</mapper>
```

##### 4、GoodsOrderService接口添加getList()方法

```js
package com.itmk.web.goods_order.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.itmk.web.goods_order.entity.GoodsOrder;
import com.itmk.web.goods_order.entity.OrderParm;
import com.itmk.web.goods_order.entity.OrderVo;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsOrderService extends IService<GoodsOrder> {
    void replaceOrder(GoodsOrder goodsOrder);
    //闲置订单列表
    IPage<OrderVo> getList(OrderParm parm);
}

```

实现类

```js
package com.itmk.web.goods_order.service.impl;

import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.goods.entity.Goods;
import com.itmk.web.goods.service.GoodsService;
import com.itmk.web.goods_order.entity.GoodsOrder;
import com.itmk.web.goods_order.entity.OrderParm;
import com.itmk.web.goods_order.entity.OrderVo;
import com.itmk.web.goods_order.mapper.GoodsOrderMapper;
import com.itmk.web.goods_order.service.GoodsOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Service
public class GoodsOrderServiceImpl extends ServiceImpl<GoodsOrderMapper, GoodsOrder> implements GoodsOrderService {

    @Autowired
    private GoodsService goodsService;

    @Override
    @Transactional
    public void replaceOrder(GoodsOrder goodsOrder) {
        //1、插入订单数据
        goodsOrder.setCreateTime(new Date());
        int insert = this.baseMapper.insert(goodsOrder);
        //2、更新商品状态
        if(insert > 0){
            UpdateWrapper<Goods> query = new UpdateWrapper<>();
            query.lambda().set(Goods::getSellStatus,"1")
                    .set(Goods::getStatus,"1")
                    .eq(Goods::getGoodsId,goodsOrder.getGoodsId());
            goodsService.update(query);
        }
    }

    @Override
    public IPage<OrderVo> getList(OrderParm parm) {
        //构造分页对象
        IPage<OrderVo> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        return this.baseMapper.getList(page);
    }
}

```

##### 5、GoodsOrderController控制器添加getList()方法

```js
//订单列表
@GetMapping("/getList")
public ResultVo getList(OrderParm parm){
    IPage<OrderVo> list = goodsOrderService.getList(parm);
    return ResultUtils.success("查询成功",list);
}
```















#### 第100讲 闲置订单列表对接

##### 1、OrderParm添加goodsName字段

```js
package com.itmk.web.goods_order.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class OrderParm {
    private Long currentPage;
    private Long pageSize;
    private String goodsName;
}

```

##### 2、GoodsOrderMapper.xml添加关键字查询

```js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.goods_order.mapper.GoodsOrderMapper">
    <select id="getList" resultType="com.itmk.web.goods_order.entity.OrderVo">
        select go.order_id,g.goods_name,g.goods_price,g.image,u.nick_name,go.price,go.create_time from goods_order as go
        inner join goods as g  on g.goods_id = go.goods_id
        inner join wx_user as u on u.user_id = go.order_user
        where 1=1
        <if test="goodsName != null and goodsName != ''">
           and  g.goods_name like concat('%',#{goodsName},'%')
        </if>
        order by go.create_time desc
    </select>
</mapper>
```

##### 3、api下新建order目录，添加OrderModel.ts和index.ts

```js
//定义列表查询的参数
export type ListParm = {
    currentPage:number,
    pageSize:number,
    goodsName:string,
    total?:number
}
```

```js
import http from "@/http";
import { ListParm } from "./OrderModel";
//订单列表
export const getListApi = (parm:ListParm)=>{
    return http.get("/api/goodsOrder/getList",parm)
}
```

##### 4、UnusedOrder.vue页面

```js
<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="parm"  :inline="true" size="default">
        <el-form-item>
            <el-input v-model="parm.goodsName" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="searchBtn" icon="Search">搜索</el-button>
            <el-button @click="resetBtn" type="danger" plain icon="Close">重置</el-button>
        </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :height="tableHeight" :data="tableList" border stripe>
        <el-table-column label="商品图片" prop="image">
            <template #default="scope">
                <el-image v-if="scope.row.image" style="width: 100px; height: 60px" :src="scope.row.image.split(',')[0]" />
            </template>
        </el-table-column>
        <el-table-column label="商品名称" prop="goodsName"></el-table-column>
        <el-table-column label="期望价格" prop="goodsPrice"></el-table-column>
        <el-table-column label="交易价格" prop="price"></el-table-column>
        <el-table-column label="购买人" prop="nickName"></el-table-column>
        <el-table-column label="交易时间" prop="createTime"></el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page.sync="parm.currentPage"
        :page-sizes="[10,20, 40, 80, 100]"
        :page-size="parm.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="parm.total" background>
    </el-pagination>
    
  </el-main>
  
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from 'vue';
import {getListApi} from '@/api/order/index'
//表格高度
const tableHeight = ref(0)
//参数
const parm = reactive({
    currentPage:1,
    pageSize:10,
    goodsName:'',
    total:0
})
//表格数据
const tableList = ref([])
//获取列表
const getList = async()=>{
    let res = await getListApi(parm)
    if(res && res.code == 200){
        console.log(res)
        //设置表格数据
        tableList.value = res.data.records;
        parm.total = res.data.total;
    }
}
//页容量改变时触发
const sizeChange = (size:number)=>{
    parm.pageSize = size;
    getList()
}
//页数改变时触发
const currentChange = (page:number)=>{
    parm.currentPage = page;
    getList();
}
//搜索
const searchBtn = ()=>{
    getList()
}
//重置
const resetBtn = ()=>{
    parm.currentPage = 1;
    parm.goodsName = ""
    getList()
}
onMounted(()=>{
    nextTick(()=>{
        tableHeight.value = window.innerHeight - 200
    })
    getList()
})
</script>

<style scoped>

</style>
```











#### 第101讲 投诉管理接口开发

##### 1、在投诉表添加status字段

##### 2、投诉实体类添加status字段

```js
package com.itmk.web.goods_report.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
@TableName("goods_report")
public class GoodsReport {
    @TableId(type = IdType.AUTO)
    private Long reportId;
    private Long goodsId;
    private Long reportUser;
    private String reason;
    private String status;
    private Date reportTime;
}

```

##### 3、新建列表参数

```js
package com.itmk.web.goods_report.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class ReportParm {
    private Long currentPage;
    private Long pageSize;
}

```

##### 4、定义返回值类型

```js
package com.itmk.web.goods_report.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class ReportVo {
    private Long reportId;
    private String goodsName;
    private String image;
    private String nickName;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date reportTime;
}

```

##### 5、定义mapper接口方法

```js
package com.itmk.web.goods_report.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.itmk.web.goods_report.entity.GoodsReport;
import com.itmk.web.goods_report.entity.ReportVo;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsReportMapper extends BaseMapper<GoodsReport> {
    IPage<ReportVo> getList(IPage<ReportVo> page);
}

```

GoodsReportMapper.xml

```js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.goods_report.mapper.GoodsReportMapper">
    <select id="getList" resultType="com.itmk.web.goods_report.entity.ReportVo">
        select gr.report_id,g.goods_name,g.image,u.nick_name,gr.report_time from goods_report as gr
        inner join goods as g  on gr.goods_id = g.goods_id
        inner join wx_user as u  on gr.report_user = u.user_id
        order by gr.report_time desc
    </select>
</mapper>
```

##### 6、定义service接口方法

```js
package com.itmk.web.goods_report.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.itmk.web.goods_report.entity.GoodsReport;
import com.itmk.web.goods_report.entity.ReportParm;
import com.itmk.web.goods_report.entity.ReportVo;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
public interface GoodsReportService extends IService<GoodsReport> {
    IPage<ReportVo> getList(ReportParm parm);
}

```

实现类

```js
package com.itmk.web.goods_report.service.impl;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.goods_report.entity.GoodsReport;
import com.itmk.web.goods_report.entity.ReportParm;
import com.itmk.web.goods_report.entity.ReportVo;
import com.itmk.web.goods_report.mapper.GoodsReportMapper;
import com.itmk.web.goods_report.service.GoodsReportService;
import org.springframework.stereotype.Service;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Service
public class GoodsReportServiceImpl extends ServiceImpl<GoodsReportMapper, GoodsReport> implements GoodsReportService {
    @Override
    public IPage<ReportVo> getList(ReportParm parm) {
        //构造分页对象
        IPage<ReportVo> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
        return this.baseMapper.getList(page);
    }
}

```

##### 7、GoodsReportController控制器添加getList()方法和doReport()方法

```js
//查询列表
@GetMapping("/getList")
public ResultVo getList(ReportParm parm){
    IPage<ReportVo> list = goodsReportService.getList(parm);
    return ResultUtils.success("查询成功",list);
}

//处理举报内容
@PostMapping("/doReport")
public ResultVo doReport(@RequestBody GoodsReport report){
    UpdateWrapper<GoodsReport> update = new UpdateWrapper<>();
    update.lambda().set(GoodsReport::getStatus,"1")
            .eq(GoodsReport::getReportId,report.getReportId());
    if(goodsReportService.update(update)){
        return ResultUtils.success("处理成功!");
    }
    return ResultUtils.error("处理失败!");
}
```





#### 第102讲 投诉管理列表对接

##### 1、菜单管理里面添加菜单数据

##### 2、路由里面添加录用数据

```js
{
    path: "/report",
    component: () => import('@/views/report/Index.vue'),
    name: "report",
    meta: {
      title: "投诉管理",
      icon: "UserFilled",
      roles: ["sys:report"],
    }
  }
```

##### 3、views里面创建Index.vue页面

##### 4、退出重新登录系统

##### 5、在api下新建report目录,并创建index.ts和ReportModel.ts

```js
import http from "@/http";
import { ListParm } from "./ReportModel";
//投诉列表
export const getListApi = (parm:ListParm)=>{
    return http.get("/api/report/getList",parm)
}
```

```js
//定义列表查询的参数
export type ListParm = {
    currentPage:number,
    pageSize:number,
    total?:number
}
```

##### 6、页面制作

```js
<template>
    <el-table :height="tableHeight" :data="tableList" border stripe>
        <el-table-column prop="image" label="商品图片">
        <template #default="scope">
          <el-image
            v-if="scope.row.image"
            style="width: 100px; height: 60px"
            :src="scope.row.image.split(',')[0]"
          />
        </template>
      </el-table-column>
      <el-table-column prop="goodsName" label="商品名称"></el-table-column>
      <el-table-column prop="nickName" label="投诉人"></el-table-column>
      <el-table-column prop="reportTime" label="投诉时间"></el-table-column>
      <el-table-column  label="操作" align="center" width="150">
        <template #default="scope">
            <el-button icon="Edit" type="success" size="default" @click="doBtn(scope.row.reportId)">处理</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page.sync="parm.currentPage"
        :page-sizes="[10,20, 40, 80, 100]"
        :page-size="parm.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="parm.total" background>
    </el-pagination>
    
</template>

<script setup lang="ts">
import { getListApi } from '@/api/report';
import { nextTick, onMounted, reactive, ref } from 'vue';
//列表参数
const parm = reactive({
    currentPage:1,
    pageSize:10,
    total:0
})
//定义表格数据
const tableList = ref([])
//获取列表
const getList = async()=>{
    let res = await getListApi(parm)
    if(res && res.code == 200){
        console.log(res)
        tableList.value = res.data.records
        parm.total = res.data.total;
    }
}
//处理
const doBtn = (reportId:number)=>{
    console.log(reportId)
}
//页容量改变时触发
const sizeChange = (size:number)=>{
    parm.pageSize = size;
    getList()
}
//页数改变时触发
const currentChange = (page:number)=>{
    parm.currentPage = page;
    getList()
}
//表格高度
const tableHeight = ref(0)
onMounted(()=>{
    nextTick(()=>{
        tableHeight.value = window.innerHeight -120
    })
    getList()
})
</script>

<style scoped>

</style>
```

















#### 第103讲 投诉处理对接

##### 1、后端添加reason和status字段返回

```js
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.itmk.web.goods_report.mapper.GoodsReportMapper">
    <select id="getList" resultType="com.itmk.web.goods_report.entity.ReportVo">
        select gr.report_id,gr.reason,gr.status,g.goods_name,g.image,u.nick_name,gr.report_time from goods_report as gr
        inner join goods as g  on gr.goods_id = g.goods_id
        inner join wx_user as u  on gr.report_user = u.user_id
        order by gr.report_time desc
    </select>
</mapper>
```

```js
package com.itmk.web.goods_report.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class ReportVo {
    private Long reportId;
    private String reason;
    private String goodsName;
    private String image;
    private String status;
    private String nickName;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date reportTime;
}

```

##### 2、api/report/index.ts添加doReportApi()方法

```js
import http from "@/http";
import { ListParm } from "./ReportModel";
//投诉列表
export const getListApi = (parm:ListParm)=>{
    return http.get("/api/report/getList",parm)
}
//投诉处理
export const doReportApi = (reportId:string)=>{
    return http.post("/api/report/doReport",{reportId:reportId})
}
```

##### 3、index.vue页面

```js
<template>
    <el-table :height="tableHeight" :data="tableList" border stripe>
        <el-table-column prop="image" label="商品图片">
        <template #default="scope">
          <el-image
            v-if="scope.row.image"
            style="width: 100px; height: 60px"
            :src="scope.row.image.split(',')[0]"
          />
        </template>
      </el-table-column>
      <el-table-column prop="goodsName" label="商品名称"></el-table-column>
      <el-table-column prop="reason" label="投诉原因"></el-table-column>
      <el-table-column prop="nickName" label="投诉人"></el-table-column>
      <el-table-column prop="reportTime" label="投诉时间"></el-table-column>
      <el-table-column  label="处理状态" width="100">
        <template #default="scope">
            <el-tag v-if="scope.row.status == '0'" type="danger" size="normal"  effect="dark"  @close="">未处理</el-tag>
            <el-tag v-else type="success" size="normal"  effect="dark"  @close="">已处理</el-tag>
        </template>
      </el-table-column>
      <el-table-column  label="操作" align="center" width="150">
        <template #default="scope">
            <el-button icon="Edit" type="success" size="default" @click="doBtn(scope.row.reportId)">处理</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page.sync="parm.currentPage"
        :page-sizes="[10,20, 40, 80, 100]"
        :page-size="parm.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="parm.total" background>
    </el-pagination>
    
</template>

<script setup lang="ts">
import { getListApi,doReportApi } from '@/api/report';
import useInstance from '@/hooks/useInstance';
import { nextTick, onMounted, reactive, ref } from 'vue';
//获取全局属性
const {global} = useInstance()
//列表参数
const parm = reactive({
    currentPage:1,
    pageSize:10,
    total:0
})
//定义表格数据
const tableList = ref([])
//获取列表
const getList = async()=>{
    let res = await getListApi(parm)
    if(res && res.code == 200){
        console.log(res)
        tableList.value = res.data.records
        parm.total = res.data.total;
    }
}
//处理
const doBtn = async(reportId:string)=>{
    console.log(reportId)
    const confirm = await global.$myconfirm('确定处理投诉吗?')
    if(confirm){
        let res = await doReportApi(reportId)
        if(res && res.code == 200){
            getList()
        }
    }
}
//页容量改变时触发
const sizeChange = (size:number)=>{
    parm.pageSize = size;
    getList()
}
//页数改变时触发
const currentChange = (page:number)=>{
    parm.currentPage = page;
    getList()
}
//表格高度
const tableHeight = ref(0)
onMounted(()=>{
    nextTick(()=>{
        tableHeight.value = window.innerHeight -120
    })
    getList()
})
</script>

<style scoped>

</style>
```













#### 第104讲 自定义指令实现按钮权限

##### 1、src下新建directives目录，然后新建permission.ts

```js
//自定义按钮权限指令
import { Directive } from 'vue'
import { userStore } from '@/store/user/index';
export const permission: Directive = {
    mounted(el, binding) {
        const store = userStore()
        //value按钮上的权限
        const { value } = binding;
        //获取用户所有的权限
        const permissions = store.codeList;
        console.log('所有的权限')
        // console.log(permissions)
        //判断传递进来的按钮权限，是否存在
        if (value && value instanceof Array && value.length > 0) {
            const permissionRoles = value;
            //判断传递进来的按钮权限字段，是否存在当前用户的permissions
            const hasPermission = permissions.some((role) => {
                return permissionRoles.includes(role)
            })
            if (!hasPermission) { //没有权限时，影藏
                el.style.display = 'none'
            }
        } else {
            throw new Error('need roles! Like v-permission="[\'add\',\'edit\']"')
        }
    }
}
```

##### 2、main.ts中引入

```js
//引入按钮权限
import { permission } from './directives/permission'

app.directive('permission',permission)
```



##### 3、页面使用

```js
v-permission="['sys:role:add']"
```

















#### 第105讲 首页静态页面制作

##### 1、dashboard.vue

```js
<template>
  <el-main :style="{ height: mianHeight + 'px' }">
    <!-- 数据统计 -->
    <el-row
      :gutter="20"
      style="margin-bottom: 30px"
    >
      <el-col :span="6">
        <div class="show-header" style="background: rgb(237, 64, 20)">
          <div class="show-num">0</div>
          <div class="bottom-text">待处理投诉</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="show-header" style="background: rgb(45, 183, 245)">
          <div class="show-num">0</div>
          <div class="bottom-text">会员总数</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="show-header">
          <div class="show-num">0</div>
          <div class="bottom-text">闲置总数</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="show-header" style="background: rgb(255, 153, 0)">
          <div class="show-num">0</div>
          <div class="bottom-text">求购总数</div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="color: #000000; font-weight: 600; margin-bottom: 10px"
              >最近投诉</span
            >
            <el-divider></el-divider>
          </div>
          <div class="text item">
            <span style="font-weight: 600; font-size: 14px">华为Mate60</span>
            <span style="margin-left: 30px; font-size: 14px">假冒伪劣产品</span>
            <span style="margin-left: 30px; font-size: 14px">张三</span>
            <span style="margin-left: 30px; font-size: 14px">2023-08-23</span>
            <el-divider></el-divider>
          </div>
          <div class="text item">
            <span style="font-weight: 600; font-size: 14px">华为Mate60</span>
            <span style="margin-left: 30px; font-size: 14px">假冒伪劣产品</span>
            <span style="margin-left: 30px; font-size: 14px">张三</span>
            <span style="margin-left: 30px; font-size: 14px">2023-08-23</span>
            <el-divider></el-divider>
          </div>
          <div class="text item">
            <span style="font-weight: 600; font-size: 14px">华为Mate60</span>
            <span style="margin-left: 30px; font-size: 14px">假冒伪劣产品</span>
            <span style="margin-left: 30px; font-size: 14px">张三</span>
            <span style="margin-left: 30px; font-size: 14px">2023-08-23</span>
            <el-divider></el-divider>
          </div>
          <div class="text item">
            <span style="font-weight: 600; font-size: 14px">华为Mate60</span>
            <span style="margin-left: 30px; font-size: 14px">假冒伪劣产品</span>
            <span style="margin-left: 30px; font-size: 14px">张三</span>
            <span style="margin-left: 30px; font-size: 14px">2023-08-23</span>
            <el-divider></el-divider>
          </div>
          <div class="text item">
            <span style="font-weight: 600; font-size: 14px">华为Mate60</span>
            <span style="margin-left: 30px; font-size: 14px">假冒伪劣产品</span>
            <span style="margin-left: 30px; font-size: 14px">张三</span>
            <span style="margin-left: 30px; font-size: 14px">2023-08-23</span>
            <el-divider></el-divider>
          </div>
          <div class="text item">
            <span style="font-weight: 600; font-size: 14px">华为Mate60</span>
            <span style="margin-left: 30px; font-size: 14px">假冒伪劣产品</span>
            <span style="margin-left: 30px; font-size: 14px">张三</span>
            <span style="margin-left: 30px; font-size: 14px">2023-08-23</span>
            <el-divider></el-divider>
          </div>
          <div class="text item">
            <span style="font-weight: 600; font-size: 14px">华为Mate60</span>
            <span style="margin-left: 30px; font-size: 14px">假冒伪劣产品</span>
            <span style="margin-left: 30px; font-size: 14px">张三</span>
            <span style="margin-left: 30px; font-size: 14px">2023-08-23</span>
            <el-divider></el-divider>
          </div>
          <div class="text item">
            <span style="font-weight: 600; font-size: 14px">华为Mate60</span>
            <span style="margin-left: 30px; font-size: 14px">假冒伪劣产品</span>
            <span style="margin-left: 30px; font-size: 14px">张三</span>
            <span style="margin-left: 30px; font-size: 14px">2023-08-23</span>
            <el-divider></el-divider>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="color: #000000; font-weight: 600; margin-bottom: 10px"
              >日历</span
            >
            <el-divider></el-divider>
          </div>
          <el-calendar v-model="value" />
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script setup lang="ts">
import { onMounted, nextTick, ref } from "vue";

const mianHeight = ref(0);
const value = ref(new Date());


onMounted(() => {
  nextTick(() => {
    mianHeight.value = window.innerHeight;
  });
});
</script>

<style lang="scss" scoped>
.bottom-text {
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  height: 25px;
  line-height: 25px;
  text-align: center;
  position: absolute;
  font-weight: 600;
}
.show-header {
  background: #00c0ef;
  color: #fff;
  height: 80px;
  border-radius: 5px;
  position: relative;
}
.show-num {
  font-size: 38px;
  font-weight: 600;
  padding: 5px;
}
</style>

```

















#### 第106讲 首页接口开发与对接

##### 1、新建实体类

```js
package com.itmk.web.home.entity;

import lombok.Data;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class TotalVo {
    private int doTotal;
    private int userTotal;
    private int unusedTotal;
    private int buyTotal;
}

```

##### 2、新建HomeController控制器

```js
package com.itmk.web.home.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.goods.entity.Goods;
import com.itmk.web.goods.service.GoodsService;
import com.itmk.web.goods_report.entity.GoodsReport;
import com.itmk.web.goods_report.service.GoodsReportService;
import com.itmk.web.home.entity.TotalVo;
import com.itmk.web.wx_user.service.WxUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@RequestMapping("/api/home")
@RestController
public class HomeController {
    @Autowired
    private GoodsReportService goodsReportService;
    @Autowired
    private WxUserService wxUserService;
    @Autowired
    private GoodsService goodsService;

    @GetMapping("/getTotal")
    public ResultVo getTotal() {
        TotalVo vo = new TotalVo();
        //查询待处理数量
        QueryWrapper<GoodsReport> query = new QueryWrapper<>();
        query.lambda().eq(GoodsReport::getStatus, "0");
        int doTotal = goodsReportService.count(query);
        vo.setDoTotal(doTotal);
        //会员总数
        int userCount = wxUserService.count();
        vo.setUserTotal(userCount);
        //闲置总数
        QueryWrapper<Goods> uquery = new QueryWrapper<>();
        uquery.lambda().eq(Goods::getImage, "0");
        int uncount = goodsService.count(uquery);
        vo.setUnusedTotal(uncount);
        //求购总数
        QueryWrapper<Goods> buyquery = new QueryWrapper<>();
        uquery.lambda().eq(Goods::getImage, "1");
        int buycount = goodsService.count(buyquery);
        vo.setBuyTotal(buycount);
        return ResultUtils.success("查询成功", vo);
    }

    //查询投诉列表
    @GetMapping("/getDoReport")
    public ResultVo getDoReport() {
        QueryWrapper<GoodsReport> query = new QueryWrapper<>();
        query.lambda().eq(GoodsReport::getStatus, "0")
                .orderByDesc(GoodsReport::getReportTime)
                .last(" limit 8");
        List<GoodsReport> list = goodsReportService.list(query);
        if(list.size() >0){
            for (int i=0;i<list.size();i++){
                Goods goods = goodsService.getById(list.get(i).getGoodsId());
                list.get(i).setGoodsName(goods.getGoodsName());
            }
        }
        return ResultUtils.success("查询成功", list);
    }
}

```

##### 3、api下新建home.ts

```js
import http from "@/http";

//总数
export const getTotalApi = ()=>{
    return http.get("/api/home/getTotal")
}
//最近投诉
export const getDoReportApi = ()=>{
    return http.get("/api/home/getDoReport")
}
```

##### 4、dashboard.vue页面

```js
<template>
  <el-main :style="{ height: mianHeight + 'px' }">
    <!-- 数据统计 -->
    <el-row
      :gutter="20"
      style="margin-bottom: 30px"
    >
      <el-col :span="6">
        <div class="show-header" style="background: rgb(237, 64, 20)">
          <div class="show-num">{{ total.doTotal }}</div>
          <div class="bottom-text">待处理投诉</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="show-header" style="background: rgb(45, 183, 245)">
          <div class="show-num">{{ total.userTotal }}</div>
          <div class="bottom-text">会员总数</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="show-header">
          <div class="show-num">{{ total.unusedTotal }}</div>
          <div class="bottom-text">闲置总数</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="show-header" style="background: rgb(255, 153, 0)">
          <div class="show-num">{{ total.buyTotal }}</div>
          <div class="bottom-text">求购总数</div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="color: #000000; font-weight: 600; margin-bottom: 10px"
              >最近投诉</span
            >
            <el-divider></el-divider>
          </div>
          <div v-for="item in list" :key="item.reportId" class="text item">
            <span style="font-weight: 600; font-size: 14px">{{ item.goodsName }}</span>
            <span style="margin-left: 30px; font-size: 14px">{{ item.reason }}</span>
            <span style="margin-left: 30px; font-size: 14px">{{ item.reportUser }}</span>
            <span style="margin-left: 30px; font-size: 14px">{{ item.reportTime }}</span>
            <el-divider></el-divider>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="color: #000000; font-weight: 600; margin-bottom: 10px"
              >日历</span
            >
            <el-divider></el-divider>
          </div>
          <el-calendar v-model="value" />
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script setup lang="ts">
import { onMounted, nextTick, ref, reactive } from "vue";
import {getDoReportApi,getTotalApi} from '@/api/home/index'
const mianHeight = ref(0);
const value = ref(new Date());
//获取总数
const total = reactive({
  doTotal:0,
  buyTotal:0,
  unusedTotal:0,
  userTotal:0
})
const getTotal = async()=>{
  let res = await getTotalApi()
  if(res && res.code == 200){
    console.log(res)
    Object.assign(total,res.data)
  }
}
interface GoodsReport{
  goodsId:number,
  goodsName:string,
  reason:string,
  reportId:number,
  reportTime:string,
  reportUser:number,
  status:string,
}
//获取投诉
const list = ref<GoodsReport[]>([])
const getDoReport = async()=>{
  let res = await getDoReportApi()
  if(res && res.code == 200){
    console.log(res)
    list.value = res.data
  }
}

onMounted(() => {
  nextTick(() => {
    mianHeight.value = window.innerHeight;
  });
  getTotal()
  getDoReport()
});
</script>

<style lang="scss" scoped>
.bottom-text {
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  height: 25px;
  line-height: 25px;
  text-align: center;
  position: absolute;
  font-weight: 600;
}
.show-header {
  background: #00c0ef;
  color: #fff;
  height: 80px;
  border-radius: 5px;
  position: relative;
}
.show-num {
  font-size: 38px;
  font-weight: 600;
  padding: 5px;
}
</style>

```















#### 第107讲 全局异常处理

##### 1、新建BusinessExceptionEnum

```js
package com.itmk.exception;


public enum  BusinessExceptionEnum {
    SERVER_ERROR(500, "后端接口报错！")
    ;

    private Integer code;
    private String message;

    BusinessExceptionEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public Integer getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
```

##### 2、新建BusinessException

```js
package com.itmk.exception;

/**
 * @Author java实战基地
 * @Version 2383404558
 */

public class BusinessException extends RuntimeException {
    private Integer code;

    private String message;

    public BusinessException(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
```

##### 3、新建GlobalExceptionHandler

```js
package com.itmk.exception;


import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class GlobalExceptionHandler {
     /**
     * 自定义业务异常拦截
     * BusinessException
     */
    @ExceptionHandler(BusinessException.class)
    @ResponseBody
    public ResultVo bussinessexception(BusinessException e) {

        return ResultUtils.error(e.getMessage(),e.getCode(),e.getMessage());
    }

    /**
     * 未知的运行时异常拦截
     */
    @ExceptionHandler(RuntimeException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ResponseBody
    public ResultVo notFount(RuntimeException e) {
        return ResultUtils.error(e.getMessage(),BusinessExceptionEnum.SERVER_ERROR.getCode(),
                BusinessExceptionEnum.SERVER_ERROR.getMessage());
    }
}
```













#### 第108讲 项目添加token

##### 1、什么是token

​	Token是服务端生成的一串字符串，以作客户端进行请求的一个令牌，当第一次登录后，服务器生成一个Token便将此Token返回给客户端，以后客户端只需带上这个Token前来请求数据即可，无需再次带上用户名和密码。

##### 2、token认证流程图

![](D:\项目实战\24\springboot+vue3校园二手交易平台小程序\资料\image\token验证流程图.png)

##### 3、项目添加依赖

```
<jwt.version>3.10.3</jwt.version>
```

```js
<dependency>
   <groupId>com.auth0</groupId>
   <artifactId>java-jwt</artifactId>
   <version>${jwt.version}</version>
</dependency>
```

```
<dependency>
    <groupId>com.auth0</groupId>
    <artifactId>java-jwt</artifactId>
</dependency>
```



##### 4、jwt工具类讲解

###### 4.1、jwt配置文件

```js
#jwt配置
jwt:
  #颁发者
  issuer: itmk
  #秘钥
  secret: com.itmk
  #30分钟过期
  expiration: 30
```



###### 4.2、JwtUtils工具

```js
package com.itmk.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTCreator;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.AlgorithmMismatchException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.SignatureVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.Calendar;
import java.util.Date;
import java.util.Map;

/**
 * @Author java实战基地
 * @Version 3501754007
 */
@Component
@Data
@ConfigurationProperties(prefix = "jwt")
public class JwtUtils {
    //颁发者
    private String issuer;
    //密钥
    private String secret;
    // 过期时间 分钟
    private int expiration;

    /**
     * @param map 自定义参数
     */
    public String generateToken(Map<String, String> map) {
        //设置令牌的过期时间
        Calendar instance = Calendar.getInstance();
        //设置失效时间
        instance.add(Calendar.MINUTE, expiration);
        //创建JWT builder
        JWTCreator.Builder builder = JWT.create();
        //payload
        map.forEach((k, v) -> {
            builder.withClaim(k, v);
        });
        String token = builder.withIssuer(issuer).withIssuedAt(new Date()).withExpiresAt(instance.getTime()) //指定令牌过期时间
                .sign(Algorithm.HMAC256(secret));
        return token;
    }

    /**
     * 验证令牌是否合法
     *
     * @param token
     */
    public boolean verify(String token) {
        try {
            JWT.require(Algorithm.HMAC256(secret)).build().verify(token);
        } catch (JWTVerificationException e) {
            return false;
        }
        return true;
    }

    /**
     * 解析token
     *
     * @param token
     * @return
     */
    public DecodedJWT jwtDecode(String token) {
        try {
            return JWT.require(Algorithm.HMAC256(secret)).build().verify(token);
        } catch (SignatureVerificationException e) {
            throw new RuntimeException("token签名错误!");
        } catch (AlgorithmMismatchException e) {
            throw new RuntimeException("token算法不匹配!");
        } catch (TokenExpiredException e) {
            throw new RuntimeException("token过期!");
        } catch (Exception e) {
            throw new RuntimeException("token解析失败!");
        }
    }
}

```

##### 5、Spring Boot Configuration Annotation Processor not configured解决方法

```js
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
</dependency>
```

##### 6、登录接口改进

###### 6.1、LoginVo添加token字段

```js
package com.itmk.web.sys_user.entity;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author java实战基地
 * @Version 2383404558
 */
@Data
public class LoginVo {
    private Long userId;
    private String nickName;
    private String token;
    private List<MenuVo> menuList = new ArrayList<>();
    private List<String> codeList = new ArrayList<>();
}
```

###### 6.2、login方法

```js
//登录
@PostMapping("/login")
public ResultVo login(@RequestBody LoginParm parm, HttpServletRequest request) {
    //获取sesson里面的code验证码
    HttpSession session = request.getSession();
    String code = (String) session.getAttribute("code");
    //获取前端传递过来的验证码
    String codeParm = parm.getCode();
    if (StringUtils.isEmpty(code)) {
        return ResultUtils.error("验证码过期!");
    }
    //对比验证码
    if (!codeParm.equals(code)) {
        return ResultUtils.error("验证码错误!");
    }
    //验证用户信息
    QueryWrapper<SysUser> query = new QueryWrapper<>();
    query.lambda().eq(SysUser::getUsername, parm.getUsername())
            .eq(SysUser::getPassword, DigestUtils.md5DigestAsHex(parm.getPassword().getBytes()));
    SysUser user = sysUserService.getOne(query);
    if (user == null) {
        return ResultUtils.error("用户名或者密码错误!");
    }
    if (user.getStatus().equals("1")) {
        return ResultUtils.error("账户被停用，请联系管理员!");
    }
    //返回登录信息
    LoginVo vo = new LoginVo();
    vo.setUserId(user.getUserId());
    vo.setNickName(user.getNickName());
    //返回用户的菜单和按钮
    List<SysMenu> menuList = null;
    //是超级管理员
    if (StringUtils.isNotEmpty(user.getIsAdmin()) && "1".equals(user.getIsAdmin())) {
        menuList = sysMenuService.list();
    } else {
        menuList = sysMenuService.getMenuByUserId(user.getUserId());
    }
    //获取权限字段
    List<String> codeList = Optional.ofNullable(menuList).orElse(new ArrayList<>())
            .stream()
            .map(item -> item.getCode()).collect(Collectors.toList());
    vo.setCodeList(codeList);
    //获取菜单
    List<MenuVo> menuVoList = Optional.ofNullable(menuList).orElse(new ArrayList<>())
            .stream()
            .filter(item -> item.getType().equals("1"))
            .map(item -> new MenuVo(item.getMenuId(), item.getTitle(), item.getPath(), item.getIcon())).collect(Collectors.toList());
    vo.setMenuList(menuVoList);
    //生成token
    Map<String,String> map = new HashMap<>();
    map.put("userId",Long.toString(user.getUserId()));
    String token = jwtUtils.generateToken(map);
    vo.setToken(token);
    return ResultUtils.success("登录成功", vo);
}
```

##### 7、store/user/index.ts添加token存储

```js
import { defineStore } from "pinia";
//创建store
//defineStore第一个参数：唯一的，不能重复 
export const userStore = defineStore('userStore',{
    state:()=>{
        return{
            userId:'',
            nickName:"",
            menuList:[],
            codeList:[],
            token:''
        }
    },
    //获取值
    getters:{
        getUserId(state){
            return state.userId
        },
        getMenuList(state){
            return state.menuList
        },
        getCodeList(state){
            return state.codeList
        },
        getTokne(state){
            return state.token
        }
    }, 
    //改变state的值
    actions:{
        setUserId(userId:string){
            this.userId = userId;
        },
        setMenuList(menuList:any){
            this.menuList = menuList;
        },
        setCodeList(codeList:any){
            this.codeList = codeList;
        },
        setToken(token:string){
            this.token = token;
        }
    },
    persist: {
        enabled: true,
        strategies: [
            { storage: sessionStorage, paths: ['userId','nickName','menuList','codeList','token'] },
        ]
    }
})
```

##### 8、登录设置token

```js
store.setToken(res.data.token)
```

##### 9、axios请求头添加token























#### 第109讲 token验证讲解

##### 1、什么是[拦截器](https://so.csdn.net/so/search?q=拦截器&spm=1001.2101.3001.7020)：

1. **什么是拦截器**：在AOP（Aspect-Oriented Programming）中用于在某个方法或字段被访问之前，进行拦截然后在之前或之后加入某些操作。拦截是AOP的一种实现策略
2. **为什么需要拦截器**：在做身份认证或者是进行日志的记录时，我们需要通过拦截器达到我们的目的。最常用的登录拦截、或是权限校验、或是防重复提交总之可以去做很多的事情

##### 2、新建Auth注解

```js
package com.itmk.annotation;

import java.lang.annotation.*;

@Target(ElementType.METHOD)
@Documented
@Retention(RetentionPolicy.RUNTIME)
public @interface Auth {
}
```

##### 3、新建拦截器

```js
package com.itmk.annotation;

import com.itmk.exception.BusinessException;
import com.itmk.jwt.JwtUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class AuthInterceptor implements HandlerInterceptor {
    @Autowired
    private JwtUtils jwtUtils;
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Auth annotation;
        if(handler instanceof HandlerMethod){
            annotation = ((HandlerMethod) handler).getMethodAnnotation(Auth.class);
        }else{
            return true;
        }
        if(annotation == null){
            return true;
        }
        String token = request.getHeader("token");
        if(StringUtils.isEmpty(token)){
            token = request.getParameter("token");
        }
        if(StringUtils.isEmpty(token)){
            throw new BusinessException(600,"token不能为空!");
        }
        Boolean expired = jwtUtils.verify(token);
        if(expired){
            throw new BusinessException(600,"token验证失败!");
        }
        return true;
    }
}

```

##### 4、WebMvcConfig配置类加入拦截器

```js
package com.itmk.config.web;


import com.itmk.annotation.AuthInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    @Autowired
    private AuthInterceptor authInterceptor;
    /**
     * 跨域配置
     * @param registry
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns("*")
                .allowedMethods("*")
                .allowedHeaders("*")
                .maxAge(3600)
                .allowCredentials(true);
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(authInterceptor).addPathPatterns("/api/**");
    }
}
```

##### 5、在需要token验证的方法上加上@Auth注解

















#### 第110讲 token过期的处理

##### 1、修改jwtutils里面的jwtDecode()方法

```js
public DecodedJWT jwtDecode(String token) {
    try {
        return JWT.require(Algorithm.HMAC256(secret)).build().verify(token);
    } catch (SignatureVerificationException e) {
        throw new BusinessException(600,"token签名错误!");
    } catch (AlgorithmMismatchException e) {
        throw new BusinessException(600,"token算法不匹配!");
    } catch (TokenExpiredException e) {
        throw new BusinessException(600,"token过期!");
    } catch (Exception e) {
        throw new BusinessException(600,"token解析失败!");
    }
}
```

##### 2、AuthInterceptor拦截器里面修改token验证方法

```js
//验证token
jwtUtils.jwtDecode(token);
```

##### 3、修改http.ts

```js
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { ElMessage } from 'element-plus';
import { userStore } from "@/store/user";
//axios请求配置
const config = {
    // baseURL: 'http://localhost:8089',
    // baseURL: '/api',
    baseURL: process.env.BASE_API,
    timeout: 10000,
    withCredentials: true //解决sesson不一致的问题
}
//定义返回值类型
export interface Result<T = any> {
    code: number;
    msg: string;
    data: T;
}
//定义http的类
class Http {
    //axios实例
    private instance: AxiosInstance;
    //构造函数里面初始化
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        //定义拦截器
        this.interceptors()
    }
    //拦截器
    private interceptors() {
        //axios发送请求之前的处理
        this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            const store = userStore()
            //在请求头部携带token
            // let token = store.getToken;
            let token = store.getToken;
            if (token) {
                config.headers!['token'] = token
                //把token放到headers里面
                // (config.headers as AxiosRequestHeaders).token = token
            }
            // console.log(config)
            return config;
        }, (error: any) => {
            error.data = {}
            error.data.msg = '服务器异常，请联系管理员!'
            return error;
        })
        //axios请求返回之后的处理
        //请求返回之后的处理
        this.instance.interceptors.response.use((res: AxiosResponse) => {
            // console.log(res.data)
            if(res.data.code == 600){//token过期
                //清空缓存
                sessionStorage.clear()
                //跳转登录
                window.location.href = "/login"
            }else if (res.data.code == 200) {
                return res.data
            } else {
                ElMessage.error(res.data.msg || '服务器出错!')
                return Promise.reject(res.data.msg || '服务器出错')
            }
        }, (error) => {
            console.log('进入错误')
            error.data = {};
            if (error && error.response) {
                switch (error.response.status) {
                    case 400:
                        error.data.msg = '错误请求';
                        ElMessage.error(error.data.msg)
                        break
                    case 401:
                        error.data.msg = '未授权，请重新登录';
                        ElMessage.error(error.data.msg)
                        break
                    case 403:
                        error.data.msg = '拒绝访问';
                        ElMessage.error(error.data.msg)
                        break
                    case 404:
                        error.data.msg = '请求错误,未找到该接口';
                        ElMessage.error(error.data.msg)
                        break
                    case 405:
                        error.data.msg = '请求方法未允许';
                        ElMessage.error(error.data.msg)
                        break
                    case 408:
                        error.data.msg = '请求超时';
                        ElMessage.error(error.data.msg)
                        break
                    case 500:
                        error.data.msg = '后端接口出错';
                        ElMessage.error(error.data.msg)
                        break
                    case 501:
                        error.data.msg = '网络未实现';
                        ElMessage.error(error.data.msg)
                        break
                    case 502:
                        error.data.msg = '网络错误';
                        ElMessage.error(error.data.msg)
                        break
                    case 503:
                        error.data.msg = '服务不可用';
                        ElMessage.error(error.data.msg)
                        break
                    case 504:
                        error.data.msg = '网络超时';
                        ElMessage.error(error.data.msg)
                        break
                    case 505:
                        error.data.msg = 'http版本不支持该请求';
                        ElMessage.error(error.data.msg)
                        break
                    default:
                        error.data.msg = `连接错误${error.response.status}`;
                        ElMessage.error(error.data.msg)
                }
            } else {
                error.data.msg = "连接到服务器失败";
                ElMessage.error(error.data.msg)
            }
            return Promise.reject(error)
        })
    }

    /* GET 方法 */
    get<T = Result>(url: string, params?: object): Promise<T> {
        return this.instance.get(url, { params })
    }
    /* POST 方法 */
    post<T = Result>(url: string, data?: object): Promise<T> {
        return this.instance.post(url, data)
    }
    /* PUT 方法 */
    put<T = Result>(url: string, data?: object): Promise<T> {
        return this.instance.put(url, data)
    }
    /* DELETE 方法 */
    delete<T = Result>(url: string): Promise<T> {
        return this.instance.delete(url)
    }
    //图片上传
    upload<T = Result>(url: string, params?: object): Promise<T> {
        return this.instance.post(url, params, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
export default new Http(config)
```

















#### 第111讲 管理员重置密码功能开发

##### 1、SysUserController控制器添加resetPassword()方法

```js
//重置密码
@PostMapping("/resetPassword")
public ResultVo resetPassword(@RequestBody SysUser user){
    UpdateWrapper<SysUser> query = new UpdateWrapper<>();
    query.lambda().set(SysUser::getPassword,DigestUtils.md5DigestAsHex("666666".getBytes()))
            .eq(SysUser::getUserId,user.getUserId());
    if(sysUserService.update(query)){
        return ResultUtils.success("重置成功!");
    }
    return ResultUtils.error("重置失败!");
}
```

##### 2、api/user.ts添加resetPasswordApi()方法

```js
//重置密码
export const resetPasswordApi = (parm:ResetPassword)=>{
    return http.post("/api/sysUser/resetPassword",parm)
} 
```

##### 3、AdminUser.vue页面

```js
<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input
          v-model="searchParm.nickName"
          placeholder="请输入姓名"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search" @click="searchBtn">搜索</el-button>
        <el-button icon="Close" type="danger" plain @click="resetBtn"
          >重置</el-button
        >
        <el-button
          v-permission="['sys:adminUser:add']"
          type="primary"
          icon="Plus"
          @click="addBtn"
          >新增</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :height="tableHeight" :data="tableList" border stripe>
      <el-table-column prop="nickName" label="姓名"></el-table-column>
      <el-table-column prop="sex" label="性别">
        <template #default="scope">
          <el-tag v-if="scope.row.sex == '1'" type="danger" effect="dark"
            >女</el-tag
          >
          <el-tag v-if="scope.row.sex == '0'" effect="dark">男</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="username" label="账户"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-tag v-if="scope.row.status == '1'" type="danger" effect="dark"
            >停用</el-tag
          >
          <el-tag v-if="scope.row.status == '0'" effect="dark">启用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="450" align="center">
        <template #default="scope">
          <el-button
            v-permission="['sys:adminUser:edit']"
            type="primary"
            icon="Edit"
            size="default"
            @click="editBtn(scope.row)"
            >编辑</el-button
          >
          <el-button
            v-permission="['sys:adminUser:edit']"
            type="warning"
            icon="Edit"
            size="default"
            @click="resetPasswordBtn(scope.row)"
            >重置密码</el-button
          >
          <el-button
            v-permission="['sys:adminUser:assign']"
            type="success"
            icon="Setting"
            size="default"
            @click="assignBtn(scope.row)"
            >分配菜单</el-button
          >
          <el-button
            v-permission="['sys:adminUser:delete']"
            type="danger"
            icon="Delete"
            size="default"
            @click="deleteBtn(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="searchParm.currentPage"
      :page-sizes="[10, 20, 40, 80, 100]"
      :page-size="searchParm.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="searchParm.total"
      background
    >
    </el-pagination>

    <!-- 新增、编辑弹框 -->
    <SysDialog
      :title="dialog.title"
      :width="dialog.width"
      :height="dialog.height"
      :visible="dialog.visible"
      @on-close="onClose"
      @on-confirm="commit"
    >
      <template v-slot:content>
        <el-form
          :model="addModel"
          ref="addRef"
          :rules="rules"
          label-width="80px"
          :inline="false"
          size="default"
        >
          <el-form-item prop="nickName" label="姓名:">
            <el-input v-model="addModel.nickName"></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别:">
            <el-radio-group v-model="addModel.sex">
              <el-radio :label="'0'">男</el-radio>
              <el-radio :label="'1'">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="phone" label="电话:">
            <el-input v-model="addModel.phone"></el-input>
          </el-form-item>
          <el-form-item prop="username" label="账号:">
            <el-input v-model="addModel.username"></el-input>
          </el-form-item>
          <el-form-item v-if="tags == '0'" prop="password" label="密码:">
            <el-input v-model="addModel.password"></el-input>
          </el-form-item>
          <el-form-item prop="status" label="状态:">
            <el-radio-group v-model="addModel.status">
              <el-radio :label="'0'">启用</el-radio>
              <el-radio :label="'1'">停用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
    <!-- 分配菜单 -->
    <AssignTree ref="assignTree"></AssignTree>
  </el-main>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import AssignTree from "./AssignTree.vue";
import useDialog from "@/hooks/useDialog";
import { ElMessage, type FormInstance } from "element-plus";
import {
  addAdminUserApi,
  getListApi,
  editApi,
  deleteApi,
  resetPasswordApi
} from "@/api/user/index";
import { User } from "@/api/user/UserModel";
import { Title } from "@/type/BaseEnum";
import useInstance from "@/hooks/useInstance";
//分配菜单ref属性
const assignTree = ref();
//获取全局属性
const { global } = useInstance();
//表单ref属性
const addRef = ref<FormInstance>();
//获取弹框属性
const { dialog, onClose } = useDialog();
//搜索绑定的对象
const searchParm = reactive({
  nickName: "",
  pageSize: 10,
  currentPage: 1,
  total: 0,
});
//表格高度
const tableHeight = ref(0);
//表格数据
const tableList = ref([]);
const tags = ref("");
//新增按钮
const addBtn = () => {
  tags.value = "0";
  //设置弹框标题
  dialog.title = Title.ADD;
  dialog.height = 300;
  dialog.visible = true;
  //清空表单
  addRef.value?.resetFields();
  addModel.password = "";
};
//分配菜单
const assignBtn = (row: User) => {
  // console.log(row)
  // console.log(assignTree.value)
  assignTree.value.show(row);
};
//新增表单绑定的对象
const addModel = reactive({
  userId: "",
  username: "",
  password: "",
  nickName: "",
  phone: "",
  sex: "",
  status: "",
});
//表单验证规则
const rules = {
  nickName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
  phone: [{ required: true, message: "请输入电话", trigger: "blur" }],
  username: [{ required: true, message: "请输入账户", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  status: [{ required: true, message: "请选择状态", trigger: "blur" }],
};

//列表查询
const getList = async () => {
  let res = await getListApi(searchParm);
  if (res && res.code == 200) {
    console.log(res);
    tableList.value = res.data.records;
    searchParm.total = res.data.total;
  }
};
//编辑
const editBtn = (row: User) => {
  tags.value = "1";
  console.log(row);
  //设置弹框标题
  dialog.title = Title.EDIT;
  dialog.height = 300;
  dialog.visible = true;
  //设置数据回显
  nextTick(() => {
    Object.assign(addModel, row);
  });
  //清空表单
  addRef.value?.resetFields();
};
//新增、编辑提交
const commit = () => {
  console.log(tags.value);
  //表单验证
  addRef.value?.validate(async (valid) => {
    if (valid) {
      console.log(addModel);
      //提交数据
      let res = null;
      if (tags.value == "0") {
        res = await addAdminUserApi(addModel);
      } else {
        addModel.password = "";
        res = await editApi(addModel);
      }
      if (res && res.code == 200) {
        //信息提示
        ElMessage.success(res.msg);
        //刷新表格
        getList();
        //关闭弹框
        dialog.visible = false;
      }
    }
  });
};
//删除
const deleteBtn = async (row: User) => {
  console.log(row);
  //信息提示
  console.log(global);
  const confirm = await global.$myconfirm("确定删除该数据吗?");
  if (confirm) {
    let res = await deleteApi(row.userId);
    if (res && res.code == 200) {
      ElMessage.success(res.msg);
      getList();
    }
  }
};
//搜索
const searchBtn = () => {
  getList();
};
//重置
const resetBtn = () => {
  searchParm.nickName = "";
  getList();
};
//页容量改变时触发
const sizeChange = (size: number) => {
  console.log(size);
};
//页数改变时触发
const currentChange = (page: number) => {
  console.log(page);
};
//重置密码
const resetPasswordBtn = async(row: User)=>{
  console.log(row)
  const confirm = await global.$myconfirm('确定重置【'+row.nickName+'】的密码吗？重置之后的密码为【666666】')
  if(confirm){
    let res = await resetPasswordApi({
      userId:row.userId
    })
    if(res && res.code == 200){
      ElMessage.success(res.msg)
    }
  }
}
onMounted(() => {
  nextTick(() => {
    //计算表格高度
    tableHeight.value = window.innerHeight - 200;
  });
  getList();
});
</script>

<style scoped></style>

```





































































































































