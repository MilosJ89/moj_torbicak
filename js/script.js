const wrapper = document.getElementById('wrapper');

/** Page pocetna */
function pocetna1() {
    let divPocetna1 = `<div id='pocetna1'></div>`;
    wrapper.innerHTML = divPocetna1;

        let divContainer = `<div id='pocetna1Container' class='container'></div>`;
        document.getElementById('pocetna1').innerHTML = divContainer;

            let section1 = `<div id='section1'></div>`;
            document.getElementById('pocetna1Container').innerHTML = section1;

                let section1Icon = `<span id='family'></span>`;
                document.getElementById('section1').innerHTML = section1Icon;

                let section1Paragraph = `<p>Porodicna firma</p>`;
                document.getElementById('section1').innerHTML += section1Paragraph;

            let section2 = `<div id='section2'></div>`;
            document.getElementById('pocetna1Container').innerHTML += section2;

                let section2Icon = `<span id='handWork'></span>`;
                document.getElementById('section2').innerHTML = section2Icon;

                let section2Paragraph = `<p>Rucna izrada</p>`;
                document.getElementById('section2').innerHTML += section2Paragraph;

            let section3 = `<div id='section3'></div>`;
            document.getElementById('pocetna1Container').innerHTML += section3;

                let section3Icon = `<span id='bigChoice'></span>`;
                document.getElementById('section3').innerHTML = section3Icon;

                let section3Paragraph = `<p>Veliki izbor</p>`;
                document.getElementById('section3').innerHTML += section3Paragraph;
}

function pocetna2() {
    let divPocetna2 = `<div id='pocetna2'></div>`;
    wrapper.innerHTML += divPocetna2;

        let divContainer = `<div id='pocetna2Container' class='container'></div>`;
        document.getElementById('pocetna2').innerHTML = divContainer;

            let title = `<h2>- Nasa preporuka -</h2>`;
            document.getElementById('pocetna2Container').innerHTML = title;

            let divPreporuka = `<div id='preporuka'></div>`;
            document.getElementById('pocetna2Container').innerHTML += divPreporuka;

                let img1 = `<img src='../img/torbicak1.jpg'>`;
                document.getElementById('preporuka').innerHTML = img1;

                let img2 = `<img src='../img/torbicak2.jpg'>`;
                document.getElementById('preporuka').innerHTML += img2;

                let img3 = `<img src='../img/torbicak3.jpg'>`;
                document.getElementById('preporuka').innerHTML += img3;

                let img4 = `<img src='../img/torbicak4.jpg'>`;
                document.getElementById('preporuka').innerHTML += img4;
}

function pocetna3() {
    let divPocetna3 = `<div id='pocetna3'></div>`;
    wrapper.innerHTML += divPocetna3;

        let divContainer = `<div id='pocetna3Container' class='container'></div>`;
        document.getElementById('pocetna3').innerHTML = divContainer;

            let collection = `<div id='collection'></div>`;
            document.getElementById('pocetna3Container').innerHTML = collection;

                let img = `<img src='../img/collection.jpg'></img>`;
                document.getElementById('collection').innerHTML = img;    

                let btn = `<button id='btnCollection'>Pogledajte ponudu</button>`;
                document.getElementById('collection').innerHTML += btn;
}

function pagePocetna() {
    wrapper.innerHTML = '';
    pocetna1();
    pocetna2();
    pocetna3();
}

pagePocetna();

/** Page o nama */
function oNama1() {
    let divONama1 = `<div id='divONama1'><div>`;
    document.getElementById('wrapper').innerHTML = divONama1;

        let containerDiv = `<div id='containerDiv' class='container'></div>`;
        document.getElementById('divONama1').innerHTML = containerDiv;

            let title1 = `<p id='title1'>Dobrodosli u Moj_torbicak</p>`;
            document.getElementById('containerDiv').innerHTML = title1;

            let line = `<span></span>`;
            document.getElementById('containerDiv').innerHTML += line;

            let title2 = `<p id='title2'>Svet mode, kreativnosti i vrhunskog kvaliteta</p>`;
            document.getElementById('containerDiv').innerHTML += title2;

            let title3 = `<p id='title3'>Torbica je najbolji prijatelj koji otkriva karakter jedne žene, a ponekad je dovoljno da samo na osnovu torbice 
            koju nosi zavirimo u njenu dušu i otkrijemo mnogo toga. Mi, u Moj_torbicak, imamo viziju da pružimo svakoj ženi najbolji izbor kroz 
            vrhunski kvalitet, ali i više od toga – prijateljstvo, pozitivnu energiju i osmeh.</p>`;
            document.getElementById('containerDiv').innerHTML += title3;
}


function pageONama() {
    wrapper.innerHTML = '';
    oNama1();
}

document.getElementById('pocetna').addEventListener('click', pagePocetna);
document.getElementById('oNama').addEventListener('click', pageONama);