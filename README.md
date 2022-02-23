# Brackets

## Task

Implement function `check(str, bracketsConfig)`, that for given brackets sequence will return `true` if it is correct and `false` otherwise

In the second param there is `bracketsConfig` - the array of pairs open-closed brackets. Each subarray includes only 2 elements - opening and closing bracket

```js
check('()', [['(', ')']]) // -> true
check('((()))()', [['(', ')']]) // -> true
check('())(', [['(', ')']]) // -> false
check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
check('[(])', [['(', ')'], ['[', ']']]) // -> false
check('[]()', [['(', ')'], ['[', ']']]) // -> true
check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// special case: opening and closing bracket can be the same :)

check('||', [['|', '|']]) // -> true
check('|()|', [['(', ')'], ['|', '|']]) // -> true
check('|(|)', [['(', ')'], ['|', '|']]) // -> false
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true
```

Write your code in `src/index.js`

## Prepare and test

- Install [Node.js](https://nodejs.org/en/)
- Fork this repository: `https://github.com/rolling-scopes-school/brackets.git`
- Clone your newly created repo: https://github.com/<%your_github_username%>/brackets/
- Go to the folder `brackets`
- Run `npm install` in command line
- Run `npm test` in command line
- You will see the number of passed and failed tests

## Submit to [rs app](https://app.rs.school)
1. Open [rs app](https://app.rs.school) and login
2. Open `RS APP` and click `Auto Test`
3. Select your task (brackets)
4. Press the submit button and enjoy

### Notes
1. We recommend you to use nodejs of version 14 or lower. If you using any of features that does not supported by node v10, score won't be submitted.
2. Please be sure that each of your test in limit of 30sec.
