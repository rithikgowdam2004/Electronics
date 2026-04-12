// let myform = document.querySelector('form')
// console.log(myform)

// myform.onsubmit=(e)=>{
//     e.preventDefault();

//     let email = document.querySelectorAll('input')[0]
//     console.log(email.value)

//     let password = document.querySelectorAll('input')[1]
//     console.log(password.value)

//     let storeData = JSON.parse(localStorage.getItem('UserDetails'))
//     console.log(storeData)
//     let sD = storeData;
//     console.log(sD)
//     if(sD){
//        // if (email === sD.email ) {
//             alert("Login Successfull")
//             window.location.href="../Homepage.html"

//         }
//         // else{
//         //     alert("Invalid password")
//         // }

//     }


let form = document.querySelector('form')
console.log(form)

form.onsubmit = (e) => {
  e.preventDefault();
  //console.log("Form Submited")

  let email = document.querySelectorAll('input')[0].value
  console.log(email)

  let password = document.querySelectorAll('input')[1].value
  console.log(password)
  let data = localStorage.getItem(('UserDetails'))
  let storeData = JSON.parse(data)
  console.log(storeData)
  if (storeData) {

    if (email === storeData.email && password === storeData.password) {
      alert("Login Successfull")
      window.location.href = "../Homepage.html"


    } else {
      alert("Invaild user details")
    }
  }


}

