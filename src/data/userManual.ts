export interface ManualEntry {
  title: string
  /** Lucide icon name, resolved in UserManual.tsx. */
  icon:
    | 'MessageSquare'
    | 'Sparkles'
    | 'Clock'
    | 'MessagesSquare'
    | 'HandHeart'
    | 'TriangleAlert'
  body: string
  /** Short, scannable points under the paragraph. */
  points: string[]
}

/**
 * The "how to work with me" section.
 */
export const userManual: ManualEntry[] = [
  {
    title: 'How I communicate',
    icon: 'MessageSquare',
    body: "I'd rather you cut to the chase than send a message with no context. One of my most underrated skills is turning something complex and technical into plain English.",
    points: [
      'Cut to the chase, no context-free "hi" messages',
      'I ask a lot of questions upfront so you know I understand, rather than going quiet and getting lost',
      'In group settings I sometimes sit back and listen first, collecting my thoughts before contributing',
    ],
  },
  {
    title: 'How I work best',
    icon: 'Sparkles',
    body: "Give me the why behind the work and I'll run with it — I'm not happy just working through a ticket without understanding the bigger picture.",
    points: [
      'Give me the why behind the work, not just the ticket',
      'Analytical and logical — I like decisions backed by reasoning',
      'I’m a visual learner — diagrams, images, and annotated screenshots land far better than a wall of text',
    ],
  },
  {
    title: 'My working rhythm',
    icon: 'Clock',
    body: "Mornings are when I do my best work, and I protect my lunch — it's how I reset for the rest of the day.",
    points: [
      'Sharpest in the mornings or late in the afternoon',
      'Meetings work best just before or just after lunch',
      'I protect my lunch — it’s how I reset for the rest of the day',
    ],
  },
  {
    title: 'How to give me feedback',
    icon: 'MessagesSquare',
    body: "Say it plainly — feedback is the best way for me to learn and develop, so I'd rather hear it than guess it.",
    points: [
      'Say it plainly, I’d rather hear it than guess it',
      "It's the best way for me to develop as a leader, developer, and person",
      'Mistakes are fine as long as we learn and put systems in place to avoid them next time',
    ],
  },
  {
    title: 'What I need from you',
    icon: 'HandHeart',
    body: "A high-trust environment where we can disagree constructively and land on the outcome that's best for the team.",
    points: [
      'A high-trust environment where disagreement leads somewhere constructive',
      "Credit where credit's due — always",
      'I put team success before my own, and like coaching people up along the way',
    ],
  },
  {
    title: 'Where I struggle',
    icon: 'TriangleAlert',
    body: "I can border on perfectionism — chasing more confidence in an answer than the decision actually needs.",
    points: [
      'Can over-analyze past the point a decision actually needs — pull me up if you see it happening',
      'I can doubt my own ability and hold back from putting myself forward — a nudge helps',
    ],
  },
]
