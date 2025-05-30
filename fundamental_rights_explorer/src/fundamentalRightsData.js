//
// Static data model for Fundamental Rights and quizzes.
// Each right contains: id, title, explanation, example, and quiz (3-5 MCQs with feedback).
//

// PUBLIC_INTERFACE
const fundamentalRights = [
  {
    id: 'equality',
    title: 'Right to Equality',
    explanation: 'Ensures equal treatment before the law and prohibits discrimination based on religion, race, caste, sex, or place of birth.',
    example: 'A government job vacancy cannot exclude applicants based on their religion or caste.',
    quiz: [
      {
        question: "Which of the following is NOT protected by the Right to Equality?",
        options: [
          { text: "Equal access to public parks", correct: false, feedback: "Incorrect. Public facilities should be open to all." },
          { text: "Government discrimination based on gender", correct: false, feedback: "Incorrect. Discrimination based on gender is prohibited." },
          { text: "Special provisions for children", correct: true, feedback: "Correct! Special laws for children are allowed for their protection." }
        ]
      },
      {
        question: "Can the state discriminate in favor of socially and educationally backward classes?",
        options: [
          { text: "Yes, for affirmative action", correct: true, feedback: "Correct! Affirmative action is specifically permitted." },
          { text: "No, all are treated exactly the same", correct: false, feedback: "Incorrect. Positive discrimination is allowed for upliftment." }
        ]
      }
    ]
  },
  {
    id: 'freedom',
    title: 'Right to Freedom',
    explanation: 'Provides protection for individual freedoms, including speech, assembly, association, movement, and residence.',
    example: 'Citizens are free to move and reside in any part of India.',
    quiz: [
      {
        question: "Which right allows you to form a club with friends?",
        options: [
          { text: "Right to Property", correct: false, feedback: "Incorrect. This is not related to property." },
          { text: "Right to Freedom", correct: true, feedback: "Correct! Freedom of association is part of this right." }
        ]
      }
    ]
  }
  // Additional rights can be added here...
];

// PUBLIC_INTERFACE
export default fundamentalRights;
