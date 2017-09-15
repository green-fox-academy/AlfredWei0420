function RedditUI() {

    var rootElement, voteListener, deleteListener, postBuilder;

    /**
     * @var {PostBuilder}
     */
    postBuilder = new PostBuilder();

    /**
     *
     * @param {MouseEvent}   clickEvent
     *
     * @returns {undefined}
     */
    function onPostClick(clickEvent) {

        if (['upvote', 'downvote'].indexOf(clickEvent.target.getAttribute('data-action')) > -1) {
            voteListener(
                    parseInt(clickEvent.currentTarget.getAttribute('data-id'), 10),
                    clickEvent.target.getAttribute('data-action'));
        } else if (clickEvent.target.getAttribute('data-action') === 'remove-post') {
            deleteListener(parseInt(clickEvent.currentTarget.getAttribute('data-id'), 10));
        }
    }

    /**
     *
     * @param {Object}   rawPostDescriptor
     *
     * @returns {Object}
     */
    function setDefaultValuesForPost(rawPostDescriptor) {
        return {
            title: rawPostDescriptor.title || 'Untitled',
            href: rawPostDescriptor.href || '#',
            owner: rawPostDescriptor.owner || 'anonymous',
            score: rawPostDescriptor.score,
            timestamp: rawPostDescriptor.timestamp,
            id: rawPostDescriptor.id,
            vote: rawPostDescriptor.vote || 0
        };
    }

    /**
     *
     * @param {Object}   postData
     *
     * @returns {Object}
     */
    function setElapsedTimeForPost(postData) {
        var elapsedMilliSeconds = Date.now() - new Date(postData.timestamp);
        postData.minutesSincePublished = Math.round(elapsedMilliSeconds / 1000 / 60);
        return postData;
    }

    /**
     *
     * @param {Object}   postDataToRender
     * @param {number}   idx
     *
     * @returns {HTMLDivElement}
     */
    function createPostElement(postDataToRender, idx) {
        var postElement;
        postDataToRender.postIndex = idx + 1;
        postElement = postBuilder.createPostElement(postDataToRender);
        postElement.addEventListener('click', onPostClick);
        return postElement;
    }

    /**
     *
     * @param {Function}   callback
     *
     * @returns {undefined}
     */
    this.setDeleteListener = function (callback) {
        deleteListener = callback;
    }

    /**
     *
     * @param {Function}   callback
     *
     * @returns {undefined}
     */
    this.setVoteListener = function (callback) {
        voteListener = callback;
    }

    /**
     *
     * @param {HTMLElement}   element
     *
     * @returns {undefined}
     */
    this.setRootElement = function (element) {
        rootElement = element;
    }

    /**
     *
     * @param {Object}   posts
     *
     * @returns {undefined}
     */
    this.renderPosts = function (posts) {
        console.log('posts: ', posts);
        posts
                .map(setDefaultValuesForPost)
                .map(setElapsedTimeForPost)
                .map(createPostElement)
                .forEach(rootElement.appendChild.bind(rootElement));
    }

    /**
     *
     * @param {number}   postId
     * @param {string}   action
     * @param {number}   currentScore
     *
     * @returns {undefined}
     */
    this.setVoteStatus = function (postId, action, currentScore) {
        var voteInfoElement = rootElement.querySelector('.post[data-id="' + postId + '"] > .vote-info');
        if (voteInfoElement !== null) {
            voteInfoElement.querySelector('.vote-counter').textContent = currentScore;
            voteInfoElement.querySelectorAll('button').forEach(function (buttonElement) {
                buttonElement.disabled = buttonElement.getAttribute('data-action') === action
                        && currentScore !== parseInt(voteInfoElement.getAttribute('data-original-score'), 10);
            });
        }
    }

    /**
     *
     * @param {number}   postId
     *
     * @returns {undefined}
     */
    this.removePost = function (postId) {
        var postElement = rootElement.querySelector('.post[data-id="' + postId + '"]');
        if (postElement !== null) {
            rootElement.removeChild(postElement);
        }
    }
}