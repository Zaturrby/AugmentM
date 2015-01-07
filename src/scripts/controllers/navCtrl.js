(function(){
  'use strict';

  angular.module('augm').controller('NavCtrl', ['$scope', '$location', NavCtrl]);

  angular.module('augm')
    .config(function($collapseProvider) {
      angular.extend($collapseProvider.defaults, {
        startCollapsed: 'true'
      });
    });

  function NavCtrl($scope, $location, $anchorScroll){
    var vm = this;


    $(function() {
      $('a[href*="#"]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: (target.offset().top - 50)
            }, 1000);
            return false;
          }
        }
      });
    });

    return vm;
  }
})();