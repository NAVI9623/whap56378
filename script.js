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

  // JavaScript

   amigo38: {
    name: "5512345678",
    img: "https://placehold.co/100x100",
    status: "en línea",
    messages: [
      { from: "received", text: "Oye bro, ¿sigo teniendo el descuento de cliente frecuente?" },
      { from: "sent", text: "Claro mi rey, para ti siempre hay promo" },
      { from: "received", text: "Jaja chido, pero está bien caro eso que subiste ayer" },
      { from: "sent", text: "Es material premium compa, pero te dejo en 300 si lo quieres ya" },
      { from: "sent", text: "tengo roblemas con este numero les aviso si lo cambio" }
    ]
  },
  amigo39: {
    name: "5576543210",
    img: "https://placehold.co/100x100",
    status: "escribiendo...",
    messages: [
      { from: "received", text: "Hola amor, quiero el paquete premium pero no tan caro jaja" },
      { from: "sent", text: "Dime qué buscas y vemos precio bonito ;)" },
      { from: "received", text: "Todo lo de lencería y un videíto como el de tu perfil" },
      { from: "sent", text: "Ahhh eso es aparte mamacita, pero te lo dejo en paquete" },
   { from: "sent", text: "tengo roblemas con este numero les aviso si lo cambio" }
    ]
  },
  amigo40: {
    name: "5587654321",
    img: "https://placehold.co/100x100",
    status: "últ. vez hoy a las 5:00 p.m.",
    messages: [
      { from: "received", text: "Jajaja no mames wey, qué pedo con eso que publicaste" },
      { from: "sent", text: "Jajaja ya sé, está bien culero pero tiene views" },
      { from: "received", text: "Sí wey de pura gente que quiere verte mal" },
      { from: "sent", text: "Nel, si pagan pues qué más da jaja" },
    { from: "sent", text: "tengo roblemas con este numero les aviso si lo cambio" },
    { from: "sent", text: "si ya me avias cometado ya te quieren bannear jaja" },
  ]
  },

   amigo41: {
    name: "5534567890",
    img: "https://placehold.co/100x100",
    status: "en línea",
    messages: [
      { from: "received", text: "Oye manda demo de las fotos nuevas, no me aparecen" },
      { from: "sent", text: "No puedo mandar preview de todo amor, es contenido exclusivo" },
      { from: "received", text: "Pues ni modo, ya me perdiste, así no trabajo yo" },
      { from: "sent", text: "Mira te mando algo pero no todo, está bien?" },
    { from: "sent", text: "tengo roblemas con este numero les aviso si lo cambio" }
    ]
  },
  amigo42: {
    name: "5598765432",
    img: "https://placehold.co/100x100",
    status: "últ. vez hoy a las 5:30 p.m.",
    messages: [
      { from: "received", text: "Ya transferí a tu cuenta, mándame el pack completo según lo acordado" },
      { from: "sent", text: "Va, ya te mando link por priv. Gracias!" },
      { from: "received", text: "No me falles, eh? Es regalo de cumple" },
      { from: "sent", text: "Tranqui, todo en orden. Que lo disfruten!" },
     { from: "sent", text: "tengo roblemas con este numero les aviso si lo cambio" }
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
     { from: "received", text: "si cambiaste denemro como te dije ?" },
     { from: "sent", text: "si ya tengo uno nuevo pero un no lopaso  " },
     { from: "sent", text: "por mis contactos voy a esperar haber si sabe algo antes de pasarlo  " },
    {from: "received", text: "algine mas tiene tu cuenta eso es seguro" },
    {from: "received", text: "me dijiste que tenias nombres de quin podian ser si quieres pasamesus perfiles" },
    { from: "sent", text: "si tego mis sospechas " },
    ]
  },

amigo36: {
  name: "",
  img: "img-perfil/logomenonita.png",
  status: "últ. vez hoy a la(s) 2:15 p.m.",
  messages: [
   
  ]
},

