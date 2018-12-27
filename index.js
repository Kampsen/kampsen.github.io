//准备数据
var gareen = {
	"name": "盖伦",
	"hp": 616
};
//通过vue.js 把数据和对应的视图关联起来
var app = new Vue({
	el: '#div1',
	data: {
		message: gareen
	}
});
new Vue({
	el: '#div2',
	data: {
		clickNumber: 0
	},
	methods: {
		count: function() {
			this.clickNumber++;
		}
	}
})
