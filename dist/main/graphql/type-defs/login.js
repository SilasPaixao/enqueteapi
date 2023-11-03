"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql) `
  extend type Query {
    login (email: String!, password: String!): Account!
  }

  extend type Mutation {
    signUp (name: String!, email: String!, password: String!, passwordConfirmation: String!): Account!
  }

  type Account {
    accessToken: String!
    name: String!
  }
`;
//# sourceMappingURL=login.js.map