import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

/* security login feature */
import authentication from "@/plugins/authentication";
import Keycloak from 'keycloak-js';

/* multilingual feature */
import VueI18n from "vue-i18n";
import messages from './lang';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';


const app = createApp(App)
    .use(IonicVue)
    .use(router)
    /* keycloak logic */
    .use(Keycloak, '/keycloak.json')
    .use(authentication)
    .use(Keycloak, async () => {
        return {
            config: {
                url: ('http://localhost:8080/auth/'),
                realm: 'FridigGo',
                clientId: 'fridgigoclient',
            },
            initOptions: {
                onLoad: 'check-sso',
                silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
            },
        }
    })

var logoutOptions = { redirectUri : https://localhost:8080 };
console.log("--> log: logoutOptions  ", logoutOptions  );

Keycloak.logout(logoutOptions).then((success) => {
    console.log("--> log: logout success ", success );
}).catch((error) => {
    console.log("--> log: logout error ", error );
});
store.commit("logout");
}
}).catch(() => {
    console.log("--> log: catch interval");
});
}, 10000)
}).catch(() => {
    console.log("-->log: Failed to authenticate");
});

    /* multilingual feature */
    .use(VueI18n);
    export const i18n = new VueI18n({
    locale: 'de',
    fallbackLocale: 'de',
    messages
    });


 router.isReady().then(() => {
            app.mount('#app');
        });



