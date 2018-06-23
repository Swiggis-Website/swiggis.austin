'use strict';
var getZips = function (data) {
    var fieldsObject = [];
    for (var i = 0; i < data.feed.entry.length; i++) {
        var row = data.feed.entry[i];
        var rowObject = {
            LiveZip: row.gsx$homezipcode.$t,
            WorkZip: row.gsx$workzipcode.$t,
        };
        fieldsObject.push(rowObject);
    }
    return fieldsObject;
};
module.exports = getZips;