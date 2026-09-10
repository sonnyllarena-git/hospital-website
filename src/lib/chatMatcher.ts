import { CHAT_CATEGORIES, FALLBACK_RESPONSE, type ChatCategory } from './chatKnowledgeBase';

// `s?` lets a singular keyword ("career") also match its plain plural ("careers") — without it,
// \bcareer\b never matches "careers" because there's no word boundary between "career" and the
// trailing "s". Found via a real suggestion chip ("Careers") that returned the fallback reply.
function matchesKeyword(message: string, keyword: string): boolean {
  if (keyword.includes(' ')) return message.includes(keyword);
  return new RegExp(`\\b${keyword}s?\\b`).test(message);
}

export function matchQuestion(userInput: string): ChatCategory | null {
  const input = userInput.toLowerCase();
  let bestCategory: ChatCategory | null = null;
  let bestScore = 0;

  for (const category of CHAT_CATEGORIES) {
    const score = category.keywords.reduce(
      (acc, keyword) => (matchesKeyword(input, keyword) ? acc + 1 : acc),
      0
    );
    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  }

  return bestCategory;
}

export type BotReply = {
  text: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function getBotReply(userInput: string): BotReply {
  const category = matchQuestion(userInput);
  if (category) {
    return { text: category.response, ctaLabel: category.ctaLabel, ctaHref: category.ctaHref };
  }
  return { text: FALLBACK_RESPONSE };
}
