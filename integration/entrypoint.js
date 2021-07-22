void (async () => {
    const { basePath, host } = (() => {
        const scripts = document.querySelectorAll('script');
        for (const script of scripts) {
            if (script.src.indexOf('?enactive-loader') !== -1 ||
                script.src.indexOf('ally.js?_=') !== -1) {
                const a = document.createElement('a');
                a.href = script.src;
                const host = `${a.protocol}//${a.hostname}${a.port !== '' ? `:${a.port}` : ''}`;
                const basePath = a.pathname.split('/').slice(0, -1).join('/');
                return { basePath, host };
            }
        }
    })();
    const epDocument = new DOMParser().parseFromString(await fetch(`${host}${basePath}/index.html`).then((r) => r.text()), 'text/html');
    const root = document.createElement('div');
    root.id = 'enactive-app-root';
    document.body.appendChild(root);
    epDocument.head.querySelectorAll('link').forEach((ss) => {
        if (ss.rel === 'stylesheet' && ss.href !== '') {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = ss.href.startsWith('/') ? `${host}/${ss.href}` : ss.href;
            document.head.appendChild(link);
        }
    });
    epDocument.body.querySelectorAll('script').forEach((s) => {
        const script = document.createElement('script');
        const sSrc = s.getAttribute('src');
        const src = sSrc && sSrc.startsWith('/') ? `${host}${sSrc}` : sSrc;
        src ? (script.src = src) : (script.text = s.text);
        document.body.appendChild(script);
    });
})();
//# sourceMappingURL=entrypoint.js.map