const sarah = {
      name: 'Sarah',
      job: {
        name: 'Andersen',
        hiringDate: '23.07.2020'
      }
}
    
function printJobName(user) {
      let {
            name,
            job:{
                  name: job_name,
                  hiringDate
            },
      } = user;
      console.log(job_name);
}
    
printJobName(sarah);

    