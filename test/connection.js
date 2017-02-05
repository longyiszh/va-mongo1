const mongoose = require("mongoose");
const SDK = require('../models/SDK');

//mongoose的默认promises已经deprecated了！
// ES6 Promises
mongoose.Promise = global.Promise;

const db = "CDK";

//connect to mongodb before running tests
before((done) => {
    // Connect to mongodb

    mongoose.connect(`mongodb://localhost/${ db }`);

    mongoose.connection
    .once('open', () => {
        console.log(`Connection to ${ db } established successfully.`);
        done();
    })
    .on('error', (error) => {
        console.error(error);
    })
    ;

    // connect是一个Async方法。
    //因为使用了Async方法，所以要手动指定何时完成。done()表示测试完成。
});

beforeEach((done)=>{
    //Drop the Collection
    mongoose.connection.collections.sdks.drop(()=>{
        done();
    });
    // drop是一个Async方法。
    //因为使用了Async方法，所以要手动指定何时完成。done()表示测试完成。
});

