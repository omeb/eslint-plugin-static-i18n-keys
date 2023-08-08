"use strict";

module.exports = {
  rules: {
    "no-invalid-t-usage": {
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
      create: function(context) {
        function isStaticString(node) {
          return node.type === 'Literal' && typeof node.value === 'string';
        }

        function isStringConcatExpression(node) {
          if (node.type === 'BinaryExpression' && node.operator === '+') {
            return isStaticString(node.left) || isStaticString(node.right);
          }
          return false;
        }

        function isStringExpressionOrStaticString(node) {
          if (isStaticString(node)) {
            return true;
          }
          if (isStringConcatExpression(node)) {
            return false;
          }
          if (node.type === 'ConditionalExpression') {
            return (
              isStringExpressionOrStaticString(node.consequent) &&
              isStringExpressionOrStaticString(node.alternate)
            );
          }
          return false;
        }

        function validateTCall(node) {
          const args = node.arguments;

          const arg = args[0];
          if (!isStringExpressionOrStaticString(arg)) {
            context.report({
              node: arg,
              message: 'Function "t" should only be called with a static string value or a logical expression that results in a string value as the first parameter.',
            });
          }
        }

        return {
          CallExpression(node) {
            if (node.callee.name === 't') {
              validateTCall(node);
            }
          },
        };
      },
    }
  }
};