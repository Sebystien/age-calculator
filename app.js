'use strict';

//These are all the inputs

const  inputDay = document.querySelector('.input-day').value;
const inputMonth = document.querySelector('.input-month').value;
const inputYear = document.querySelector('.input-year').value;

const resultDataMonth = document.querySelector(".result-month");
const resultDataDay = document.querySelector(".result-days");
const resultDataYear = document.querySelector(".result-year");

console.log(resultDataDay,resultDataMonth,resultDataYear)

const formSubmission = document.getElementById('form-submit');


//Validation function

//function calculator 



const formValidation = () =>{
  

}

formSubmission.addEventListener('submit', e=>{
    e.preventDefault();
    calcAge();
    
    //inputYear.value = "";
   console.log('clicked')
 

});

console.log('test')