function Calculator() {
}

Calculator.add = function(text){
    if(text.trim().length != 0){
        var index = text.indexOf('//');
        var delimiter = ',';

        //check if there is a custom delimiter
        if(index != -1){
            index = text.indexOf('\n');
            delimiter = text.charAt(index - 1);
            text = text.substring(index + 1, text.length);
        }

        var arr = text.split(delimiter);
        var result = 0;
        var negatives = "";

        for(var i = 0; i < arr.length; i++){
            if(arr[i].indexOf('\n') != -1){
                var arr2 = arr[i].split('\n');

                for(var j = 0; j < arr2.length; j++){
                    var num = Calculator.getNumberFromText(arr2[j]);
                    if(num < 0){
                        negatives = negatives + ", " + num;
                    }
                    result += num;
                }
            }
            else
            {
                var num2 = Calculator.getNumberFromText(arr[i]);
                if(num2 < 0){
                    negatives = negatives + ", " + num2;
                }
                result += num2;
            }
        }

        try {
            if(negatives.length > 0) throw "negatives not allowed";
            return result;
        }
        catch(err) {
            alert(err + negatives);
            return null;
        }
    }
    return 0;
}

Calculator.getNumberFromText = function(text){
    var result = parseInt(text);
    if(!isNaN(result)){
        if(result > 1000){
            return 0;
        }
        return result;
    }
    return 0;
}