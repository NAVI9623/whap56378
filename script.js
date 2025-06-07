function sendMessage() {
  const input = document.getElementById("inputMessage");
  const messageText = input.value.trim();
  if (messageText === "") return;

  const messageEl = document.createElement("div");
  messageEl.className = "message sent";
  messageEl.innerText = messageText;

  document.getElementById("messages").appendChild(messageEl);
  input.value = "";
  input.focus();
}


const chats = {
  amigo1: {
    name: "6747678798",
    img: "img-perfil/foto1.jpeg",
    status: "últ. vez hoy a la(s) 1:38 a.m.",
    messages: [
      { from: "received", text: "a que horaagendo la cita" },
      { from: "sent", text: "6 y media por favor" },
      { from: "received", text: "pero me dicen que te ven en la misma plaza esta bien" },
      { from: "sent", text: "si no tengo problema" },
      { from: "received", text: "ok" },
      { from: "sent", text: "gracias" }
    ]
  },
  amigo2: {
    name: "6746784763",
    img: "img-perfil/foto2.jpeg",
    status: "En línea",
    messages: [
      { from: "received", text: "Ya llegaste" },
      { from: "sent", text: "Sí" },
      { from: "sent", text: "en donde estas tu" },
       { from: "received", text: "en laoficna" },
       { from: "sent", text: "no tardo" },
    ]
  },
  amigo3: {
    name: "6743456574<",
    img: "img-perfil/foto3.jpeg",
    status: "últ. vez hoy a las 10:10 p.m.",
    messages: [
      { from: "received", text: "hola" },
      { from: "sent", text: "hola si pudiste entrar a la junta" },
       { from: "received", text: "no me dicen que no tengo acceso" },
      { from: "sent", text: "ame unos minutos y lo verifico" }
    ]
  },
  amigo4: {
    name: "6748279887",
    img: "img-perfil/foto4.jpeg",
    status: "En línea",
    messages: [
      { from: "received", text: "buenos dias" },
      { from: "sent", text: "solicite la carta a mi nomnre" },
      { from: "received", text: "disculpe el inconveniente lo modificaremos" },
      { from: "sent", text: "si ya llevo 2 dias asi por favor" },
       { from: "sent", text: "y tiene que venir referenciado" },
       {from: "received", text :"de acuerdo"}
    ]
  },
  amigo5: {
    name: "6181263557",
    img: "img-perfil/foto5.jpeg",
    status: "",
    messages: [
      { from: "received", text: "amigo coomo estas vas a poder el sabado" },
      { from: "sent", text: "hola dejame te confirmo en un rato compradre" },
       { from: "received", text: "de acuerdo para esperarte entonces ese dia" },
      { from: "sent", text: "si si quieren " }
    ]
  },
  amigo6: {
    name: "618116628",
    img: "img-perfil/foto6.jpeg",
    status: "últ. vez hoy a las 4:26 p.m.",
    messages: [
       { from: "sent", text: "si" },
      { from: "received", text: "???" },
      { from: "sent", text: "esperame" }
    ]
  },
  amigo7: {
    name: "6186380827",
    img: "img-perfil/foto7.jpeg",
    status: "últ. vez hoy a las 3:27 p.m.",
    messages: [
      { from: "sent", text: "pero no entendi muy bien" },
      { from: "received", text: "opino que tendria que ser mejor comentarle" },
      { from: "sent", text: "Sí" }
    ]
  },
amigo8: {
    name: "5569367658",
    img: "img-perfil/foto8.jpeg",
    status: "últ. vez hoy a las 7:48 p.m.",
    messages: [
      { from: "received", text: "te " },
      { from: "sent", text: "?" },
      {from: "sent", text:"como esta"},
      {from:"sent", text:"pasamos el jueves"},
      {from:"sent", text:"si te avisaron ?"}
      
    ]
  },

  amigo9: {
    name: "5525677639",
    img: "img-perfil/foto9.jpeg",
    status: "últ. vez hoy a las 9:20 p.m.",
    messages: [
      { from: "received", text: "Vienes" },
      { from: "sent", text: "no puesh" },
      { from: "received", text: "me avisas" },
      { from: "received", text: "vendra tambien nancy" },
      { from: "received", text: "alas11 llegan " },
    ]
  },

  amigo10: {
    name: "5524677639",
    img: "img-perfil/foto10.jpeg",
    status: "últ. vez hoy a las 10:21 a.m.",
    messages: [
      { from: "received", text: "hola amigo estas?" },
      { from: "sent", text: "bien gracias y tu ?" },
      { from: "sent", text: "vamos manaña acompañame" },
       { from: "received", text: "si esta bien vamos tambien esta pensando en eso" },
       {from: "recelved", text:"entonces que hora"}
    ]
  },

  amigo11: {
    name: "555789403",
    img: "img-perfil/foto11.jpeg",
    status: "últ. vez hoy a las 3:20 p.m.",
    messages: [
      { from: "received", text: "" },
      { from: "sent", text: "" }
    ]
  },

   amigo12: {
    name: "618745896",
    img: "img-perfil/foto12.jpeg",
    status: "últ. vez hoy a las 2:20 p.m.",
    messages: [
      { from: "received", text: "creo que si?" },
      { from: "sent", text: "Sí" }
    ]
  },

     amigo13: {
    name: "6187458596",
    img: "img-perfil/foto13.jpeg",
    status: "últ. vez hoy a las 1:20 a.m.",
    messages: [
      { from: "received", text: "creo que si?" },
      { from: "sent", text: "Sí" }
    ]
  },


   amigo14: {
    name: "6187458596",
    img: "img-perfil/foto14.jpeg",
    status: "últ. vez hoy a las 5:20 p.m.",
    messages: [
      { from: "received", text: "creo que si?" },
      { from: "sent", text: "Sí" }
    ]
  },

    amigo15: {
    name: "618954147",
    img: "img-perfil/foto15.jpeg",
    status: "últ. vez hoy a las 8:20 p.m.",
    messages: [
      { from: "received", text: "creo que si?" },
      { from: "sent", text: "mañana" }
    ]
  },

   amigo16: {
    name: "678569414",
    img: "img-perfil/foto16.jpeg",
    status: "últ. vez hoy a las 8:20 p.m.",
    messages: [
      { from: "received", text: "creo que si?" },
      { from: "sent", text: "mañana" }
    ]
  },

     amigo17: {
    name: "6756485122",
    img: "img-perfil/foto17.jpeg",
    status: "últ. vez hoy a las 2:00 p.m.",
    messages: [
      { from: "received", text: "creo que si?" },
      { from: "sent", text: "mañana" }
    ]
  },

      amigo18: {
    name: "6756485122",
    img: "img-perfil/foto18.jpeg",
    status: "últ. vez hoy a las 5:56 p.m.",
    messages: [
      { from: "received", text: "creo que si?" },
      { from: "sent", text: "mañana" }
    ]
  },


      amigo19: {
    name: "6145786587",
    img: "img-perfil/foto19.jpeg",
    status: "últ. vez hoy a las 3:56 p.m.",
    messages: [
      { from: "received", text: "creo que si?" },
      { from: "sent", text: "mañana" }
    ]
  },

      amigo20: {
    name: "5689854752",
    img: "img-perfil/foto20.jpeg",
    status: "últ. vez hoy a las 3:00 p.m.",
    messages: [
      { from: "received", text: "creo que si?" },
      { from: "sent", text: "mañana" }
    ]
  },





};


