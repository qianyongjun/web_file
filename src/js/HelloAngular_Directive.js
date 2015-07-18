var myModule = angular.module("MyModule",[]);

myModule.directive("hello",function(){//定义angular识别hello
	return {
		restrict:'E',
		template:'<div>Hi everyone!</div>',
		replace:true,
	}
})

function HelloAngular($scope){
	$scope.greeting={
		text:'Hello'
	}
	$scope.test=function(){
		alert('test')
	}
}

