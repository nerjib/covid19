/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */

import covid19ImpactEstimator from '../src/estimator';


describe('Challenge 1', () => {
  test('checking values of output', () => {
    const input = {
      region: {
        name: 'Africa',
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
      },
      periodType: 'days',
      timeToElapse: 30,
      reportedCases: 674,
      population: 66622705,
      totalHospitalBeds: 1380614
    };

    const output = {
      data: input,
      impact: {
        currentlyInfected: 6740,  
        infectionsByRequestedTime: 6901760,
        severeCasesByRequestedTime: 1035264,
        hospitalBedsByRequestedTime: -552049,
        casesForICUByRequestedTime: 345088,
        casesForVentilatorsByRequestedTime: 138035,
        dollarsInFlight: 735037440.00
      },
      severeImpact: {
        currentlyInfected: 33700,
        infectionsByRequestedTime: 34508800,
        severeCasesByRequestedTime: 5176320,
        hospitalBedsByRequestedTime: -4693105,
        casesForICUByRequestedTime: 1725440,
        casesForVentilatorsByRequestedTime: 690176,
        dollarsInFlight: 3675187200.00         
      }
    };

    expect(covid19ImpactEstimator(input)).toEqual(output);
  });
});

describe('Challenge 1', () => {
  test('checking values of output in weeks', () => {
    const input = {
      region: {
        name: 'Africa',
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
      },
      periodType: 'weeks',
      timeToElapse: 2,
      reportedCases: 674,
      population: 66622705,
      totalHospitalBeds: 1380614
    };
  
    const output = {
      data: input,
      impact: {
        currentlyInfected: 6740,
        //  infectionsByRequestedTime: 215680,
        infectionsByRequestedTime: 107840,
        severeCasesByRequestedTime: 16176,
        hospitalBedsByRequestedTime: 467039,
        casesForICUByRequestedTime: 5392,
        casesForVentilatorsByRequestedTime: 2156,
        dollarsInFlight: 5359648.00
      },
      severeImpact: {
        currentlyInfected: 33700,
        // infectionsByRequestedTime: 842500
        infectionsByRequestedTime: 539200,
        severeCasesByRequestedTime: 80880,
        hospitalBedsByRequestedTime: 402335,
        casesForICUByRequestedTime: 26960,
        casesForVentilatorsByRequestedTime: 10784,
        dollarsInFlight: 26798240.00
           
      }
    };
  
    expect(covid19ImpactEstimator(input)).toEqual(output);
  });
});

describe('Challenge 1', () => {
  test('checking values of output in Month', () => {
    const input = {
      region: {
        name: 'Africa',
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
      },
      periodType: 'months',
      timeToElapse: 1,
      reportedCases: 674,
      population: 6901760,
      totalHospitalBeds: 34508800
    };
    
    const output = {
      data: input,
      impact: {
        currentlyInfected: 6740,
        infectionsByRequestedTime: 6901760,
        severeCasesByRequestedTime: 1035264,
        hospitalBedsByRequestedTime: 11042816,
        casesForICUByRequestedTime: 345088,
        casesForVentilatorsByRequestedTime: 138035,
        dollarsInFlight: 735037440.00
      },
      severeImpact: {
        currentlyInfected: 33700,
        infectionsByRequestedTime: 34508800,
        severeCasesByRequestedTime: 5176320,
        hospitalBedsByRequestedTime: 6901760,
        casesForICUByRequestedTime: 1725440,
        casesForVentilatorsByRequestedTime: 690176,
        dollarsInFlight: 3675187200.00         
      }
    };
    
    expect(covid19ImpactEstimator(input)).toEqual(output);
  });
});
