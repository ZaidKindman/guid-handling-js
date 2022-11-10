const guidRegexPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

class Guid {
    static get Empty(){
        return "00000000-0000-0000-0000-000000000000";
    }

    static NewGuid()  
    {  
       return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
          var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);  
          return v.toString(16);  
       });  
    }

    static IsValid(guid){
        if(!guid) return false;
        return guidRegexPattern.test(guid)
    }
}

module.exports = Guid;
