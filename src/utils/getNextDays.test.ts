import { getNextDays } from './getNextDays';

it('should return the next 5 days', () => {
  const result = getNextDays();
  expect(result.length).toBe(5);
});