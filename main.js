const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("hello")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Salam cv 3lik !";
        texts.appendChild(p);
      }
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "cv Hmdlh Onta ?";
      texts.appendChild(p);
    }
    if (text.includes("where are you now")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "ana 3andi presontation ta3 English db d3i m3a khok ";
      texts.appendChild(p);
    }
    if (text.includes("what do you want to tell all this student")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "lah inaj7kom kamlin a khoty 9olo Amiin ";
      texts.appendChild(p);
    }
    if (text.includes("goodbye")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "beslama 3likom safi saf9o rah salat presontation ! ";
      texts.appendChild(p);
    }
    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "machi choghlak ! ";
      texts.appendChild(p);
    }
    if (text.includes("open my YouTube")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening youtube channel";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.youtube.com/");
    }
    if (text.includes("open my WhatsApp")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "opening WhatsApp";
        texts.appendChild(p);
        console.log("opening WhatsApp");
        window.open("https://web.whatsapp.com/");
      }
    if (text.includes("open my Gmail")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "opening Gmail";
        texts.appendChild(p);
        console.log("opening Gmail");
        window.open("https://mail.google.com/mail/u/0/#inbox");
      }
    p = document.createElement("p");
  }
});


// recognition.addEventListener("end", () => {
//   recognition.start();
// });



