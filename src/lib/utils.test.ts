import { truncate } from './utils';

test('truncate cuts long text and appends an ellipsis', () => {
  expect(truncate('Hospital One-Stop-Shop Website', 10)).toBe('Hospital O…');
});
