const sarah = {
      name: 'Sarah',
      job: {
        name: 'Andersen',
        hiringDate: '23.07.2020'
      }
}
    
function printJobName({name,job:{name: job_name,hiringDate},}) {
      console.log(job_name);
}
    
printJobName(sarah);

    