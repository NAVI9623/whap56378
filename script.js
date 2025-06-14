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

document.getElementById("btnPerfil").addEventListener("click", function () {
  window.location.href = "perfil.html";
});


const chats = {

  amigo28: {
    name: "5524561987",
    img: "",
    status: "últ. vez hoy a la(s) 4:00 p.m.",
    messages: [
        { from: "received", imge: "/img-perfil/fami5.jpeg" },
        { from: "sent", text: " cómo va todo? " },
        { from: "received", text: "bien, pero con muchas por hcaer" },
        { from: "sent", text: "uff, yo igual!" },
        { from: "received", text: "" },
      
    ]
},


  amigo27: {
    name: "6186878790",
    img: "",
    status: "últ. vez hoy a la(s) 3:45 p.m.",
    messages: [
        { from: "received", imge: "/img-perfil/fami4.jpeg" },
        { from: "sent", text: "hey 😃" },
        { from: "received", text: "todo bien?" },
        { from: "sent", text: "quien eres" },
        { from: "received", text: "te conoco" },
        { from: "sent", text: "no" },
        { from: "received", text: "te mando" },
        { from: "sent", text: "??" },
        { from: "received", text: "" },
    ]
},


  amigo26: {
    name: "6184237982",
    img: "",
    status: "últ. vez hoy a la(s) 3:30 p.m.",
    messages: [
        { from: "received", imge: "/img-perfil/fami3.jpeg" },
        { from: "sent", text: "te acuerdas hace un año 🎉" },
        { from: "received", imge: "/img-perfil/fami3.jpeg" },
        { from: "received", text: "cómo olvidarlas" },
        { from: "sent", text: "sí" },
        { from: "received", text: "jajaja, yo tampoco 😂" },
        { from: "sent", text: "deberíamos hacer otra pronto" },
        { from: "received", text: "totalment" },
        { from: "sent", text: "voy" },
        { from: "received", text:  "uiero ayudar!" },
    ]
},


  amigo25: {
    name: "5587297122",
    img: "",
    status: "últ. vez hoy a la(s) 3:15 p.m.",
    messages: [
        { from: "received", imge: "/img-perfil/fami2.jpeg" },
        { from: "sent", text: "hey, que tal 😁" },
        { from: "received", text: "todo bien, y tú" },
        { from: "sent", text: "pensando en ir este fin." },
        { from: "received", text: "cena y qué película" },
        { from: "sent", text: "si" },
        { from: "received", text: "me apunto 🎉" },
        { from: "sent", text: "perfecto" },
        { from: "received", text: "sí, avísame" },
    ]
},


 amigo24: {
    name: "5576337833",
    img: "",
    status: "últ. vez hoy a la(s) 3:38 p.m.",
    messages: [
      { from: "received", imge: "/img-perfil/fami1.jpeg" },
      { from: "sent", text: "huy ya tiene rato esa foto" },
      { from: "received", text: "me gusto y me la pediste ese dua" },
      { from: "sent", text: "ni me acuerdo jajaj" },
      { from: "received", text: "bueno ya te la pase" },
      { from: "sent", text: "ya la tenia la vera jajaj " },
       { from: "sent", text: "pues ya que " },
      { from: "received", text: "gracias gracias" },
      { from: "received", text: "" },
    ]
  },



 amigo23: {
    name: "618 123 4739",
    img: "img-perfil/foto23.jpg",
    status: "últ. vez hoy a la(s) 3:38 p.m.",
    messages: [
      { from: "received", text: "es que la verdad no se mucho de eso" },
      { from: "sent", text: "algun conocido que tenggas" },
      { from: "received", text: "si creo alguien deja le pregunto" },
      { from: "sent", text: "por favor" },
      { from: "received", text: "si pero en si cual es el problema" },
      { from: "sent", text: "engo problea con mi numero telefonico me desvia llamadas " },
       { from: "sent", text: "todo el fin de semana y no se que onda  " },
      { from: "received", text: "desde cuando" },
      { from: "received", text: "dejame preguntar porque luego dan de baja los chip de la nada" },
     { from: "received", text: "alguin mas tiene tu correo" },
    { from: "sent", text: "no solo yoo  " },
    { from: "received", text: "tal ves dejaste una secion en algun telefoono antiguo" },
    ]
  },


 amigo22: {
    name: "6747348273",
    img: "",
    status: "últ. vez hoy a la(s) 3:38 p.m.",
    messages: [
      { from: "received", text: "te veo" },
      { from: "sent", text: "donde siempre 👩‍🦲" },
      { from: "received", text: "en Patoni frente ala iglesia y la plaza" },
      { from: "sent", text: "la plaza de armas verdad ?" },
      { from: "received", text: "ok" },
      { from: "sent", text: "ok de todos modos te marco rumbo " },
      { from: "received", text: "si de acuerdo no tardes porque con tigo ni se sabe jaja 💚" },
    { from: "sent", text: "prometido gupo 🤍 " },
    ]
  },


 amigo21: {
    name: "kasandra",
    img: "img-perfil/foto21.jpg",
    status: "últ. vez hoy a la(s) 1:38 p.m.",
    messages: [
      { from: "received", text: "sisupiste que esta pasando" },
      { from: "sent", text: "le estoy preguntando a un tio" },
      { from: "received", text: "beno amiga porque si esta raro too el fin de semana casi ni te llegan" },
      { from: "sent", text: "si lo se me parece raro y ya lo desistale e intale y creo ya quedo" },
      { from: "received", text: "ok" },
      { from: "sent", text: "gracias de todos modos si ves algo rro me avisas" }
    ]
  },


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
    name: "6743456574",
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
       {from: "received", text:"entonces que hora"}
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
      { from: "received", text: "amiga  todo bien" },
      { from: "received", text: "me aparece que verifique si conosco este contacto" },
      { from: "sent", text: "Sí segun yo " },
      { from: "sent", text: "pero si noto raro mi wats no me actualiza rapido" },
      { from: "received", text: "y como ya noo puedo tomar capturas no pueo mostrarte" },
      { from: "sent", text: "si la verdad esta raro voy a preguntar o a desistalar wats" },
      { from: "received", text: "ok veras a julio 🐷 ?" }
    ]
  },

     amigo13: {
    name: "6187458596",
    img: "img-perfil/foto13.jpeg",
    status: "últ. vez hoy a las 1:20 a.m.",
    messages: [
      { from: "received", text: "" },
      { from: "sent", text: "?" },
      { from: "sent", text: "que necesitas ?" },
      { from: "sent", text: "buenas buenas" }
    ]
  },


   amigo14: {
    name: "6187458596",
    img: "img-perfil/foto14.jpeg",
    status: "últ. vez hoy a las 5:20 p.m.",
    messages: [
      { from: "received", text: "dime que dia puedes ?" },
      { from: "sent", text: "Sí o creo que el domingo" },
      { from: "sent", text: "ya estoy a qui en a plaza" },
       { from: "sent", text: "no t eveo" },
       { from: "received", text: "estuvo bueno el fin e semana no ?" },
       { from: "sent", text: "si me gusto mucho 💞" },
              { from: "sent", text: "jueves si puedes me marcas a " },
    ]
  },

    amigo15: {
    name: "618954147",
    img: "img-perfil/foto15.jpeg",
    status: "últ. vez hoy a las 8:20 p.m.",
    messages: [
      { from: "received", text: "hola" },
      { from: "sent", text: "quien eres ?" }
    ]
  },

   amigo16: {
    name: "678569414",
    img: "img-perfil/foto16.jpeg",
    status: "últ. vez hoy a las 8:20 p.m.",
    messages: [
      { from: "received", text: "hola mija" },
      { from: "sent", text: "digame tia" },
      { from: "sent", text: "todo bien" },
      { from: "sent", text: "😁" }
    ]
  },

     amigo17: {
    name: "6756485122",
    img: "img-perfil/foto17.jpeg",
    status: "últ. vez hoy a las 2:00 p.m.",
    messages: [
      { from: "received", text: "buenas tardes" },
      { from: "sent", text: "" }
    ]
  },

      amigo18: {
    name: "6756485122",
    img: "img-perfil/foto18.jpeg",
    status: "últ. vez hoy a las 5:56 p.m.",
    messages: [
      { from: "received", text: "Tienes tiempo hoyy" },
      { from: "sent", text: "mañana" },
      { from: "received", text: "te lo envie desde el viernes" },
      { from: "sent", text: "enserio ?" },
      { from: "received", text: "de verdad no las palomas me aprecieron" },
      { from: "sent", text: "tengo dos personas que me dicen lo mismo" },
      { from: "received", text: "no nos quieres contestar o que mensa jajaja" },
      { from: "sent", text: "no la verdad no jajajja no pero no se que onda" },
    ]
  },


      amigo19: {
    name: "6145786587",
    img: "img-perfil/foto19.jpeg",
    status: "últ. vez hoy a las 3:56 p.m.",
    messages: [
      { from: "received", text: "😁" },
      { from: "sent", text: "😶" }
    ]
  },

      amigo20: {
    name: "5689854752",
    img: "img-perfil/foto20.jpeg",
    status: "últ. vez hoy a las 3:00 p.m.",
    messages: [
      { from: "received", text: "holaaaaa" },
      { from: "received", text: "ya no me quieres hablar 💔" },
      { from: "sent", text: "?" },
      { from: "received", text: "nrts" },
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
