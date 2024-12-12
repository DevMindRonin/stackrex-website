import cooperation1 from "./assets/images/cooperation/logo-ferratum.png";
import cooperation2 from "./assets/images/cooperation/logo-krby-turbo.png";
import cooperation3 from "./assets/images/cooperation/logo-banan.png";
import cooperation4 from "./assets/images/cooperation/logo-bankerat.png";
import cooperation5 from "./assets/images/cooperation/logo-invoxtra.png";
import cooperation6 from "./assets/images/cooperation/logo-nessap.png";
import cooperation7 from "./assets/images/cooperation/logo-last.png";
import cooperation8 from "./assets/images/cooperation/logo-petrkoval.png";
import cooperation9 from "./assets/images/cooperation/logo-morso.png";
import cooperation10 from "./assets/images/cooperation/logo-britrade.png";
import cooperation11 from "./assets/images/cooperation/logo-eurohelp.png";
import cooperation12 from "./assets/images/cooperation/logo-dokonale-ciste.png";
import cooperation13 from "./assets/images/cooperation/logo-ec.png";
import cooperation14 from "./assets/images/cooperation/logo-spotipay.png";
import cooperation15 from "./assets/images/cooperation/logo-svet-letenek.png";
import cooperation16 from "./assets/images/cooperation/logo-orezstromu.png";

import stack1 from "./assets/images/stack/React.png";
import stack2 from "./assets/images/stack/Typescript.png";
import stack3 from "./assets/images/stack/Node.js.png";
import stack4 from "./assets/images/stack/express.png";
import stack5 from "./assets/images/stack/JavaScript.png";
import stack6 from "./assets/images/stack/html5.png";
import stack7 from "./assets/images/stack/css.png";
import stack8 from "./assets/images/stack/figma.png";
import stack9 from "./assets/images/stack/bootstrap.png";
import stack10 from "./assets/images/stack/mui.png";
import stack11 from "./assets/images/stack/restapi.png";
import stack12 from "./assets/images/stack/graphql.png";
import stack13 from "./assets/images/stack/Firebase.png";
import stack14 from "./assets/images/stack/mongodb.png";
import stack15 from "./assets/images/stack/postgredb.png";
import stack16 from "./assets/images/stack/git.png";
import stack17 from "./assets/images/stack/github.png";
import stack18 from "./assets/images/stack/aws.png";
import stack19 from "./assets/images/stack/jwt.png";

import imagemember1 from "./assets/images/team/team1.png";
import imagemember2 from "./assets/images/team/team2.png";
import imagemember3 from "./assets/images/team/team3.png";
import imagemember4 from "./assets/images/team/team4.png";
import imagemember5 from "./assets/images/team/girl.png";
import imagemember6 from "./assets/images/team/men.png";

import imageservice1 from "./assets/images/services/dashboard1.jpg";
import imageservice2 from "./assets/images/services/payment1.jpg";
import imageservice3 from "./assets/images/services/signin1.jpg";
import imageservice4 from "./assets/images/services/reports.jpg";
import imageservice5 from "./assets/images/services/textcharts.jpg";
import imageservice6 from "./assets/images/services/bullying.jpg";
import imageservice7 from "./assets/images/services/calculator.jpg";
import imageservice8 from "./assets/images/services/website.jpg";

export const data = [
  { logo: cooperation1 },
  { logo: cooperation2 },
  { logo: cooperation3 },
  { logo: cooperation4 },
  { logo: cooperation5 },
  { logo: cooperation6 },
  { logo: cooperation7 },
  { logo: cooperation8 },
  { logo: cooperation9 },
  { logo: cooperation10 },
  { logo: cooperation11 },
  { logo: cooperation12 },
  { logo: cooperation13 },
  { logo: cooperation14 },
  { logo: cooperation15 },
  { logo: cooperation16 },
];

export const stack = [
  { stackname: stack1 },
  { stackname: stack2 },
  { stackname: stack3 },
  { stackname: stack4 },
  { stackname: stack5 },
  { stackname: stack6 },
  { stackname: stack7 },
  { stackname: stack8 },
  { stackname: stack9 },
  { stackname: stack10 },
  { stackname: stack11 },
  { stackname: stack12 },
  { stackname: stack13 },
  { stackname: stack14 },
  { stackname: stack15 },
  { stackname: stack16 },
  { stackname: stack17 },
  { stackname: stack18 },
  { stackname: stack19 },
];

export const team = [
  {
    member: imagemember1,
    name: "Marek",
    role: "Tech Lead",
  },
  { member: imagemember2, name: "Tomáš", role: "Tech Lead" },
  {
    member: imagemember3,
    name: "Petr",
    role: "Tech Lead",
  },
  {
    member: imagemember4,
    name: "Karel",
    role: "Tech Lead",
  },
  {
    member: imagemember6,
    name: "Jirka",
    role: "Business Manager",
  },
  {
    member: imagemember5,
    name: "Lenka",
    role: "Marketing Manager",
  },
  {
    member: imagemember6,
    name: "Jakub",
    role: "Product Manager",
  },
  {
    member: imagemember6,
    name: "Ladislav",
    role: "DevOps Engineer",
  },
];

