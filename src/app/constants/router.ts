import { AccountComponent } from "../modules/account/account.component";

export const LOGIN = {
    baseUrl: "login",
    get fullUrl() {
        return `/${this.baseUrl}`;
    },
};

export const FORGET_PASSWORD = {
    baseUrl: "forget-password",
    get fullUrl() {
        return `${ACCOUNT.fullUrl}/${this.baseUrl}`;
    },
}
export const ACCOUNT = {
    baseUrl: "account",
    get fullUrl() {
        return `/${this.baseUrl}`;
    },
};

export const LAYOUT = {
    baseUrl: "layout",
    get fullUrl() {
        return `/${this.baseUrl}`;
    },
};