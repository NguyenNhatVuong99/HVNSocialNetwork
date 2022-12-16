let user = {
    index: async function () {
        spinner()
        let url = "/api/v1/use"
        try {
            let response = await fetch(url)
            let data = await response.json()
            spinner()
            if (response.status == 200) {
                this.table(data)
            } else {
                alert(data.message)
            }
        } catch (error) {
            console.log(error);
        }
    },
    table: async function(data){
        console.log(data);
        let content = ''
        // let index = data.currentIndex
        let index = 1;
        data.forEach(item => {
            let gender = item.gender == 'male' ? 'nam' : 'nữ';
            // let date = moment(item.birthday).format('MM/DD/YYYY');
            content +=
                `<tr>
                    <td>
                        ${index}
                    </td>
                    <td>
                    ${item.lastName} ${item.firstName}  
                    </td>
                    <td>
                        ${item.email}
                    </td>
                    <td>
                        ${item.email}
                    </td>
                    <td>
                        ${item.email}
                    </td>
                    <td>
                        ${item.email}
                    </td>
                </tr>`
            index++
        });
        document.getElementById("tbody-users").innerHTML = content

    }
}
user.index()
