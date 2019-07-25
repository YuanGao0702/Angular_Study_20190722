
myapp.controller('myCtrl',function($scope){
	$scope.name = 'Gary';
	$scope.names=[
	{name:'Jani',country:'Norway'},
	{name:'Hege',country:'Sweden'},
	{name:'Kai',country:'Denmark'}];
	$scope.changeName = function(){
		$scope.name = "Bei";
	}
})
