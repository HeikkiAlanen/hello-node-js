JSLint seems to expect that every statement is followed by semicolon (;). There is not configuration which developer could turn on or off.

In JSHint and ESLint there is an option which the developer can change to be on or off.

ESLint example: 

.eslintrc

```
{
    "rules": {
        "semi": 2
    }
}
```

JSHint example:

```
{
  "asi":      false
}
```
