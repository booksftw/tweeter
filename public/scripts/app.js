/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
    /*
        Returns a tweet <article> containing the entire html structure.
    */
    // Fake data taken from tweets.json
    const data = [
        {
            "user": {
                "name": "Newton",
                "avatars": {
                    "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
                    "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
                    "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
                },
                "handle": "@SirIsaac"
            },
            "content": {
                "text": "If I have seen further it is by standing on the shoulders of giants"
            },
            "created_at": 1461116232227
        },
        {
            "user": {
                "name": "Descartes",
                "avatars": {
                    "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
                    "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
                    "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
                },
                "handle": "@rd" },
            "content": {
                "text": "Je pense , donc je suis"
            },
            "created_at": 1461113959088
        },
        {
            "user": {
                "name": "Johann von Goethe",
                "avatars": {
                    "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
                    "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
                    "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
                },
                "handle": "@johann49"
            },
            "content": {
                "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
            },
            "created_at": 1461113796368
        }
    ];

    function renderTweets(tweets) {
        // loops through tweets
        // calls createTweetElement for each tweet
        // takes return value and appends it to the tweets container

        for(let x of tweets) {
            const tweet = createTweetElement(x);
            console.log(tweet , 'tweet')
            $('div#tweet-container').append(tweet);
        }
    }
    function createTweetElement (tweetObj) {

            var $tweet = $("<article>").addClass("tweet").html(`
                <header>
                    <img src="${tweetObj.user.avatars.regular}" alt="avatar"> 
                    <h2>${tweetObj.user.name}</h2> 
                    <p>${tweetObj.user.handle}</p>
                </header>
                <p>${tweetObj.content.text}</p>
                <footer><p><em>created at: ${tweetObj.created_at}</em></p></footer>
            `);

        return $tweet[0]
    }
    renderTweets(data);

    // var $tweet = createTweetElement(tweetData);
    //
    // // Test / driver code (temporary)
    // console.log($tweet); // to see what it looks like
    // $('#tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});


