
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    return cats.push("Ralph");
}

function destructivelyPrependCat(){
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

const broom = [...cats, "Broom"];

function appendCat(){
    return broom;
}

const arnold = ["Arnold", ...cats];

function prependCat(){
    return arnold;
}

const catRemoveEnd = cats.slice(0, cats.length - 1);

function removeLastCat(){
    return catRemoveEnd;
}

const catRemoveStart = cats.slice(1);

function removeFirstCat(){
    return catRemoveStart;
}