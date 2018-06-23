'use strict';
var _ = require('lodash');
var extractZips = function (survey) {
    var liveZipsList = [];
    var workZipsList = [];
    
    survey.forEach(function(row) { 
        liveZipsList.push(row.LiveZip);
        workZipsList.push(row.WorkZip);
    });

    var liveZips = {};
    var workZips = {};
    
    var liveZipCounts = {};
    liveZipsList.forEach(function(i) { 
        liveZipCounts[i] = (liveZipCounts[i] || 0)+1; 
    });
    
    var workZipCounts = {};
    workZipsList.forEach(function(i) { 
        workZipCounts[i] = (workZipCounts[i] || 0)+1; 
    });

    return {
        liveZips: liveZipCounts,
        workZips: workZipCounts
    };
};
module.exports = extractZips;