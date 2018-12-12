/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
    /*
        Returns a tweet <article> containing the entire html structure.
    */
    const tweetData = {
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
    }
    function createTweetElement (tweetObj) {
        console.log(tweetObj);
        var $tweet = $("<article>").addClass("tweet").html(`
            <h1> testing </h1>
            <p>another test</p>
        `);
        return $tweet[0]
    }

    var $tweet = createTweetElement(tweetData);

    // Test / driver code (temporary)
    console.log($tweet); // to see what it looks like
    $('#tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});


