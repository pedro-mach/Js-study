let dados = [
    {
        nome: "Koenigsegg Jesko Absolut",
        especs: "twin turbo alumínio 5,0 L || Pressão de reforço de 1,7 bar || combustível flexível (opcional) || Torque máximo: 1500 Nm a 5100 rpm || 1.360 HP || Transmissão de 9 velocidades Koenigsegg",
        link: "https://www.koenigsegg.com/model/jesko-absolut",
        tag: "supercarro, hipercarro, Koenigsegg, motor v8, alta performance, velocidade maxima, sueco"
    },
    {
        nome: "Ferrari F8",
        especs: "V8 biturbo 3.9 L || Potência máxima: 720 cv || Torque máximo: 770 Nm || Transmissão dual-clutch de 7 velocidades || Peso: 1330 kg",
        link: "https://www.ferrari.com/en-US/cars/f8-tributo",
        tag: "Ferrari, esportivo, supercarro, motor v8, italiano, design, mid engine"
    },
    {
        nome: "Carrera GT",
        especs: "V10 5.7 L || Potência máxima: 612 cv || Torque máximo: 603 Nm || Transmissão manual de 6 velocidades || Material do chassi: fibra de carbono",
        link: "https://www.porsche.com/usa/model/911/carrera-gt/",
        tag: "Porsche, esportivo, supercarro, motor v10, classico, fibra carbono, mid engine"
    },
    {
        nome: "LaFerrari",
        especs: "V12 6.3 L || Potência máxima: 963 cv || Torque máximo: 700 Nm || Transmissão dual-clutch de 7 velocidades || Sistema híbrido",
        link: "https://www.ferrari.com/en-US/cars/laferrari",
        tag: "Ferrari, hipercarro, hibrido, v12, alta performance, italiano"
    },
    {
        nome: "911 GT3 RS",
        especs: "6-cilindros boxer 4.0 L || Potência máxima: 520 cv || Torque máximo: 460 Nm || Transmissão PDK de 7 velocidades || Aerodinâmica agressiva",
        link: "https://www.porsche.com/usa/model/911/911-gt3-rs/",
        tag: "Porsche, esportivo, motor boxer, pista, aerodinamica, tracao traseira"
    },
    {
        nome: "Lamborghini Huracán",
        especs: "V10 5.2 L || Potência máxima: 640 cv || Torque máximo: 560 Nm || Transmissão LDF de 7 velocidades || Tração integral",
        link: "https://www.lamborghini.com/en/models/huracan",
        tag: "Lamborghini, supercarro, motor v10, italiano, design, tracao integral"
    },
    {
        nome: "911 Turbo S",
        especs: "6-cilindros boxer 3.8 L || Potência máxima: 650 cv || Torque máximo: 800 Nm || Transmissão PDK de 8 velocidades || Tração integral",
        link: "https://www.porsche.com/usa/model/911/911-turbo-s/",
        tag: "Porsche, esportivo, turbo, tracao integral, luxo"
    },
    {
        nome: "Audi TT",
        especs: "4-cilindros turbo 2.0 L || Potência máxima: 245 cv || Torque máximo: 370 Nm || Transmissão S tronic de 7 velocidades || Design esportivo",
        link: "https://www.audi.com/models/tt-coupe.html",
        tag: "Audi, esportivo, compacto, design"
    },
    {
        nome: "Audi R8 V10",
        especs: "V10 5.2 L || Potência máxima: 620 cv || Torque máximo: 550 Nm || Transmissão R tronic de 7 velocidades || Design agressivo",
        link: "https://www.audi.com/models/r8.html",
        tag: "Audi, supercarro, motor v10, alemao, design esportivo, mid engine"
    },
    {
        nome: "Koenigsegg One:1",
        especs: "V8 biturbo 5.0 L || Potência máxima: 1360 cv || Torque máximo: 1371 Nm || Transmissão automatizada de dupla embreagem || Relação peso-potência: 1:1 (1 kg por 1 cv)",
        link: "https://www.koenigsegg.com/model/one-1",
        tag: "Koenigsegg, hipercarro, motor v8, alta performance, exclusivo, sueco"
    },
    {
        nome: "M3",
        especs: "6 cilindros em linha turbo 3.0 L || Potência máxima: 510 cv || Torque máximo: 650 Nm || Transmissão M Steptronic de 8 velocidades || Tracao traseira",
        link: "https://www.bmw.com.br/pt/all-models/m-series/m3-sedan/2020/bmw-serie-3-berlina-versao-m-visao-geral.html",
        tag: "BMW, sedan, esportivo, motor 6cilindros, performance, alemao, tracao traseira"
    },
    {
        nome: "M5",
        especs: "V8 biturbo 4.4 L || Potência máxima: 625 cv || Torque máximo: 750 Nm || Transmissão M Steptronic de 8 velocidades || Tração integral",
        link: "https://www.bmw.com.br/pt/all-models/m-series/m5.html",
        tag: "BMW, sedan, esportivo, motor v8, performance, alemao, tracao integral"
    },
    {
        nome: "M8",
        especs: "V8 biturbo 4.4 L || Potência máxima: 625 cv || Torque máximo: 750 Nm || Transmissão M Steptronic de 8 velocidades || Tração integral || Design cupê esportivo",
        link: "https://www.bmw.com.br/pt/all-models/m-series/m8-gran-coupe.html",
        tag: "BMW, coupe, esportivo, motor v8, performance, alemao, tracao integral"
    },
    {
        nome: "Fiat Strada",
        specs: "1.3 Firefly Flex || 1.3 Firefly Turbo Flex || Câmbio manual ou automático |Direção elétrica || Carga útil de até 720 kg",
        link: "https://www.fiat.com.br/carros/strada/",
        tag: "picape, compacta, Fiat, flex, nacional, trabalho, lazer"
    },
    {
        nome: "VW Polo",
        specs: "1.0 TSI || 1.6 MSI || Câmbio manual ou automático || Motor turbo || Design moderno",
        link: "https://www.vw.com.br/carros/polo",
        tag: "hatch, compacto, Volkswagen, TSI, MSI, nacional, urbano"
    },


    {
        nome: "Honda City",
        specs: "1.5 i-VTEC || Câmbio CVT || Motor eficiente || Design elegante",
        link: "https://www.honda.com.br/carros/city",
        tag: "sedan, compacto, Honda, i-VTEC, CVT, nacional, urbano"
    },
    {
        nome: "Jeep Compass",
        specs: "1.3 Turbo Flex || 2.0 Turbo Diesel || Câmbio automático || SUV médio || Design robusto",
        link: "https://www.jeep.com.br/compass",
        tag: "SUV, médio, Jeep, turbo, diesel, nacional, aventura"
    },
    {
        nome: "Nissan Kicks",
        specs: "1.6 SCV+ || Câmbio CVT || SUV compacto || Design moderno || Tecnologia Nissan Connect",
        link: "https://www.nissan.com.br/carros/kicks",
        tag: "SUV, compacto, Nissan, SCV+, CVT, nacional, urbano"
    },
    {
        nome: "Hyundai Creta",
        specs: "1.6 MPI ou 2.0 MPI || Câmbio manual ou automático || SUV compacto || Design moderno || Tecnologia embarcada",
        link: "https://www.hyundai.com.br/carros/creta",
        tag: "SUV, compacto, Hyundai, MPI, nacional, urbano, familiar"
    },
    {
        nome: "Fiat Toro",
        specs: "1.3 Firefly Turbo Flex || 2.0 Multijet II Diesel || Câmbio automático || Picape média || Design robusto",
        link: "https://www.fiat.com.br/carros/toro/",
        tag: "picape, média, Fiat, turbo, diesel, nacional, aventura"
    },
    {
        nome: "VW Saveiro",
        specs: "1.6 MSI || Câmbio manual || Picape compacta || Robusta || Versátil",
        link: "https://www.vw.com.br/carros/saveiro",
        tag: "picape, compacta, Volkswagen, MSI, nacional, trabalho"
    },
    {
        nome: "Chevrolet Celta (Life)",
        specs: "1.0 MPFI || Câmbio manual || Motor eficiente || Design compacto",
        link: "https://www.chevrolet.com.br/celta",
        tag: "hatch, compacto, Chevrolet, MPFI, nacional, popular, econômico"
    },
    {
        nome: "Chevrolet Chevette (Super)",
        specs: "1.6 L || Câmbio manual || Motor robusto || Design clássico",
        link: "https://www.chevrolet.com.br/chevette",
        tag: "sedan, compacto, Chevrolet, clássico, nacional, popular"
    },
    {
        nome: "Volkswagen Fusca (1968)",
        specs: "1.2 L || Ar refrigerado || Motor traseiro || Design icônico",
        link: "https://www.volkswagen.com.br/fusca",
        tag: "hatch, clássico, Volkswagen, ar refrigerado, motor traseiro, icônico"
    },
    {
        nome: "Opel Astra (2011)",
        specs: "1.8 Ecotec || Câmbio manual ou automático || Design moderno || Segurança",
        link: "https://www.opel.com.br/astra",
        link_original: "https://www.opel.de/cars/astra.html", 
        tag: "hatch, médio, Opel, Ecotec, nacional, segurança"
    }
];