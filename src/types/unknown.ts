//Il tipo unknown è più restrittivo del tipo any
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// userName = userInput; Non si può fare con unknnown

if(typeof userInput === 'string') {
    userName = userInput;
}

//Il tipo never viene usato se non viene appunto ritornato niente,
//neanche void.
function generateError(message: string, code: number): never {
    throw {
        message,
        errorCode: code
    }
}

generateError('An error occurred!', 500);