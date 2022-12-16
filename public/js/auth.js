
let auth = {
    login: async function () {
        spinner()
        let email = $("#inputEmail").val()
        let password = $("#inputPassword").val()
        let url = "/api/v1/login"
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }
        try {
            let response = await fetch(url, config)
            let data = await response.json()
            console.log(data);
            spinner()
            if (response.status == 200) {
                // if(data.role==="admin"){
                //     window.location.href = "/admin";
                // }else{
                //     window.location.href = "/";
                // }
                Swal.fire({
                    icon: 'success',
                    title: 'Đăng nhập thành công',
                    showConfirmButton: false,
                    timer: 1500
                }).then(result => {
                    if (result) {
                        let href = (data.role=="admin")?"/admin":"/";
                        window.location.href =href ;
                    }
                });
            } else {
                alert(data.message)
            }
        } catch (error) {
            console.log(error);
        }
    },
    register: async function () {
        let email = $("#inputEmail").val()
        let firstName = $("#inputFirstName").val()
        let lastName = $("#inputLastName").val()
        let password = $("#inputPassword").val()
        let confirmPassword = $("#inputConfirmPassword").val()
        let url = "/api/v1/register"
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                lastName: lastName,
                firstName: firstName,
                confirmPassword: confirmPassword
            })
        }
        try {
            let response = await fetch(url, config)
            let data = await response.json()
            if (response.status == 200) {
                console.log(data);
                // Swal.fire({
                //     icon: 'success',
                //     title: 'Đăng ký thành công',
                //     showConfirmButton: false,
                //     timer: 1500
                // }).then(result => {
                //     if (result) {
                //         console.log(object);
                //         // window.location.href = "/admin";
                //     }
                // });
            } else {
                alert(data.message)
            }
        } catch (error) {
            console.log(error);
        }
    },
    logout: async function () {
        let url = "/api/v1/logout"
        try {
            let response = await fetch(url);
            if (response.status == 200) {
                window.location.href = "/login";
            }
        } catch (error) {
            console.log(error);
        }
    }
}
$(document).ready(() => {
    $(".btn-login").on("click", (e) => {
        e.preventDefault()
        auth.login()
    })
    $(".btn-register").on("click", (e) => {
        e.preventDefault()
        auth.register()
    })
    $(".btn-logout").on("click", (e) => {
        e.preventDefault()
        auth.logout()
    })
})