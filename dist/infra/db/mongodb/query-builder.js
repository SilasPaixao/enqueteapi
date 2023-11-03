"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilder = void 0;
class QueryBuilder {
    constructor() {
        this.query = [];
    }
    addStep(step, data) {
        this.query.push({
            [step]: data
        });
        return this;
    }
    match(data) {
        return this.addStep('$match', data);
    }
    group(data) {
        return this.addStep('$group', data);
    }
    sort(data) {
        return this.addStep('$sort', data);
    }
    unwind(data) {
        return this.addStep('$unwind', data);
    }
    lookup(data) {
        return this.addStep('$lookup', data);
    }
    project(data) {
        return this.addStep('$project', data);
    }
    build() {
        return this.query;
    }
}
exports.QueryBuilder = QueryBuilder;
//# sourceMappingURL=query-builder.js.map