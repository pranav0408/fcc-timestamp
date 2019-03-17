const timestamp = function(data) {
    var out = {unix: null, utc: null};
    var d = new Date(data)
    if (d) {
        out.unix = d.getTime();
        out.utc = d.toUTCString();
    }
    else{
        out.utc = "Invalid Date"
    }
    
    return out;
};
module.exports = timestamp;