module.exports = function solveSudoku(matrix) {


  // preparation
  var stingMatrix=matrix.join();
  var stringMatrix=stingMatrix.split(",");
  for (let i=0;i<81;i++){
  }
  var newArray = [];
  for (let i=0;i<81;i++){
    newArray[i] = new A;
    newArray[i].blockNumber = searchBlock(i);
 }
 for (let i=0;i<newArray.length;i++) {
  newArray[i].number = stringMatrix[i];
 }
while(true) {
top_while:
while(true){

//  Search of variants begins here
 for (let i=0;i<newArray.length;i++) {
   if(newArray[i].number>0 && newArray[i].number<10) {
    newArray[i].stage = "solved";
    newArray[i].possible = newArray[i].number;
   }
   if(newArray[i].stage != "solved") {
     var horDigit = (i-i%9)/9;
     var vertDigit = i%9;
     var horizont = "";
     var vertical = "";
     var block = "";
     var possAuxNumbers = "";
     for(var j=0;j<9;j++) {
      horizont = horizont+String(newArray[horDigit * 9 + j].number);
     }
     for(var k=0;k<9;k++) {
      vertical = vertical+String(newArray[vertDigit + 9 * k].number);
     }
     for (var m = 0;m<newArray.length;m++){
       if (newArray[m].blockNumber==newArray[i].blockNumber) {
         block = block+String(newArray[m].number);
       }
     }
     for (var poss = 1;poss<10;poss++) {
      if(horizont.indexOf(poss)<0 && vertical.indexOf(poss)<0 && block.indexOf(poss)<0) {
        possAuxNumbers = possAuxNumbers+String(poss);
      }
     }
     newArray[i].possible = possAuxNumbers;
     if (newArray[i].possible.length==2) {
      newArray[i].double = true;
     } else {
      newArray[i].double = false;
     }
     if (newArray[i].possible.length==1) {
      newArray[i].number = newArray[i].possible;
      newArray[i].stage = "solved";
      break top_while;
     }
   }
 }



//This is hidden
for (let i=0;i<newArray.length;i++) {
  if(newArray[i].stage != "solved") {
  var horDigit = (i-i%9)/9;
  var vertDigit = i%9;
  var horizont = "";
  var vertical = "";
  var block = "";
  var possAuxNumbers = "";
  var horizontArr = [];
  var verticalArr = [];
  var blockArr = [];
  for(let j=0;j<9;j++) {
    horizont = horizont+String(newArray[horDigit * 9 + j].possible);
    horizontArr = horizont.split("");
  }
  for(let k=0;k<9;k++) {
    vertical = vertical+String(newArray[vertDigit + 9 * k].possible);
    verticalArr = vertical.split("");
  }
  for (let m = 0;m<newArray.length;m++){
    if (newArray[m].blockNumber==newArray[i].blockNumber) {
      block = block+String(newArray[m].possible);
      blockArr = block.split("");
    }
  }
  for (var hid = 0;hid<newArray[i].possible.length;hid++) {
    var possHidden = newArray[i].possible[hid];
    horizontArr = horizontArr.splice(horizontArr.indexOf(possHidden),1);
    verticalArr = verticalArr.splice(verticalArr.indexOf(possHidden),1);
    blockArr = blockArr.splice(blockArr.indexOf(possHidden),1);
    if(horizontArr.indexOf(possHidden)<0 || verticalArr.indexOf(possHidden)<0 || blockArr.indexOf(possHidden)<0) {
      newArray[i].possible = possHidden;
      newArray[i].number = possHidden;
      newArray[i].stage = "solved";
      break top_while;
    }
  }
 }
 }
 var finnArr = [
    [0, 0, 0, 9, 7, 0, 0, 0, 2],
    [9, 0, 5, 0, 0, 0, 0, 6, 0],
    [0, 3, 0, 0, 0, 1, 9, 5, 0],
    [0, 9, 0, 0, 0, 4, 2, 0, 3],
    [6, 0, 4, 2, 0, 0, 0, 9, 0],
    [3, 2, 1, 7, 0, 8, 6, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 2, 6],
    [2, 6, 0, 0, 0, 0, 1, 0, 4],
    [0, 0, 0, 0, 2, 6, 5, 0, 0]
  ];
 var cocounter = 0;
 for (var w=0;w<9;w++) {
  for (var p=0;p<9;p++) {
    finnArr[w][p] = +newArray[cocounter].number;
    cocounter++;
  }
 }
 return finnArr;
 }
}
}
function A() {
this.number = 0;
this.possible = 0;
this.stage = "unstaged";
this.double = false;
}

function searchBlock(a) {
  switch(a) {
       case 0:
       case 1:
       case 2:
       case 9:
       case 10:
       case 11:
       case 18:
       case 19:
       case 20:
        return 1;
       case 3:
       case 4:
       case 5:
       case 12:
       case 13:
       case 14:
       case 21:
       case 22:
       case 23:
        return 2;
       case 6:
       case 7:
       case 8:
       case 15:
       case 16:
       case 17:
       case 24:
       case 25:
       case 26:
        return 3;
       case 27:
       case 28:
       case 29:
       case 36:
       case 37:
       case 38:
       case 45:
       case 46:
       case 47:
        return 4;
       case 30:
       case 31:
       case 32:
       case 39:
       case 40:
       case 41:
       case 48:
       case 49:
       case 50:
        return 5;
       case 33:
       case 34:
       case 35:
       case 42:
       case 43:
       case 44:
       case 51:
       case 52:
       case 53:
        return 6;
       case 54:
       case 55:
       case 56:
       case 63:
       case 64:
       case 65:
       case 72:
       case 73:
       case 74:
        return 7;
       case 57:
       case 58:
       case 59:
       case 66:
       case 67:
       case 68:
       case 75:
       case 76:
       case 77:
        return 8;
       case 60:
       case 61:
       case 62:
       case 69:
       case 70:
       case 71:
       case 78:
       case 79:
       case 80:
        return 9;
 }
}