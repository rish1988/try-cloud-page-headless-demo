#! /usr/bin/env node

let envName = process.env.HEAD.replace("env/", "");

require('fs')
    .writeFileSync(".config-env", `REACT_APP_CONFIG_ENV=environments/${envName}`);
