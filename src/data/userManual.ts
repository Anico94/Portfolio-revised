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
 *
 * TODO: this one is worth writing yourself — the placeholder copy is only here
 * to show the layout. Keep each entry to a paragraph plus two or three points.
 */
export const userManual: ManualEntry[] = [
  {
    title: 'How I communicate',
    icon: 'MessageSquare',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    points: [
      'Direct and early rather than polished and late',
      'Async by default, a call when a thread starts looping',
      'Written summaries after any decision that matters',
    ],
  },
  {
    title: 'How I work best',
    icon: 'Sparkles',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    points: [
      'A clear problem statement beats a detailed spec',
      'Long uninterrupted blocks for deep work',
      'Ship something small, then iterate on real feedback',
    ],
  },
  {
    title: 'My working rhythm',
    icon: 'Clock',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    points: [
      'Sharpest in the morning, meetings suit the afternoon',
      'I protect one no-meeting day a week',
      'Notifications off while heads-down — I will come back to you',
    ],
  },
  {
    title: 'How to give me feedback',
    icon: 'MessagesSquare',
    body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    points: [
      'Say it plainly, I would rather hear it than guess it',
      'Specific examples land better than general impressions',
      'Nothing is too small to raise — early is cheaper than late',
    ],
  },
  {
    title: 'What I need from you',
    icon: 'HandHeart',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    points: [
      'Context on why something matters, not only what to build',
      'A named decision-maker when priorities collide',
      'Room to ask questions before committing to an estimate',
    ],
  },
  {
    title: 'Where I struggle',
    icon: 'TriangleAlert',
    body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
    points: [
      'Ambiguous ownership — I will keep asking until it is clear',
      'Context-switching across several projects in a day',
      'I over-polish; hold me to the deadline and I will cut scope',
    ],
  },
]
