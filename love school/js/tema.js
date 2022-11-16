function cmena() {
    const zam = document.querySelector('.temno')
    const zam1 = document.querySelector('.svet')
    zam.addEventListener('click', () => {
        let doc = document.documentElement;
        if (doc.hasAttribute('data-color')){
            doc.removeAttribute('data-color')
        }else{
            doc.setAttribute('data-color', 'dark')
        }
    })
    zam1.addEventListener('click', () => {
        let doc = document.documentElement;
        if (doc.removeAttribute('data-color')){
            doc.setAttribute('data-color', 'dark')
        }else{
            doc.removeAttribute('data-color')
        }
    })
}
cmena();
