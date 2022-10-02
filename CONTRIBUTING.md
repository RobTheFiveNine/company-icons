Contributing
============
If you have an icon you'd like to add, you should follow these steps:

1. Ensure the aspect ratio is 1:1 and has an opaque background
2. Add the file to the `logos` directory with a name that matches the `{EXCHANGE}-{TICKER}` naming convention that is currently in place
3. Update `src/icons.json` to include a new entry that specifies the exchange, the file extension (including leading `.`), the company name and the ticker symbol

If you'd like to contribute any improvements to the code, please be sure to follow the current style enforced by eslint and ensure that tests are updated to maintain code coverage.

Testing
=======
When testing locally, you can use the `yarn run serve` command to launch a local server that runs the application. When running locally, the logos JSON file is served from `src/icons.json` and Webpack will automatically update the server when any code is changed.
