const business = 350;
const minister = 250;
const army = 600;
// if (business > minister){
//     console.log('Business person er pola is bigger ');

// }
// else {
//     console.log('minister er pola is bigger');
// }


    // if (business > minister && business > army){
    //     console.log('Business is bigger ');
    // }
    // else if (minister > business && minister > army){
    //     console.log('minister is bigger ');

    // }
    // else if (army > business && army > minister){
    //     console.log('army is bigger');
    // }
    // second way 
    // var max = Math.max(business, minister, army);
    // console.log('largest is ', max);

    // third way 
    function findLargest(first, second){
        if (first > second){
            return first;
        }
        else{
            return second;
        }
    }
    const larger = findLargest(354, 241);
    console.log('largest is ', largest);