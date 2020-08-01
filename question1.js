function solution(record) {
    var answer = [];
    var tempAnswer = [];
    var listUid = [];

    if(record.length < 1) {
        alert('Please add input');
    } 
    if(record.length > 100000) {
        alert('Input over 100000');
    }

    var arrData = JSON.parse(record); 
    for (var i = 0; i < arrData.length ; i++) {
        var temp = arrData[i].split(" ");
        switch(temp[0]) {
          case "Enter":
            var uid = temp[1];
            var name = temp[2];

            if(listUid[uid]) {
                listUid[uid][1] = 1;
            } else {
                listUid[uid] = [name, 1];
            }
            tempAnswer[tempAnswer.length] = [uid, ' came in.'];
            break;
          case "Leave":
            var uid = temp[1];
            tempAnswer[tempAnswer.length] = [uid, ' has left.'];
            listUid[uid][1] = 0;
            break;
          case "Change":
            var uid = temp[1];
            var name = temp[2];

            if(listUid[uid][1] == 1) {
                listUid[uid][0] = name;
            }
            break;
          default:
        }
    }

    for (var i = 0 ; i < tempAnswer.length ; i++) {
        answer[i] = listUid[tempAnswer[i][0]][0] + tempAnswer[i][1];
    }

    console.log(answer);
    return answer;
}

