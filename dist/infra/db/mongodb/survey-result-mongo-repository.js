"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyResultMongoRepository = void 0;
const db_1 = require("@/infra/db");
const mongodb_1 = require("mongodb");
const mongo_round_1 = __importDefault(require("mongo-round"));
class SurveyResultMongoRepository {
    async save(data) {
        const surveyResultCollection = db_1.MongoHelper.getCollection('surveyResults');
        await surveyResultCollection.findOneAndUpdate({
            surveyId: new mongodb_1.ObjectId(data.surveyId),
            accountId: new mongodb_1.ObjectId(data.accountId)
        }, {
            $set: {
                answer: data.answer,
                date: data.date
            }
        }, {
            upsert: true
        });
    }
    async loadBySurveyId(surveyId, accountId) {
        const surveyResultCollection = db_1.MongoHelper.getCollection('surveyResults');
        const query = new db_1.QueryBuilder()
            .match({
            surveyId: new mongodb_1.ObjectId(surveyId)
        })
            .group({
            _id: 0,
            data: {
                $push: '$$ROOT'
            },
            total: {
                $sum: 1
            }
        })
            .unwind({
            path: '$data'
        })
            .lookup({
            from: 'surveys',
            foreignField: '_id',
            localField: 'data.surveyId',
            as: 'survey'
        })
            .unwind({
            path: '$survey'
        })
            .group({
            _id: {
                surveyId: '$survey._id',
                question: '$survey.question',
                date: '$survey.date',
                total: '$total',
                answer: '$data.answer',
                answers: '$survey.answers'
            },
            count: {
                $sum: 1
            },
            currentAccountAnswer: {
                $push: {
                    $cond: [{ $eq: ['$data.accountId', new mongodb_1.ObjectId(accountId)] }, '$data.answer', '$invalid']
                }
            }
        })
            .project({
            _id: 0,
            surveyId: '$_id.surveyId',
            question: '$_id.question',
            date: '$_id.date',
            answers: {
                $map: {
                    input: '$_id.answers',
                    as: 'item',
                    in: {
                        $mergeObjects: ['$$item', {
                                count: {
                                    $cond: {
                                        if: {
                                            $eq: ['$$item.answer', '$_id.answer']
                                        },
                                        then: '$count',
                                        else: 0
                                    }
                                },
                                percent: {
                                    $cond: {
                                        if: {
                                            $eq: ['$$item.answer', '$_id.answer']
                                        },
                                        then: {
                                            $multiply: [{
                                                    $divide: ['$count', '$_id.total']
                                                }, 100]
                                        },
                                        else: 0
                                    }
                                },
                                isCurrentAccountAnswerCount: {
                                    $cond: [{
                                            $eq: ['$$item.answer', {
                                                    $arrayElemAt: ['$currentAccountAnswer', 0]
                                                }]
                                        }, 1, 0]
                                }
                            }]
                    }
                }
            }
        })
            .group({
            _id: {
                surveyId: '$surveyId',
                question: '$question',
                date: '$date'
            },
            answers: {
                $push: '$answers'
            }
        })
            .project({
            _id: 0,
            surveyId: '$_id.surveyId',
            question: '$_id.question',
            date: '$_id.date',
            answers: {
                $reduce: {
                    input: '$answers',
                    initialValue: [],
                    in: {
                        $concatArrays: ['$$value', '$$this']
                    }
                }
            }
        })
            .unwind({
            path: '$answers'
        })
            .group({
            _id: {
                surveyId: '$surveyId',
                question: '$question',
                date: '$date',
                answer: '$answers.answer',
                image: '$answers.image'
            },
            count: {
                $sum: '$answers.count'
            },
            percent: {
                $sum: '$answers.percent'
            },
            isCurrentAccountAnswerCount: {
                $sum: '$answers.isCurrentAccountAnswerCount'
            }
        })
            .project({
            _id: 0,
            surveyId: '$_id.surveyId',
            question: '$_id.question',
            date: '$_id.date',
            answer: {
                answer: '$_id.answer',
                image: '$_id.image',
                count: (0, mongo_round_1.default)('$count'),
                percent: (0, mongo_round_1.default)('$percent'),
                isCurrentAccountAnswer: {
                    $eq: ['$isCurrentAccountAnswerCount', 1]
                }
            }
        })
            .sort({
            'answer.count': -1
        })
            .group({
            _id: {
                surveyId: '$surveyId',
                question: '$question',
                date: '$date'
            },
            answers: {
                $push: '$answer'
            }
        })
            .project({
            _id: 0,
            surveyId: {
                $toString: '$_id.surveyId'
            },
            question: '$_id.question',
            date: '$_id.date',
            answers: '$answers'
        })
            .build();
        const surveyResult = await surveyResultCollection.aggregate(query).toArray();
        return surveyResult.length ? surveyResult[0] : null;
    }
}
exports.SurveyResultMongoRepository = SurveyResultMongoRepository;
//# sourceMappingURL=survey-result-mongo-repository.js.map