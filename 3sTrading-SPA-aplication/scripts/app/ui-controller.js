/// <reference path="../libs/jquery.js" />
define(['jquery'], function () {
    'use strict';
    var UIController = (function () {

        var HOME_PAGE_PICTURES_FADEIN_TIME = 500;
        var pictureIndex;

        function UIController() {

        }

        function getRandomNumber(min, max, lastNumber) {  
            var number = Math.floor(Math.random() * (max - min + 1)) + min;
            if (number === lastNumber) {
                return getRandomNumber(min, max, lastNumber);
            }
            return number;
        }

        UIController.prototype.changingByIntervalPictureBehaviour = function ($container, pictures) {//NOT IN USE FOR NOW
            var pictureIndex = 0;
            setInterval(function () {
                pictureIndex++;
                if (pictureIndex === pictures.length) {
                    pictureIndex = 0;
                }
                var picture = pictures[pictureIndex];
                $container.animate({ opacity: 0 }, 'slow', function () {
                    $(this)
                        .css({ 'background-image': picture })
                        .animate({ opacity: 1 });
                });
            }, 20000);
        };

        UIController.prototype.changingByPageReloadPictureBehaviour = function ($container, pictures) {
            pictureIndex = getRandomNumber(0, pictures.length - 1, pictureIndex);
            var picture = pictures[pictureIndex];
            $container.css({ 'background-image': picture });
        };


        UIController.prototype.setBackgroundChangeAnimation = function ($container, behaviour, pictures) {
            behaviour($container, pictures);
        };

        UIController.prototype.homePageMainImageBehaviour = function ($mainImageLink, $mainImage, link, image) {
            $mainImageLink.hide();
            $mainImageLink.attr('href', link);
            $mainImage.attr('src', image);
            $mainImageLink.fadeIn(HOME_PAGE_PICTURES_FADEIN_TIME);
        };

        UIController.prototype.generateRandomColor = function (min, max) {
            var red = getRandomNumber(min, max),
                green = getRandomNumber(min, max),
                blue = getRandomNumber(min, max);
            return 'rgb(' + red.toString() + ',' + green.toString() + ',' + blue.toString() + ')';
        };

        return UIController;
    }());

    return UIController;
});