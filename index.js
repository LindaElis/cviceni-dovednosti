
function updateSkill(skillId, value) {
    const skillBar = document.getElementById(skillId).querySelector('.skill__progress')
    const skillValue = document.getElementById(skillId).querySelector('.skill__value')
  
    skillBar.style.width = value + "%"
    skillValue.textContent = value + " / 100 "
  }
  
  
  const HodnotaHTML = prompt("Zadejte úroveň HTML (0-100): ")
  const HodnotaCSS = prompt("Zadejte úroveň CSS (0-100): ")
  const HodnotaJS = prompt("Zadejte úroveň JavaScript (0-100): ")
 
  updateSkill('skill1', Number(HodnotaHTML, 10) || 0)
  updateSkill('skill2', Number(HodnotaCSS, 10) || 0)
  updateSkill('skill3', Number(HodnotaJS, 10) || 0)
