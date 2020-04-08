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
      timeToElapse: 58,
      reportedCases: 674,
      population: 66622705,
      totalHospitalBeds: 1380614
    };

    const output = {
      data: input,
      impact: {
        currentlyInfected: 6740,
        infectionsByRequestedTime: 4452184425
      },
      severeImpact: {
        currentlyInfected: 33700,
        infectionsByRequestedTime: 22260922126          
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
        infectionsByRequestedTime: 171185
      },
      severeImpact: {
        currentlyInfected: 33700,
        infectionsByRequestedTime: 855927           
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
      population: 66622705,
      totalHospitalBeds: 1380614
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
