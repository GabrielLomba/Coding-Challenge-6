function question3(code) {
    if(code[0] === '#') {
        const red = parseInt(code.slice(1, 3), 16);
        const green = parseInt(code.slice(3, 5), 16);
        const blue = parseInt(code.slice(5, 7), 16);
        return `${red},${green},${blue}`;
    } else {
        const parts = code.split(',');
        const red = parseInt(parts[0]).toString(16).toUpperCase();
        const green = parseInt(parts[1]).toString(16).toUpperCase();
        const blue = parseInt(parts[2]).toString(16).toUpperCase();
        return `#${red}${green}${blue}`;
    }
}

const hex = '#FF5733';
const rgb = '255, 87, 51';
console.log(question3(hex));
console.log(question3(rgb));
