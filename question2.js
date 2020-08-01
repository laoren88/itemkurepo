function solution(N, users) {
    var answer = [];
    
    if(N < 1 || N > 500) return;

    var arrData = JSON.parse(users); 
    var tempData = [];
    var tempAnswer = [];
    var calculationLength = arrData.length;
    var sorting = [];

    if(arrData.length < 1 || arrData.length > 200000) return;

    for (var i = 0 ; i < arrData.length; i++) {
        if(arrData[i] < 1 || arrData[i] > N+1) continue;
            if(tempData[arrData[i]]) {
                tempData[arrData[i]] = tempData[arrData[i]] + 1;
            } else {
                tempData[arrData[i]] = 0;
                tempData[arrData[i]] += 1;
            }
    }

    for (var j = 1 ; j <= N ; j++) {
        if(!tempData[j]) {
            tempAnswer[j] = [j, 0];
        } else {
            tempAnswer[j] = [j, tempData[j] / calculationLength];
            calculationLength -= tempData[j];
        }
    }

    sorting = tempAnswer.sort(function(a, b) {
        return b[1] - a[1];
    });
    for (var i =0  ; i < N; i++) {
        answer[i] = sorting[i][0];
    }

    console.log(answer);
    return answer;
};