amigo29: {
  name: "618126357",
  img: "img-perfil/foto29.jpeg",
  status: "últ. vez hoy a la(s) 11:30 a.m.",
  messages: [
    { from: "received", text: "Oye tienes el número de las gorditas " },
    { from: "sent", text: "Siii 🫓" },
    { from: "sent", text: "a no creo que no jaja" },
    
    { from: "received", text: " antojo bien cabrón jaja" },
    { from: "sent", text: "pide las de chicharrón, " },
    { from: "sent", text: "solo elmenu pero no vene ningun numero, " },
    { from: "sent", img: "img-perfil/menu1.jpeg" },
    { from: "sent", text: "buscare, " },
    { from: "received", text: " pa' no quedarme con ganas 😋" },
    { from: "sent", text: " si " },
    { from: "received", text: "Va va" }
  ]
},

amigo30: {
  name: "6181167628",
  img: "img-perfil/foto30.jpeg",
  status: "últ. vez hoy a la(s) 2:15 p.m.",
  messages: [
   
  ]
},

amigo31: {
  name: "6186380827",
  img: "img-perfil/foto31.jpeg",
  status: "últ. vez hoy a la(s) 4:20 p.m.",
  messages: [
    { from: "received", text: "Ey vi tu story, " },
    { from: "sent", text: "Sii estuvo súper" },
    { from: "received", text: "Estaba con la familia " },
    { from: "sent", text: "La próxima en mi casa, avísame con tiempo" },
    { from: "received", text: "Sale!" },
    { from: "sent", text: "Perfecto" }
  ]
},

amigo32: {
  name: "5547678798",
  img: "img-perfil/foto32.jpeg",
  status: "últ. vez hoy a la(s) 6:45 p.m.",
  messages: [
    
  ]
},

amigo33: {
  name: "5634568954",
  img: "img-perfil/foto33.jpeg",
  status: "últ. vez hoy a la(s) 9:10 p.m.",
  messages: [
    { from: "received", text: "Oye me pasas eso" },
    { from: "sent", text: "Claro Pero no están muy completos jaja" },
    { from: "received", text: "No importa, 😫" },
    { from: "sent", text: "Ahí te los mando" },
    { from: "received", text: "Sii muchas gracias! Te debo un café ☕" },
    { from: "sent", text: "Jaja de nada" },
    { from: "received", text: "Gracias✨" }
  ]
},

// JavaScript
amigo34: {
  name: "5578426391",
  img: "img-perfil/foto34.jpeg",
  status: "últ. vez hoy a la(s) 1:22 p.m.",
  messages: [
   
    { from: "received", text: "NO MAMES WEY 🤣🤣🤣 y qué hizo el" },
    { from: "sent", text: "Me saludó de vuelta 😭" },
    { from: "received", text: "Jajaja estás más dormida q despierta we " },
    { from: "sent", text: "Es q no había tomado café aún ☕" },
    { from: "received", text: "Ya veo xD " }
  ]
},

amigo35: {
  name: "5543218765",
  img: "img-perfil/foto35.jpeg",
  status: "últ. vez hoy a la(s) 8:05 p.m.",
  messages: [
    { from: "received", text: "Perdonn por lo de anoche 🙏" },
    { from: "sent", text: "No te preocupes no pasa nada 😅" },
    { from: "received", text: "Es q estaba bie" },
    { from: "sent", text: "JAJAJA AH CARAY! " },
    { from: "received", text: "Sii cuando bailaba 💃" },
    { from: "sent", text: "Tranqu" },
    { from: "received", text: "AY NO MAMES! Me sentía tan mal!" },
    { from: "sent", text: "Jaja " },
    { from: "received", text: "xD" }
  ]
},


  amigo28: {
    name: "5524561987",
    img: "",
    status: "últ. vez hoy a la(s) 4:00 p.m.",
    messages: [
        
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
        { from: "received", img: "img-perfil/fami2.jpeg" },
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
    img: "img-perfil/foto24.jpeg",
    status: "últ. vez hoy a la(s) 3:38 p.m.",
    messages: [
      { from: "received", img: "img-perfil/fami1.jpeg" },
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
      { from: "sent", text: "😶" },
      { from: "received", text: "si mevas a compañar entonces" },
      { from: "received", text: "ni me confrmaste el miercoels" },
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
       ${chat.messages.map(msg => {
        
        if (msg.text) {
          return `<div class="message ${msg.from}">${msg.text}</div>`;
        } else if (msg.img) {
          return `<div class="message ${msg.from}"><img src="${msg.img}" class="message-img" /></div>`;
        }
        return "";
      }).join('')}
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
