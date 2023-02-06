/*
fixed: per item wood requirments
1.chair --> 3 cft
2.table --> 10 cft
3.bed --> 50 cft

vary: quantity
*/

function woodcalculator(chairQuantity, tableQuantuty, bedQuantity){
const perChairWood = 3;
const perTableWood = 10;
const perBedWood = 50;

const chairWood = chairQuantity + perChairWood;
const tableWood = tableQuantuty + perTableWood;
const bedWood = bedQuantity + perBedWood;

// console.log(chairQuantity, tableQuantuty, bedQuantity);

    const totalWood = chairWood +tableWood +bedWood;
    return totalWood;
}   

const totalWood = woodcalculator(1, 1, 1);
console.log('total wood required: ', totalWood);
