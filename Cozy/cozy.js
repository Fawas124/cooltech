function download() {
    const wordDocument = "Data.docx"
    const blob = new blob([wordDocument], {type: 'application/msword' });

    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob);
    a.download = 'document.doc';
    a.style.display = 'none'

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
}

/* ======= ADD BLUR TO HEADER ======= */
const blurHeader = () => {
    const header = document.getElementById('header') 
    // when the scroll is greater than 50 vieport height, add the blur-header class
    this.scrolly >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)