[![Build Status](https://travis-ci.org/HeikkiAlanen/hello-node-js.svg)](https://travis-ci.org/HeikkiAlanen/hello-node-js)
[![Dependency Status](https://www.versioneye.com/user/projects/54466f6a44a5255e090001ad/badge.svg?style=flat)](https://www.versioneye.com/user/projects/54466f6a44a5255e090001ad)

ASI eli Automatic Semicolon Insertation toimii selaimessa ja laittaa puolipisteen sellaisen rivin perään jossa sitä ei ole. Tämä voi olla joskus hyvä asia, mutta voi aiheuttaa myös ongelmia.

Tiedosto eslintRulesHAl.json sisältää sääntökonfiguroinnin puuttuvien puolipisteiden löytämiseksi ESLint työkalulla (eslint -c eslintRulesHAl.json <file>).