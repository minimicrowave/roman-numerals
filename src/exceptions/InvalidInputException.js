class InvalidInputException extends Error {
    constructor(message) {
        super(message);
    }
}

module.exports = InvalidInputException;