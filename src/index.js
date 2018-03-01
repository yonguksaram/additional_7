module.exports = function solveSudoku(matrix) {

  while (true) {
  var count=0;
  //alert(count);
  top:
  for (let i = 0; i<9; i++) {
    for (let j = 0; j<9; j++) {
      count++;
      //alert (count);
      if (matrix[i][j]==0) {
        //alert("wow");
        if (searchPossibleValues(matrix, i, j)>0) {
          matrix[i][j]=searchPossibleValues(matrix, i, j);
          break top;
        }
      }
    }
  }
  if (count==81) {
    /*var finMatrix = [];
    for (var i=0;i<9;i++) {
      for (var j=0;j<9;j++) {
        var finMatrix = finMatrix.concat(matrix[i][j])
      }
    }
    //alert(finMatrix);
    if (finMatrix.indexOf(0)<=0) { */
    return matrix
    }
  }
  //alert (count);
  }
  
  
  function searchPossibleValues(arr, m, n) {
  let auxPossible = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  
  let hor=arr[m];
  let horizontal=hor.concat();
  horizont_while:
  while (true) {
    if (horizontal.length==0) break
  for (var k=0; k<horizontal.length;k++) {
      if (horizontal[k] == 0) {
        horizontal.splice(k,1);
        break
      }
      if (horizontal.length==0 || k==horizontal.length-1)
      break horizont_while;
  }
  }
  
  let vertic=[arr[0][n], arr[1][n], arr[2][n], arr[3][n], arr[4][n], arr[5][n], arr[6][n], arr[7][n], arr[8][n]];
  let vertical=vertic.concat();
  vertical_while:
  while (true) {
    if (vertical.length==0) break
  for (var l=0; l<vertical.length;l++) {
      if (vertical[l] == 0) {
        vertical.splice(l,1);
        break
      }
      if (vertical.length==0 || l==vertical.length-1)
      break vertical_while;
  }
  }
  
  let blockHor=m-m%3;
  let blockVert=n-n%3;
  let bl=[arr[blockHor][blockVert], arr[blockHor][blockVert+1], arr[blockHor][blockVert+2], arr[blockHor+1][blockVert], arr[blockHor+1][blockVert+1], arr[blockHor+1][blockVert+2], arr[blockHor+2][blockVert], arr[blockHor+2][blockVert+1], arr[blockHor+2][blockVert+2]];
  let block=bl.concat();
  block_while:
  while (true) {
    if (block.length==0) break
  for (var p=0; p<block.length;p++) {
      if (block[p] == 0) {
        block.splice(p,1);
        break
      }
      if (block.length==0 || p==block.length-1)
      break block_while;
  }
  }
  //alert(horizontal);
  //alert(vertical);
  //alert(block);
  while (true){
    var counter=0;
    for (var q=0; q<auxPossible.length;q++) {
      counter=0;
      if (horizontal.length>0 && horizontal.indexOf(auxPossible[q])>=0) {
        auxPossible.splice(q,1);
        //alert (auxPossible);
        break
      }
      if (vertical.length>0 && vertical.indexOf(auxPossible[q])>=0) {
        auxPossible.splice(q,1);
        //alert (auxPossible);
        break
      }
      if (block.length>0 && block.indexOf(auxPossible[q])>=0) {
        auxPossible.splice(q,1);
       // alert (auxPossible);
        break
      }
      counter++;
    }
    if (auxPossible.length==1) {
      //alert (auxPossible[0]);
      //alert (m+" "+" "+n);
      return auxPossible[0];
      }
    if (counter>0) return 0;
    }
  }