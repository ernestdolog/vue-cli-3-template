/* eslint-disable */
const express = require('express'),
    compression = require('compression'),
    favicon = require('serve-favicon'),
    helmet = require('helmet'),
    path = require('path'),
    oneDay = 86400000,
    port = process.env.PORT || 3000;
    // Raven = require('raven');

console.log('env=%s, version=%s ', process.env.NODE_ENV, process.env.npm_package_version);

// if (process.env.SENTRY_API) {
    // Must configure Raven before doing anything else with it
    // Raven.config(process.env.SENTRY_API).install()
// }

const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(helmet({ noSniff: false }));
app.use(compression());

//============= Log Uncaught Exceptions ============= //
// process.on('uncaughtException', function(err) {
//     if (process.env.SENTRY_API) {
//         Raven.captureException(err)
//     }
//
//     console.error('UncaughtException', err);
// });

const staticPath = path.join(__dirname, '../dist');
const indexHtml = path.join(staticPath, 'index.html');

app.use(express.static(staticPath, { maxAge: oneDay }));

// to handle html5 history mode
app.get('*', (req, res, next) => res.sendFile(indexHtml));

const server = app.listen(port, '0.0.0.0', function() {
    console.log('Server listening on http://%s:%s', server.address().address, server.address().port);
});