const ul = document.getElementById(`email-list`);

for (let i = 0; i < 10; i++) {

    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
        .then(result => {
            
            const email = result.data.response;
            let html = `<li>${email}</li>`;

            ul.innerHTML += html
        });
}