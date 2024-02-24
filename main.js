const form = document.forms.data
let btn = document.querySelector('button')

form.onsubmit = (e) => {
  e.preventDefault()

  let fm = new FormData(form)

  const data = {}

  fm.forEach((val, key) => data[key] = val)

  localStorage.setItem("db",JSON.stringify(data))


}

