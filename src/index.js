import React from 'react';
import ReactDOM from 'react-dom/server';
import {hydrate} from 'react-dom';
import App from'./App';

const Html = props => {
  const html = { __html: props.children };
  return (
    <html lang='en'>
      <head>
        <title>App 2</title>
        <link rel='stylesheet' href='/app.css' />
      </head>
      <body>
        <div id='app' dangerouslySetInnerHTML={html} />
        <script src='/app.js'></script>
      </body>
    </html>
  );
};

const doc = '<!doctype html>' + ReactDOM.renderToStaticMarkup(
  <Html>
    {ReactDOM.renderToString(<App />)}
  </Html>
);


if (typeof document === 'undefined') {
  const fs = require(/* webpackIgnore: true */ 'fs');
  fs.writeFileSync('index.html', doc);
} else {
  hydrate(<App/>, document.getElementById('app'));
}

console.log(`File written: ${process.cwd()}/index.html`);