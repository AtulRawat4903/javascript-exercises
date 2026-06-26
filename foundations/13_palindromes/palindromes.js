const palindromes = function (string) {
    const lower = string.toLowerCase();
    const replace = lower.replace(/[^a-z0-9]/g, "");
    const reverse = replace.split("").reverse().join("");

    return replace === reverse;
};

// Do not edit below this line
module.exports = palindromes;
