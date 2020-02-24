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

                let btn = `<button id='btnCollection' onclick='asortiman()'>Pogledajte ponudu</button>`;
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

function oNama2() {
    let divImages = `<div id='divImages'></div>`;
    document.getElementById('wrapper').innerHTML += divImages;

        let containerImages = `<div id='containerImages' class='container'></div>`;
        document.getElementById('divImages').innerHTML = containerImages;

            let img1 = `<img src='../img/o-nama-1.jpg'>`;
            document.getElementById('containerImages').innerHTML = img1;

            let img2 = `<img src='../img/o-nama-2.jpg'>`;
            document.getElementById('containerImages').innerHTML += img2;

            let img3 = `<img src='../img/o-nama-3.jpg'>`;
            document.getElementById('containerImages').innerHTML += img3;
}

function viseONama() {
    let divViseONama = `<div id='viseONama'></div>`;
    document.getElementById('wrapper').innerHTML += divViseONama;

        let containerViseONama = `<div id='containerViseONama' class='container'></div>`;
        document.getElementById('viseONama').innerHTML += containerViseONama;

            let left = `<div id='left'></div>`;
            document.getElementById('containerViseONama').innerHTML = left;

                let left1 = `<div id='left1'></div>`;
                document.getElementById('left').innerHTML = left1;

                    let title1 = `<h3>Vise o nama</h3>`;
                    document.getElementById('left1').innerHTML = title1;

                    let text1 = `<p>Moj_torbicak je porodicna firma iz Kraguejvca. Bavis erucnom izradom zenskih torbica. 
                    Naša misija se ogleda u stvaranju poverenja i prijateljskih odnosa sa našim kupcima stvarajući za njih samo ono najbolje. 
                    Porodična prodavnica je isto što i porodica! U ono što pravimo, ulažemo puno ljubavi i šaljemo u svet u tašni, Vama.</p>`;
                    document.getElementById('left1').innerHTML += text1;

                let left2 = `<div id='left2'></div>`;
                document.getElementById('left').innerHTML += left2;

                    let title2 = `<h3>Nas asortiman</h3>`;
                    document.getElementById('left2').innerHTML = title2;

                    let text2 = `<p>Moj_torbicak poseduje veliki asortiman zenskih torbica. Veliki izbor, odlican kvalitet i povoljne cene predstavljaju nase 
                    glavne odlike. Pozovite nas ili posaljite poruku za sve dodatne informacije, a mi Vam garantujemo da cete biti zadovoljni.</p>`;
                    document.getElementById('left2').innerHTML += text2;

                let left3 = `<div id='left3'></div>`;
                document.getElementById('left').innerHTML += left3;

                    let title3 = `<h3>Rucna izrada</h3>`;
                    document.getElementById('left3').innerHTML = title3;

                    let text3 = `<p>Rucna izrada je ono sti nas cini drugacijim od ostalih. Svaka torbica je pazljivo izradjena do najsitnijih detalja. 
                    Svakom Vasom kupovinom nam pokazujete da cenite nas rad.</p>`;
                    document.getElementById('left3').innerHTML += text3;

            let right = `<div id='right'></div>`;
            document.getElementById('containerViseONama').innerHTML += right;

                let img = `<img src='../img/profile.jpg'>`;
                document.getElementById('right').innerHTML = img;
}

function pageONama() {
    wrapper.innerHTML = '';
    oNama1();
    oNama2();
    viseONama();
}

/** Page asortiman */
const bags = {
    torbicak1: 'Torbicak1',
    torbicak2: 'Torbicak2',
    torbicak3: 'Torbicak3',
    torbicak4: 'Torbicak4',
    torbicak5: 'Torbicak5',
    torbicak6: 'Torbicak6',
    torbicak7: 'Torbicak7',
    torbicak8: 'Torbicak8',
}

function asortiman() {
    wrapper.innerHTML = '';

        let asortimanDiv = `<div id='asortimanDiv'></div>'`;
        document.getElementById('wrapper').innerHTML = asortimanDiv;

            let title = `<h2>Izdvajamo iz nase ponude</h2>`;
            document.getElementById('asortimanDiv').innerHTML = title;

            let asortimanContainer = `<div class='container' id='asortimanContainer'></div>`;
            document.getElementById('asortimanDiv').innerHTML += asortimanContainer;

                for(let bag in bags) {
                    let divBag = `<div class='bags' id='${bag}'></div>`;
                    document.getElementById('asortimanContainer').innerHTML += divBag;

                        let img = `<img src='../img/asortiman/${bag}.jpg'>`;
                        document.getElementById(`${bag}`).innerHTML += img;

                        let description = `<p>${bags[bag]}<p>`;
                        document.getElementById(`${bag}`).innerHTML += description;
                }

                // let arrowLeft = `<span id='arrowLeft'></span>`;
                // document.getElementById('asortimanContainer').innerHTML += arrowLeft;
                
                // let arrowRight = `<span id='arrowRight'></span>`;
                // document.getElementById('asortimanContainer').innerHTML += arrowRight;
}

document.getElementById('pocetna').addEventListener('click', pagePocetna);
document.getElementById('asortiman').addEventListener('click', asortiman);
document.getElementById('oNama').addEventListener('click', pageONama);
