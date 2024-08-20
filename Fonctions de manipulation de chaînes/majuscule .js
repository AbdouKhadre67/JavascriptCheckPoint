function majusculeMots(text) {
    return text.split(' ').map(mot => mot.charAt(0).toUpperCase() + mot.slice(1)).join(' ');
}

console.log(majusculeMots("bonjour tout le monde"));  
