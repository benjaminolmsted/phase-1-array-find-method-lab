function didWin(element){
    return element.result === 'W';
}

function superbowlWin(arr){
    const team = arr.find(didWin);
    if(team)    
        return team.year;
    return undefined;
}