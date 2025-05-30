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
      },
      {
        question: "Which of the following is not a freedom provided under the Right to Freedom?",
        options: [
          { text: "Freedom of Expression", correct: false, feedback: "Incorrect. This is a fundamental freedom." },
          { text: "Freedom to Own a Car", correct: true, feedback: "Correct! Owning a car is not a protected fundamental freedom." },
          { text: "Freedom to Assemble Peacefully", correct: false, feedback: "Incorrect. The freedom to assemble is included." }
        ]
      },
      {
        question: "Are there any reasonable restrictions to these freedoms?",
        options: [
          { text: "No, they are absolute", correct: false, feedback: "Incorrect. There can be reasonable restrictions in the interest of public order, morality, etc." },
          { text: "Yes, for reasons like security of the state, morality, and public order", correct: true, feedback: "Correct! The Constitution allows for reasonable restrictions." }
        ]
      }
    ]
  },

  // NEW RIGHTS ADDED BELOW
  {
    id: 'against-exploitation',
    title: 'Right Against Exploitation',
    explanation: 'Prohibits human trafficking, forced labor, and employment of children below 14 years in hazardous jobs. Protects individuals from being exploited for labor or other purposes.',
    example: 'No child under 14 can be made to work in a factory or mine.',
    quiz: [
      {
        question: "Which of the following is prohibited under the Right Against Exploitation?",
        options: [
          { text: "Voluntary employment", correct: false, feedback: "Incorrect. Voluntary work is allowed." },
          { text: "Forced labor", correct: true, feedback: "Correct! Forced labor is strictly prohibited." },
          { text: "Starting your own business", correct: false, feedback: "Incorrect. Starting a business is not exploitation." }
        ]
      },
      {
        question: "Can children under 14 years of age work in dangerous jobs?",
        options: [
          { text: "Yes, if they want to", correct: false, feedback: "Incorrect. This is strictly prohibited." },
          { text: "No, it is not allowed", correct: true, feedback: "Correct! The law protects children from hazardous labor." }
        ]
      },
      {
        question: "Is human trafficking addressed by this right?",
        options: [
          { text: "Yes, it is banned", correct: true, feedback: "Correct! Human trafficking is expressly prohibited." },
          { text: "No, it is not mentioned", correct: false, feedback: "Incorrect. Human trafficking is a key focus of this right." }
        ]
      }
    ]
  },
  {
    id: 'religion',
    title: 'Right to Freedom of Religion',
    explanation: 'Grants individuals freedom to practice, profess, and propagate any religion of their choice, or no religion at all, subject to public order and morality.',
    example: 'Citizens can celebrate their own religious festivals, as long as it doesn’t disturb public order.',
    quiz: [
      {
        question: "Can a person be forced to follow a religion by the government?",
        options: [
          { text: "Yes, the state can impose religion", correct: false, feedback: "Incorrect. The state cannot force anyone to adopt a religion." },
          { text: "No, freedom of religion is a fundamental right", correct: true, feedback: "Correct! Religion is a matter of personal choice." }
        ]
      },
      {
        question: "Is propagation of your religion to others allowed?",
        options: [
          { text: "Yes, but without coercion", correct: true, feedback: "Correct! Propagation is permitted as long as it’s voluntary." },
          { text: "No, it’s forbidden", correct: false, feedback: "Incorrect. You may share your beliefs but not force others." }
        ]
      },
      {
        question: "Can freedom of religion be restricted?",
        options: [
          { text: "No, it’s absolute", correct: false, feedback: "Incorrect. Restrictions apply in the interest of public order, etc." },
          { text: "Yes, subject to public order and morality", correct: true, feedback: "Correct! The state can impose reasonable restrictions." }
        ]
      }
    ]
  },
  {
    id: 'cultural-educational',
    title: 'Cultural & Educational Rights',
    explanation: 'Protects the rights of minorities to conserve their culture and establish and administer their own educational institutions.',
    example: 'A linguistic minority can open a school that teaches in their mother tongue.',
    quiz: [
      {
        question: "What do cultural and educational rights primarily protect?",
        options: [
          { text: "Economic benefits", correct: false, feedback: "Incorrect. These rights concern culture and education." },
          { text: "Minority communities' culture and education", correct: true, feedback: "Correct! These rights protect cultural and educational interests of minorities." }
        ]
      },
      {
        question: "Can minorities set up their own educational institutions?",
        options: [
          { text: "Yes, they can", correct: true, feedback: "Correct! Minorities can establish institutions to preserve their culture." },
          { text: "No, only the government can", correct: false, feedback: "Incorrect. The Constitution grants this right to minorities." }
        ]
      },
      {
        question: "Is the state allowed to deny aid to minority educational institutions?",
        options: [
          { text: "No, not solely due to management by minorities", correct: true, feedback: "Correct! Aid cannot be denied just because an institution is managed by minorities." },
          { text: "Yes, the state has complete discretion", correct: false, feedback: "Incorrect. The Constitution protects minority institutions from such discrimination." }
        ]
      }
    ]
  },
  {
    id: 'constitutional-remedies',
    title: 'Right to Constitutional Remedies',
    explanation: 'Allows any citizen to approach the courts if they believe their fundamental rights have been violated. This right makes all other rights effective by enabling enforcement.',
    example: 'If denied entry to a public park due to religion, a citizen can file a case in court.',
    quiz: [
      {
        question: "What does the Right to Constitutional Remedies ensure?",
        options: [
          { text: "The right to ignore the law", correct: false, feedback: "Incorrect. It enables enforcement of rights, not exemption from law." },
          { text: "The right to move courts if rights are violated", correct: true, feedback: "Correct! Courts protect and restore your rights." }
        ]
      },
      {
        question: "Who can approach the Supreme Court for protection of fundamental rights?",
        options: [
          { text: "Only the government", correct: false, feedback: "Incorrect. All citizens have this right." },
          { text: "Any citizen of India", correct: true, feedback: "Correct! Every citizen can seek court help for their rights." }
        ]
      },
      {
        question: "What are 'writs' in the context of this right?",
        options: [
          { text: "Court orders issued to enforce rights", correct: true, feedback: "Correct! Writs are legal orders for the enforcement of rights." },
          { text: "Religious prayers", correct: false, feedback: "Incorrect. Writs are legal, not religious, instruments." }
        ]
      }
    ]
  }
];

// PUBLIC_INTERFACE
export default fundamentalRights;
