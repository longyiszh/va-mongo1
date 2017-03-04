const assert = require('assert');
const SDK = require('../models/SDK');


// test data
// Mongoose创建对象后会自动加入_id字段。这里的测试数据是在模拟这个。根据实际情况进行修改。
var tesv = {
    _id: "5896a2c39e33581d9f6fd953"
};

// Describe test group
describe('finding tests', () => {
    // create test 1 - find sdk test
    it('Find a SDK recieved by Billy', (done) => {
        SDK.findOne({receiver:'Billy'}).then((result)=>{
            assert(result.receiver === 'Billy');
            done();
        });
    });

    // create test 2 - find sdk test by ID
    it('Find a SDK by ID', (done) => {
        SDK.findOne({_id: tesv._id}).then((result)=>{
            assert(result._id.toString() === tesv._id.toString());
            done();
            // 为啥要toString()？因为result._id是对象，Mongo中显示：ObjectId("5896a2c39e33581d9f6fd953")
            // 两个不同的对象是不会全等的。但是两个对象toString()后就相等了
        });
    });

});