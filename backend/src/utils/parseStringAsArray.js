module.exports = function parseStringAsArray(arrayAsString) {
    if (arrayAsString !== undefined)
        return arrayAsString.split(',').map(tech => tech.trim());
}