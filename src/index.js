/**
 * @param arr - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;

    let n = preferences.length;
    var triangles = [];

    for (var i = 1; i < n; i++) {
        if (triangles.includes(i)!= true) {
            var first = i;
            var second = preferences[i - 1];
                       if(first != second) {
                var third = preferences[second - 1];
                if ((second != third) && (preferences[third - 1] == first)) {
                    count++;
                    triangles.push(second);
                    triangles.push(third);

                }
            }

        }
    }


    return count;

};
