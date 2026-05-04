function knightMoves(moveCoordinates, endCoordinates) {

    const visitedArray = [];

    function calculate_moves(moveCoordinates, endCoordinates) {

        const queue = [moveCoordinates];

        while (queue.length > 0) {
            const currentNode = queue.shift();
            visitedArray.push(currentNode);

            const possibleMoves = addFunction(currentNode);

            for (let i = 0; i < possibleMoves.length; i++) {
                console.log(possibleMoves[i])
                if (endCoordinates[0] === possibleMoves[i][0] && endCoordinates[1] === possibleMoves[i][1]) {
                    console.log("node found")
                    return true;
                } else {
                    console.log(possibleMoves[i] + " move isn't destination, pushing to queue")
                    queue.push(possibleMoves[i]);
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
            if (coordinates[0] === visitedArray[i][0] && coordinates[1] === visitedArray[i][1]) {
                console.log("node already visited")
                return true;
            }
        }
        return false;
    }
}


console.log(knightMoves([3, 3], [4, 3]))
//