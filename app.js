const para=document.querySelector('p');
para.style.fontSize='30px';

function handleKeyup(event) {
    if (event.code == 'KeyI'){
        inflate()
    }

    if (event.code == 'KeyD'){
        // deflate the symbol
        deflate()
    }
}

document.addEventListener('keyup', handleKeyup)

function inflate() {

    // get the current font size
    // increase by 10px
    // if it's too big, display an explosion symbol

    let fontSizeStr = window.getComputedStyle(para).getPropertyValue('font-size')
    let numberStr = fontSizeStr.substr(0, fontSizeStr.length - 2)
    let size = parseInt(numberStr, 10)

    if (size > 60) {
        // show explosion symbol
        boom (para)
        document.removeEventListener('keyup', handleKeyup)
    } else {

        let newFontSize = (size + 10) + 'px'
        para.style.fontSize= newFontSize;
    }
}

function deflate() {
 
    let fontSizeStr = window.getComputedStyle(para).getPropertyValue('font-size')
    let numberStr = fontSizeStr.substr(0, fontSizeStr.length - 2)
    let size = parseInt(numberStr, 10)

    if (size <= 0) {
        // show text 'Done'
        para.replaceWith("Done")
        var sheet = document.createElement('style')
        sheet.innerHTML = "div {font-size: 50px; text-align:center; margin-top:50%;}";
        document.body.appendChild(sheet);
        document.removeEventListener('keyup', handleKeyup)
    } else {

        let newFontSize = (size - 10) + 'px'
        para.style.fontSize= newFontSize;
    }
}


function boom(para){
    para.firstChild.nodeValue= '💥';
}

