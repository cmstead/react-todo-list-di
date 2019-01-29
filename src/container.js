if (typeof window.container === 'undefined') {
    window.container = window.dject.new({
        allowOverride: false
    });

    window.container.registerImport = function ({moduleValue, moduleName}) {
        window.container.register(moduleValue, moduleName);
    };
    
}


export default window.container;