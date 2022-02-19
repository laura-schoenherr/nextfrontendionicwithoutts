import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

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
import {vueKeycloak} from "@baloise/vue-keycloak";

const app = createApp(App)
    .use(IonicVue)
    .use(router)

    /* nach Bedarf */
    /*.use(vueKeycloak, '/keycloak.json')*/

    /* keycloak logic */
    .use(vueKeycloak, '/keycloak.json')
    .use(vueKeycloak, async () => {
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


 router.isReady().then(() => {
            app.mount('#app');
        });



