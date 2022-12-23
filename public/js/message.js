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

    $(".input-message").val("")
    let cuttr = () => {
        new Cuttr(".msg-message", {
            truncate: 'characters',
            length: 25,
            ending: '...',
            readMoreBtnTag: 'button',
        });
    }

    let user = {

    }
    let conversation = {
        index: async function () {
            // spinner()
            let current_id = $(".user-profile").data("id").slice(0, -1)
            let url = `/api/v1/conversations/user/${current_id}`
            try {
                let response = await fetch(url);
                let data = await response.json()
                if (response.status == 200) {
                    // spinner()
                    let content = ""
                    let user_id
                    data.conversations.forEach((item, index) => {
                        let updatedAt = $.timeago(item.updatedAt)
                        let text = (item.last_message_id.user_id === current_id) ? "Bạn: " : ""
                        let friend =(current_id!==item["users"][0]["_id"])?item["users"][0]:item["users"][1]
                        if (index == 0) user_id = friend._id
                        let isOnline = (friend.is_active) ? "online" : ""
                        content += `<div class="msg ${isOnline}" id="msg-${item._id}" data-conversation_id="${item._id}" data-friend_id="${friend._id}">
                            <img class="msg-profile" src="${friend.avatar}"
                                alt="" />
                            <div class="msg-detail">
                                <div class="msg-username">${friend.first_name} ${friend.last_name}</div>
                                <div class="msg-content">
                                    <span class="msg-message" id="msg-message-${item._id}">${text}${item.last_message_id.content}</span>
                                    <span class="msg-date float-r" id="msg-date-${item._id}">${updatedAt}</span>
                                </div>
                            </div>
                        </div>`
                    });
                    content += `<div class="overlay"></div>`
                    $(".conversation-area").html(content)
                    cuttr()
                    this.getMessage(data.conversations[0]._id, user_id)
                }
            } catch (error) {
                console.log(error);
            }
        },
        getMessage: async function (conversation_id, friend_id) {
            let url = `/api/v1/conversations/message`
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    conversation_id,
                    user_id: friend_id
                })
            }
            try {
                let response = await fetch(url, config);
                let data = await response.json()
                if (response.status == 200) {
                    let messages = data.data.messages
                    let user = data.data.user
                    $(".chat-area-title").text(`${user.first_name} ${user.last_name}`)
                    $(".detail-title").text(`${user.first_name} ${user.last_name}`)
                    $(".detail-avatar").attr("src", user.avatar);
                    $(".chat-area-profile").attr("src", user.avatar);
                    let content = ''
                    messages.forEach(item => {
                        let user = item.user_id
                        let owner = (friend_id == user._id) ? "" : "owner"
                        content += ` <div class="chat-msg ${owner}">
                        <div class="chat-msg-profile">
                            <img class="chat-msg-img"
                                src="${user.avatar}"
                                alt="" />
                        </div>
                        <div class="chat-msg-content">
                            <div class="chat-msg-text">${item.content}</div>
                        </div>
                    </div>`

                    });
                    $(".chat-area-main").html(content)
                    $(".input-message").attr("data-conversation_id", conversation_id)
                    $(".input-message").attr("data-friend_id", friend_id)
                    $container = $(".chat-area")
                    $container.animate({ scrollTop: $container[0].scrollHeight }, 1000);
                }
            } catch (error) {
                console.log(error);
            }
        },
        postMessage: async function (content, conversation_id, friend_id) {
            let url = `/api/v1/messages`
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content, conversation_id, friend_id
                })
            }
            try {
                let response = await fetch(url, config);
                let data = await response.json()
                if (response.status == 200) {
                    this.getMessage(conversation_id, friend_id)
                    let updatedAt = $.timeago(data.data.updatedAt)
                    $(`#msg-message-${conversation_id}`).text(`Bạn: ${content}`)
                    $(`#msg-date-${conversation_id}`).text(updatedAt)
                    $(".input-message").val("")
                    cuttr()
                    $container = $(".chat-area")
                    $container.animate({ scrollTop: $container[0].scrollHeight }, 1000);
                    // socket.on('message', getMessage);
                }
            } catch (error) {
                console.log(error);
            }
        }

    }
    conversation.index()
    $(document).on("click", ".msg", function (e) {
        let conversation_id = $(this).data("conversation_id")
        let friend_id = $(this).data("friend_id")
        conversation.getMessage(conversation_id, friend_id)
    })
    $(document).on("keyup", ".input-message", function (e) {
        let conversation_id = $(this).data("conversation_id")
        let friend_id = $(this).data("friend_id")
        var content = $(this).val();
        if (e.keyCode == 13 && content != "") {
            conversation.postMessage(content, conversation_id, friend_id)
        }
    });

    Pusher.logToConsole = true;
    var pusher = new Pusher('44e9d951732245c631b5', {
        cluster: 'ap1'
    });
    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function (data) {
        conversation.index();
    });
})
