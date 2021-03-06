/* @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later */
'use strict';

require('angular');
require('angular-material');

var mod = angular.module('lovecall/ui/song-loading', [
    'ngMaterial',
]);

mod.controller('SongLoadingController', function($scope, $timeout, $mdDialog) {
  $scope.message = '歌曲加载中…';
  $scope.progressVisibility = 'visible';
  $scope.loadFailed = false;


  var closeDialog = function() {
    $mdDialog.hide(null);
  };


  $scope.closeDialog = closeDialog;


  $scope.$on('audio:decoding', function(e) {
    $scope.message = '音频解码中…（移动设备下可能非常缓慢，请耐心等候）';
  });


  $scope.$on('audio:loadFailed', function(e) {
    $scope.message = '音频解码失败，请刷新重试或更换浏览器';
    $scope.loadFailed = true;
  });


  $scope.$on('song:hideLoadingDialog', function(e, errored) {
    // hide progress indicator
    $scope.progressVisibility = 'hidden';

    if (!errored) {
      $scope.message = '歌曲加载完成';
      $timeout(closeDialog, 1000);
    } else {
      $scope.message = '歌曲加载失败';
      $scope.loadFailed = true;
    }
  });
});
