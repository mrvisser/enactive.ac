void (async () => {
    async function getHtml(host, basePath) {
        return await fetch(`${host}${basePath}/index.html`).then(r => r.text());
    }
    const script = document.querySelector('script[enactive\\.site-id]');
    if (script === null) {
        return;
    }
    const a = document.createElement('a');
    a.href = script.src;
    const host = `${a.protocol}//${a.hostname}${a.port === '' ? '' : `:${a.port}`}`;
    window.getEnactiveHost =
        () => host;
    const basePath = a.pathname.split('/').slice(0, -1).join('/');
    const epDocument = new DOMParser().parseFromString(`<html><head><script defer="defer" src="/integration/static/js/main.3e01eb1a.js"></script><link href="/integration/static/css/main.843d04c7.css" rel="stylesheet"></head><body></body></html>`, 'text/html');
    const root = document.createElement('div');
    root.id = 'enactive-app-root';
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
//# sourceMappingURL=entrypoint.js.map