const toggleButton = document.querySelector('.dark-light');
const colors = document.querySelectorAll('.color');

colors.forEach(color => {
    color.addEventListener('click', (e) => {
        colors.forEach(c => c.classList.remove('selected'));
        const theme = color.getAttribute('data-color');
        document.body.setAttribute('data-theme', theme);
        color.classList.add('selected');
    });
});

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
$(document).ready(() => {
    let user = {

    }
    let conversation = {
        user: async function (user_id) {
            let url = `/api/v1/users/${user_id}`
            try {
                let response = await fetch(url);
                let data = await response.json()
                if (response.status == 200) {
                    return data.user
                }
            } catch (error) {
                console.log(error);
            }

        },
        index: async function () {
            let current_id = $(".user-profile").data("id")
            let url = `/api/v1/conversations/${current_id}`
            try {
                let response = await fetch(url);
                let data = await response.json()
                if (response.status == 200) {
                    data.result.forEach(item => {
                        console.log(item.message);
                        // let time = $.timeago(item.message.createdAt) 
                        // console.log(time);
                        content += `<div class="msg online" data-conversation_id="${item.conversation_id}">
                            <img class="msg-profile" src="${item.user.avatar}"
                                alt="" />
                            <div class="msg-detail">
                                <div class="msg-username">${item.user.first_name} ${item.user.last_name}</div>
                                <div class="msg-content">
                                    <span class="msg-message">${item.message.content}</span>
                                </div>
                            </div>
                        </div>`
                    });
                    content += `<div class="overlay"></div>`
                    $(".conversation-area").html(content)
                }
                let content = ""

             

            } catch (error) {
                console.log(error);
            }
        }
    }
    conversation.index()
})