var userSettings = document.querySelector(".user-settings");
var darkBtn = document.getElementById("dark-button");
var LoadMoreBackground = document.querySelector(".btn-LoadMore");
function UserSettingToggle() {
    userSettings.classList.toggle("user-setting-showup-toggle");
}
// darkBtn.onclick = function(){
//     darkBtn.classList.toggle("dark-mode-on");
// }

function darkModeON() {
    darkBtn.classList.toggle("dark-mode-on");
    document.body.classList.toggle("dark-theme");
};

function LoadMoreToggle() {
    LoadMoreBackground.classList.toggle("loadMoreToggle");
};
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
