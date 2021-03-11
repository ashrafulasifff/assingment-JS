
// Budgeting 


function budgetCalcltator(watch,phone,laptop) {
    if(typeof watch ! = 'number'|| watch <0 ) {
        return "valid".
    }

    if(typeof phone ! ='number'|| phone <0){
        return "valid";
    }
    if(typeof laptop ! = 'number'|| laptop<0){

    }
    return watch*50 + phone*100 + laptop*500;
}



// kilometer to meter

function kilometerToMeter(kilometer){
    if(kilometer >=0){
        var meter = kilometer*1000;
    }
    else{
        console.log("impossible");
    }
    return meter;
}

// hotelcost
function hotelcost(days){
    if(typeof days !='number'|| days<0){
        return "please enter valid number".

    }
    if(days<=10){
        return days*100;
    }
    if(days<=20){
        return 10*100+(days-10)*80;
    }
    else{
        return 10*100+10*80+(days-20)*50;

    }
    

    
}


//  mega friend 

function megaFriend (names){
    if(name.length==0){
        return " enter a valid array ".

    }
    let longest =name[0];
    for( let i=0;i<names.length;i++){
        if(names[i].length>longest.length){
            longest=names[i];
        }
    }
    return longest;
}