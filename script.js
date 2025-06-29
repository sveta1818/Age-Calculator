function ageCalc(){
    let birthYear = prompt('What is your year of birth?(ex: 1987, 1994)');
    let curYear = new Date().getFullYear();
    let age = curYear - birthYear;
    document.getElementById('result').innerText = `You are ${age} years old`;
}