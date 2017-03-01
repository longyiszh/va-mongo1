const assert = require('assert');
const SDK = require('../models/SDK');

// Describe test group
describe('updating tests', () => {
    // create test 1 - update sdk test
    it('Update a SDK', (done) => {
        SDK.findOneAndUpdate({steveAttitude:'Impressed'}, {steveAttitude:'Delight'}).then(() => {
            assert(false);
            done();
        });
    });
    /* q.findOneAndUpdate({"name":"Fallout4"}, {"steveAttitude":"Delight"})
2017-02-07T10:33:10.078+0800 E QUERY    [thread1] Error: the update operation document must contain atomic operators :
DBCollection.prototype.findOneAndUpdate@src/mongo/shell/crud_api.js:789:1 */

});