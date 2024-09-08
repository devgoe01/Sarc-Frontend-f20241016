
const nhh = [{t:"Bangalore"},{t:"Pune"},{t:"Mumbai"},{t:"Delhi"},{t:"Hyderabad"},{t:"Kolkata"},{t:"Chennai"},{t:"Chandigarh"},{t:"Ahmedabad"},{t:"Jaipur"},{t:"Nagpur"},];

const nhhz = document.querySelector('#but1');

nhh.forEach(pl_ace => {
    nhhz.innerHTML += `
        <button class="buttonclass2">Best Restaurants in ${pl_ace.t}</button>
`;});

nhhz.innerHTML += `<button class="buttonclass2">Show More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg> </button>`

const nzh = [{d:"Chinese"},{d:"South Indian"},{d:"Indian"},{d:"Kerela"},{d:"Korean"},{d:"North Indian"},{d:"Seafood"},{d:"Bengali"},{d:"Punjabi"},{d:"Italian"},{d:"Andhra"},];

const nzhz = document.querySelector('#but2');

nzh.forEach(pla_ce => {
    nzhz.innerHTML += `
        <button class="buttonclass2">${pla_ce.d} Restaurant Near Me</button>
`;});
nzhz.innerHTML += `<button class="buttonclass2">Show More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg> </button>`