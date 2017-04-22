angular.module("ADMIN", ['ui.router', 'oc.lazyLoad'])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$locationProvider', '$sceProvider',
        function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider, $sceProvider) {

            $sceProvider.enabled(false);
            $locationProvider.html5Mode(false).hashPrefix("");
            // configuring the lazyLoad angularjs files
            $ocLazyLoadProvider.config({
                // debug: true,
                modules: [{
                        name: "ui.select",
                        files: [
                            "/static/bower_components/angular-ui-select/dist/select.js",
                            "/static/bower_components/angular-ui-select/dist/select.css"
                        ]
                    },
                    {
                        name: "cgBusy",
                        files: [
                            "/static/bower_components/angular-busy/dist/angular-busy.min.js",
                            "/static/bower_components/angular-busy/dist/angular-busy.min.css"
                        ]
                    },
                    {
                        name: "ui.bootstrap",
                        files: [
                            "/static/bower_components/angular-bootstrap/ui-bootstrap.js",
                            "/static/bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
                            "/static/bower_components/angular-bootstrap/ui-bootstrap-csp.css"
                        ]
                    },
                    {
                        name: "angularUtils.directives.dirPagination",
                        files: [
                            "/static/bower_components/angularUtils-pagination/dirPagination.js",
                            "/static/bower_components/angularUtils-pagination/dirPagination.tpl/html"
                        ]
                    },
                    {
                        name: "ngSanitize",
                        files: [
                            "/static/bower_components/angular-sanitize/angular-sanitize.min.js",
                        ]
                    },
                    {
                        name: "satellizer",
                        files: [
                            '/static/bower_components/satellizer/dist/satellizer.js'
                        ]
                    },
                    {
                        name: "toastr",
                        files: [
                            "/static/bower_components/angular-toastr/dist/angular-toastr.tpls.min.js",
                            "/static/bower_components/angular-toastr/dist/angular-toastr.min.css"
                        ]
                    },
                    {
                        name: "constantModule",
                        files: ['/static/app/admin-panel/modules/constant.module.js']
                    },

                    // Services
                    {
                        name: "storeServiceModule",
                        files: ['/static/app/admin-panel/modules/store/store.service.module.js']
                    },
                    {
                        name: "dealServiceModule",
                        files: ['/static/app/admin-panel/modules/deal/deal.service.module.js']
                    },

                    // directives
                    {
                        name: "Directives",
                        files: ['/static/app/admin-panel/modules/directives/global.module.js']
                    },

                    // Services
                    {
                        name: "personFactoryModule",
                        files: ['/static/app/admin-panel/modules/services/persons.service.js']
                    }
                ]
            });

            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('header', {
                    url: '',
                    templateUrl: '/static/app/admin-panel/modules/header/header.template.html',
                    controller: "headerCtrl",
                    resolve: {
                        redirect: function($location) {
                            if ($location.path() == undefined || $location.path() == null || $location.path() == '') {
                                $location.path('/');
                            }
                        },
                        header: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'headerModule',
                                files: ['/static/app/admin-panel/modules/header/header.module.js']
                            })
                        }
                    }
                })
                .state('header.dashboard', {
                    url: '/',
                    templateUrl: '/static/app/admin-panel/modules/dashboard/dashboard.template.html',
                    controller: "dashBoardCtrl",
                    resolve: {
                        dashboard: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'DashBoardModule',
                                files: ['/static/app/admin-panel/modules/dashboard/dashboard.module.js']
                            })
                        }
                    }
                })
                .state('login', {
                    url: '/login',
                    templateUrl: '/static/app/admin-panel/modules/login/login.template.html',
                    controller: "loginCtrl",
                    resolve: {
                        login: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'loginModule',
                                files: ['/static/app/admin-panel/modules/login/login.module.js']
                            })
                        }
                    }
                })
                .state('forgot_password', {
                    url: '/forgot-password',
                    templateUrl: '/static/app/admin-panel/modules/forgot.password/forgot.password.template.html',
                    controller: "forgotPasswordCtrl",
                    resolve: {
                        forgotPassword: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'forgotPasswordModule',
                                files: ['/static/app/admin-panel/modules/forgot.password/forgot.password.module.js']
                            })
                        }
                    }
                })
                // register
                .state('register', {
                    url: '/register',
                    templateUrl: '/static/app/admin-panel/modules/register/register.template.html',
                    controller: "registerCtrl",
                    resolve: {
                        register: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'registerModule',
                                files: ['/static/app/admin-panel/modules/register/register.module.js']
                            })
                        }
                    }
                })

            // from store/store directory
            .state('header.stores', {
                    url: '/stores',
                    templateUrl: '/static/app/admin-panel/modules/store/store/store.template.html',
                    controller: "storeCtrl",
                    resolve: {
                        store: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'storeModule',
                                files: ['/static/app/admin-panel/modules/store/store/store.module.js']
                            })
                        }
                    }
                })
                // from store/add directory
                .state('header.add-store', {
                    url: '/store/add',
                    templateUrl: '/static/app/admin-panel/modules/store/add/add.store.template.html',
                    controller: "addStoreCtrl",
                    resolve: {
                        addStore: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'addStoreModule',
                                files: ['/static/app/admin-panel/modules/store/add/add.store.module.js']
                            })
                        }
                    }
                })
                .state('header.update-store', {
                    url: '/store/update/:storeId',
                    templateUrl: '/static/app/admin-panel/modules/store/update/update.store.template.html',
                    controller: "updateStoreCtrl",
                    resolve: {
                        updateStore: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'updateStoreModule',
                                files: ['/static/app/admin-panel/modules/store/update/update.store.module.js']
                            })
                        }
                    }
                })

            // from deal/deal directory
            .state('header.deals', {
                    url: '/deals',
                    templateUrl: '/static/app/admin-panel/modules/deals/deal/deal.template.html',
                    controller: "dealCtrl",
                    resolve: {
                        deal: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'dealModule',
                                files: ['/static/app/admin-panel/modules/deals/deal/deal.module.js']
                            })
                        }
                    }
                })
                // from deals/add directory
                .state('header.add-deal', {
                    url: '/deal/add',
                    templateUrl: '/static/app/admin-panel/modules/deals/add/add.deal.template.html',
                    controller: "addDealCtrl",
                    resolve: {
                        addDeal: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'addDealModule',
                                files: ['/static/app/admin-panel/modules/deals/add/add.deal.module.js']
                            })
                        }
                    }
                })
                .state('header.update-deal', {
                    url: '/deal/update/:dealId',
                    templateUrl: '/static/app/admin-panel/modules/deals/update/update.deal.template.html',
                    controller: "updateDealCtrl",
                    resolve: {
                        updateDeal: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'updateDealModule',
                                files: ['/static/app/admin-panel/modules/deals/update/update.deal.module.js']
                            })
                        }
                    }
                })

            // from coupons/add directory
            .state('header.coupon', {
                    url: '/coupons',
                    templateUrl: '/static/app/admin-panel/modules/coupons/coupon/coupon.template.html',
                    controller: "couponCtrl",
                    resolve: {
                        coupon: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'couponModule',
                                files: ['/static/app/admin-panel/modules/coupons/coupon/coupon.module.js']
                            })
                        }
                    }
                })
                .state('header.add-coupon', {
                    url: '/coupon/add',
                    templateUrl: '/static/app/admin-panel/modules/coupons/add/add.coupon.template.html',
                    controller: "addCouponCtrl",
                    resolve: {
                        addCoupon: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'addCouponModule',
                                files: ['/static/app/admin-panel/modules/coupons/add/add.coupon.module.js']
                            })
                        }
                    }
                })
                .state('header.update-coupon', {
                    url: '/coupon/update/:couponId',
                    templateUrl: '/static/app/admin-panel/modules/coupons/update/update.coupon.template.html',
                    controller: "updateCouponCtrl",
                    resolve: {
                        updateCoupon: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'updateCouponModule',
                                files: ['/static/app/admin-panel/modules/coupons/update/update.coupon.module.js']
                            })
                        }
                    }
                })


            // ==== settings ======
            .state('header.settings', {
                    url: '/settings',
                    templateUrl: '/static/app/admin-panel/modules/settings/settings/settings.template.html',
                    controller: "settingsCtrl",
                    resolve: {
                        settings: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'settingsModule',
                                files: ['/static/app/admin-panel/modules/settings/settings/settings.module.js']
                            })
                        }
                    }
                })
                .state('header.settings.profile', {
                    url: '/profile',
                    templateUrl: '/static/app/admin-panel/modules/settings/profile/profile.template.html',
                    controller: "profileCtrl",
                    resolve: {
                        settings: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'profileModule',
                                files: ['/static/app/admin-panel/modules/settings/profile/profile.module.js']
                            })
                        }
                    }
                })
                .state('header.settings.change-password', {
                    url: '/change-password',
                    templateUrl: '/static/app/admin-panel/modules/settings/change.password/change.password.template.html',
                    controller: "changePasswordCtrl",
                    resolve: {
                        settings: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'profileModule',
                                files: ['/static/app/admin-panel/modules/settings/change.password/change.password.module.js']
                            })
                        }
                    }
                })

                /* ===== users section */
                .state('header.users', {
                    url: '/users',
                    templateUrl: '/static/app/admin-panel/modules/users/users/users.template.html',
                    controller: "usersCtrl",
                    resolve: {
                        redirect: function($location) {
                            if ($location.path() == '/users') {
                                $location.path('/users/all');
                            }
                        },
                        users: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'usersModule',
                                files: ['/static/app/admin-panel/modules/users/users/users.module.js']
                            })
                        }
                    }
                })
                .state('header.users.all', {
                    url: '/all',
                    templateUrl: '/static/app/admin-panel/modules/users/all/all.template.html',
                    controller: "allUsersCtrl",
                    resolve: {
                        allUsers: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'allUsersModule',
                                files: ['/static/app/admin-panel/modules/users/all/all.users.module.js']
                            })
                        }
                    }
                })
                .state('header.users.add', {
                    url: '/add',
                    templateUrl: '/static/app/admin-panel/modules/users/add/add.users.template.html',
                    controller: "addUsersCtrl",
                    resolve: {
                        addUsers: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'addUsersModule',
                                files: ['/static/app/admin-panel/modules/users/add/add.users.module.js']
                            })
                        }
                    }
                })
        }
    ])
    .controller("mainCtrl", ["$scope", function($scope) {

    }])
    .filter('propsFilter', function() {
        return function(items, props) {
            var out = [];
            if (angular.isArray(items)) {
                var keys = Object.keys(props);

                items.forEach(function(item) {
                    var itemMatches = false;

                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var text = props[prop].toLowerCase();
                        if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                            itemMatches = true;
                            break;
                        }
                    }

                    if (itemMatches) {
                        out.push(item);
                    }
                });
            } else {
                // Let the output be the input untouched
                out = items;
            }
            return out;
        };
    });