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
