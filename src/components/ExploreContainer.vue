<template>
  <div id="container">
    <h1>{{ msg }}</h1>
    <p>
      Welcome to the FridgiGo App! We are happy to see you!
    </p>
    <p>Please log in or sign up to use our app</p>
    <div v-if="!isAuthenticated"><button @click="login">Login or Sign up</button></div>
    <div v-else><button @click="logout">Logout</button></div>
  </div>
</template>

<script>
 /* import Vue from 'vue' */

export default {
  name: 'ExploreContainer',
  props: {
    name: String,
    msg: String
  },
  /* computed: {
    isAuthenticated: () => {
      return Vue.$keycloak.authenticated
    }
  },
  methods: {
    login () {
      Vue.$keycloak.login({ redirectUri: window.location.origin })
    },
    logout () {
      Vue.$keycloak.logout({ redirectUri: window.location.origin })
    }
  } */
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>