// 14. Reorganizar Data
// Receba uma data no formato &quot;2025-04-15&quot; e transforme para &quot;15/04/2025&quot; usando
// split() e reverse().

function reorganizarData(data) {
    return data.split("-").reverse().join("/"); // 1. Separa, inverte e junta com "/"
  }
  
  console.log(reorganizarData("2025-04-15")); // Resultado: "15/04/2025"
  