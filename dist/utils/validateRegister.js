"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegsiter = void 0;
const validateRegsiter = (options) => {
    if (options.username.length <= 4) {
        return [
            {
                field: "username",
                message: "length must be greater than 4",
            },
        ];
    }
    if (!options.email.includes("@")) {
        return [
            {
                field: "email",
                message: "invalid email address",
            },
        ];
    }
    if (options.password.length <= 6) {
        return [
            {
                field: "password",
                message: "length must be greater than 6",
            },
        ];
    }
    if (options.username.includes("@")) {
        return [
            {
                field: "username",
                message: "cannot include an @",
            },
        ];
    }
    return null;
};
exports.validateRegsiter = validateRegsiter;
//# sourceMappingURL=validateRegister.js.map