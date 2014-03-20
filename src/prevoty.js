var request = require('request');

var Prevoty = (function() {
  function Prevoty(options) {
    this.base = 'https://api.prevoty.com/1';
    this.key = options.key;
  }
  
  // Endpoint: /key/verify
  Prevoty.prototype.verify = function(callback) {
    var options = {
      'url' : this.base + '/key/verify?api_key=' + this.key
    };
    request.get(options, function (error, response, body) {
      if (!error) {
        if (response.statusCode == 200) { return callback(null, true); }
        if (response.statusCode == 400) { return callback('api_key is required', false); }
        if (response.statusCode == 403) { return callback('api_key is invalid', false); }
        if (response.statusCode == 500) { return callback('Internal server error', false); }
      }
      return callback('Unknown error', false);
    });
  };

  // Endpoint: /key/info
  Prevoty.prototype.info = function(callback) {
    var options = {
      'url' : this.base + '/key/info?api_key=' + this.key,
      'json' : true
    };
    request.get(options, function (error, response, body) {
      if (!error) {
        if (response.statusCode == 200) { return callback(null, body); }
        if (response.statusCode == 400) { return callback('api_key is required', false); }
        if (response.statusCode == 403) { return callback('api_key is invalid', false); }
        if (response.statusCode == 500) { return callback('Internal server error', false); }
      }
      return callback('Unknown error', false);
    });
  };

  // Endpoint: /rule/verify
  Prevoty.prototype.verifyConfiguration = function(configurationKey, callback) {
    var options = {
      'url' : this.base + '/rule/verify?api_key=' + this.key + '&rule_key=' + configurationKey
    };
    request.get(options, function (error, response, body) {
      if (!error) {
        if (response.statusCode == 200) { return callback(null, true); }
        if (response.statusCode == 400) { return callback('api_key and rule_key are required', false); }
        if (response.statusCode == 403) { return callback('api_key is invalid', false); }
        if (response.statusCode == 500) { return callback('Internal server error', false); }
      }
      return callback('Unknown error', false);
    });
  };

  // Endpoint: /xss/filter
  Prevoty.prototype.filter_content = function(input, configuration_key, callback) {
    var options = {
      'url' : this.base + '/xss/filter',
      'json' : true,
      'form' : {
        'api_key' : this.key,
        'input' : input,
        'rule_key' : configuration_key
      }
    };
    request.post(options, function (error, response, body) {
      if (!error) {
        if (response.statusCode == 200) { return callback(null, body); }
        if (response.statusCode == 400) { return callback('api_key is required', false); }
        if (response.statusCode == 403) { return callback('api_key is invalid', false); }
        if (response.statusCode == 500) { return callback('Internal server error', false); }
      }
      return callback('Unknown error', false);
    });
  };

  // Endpoint: /url/results
  Prevoty.prototype.analyze_link = function(url, callback) {
    var options = {
      'url' : this.base + '/url/results?api_key=' + this.key + '&url=' + url,
      'json' : true,
    };
    request.get(options, function (error, response, body) {
      if (!error) {
        if (response.statusCode == 200) { return callback(null, body); }
        if (response.statusCode == 400) { return callback('api_key and rule_key are required', false); }
        if (response.statusCode == 403) { return callback('api_key is invalid', false); }
        if (response.statusCode == 500) { return callback('Internal server error', false); }
      }
      return callback('Unknown error', false);
    });
  };

  // Endpoint: /token/timed/generate
  Prevoty.prototype.generate_token = function(user_identifier, action, ttl, callback) {
    var options = {
      'url' : this.base + '/token/timed/generate?api_key=' + this.key + '&user_identifier=' + user_identifier + '&action=' + action + '&ttl=' + ttl,
      'json' : true
    };
    request.get(options, function (error, response, body) {
      if (!error) {
        if (response.statusCode == 200) { return callback(null, body); }
        if (response.statusCode == 400) { return callback('api_key and rule_key are required', false); }
        if (response.statusCode == 403) { return callback('api_key is invalid', false); }
        if (response.statusCode == 500) { return callback('Internal server error', false); }
      }
      return callback('Unknown error', false);
    });
  };

  // Endpoint: /token/timed/validate
  Prevoty.prototype.validate_token = function(user_identifier, action, token, callback) {
    var options = {
      'url' : this.base + '/token/timed/validate?api_key=' + this.key + '&user_identifier=' + user_identifier + '&action=' + action + '&token=' + token,
      'json' : true
    };
    request.get(options, function (error, response, body) {
      if (!error) {
        if (response.statusCode == 200) { return callback(null, body); }
        if (response.statusCode == 400) { return callback('api_key and rule_key are required', false); }
        if (response.statusCode == 403) { return callback('api_key is invalid', false); }
        if (response.statusCode == 500) { return callback('Internal server error', false); }
      }
      return callback('Unknown error', false);
    });
  };

  // Endpoint: /token/timed/delete
  Prevoty.prototype.delete_token = function(user_identifier, action, token, callback) {
    var options = {
      'url' : this.base + '/token/timed/delete?api_key=' + this.key + '&user_identifier=' + user_identifier + '&action=' + action + '&token=' + token,
      'json' : true
    };
    request.get(options, function (error, response, body) {
      if (!error) {
        if (response.statusCode == 200) { return callback(null, body); }
        if (response.statusCode == 400) { return callback('api_key and rule_key are required', false); }
        if (response.statusCode == 403) { return callback('api_key is invalid', false); }
        if (response.statusCode == 500) { return callback('Internal server error', false); }
      }
      return callback('Unknown error', false);
    });
  };

  // Endpoint: /query/parse
  Prevoty.prototype.analyze_query = function(query, configuration_key, callback) {
    var options = {
      'url' : this.base + '/query/parse',
      'json' : true,
      'form' : {
        'api_key' : this.key,
        'query' : query,
        'config_key' : configuration_key
      }
    };
    request.post(options, function (error, response, body) {
      if (!error) {
        if (response.statusCode == 200) { return callback(null, body); }
        if (response.statusCode == 400) { return callback('api_key is required', false); }
        if (response.statusCode == 403) { return callback('api_key is invalid', false); }
        if (response.statusCode == 500) { return callback('Internal server error', false); }
      }
      return callback('Unknown error', false);
    });
  };

  return Prevoty;
})();

module.exports = {
  'client' : function(key) {
    return new Prevoty(key);
  }
};
