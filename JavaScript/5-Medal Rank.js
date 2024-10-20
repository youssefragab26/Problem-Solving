// On If

for(var i = 1; i < 11; i++){
    if(i == 1){
        console.log("Gold Medal")
    }else if(i == 2){
        console.log("Silver Medal")
    }else if(i == 3){
        console.log("Bronze medal")
    }else{
        //this block will run if no condition matches
        console.log(i)
    }
}    

// On Switch

for(var i = 1; i < 11; i++){
    switch(i){
        case 1:
        console.log('Gold Medal');
        break;
    case 2:
        console.log('Silver Medal');
        break;
    case 3:
        console.log('Bronze Medal');
        break;
    default:
        //this block will run if no condition matches
        console.log(i);
    }
}