# Static translation keys validator for ESLint

An ESLint plugin designed to improve code quality and enforce consistent coding practices.

This plugin focuses on validating the proper usage of the "t" function within your codebase, ensuring that it exclusively receives a single static string value. By disallowing the use of template literals, expressions, and variables as arguments for "t," this plugin aids in preventing potential runtime errors, bolstering localization support, and enhancing code legibility.


### Key Features

- ✅️ Runs via `eslint .` – no new tooling
- ✅️ Prevents string concatenation usage
- ✅️ Prevents template literal usage
- ✅️ Prevents variables usage
- ✅️ Handles expressions that result in a full static string (e.g. ternary operator)
- ✅️ [eslint-plugin-import] friendly
- ✅️ No dependencies

- **Static String Validation:** Identifies instances where the "t" function is improperly invoked with dynamic values like template literals, expressions, or variables.
- **Enhanced Code Quality:** Encourages best practices by mandating a standardized approach to "t" function usage, mitigating the risk of subtle bugs and challenging-to-debug issues.
- **Customizable Configuration:** Seamlessly integrate the plugin into your project's ESLint setup and tailor the rule to align with your team's coding conventions.
- **Detailed Reports:** Generates clear and concise ESLint reports that pinpoint violations of "t" function usage, simplifying the process of identifying and rectifying problematic code.
- **Smooth Integration:** Effortlessly integrate into your development workflow through simple installation and usage instructions.

Elevate your codebase's quality and streamline your localization process by harnessing the capabilities of "eslint-plugin-t-validator." Ensure that the "t" function is consistently and accurately employed throughout your project, leading to more dependable and maintainable code.

![image](https://github.com/omeb/eslint-plugin-t-validator/assets/7505578/6cefc4e7-d948-45db-975f-aa354d75c7da)




### Installation

Install the plugin:

```bash
npm install eslint eslint-plugin-t-validator --save-dev
```

### Configuration

Configure ESLint in your project to include the `"t-validator"` plugin and enable the rule. In your ESLint configuration file (.eslintrc.js or .eslintrc.json), make sure to add `"t-validator"` to the list of plugins and enable the rule:

```js
{
  "plugins": ["t-validator"],
  "rules": {
    "t-validator/no-invalid-t-usage": "error"
  }
}
```

This configuration ensures that ESLint will enforce the rule that the "t" function should only receive a single static string value.

### Run ESLint

After configuring ESLint, run the following command to analyze your code and enforce the "t" function usage rule:
```bash
npx eslint .
```
ESLint will scan your project's files and report any instances where the "t" function is not used correctly.


### Review Reports

Review the ESLint reports to identify and correct any violations of the "t" function usage rule. The reports will clearly point out locations where the function is being used incorrectly, ensuring you can fix the issues promptly.


### Contributing
Contributions are welcome! Feel free to fork this repository, make changes, and submit pull requests.

### License
This project is licensed under the [MIT License](https://github.com/omeb/eslint-plugin-t-validator/blob/main/LICENSE).
