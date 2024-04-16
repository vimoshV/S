import React, { useState } from 'react';
import './App.css';
import sotkaniImage from './sotkani3.jpg';
import titleImage from './title.jpg';

function App() {
  const [showRightSection, setShowRightSection] = useState(false);

  const handleContinueClick = () => {
    setShowRightSection(true);
  };

  // Sample data for Group A and Group B
  const groupAData = [
    { school: 'SMC', W: 3, L: 5, PTS: 2 * 3, ZScore: 0.782 },
    { school: 'MMC', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.682 },
    { school: 'ABC', W: 3, L: 5, PTS: 2 * 3, ZScore: 0.712 },
    { school: 'XYZ', W: 6, L: 2, PTS: 2 * 6, ZScore: 0.312 },
    // Add more schools as needed
  ];

  const groupBData = [
    { school: 'SMC', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.782 },
    { school: 'MMC', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.682 },
    { school: 'ABC', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.712 },
    { school: 'XYZ', W: 6, L: 2, PTS: 2 * 6, ZScore: 0.312 },  ];

  // Sort Group A and Group B data based on W points and Z score
// Sort Group A and Group B data based on W points and Z score
const sortedGroupA = groupAData.sort((a, b) => {
  if (a.W === b.W) {
    if (a.PTS === b.PTS) {
      return b.ZScore - a.ZScore; // Sort by Z score in descending order if PTS are equal
    }
    return b.PTS - a.PTS; // Sort by PTS in descending order if W points are equal
  }
  return b.W - a.W; // Sort by W points in descending order
});

const sortedGroupB = groupBData.sort((a, b) => {
  if (a.W === b.W) {
    if (a.PTS === b.PTS) {
      return b.ZScore - a.ZScore; // Sort by Z score in descending order if PTS are equal
    }
    return b.PTS - a.PTS; // Sort by PTS in descending order if W points are equal
  }
  return b.W - a.W; // Sort by W points in descending order
});


  return (
    <div className="App">
      <div className={`left-section ${!showRightSection ? '' : 'hidden'}`}>
        <img src={sotkaniImage} alt="sotkani" />
        {!showRightSection && (
          <button className="continue-button" onClick={handleContinueClick}>Continue</button>
        )}
      </div>
      <div className={`right-section ${showRightSection ? '' : 'hidden'}`}>
        <img className='titleimg' src={titleImage} alt="Title" />
        <h3 className="group-heading">Group A</h3>
        <table>
          <thead>
            <tr>
              <th>Place</th>
              <th>School Name</th>
              <th>W</th>
              <th>L</th>
              <th>PTS</th>
              <th>Z Score</th>
            </tr>
          </thead>
          <tbody>
            {sortedGroupA.map((school, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{school.school}</td>
                <td>{school.W}</td>
                <td>{school.L}</td>
                <td>{school.PTS}</td>
                <td>{school.ZScore}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="group-heading">Group B</h3>
        <table>
          <thead>
            <tr>
              <th>Place</th>
              <th>School Name</th>
              <th>W</th>
              <th>L</th>
              <th>PTS</th>
              <th>Z Score</th>
            </tr>
          </thead>
          <tbody>
            {sortedGroupB.map((school, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{school.school}</td>
                <td>{school.W}</td>
                <td>{school.L}</td>
                <td>{school.PTS}</td>
                <td>{school.ZScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
      </div>
    </div>
  );
}

export default App;
