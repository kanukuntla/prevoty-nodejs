var apiKey = 'api key goes here';
var ruleKey = 'rule key goes here';
var input = 'the <script>alert("quick brown fox");</script> jumps over the lazy dog & mouse';

var prevoty = require('../src/prevoty.js').client({ key: apiKey });

// Verify
prevoty.verify(function(err, verified) {
  if (verified) {
    console.log('Key is verified!')
    // Info
    prevoty.info(function(err, info) {
      if (!err) {
        console.log('Key info:', info);
        // Filter
        prevoty.filter(input, ruleKey, function(err, filtered) {
          if (!err) {
            console.log('Filter:', filtered);
          }
          else {
            console.log('Filter failed:', err);
          }
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
