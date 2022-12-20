let newfeed = {
    post: async function () {
        let url = "/api/v1/posts"
        try {
            let response = await fetch(url)
            let data = await response.json()
            if (response.status == 200) {
                let html = ``
                data.data.forEach(item => {
                    let user = item.user[0];
                    html += `<div class="status-field-container write-post-container">
                    <div class="user-profile-box">
                        <div class="user-profile">
                            <img src="${user.avatar}" alt="">
                            <div>
                                <p>${user.last_name} ${user.first_name} </p>
                                <small>August 13 1999, 09.18 pm</small>
                            </div>
                        </div>
                        <div>
                            <a href="#"><i class="fas fa-ellipsis-v"></i></a>
                        </div>
                    </div>
                    <div class="status-field">
                        <p>
                            ${item.content}
                        </p>
                        <img src="${item.file_url}" alt="">
        
                    </div>
                    <div class="post-reaction">
                        <div class="activity-icons">
                            <div><img src="/images/like-blue.png" alt="">120</div>
                            <div><img src="/images/comments.png" alt="">52</div>
                            <div><img src="/images/share.png" alt="">35</div>
                        </div>
                        <div class="post-profile-picture">
                            <img src="/images/profile-pic.png " alt=""> <i class=" fas fa-caret-down"></i>
                        </div>
                    </div>
                </div>`
                });
                $(".status-container").html(html)
            } else {
                alert(data.message)
            }
        } catch (error) {
            console.log(error);
        }
    }
}
newfeed.post()
