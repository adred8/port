console.log("Hello");
$(document).ready(function(){
  // $(window).scroll(function (event) {
  //   var scroll = $(window).scrollTop();
  //   console.log("scrolle = ", scroll);
  //   if (scroll >= 215){
  //     $("header").css("background-color", "#c8b900");
  //     $(".nav-bar button").css("background-color", "#c8b900");
  //   }
  //   else{
  //     $("header").css("background-color", "#ffeb3b");
  //     $(".nav-bar button").css("background-color", "#ffeb3b");
  //   }
  // });
});

(function(){
  var app = angular.module("portApp", []);

  app.controller("portCtrl", portCtrl);

  portCtrl.$inject = ["$scope"];

  function portCtrl($scope){
    $scope.projectData = projectData;
  }

})();
https://raw.githubusercontent.com/adred8/wiki-builder/master/wiki-builder.JPG
var projectData = [
        {
          name : "cooking-todo",
          src : "https://github.com/adred8/cooking-todo",
          url : "https://adred8.github.io/cooking-todo/",
          img : "https://raw.githubusercontent.com/adred8/cooking-todo/master/cooking-todo.JPG",
          tags : ["HTML", "CSS", "JSON"]
        },
      {
        name : "reading-app",
        src : "https://github.com/adred8/reading-app",
        url : "https://adred8.github.io/reading-app/",
        img : "https://raw.githubusercontent.com/adred8/reading-app/master/reading-app.JPG",
        tags : ["HTML", "CSS", "JSON"]
      },
      {
        name : "wiki-builder",
        src : "https://github.com/adred8/wiki-builder",
        url : "https://adred8.github.io/wiki-builder/",
        img : "https://raw.githubusercontent.com/adred8/wiki-builder/master/wiki-builder.JPG",
        tags : ["HTML", "CSS", "JSON"]
      },
      {
        name : "students-perfomance",
        src : "https://github.com/adred8/students-perfomance",
        url : "https://adred8.github.io/students-perfomance/",
        img : "https://raw.githubusercontent.com/adred8/students-perfomance/master/students-perfomance.JPG",
        tags : ["HTML", "CSS", "JSON"]
      },
      {
        name : "twitch-tv",
        src: "https://github.com/adred8/twitch-tv",
        url : "https://adred8.github.io/twitch-tv",
        img : "https://raw.githubusercontent.com/adred8/twitch-tv/master/twitch-tv.JPG",
        tags : ["HTML", "CSS", "jquery"]
      },
      {
        name : "local-weather",
        src: "https://github.com/adred8/local-weather",
        url : "https://adred8.github.io/local-weather",
        img : "https://raw.githubusercontent.com/adred8/local-weather/master/local-weather.PNG",
        tags : ["HTML", "CSS", "jquery"]
      },
      {
        name : "remote-working",
        src: "https://github.com/adred8/remote-working",
        url : "https://adred8.github.io/remote-working/",
        img : "https://raw.githubusercontent.com/adred8/remote-working/master/remote-working.JPG",
        tags : ["HTML", "CSS", "AngularJs"]
      },
      {
        name : "confirm-reservation",
        src: "https://github.com/adred8/confirm-reservation",
        url : "https://adred8.github.io/confirm-reservation/",
        img : "https://raw.githubusercontent.com/adred8/confirm-reservation/master/confirm-reservation.JPG",
        tags : ["HTML", "CSS", "AngularJs"]
      },
      {
        name : "mix-webpage",
        src: "https://github.com/adred8/mix-webpage",
        url : "https://adred8.github.io/mix-webpage/",
        img : "https://raw.githubusercontent.com/adred8/mix-webpage/master/mix-webpage.JPG",
        tags : ["HTML", "CSS", "AngularJs"]
      },
      {
        name : "signup-ui",
        src: "https://github.com/adred8/signup-ui",
        url : "https://adred8.github.io/signup-ui/",
        img : "https://raw.githubusercontent.com/adred8/signup-ui/master/signup-ui.JPG",
        tags : ["HTML", "CSS", "AngularJs"]
      }
      // },
      // {
      //   name : "tasks",
      //   src: "https://github.com/adred8/tasks",
      //   url : "https://adred8.github.io/tasks/",
      //   img : "https://raw.githubusercontent.com/adred8/tasks/master/Capture.JPG",
      //   tags : ["HTML", "CSS", "AngularJs"]
      // }
];
