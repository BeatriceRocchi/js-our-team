// Data
const cardWrapper = document.querySelector(".card-wrapper");

const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    img: "./assets/img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    img: "./assets/img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    img: "./assets/img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    img: "./assets/img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    img: "./assets/img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    img: "./assets/img/barbara-ramos-graphic-designer.jpg",
  },
];

for (let member of teamMembers) {
  console.log(member.name);
  console.log(member.role);
  console.log(member.img);

  cardWrapper.innerHTML += `
  <div class="card">
          <div class="upper-card">
            <img
              src="${member.img}"
              alt="${member.name}"
            />
          </div>

          <div class="lower-card">
            <div class="name">${member.name}</div>
            <div class="role">${member.role}</div>
          </div>
        </div>
  `;
}
