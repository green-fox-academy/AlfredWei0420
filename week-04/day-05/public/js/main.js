'use strict';

(function () {

    var redditAPI, redditUI, REDDIT_HOST

    /**
     * Host of the reddit api
     *
     * @var {string}
     */
    REDDIT_HOST = 'http://localhost:8088';

    /**
     *
     * @var {RedditAPI}
     */
    redditAPI = new RedditAPI(REDDIT_HOST);

    /**
     *
     * @var {RedditUI}
     */
    redditUI = new RedditUI();

    /**
     *
     * @param {XMLHttpRequest}   xhr
     *
     * @returns {undefined}
     */
    function onFetchPostsResponse(xhr) {
        if (xhr.status === 200) {
            console.log('onFetchPostsResponse', xhr);
            redditUI.renderPosts(JSON.parse(xhr.responseText).posts);
        } else {
            //error handling
        }
    }

    /**
     *
     * @param {number}   postId
     * @param {string}   voteAction
     *
     * @returns {undefined}
     */
    function onVote(postId, voteAction) {
        redditAPI[voteAction]({
            postId: postId,
            username: sessionStorage.getItem('username')
        }, function (xhr) {
            var currentScore;
            if (xhr.status === 200) {
                currentScore = JSON.parse(xhr.responseText).score;
                redditUI.setVoteStatus(postId, voteAction, currentScore);
            }
        });
    }

    /**
     *
     * @param {number}   postId
     *
     * @returns {undefined}
     */
    function onDelete(postId) {
        redditAPI.deletePost({
            postId: postId,
            username: sessionStorage.getItem('username')
        }, function (xhr) {
            redditUI.removePost(postId);
        });

    }

    /**
     *
     * @param {string}   pathname
     *
     * @returns {string}
     */
    function getCurrentScreen(pathname) {
        return pathname.match(/add-post.html/)
                ? 'add-post'
                : 'index';
    }

    /**
     *
     * @returns {undefined}
     */
    function initializeIndexScreen() {
        redditUI.setRootElement(document.body.querySelector('main'));
        redditUI.setVoteListener(onVote);
        redditUI.setDeleteListener(onDelete);
        redditAPI.fetchPosts(onFetchPostsResponse, sessionStorage.getItem('username'));
    }

    /**
     *
     * @returns {undefined}
     */
    function initializeAddPostScreen() {
        document.body.addEventListener('submit', function (submitEvent) {
            var formElement = submitEvent.target;

            submitEvent.preventDefault();

            redditAPI.addPost({
                url: formElement.elements.namedItem('url').value,
                title: formElement.elements.namedItem('title').value,
                owner: formElement.elements.namedItem('is-anonymous').checked
                        ? null
                        : sessionStorage.getItem('username')
            }, function () {
                location.href = './index.html'
            });
        });
    }

    window.addEventListener('load', function () {
        switch (getCurrentScreen(location.pathname)) {
            case 'add-post':
                initializeAddPostScreen();
                break;
            default:
                initializeIndexScreen();
                break;
        }
    });
})();