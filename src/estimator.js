/* eslint-disable linebreak-style */
const covid19ImpactEstimator = (data) => {
  let currentInfected;
  let expectedCases;
  let severeInfected;
  let expectedSevereCases;
  let severeCaseEstimate;
  let hospitalBedByTime;
  let severeCasesByTime;
  let severeHospitalBed;
  switch (data.periodType) {
    case 'days':
      currentInfected = data.reportedCases * 10;
      expectedCases = (currentInfected * (2 ** Math.trunc(data.timeToElapse / 3)));
      severeCaseEstimate = Math.trunc((15 / 100) * expectedCases);
      hospitalBedByTime = Math.trunc((35 / 100) * data.totalHospitalBeds) - severeCaseEstimate;
      severeInfected = data.reportedCases * 50;
      expectedSevereCases = (severeInfected * (2 ** Math.trunc(data.timeToElapse / 3)));
      severeCasesByTime = Math.trunc((15 / 100) * expectedSevereCases);
      severeHospitalBed = Math.trunc((35 / 100) * data.totalHospitalBeds) - severeCasesByTime;

      break;
    case 'weeks':
      currentInfected = data.reportedCases * 10;
      expectedCases = (currentInfected * (2 ** Math.trunc((7 * data.timeToElapse) / 3)));
      severeCaseEstimate = Math.trunc((15 / 100) * expectedCases);
      hospitalBedByTime = Math.trunc((35 / 100) * data.totalHospitalBeds) - severeCaseEstimate;
      severeInfected = data.reportedCases * 50;
      expectedSevereCases = (severeInfected * (2 ** Math.trunc((7 * data.timeToElapse) / 3)));
      severeCasesByTime = Math.trunc((15 / 100) * expectedSevereCases);
      severeHospitalBed = Math.trunc((35 / 100) * data.totalHospitalBeds) - severeCasesByTime;

      break;
    case 'months':
      currentInfected = data.reportedCases * 10;
      expectedCases = (currentInfected * (2 ** Math.round((30 * data.timeToElapse) / 3)));
      severeCaseEstimate = Math.trunc((15 / 100) * expectedCases);
      hospitalBedByTime = Math.trunc((35 / 100) * data.totalHospitalBeds) - severeCaseEstimate;
      severeInfected = data.reportedCases * 50;
      expectedSevereCases = Math.trunc(severeInfected * (2 ** ((30 * data.timeToElapse) / 3)));
      severeCasesByTime = Math.trunc((15 / 100) * expectedSevereCases);
      severeHospitalBed = Math.trunc((35 / 100) * data.totalHospitalBeds) - severeCasesByTime;
      break;
    default:
      currentInfected = 0;
//      expectedCases = 0;
  }

  return {
    data,
    impact: {
      currentlyInfected: currentInfected,
      infectionsByRequestedTime: expectedCases,
      severeCasesByRequestedTime: severeCaseEstimate,
      hospitalBedsByRequestedTime: hospitalBedByTime
    },
    severeImpact: {
      currentlyInfected: severeInfected,
      infectionsByRequestedTime: expectedSevereCases,
      severeCasesByRequestedTime: severeCasesByTime,
      hospitalBedsByRequestedTime: severeHospitalBed
    }
  };
};

export default covid19ImpactEstimator;
