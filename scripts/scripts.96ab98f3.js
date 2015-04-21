"use strict";angular.module("slidesApp",["ngAnimate","ngRoute","ngTouch"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/cover.html"}).when("/2",{templateUrl:"views/contents1.html"}).when("/3",{templateUrl:"views/motivation.html"}).when("/4",{templateUrl:"views/objetives.html"}).when("/5",{templateUrl:"views/githubProgress.html"}).when("/6",{templateUrl:"views/rankingGitHub.html"}).when("/7",{templateUrl:"views/contents2.html"}).when("/8",{templateUrl:"views/html5.html"}).when("/9",{templateUrl:"views/listHTML5components.html"}).when("/10",{templateUrl:"views/historyAPI.html"}).when("/11",{templateUrl:"views/css3.html"}).when("/12",{templateUrl:"views/css3features.html"}).when("/13",{templateUrl:"views/javascript.html"}).when("/14",{templateUrl:"views/javascriptFeatures.html"}).when("/15",{templateUrl:"views/angularJS.html"}).when("/16",{templateUrl:"views/dataBindingDiagram.html"}).when("/17",{templateUrl:"views/dataBindingExample.html"}).when("/18",{templateUrl:"views/dependencyInjection.html"}).when("/19",{templateUrl:"views/angularJSMVC.html"}).when("/20",{templateUrl:"views/angularJSscope.html"}).when("/21",{templateUrl:"views/nodejs.html"}).when("/22",{templateUrl:"views/nodejsfeatures.html"}).when("/23",{templateUrl:"views/express.html"}).when("/24",{templateUrl:"views/expressFeatures.html"}).when("/25",{templateUrl:"views/mongodb.html"}).when("/26",{templateUrl:"views/mongodbFeatures.html"}).when("/27",{templateUrl:"views/contents3.html"}).when("/28",{templateUrl:"views/singlePage.html"}).when("/29",{templateUrl:"views/ngRouteDiagram.html"}).when("/30",{templateUrl:"views/shareWhiteboard.html"}).when("/31",{templateUrl:"views/webSocketIntro.html"}).when("/32",{templateUrl:"views/webSocketsDiagram.html"}).when("/33",{templateUrl:"views/socketio.html"}).when("/34",{templateUrl:"views/socketioDiagram.html"}).when("/35",{templateUrl:"views/newUserCommunication.html"}).when("/36",{templateUrl:"views/joinAnotherUser.html"}).when("/37",{templateUrl:"views/usersNormalCommunication.html"}).when("/38",{templateUrl:"views/tools.html"}).when("/39",{templateUrl:"views/yeoman.html"}).when("/40",{templateUrl:"views/grunt.html"}).when("/41",{templateUrl:"views/bower.html"}).when("/42",{templateUrl:"views/karma.html"}).when("/43",{templateUrl:"views/jasmine.html"}).when("/44",{templateUrl:"views/content4.html"}).when("/45",{templateUrl:"views/contents4.html"}).when("/46",{templateUrl:"views/contents5.html"}).when("/47",{templateUrl:"views/conclusions.html"}).when("/48",{templateUrl:"views/future.html"}).when("/49",{templateUrl:"views/future2.html"}).when("/50",{templateUrl:"views/thankyou.html"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("slidesApp").controller("MainCtrl",["$scope","$location","slideFactory","storageFactory",function(a,b,c,d){a.goToSlide=function(a){b.url("/"+a)},a.goToNextSlide=function(){var b=c.goToNextSlide();b&&(a.animationClass="next-slide-animation",a.goToSlide(c.getCurrentSlide()),a.currentSlide=c.getCurrentSlide())},a.goToPreviousSlide=function(){var b=c.goToPreviousSlide();b&&(a.animationClass="previous-slide-animation",a.goToSlide(c.getCurrentSlide()),a.currentSlide=c.getCurrentSlide())},a.changeSlide=function(b){var c=b.which;37===c?a.goToPreviousSlide():39===c&&a.goToNextSlide()},a.currentSlide=c.getCurrentSlide(),a.lastSlide=c.getLastSlide(),a.resizableReferent={},a.dropZoneText="",a.setDraggingText=function(){a.dropZoneText="Suelta la imagen"},a.setInitialDropZoneText=function(){a.dropZoneText="¡Arrastra una imagen aquí!"},a.initDropZone=function(){a.dropped=!1,a.imgDropped=""},a.setInitialDropZoneText(),a.initDropZone();var e=function(b){a.storage.savedText=b&&""!==b?b:"Escribe algo para la posteridad"};a.storage={savedText:""},a.saveText=function(){d.save(a.storage.savedText)},a.loadText=function(){var a=d.load();e(a)},a.loadText(),a.dataBinding={name:"Jorge García Hinestrosa",thisIs:"mi presentación del proyecto fin de carrera",twitter:"@jghinestrosa"},a.canvasResizable={width:500,height:500}}]),angular.module("slidesApp").directive("slide",["$window",function(){return{templateUrl:"templates/slide.html",restrict:"E",replace:!0,transclude:!0,link:function(a,b){var c=new Hammer(b[0]);c.on("swipeleft",function(){a.$apply(a.goToNextSlide)}),c.on("swiperight",function(){a.$apply(a.goToPreviousSlide)})}}}]),angular.module("slidesApp").factory("slideFactory",function(){var a=1,b=50;return{getCurrentSlide:function(){return a},getLastSlide:function(){return b},goToNextSlide:function(){return a!==b?(a++,!0):!1},goToPreviousSlide:function(){return 1!==a?(a--,!0):!1}}}),angular.module("slidesApp").directive("noSubmitting",function(){return{restrict:"A",link:function(a,b){b.on("submit",function(a){a.preventDefault()})}}}),angular.module("slidesApp").directive("whiteboard",function(){return{restrict:"A",link:function(a,b){function c(a,b){d.beginPath(),d.moveTo(e,f),d.lineTo(a,b),d.stroke(),e=a,f=b}var d=b[0].getContext("2d"),e=0,f=0,g=new Hammer(b[0]);g.on("panstart",function(a){var d=a.srcEvent;d.stopPropagation(),e=a.srcEvent.clientX-a.target.offsetLeft-b[0].clientLeft,f=a.srcEvent.clientY-a.target.offsetTop-b[0].clientTop,g.on("panmove",function(a){a.srcEvent.stopPropagation();var d=a.srcEvent.clientX||a.srcEvent.targetTouches[0].clientX,e=a.srcEvent.clientY||a.srcEvent.targetTouches[0].clientY;d=d-a.target.offsetLeft-b[0].clientLeft,e=e-a.target.offsetTop-b[0].clientTop,c(d,e)})}),g.on("panend",function(a){var b=a.srcEvent;b.stopPropagation(),g.off("panmove")})}}}),angular.module("slidesApp").directive("dropZone",function(){return{restrict:"A",link:function(a,b){function c(c,d,e,f){a.$apply(f),b.css("background",e),b.css("width",c),b.css("height",d)}function d(b){var c=b.dataTransfer.files,d=new FileReader;d.onload=function(b){a.$apply(function(){var c=b.target.result;a.imgDropped=c,a.dropped=!0})},d.readAsDataURL(c[0])}b.on("dragenter",function(b){b.stopPropagation(),b.preventDefault(),a.$apply(a.initDropZone()),c("63%","63%","#7fffd4",a.setDraggingText)}),b.on("dragover",function(a){a.stopPropagation(),a.preventDefault()}),b.on("dragleave",function(b){b.stopPropagation(),b.preventDefault(),console.log(b),c("65%","65%","#ffffff",a.setInitialDropZoneText)}),b.on("drop",function(b){console.log("drop",b),b.stopPropagation(),b.preventDefault(),c("65%","65%","#ffffff",a.setInitialDropZoneText),d(b)})}}}),angular.module("slidesApp").factory("storageFactory",["$window",function(a){var b=a.localStorage;return{save:function(a){b.setItem("mean-slides",a)},load:function(){return b.getItem("mean-slides")}}}]);