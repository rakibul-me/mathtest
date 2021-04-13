function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev, index) {
    ev.dataTransfer.setData("text", ev.target.id);
    document.getElementById('drop'+index).setAttribute('ondragover', 'allowDrop(event)');
}

function drop(ev, index) {
    createAnother(index);
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(document.getElementById(data))
    ev.target.appendChild(document.getElementById(data));
}
function createAnother(index){
    var img = document.createElement("IMG");
    if(index == "1") {
        img.src = "image/hundred.svg";
        img.setAttribute('alt', 'Hundred');
        img.setAttribute('draggable', 'true');
        img.setAttribute('ondragstart', "drag(event, '1')");
        img.setAttribute('id', "drag" + (Math.floor(Math.random()*1000)+1).toString());
    }
    else if(index == "2") {
        img.src = "image/ten.svg";
        img.setAttribute('alt', 'Ten');
        img.setAttribute('draggable', 'true');
        img.setAttribute('ondragstart', "drag(event, '2')");
        img.setAttribute('id', "drag" + (Math.floor(Math.random()*1000)+1).toString());
    }
    else if(index == "3") {
        img.src = "image/one.svg";
        img.setAttribute('alt', 'One');
        img.setAttribute('draggable', 'true');
        img.setAttribute('ondragstart', "drag(event, '3')");
        img.setAttribute('class', "big");
        img.setAttribute('id', "drag" + (Math.floor(Math.random()*1000)+1).toString());
    }
    else {return;}
    document.getElementById('dragCont'+index).appendChild(img);
    return;
}

function resetBlocks(){
    var list = [document.getElementById('drop1'), document.getElementById('drop2'), document.getElementById('drop3')];
    var i, length;
    length = list.length;
    for(i = 0; i < length; i++){
        while(list[i].hasChildNodes()){
            list[i].removeChild(list[i].firstChild);
        }
    }
}


var answer = document.getElementsByClassName('ans');
var alength = answer.length;
var question = document.getElementsByClassName('qsn');
var point = 0;


function tryAgain(){
    var i;
    for(i = 0; i < alength; i++){
        answer[i].value = "";
    }
    point = 0;

    resetBlocks();
}


var result = document.getElementById('result');
    var score = document.getElementById('score');


function submit(){
    var i;
    for(i = 0; i < alength; i++){
        if(eval(question[i].innerText) == answer[i].value){
            point++;
        }
    }
    

    result.style.opacity = 1;
    result.style.zIndex = 2;
    score.innerText = point;
}

function back(){
    result.style.opacity = 0;
    result.style.zIndex = -10;
    score.innerText = point;
    point = 0;
}