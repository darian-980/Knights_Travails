function knightMoves(moveCoordinates, endCoordinates) {

    const visitedArray = [];

    function calculate_moves(moveCoordinates, endCoordinates) {

        function createNode() {
            let coordinate = null;
            let parent = null;

            return { coordinate, parent }
        }

        const queue = [moveCoordinates];
        const parentQueue = [];

        while (queue.length > 0) {
            let currentNode = createNode();
            currentNode.coordinate = queue.shift();
            if (parentQueue.length > 0) {
                currentNode.parent = parentQueue.shift();
            }
            visitedArray.push(currentNode);

            const possibleMoves = addFunction(currentNode.coordinate);

            for (let i = 0; i < possibleMoves.length; i++) {
                // console.log(possibleMoves[i])
                if (endCoordinates[0] === possibleMoves[i][0] && endCoordinates[1] === possibleMoves[i][1]) {
                    // console.log("node found")
                    let finalNode = createNode();
                    finalNode.coordinate = endCoordinates;
                    finalNode.parent = currentNode;
                    retraceMoves(finalNode);
                    return true;
                } else {
                    // console.log(possibleMoves[i] + " move isn't destination, pushing to queue")
                    queue.push(possibleMoves[i]);
                    parentQueue.push(currentNode);
                }
            }
        }
        // ex. [4,2]
    }
    return calculate_moves(moveCoordinates, endCoordinates)

    function addFunction(moveCoordinates) {
        const currentMoves = [];

        const addArrayList = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]]

        for (let i = 0; i < addArrayList.length; i++) {
            const newMove = [addArrayList[i][0] + moveCoordinates[0], addArrayList[i][1] + moveCoordinates[1]];
            // console.log(newMove);
            if ((newMove[0] >= 0 && newMove[0] <= 7) && (newMove[1] >= 0 && newMove[1] <= 7)) {
                if (!checkVisited(newMove)) {
                    currentMoves.push(newMove);
                }
            }
        }

        return currentMoves;
    }

    // return addFunction(moveCoordinates);

    function checkVisited(coordinates) {
        for (let i = 0; i < visitedArray.length; i++) {
            if (coordinates[0] === visitedArray[i].coordinate[0] && coordinates[1] === visitedArray[i].coordinate[1]) {
                // console.log("node already visited")
                return true;
            }
        }
        return false;
    }

    function retraceMoves(endNode) {
        const pathArray = [];

        function createPathArray(endNode) {
            if (endNode.parent !== null) {
                // console.log("retracing: " + endNode.coordinate)
                pathArray.push(endNode.coordinate)
                createPathArray(endNode.parent);
            }
            else {
                // console.log("retracing: " + endNode.coordinate)
                pathArray.push(endNode.coordinate)
                // console.log(pathArray)
            }
        }      

        createPathArray(endNode);

        const backwardsArray = pathArray.reverse(); // iterate through array backwards because it is appended to the array from end -> start

        console.log("You made it in " + backwardsArray.length + " moves! Here's your path:");
        for (let i = 0; i < backwardsArray.length; i++) {
            console.log("[" + backwardsArray[i][0] + ", " + backwardsArray[i][1] + "]")
        }
    }
}


knightMoves([3, 3], [4, 3])
knightMoves([3, 3], [6, 6])
knightMoves([1, 1], [7, 6])
//