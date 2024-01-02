function calculate() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(base) || isNaN(height)) {
      alert('Masukkan angka yang valid untuk alas dan tinggi.');
      return;
    }
  
    var area = 0.5 * base * height;
    var perimeter = base + height + Math.sqrt(base**2 + height**2);
  
    document.getElementById('result').innerHTML = `
      <p>Luas Segitiga: ${area.toFixed(2)}</p>
      <p>Keliling Segitiga: ${perimeter.toFixed(2)}</p>
    `;
  }
  