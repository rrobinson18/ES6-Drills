let favMovie = (movie = 'The Room', name = 'World') => console.log(`My name is ${name} and my favorite movie is ${movie}`);

favMovie('Love & Basketball', 'Kesha');
favMovie();

let getFirstName = (name) => {
    console.log(name);
}
getFirstName('Mother of Dragons');

let firstName = name => console.log(name);
firstName('Jon Snow');

function getNum(x, y) {
    let justAdd = x + y;
    let justSub = x - y;

    return { 
        sum: `${justAdd}`,
        diff: `${justSub}`
    };
}

let results = getNum(7,4);
console.log(results);

let p1 = ([name, location, favFood]) => {
    console.log(name);
    console.log(location);
    console.log(favFood);
}

let arr = ['Paul', 'Birmingham', 'Kimchi'];

p1(arr);