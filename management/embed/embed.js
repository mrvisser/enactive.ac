void (async () => {
    async function getHtml(host, basePath) {
        return await fetch(`${host}${basePath}/index.html`).then(r => r.text());
    }
    const script = document.querySelector('script[enactive\\.management\\.site-id]');
    if (script === null) {
        return;
    }
    const a = document.createElement('a');
    a.href = script.src;
    const host = `${a.protocol}//${a.hostname}${a.port === '' ? '' : `:${a.port}`}`;
    window.getEnactiveHost =
        () => host;
    const basePath = a.pathname.split('/').slice(0, -1).join('/');
    const epDocument = new DOMParser().parseFromString(`<!doctype html><html lang="en"><head><meta charset="utf-8"/><link rel="icon" href="/management/embed/favicon.ico"/><meta name="viewport" content="minimum-scale=1,initial-scale=1,width=device-width"/><meta name="theme-color" content="#000000"/><meta name="description" content="Web site created using create-react-app"/><link rel="apple-touch-icon" href="/management/embed/logo192.png"/><link rel="manifest" href="/management/embed/manifest.json"/><title>React App</title><script defer="defer" src="/management/embed/static/js/main.a487d00f.js"></script><link href="/management/embed/static/css/main.c52d4c46.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="enactive-management-root"></div></body></html>`, 'text/html');
    const root = document.createElement('div');
    root.id = 'enactive-management-root';
    document.body.appendChild(root);
    epDocument.head.querySelectorAll('link').forEach(ss => {
        var _a;
        const href = (_a = ss.getAttribute('href')) !== null && _a !== void 0 ? _a : '';
        if (ss.rel === 'stylesheet' && href !== '') {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href.startsWith('/') ? `${host}/${href}` : href;
            document.head.appendChild(link);
        }
    });
    epDocument.head.querySelectorAll('script').forEach(s => {
        const script = document.createElement('script');
        const sSrc = s.getAttribute('src');
        const src = sSrc && sSrc.startsWith('/') ? `${host}${sSrc}` : sSrc;
        src ? (script.src = src) : (script.text = s.text);
        document.body.appendChild(script);
    });
})();
//# sourceMappingURL=embed.js.map