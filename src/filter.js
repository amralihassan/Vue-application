import Vue from "vue";

Vue.filter('uppercase',function(v){
    return v.toUpperCase();
});

Vue.filter('shorten',function(v,length,suffix){
    return v.substring(1,length) + ' ' +suffix;
})