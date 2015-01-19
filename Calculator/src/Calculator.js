function Calculator() {
}

Calculator.add = function(text){
    if(text.trim().length != 0){
        var delimiters = [];

        //get delimiters
        var matchResult1 = text.match(/\/\/(.*)\n/);
        if(matchResult1 != null){
            var matchResult2 = text.match(/\[(.*)\]/);
            if(matchResult2 != null){
                if(matchResult2[1].indexOf('][') != -1){
                    var result = matchResult2[1].split('][');
                    if(delimiters.length == 0){
                        delimiters = result.concat();
                    }
                    else
                    {
                        delimiters.concat(result);
                    }
                }
                else
                {
                    delimiters.push(matchResult2[1]);
                }
            }
            else
            {
                delimiters.push(matchResult1[1]);
            }
            text = text.substring(text.indexOf('\n') + 1, text.length);
        }
        else
        {
            delimiters.push(',');
        }
        delimiters.push('\n');
        delimiters = Calculator.removeDuplicateInArray(delimiters);

        //get sum of numbers in text
        var result = Calculator.getNumberBetweenDelimiters(text, delimiters);
        var sum = result.sum;
        var negatives = result.negatives;

        try {
            if(negatives.length > 0) throw "negatives not allowed";
            return sum;
        }
        catch(err) {
            alert(err + negatives);
            return null;
        }
    }
    return 0;
}

Calculator.getNumberFromText = function(text){
    var result = Number(text);
    if(!isNaN(result)){
        if(result > 1000){
            return 0;
        }
        return result;
    }
    return result;
}

Calculator.removeDuplicateInArray = function(arr){
    var result = [];
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = 0;
    }

    for (i in obj) {
        result.push(i);
    }
    return result;
}

Calculator.getNumberBetweenDelimiters = function(text, delimiters){
    var negatives = "";
    var sum = 0;
    var isMatched = false;

    for(var i = 0; i < delimiters.length; i++){
        if(text.indexOf(delimiters[i]) != -1){
            var arr = text.split(delimiters[i]);

            for(var j = 0; j < arr.length; j++){
                var num = Calculator.getNumberFromText(arr[j]);

                if(!isNaN(num)){
                    if(num < 0){
                        negatives = negatives + ", " + num;
                    }
                    sum += num;
                }
                else
                {
                    var temp = Calculator.getNumberBetweenDelimiters(arr[j], delimiters);
                    sum += temp.sum;
                    if(temp.negatives.trim().length != 0){
                        negatives = negatives + ", " + num;
                    }
                }
            }
            isMatched = true;
            i = delimiters.length;
        }
    }

    if(isMatched == false && text.trim().length != 0){
        sum = Calculator.getNumberFromText(text);
        if(sum < 0){
            negatives = negatives + ", " + sum;
        }
    }

    return {
        sum: sum,
        negatives: negatives
    };
}