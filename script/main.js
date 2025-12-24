// Switch page
$(document).ready(function(){
    $('.panel').click(function(){
        $('.panel').removeClass('selected');
        $(this).addClass('selected');
        $('.content-item').hide();
        $($(this).attr('href')).show();
        return false;
    });

    // Default
    $('#main').show();
    $('#info').hide();
    $('#contact').hide();
});

// Copy ip
function copyIp(){
    navigator.clipboard.writeText('2b2t.cc')
        .then(() => alert('IP copied to clipboard!'))
        .catch(err => console.error('Copy failed:', err));
}

// Check server status
async function fetchServerStatus() {
    const el = document.getElementById('server-status')
    try {
        const response = await fetch('https://api.mcstatus.io/v2/status/java/2b2t.cc')
        const data = await response.json()
        if (data.online) {
            el.innerHTML = `Status: <span style="color: lightgreen">online</span> <br/> Players online: ${data.players.online} / ${data.players.max}`
        }
        else {
            el.innerHTML = `Status: <span style="color: darkred">offline</span> <br/>`
        }
    } catch (err) {
        console.error(err)
        el.innerHTML = `Status: <span style="color: gray">unknown</span><br/>`
    }
}
document.addEventListener('DOMContentLoaded', () => {
    fetchServerStatus()
})