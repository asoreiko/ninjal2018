

waldayu.transducers["hateruma_compare"] = (function() {
    var correspondences = {'ï': 'i', 'aa': 'a', 'uu': 'u'};
    var keys = ['aa', 'uu', 'ï'];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();var config = {
    "L1": {
        "name": "Hateruma",
        "underlying": "",
        "compare": "hateruma_compare",
        "lettersInLanguage" : ['a', 'aa', 'i', 'ii', 'ï', 'ïï', 'u', 'uu', 'e', 'ee', 'o', 'oo', 'k', 'g', 's', 'z', 't', 'd', 'n', 'h', 'p', 'b', 'm', 'j', 'r', 'w', 'n']
    },
    "L2": {
        "name": "English",
        "underlying": "",
        "compare": ""
    }
};

/* Search Variables */
var l1_weights_config = {'underlying_form': 0.1, 'compare_form': 1.0};

var l1_thresholds_config = {'partial': 1.0, 'other': 4.0, 'exact': 0.0};

var l2_weights_config = {'definition': 1.0};

var l2_thresholds_config = {'partial': 1.9, 'other': 1000.0, 'exact': 0.9};
