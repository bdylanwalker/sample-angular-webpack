export default ngModule => {

  if (ON_TEST) {
    require('./hello.test.js')(ngModule);
  }

  ngModule.directive('sawHello', function($log) {
    require('./hello.styl');
    return {
      restrict: 'E',
      scope: {},
      template: require('./hello.html'),
      controllerAs: 'vm',
      controller: /*@ngInject*/ function() {
        const vm = this;

        vm.greeting = 'Hello Webpack';
        $log.info('I have some info');
      }
    };
  });
};
