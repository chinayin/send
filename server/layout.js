const html = require('choo/html');
const assets = require('../common/assets');
const locales = require('../common/locales');

module.exports = function(state, body = '') {
  const firaTag = state.fira
    ? html`<link rel="stylesheet" type="text/css" href="https://code.cdn.mozilla.net/fonts/fira.css" />`
    : '';
  return html`
  <!DOCTYPE html>
  <html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="${state.title}"/>
    <meta name="twitter:title" content="${state.title}"/>
    <meta name="description" content="${state.description}"/>
    <meta property="og:description" content="${state.description}"/>
    <meta name="twitter:description" content="${state.description}"/>
    <meta name="twitter:card" content="summary"/>
    <meta property="og:image" content="${state.baseUrl}${assets.get(
    'send-fb.jpg'
  )}"/>
    <meta name="twitter:image" content="${state.baseUrl}${assets.get(
    'send-twitter.jpg'
  )}"/>
    <meta property="og:url" content="${state.baseUrl}"/>

    <title>${state.title}</title>

    <link rel="stylesheet" type="text/css" href="${assets.get('main.css')}" />
    
    <!-- generic favicons -->
    <link rel="icon" href="${assets.get('favicon-32.png')}" sizes="32x32">
    <link rel="icon" href="${assets.get('favicon-96.png')}" sizes="96x96">
    <link rel="icon" href="${assets.get('favicon-128.png')}" sizes="128x128">
    <link rel="icon" href="${assets.get('favicon-228.png')}" sizes="228x228">

    <!-- Android -->
    <link rel="shortcut icon" href="${assets.get(
      'favicon-196.png'
    )}" sizes="196x196">

    <!-- iOS -->
    <link rel="apple-touch-icon" href="${assets.get(
      'favicon-120.png'
    )}" sizes="120x120">
    <link rel="apple-touch-icon" href="${assets.get(
      'favicon-152.png'
    )}" sizes="152x152">
    <link rel="apple-touch-icon" href="${assets.get(
      'favicon-180.png'
    )}" sizes="180x180">

    <!-- Windows 8 IE 10-->
    <meta name="msapplication-TileColor" content="#FFFFFF">
    <meta name="msapplication-TileImage" content="${assets.get(
      'favicon-144.png'
    )}">

    <!— Windows 8.1 + IE11 and above —>
    <meta name="msapplication-config" content="/browserconfig.xml"/>
    
    
    ${firaTag}
    <script defer src="/jsconfig.js"></script>
    <script defer src="${assets.get('runtime.js')}"></script>
    <script defer src="${assets.get('vendor.js')}"></script>
    <script defer src="${locales.get(state.locale)}"></script>
    <script defer src="${assets.get('app.js')}"></script>
  </head>
  <body>
    <header class="header">
      <div class="send-logo">
        <a href="/">
          <img src="${assets.get(
            'send_logo.svg'
          )}" alt="Send"/><h1 class="site-title">Send</h1>
        </a>
        <div class="site-subtitle">
          <a href="https://testpilot.firefox.com">Firefox Test Pilot</a>
          <div>${state.translate('siteSubtitle')}</div>
        </div>
      </div>
      <a href="https://qsurvey.mozilla.com/s3/txp-firefox-send" rel="noreferrer noopener" class="feedback" target="_blank">${state.translate(
        'siteFeedback'
      )}</a>
    </header>
    <div class="all">
      <noscript>
        <h2>Firefox Send requires JavaScript</h2>
        <p><a href="https://github.com/mozilla/send/blob/master/docs/faq.md#why-does-firefox-send-require-javascript">Why does Firefox Send require JavaScript?</a></p>
        <p>Please enable JavaScript and try again.</p>
      </noscript>
      ${body}
    </div>
    <div class="footer">
      <div class="legal-links">
        <a href="https://www.mozilla.org" role="presentation"><img class="mozilla-logo" src="${assets.get(
          'mozilla-logo.svg'
        )}" alt="mozilla"/></a>
        <a href="https://www.mozilla.org/about/legal">${state.translate(
          'footerLinkLegal'
        )}</a>
        <a href="https://testpilot.firefox.com/about">${state.translate(
          'footerLinkAbout'
        )}</a>
        <a href="/legal">${state.translate('footerLinkPrivacy')}</a>
        <a href="/legal">${state.translate('footerLinkTerms')}</a>
        <a href="https://www.mozilla.org/privacy/websites/#cookies">${state.translate(
          'footerLinkCookies'
        )}</a>
      </div>
      <div class="social-links">
        <a href="https://github.com/mozilla/send" role="presentation"><img class="github" src="${assets.get(
          'github-icon.svg'
        )}" alt="github"/></a>
        <a href="https://twitter.com/FxTestPilot" role="presentation"><img class="twitter" src="${assets.get(
          'twitter-icon.svg'
        )}" alt="twitter"/></a>
      </div>
    </div>
  </body>
  </html>
  `;
};
