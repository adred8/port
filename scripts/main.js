// Angular code*****************************************************************

(function(){
'use strict';
  var app = angular.module("portApp", []);

  app.controller("portCtrl", portCtrl);

  function portCtrl (){

    var projectData = [
          {
            name : "reading-app",
            url : "https://adred8.github.io/reading-app/",
            img : "https://github.com/adred8/reading-app/blob/master/Capture.JPG"
            tags : ["HTML", "CSS", "JSON"];
          },
          {
            name : "tasks",
            url : "https://adred8.github.io/tasks/",
            img : "https://raw.githubusercontent.com/adred8/tasks/master/Capture.JPG"
            tags : ["HTML", "CSS", "AngularJs"];
          }
          {
            name : "remote-working",
            url : "https://adred8.github.io/remote-working/",
            img : "https://raw.githubusercontent.com/adred8/tasks/master/Capture.JPG"
            tags : ["HTML", "CSS", "AngularJs"];
          }
          {
            name : "confirm-reservation",
            url : "https://adred8.github.io/confirm-reservation/",
            img : "https://raw.githubusercontent.com/adred8/tasks/master/Capture.JPG"
            tags : ["HTML", "CSS", "AngularJs"];
          }
          {
            name : "mix-webpage",
            url : "https://adred8.github.io/mix-webpage/",
            img : "https://raw.githubusercontent.com/adred8/tasks/master/Capture.JPG"
            tags : ["HTML", "CSS", "AngularJs"];
          }
          {
            name : "signup-ui",
            url : "https://adred8.github.io/signup-ui/",
            img : "https://raw.githubusercontent.com/adred8/tasks/master/Capture.JPG"
            tags : ["HTML", "CSS", "AngularJs"];
          }
    ];

  }
})();


// var projectData = [
//       {
//         name : "reading-app",
//         url : "https://adred8.github.io/reading-app/",
//         img : "https://github.com/adred8/reading-app/blob/master/Capture.JPG"
//         tags : ["HTML", "CSS", "JSON"];
//       },
//       {
//         name : "tasks",
//         url : "https://adred8.github.io/tasks/",
//         img : "https://raw.githubusercontent.com/adred8/tasks/master/Capture.JPG"
//         tags : ["HTML", "CSS", "AngularJs"];
//       }
//       {
//         name : "remote-working",
//         url : "https://adred8.github.io/remote-working/",
//         img : "https://raw.githubusercontent.com/adred8/tasks/master/Capture.JPG"
//         tags : ["HTML", "CSS", "AngularJs"];
//       }
//       {
//         name : "confirm-reservation",
//         url : "https://adred8.github.io/confirm-reservation/",
//         img : "https://raw.githubusercontent.com/adred8/tasks/master/Capture.JPG"
//         tags : ["HTML", "CSS", "AngularJs"];
//       }
//       {
//         name : "mix-webpage",
//         url : "https://adred8.github.io/mix-webpage/",
//         img : "https://raw.githubusercontent.com/adred8/tasks/master/Capture.JPG"
//         tags : ["HTML", "CSS", "AngularJs"];
//       }
//       {
//         name : "signup-ui",
//         url : "https://adred8.github.io/signup-ui/",
//         img : "https://raw.githubusercontent.com/adred8/tasks/master/Capture.JPG"
//         tags : ["HTML", "CSS", "AngularJs"];
//       }
// ];
