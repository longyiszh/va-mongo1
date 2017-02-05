const assert = require('assert');
const SDK = require('../models/SDK');

// Describe test group
describe('saving tests', () => {
    // create test 1 - sdk test
    it('Save SDK', (done) => {
        let TESV = new SDK({
            name: "Elder Scroll v",
            price: "￥21",
            platform: "Steam",
            receiver: "Billy",
            steveAttitude: "Desired"
        });

        TESV.save().then( ()=> {
            assert(TESV.isNew === false);
            done();
            //save()是一个Async方法，所以不能直接在底下写assert判断通过。
            //isNew为true时表示在本地创建但是没有提交到数据库，为false时表示已经创建并成功保存在了数据库。
            //因为使用了Async方法，所以要手动指定何时完成。done()表示测试完成。
        });

    });
});