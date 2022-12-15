let getData = async () => {
    let url = "http://127.0.0.1:4000/"
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mess: "getData"
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            $('#table_id').DataTable({
                data: data,
            columns: [
                { data: 'email' },
                { data: 'password' },
                { data: 'first_name' },
                { data: 'last_name' },
                { data: 'birthday' },
                { data: 'is_active' },
            ]
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

$(document).ready(function () {
    getData()
})







