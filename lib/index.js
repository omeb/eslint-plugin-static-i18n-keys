"use strict";

module.exports.rules = {
    meta: {
      type: 'problem',
      docs: {
        description: 'Enforce valid usage of the "t" function',
        category: 'Best Practices',
        recommended: true,
      },
      fixable: null,
      schema: [], // No options to configure
    },
    create: function (context) {
      return {
        CallExpression(node) {
          if (
            node.callee.name === 't' &&
            node.arguments.length === 1 &&
            node.arguments[0].type === 'Literal' &&
            typeof node.arguments[0].value === 'string'
          ) {
            return; // Valid usage
          }
  
          context.report({
            node: node,
            message: 'Function "t" should only be called with a single static string value.',
          });
        },
      };
    },
  };