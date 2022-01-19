import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'
/* keycloak logic */
import Vue from 'vue'

const routes = [
    {
        path: '/',
        redirect: '/tabs/tab1'
    },
    {
        path: '/tabs/',
        component: TabsPage,
        children: [
            {
                path: '',
                redirect: '/tabs/tab1',
                meta: {
                    isAuthenticated: false
                }
            },
            {
                path: 'tab1',
                meta: {
                    isAuthenticated: true
                },
                component: () => import('@/views/Tab1Page.vue'),

            },
            {
                path: 'tab2',
                meta: {
                    isAuthenticated: true
                },
                component: () => import('@/views/Tab2Page.vue')
            },
            {
                path: 'tab3',
                meta: {
                    isAuthenticated: true
                },
                component: () => import('@/views/Tab3Page.vue')
            },
            {
                path: 'tab3/form',
                meta: {
                    isAuthenticated: true
                },
                component: () => import('@/views/RecipeForm.vue')
            },
            {
                path: 'tab3/filter',
                meta: {
                    isAuthenticated: true
                },
                component: () => import('@/views/SingleRecipeView.vue')
            },
            {
                path: 'tab4',
                meta: {
                    isAuthenticated: true
                },
                component: () => import('@/views/Tab4Page.vue')
            },

        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.isAuthenticated) {
        // Get the actual url of the app, it's needed for Keycloak
        const basePath = window.location.toString()
        if (!Vue.$keycloak.authenticated) {
            // The page is protected and the user is not authenticated. Force a login.
            Vue.$keycloak.login({redirectUri: basePath.slice(0, -1) + to.path})
        } else if (Vue.$keycloak.hasResourceRole('default-roles-fridiggo')) {
            // The user was authenticated, and has the app role (is authorized). Update the token.
            Vue.$keycloak.updateToken(70)
                .then(() => {
                    next()
                })
                .catch(err => {
                    console.error(err)
                })
        } else {
            // This page did not require authentication
            next()
        }
    }
})

export default router
