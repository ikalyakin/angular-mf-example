# AngularMfExample
This is a build issue demonstration (An unhandled exception occurred: ENOENT: no such file or directory, scandir). Solved in license-webpack-plugin from 2.3.13.

## Reproduction
- install dependencies using `yarn` (because of `resolutions` section in `package.json`)
- run `ng build --prod`
- get error `ENOENT: no such file or directory`

## Reasons
A package `@angular-devkit/build-angular` (0.1102.5) has dependency `license-webpack-plugin` (2.3.11) which has an issue has been solved in this [commit](https://github.com/xz64/license-webpack-plugin/commit/a22b4a64f94de1edcde83f2c745ffa0201eee244#diff-5a5c513f0d9f5557331f013846e996727746302e89b394c0b705c1e7affd65b1). This fix is available from version 2.3.13 of `license-webpack-plugin`.

## Suggestion
Versions of `@angular-devkit/build-angular` 0.1200.x has `license-webpack-plugin` with 2.3.15 version which hasn't this issue. This version update could be brought to 0.1102.x. 
