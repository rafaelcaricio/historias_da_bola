$(function() {

    $.widget("historiasdabola.TwitterPlugin", {

        options: {
            user: null,
            term: null,
            tweets: 4
        },

        twitterAPI: {
            search: 'http://search.twitter.com/search.json?&q=globo.com&rpp=4&include_entities=1&callback=jsonp1333819876214',
            user: 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=rafaelcaricio&count=4&include_entities=1&callback=jsonp1333819756736'
        },

        _create: function() {
            this._createBasicMarkup();
            this._pullTweets();
        },

        _createBasicMarkup: function() {
            ;
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
