/* @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later */
'use strict';

require('angular');
require('angular-material');

require('../conf');


var mod = angular.module('lovecall/ui/config', [
    'ngMaterial',
    'lovecall/conf',
]);

mod.controller('ConfigDialogController', function($scope, $mdDialog) {
  $scope.submit = function(size) {
    $mdDialog.hide(size);
  }
});