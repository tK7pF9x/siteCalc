let p = 0;
let uGr1 = 0;
let uGr2 = 0;
let u1 = 0;
let main = document.querySelector('.main');
let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    p = document.querySelector('#text_1').value;
    uGr1 = document.querySelector('#text_2').value;
    uGr2 = document.querySelector('#text_3').value;
    u1 = document.querySelector('#text_4').value;
    main.style.display = 'none';

    algorithm();
});

function algorithm() {
    let g1 = ((p * uGr1) / 100);
    let g2 = ((p * uGr2) / 100);

    let gN1 = ((g1 / u1) * 100);
    let gN2 = ((g2 / u1) * 100);

    let uGr1S = "Uгр1";
    let uGr2S = "Uгр2";
    let uGn1S = "Gн1";
    let uGn2S = "Gн2";

    let s_uGr = "";
    let s_Gn = "";
    let s_GnL = "";
    let d_uGr = 0;
    let d_Gn = 0;
    let d_GnL = 0;

    if (g1 < g2) {
        s_uGr = uGr1S;
        s_Gn = uGn1S;
        d_uGr = uGr1;
        d_Gn = gN1;
        s_GnL = uGn2S;
        d_GnL = gN2;
    } else if (g2 < g1) {
        s_uGr = uGr2S;
        s_Gn = uGn2S;
        d_uGr = uGr2;
        d_Gn = gN2;
        s_GnL = uGn1S;
        d_GnL = gN1;
    }

    document.write(`Дано: <br>`);
    document.write(`P = ${p} <br>`);
    document.write(`Uгр1 = ${uGr1} <br>`);
    document.write(`Uгр2 = ${uGr2} <br>`);
    document.write(`U1 = ${u1} <br>`);
    document.write(`----------------------------------<br>`);

    document.write(`Розв'язання: <br>`);
    document.write(`G1 = (Gпр * Uгр1) / 100 = ${g1}B <br>`);
    document.write(`G2 = (Gпр * Uгр2) / 100 = ${g2}B <br>`);
    document.write('<br>');
    document.write(`Gн1 = (G1/Uн) * 100% = ${gN1}% <br>`);
    document.write(`Gн2 = (G2/Uн) * 100% = ${gN2}% <br>`);
    document.write(`---------------------------------- <br>`);

    document.write("Висновок: <br>");
    document.write(`Для вимірювання напруги Uн = ${u1}, потрібно вибрати шкалу з граничним значенням ${s_uGr} = ${d_uGr}В, де відносна номінальна похибка ${s_Gn} = ${d_Gn}%, що є менше ніж ${s_GnL} = ${d_GnL}% <br>`);

    let div = document.createElement('div');
    div.innerHTML = '<button class="res" style="width: 200px; height: 50px; margin-top:20px;">Restart</button>';



    document.body.append(div);

    let restart = document.querySelector('.res');
    restart.addEventListener('click', () => {
       window.location.reload();
    });

}