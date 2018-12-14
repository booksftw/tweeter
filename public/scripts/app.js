/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
    /*
        Returns a tweet <article> containing the entire html structure.
    */

    function clearTweet(tweets) {
        $('div#tweet-container').empty()
        renderTweets(tweets);
    }

    function renderTweets(tweets) {
        // loops through tweets
        // calls createTweetElement for each tweet
        // takes return value and appends it to the tweets container

        // Remove the inner nodes

        // Create them
        for(let x of tweets) {
            const tweet = createTweetElement(x);
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

   function loadTweets() {
        const actionUrl = "http://localhost:8080/tweets";

        function success(d) {
            let sortedD = d.sort(function(a, b) {
                return b.created_at - a.created_at;
            })
            clearTweet(sortedD);
        }
       $.ajax({
           url: actionUrl,
           type: "GET",
           success: success,
       })
    }

    function escape(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    // Post
    $('section.new-tweet form').submit(function(e){
        e.preventDefault();

        let formAction        = e.target.action;
        let formVal           = e.target[0].value;
        e.target[0].value = escape(e.target[0].value);
        let formValSerialized = $(this).serialize();

        if (formVal !== '' && formVal.length <= 140) {
            $.post(formAction, formValSerialized, function() {
                loadTweets()
            })
        } else {
            // alert("Invalid form submission")
        }
    })

    loadTweets() // Loads the intial tweets
});


