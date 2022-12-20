let user = {
    index: async function () {
        spinner()
        let url = "/api/v1/users"
        try {
            let response = await fetch(url)
            let data = await response.json()
            spinner()
            if (response.status == 200) {
                let table = $("#table-users").DataTable({
                    columnDefs: [
                        {
                            searchable: false,
                            orderable: false,
                            targets: 0,
                        },
                    ],
                    order: [[1, 'asc']],
                    data: data.data,
                    columns: [
                        {
                            data: null,
                            defaultContent: '',
                        },
                        {
                            render: function(data,type,row) {
                                var content=`<img src="${row.avatar}" alt="image"/>`;
                                return content;
                            }
                        },
                        { 
                            render: function(data,type,row) {
                                return `${row.first_name} ${row.last_name}`;
                            }
                         },
                        { data: 'email' },
                        {
                            render: function(data, type, row){
                                let badge = (row.role=="admin")?"danger":"success";
                                let content = `<label class="badge badge-${badge}">${row.role}</label>`
                                return content;
                            }
                        },
                        {
                            render: function(data, type, row){
                                let badge = (!row.is_active)?"danger":"success";
                                let isOnline =(!row.is_active)?"offline":"online";
                                let content = `<label class="badge badge-${badge}">${isOnline}</label>`
                                return content;

                            }
                        },
                    ],

                });
                table.on('order.dt search.dt', function () {
                    table.column(0, {
                        search: 'applied',
                        order: 'applied'
                    }).nodes().each(function (cell, i) {
                        cell.innerHTML = i + 1;
                    });
                }).draw();
            } else {
                alert(data.message)
            }
        } catch (error) {
            console.log(error);
        }
    },
}
user.index()
