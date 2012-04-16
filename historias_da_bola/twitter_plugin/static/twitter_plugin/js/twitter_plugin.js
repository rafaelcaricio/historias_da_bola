$(function() {

    $.widget("historiasdabola.TwitterPlugin", {

        options: {
            user: null,
            term: null,
            tweets: 4
        },

        twitterAPI: {
            search: 'http://search.twitter.com/search.json',
            user: 'http://api.twitter.com/1/statuses/user_timeline.json'
        },

        _create: function() {
            this.elements = {};
            this._createBasicMarkup();
            this._pullTweets();
        },

        _createBasicMarkup: function() {
            this.element.append([
                '<section class="twitter-reactions">',
                    '<div class="container">',
                        '<div class="sixteen columns title">',
                            '<h3>acompanhe no twitter</h3>',
                        '</div>',
                        '<div class="sixteen columns tweets">',
                        '</div>',
                    '</div>',
                '</section>'
            ].join(''));

            this.elements.tweets = this.element.find('.tweets');
        },

        _pullTweets: function() {
            var url,
                params = {
                    include_entities: true,
                    rpp: this.options.tweets
                };

            if (this.options.user) {
                url = this.twitterAPI.user;
                params.screen_name = this.options.user;
            } else if (this.options.term) {
                url = this.twitterAPI.search;
                params.q = this.options.term;
            } else {
                throw 'TwitterPlugin: you need to pass a search term or username.';
            }

            $.ajax(url, {
                jsonp: true,
                data: params,
                success: $.proxy(this._onTweetsArrive, this)
            });
        },

        _onTweetsArrive: function(data) {
            $.each(data, $.proxy(function(i, tweet) {
                this.appendTweet(tweet);
            }, this));
        },

        _hash: function() {
            return '';
        },

        _mention: function() {
            return '';
        },

        _link: function() {
            return '';
        },

        _appendTweet: function(tweet) {
            this.elements.tweets.append([
                '',
                ''
            ].join(''));
        }

    });

});
