import React from 'react';
import Question from './Question.js';
import './App.css';

function App() {

	return (
		<div className="App">

      <div>
        <Question content={questions[3].content} answers={questions[3].answers} extraInfo={questions[3].extraInfo} />
        <br />
        <br />
      </div>

		</div>
	);
}

export default App;

const questions = [
  {
    title: "Nya hem för sällsynta växter hotas av stigande havsnivåer",
    link: "/strandaengar",
    content: "Vad krävs för att slåtterblomma ska kunna växa på en strandäng?",
    answers: [ 	
      { text: "Att större gräs och buskar har börjat växa på ängen. ", correct: false },
      { text: "Det krävs inte något särskilt, slåtterblomma trivs på alla ängar.", correct: false  }, 
      { text: "Att bete eller slåtter har ägt rum på platsen.", correct: true } 
    ],
    extraInfo: "Bete och slåtter är två sorters störningar på området som är gynnande för slåtterblomman. Bete är helt enkelt djur som betar och slåtter är när man skördar gräs och örter för höproduktion. Genom att gräs och örter tas bort blir inte slåtterblomman utkonkurrerad. ",
  },
  {
    title: "Fjärilars förvirring i ett förändrat klimat",
    link: "/fjaerilar",
    content: "Vilken av fjärilarna i figuren har ändrat sin flygtid mest under perioden 1991–2019?",
    answers: [ 	
      { text: "Sorgmantel", correct: false },
      { text: "Citronfjäril", correct: false }, 
      { text: "Påfågelöga", correct: false },
      { text: "Nässelfjäril", correct: true },
      { text: "Vinbärsfuks", correct: false },
    ],
    extraInfo: "Nässelfjäril har börjat flyga 12 dagar tidigare i snitt sedan 1991. Påfågelöga har också börjat flyga markant mycket tidigare, hela 11 dagar. Det som oroar forskare med detta är att fjärilarna ska flyga innan deras värdväxter, alltså växter de är beroende av för föda, har börjat blomma.",
  },
  {
    title: "Nya upptäckter om golfströmmens förlängning förbättrar förståelsen för nordiskt klimat",
    link: "/havsstrommar",
    content: "Vad gör att strömmar sjunker i havet?",
    answers: [ 	
      { text: "Jordens rotation gör att strömmar sjunker.", correct: false },
      { text: "Om strömmen blir kallare så blir den tyngre och sjunker.", correct: true }, 
      { text: "Om strömmen blir mindre salthaltig så sjunker den.", correct: false } 
    ],
    extraInfo: "Om du var på väg att klicka på c) så kan det bero på att salthalt också har en effekt på vattnets densitet (alltså vattnets tyngd), men det är högre salthalt som gör vatten tyngre. I nordatlanten har den varma golfströmmen svalnat så mycket att den sjunker. Den vändpunkten fungerar som en stark pump som drar i hela havscirkulationen. ",
  },
  {
    title: "Koldioxidutsläpp – ett etiskt dilemma i global politik",
    link: "/koldioxidfoerdelning",
    content: "Vilken världsregion har släppt ut mest sedan 1751 (per invånare)? Av Sverige och Kina, vilket land har släppt ut mest sedan 1751 (per invånare)?",
    answers: [ 	
      { text: "Nordamerika är regionen och Kina har släppt ut mer än Sverige.", correct: false },
      { text: "Nordamerika är regionen och Sverige har släppt ut mer än Kina.", correct: true },
      { text: "Europa är regionen och Kina har släppt ut mer än Sverige.", correct: false },
      { text: "Europa är regionen och Sverige har släppt ut mer än Kina.", correct: false },
    ],
    extraInfo: ""
  },
  {
    title: "Artrika skogar, konflikt med vilda djur och riktigt gott kaffe",
    link: "/kaffe",
    content: "I kartan kan du se var forskarna var när de studerade hur kaffebusken påverkar mångfald i Etiopien. Vad är produktion av kaffebönan Arabica för ekosystemtjänst?",
    answers: [ 	
      { text: "Försörjande", correct: true },
      { text: "Reglerande", correct: false }, 
      { text: "Kulturell", correct: false }, 
    ],
    extraInfo: "Mat och liknande faller under försörjande ekosystemtjänster, precis som syre i luften från växters fotosyntes. Reglerande är sådana tjänster som håller vårt vatten rent och generellt reglerar viktiga saker för människan. Man kan argumentera för att kaffebönan även är en kulturell ekosystemtjänst då en har ett mervärde som en del av många kulturer."
  },
  {
    // TODO Den här är inte klar
    title: "Dramatiska väderfenomen ökar smältningen av havsis i ett varmare klimat",
    link: "/vaeder",
    content: "Vilket år var utsträckningen av havsis som minst?",
    answers: [ 	
      { text: "När jorden värms upp så fördelas värmen jämnt.", correct: false },
      { text: "När jorden värms upp så påverkas polerna mer.", correct: true }, 
    ],
    extraInfo: "Forskare är inte helt säkra på vilka faktorer som spelar in för att det blir så, men man anar att det delvis beror på att ljusa ytor reflekterar solstrålning som åter färdas ut i rymden. När Arktis isar blir mindre och snön på land smälter tidigare på våren tar öppna vatten- och landmassor större plats, som med sin mörka yta absorberar mer solstrålning och då värms upp mer än snön och isen de ersatt skulle gjort. Detta leder i sin tur till att snö och is försvinner ännu fortare och därmed bildas en förstärkande återkoppling."
  },
]
