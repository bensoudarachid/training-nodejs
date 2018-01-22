'use strict';

/**
 * @name        Shuffle Letters
 * @author        Martin Angelov
 * @version    1.0
<<<<<<< HEAD
 * @url            http:
=======
 * @url            http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
 * @license        MIT License
 */

(function ($) {
<<<<<<< HEAD
    $.fn.shuffleLetters = function (prop) {

        var options = $.extend({
            'step': 4,
            'fps': 15,
            'text': '',
            'callback': function callback() {}
        }, prop);
=======

    $.fn.shuffleLetters = function (prop) {

        var options = $.extend({
            'step': 4, // How many times should the letters be changed
            'fps': 15, // Frames Per Second
            'text': '', // Use this text instead of the contents
            'callback': function callback() {}
            // console.log('done')

            // Run once the animation is complete
        }, prop);

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        return this.each(function () {

            var el = $(this),
                str = '';

<<<<<<< HEAD
            if (el.data('animated')) {
                return true;
            }
            el.data('animated', true);
=======
            // Preventing parallel animations using a flag;

            if (el.data('animated')) {
                return true;
            }

            el.data('animated', true);

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            if (options.text) {
                str = options.text.split('');
            } else {
                str = el.text().split('');
            }

<<<<<<< HEAD
            var types = [],
                letters = [];
=======
            // The types array holds the type for each character;
            // Letters holds the positions of non-space characters;

            var types = [],
                letters = [];

            // Looping through all the chars of the string

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
            for (var i = 0; i < str.length; i++) {

                var ch = str[i];

                if (ch == ' ') {
                    types[i] = 'space';
                    continue;
                } else if (/[a-z]/.test(ch)) {
                    types[i] = 'lowerLetter';
                } else if (/[A-Z]/.test(ch)) {
                    types[i] = 'upperLetter';
                } else {
                    types[i] = 'symbol';
                }

                letters.push(i);
            }

            el.html('');

<<<<<<< HEAD
            (function shuffle(start) {
                var i,
                    len = letters.length,
                    strCopy = str.slice(0);

                if (start > len) {

=======
            // Self executing named function expression:

            (function shuffle(start) {

                // This code is run options.fps times per second
                // and updates the contents of the page element

                var i,
                    len = letters.length,
                    strCopy = str.slice(0); // Fresh copy of the string

                if (start > len) {

                    // The animation is complete. Updating the
                    // flag and triggering the callback;

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
                    el.data('animated', false);
                    options.callback(el);
                    return;
                }
<<<<<<< HEAD
                for (i = Math.max(start, 0); i < len; i++) {

                    if (i < start + options.step) {

                        strCopy[letters[i]] = randomChar(types[letters[i]]);
                    } else {
                        strCopy[letters[i]] = '';
                    }
                }
                el.text(strCopy.join(''));

                setTimeout(function () {

                    shuffle(start + 1);
                }, 1000 / options.fps);
            })(-options.step);
        });
    };

    function randomChar(type) {
        var pool = '';

        if (type == 'lowerLetter') {
            pool = 'abcdefghijklmnopqrstuvwxyz0123456789';
        } else if (type == 'upperLetter') {
            pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        } else if (type == 'symbol') {
            pool = ',.?/\\(^)![]{}*&^%$#\'"';
        }

=======

                // All the work gets done here
                for (i = Math.max(start, 0); i < len; i++) {

                    // The start argument and options.step limit
                    // the characters we will be working on at once

                    if (i < start + options.step) {
                        // Generate a random character at thsi position
                        strCopy[letters[i]] = randomChar(types[letters[i]]);
                    } else {
                        strCopy[letters[i]] = '';
                    }
                }

                el.text(strCopy.join(''));

                setTimeout(function () {

                    shuffle(start + 1);
                }, 1000 / options.fps);
            })(-options.step);
        });
    };

    function randomChar(type) {
        var pool = '';

        if (type == 'lowerLetter') {
            pool = 'abcdefghijklmnopqrstuvwxyz0123456789';
        } else if (type == 'upperLetter') {
            pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        } else if (type == 'symbol') {
            pool = ',.?/\\(^)![]{}*&^%$#\'"';
        }

>>>>>>> 925bab295a612c10fec264cbcabc75c90e8ed985
        var arr = pool.split('');
        return arr[Math.floor(Math.random() * arr.length)];
    }
})(jQuery);