var App = angular.module("app", ['ui.router']);
App.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('page1', {
			url: '/page1',
			templateUrl: 'views/first'
		})
		.state('page2', {
			url: '/page2',
			templateUrl: 'views/second'
		});
});