export const services = [
  [
    { type: "empty" },
    {
      type: "image",
      id: 0,
      title: "Dashboard Application",
      about:
        "Interaktivní přehled dat na jednom místě. Umožňuje sledování klíčových metrik, analýzu trendů a přizpůsobení rozložení pro různé uživatele. Ideální pro efektivní řízení a rozhodování.",
      benefits: [
        {
          icon: "✔",
          subtitle: "Využití",
          description: "výkon prodejů, finance, zákaznické chování.",
        },
        {
          icon: "✔",
          subtitle: "Benefity",
          description:
            "šetří čas, zjednodušuje rozhodování, zvyšuje efektivitu.",
        },
        {
          icon: "✔",
          subtitle: "Bezpečnost",
          description: "šifrovaná data, přístup dle rolí.",
        },
      ],
      image: imageservice1,
      link: "",
    },
    { type: "empty" },
    {
      type: "image",
      id: 1,
      title: "Payment Component",
      about:
        "Bezpečný platební systém integrovaný s moderními API. Podporuje různé platební metody, automatické fakturace a uživatelsky přívětivý proces. Vhodný pro e-shopy i služby s opakovanými platbami.",
      benefits: [
        {
          icon: "✔",
          subtitle: "Využití",
          description: "e-shopy, služby s opakovanými platbami.",
        },
        {
          icon: "✔",
          subtitle: "Benefity",
          description:
            "automatické fakturace, snadný proces, široká podpora metod.",
        },
        {
          icon: "✔",
          subtitle: "Bezpečnost",
          description: "moderní API, šifrování, ochrana dat.",
        },
      ],
      image: imageservice2,
      link: "",
    },
  ],
  [
    {
      type: "image",
      id: 2,
      title: "Sign-In Component",
      about:
        "Jednoduchý a bezpečný proces přihlášení s podporou více metod, včetně hesel, OAuth (Google, Facebook) a dvoufázového ověření. Zajistí pohodlný a chráněný přístup pro uživatele.",
      benefits: [
        {
          icon: "✔",
          subtitle: "Metody přihlášení",
          description: "hesla, OAuth (Google, Facebook), dvoufázové ověření.",
        },
        {
          icon: "✔",
          subtitle: "Pohodlí",
          description: "rychlý a snadný přístup pro uživatele.",
        },
        {
          icon: "✔",
          subtitle: "Bezpečnost",
          description: "zabezpečený přístup, ochrana dat.",
        },
      ],
      image: imageservice3,
      link: "",
    },
    { type: "empty" },
    {
      type: "image",
      id: 3,
      title: "Report Component",
      about:
        "Automatizované generování reportů z klientských dat. Zahrnuje přehledné vizualizace, exporty do různých formátů a možnosti přizpůsobení. Perfektní pro sledování výkonu a informované rozhodování.",
      benefits: [
        {
          icon: "✔",
          subtitle: "Automatizace",
          description: "rychlé generování reportů z dat.",
        },
        {
          icon: "✔",
          subtitle: "Vizualizace",
          description: "přehledné grafy a tabulky pro snadnou analýzu.",
        },
        {
          icon: "✔",
          subtitle: "Přizpůsobení",
          description: "možnost exportů a přizpůsobení reportů.",
        },
      ],
      image: imageservice4,
      link: "",
    },
    { type: "empty" },
  ],
  [
    { type: "empty" },
    {
      type: "image",
      id: 4,
      title: "Textcharts Application",
      about:
        "Aplikace pro detailní analýzu textových dat ze souborů. Vyhodnotí sémantiku slov, jejich četnost a zobrazuje výstupy v přehledných grafech. Ideální pro zpracování dat v marketingu, výzkumu nebo školství.",
      benefits: [
        {
          icon: "✔",
          subtitle: "Využití",
          description: "marketing, výzkum, školství.",
        },
        {
          icon: "✔",
          subtitle: "Analýza",
          description: "sémantika, četnost slov, grafické výstupy.",
        },
        {
          icon: "✔",
          subtitle: "Přehlednost",
          description: "jednoduché zobrazení výsledků v grafech.",
        },
      ],
      image: imageservice5,
      link: "",
    },
    { type: "empty" },
    {
      type: "image",
      id: 5,
      title: "Bullying Application",
      about:
        "Moderní řešení pro snadné a anonymní nahlašování případů šikany či zneužívání ve školách a firmách. Podporuje okamžitou reakci, bezpečnost obětí a možnost analýzy nahlášených incidentů.",
      benefits: [
        {
          icon: "✔",
          subtitle: "Využití",
          description: "školy, firmy, prevence šikany a zneužívání.",
        },
        {
          icon: "✔",
          subtitle: "Bezpečnost",
          description: "anonymita, ochrana obětí.",
        },
        {
          icon: "✔",
          subtitle: "Analýza",
          description: "možnost analýzy nahlášených případů.",
        },
      ],
      image: imageservice6,
      link: "https://budget-dmr.netlify.app/",
    },
  ],
  [
    {
      type: "image",
      id: 6,
      title: "Loan Calculator Application",
      about:
        "Praktická kalkulačka pro snadný výpočet hypotéky. Zohledňuje výši úvěru, úrokovou sazbu, dobu splácení i připojení pojištění. Ideální nástroj pro finanční plánování.",
      benefits: [
        {
          icon: "✔",
          subtitle: "Funkce",
          description:
            "výpočet úvěru, úrokové sazby, doby splácení, pojištění.",
        },
        {
          icon: "✔",
          subtitle: "Pohodlí",
          description: "snadné a rychlé výpočty.",
        },
        {
          icon: "✔",
          subtitle: "Plánování",
          description: "ideální nástroj pro osobní finanční plánování.",
        },
      ],
      image: imageservice7,
      link: "",
    },
    { type: "empty" },
    {
      type: "image",
      id: 7,
      title: "Landing Page",
      about:
        "Dynamická webová aplikace vytvořená v Reactu s bohatou škálou interaktivních prvků. Přizpůsobitelný design, responzivita a pokročilé funkce pro moderní online prezentaci firem či projektů.",
      benefits: [
        {
          icon: "✔",
          subtitle: "Technologie",
          description: "postaveno v Reactu, interaktivní prvky.",
        },
        {
          icon: "✔",
          subtitle: "Design",
          description: "přizpůsobitelný, responzivní pro různá zařízení.",
        },
        {
          icon: "✔",
          subtitle: "Funkce",
          description: "pokročilé funkce pro moderní prezentaci.",
        },
      ],
      image: imageservice8,
      link: "",
    },
    { type: "empty" },
  ],
];

