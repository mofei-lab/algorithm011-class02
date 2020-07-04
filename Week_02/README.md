# 学习笔记

* 哈希表
* Set/Map
* 树
	* 二叉树
	* 二叉搜索树
		* Search O(log(n))
		* Insert O(log(n))
		* Delete O(log(n))
* 堆
	* 可以快速的拿到最大值或者最小值
	* 实现
		* 二叉堆
			* 完全二叉树
			* 使用一维数组表示
				* 左节点 i*2+1
				* 右节点 i*2+2
				* 父节点 floor((i - 1) / 2)
			* 查找: O(1)
			* 插入: 放在尾端，向上冒泡 O(log(n))
			* 删除Max: 尾部放置顶端，再向下调整（取子节点中最大的替换当前值） O(log(n))
		priority_queue
* 图