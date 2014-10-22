[![Build Status](https://travis-ci.org/HeikkiAlanen/hello-node-js.svg)](https://travis-ci.org/HeikkiAlanen/hello-node-js)
[![Dependency Status](https://www.versioneye.com/user/projects/54466f6a44a5255e090001ad/badge.svg?style=flat)](https://www.versioneye.com/user/projects/54466f6a44a5255e090001ad)

### ASI
ASI eli Automatic Semicolon Insertation toimii selaimessa ja laittaa puolipisteen sellaisen rivin perään jossa sitä ei ole. Tämä voi olla joskus hyvä asia, mutta voi aiheuttaa myös ongelmia.

### ESLint
Tiedosto eslintRulesHAl.json sisältää sääntökonfiguroinnin puuttuvien puolipisteiden löytämiseksi ESLint työkalulla (eslint -c eslintRulesHAl.json <file>).

### Version selector madness
There are different ways to present version requirements in `package.json`.

There are comparators which can be used to indicate is exact version needed or older version or newer version. Set of comparators can be used to indicate a range of versions. Also hyphen, x, caret and tilde characters can be used in version syntax.

Example 1: `1.2.7 || =>1.2.9`, would match the versions 1.2.7 and 1.2.9 and newer, but not the version 1.2.8.

Example 2: `1.2 - 2.3.4`, would match the versions which are as new as or newer than 1.2.0 but as old as or older than 2.3.4.

Example 3: `1.2.x`, would match the versions which are as new as or newer than 1.2.0 but older than 1.3.0.

Example 4: `~1.2.3`, would match the versions which are as new as or newer 1.2.0 but older than 1.3.0

Example 5: `^1.2.3`, would match the versions which are as new as or newer 1.2.0 but older than 2.0.0

Example 6 from VersionEye: `gulp-jshint : 1.8.5`: 
![gulp-jshint v1.8.5](https://github.com/HeikkiAlanen/hello-node-js/blob/master/gulp-jshint-1.8.5.JPG "gulp-jshint v1.8.5")

In this example one dependency does not match the criteria (through2) which means that status is *dependencies out of date*.