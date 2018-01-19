# javascript
这里搜集整理了自己javascript的学习过程中的一些资料整理

## 闭包
闭包的深刻理解与深入实践练习
<pre>
	function getResult() {
		var result = new Array();
		for(var i = 0;i<10;i++)
		{
			//闭包 每一个值保存一个匿名函数
			result[i] = function(){
				return i;
			};
		}
		return result;
	}		
	//很多人会觉得最后得到的result数组内会依次为[0,1,2,3,4,5,6,7,8,9]
	var list = getResult();
	for(item in list)
	{
		console.log(list[item]()+"\n");
	}
	//结果是输出了10个10，这是因为闭包的作用 保存了i的最后值10

	//如果要让每一个函数都输入对应的值 需要对其函数进行如下调整
	function getList(){
		var result = [];
		for(var i= 0;i<10;i++)
		{
			result[i] = function(num){
				return function(){
					return num;
				}
			}(i);
			//及时性的传入i值 让里面的闭包函数保存num变量的值
		}
		return result;
	}
	var listT = getList();
	for( item in listT)
	{
		console.log(listT[item]()+"\n");
	}
</pre>
## 块级作用域
### 块级作用域的好处
1、可以各自使用自己的私有变量，不会造成全局污染，便于多人协同开发;

2、如果是大量用于闭包内，可以很大程度上降低闭包带去的内存消耗，因为块级作用域执行完毕后即刻销毁;
<pre>
	function show() {
        // body...
        (function(){
            //块级作用域 立即执行的匿名函数
            for(var i = 0;i<10;i++)
            {
                console.log(i);
            }
        })();
        if(typeof i != "undefined")
            console.log("我还要输出i的值为:"+i); //抛出异常 i is not defined
        else
            console.log("i is not defined");
    }
    show();

    //如果不用块级作用域 根据js语言的特性 在函数内的变量是通用的比如下方这个函数
    function showTwo(){
        for(var i = 0;i<10;i++)
        {
            console.log(i);
        }

        //输出i值
        console.log("我还要输出i的值为:"+i); //输出了 10
    }

    showTwo();
</pre>

## 原型链

