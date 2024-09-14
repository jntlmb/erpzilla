export class LoginPost {
    constructor(identifier = null, password = null) {
        this.identifier = identifier;
        this.password = password;
    }

    toJSON() {
        return {
            identifier: this.identifier,
            password: this.password
        };
    }
}

export default LoginPost;
