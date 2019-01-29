function localStorage() {

    const localStore = window.localStorage;

    function get(key) {
        return localStore.getItem(key);
    }

    function set(key, value) {
        localStore.setItem(key, value);
    }

    return {
        get: get,
        set: set
    };

}

export default {
    moduleValue: localStorage,
    moduleName: 'localStorage'
}