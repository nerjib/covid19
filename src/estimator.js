/* eslint-disable linebreak-style */
const covid19ImpactEstimator = (data) => {
  let currentInfected;
  let expectedCases;
  let severeInfected;
  let expectedSevereCases;
  switch (data.periodType) {
    case 'days':
      currentInfected = data.reportedCases * 10;
      expectedCases = (currentInfected * (2 ** Math.round(data.timeToElapse / 3)));
      severeInfected = data.reportedCases * 50;
      expectedSevereCases = (severeInfected * (2 ** Math.round(data.timeToElapse / 3)));
      break;
    case 'weeks':
      currentInfected = data.reportedCases * 10;
      expectedCases = Math.round(currentInfected * (2 ** ((7 * data.timeToElapse) / 3)));
      severeInfected = data.reportedCases * 50;
      expectedSevereCases = Math.round(severeInfected * (2 ** ((7 * data.timeToElapse) / 3)));
      break;
    case 'months':
      currentInfected = data.reportedCases * 10;
      expectedCases = Math.round(currentInfected * (2 ** ((7 * 4 * data.timeToElapse) / 3)));
      severeInfected = data.reportedCases * 50;
      expectedSevereCases = Math.round(severeInfected * (2 ** ((7 * 4 * data.timeToElapse) / 3)));
      break;
    default:
      currentInfected = 0;
  }

  return {
    data,
    impact: {
      currentlyInfected: currentInfected,
      infectionsByRequestedTime: expectedCases
    },
    severeImpact: {
      currentlyInfected: severeInfected,
      infectionsByRequestedTime: expectedSevereCases
    }
  };
};

export default covid19ImpactEstimator;
