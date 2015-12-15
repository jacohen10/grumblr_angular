"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ]);
  function GrumbleIndexControllerFunction(){
    this.grumbles = grumbles;
    this.newGrumble = {};
    this.create = function(){
      grumbles.unshift(this.newGrumble);
      this.newGrumble = {}
    };
    this.edit = function(index){
      this.title = this.grumbles[index].title;
    };
    this.update = function(index){
      this.grumbles[index].title = this.title;
    };
    this.delete = function(index){
      this.grumbles.splice(index, 1)
    }
  }

})();
