const groupAData = [
    { school: 'SMC', W: 3, L: 5, PTS: 2 * 3, ZScore: 0.782 },
    { school: 'MMC', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.682 },
    { school: 'ABC', W: 3, L: 5, PTS: 2 * 3, ZScore: 0.712 },
    { school: 'XYZ', W: 6, L: 2, PTS: 2 * 6, ZScore: 0.312 }
  ];

  const groupBData = [
    { school: 'SMC', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.782 },
    { school: 'MMC', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.682 },
    { school: 'ABC', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.712 },
    { school: 'XYZ', W: 6, L: 2, PTS: 2 * 6, ZScore: 0.312 }
  ];

  const sortedGroupA = groupAData.sort((a, b) => {
    if (a.W === b.W) {
      if (a.PTS === b.PTS) {
        return b.ZScore - a.ZScore;
      }
      return b.PTS - a.PTS;
    }
    return b.W - a.W;
  });

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
      row.insertCell().textContent = item.school;
      row.insertCell().textContent = item.W;
      row.insertCell().textContent = item.L;
      row.insertCell().textContent = item.PTS;
      row.insertCell().textContent = item.ZScore;
    });
  }
