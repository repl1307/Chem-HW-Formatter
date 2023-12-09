const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('input', generateOutput);
const elements = [
  'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F',
  'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar',
  'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co',
  'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr',
  'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh',
  'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe',
  'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu',
  'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf',
  'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl',
  'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th',
  'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es',
  'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs',
  'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts',
  'Og'
];

function isElem(str){
  if(str.length == 2)
    return elements.includes(str[0].toUpperCase()+str[1].toLowerCase());
  else
    return elements.includes(str[0].toUpperCase());
}

function generateOutput(e){
  input.value = input.value.replaceAll('-->', '→');
  output.scrollIntoView();
  const text = input.value.split('');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const operations = '+-/*=';
  const numbers = '0123456789';

  
  output.innerHTML = '';
  for(let i = 0; i < text.length; i++){
    const char = text[i];
    //if letter
    if(alphabet.includes(char.toLowerCase())){
      if(char.toUpperCase() == char)
        output.innerHTML += `<span>${char.toUpperCase()}</span>`;
      else if(i > 0 && alphabet.includes(text[i-1].toLowerCase()) && (isElem(text[i-1]+char)))
        output.innerHTML += `<span>${char.toLowerCase()}</span>`;
      else
        output.innerHTML += `<span>${char.toUpperCase()}</span>`;
    }
    //if operation
    else if(operations.includes(char)){
      output.innerHTML += `<span> ${char} </span>`;
    }
    //if number
    else if(numbers.includes(char)){
      if(i > 0 && (alphabet.includes(text[i-1].toLowerCase()) || numbers.includes(text[i-1]) || text[i-1]==")" || text[i-1]=="]"))
        output.innerHTML += `<sub>${char}</sub>`
      else
        output.innerHTML += `<span>${char}</span>`
    }
    //if new line
    else if(char == '\n'){
      output.innerHTML += '<br />';
    }
    //if miscellaneous
    else {
      output.innerHTML += `<span>${char}</span>`;
    }
  }
}
