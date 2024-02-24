let form = document.forms.sub
let inp_pd = document.querySelector('.password')
form.onsubmit = (e) => {
    e.preventDefault()
    
    let data = {
        id: Math.random(),
        formdata: new FormData(form).get('password'),
        status: false
    }

    let pd = localStorage.getItem('db')

    if(data.formdata === pd) {
        alert('success')
    } else {
        alert('unsuccess')
    }
}