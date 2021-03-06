#!/usr/bin/env node

/***************************************************************************
Copyright 2016 Apigee

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
****************************************************************************/

'use strict';

var program = require('commander'),
    pjson = require('../package.json');

program
    .version(pjson.version)
    //.usage('[options] <file ...>')
    .command('export', 'Export data from the management API')
    // .command('init', 'Initialize environment for capturing traffic');

program.parse(process.argv);