function openChat(id) {
  const chat = chats[id];
  if (!chat) return;

  const chatWindow = document.getElementById("chatWindow");

  let html = `
    <div class="chat-header">
      <img src="${chat.img}" class="chat-img" />
      <div class="chat-header-info">
        <div class="chat-name">${chat.name}</div>
        <div class="chat-status">${chat.status}</div>
      </div>
    </div>
    <div class="chat-messages" id="messages">
      ${chat.messages.map(msg => `<div class="message ${msg.from}">${msg.text}</div>`).join('')}
    </div>
    <div class="chat-input">
      <input type="text" id="inputMessage" placeholder="Escribe un mensaje" />
      <button onclick="sendMessage('${id}')">Enviar</button>
    </div>
  `;

  chatWindow.innerHTML = html;
}


function sendMessage(id) {
  const input = document.getElementById("inputMessage");
  const messageText = input.value.trim();
  if (messageText === "") return;

  const messageEl = document.createElement("div");
  messageEl.className = "message sent";
  messageEl.innerText = messageText;

  document.getElementById("messages").appendChild(messageEl);
  input.value = "";
  input.focus();

  // Guarda en la estructura (opcional)
  chats[id].messages.push({ from: "sent", text: messageText });
}
// Detecta si es pantalla chica
function esMovil() {
  return window.innerWidth <= 768;
}

// Al dar clic en contacto
document.querySelectorAll(".chat").forEach(chat => {
  chat.addEventListener("click", () => {
    if (esMovil()) {
      document.querySelector(".app").classList.add("hide-sidebar");
    }
  });
});

// Botón para volver
function volverContactos() {
  document.querySelector(".app").classList.remove("hide-sidebar");
}
