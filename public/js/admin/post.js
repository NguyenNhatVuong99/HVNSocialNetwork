let post = {
    index: async function () {
        spinner()
        let url = "/api/v1/posts"
        try {
            let response = await fetch(url)
            let data = await response.json()
            // console.log(data.data);
            spinner()
            if (response.status == 200) {

                let table = $("#table-posts").DataTable({
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
                            render: function (data, type, row) {
                                var content = `<img src="${row.user[0].avatar}" alt="image"/>`;
                                return content;
                            }
                        },
                        {
                            render: function (data, type, row) {
                                return `${row.user[0].first_name} ${row.user[0].last_name}`;
                            }
                        },
                        { data: 'content' },

                        {
                            render: function (data, type, row) {
                                var content = `<img src="${row.file_url}" alt="image"/>`;
                                return content;
                            }
                        }
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
post.index()
