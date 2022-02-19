import {createApp} from "vue";
import Keycloak from 'keycloak-js'
import App from "@/App";

const app = createApp(App);

const options = {
    url: 'http://localhost:8080/auth',
    realm: 'FridigGo',
    clientId: 'fridgigoclient'
}


    const $keycloak = Keycloak(options)

    const Plugin = {
        install(Vue) {
            Vue.$keycloak = $keycloak
        }
    }

    Plugin.install = Vue => {
        Vue.$keycloak = _keycloak
        Object.defineProperties(Vue.prototype, {
            $keycloak: {
                get() {
                    return _keycloak
                }
            }
        })
    }

    app.config.globalProperties.$keycloak = $keycloak;

    export default Plugin

app.provide('Plugin', Plugin);