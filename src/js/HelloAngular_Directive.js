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
	$scope.person={
		firstName:'lala',
		lastName:'fAAa',
		year:'2223123',
		type:[
		{name:'dad',country:'asdfasdf'},
		{name:'dad',country:'asdfasdf'},
		{name:'dad',country:'asdfasdf'}
		]
		fullName:function(){
			var x;
			x=$scope.person;
			return x.firstName+x.lastName
		}
	}
}

