//I have a list that will loop through m and n
let headList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let lenght = headList.length;
let m = 2;
let n = 3;

//I need to loop and remove according the following rules
//rule 1 headList is the array we need to remove 
//rule 2 I need to keep the first nodes according with the m variable
//meaning that if m=3 i need to keep the first 3 nodes from the array
//rule 3 remove th next n modes. So, if n=5 I need to keep 2 nodes than remove 5 nodes
//rule 4 loop untul reach the end of the list

function removeNodes(array, nodesToKeep, nodesToRemove) {
    let finalArray = [];
    console.log(array);
    console.log(nodesToKeep);
    console.log(nodesToRemove);
    //I need to loop through the head array
    for (let i = 0; i <= array.lenght; i++) {
        //then my idea was to push, or pop the number acording with the parameters
        console.log(array);
        finalArray.push(1)
    }
    console.log(finalArray);
}

removeNodes(headList, m, n);