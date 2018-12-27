//axios(推荐)
var url = "https://zhihu-daily.leanapp.cn/api/v1/last-stories";
axios.get(url).then(function(response) {
	var jsonObject = response.data;
	var jsonString = JSON.stringify(jsonObject);
	console.log(jsonObject);
	/* document.getElementById("hero").innerHTML = 
	"通过 axios 获取到的json数据："+ jsonString; */
});
//vue-resource



