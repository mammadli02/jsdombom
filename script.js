let body=document.querySelector("body")
body.style.paddingTop="10px";
let container=document.createElement("div")
container.setAttribute("class","container")
let col12=document.createElement("div")
col12.setAttribute("class","col-12");
col12.style.width="960px";
col12.style.height="360px";
col12.style.backgroundColor="#333333"
col12.textContent="960*360px";
col12.style.color="white"
col12.style.display="flex";
col12.style.justifyContent="center";
col12.style.alignItems="center";
container.append(col12)
col12.style.fontSize="50px"
body.append(container)

let row=document.createElement("div");
row.setAttribute("class","row")
row.style.display="flex";
row.style.width="1005px";
row.style.marginTop="10px"
row.style.paddingBottom="50px"
let col1=document.createElement("div")
col1.setAttribute("class","col-4")
let card=document.createElement("div")
let cardtop=document.createElement("div")
cardtop.setAttribute("class","carttop")
cardtop.style.backgroundColor="#333333";
cardtop.style.width="290px"
cardtop.style.height="180px"
cardtop.textContent="290*180px"
cardtop.style.color="white"
cardtop.style.display="flex";
cardtop.style.fontSize="20px"
cardtop.style.justifyContent="center";
cardtop.style.alignItems="center";
cardtop.style.border="5px solid #f0f0f0"
card.append(cardtop)
let cardbottom=document.createElement("div")
cardbottom.setAttribute("class","cardbottom")
cardbottom.style.color="gray"
cardbottom.style.padding="0 10px"
let i=document.createElement("i")
i.textContent="Indonectetus facilis"
i.style.fontSize="20px"
i.style.fontWeight="bolder"
let p=document.createElement("p")
p.setAttribute("class","p")
p.textContent="Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem "
p.style.fontWeight="500"
p.style.fontSize="15px"
let a=document.createElement("a")
a.setAttribute("class", "link")
a.textContent="Read More >"
a.style.color="#e8cb98"
a.style.textDecoration="none"
a.style.fontSize="15px"
a.style.fontWeight="bolder"
a.style.display="flex"
a.style.justifyContent="end"
cardbottom.append(i,p,a)
card.append(cardbottom)
col1.append(card)
row.append(col1)


let col2=document.createElement("div")
col2.setAttribute("class","col-4")
let card2=document.createElement("div")
let cardtop2=document.createElement("div")
cardtop2.style.backgroundColor="#333333";
cardtop2.style.width="290px"
cardtop2.style.height="180px"
cardtop2.textContent="290*180px"
cardtop2.style.color="white"
cardtop2.style.display="flex";
cardtop2.style.fontSize="20px"
cardtop2.style.justifyContent="center";
cardtop2.style.alignItems="center";
cardtop2.style.border="5px solid #f0f0f0"
card2.append(cardtop2)
let cardbottom2=document.createElement("div")
cardbottom2.setAttribute("class","cardbottom2")
cardbottom2.style.color="gray"
cardbottom2.style.padding="0 10px"
let i2=document.createElement("i")
i2.textContent="Indonectetus facilis"
i2.style.fontSize="20px"
i2.style.fontWeight="bolder"
let p2=document.createElement("p")
p2.setAttribute("class","p")
p2.textContent="Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem "
p2.style.fontWeight="500"
p2.style.fontSize="15px"
let a2=document.createElement("a")
a2.setAttribute("class", "link")
a2.textContent="Read More >"
a2.style.color="#e8cb98"
a2.style.textDecoration="none"
a2.style.fontSize="15px"
a2.style.fontWeight="bolder"
a2.style.display="flex"
a2.style.justifyContent="end"
cardbottom2.append(i2,p2,a2)
card2.append(cardbottom2)
col2.append(card2)
row.append(col2)

let col3=document.createElement("div")
col3.setAttribute("class","col-4")
let card3=document.createElement("div")
let cardtop3=document.createElement("div")
cardtop3.style.backgroundColor="#333333";
cardtop3.style.width="290px"
cardtop3.style.height="180px"
cardtop3.textContent="290*180px"
cardtop3.style.color="white"
cardtop3.style.display="flex";
cardtop3.style.fontSize="20px"
cardtop3.style.justifyContent="center";
cardtop3.style.alignItems="center";
cardtop3.style.border="5px solid #f0f0f0"
card3.append(cardtop3)
let cardbottom3=document.createElement("div")
cardbottom3.setAttribute("class","cardbottom3")
cardbottom3.style.color="gray"
cardbottom3.style.padding="0 10px"
let i3=document.createElement("i")
i3.textContent="Indonectetus facilis"
i3.style.fontSize="20px"
i3.style.fontWeight="bolder"
let p3=document.createElement("p")
p3.setAttribute("class","p")
p3.textContent="Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem "
p3.style.fontWeight="500"
p3.style.fontSize="15px"
let a3=document.createElement("a")
a3.setAttribute("class", "link")
a3.textContent="Read More >"
a3.style.color="#e8cb98"
a3.style.textDecoration="none"
a3.style.fontSize="15px"
a3.style.fontWeight="bolder"
a3.style.display="flex"
a3.style.justifyContent="end"
cardbottom3.append(i3,p3,a3)
card3.append(cardbottom3)
col3.append(card3)
row.append(col3)
col12.append(row)

container.append(row)