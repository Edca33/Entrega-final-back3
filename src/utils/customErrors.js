
export class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorDictionary = {
    USER_NOT_FOUND: { message: "User not found", statusCode: 404 },
    PET_NOT_FOUND: { message: "Pet not found", statusCode: 404 },
    USER_ALREADY_EXISTS: { message: "User already exists", statusCode: 400 },
    INVALID_INPUT: { message: "Invalid input", statusCode: 400 },
};

export function createCustomError(type) {
    const error = errorDictionary[type];
    if (error) {
        return new CustomError(error.message, error.statusCode);
    }
    return new CustomError("Unknown error", 500);
}