export const referencies = [
  {
    text: "Se společností Gleton s.r.o. jsme spokojeni od začátku. Žádné pevné měsíční poplatky, jednoduché a výstižné reporty. Platíme za dosažení výsledku, které se dostavily po 4 měsících.",
    author: "Rostislav Síkora, Sale manager, Ferratum Bank Ltd.",
  },
  {
    text: "Společnost Gleton s.r.o. pro nás vytvořila firemní stránky na míru podle našich požadavků a představ, se kterými<br>jsme velmi spokojeni. Oceňuji jejich profesionální přístup, rychlost a smysl pro detail.",
    author: "Aleš Soukup, jednatel, Trapezy Soukup s.r.o.",
  },
  {
    text: "Jsme spokojeni s komplexním přístupem firmy. Oceňujeme poctivost a objektivitu<br>podávaných informací, stejně jako snahu o maximální zefektivnění vynaložených prostředků.",
    author: "Petr Bajer, předseda představenstva, Eurocompanies a.s.",
  },
  {
    text: "Společnost Gleton s.r.o. patří mezi naše klíčové marketingové partnery. Hlavní atributy spolupráce jsou perfektní komunikace,<br>profesionalita a znalost oboru. V propagaci nových služeb a projektů budeme se společností Gleton s.r.o. znovu počítat.",
    author: "Roman Kakos, člen představenstva, Bankerat a.s.",
  },
  {
    text: "Se službami jsme spokojeni. Můžeme tuto společnost doporučit každému,<br>kdo usiluje o zkvalitnění optimalizace svých stránek ve vyhledávačích.",
    author: "Ing. Tadeáš Vodička, jednatel, VODIZOL, s.r.o.",
  },
  {
    text: "Děkujeme týmu Gleton s.r.o. za vynikající práci v krátkém čase. <br>Profesionálové s tvůrčím duchem. Klientský přístup na vysoké úrovni.",
    author: "Daniel Krutiš, jednatel, HELION.CZ s.r.o.",
  },
  {
    text: "U spolupráce s Gleton s.r.o. v oblasti SEO oceňujeme, že je iniciativní, má analytický přístup, přichází s nápady a pracuje samostatně. <br>Dokáže si poradit i s minimem vstupů z naší strany, ale když je potřebuje, ozve se. Pomohli nám zlepšit optimalizaci našeho webu a celkově hodnotím spolupráci pozitivně.",
    author: "Jaroslava Kraibichová, OSVČ, BMK - MORSO",
  },
  {
    text: "Spolupráce se společností Gleton s.r.o. pro nás byla dobrou volbou. Díky ní jsme rozšířili marketingový záběr společnosti na internetové vyhledávače a dosáhli skvělých výsledků. <br>Na naší dlouhodobé spolupráci oceňuji především osobní přístup, flexibilitu a profesionálnost. V budoucnu znovu jejich služby využijeme. Děkujeme.",
    author: "Antonín Ambros, OSVČ, Orezstromu.cz",
  },
  {
    text: "Společnost Gleton s.r.o. nám spravuje reklamní kampaně. Zásadní je pro nás spolehlivost a flexibilita při požadavcích na úpravy. <br>S výsledky spolupráce i s celkovým přístupem jsme spokojeni a společnost můžeme doporučit.",
    author: "Jiří Kašpárek , jednatel, ŘÍZENÉ STROJE, s.r.o.",
  },
];
