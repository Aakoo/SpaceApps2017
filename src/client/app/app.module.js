(function () {
    'use strict';

    angular
        .module('app', [
            'isteven-multi-select',
            'ngSanitize',
            'ui.router',
            'ngAnimate',
            'angular-loading-bar',
            'app.landing',
            'app.layers',
            'app.layout'
        ])
        .config(function ($stateProvider, $urlRouterProvider, $logProvider, $locationProvider) {
            $logProvider.debugEnabled(false);
            $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise('/404');

            $stateProvider
                .state('notFound', {        //Not found page
                    url: '/404',
                    templateUrl: 'app/templates/404.html'
                })
                //Home when no user is logged in
                .state('landing', {
                    url: '/',
                    templateUrl: 'app/landing/landing.html',
                    controller: 'LandingController as vm'
                });
        });
})();