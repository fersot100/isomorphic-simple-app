import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../components/Home';
import { StaticRouter } from 'react-router';


export default () => {
    const content = renderToString(<StaticRouter));
    return `
        <html>
            <head></head>
            <body>    
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
}