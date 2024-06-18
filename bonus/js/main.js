// Recupero elementi in pagina
const container =  document.getElementById("container")


// Creazione arrey oggetti

const membTeam = [
    membro1 = {
        "name" : "Wayne Barnett",
        "role" : "Founder & CEO",
        "image" : "wayne-barnett-founder-ceo.jpg"
    },
    membro2 = {
        "name" : "Angela Caroll",
        "role" : "Chief Editor",
        "image" : "angela-caroll-chief-editor.jpg"
    },
    membro3 = {
        "name" : "Walter Gordon",
        "role" : "Office Manager",
        "image" : "walter-gordon-office-manager.jpg"
    },
    membro4 = {
        "name" : "Angela Lopez",
        "role" : "Social Media Manager",
        "image" : "angela-lopez-social-media-manager.jpg"
    },
    membro5 = {
        "name" : "Scott Estrada",
        "role" : "Developer",
        "image" : "scott-estrada-developer.jpg"
    },
    membro6 = {
        "name" : "Barbara Ramos",
        "role" : "Graphic Designer",
        "image" : "barbara-ramos-graphic-designer.jpg"
    },
    
]

console.log(membTeam)

// Stampa di ogni singolo oggetto

for (let i = 0; i < membTeam.length; i++) {
    let singleMemb = membTeam[i];
    console.log(singleMemb);
    // Creazione di una div per ogni serie di dato e img
    let myBox = document.createElement("div");
    myBox.className = "my_box";
    container.append(myBox);
    for (let key in singleMemb){
        let singleMembData = singleMemb[key];
        // Condizione per stampare img o testo
        if (key === "image") {
            let img = new Image();
            img.src = `img/${singleMembData}`;
            myBox.prepend(img);
        } else {
            myBox.innerHTML += `<h3>${singleMembData}</h3>`
        }
    }
}