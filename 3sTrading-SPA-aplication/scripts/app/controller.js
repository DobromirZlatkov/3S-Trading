/// <reference path="../libs/jquery.js" />
define(['jquery', 'ui-controller'], function ($, UIController) {

    var DIAMOND_DISC_SHOP_LINK = '#1',
        SWIM_SUIT_SHOP_LINK = '#2',
        THIRD_SHOP_LINK = '#3',
        DIAMOND_DISC_PICTURE_LINK = 'images/diamond.jpg',
        SWIM_SUIT_SHOP_PICTURE_LINK = 'images/kid-swimsuits.jpg',
        THIRD_SHOP_PICTURE_LINK = 'images/swimsuits2.jpg',
        PORTFOLIO_BACK_GROUND_PICTURES = ['url(../images/portfolio-backgrounds/white1.jpg)', 'url(../images/portfolio-backgrounds/white2.jpg)', 'url(../images/portfolio-backgrounds/white3.jpg)', 'url(../images/portfolio-backgrounds/white4.jpg)', 'url(../images/portfolio-backgrounds/white5.jpg)', 'url(../images/portfolio-backgrounds/white6.jpg)'],
        ABOUTUS_BACK_GROUND_PICTURES = ['url(../images/portfolio-backgrounds/sharen2.jpg)', 'url(../images/portfolio-backgrounds/sharen1.jpg)', 'url(../images/portfolio-backgrounds/sharen5.jpg)', 'url(../images/portfolio-backgrounds/sharen4.jpg)'];
    var _lastChosenPicture = [];

    var Controller = (function () {

        var Controller = function () {
            this.UIController = new UIController();
        };

        Controller.prototype.loadHomeForm = function () {
            var self = this;
            $('#main-content').load('html-partials/home-template.html', function () {
                self.setEventHandlersForHomePage();
            });
        };

        Controller.prototype.loadPortfolioForm = function () {
            var self = this;
            $('#main-content').load('html-partials/portfolio-template.html', function () {
                var $portfolioAnimatedBackground = $('#articles-container');
                self.setRandomBackgroundColorToArticles();
                self.UIController.setBackgroundChangeAnimation($portfolioAnimatedBackground, self.UIController.changingByPageReloadPictureBehaviour, ABOUTUS_BACK_GROUND_PICTURES);
            });
        };

        Controller.prototype.loadAboutUsForm = function () {
            var self = this;
            $('#main-content').load('html-partials/aboutus-template.html', function () {
                var $aboutUsAnimatedBackground = $('#aboutus-articles-container');
                self.setRandomBackgroundColorToArticles();
                self.UIController.setBackgroundChangeAnimation($aboutUsAnimatedBackground, self.UIController.changingByPageReloadPictureBehaviour, ABOUTUS_BACK_GROUND_PICTURES);
            });
        };

        Controller.prototype.loadContactUsForm = function () {
            var self = this;
            $('#main-content').load('html-partials/contactus-template.html');
        };

        Controller.prototype.setRandomBackgroundColorToArticles = function () {
            var self = this,
                articles = document.getElementsByTagName('article'),
                i,
                len;

            for (i = 0, len = articles.length; i < len; i += 1) {
                var randomColorForArticleText = self.UIController.generateRandomColor(0, 60);
                articles[i].style.color = randomColorForArticleText;
            }
        };
        //TODO: fix same page reaload bug
        Controller.prototype.setEventHandlersForHomePage = function () {
            var self = this,
                $container = $('#main-container'),
                $mainImageLink = $('.main-image-link').first(),
                $mainImage = $mainImageLink.children().first();

            $container.on('mouseover', '.shop-portal', function () {
                var $selected = $(this);
                
                if ($selected.is(':first-child')) {
                    self.UIController.homePageMainImageBehaviour($mainImageLink, $mainImage, DIAMOND_DISC_SHOP_LINK, DIAMOND_DISC_PICTURE_LINK);
                }
                else if ($selected.is(':nth-child(2)')) {
                    self.UIController.homePageMainImageBehaviour($mainImageLink, $mainImage, SWIM_SUIT_SHOP_LINK, SWIM_SUIT_SHOP_PICTURE_LINK);
                }
                else if ($selected.is(':nth-child(3)')) {
                    self.UIController.homePageMainImageBehaviour($mainImageLink, $mainImage, THIRD_SHOP_LINK, THIRD_SHOP_PICTURE_LINK);
                }
       
                _lastChosenPicture = $selected;               
            });
        };

        return Controller;
    }());

    return Controller;
});