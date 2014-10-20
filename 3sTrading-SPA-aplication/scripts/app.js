/// <reference path="app/references.js" />
(function () {
    'use strict';

    require.config({
        paths: {
            'jquery': 'libs/jquery',
            'sammy': 'libs/sammy',
            'handlebars': 'libs/hadlebars',
            'underscore': 'libs/underscore',
            'controller': 'app/controller',
            'ui-controller':'app/ui-controller'
        }
    });

    require(['jquery', 'controller', 'sammy'], function ($, Controller, Sammy) {

        var appController = new Controller();
        
        var app = new Sammy('#main-content', function () {

            this.get('/#home', function () {
                appController.loadHomeForm();
            });

            this.get('/#portfolio', function () {
                appController.loadPortfolioForm();              
            });

            this.get('/#about-us', function () {
                appController.loadAboutUsForm();
            });

            this.get('/#contact-us', function () {
                appController.loadContactUsForm();
            });
        });

        app.run('/#home');
    });
}())