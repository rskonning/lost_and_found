
exports.generateString = function(length) {
    result = [];
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    for (i = 0; i < length; i++) {
       result.push(chars.charAt(Math.floor(Math.random() * chars.length)));
    }
    return result.join('');
};

