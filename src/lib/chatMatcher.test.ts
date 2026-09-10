import { getBotReply } from './chatMatcher';

test('matches a known keyword to its category response', () => {
  const reply = getBotReply('Do you have a 24 hour emergency room?');
  expect(reply.text).toMatch(/24 hours/i);
});

test('falls back when no keyword matches', () => {
  const reply = getBotReply('asdkjfh qwerty nonsense');
  expect(reply.text).toMatch(/not sure/i);
});

// Regression: \bcareer\b never matched "careers" (no word boundary before the trailing "s"),
// so every plural-suggestion-chip label silently fell through to the fallback reply.
test.each(['Careers', 'Locations', 'Our Services', 'Find a Doctor', 'Emergency Room'])(
  'suggestion chip "%s" gets a real answer, not the fallback',
  (chipText) => {
    const reply = getBotReply(chipText);
    expect(reply.text).not.toMatch(/not sure/i);
  }
);
