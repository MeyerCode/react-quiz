import React from 'react';
import Question from './Question.js';
import './App.css';

function App() {

	return (
		<div className="App">

      <div>
        <Question content={questions[0].content} answers={questions[0].answers} extraInfo={questions[0].extraInfo} />
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
    content: "Bilden illustrerar ekologisk succession. Vilket påstående beskriver det begreppet bäst?",
    answers: [ 	
      { text: "På grund av landhöjningen i Sverige så förändras naturliga livsmiljöer kontinuerligt.", correct: false },
      { text: "Förändring inom ett ekosystem som leder till att ett nytt växt- och djursamhälle uppkommer eller ersätter ett tidigare.", correct: true  }, 
      { text: "Förr eller senare blir alla livsmiljöer granskog.", correct: false } 
    ],
    extraInfo: "Landhöjning kan resultera i långsamma förändringar i landet, men hela landet höjs inte längre – Skåne sjunker till och med, i och med ökande havsnivåer. Alla livsmiljöer blir inte granskog, även om det är vanligt med granskog i Sverige. I delar av landet trivs inte granar lika bra som andra trädarter, och andra faktorer kan göra att en skog inte etableras alls. Ekologisk succession är helt enkelt ett begrepp som beskriver hur ekosystem i naturen kan förändras, baserat på olika påverkansfaktorer, och börja se annorlunda ut.",
    media: "https://dfb.adamm.dev/media/quiz2/"
  },
  {
    title: "Fjärilars förvirring i ett förändrat klimat",
    link: "/fjaerilar",
    content: "Forskare som vill veta hur olika arter påverkas av global uppvärmning studerar gärna fenologi. Vad betyder fenologi?",
    answers: [ 	
      { text: "Vetenskapen om arter som breder ut sig längre och längre norrut.", correct: false },
      { text: "Vetenskapen om hur årstidsväxlingarna påverkar växt- och djurlivets rutiner.", correct: true  }, 
      { text: "Vetenskapen om en arts populationsstorlek baserat på global medeltemperatur.", correct: false } 
    ],
    extraInfo: "Det kan vara att man studerar när fjärilar börjar flyga – om de flyger tidigare och tidigare i samma takt som temperaturen ökar så kan de vara beroende av temperaturen, och kanske till och med börja flyga för tidigt när det inte finns föda framme för dem. Fåglar som flyger söderut över vintern och djur som går i ide under vintern är också handlar också om fenologi.",
    media: "https://dfb.adamm.dev/media/quiz2/"
  },
  {
    title: "Nya upptäckter om golfströmmens förlängning förbättrar förståelsen för nordiskt klimat",
    link: "/havsstrommar",
    content: "På bilden syns de storskaliga havsströmmarnas mönster i Atlanten. De drivs till stor del av termohalin cirkulation. Vad innebär det? ",
    answers: [ 	
      { text: "Densitetsetsskillnader som gör att vattenmassor sjunker eller stiger, alltså skillnader i temperatur och salthalt.", correct: true },
      { text: "Att jordens rotation gör att världshaven flödar.", correct: false }, 
      { text: "Om vattnet blir mindre salthaltig så sjunker det.", correct: false } 
    ],
    extraInfo: "Om du var på väg att klicka på c) så kan det bero på att salthalt också har en effekt på vattnets densitet (alltså vattnets tyngd), men det är högre salthalt som gör vatten tyngre. I nordatlanten har den varma golfströmmen svalnat så mycket att den sjunker. Den vändpunkten fungerar som en stark pump som drar i hela havscirkulationen. ",
    media: ""
  },
  {
    title: "Koldioxidutsläpp – ett etiskt dilemma i global politik",
    link: "/koldioxidfoerdelning",
    content: "För att bekämpa klimatförändringar finns inte bara vetenskapen och politiken till hands, utan även etiken. Vilket påstående stämmer om etik?",
    answers: [ 	
      { text: "Etik beskriver hur något är, till skillnad från vetenskapen som beskriver hur något bör vara.", correct: false },
      { text: "Syftet med etiken är att hitta rättvisa sätt att fördela resurser, så som koldioxidutsläppsrätter", correct: false  }, 
      { text: "Etiken undersöker vad som är värdefullt och vilka som är de yttersta syftena med vårt handlande.", correct: true } 
    ],
    extraInfo: "Det innebär att man frågar sig varför man handlar på ett visst sätt tills man når en kärna som beskriver det som är värdefullt. Även om människor har olika värderingar så kan kartläggningen av dessa hjälpa för att se vad som är gemensamt och hur man kan arbeta sig framåt. "
  },
  {
    title: "Dramatiska väderfenomen ökar smältningen av havsis i ett varmare klimat",
    link: "/vaeder",
    content: "Vad avslöjar den här bilden?",
    answers: [ 	
      { text: "När jorden värms upp så fördelas värmen jämnt.", correct: false },
      { text: "När jorden värms upp så påverkas polerna mer.", correct: true }, 
    ],
    extraInfo: "Forskare är inte helt säkra på vilka faktorer som spelar in för att det blir så, men man anar att det delvis beror på att ljusa ytor reflekterar solstrålning som åter färdas ut i rymden. När Arktis isar blir mindre och snön på land smälter tidigare på våren tar öppna vatten- och landmassor större plats, som med sin mörka yta absorberar mer solstrålning och då värms upp mer än snön och isen de ersatt skulle gjort. Detta leder i sin tur till att snö och is försvinner ännu fortare och därmed bildas en förstärkande återkoppling."
  },
  {
    title: "Artrika skogar, konflikt med vilda djur och riktigt gott kaffe",
    link: "/kaffe",
    content: "Vilket av följande påståenden stämmer?",
    answers: [ 	
      { text: "Kaffebusken har en skyddande effekt på skogen, då skog med kaffebuskar huggs ner i samma utsträckning som skog utan kaffebuskar.", correct: true },
      { text: "Kaffebusken ökar alltid mångfalden i skogen, då det är ytterligare en art som tillförs till skogen och därmed blir antalet arter i skogen fler. ", correct: false }, 
      { text: "Trots att kaffebusken är en bra inkomst för bönder i närområdet, så anser de flesta att det inte är värt att bo kvar vid skogen på grund av konflikt med vilda djur. ", correct: false }, 
    ],
    extraInfo: "Det var en tydlig slutsats i forskarnas rapport. Kaffebusken tycks oftare minska mångfalden i skogen, för att jordbrukare hugger ner konkurrerande arter. På vissa platser, som svenska strandängar, kan skötsel och rensning av konkurrerande växtlighet behövas för att öka mångfalden, men detta är alltså inte fallet här. Det stämmer att bönder nära skogen har problem med vilda djur som snor grödor och liknande, vilket kan få stora konsekvenser för en jordbrukarfamilj – mer arbetskraft behövs för att vakta marken och ibland kan det även hindra barn från att gå i skolan. Trots detta beskriver bönder inte att det inte är värt det att bo nära skogen, utan fördelarna med skogen väger mer än nackdelarna."
  },
]
