setInterval(rang,0)
var page = '0' 
function rang(){
var range_value = document.getElementById('love_range').value;
  document.getElementById('txt_range').innerText = range_value + '%'
    if(kick == '1'){
        alert('Yahh Kok Nggak Sih :(')
        kick = '0'
        var msg = prompt('Alasan Kamu Apa??')
        alert('Alasannya Kirim Ke Aku Yh.. jangan buat aku penasaran..')
        alert('jangan Pernah berbohong meskipun hanya untuk melindungi perasaan aku :)')
        window.location.href = 'https://wa.me/6287810467718?text=' + msg;
    }
    if(kick == '2'){
        alert('Yahh Kok Nggak Sih :(')
        kick = '0'
        var msg = prompt('Alasan Kamu Apa??')
        alert('Alasannya Kirim Ke Gw Yh.. jangan buat aku penasaran..')
        alert('jangan Pernah berbohong meskipun hanya untuk melindungi perasaan aku :)')
        window.location.href = 'https://wa.me/6287810467718?text='
    }
    if(kick == '3'){
        alert('Yahh Kok Nggak Sih :(')
        kick = '0'
        var msg = prompt('Alasan Kamu Apa??')
        alert('Alasannya Kirim Ke Gw Yh.. jangan buat aku penasaran..')
        alert('jangan Pernah berbohong meskipun hanya untuk melindungi perasaan aku :)')
        window.location.href = 'https://wa.me/6287810467718?text=' + msg;
    }
}

var kick = '0'

function no(){
 document.querySelector('.slash').style.animation = 'side_dark1 0.5s'
    setTimeout(move,10);
    kick ++
}

function yes(){
document.querySelector('.slash').style.animation = 'side_dark1 0.5s'
    setTimeout(move,10);
    page ++
document.querySelector('.slash').style.animation = 'side_dark1 0.5s'
    setTimeout(move,10);
}

function next_page(){
document.querySelector('.slash').style.animation = 'side_dark 0.5s'
    page ++
    setTimeout(move,10);
}
function move(){
    if(page == '1'){
        document.getElementById('panda--image').src = 'cute-panda.gif'
        document.getElementById('message').innerText = 'Kamu Suka Gk Sama aku ?'
        document.getElementById('next_btn').style.display = 'none'
        document.getElementById('yes').style.display = 'block'
        document.getElementById('no').style.display = 'block'
    }
    if(page == '2'){
        document.getElementById('panda--image').src = 'cute-panda.gif'
        document.getElementById('message').innerText = 'Seberapa Suka Nihh !?'
       document.getElementById('love_range').style.display = 'block'
        document.getElementById('next_btn').style.display = 'block'
        document.getElementById('yes').style.display = 'none'
        document.getElementById('no').style.display = 'none'
        document.getElementById('txt_range').style.display = 'block'
    }
    if(page == '3'){
        var range_value = document.getElementById('love_range').value;
        alert('Kamu Suka aku ' + range_value + '%')
        document.getElementById('panda--image').src = 'tkthao219-bubududu.gif'
        document.getElementById('message').innerText = 'Aku ingin kamu tahu, bahwa aku sayang sama kamu, walaupun aku mencintai kamu sebisanya aku.'
       document.getElementById('love_range').style.display = 'none'
        document.getElementById('next_btn').style.display = 'block'
        document.getElementById('yes').style.display = 'none'
        document.getElementById('no').style.display = 'none'
        document.getElementById('txt_range').style.display = 'none'
    }
    if(page == '4'){
        document.getElementById('panda--image').src = 'dudububu-kiss.gif'
        document.getElementById('message').innerText = 'Kamu Mau GK Jadi Istri Aku Nanti??'
       document.getElementById('love_range').style.display = 'none'
        document.getElementById('next_btn').style.display = 'none'
        document.getElementById('yes').style.display = 'block'
        document.getElementById('no').style.display = 'block'
        document.getElementById('txt_range').style.display = 'none'
    }
    if(page == '5'){
        document.getElementById('panda--image').src = 'frog-run.gif'
        document.getElementById('message').innerText = 'Yeyy Jadi Mau Nih??'
       document.getElementById('love_range').style.display = 'none'
        document.getElementById('next_btn').style.display = 'none'
        document.getElementById('yes').style.display = 'none'
        document.getElementById('no').style.display = 'block'
        document.getElementById('txt_range').style.display = 'none'
        document.getElementById('msg').style.display = 'block'
}
}