const groupAData = [
    { school: 'SMC', W: 3, L: 5, PTS: 2 * 3, ZScore: 0.782, G: 'A' },
    { school: 'MMC', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.682, G: 'A' },
    { school: 'ABC', W: 3, L: 5, PTS: 2 * 3, ZScore: 0.712, G: 'A' },
    { school: 'XYZ', W: 6, L: 2, PTS: 2 * 6, ZScore: 0.312, G: 'A' },
    { school: 'PQR', W: 5, L: 3, PTS: 2 * 5, ZScore: 0.412, G: 'B' },
    { school: 'DEF', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.612, G: 'B' },
    { school: 'GHI', W: 5, L: 3, PTS: 2 * 5, ZScore: 0.512, G: 'B' },
    { school: 'JKL', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.612, G: 'B' }
  ];

  const groupBData = [
    { school: 'SMC', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.782 },
    { school: 'MMC', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.682 },
    { school: 'ABC', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.712 },
    { school: 'XYZ', W: 6, L: 2, PTS: 2 * 6, ZScore: 0.312 }
  ];

const sortedGroupA = groupAData.sort((a, b) => b.ZScore - a.ZScore);

  const sortedGroupB = groupBData.sort((a, b) => {
    if (a.W === b.W) {
      if (a.PTS === b.PTS) {
        return b.ZScore - a.ZScore;
      }
      return b.PTS - a.PTS;
    }
    return b.W - a.W;
  });


  window.onload = function() {
    renderTable('groupATable', sortedGroupA);
    renderTable('groupBTable', sortedGroupB);
  };

  function renderTable(tableId, data) {
    const tableBody = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    data.forEach((item, index) => {
      const row = tableBody.insertRow();
      row.insertCell().textContent = index + 1;
      row.insertCell().textContent = item.G;
      row.insertCell().textContent = item.school;
      row.insertCell().textContent = item.W;
      row.insertCell().textContent = item.L;
      row.insertCell().textContent = item.PTS;
      row.insertCell().textContent = item.ZScore;
    });
  }


  const matchData = [
    ['St.Michael\'s College', 'St.Michael\'s College', 'St.Michael\'s College', 'A'],
    ['A3', 'A4', 'A4', 'B'],
    ['A5', 'A1', 'A1', 'C'],
    // Add more demo data here if needed
  ];
  
  const summaryContainer = document.getElementById('summaryContainer');
  const groupFilter = document.getElementById('groupFilter');
  
  function updateSummary() {
    const selectedGroup = groupFilter.value;
    summaryContainer.innerHTML = '';
  
    matchData.forEach((match, index) => {
      if (selectedGroup === 'all' || selectedGroup === match[3]) {
        const container = document.createElement('div');
        container.classList.add('container');
  
        const matchNumber = document.createElement('p');
        matchNumber.classList.add('match-number');
        matchNumber.textContent = `Match ${index + 1}`;
        container.appendChild(matchNumber);
  
        const matchInfo = document.createElement('p');
        matchInfo.classList.add('match-info');
        
  
    // Create span elements for school names
    const school1 = document.createElement('span');
    school1.textContent = match[0];
    school1.style.marginRight = '5px'; // Add margin between school names
    matchInfo.appendChild(school1);

    matchInfo.appendChild(document.createTextNode('vs')); // Add space between schools

    const school2 = document.createElement('span');
    school2.textContent = match[1];
    school2.style.marginLeft = '5px'; // Add margin between school names
    matchInfo.appendChild(school2);

  
        container.appendChild(matchInfo);
  
        const winner = document.createElement('p');
        winner.textContent = `Winner: ${match[2]}`;
        container.appendChild(winner);
  
        summaryContainer.appendChild(container);
      }
    });
  }
  
  groupFilter.addEventListener('change', updateSummary);
  updateSummary(); // Initial update
  
