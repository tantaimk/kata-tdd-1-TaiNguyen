function Calculator() {
}

Calculator.add = function(text){
    if(text.trim().length != 0){
        if(text.indexOf(',') != -1){
            var arr = text.split(',');
            return parseInt(arr[0]) + parseInt(arr[1]);
        }
        return parseInt(text);
    }
    return 0;
}