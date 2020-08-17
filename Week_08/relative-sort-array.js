var relativeSortArray = function (arr1, arr2) {
    return arr1.sort((a, b) => {
        const ia = arr2.indexOf(a);
        const ib = arr2.indexOf(b);

        if (ia == -1 && ib == -1) {
            return a - b;
        } else if (ia == -1) {
            return 1
        } else if (ia !== -1 && ib !== -1) {
            return ia - ib;
        }
    })
};