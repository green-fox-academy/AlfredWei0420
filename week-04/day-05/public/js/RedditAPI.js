function RedditAPI(hostname) {

    /**
     *
     * @param {Function}   callback
     *
     * @returns {XMLHttpRequest}
     */
    function createXmlHttpRequest(callback) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                callback(xhr);
            }
        });
        return xhr;
    }

    /**
     *
     * @param {XMLHttpRequest}   xhr
     * @param {Array}            headerValues
     *
     * @returns {undefined}
     */
    function setRequestHeaders(xhr, headerValues) {
        headerValues
                .filter(function (headerItem) {
                    return headerItem[1] !== null;
                })
                .forEach(function (headerItem) {
                    xhr.setRequestHeader.apply(xhr, headerItem);
                });
    }

    /**
     *
     * @param {string}     path
     * @param {Function}   callback
     *
     * @returns {undefined}
     */
    function sendGetRequest(path, additionalHeaders, callback) {
        var xhr = createXmlHttpRequest(callback);
        xhr.open('GET', [hostname, path].join('/'));

        setRequestHeaders(xhr, [
            ['accept', 'application/json']
        ].concat(additionalHeaders))

        xhr.send();
    }

    /**
     *
     * @param {number}     postId
     * @param {Array}      additionalHeaders
     * @param {Function}   callback
     *
     * @returns {undefined}
     */
    function sendDeleteRequest(path, additionalHeaders, callback) {
        var xhr = createXmlHttpRequest(callback);
        xhr.open('DELETE', [hostname, path].join('/'));

        setRequestHeaders(xhr, [
            ['accept', 'application/json'],
            ['content-type', 'application/json'],
        ].concat(additionalHeaders))

        xhr.send();
    }

    /**
     *
     * @param {string}     path
     * @param {Array}      additionalHeaders
     * @param {Function}   callback
     *
     * @returns {undefined}
     */
    function sendPutRequest(path, additionalHeaders, callback) {
        var xhr = createXmlHttpRequest(callback);
        xhr.open('PUT', [hostname, path].join('/'));

        setRequestHeaders(xhr, [
            ['accept', 'application/json'],
            ['content-type', 'application/json'],
        ].concat(additionalHeaders))

        xhr.send();
    }

    /**
     *
     * @param {string}     path
     * @param {Object}     requestBody
     * @param {Array}      additionalHeaders
     * @param {Function}   callback
     *
     * @returns {undefined}
     */
    function sendPostRequest(path, requestBody, additionalHeaders, callback) {
        var xhr = createXmlHttpRequest(callback);
        xhr.open('POST', [hostname, path].join('/'));

        setRequestHeaders(xhr, [
            ['accept', 'application/json'],
            ['content-type', 'application/json'],
        ].concat(additionalHeaders))

        xhr.send(JSON.stringify(requestBody));
    }

    /**
     *
     * @param {Function}   callback
     *
     * @returns {undefined}
     */
    this.fetchPosts = function (callback, username) {
        sendGetRequest('posts', [
            ['username', username]
        ], callback);
    };

    /**
     *
     * @param {Object}     postData
     * @param {Function}   callback
     *
     * @returns {undefined}
     */
    this.addPost = function (postData, callback) {
        sendPostRequest('posts', {
            url: postData.url,
            title: postData.title
        }, [
            ['username', postData.owner]
        ], callback);
    };

    /**
     *
     * @param {Object}     postData
     * @param {Function}   callback
     *
     * @returns {undefined}
     */
    this.deletePost = function (postData, callback) {
        sendDeleteRequest(['posts', postData.postId].join('/'), [
            ['username', postData.owner]
        ], callback);
    };

    /**
     *
     * @param {Object}     postData
     * @param {Function}   callback
     *
     * @returns {undefined}
     */
    this.upvote = function (postData, callback) {
        sendPutRequest(['posts', postData.postId, 'upvote'].join('/'), [
            ['username', postData.username]
        ], callback);
    }

    /**
     *
     * @param {Object}     postData
     * @param {Function}   callback
     *
     * @returns {undefined}
     */
    this.downvote = function (postData, callback) {
        sendPutRequest(['posts', postData.postId, 'downvote'].join('/'), [
            ['username', postData.username]
        ], callback);
    }
}