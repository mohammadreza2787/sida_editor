// initialize.js
(function() {
    var basePath = 'https://mohammadreza2787.github.io/sida_editor/';
    var scripts = [
        'core.js',
        'daftarNatayej.js',
        'sarbarg.js',
        'rookeshKoli.js',
        'rookeshPayeei.js',
        'polomp.js',
        'amarKoli.js'
    ];

    function loadScript(src) {
        return new Promise(function(resolve, reject) {
            var script = document.createElement('script');
            script.src = basePath + src;
            script.onload = resolve;
            script.onerror = function() {
                console.error('Failed to load:', src);
                reject();
            };
            document.body.appendChild(script);
        });
    }

    scripts.reduce(function(promise, script) {
        return promise.then(function() {
            return loadScript(script);
        });
    }, Promise.resolve())
    .then(function() {
        console.log('همه ماژول‌ها بارگذاری شدند.');
    })
    .catch(function() {
        console.error('خطا در بارگذاری اسکریپت‌ها.');
    });
})();
