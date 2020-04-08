/* eslint-disable linebreak-style */
const covid19ImpactEstimator = (data) => {
  const currentInfected = data.reportedCases * 10;
  const expectedCases = currentInfected * 1024;
  const severeInfected = data.reportedCases * 50;
  const expectedSevereCases = severeInfected * 1024;
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
