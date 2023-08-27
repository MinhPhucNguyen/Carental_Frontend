import axios from "axios";

const auth = {
   namespaced: true,
   state: {
      token: null,
      user: null,
   },
   getters: {
      getUser(state) {
         return state.user;
      },
      isAuthenticated(state) {
         return state.token && state.user;
      },
   },
   mutations: {
      SET_TOKEN(state, token) {
         state.token = token;
      },

      SET_USER(state, user) {
         state.user = user;
      },
   },
   actions: {
      async login({ dispatch }, credentials) {
         const response = await axios.post("login", credentials);
         return dispatch("attempt", response.data.token);
      },

      async attempt({ commit, state }, token) {
         if (token) {
            commit("SET_TOKEN", token);
         }

         if (!state.token) {
            return;
         }

         try {
            const response = await axios.get("user");
            commit("SET_USER", response.data);
         } catch (e) {
            commit("SET_TOKEN", null);
            commit("SET_USER", null);
         }
      },
   },
};

export default auth;
