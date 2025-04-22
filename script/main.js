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
fetch('https://api.mcstatus.io/v2/status/java/2b2t.cc')
    .then(response => response.json())
    .then(data => {
        const serverStatus = document.querySelector('#serverStatus');
        if(data.online){
            serverStatus.innerText = 'Status: online \n' + 'Players: ' + data.players.online
        }
        else{
            serverStatus.innerText = 'Server is offline'
        }
    })
    .catch(console.error)


