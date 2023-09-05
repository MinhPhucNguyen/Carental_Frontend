import axios from "axios";

const users = {
   namespaced: true,
   state: {
      usersList: [],
      user: null,
   },
   getters: {
      getUserList(state) {
         return state.usersList;
      },

      getUserById(state) {
         return state.user;
      },

      getOverlayLoading(state) {
         return state.showOverlayLoading;
      },
   },
   mutations: {
      SET_USERS_LIST(state, users) {
         state.usersList = users;
      },

      SET_USER(state, user) {
         state.user = user;
      },

      SET_AVATAR(state, avatarUrl) {
         state.user.avatar = avatarUrl;
      },
   },
   actions: {
      async fetchUsers({ commit }) {
         await axios.get("v2/admin/users").then((response) => {
            commit("SET_USERS_LIST", response.data.users);
         });
      },

      resetUser({ commit }) {
         commit("SET_USER", null);
      },

      async fetchUserById({ commit }, id) {
         return await axios
            .get(`v2/admin/users/${id}`)
            .then((response) => {
               commit("SET_USER", response.data.user);
            })
            .catch(() => {
               commit("SET_USER", null);
            });
      },

      async editUser({ commit }, { id, model }) {
         const response = await axios.put(`v2/admin/users/${id}/edit`, model);
         commit("SET_USER", response.data.user);
         return response;
      },

      async createUsers({ dispatch }, user) {
         const response = await axios.post("v2/admin/users/create", user, {
            headers: {
               "Content-Type": "application/json",
            },
         });
         dispatch("fetchUsers");
         return response;
      },

      async deleteUser({ dispatch }, id) {
         return await axios.delete(`v2/admin/users/${id}`).then(() => {
            dispatch("resetUser");
            dispatch("fetchUsers");
         });
      },

      async updateAvatar({ commit }, { id, formData }) {
         const response = await axios.post(`v2/admin/users/${id}/update-avatar`, formData);
         commit("SET_AVATAR", response.data.avatarUrl);
         commit("auth/SET_AVATAR", response.data.avatarUrl, { root: true });
         return response;
      },
   },
};

export default users;
