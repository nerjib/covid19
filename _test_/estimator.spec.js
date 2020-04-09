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
        infectionsByRequestedTime: 6901760
      },
      severeImpact: {
        currentlyInfected: 33700,
        infectionsByRequestedTime: 34508800         
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
        infectionsByRequestedTime: 215680
      },
      severeImpact: {
        currentlyInfected: 33700,
        infectionsByRequestedTime: 842500           
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
        infectionsByRequestedTime: 4347836
      },
      severeImpact: {
        currentlyInfected: 33700,
        infectionsByRequestedTime: 21739182          
      }
    };
    
    expect(covid19ImpactEstimator(input)).toEqual(output);
  });
});
