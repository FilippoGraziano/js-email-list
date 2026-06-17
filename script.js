const ulEmail = document.getElementById(`email-list`);
const buttonReload = document.getElementById(`reload-email-list`)

buttonReload.addEventListener(`click`, e => {

    let html = ``;
    for (let i = 0; i < 10; i++) {

        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then(result => {

                const email = result.data.response;
                html += `<li>${email}</li>`;

                ulEmail.innerHTML = html;
            });
    }

    if (buttonReload.innerText === `Carica email`) buttonReload.innerText = `Ricarica email`
})