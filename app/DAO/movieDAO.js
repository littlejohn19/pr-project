import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const movieSchema = new mongoose.Schema({
    title: {type: String},
    image: {type: String},
    content: {type: String},
}, {
    collection: 'movie'
});
movieSchema.plugin(uniqueValidator);

const MovieModel = mongoose.model('post', movieSchema);

async function query() {
    const result = await MovieModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function get(id) {
    return MovieModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function search(content) {
    return MovieModel.find(content).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function createNewOrUpdate(data) {
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new MovieModel(data).save().then(result => {
                if (result) {
                    return mongoConverter(result);
                }
            });
        } else {
            return MovieModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
        }
    });
}

export default {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
    search,

    model: MovieModel
};
