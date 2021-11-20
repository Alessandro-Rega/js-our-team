const team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        immagine: "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        immagine: "img/angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        immagine: "img/walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "img/angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        immagine: "img/scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        immagine: "img/barbara-ramos-graphic-designer.jpg"
    },
];

const container = document.querySelector(".team-container");

for(let i = 0; i < team.length; i++){
    container.innerHTML += 
    `<div class="team-card">
        <div class="card-image">
            <img
                src=${team[i].immagine}
                alt="${team[i].nome}"
            />
        </div>
        <div class="card-text">
            <h3>${team[i].nome}</h3>
            <p>${team[i].ruolo}</p>
        </div>
  </div>`
}

const button = document.getElementById("addMemberButton");

button.addEventListener('click', function(){
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const image = document.getElementById("image").value;

    if(name != "" && role != "" && image != ""){
        container.innerHTML += 
        `<div class="team-card">
            <div class="card-image">
                <img
                    src=${image}
                    alt="${name}"
                />
            </div>
            <div class="card-text">
                <h3>${name}</h3>
                <p>${role}</p>
            </div>
        </div>`
        
        document.getElementById("name").value = '';
        document.getElementById("role").value = '';
        document.getElementById("image").value = '';
    }
    else {
        alert("Compila tutti i campi");
    }
});