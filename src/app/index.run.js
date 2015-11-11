(function() {
  'use strict';

  angular
    .module('mentorfyClient')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
