$(document).ready(function () {
    var initialize = function () {
        // 데이터 가져오기
        var images = [
            'http://lorempixel.com/600/600/sports/1/',
            'http://lorempixel.com/600/600/sports/2/',
            'http://lorempixel.com/600/600/sports/3/',
            'http://lorempixel.com/600/600/sports/10/',
            'http://lorempixel.com/600/600/sports/5/',
            'http://lorempixel.com/600/600/sports/6/',
            'http://lorempixel.com/600/600/sports/7/',
            'http://lorempixel.com/600/600/sports/8/',
            'http://lorempixel.com/600/600/sports/9/',
            'http://lorempixel.com/600/600/sports/1/',
            'http://lorempixel.com/600/600/sports/2/',
            'http://lorempixel.com/600/600/sports/3/',
            'http://lorempixel.com/600/600/sports/10/',
            'http://lorempixel.com/600/600/sports/5/',
            'http://lorempixel.com/600/600/sports/6/',
            'http://lorempixel.com/600/600/sports/7/',
            'http://lorempixel.com/600/600/sports/8/',
            'http://lorempixel.com/600/600/sports/9/',
            'http://lorempixel.com/600/600/sports/1/',
            'http://lorempixel.com/600/600/sports/2/',
            'http://lorempixel.com/600/600/sports/3/',
            'http://lorempixel.com/600/600/sports/10/',
            'http://lorempixel.com/600/600/sports/5/',
            'http://lorempixel.com/600/600/sports/6/',
            'http://lorempixel.com/600/600/sports/7/',
            'http://lorempixel.com/600/600/sports/8/',
            'http://lorempixel.com/600/600/sports/9/'
        ]

        var $imgContainer = $('.img_container');

        for (var i = 0; i < images.length; i++) {
            $imgContainer.append("<div class='img_box img_box-" + i + "'" + "style=background-image:url(" + images[i] + ")>" + i + "</div>")
        }

        var $imgBoxes = $imgContainer.children('.img_box')
        var img_width = $imgBoxes.outerWidth(true);
        $imgBoxes.first().before($imgBoxes.last());
        $imgContainer.css('left', -img_width + "px").css('width', img_width * images.length + "px")
    }

    /*    
        var handleLeftArrowClick = function () {
            var $imgContainer = $('.img_container');
            var $imgBoxes = $imgContainer.children('.img_box');
            var img_width = $imgBoxes.outerWidth(true);
            var left_move = parseInt($imgContainer.css('left'), 10) + img_width + 'px';
            var property = {
                left: left_move
            }
            var duration = 300;
            var moveElement = function () {
                $imgBoxes.first().before($imgBoxes.last());
                $imgContainer.css('left', -img_width + 'px');
            }

            $imgContainer.stop().animate(property, duration, moveElement);
        }

        var handleRightArrowClick = function () {
            var $imgContainer = $('.img_container');
            var $imgBoxes = $imgContainer.children('.img_box');
            var img_width = $imgBoxes.outerWidth(true);
            var left_move = parseInt($imgContainer.css('left'), 10) - img_width + 'px';
            var property = {
                left: left_move
            }
            var duration = 300;
            var moveElement = function () {
                $imgBoxes.last().after($imgBoxes.first());
                $imgContainer.css('left', -img_width + 'px');
            }

            $imgContainer.stop().animate(property, duration, moveElement);
        }
    */

    var handleArrowClick = function () {
        var $imgContainer = $('.img_container');
        var $imgBoxes = $imgContainer.children('.img_box');
        var img_width = $imgBoxes.outerWidth(true);
        var nameChecke = this.className
        var duration = 300;
        var left_move = parseInt($imgContainer.css('left'), 10) + img_width + 'px';
        var right_move = parseInt($imgContainer.css('left'), 10) - img_width + 'px';
        var property = function () {
            if (nameChecke === 'left_arrow arrow') {
                return {left: left_move}
            } else {
                return {left: right_move}
            }
        }
        var moveElement = function () {
            if (nameChecke === "left_arrow arrow") {
                $imgBoxes.first().before($imgBoxes.last());
            } else {
                $imgBoxes.last().after($imgBoxes.first());
            }
            $imgContainer.css('left', -img_width + 'px');
        }
        
        
        $imgContainer.stop().animate(property(), duration, moveElement);
    }

    $('.arrow').click(handleArrowClick);

    initialize()
});
