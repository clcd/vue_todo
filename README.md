# 1. vuex是什么
	github站点: https://github.com/vuejs/vuex
	在线文档: https://vuex.vuejs.org/zh-cn/
	简单来说: 对应用中组件的状态进行集中式的管理(读/写)

# 2. 状态自管理应用
	state: 驱动应用的数据源
	view: 以声明方式将state映射到视图
	actions: 响应在view上的用户输入导致的状态变化(包含n个更新状态的方法)
![单向数据流](https://vuex.vuejs.org/zh-cn/images/flow.png)

# 3. 多组件共享状态的问题
	多个视图依赖于同一状态
	来自不同视图的行为需要变更同一状态
	以前的解决办法
		* 将数据以及操作数据的行为都定义在父组件
		* 将数据以及操作数据的行为传递给需要的各个子组件(有可能需要多级传递)
	vuex就是用来解决这个问题的
![vuex结构](https://vuex.vuejs.org/zh-cn/images/vuex.png)
