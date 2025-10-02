
    let calculation = localStorage.getItem('number') ;

    const numberOutput = document.querySelector('.numberOutput');

    numberOutput.innerHTML = calculation; 

    if(calculation === null){
      calculation = '';
    }

    function updateNumber(value){
      calculation += value;
      console.log(calculation);
      document.querySelector('.numberOutput').innerHTML = calculation;

      localStorage.setItem('number',calculation);

      document.querySelector('.empty').classList.add('empty-disable');
    }

    if(Number(numberOutput.innerHTML) > 0 && Number(numberOutput.innerHTML) <=10000000000000000000000000000){
      document.querySelector('.empty').classList.add('empty-disable')
    }

    // console.log(Number(numberOutput.innerHTML));