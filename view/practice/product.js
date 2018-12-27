//自定义全局过滤器
Vue.filter("dateFilter", function(dateStr) {
	var week = new Array("日", "一", "二", "三", "四", "五", "六");  
	var dt = new Date(dateStr);
	//yyyy-mm-dd
	var y=dt.getFullYear();
	var m=(dt.getMonth()+1).toString().padStart(2,"0");// 不足两位前面补0
	var d=dt.getDate().toString().padStart(2,"0");
	var hh=dt.getHours().toString().padStart(2,"0");
	var mm=dt.getMinutes().toString().padStart(2,"0");
	var ss=dt.getSeconds();
	if(ss<=9){ss="0"+ss;}
	var day="星期"+week[dt.getDay()];
	//var newStr = y+"-"+m+"-"+d;
	var newStr = `${y}-${m}-${d} ${hh}:${mm}:${ss} ${day}`;
	return newStr;
});
//自定义全局键盘码按键修饰符
Vue.config.keyCodes.f2 = 113 ;
//自定义全局指令
Vue.directive("focus",{
	/* 
	//钩子函数
	 bind,inserted,updated,componentUpdated,unbind
	 //钩子函数参数
	 el,binding,vnode,oldVnode
	 */
	bind:function(el){//绑定元素时 (样式绑定)
		el.style.color = "red";
	},
	inserted:function(el){//插入DOM时（JS事件）
		el.focus();
	},
	updated:function(el,binding){//元素更新时
		console.log("元素更新");
	}
});
//Vue实例
var vm = new Vue({
	el: "#app",
	data: {
		id: "",
		name: "",
		keywords: "",
		list: [
			{
				id: 1,
				name: "奔驰",
				time: new Date()},
			{
				id: 2,
				name: "宝马",
				time: new Date()}
		]
	},
	methods: {
		add(str) {
			console.log("添加品名："+str);
			var car = {
				id: this.id,
				name: this.name,
				time: new Date()
			};
			this.list.unshift(car); //	头部
			//this.list.push(car);//	尾部
			this.id = this.name = "";
		},
		//edit(){}
		del(id) {
			console.log("删除ID:" + id);
			/* this.list.some((item,i) => {
				if(item.id == id){
					this.list.splice(i,1);
					return true;
				}
			}); */
			var index = this.list.findIndex(item => {
				if (item.id == id) {
					return true;
				}
			});
			//console.log("删除索引:"+index);
			this.list.splice(index, 1);
		},
		search(keyword) {
			var newList = [];
			/* this.list.forEach(item => {
				if(item.name.indexOf(keyword) != -1){
					newList.push(item);
				}
			}); */

			//ES6 新特性
			//forEach some filter findIndex
			newList = this.list.filter(item => {
				//if (item.name.indexOf(keyword) != -1){}
				if (item.name.includes(keyword)) {
					return item;
				}
			});

			return newList;
		}
	},
	filters: {//自定义私有过滤器
		dateAppend:function(dateStr,arg1=""){
			return arg1+dateStr;
		}
	},
	directives: {//自定义私有指令
		"font":{
			bind:function(el,binding){
				el.style.fontWeight = binding.value;
			},
			updated:function(el){
				el.style.color = "pink";
			}
		},
		"font-size":function(el,binding){//简化 同时写入bind与updated
			el.style.color = "pink";
			el.style.fontSize = binding.value+"px";
		}
	},
	//Vue生命周期
	//创建阶段
	beforeCreate(){//data,methods未创建
		console.log("Vue实例完全初始化之前调用");
	},
	created(){//data,methods创建完成
		console.log("Vue实例完全初始化完毕调用");
	},
	beforeMount(){//模板渲染在内存中
		console.log("Vue实例编译模板完成,模板挂载之前调用");
	},
	mounted(){//模板渲染在浏览器页面
		console.log("Vue实例完全创建完毕,模板挂载完成");
	},
	//运行阶段
	beforeUpdate(){//页面的数据未更新 ，实际数据已更新
		console.log("数据name旧值："+document.getElementById("pname").innerText);
		console.log("Vue实例data中的数据name："+this.name);
	},
	updated(){
		console.log("数据name新值："+document.getElementById("pname").innerText);
		console.log("Vue实例data中的数据name："+this.name);
	},
	//销毁阶段
	beforeDestroy(){},
	destroyed(){}
});

//<script src="https://unpkg.com/axios/dist/axios.min.js"></script>