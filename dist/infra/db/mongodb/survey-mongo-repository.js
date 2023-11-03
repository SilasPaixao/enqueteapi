"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyMongoRepository = void 0;
const db_1 = require("@/infra/db");
const mongodb_1 = require("mongodb");
class SurveyMongoRepository {
    async add(data) {
        const surveyCollection = db_1.MongoHelper.getCollection('surveys');
        await surveyCollection.insertOne(data);
    }
    async loadAll(accountId) {
        const surveyCollection = db_1.MongoHelper.getCollection('surveys');
        const query = new db_1.QueryBuilder()
            .lookup({
            from: 'surveyResults',
            foreignField: 'surveyId',
            localField: '_id',
            as: 'result'
        })
            .project({
            _id: 1,
            question: 1,
            answers: 1,
            date: 1,
            didAnswer: {
                $gte: [{
                        $size: {
                            $filter: {
                                input: '$result',
                                as: 'item',
                                cond: {
                                    $eq: ['$$item.accountId', new mongodb_1.ObjectId(accountId)]
                                }
                            }
                        }
                    }, 1]
            }
        })
            .build();
        const surveys = await surveyCollection.aggregate(query).toArray();
        return db_1.MongoHelper.mapCollection(surveys);
    }
    async loadById(id) {
        const surveyCollection = db_1.MongoHelper.getCollection('surveys');
        const survey = await surveyCollection.findOne({ _id: new mongodb_1.ObjectId(id) });
        return survey && db_1.MongoHelper.map(survey);
    }
    async loadAnswers(id) {
        var _a;
        const surveyCollection = db_1.MongoHelper.getCollection('surveys');
        const query = new db_1.QueryBuilder()
            .match({
            _id: new mongodb_1.ObjectId(id)
        })
            .project({
            _id: 0,
            answers: '$answers.answer'
        })
            .build();
        const surveys = await surveyCollection.aggregate(query).toArray();
        return ((_a = surveys[0]) === null || _a === void 0 ? void 0 : _a.answers) || [];
    }
    async checkById(id) {
        const surveyCollection = db_1.MongoHelper.getCollection('surveys');
        const survey = await surveyCollection.findOne({
            _id: new mongodb_1.ObjectId(id)
        }, {
            projection: {
                _id: 1
            }
        });
        return survey !== null;
    }
}
exports.SurveyMongoRepository = SurveyMongoRepository;
//# sourceMappingURL=survey-mongo-repository.js.map