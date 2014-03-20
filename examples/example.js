var api_key = 'api key goes here';

var trusted_content_configuration = "configuration key goes here";
var trusted_content_payload = "the <script>alert('quick brown fox');</script> jumps over the lazy dog & mouse";

var trusted_token_user = "example_user";
var trusted_token_action = "example_action";
var trusted_token_ttl = "1000";

var trusted_query_configuration = "configuration key goes here";
var trusted_query_payload = "SELECT * FROM Commitments";

var link = "http://google.com";

var prevoty = require('../src/prevoty.js').client({ key: api_key });

// Verify
prevoty.verify(function(err, verified) {
  if (verified) {
    console.log('Key is verified!')
    // Info
    prevoty.info(function(err, info) {
      if (!err) {
        console.log('Key info:', info);
        // Filter Content
        prevoty.filter_content(trusted_content_payload, trusted_content_configuration, function(err, filtered) {
          if (!err) { console.log('Filter:', filtered); }
          else { console.log('Filter content failed:', err); }
        });
        // Token Generation -> Validation
        prevoty.generate_token(trusted_token_user, trusted_token_action, trusted_token_ttl, function(err, generation_response) {
          if (!err) { 
            console.log('First token generation:', generation_response); 
            prevoty.validate_token(trusted_token_user, trusted_token_action, generation_response.token, function(err, validation_response) {
              if (!err) { console.log('First token validation:', validation_response); }
              else { console.log('First token validation failed:', err); }
            });
          }
          else { console.log('First token generation failed:', err); }
        });
        // Token Deletion
        prevoty.generate_token(trusted_token_user, trusted_token_action, trusted_token_ttl, function(err, generation_response) {
          if (!err) { 
            console.log('Second token generation:', generation_response); 
            prevoty.delete_token(trusted_token_user, trusted_token_action, generation_response.token, function(err, deletion_response) {
              if (!err) { console.log('Second token deletion:', deletion_response); }
              else { console.log('Second token deletion failed:', err); }
            });
          }
          else { console.log('Second token deletion failed:', err); }
        });
        // Query
        prevoty.analyze_query(trusted_query_payload, trusted_query_configuration, function(err, analysis) {
          if (!err) { console.log('Query analysis:', analysis); }
          else { console.log('Query analysis failed:', err); }
        });
        // Link Analysis
        prevoty.analyze_link(link, function(err, analysis) {
          if (!err) { console.log('Link analysis:', analysis); }
          else { console.log('Link analysis failed:', err); }
        });
      }
      else {
        console.log('Info call failed:', err);
      }
    });
  }
  else {
    console.log('Key is not verified:', err);
  }
});
