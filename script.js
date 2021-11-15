const capitalize = (string) => {
    if (!string) {
        return string;
    }
    return string[0].toUpperCase() + string.slice(1, string.length);
};


const reverseString = (string) => {
    if (!string) {
        return string;
    }

    let reversed = [];
    for (let i = 0; i < string.length; i++) {
        reversed += string[string.length - i - 1];
    }
    return reversed;
};


const calculator = (() => {
    const add = (num1, num2) => {
        return Number(num1) + Number(num2);
    };

    const subtract = (num1, num2) => {
        return num1 - num2;
    };

    const divide = (num1, num2) => {
        if (num2 === 0) {
            throw new Error('math error (divided by 0)');
        }
        return num1 / num2;
    };

    const multiply = (num1, num2) => {
        return num1 * num2;
    };

    return {
        add,
        subtract,
        divide,
        multiply
    };
})();


const caesar = (() => {

    const cipher = (string, key) => {
        
        if (key < 0 || key > 25) {
            throw new Error('key should be within 0 and 25 inclusively');
        }

        let updatedString = '';
        
        // convert to Unicode (ASCII), update Unicode value, convert to Character
        for (let i = 0; i < string.length; i++) {
            // ensure is lowercase or uppercase alphabets (not number; not punctuation; etc)
            if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122 || 
                string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {

                // check if the character is lowercase & new character exceeds z
                if (string[i] == string[i].toLowerCase() && string.charCodeAt(i) + key > 122) {
                    updatedString += String.fromCharCode(97 + (string.charCodeAt(i) + key - 122) - 1);
                }
                // check if the character is uppercase & new character exceeds Z
                else if (string[i] == string[i].toUpperCase() && string.charCodeAt(i) + key > 90 ) {
                    updatedString += String.fromCharCode(65 + (string.charCodeAt(i) + key - 90) - 1);
                }
                else {
                    updatedString += String.fromCharCode(string.charCodeAt(i) + key);
                }
            } else {
                // leave punctuations unchanged
                updatedString += string[i];
            }
        }

        return updatedString;
    };

    const decipher = (string, key) => {
    
        if (key < 0 || key > 25) {
            throw new Error('key should be within 0 and 25 inclusively');
        }

        let updatedString = '';

        for (let i = 0; i < string.length; i++) {

            // ensure is lowercase or uppercase alphabets (not number; not punctuation; etc)
            if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122 || 
                string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {

                // check if the character is lowercase & new character exceeds a
                if (string[i] == string[i].toLowerCase() && string.charCodeAt(i) - key < 97) {
                    updatedString += String.fromCharCode(122 - (97 - (string.charCodeAt(i) - key + 1)));
                }
                // check if the character is uppercase & new character exceeds a
                else if (string[i] == string[i].toUpperCase() && string.charCodeAt(i) - key < 65 ) {
                    updatedString += String.fromCharCode(90 - (65 - (string.charCodeAt(i) - key + 1)));
                }
                else {
                    updatedString += String.fromCharCode(string.charCodeAt(i) - key);
                }
            } else {
                // leave punctuations unchanged
                updatedString += string[i];
            }
            
        }

        return updatedString;

    };


    return {
        cipher,
        decipher
    };

})();


const analyze = (array) => {

    const calculateAverage = () => {
        let sum = array.reduce((previousValue, currentValue) => previousValue + currentValue)
        return sum / array.length;
    };

    const calculateMin = () => {
        array.sort((a, b) => a - b);
        return array[0];
    };

    const calculateMax = () => {
        array.sort((a, b) => b - a);
        return array[0];
    };

    const average = calculateAverage();
    const min = calculateMin();
    const max = calculateMax();
    const length = array.length;


    return {
        average,
        min,
        max,
        length
    };
};


export { 
    capitalize,
    reverseString,
    calculator,
    caesar,
    analyze
};


