function PostBuilder() {

    /**
     *
     * @param {Object}   postData
     *
     * @returns {HTMLSpanElement}
     */
    function createPostIndexElement(idx) {
        //<span>1</span>
        var postIndexElement = document.createElement('span');
        postIndexElement.appendChild(document.createTextNode(idx));
        return postIndexElement;
    }

    /**
     *
     * @param {Object}   postData
     *
     * @returns {HTMLDivElement}
     */
    function createVoteInfoElement(postData) {
        //<div class="vote-info">
        //    <button data-action="upvote"></button>
        //    <span class="vote-counter">1023</span>
        //    <button data-action="downvote"></button>
        //</div>
        var voteInfoContainer, upvoteButton, voteCounter, downvoteButton;

        upvoteButton = document.createElement('button');
        upvoteButton.setAttribute('data-action', 'upvote');
        upvoteButton.disabled = postData.vote > 0;

        voteCounter = document.createElement('span');
        voteCounter.classList.add('vote-counter');
        voteCounter.appendChild(document.createTextNode(postData.score));

        downvoteButton = document.createElement('button');
        downvoteButton.setAttribute('data-action', 'downvote');
        downvoteButton.disabled = postData.vote < 0;


        voteInfoContainer = document.createElement('div');
        voteInfoContainer.classList.add('vote-info');
        voteInfoContainer.setAttribute('data-original-score', postData.score - postData.vote);
        voteInfoContainer.appendChild(upvoteButton);
        voteInfoContainer.appendChild(voteCounter);
        voteInfoContainer.appendChild(downvoteButton);
        return voteInfoContainer;
    }

    /**
     *
     * @param {Object}   postData
     *
     * @returns {HTMLDivElement}
     */
    function createPostInfoElement(postData) {
        //<div class="post-info">
        //    <h2>
        //        <a href="#">Some dummy text as post title</a>
        //    </h2>
        //    <p>
        //        submitted 7 months ago
        //        by anonymous
        //    </p>
        //    <div class="post-actions-container">
        //        <a class="modify-post" href="#">modify</a>
        //        <button data-action="remove">remove</button>
        //    </div>
        //</div>
        var infoContainer, postTitle, postAnchor, postDetails, postActionsContainer, modifyAnchor, removeButton;

        infoContainer = document.createElement('div');
        infoContainer.classList.add('post-info');

        postAnchor = document.createElement('a');
        postAnchor.href = postData.href;
        postAnchor.appendChild(document.createTextNode(postData.title));

        postTitle = document.createElement('h2');
        postTitle.appendChild(postAnchor);

        postDetails = document.createElement('p');
        postDetails.appendChild(document.createTextNode('submitted ' + postData.minutesSincePublished + ' minutes ago'));
        postDetails.appendChild(document.createTextNode('by ' + postData.owner));

        modifyAnchor = document.createElement('a');
        modifyAnchor.classList.add('modify-post');
        modifyAnchor.href = '#';
        modifyAnchor.appendChild(document.createTextNode('modify'));

        removeButton = document.createElement('button');
        removeButton.setAttribute('data-action', 'remove-post');
        removeButton.appendChild(document.createTextNode('remove'));

        postActionsContainer = document.createElement('div');
        postActionsContainer.classList.add('post-actions-container');

        postActionsContainer.appendChild(modifyAnchor);
        postActionsContainer.appendChild(removeButton);

        infoContainer.appendChild(postTitle);
        infoContainer.appendChild(postDetails);
        infoContainer.appendChild(postActionsContainer);

        return infoContainer;
    }

    /**
     *
     * @param {Object}   postData
     *
     * @returns {HTMLDivElement}
     */
    this.createPostElement = function (postData) {
        //<div class="post" data-id="1">
        //</div>
        var postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.setAttribute('data-id', postData.id);

        [
            createPostIndexElement(postData.postIndex),
            createVoteInfoElement(postData),
            createPostInfoElement(postData)
        ].forEach(function (postElementChild) {
            postElement.appendChild(postElementChild);
        });

        return postElement;
    }
}