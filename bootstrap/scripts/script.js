var app=angular.module("myModule",["ui.router"])
				.config(function($stateProvider,$urlRouterProvider,$locationProvider){
					$urlRouterProvider.otherwise("/home");
					$stateProvider
					.state("home",{
						url:"/home",
						templateUrl:"OAS/homePage.html",
						controller:"homePageController as homePageCtrl"
					})
					.state("signup",{
						url:"/signup",
						templateUrl:"register/signup.html",
						controller:"signupPageController as signupPageCtrl"
					})
					$locationProvider.html5Mode(true);
				})
				.controller("homePageController",function(){
						this.message="Hello";
				})
				.controller("signupPageController",function(){
					this.message="Hello";
				})