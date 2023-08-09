# i18n static translation keys validator for ESLint

An ESLint plugin designed to improve code quality and enforce consistent coding practices.

This plugin focuses on validating the proper usage of the `t` function / `<Trans />` component's `i18nextKey` prop within your codebase, ensuring that they exclusively receives a static string value or a logical expression that evaluates to a string as a first parameter. By disallowing the use of template literals, string concatenation, and variables as translation key arguments, this plugin aids in preventing potential runtime errors, bolstering localization support, and enhancing code legibility.

### Key Features

- ✅️ Runs via `eslint .` – no new tooling
- ✅️ Prevents string concatenation usage
- ✅️ Prevents template literal usage
- ✅️ Prevents variables usage as key
- ✅️ Handles expressions that result in a full static string (e.g. ternary operator)
- ✅️ [eslint-plugin-import] friendly
- ✅️ No dependencies
- ✅️ Validates `Trans` component

- **Static String Validation:** Identifies instances where `<Trans />` component's `i18nextKey`` prop or the `t` function is improperly invoked with dynamic values like template literals, expressions, or variables.
- **Enhanced Code Quality:** Encourages best practices by mandating a standardized approach to translation key usage, mitigating the risk of subtle bugs and challenging-to-debug issues.
- **Customizable Configuration:** Seamlessly integrate the plugin into your project's ESLint setup and tailor the rule to align with your team's coding conventions.
- **Detailed Reports:** Generates clear and concise ESLint reports that pinpoint violations of static translation key usage, simplifying the process of identifying and rectifying problematic code.
- **Smooth Integration:** Effortlessly integrate into your development workflow through simple installation and usage instructions.

Elevate your codebase's quality and streamline your localization process by harnessing the capabilities of "eslint-plugin-static-i18n-keys." Ensure that the your translation keys are consistently and accurately employed throughout your project, leading to more dependable and maintainable code.

##### `no-invalid-t-usage` rule:

![image](https://github.com/omeb/eslint-plugin-static-i18n-keys/assets/7505578/c723cb2a-200b-4740-a46e-c3076d7be46f)


##### `no-invalid-trans-component-usage` rule:

![image](https://github.com/omeb/eslint-plugin-static-i18n-keys/assets/7505578/37c734da-b915-43bc-8b75-45fb1a9560de)


### Installation

Install the plugin with npm / yarn:

```bash
# npm
npm install --save-dev eslint eslint-plugin-static-i18n-keys 

# yarn
yarn add -D eslint eslint-plugin-static-i18n-keys
```

### Configuration

Configure ESLint in your project to include the `"static-i18n-keys"` plugin and enable the rule. In your ESLint configuration file (.eslintrc.js or .eslintrc.json), make sure to add `"static-i18n-keys"` to the list of plugins and enable the rule:

```js
{
  "plugins": ["static-i18n-keys"],
  "rules": {
    "static-i18n-keys/no-invalid-t-usage": "error",
    'static-i18n-keys/no-invalid-trans-component-usage': 'error',
  }
}
```

This configuration ensures that ESLint will enforce the rule that translation key should only receive a static string value or a logical expression that evaluates to a string.

### Run ESLint

After configuring ESLint, run the following command to analyze your code and enforce the rule:
```bash
npx eslint .
```
ESLint will scan your project's files and report any instances where translation key is not used correctly.


### Review Reports

Review the ESLint reports to identify and correct any violations of translation key usage rule. The reports will clearly point out locations where the function is being used incorrectly, ensuring you can fix the issues promptly.

### Thanks
Thanks to [Ran Yitzhaki](https://github.com/ranyitz) for raising the need, discussing the proposed solution and for coming up with a proper package name. Also, thanks to [Illia Panasenko](https://github.com/ipanasenko) for pointing out initial issues.

### Contributing
Contributions are welcome! Feel free to fork this repository, make changes, and submit pull requests.

### License
This project is licensed under the [MIT License](https://github.com/omeb/eslint-plugin-static-i18n-keys/blob/main/LICENSE).
