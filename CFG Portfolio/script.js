function sayHello(){
const name = prompt("What is your name?")
alert ("Hello " + name + ", welcome to my website.");
}

sayHello();

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    alert("You rolled a " + dice + "!");
}

rollDice();

function jobSearch(){
   let months = 0
    let dice = Math.floor(Math.random() * 6) + 1;

    months += dice

    alert("It will take you " + months + " months to get your first developer job!")
}

jobSearch();

console.log("hello this is the console log")

//write a for loop that goes from 0 to 10

for(i=10; i>=0; i--){
console.log(i)
if(i==0){
    console.log("the loop has finished")
}
}

//write an object that has movie data

let myMovie = {
    title: 'Avatar 2',
    length: 190, //minutes
    releaseDate: '2022-12-16',
    seriesDetails: {
        isSeries: true,
        seriesType: 'Unknown',
        universeName: 'Avatar Universe',
        numberInSeries: 2
    },
    watchedStatus: false,
    rating: function(rating){
        return `${rating}/5`
    }
}

console.log(myMovie.title + ' is ' + myMovie.length + ' minutes long.')
console.log(`Movie #${myMovie['seriesDetails']['numberInSeries']} of the ${myMovie.seriesDetails.universeName}`)
console.log("I rate it" + myMovie.rating(5))
