const assert = require('assert');
const mongoose = require('mongoose');
const Giver = require('../models/Giver');

//Description of this test
describe('Nesting records (Relational data test)', () => {

    beforeEach((done) => {
        mongoose.connection.collections.givers.drop(()=>{
            done();
        });
    });
});

//Create test nesting (relational data)
it('Creates a giver with planned CDKs', (done) => {

    let steve = new Giver({
        name: "Steve",
        planedCDK: [{name: "TESV", receiver: "Mile"}]
    });

    steve.save().then(()=>{
        Giver.findOne({name: 'Steve'}).then((record) => {
            assert(record.planedCDK.length === 1);
            done();
        });
    });
});

it('Adds a planned cdk manually to a giver', (done) => {

    let steve = new Giver({
        name: "Steve",
        planedCDK: [{name: "Mass Effect Armanda", receiver: "Xiaomajia"}]
    });

    steve.save().then(() => {
        Giver.findOne({name: 'Steve'}).then((record) => {
            // add a planned cdk to the cdk array
            record.planedCDK.push({name: 'Battlefied 1', receiver: "Billy"});
            record.save().then(() => {
                Giver.findOne({name: 'Steve'}).then((result) => {
                    assert(result.planedCDK.length === 2);
                    done();
                });
            });
        });
    });
});

