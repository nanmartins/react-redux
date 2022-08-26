# react-redux

React & Redux lectures/challenges repo.


Yarn add = "jquery",
           "eslint",
           "webpack",
           "html-webpack-plugin",
           "babel"

Wevpack - import/export samples created at './greet.js' and './capitalize.js'
          external import sample created at '.index.js'

        ** To bundle your modules as if in production, run:

        $ webpack -p

           Thise will create a dist/bundle.js file usable for production
           (Added BABEL to generate ES5 file for compatibility)

Babel - Installed but is missing the code for webpack.config.js.
        I got some errors when using the template from lewagon, so need to check if the version is rigth,
        if the modules on webpack.config.js is rigth

        ** Babel error:

[webpack-cli] Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema.
 - configuration.module has an unknown property 'loaders'. These properties are valid:
   object { defaultRules?, exprContextCritical?, exprContextRecursive?, exprContextRegExp?, exprContextRequest?, generator?, noParse?, parser?, rules?, strictExportPresence?, strictThisContextOnImports?, unknownContextCritical?, unknownContextRecursive?, unknownContextRegExp?, unknownContextRequest?, unsafeCache?, wrappedContextCritical?, wrappedContextRecursive?, wrappedContextRegExp? }
   -> Options affecting the normal modules (`NormalModuleFactory`).
   Did you mean module.rules or module.rules.*.use?

   When return to work on it, fix that problem.
