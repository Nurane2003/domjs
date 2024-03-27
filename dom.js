let text=document.getElementById('text')
let main=document.querySelector('.main')
let ul=document.querySelector('.new_line')


let h1=document.createElement('h1')
let text2=document.createTextNode('John Doe')
let p=document.createElement('p')
let main2=document.createTextNode('Avid adventurer and nature enthusiast with a passion for exploring new places and capturing the beauty of the world through photography.')
let h2=document.createElement('h2')
let main3=document.createTextNode('Skills')

h1.appendChild(text2)
text.appendChild(h1)

h1.style.fontSize="32px"
h2.style.fontSize="24px"


p.appendChild(main2)
main.appendChild(p)

h2.appendChild(main3)
main.appendChild(h2)

let arr=['Photography','Hiking','Camping','Outdoor Cooking','Navigation']

for(let i=0;i<arr.length; i++){
   ul.innerHTML+=`<li>${arr[i]}</li>`
}

