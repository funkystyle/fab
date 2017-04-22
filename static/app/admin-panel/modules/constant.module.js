angular.module("constantModule", [])
    .constant("mainURL", "http://54.213.22.144")
    .constant('URL', {
        login: "/api/1.0/auth/login",
        register: "/api/1.0/auth/signup",
        logout: "/api/1.0/auth/logout",
        currentUser: "/api/1.0/auth/me",
        sendForgetPasswordLink: "api/1.0/auth/send-forgot-password-link",
        changePassword: "/api/1.0/auth/change-password",
        emailActivation: "/api/1.0/auth/email-activation",

        store: "/static/app/admin-panel/modules/JSON/store.json",

        // Persons
        persons: "/api/1.0/persons"
    });