type QuizAnswerType = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: "True" | "False";
  incorrect_answers: ["True" | "False"];
};

async function getQuizQuestions() {
  const url =
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(await resp.text());
  }

  const data: QuizAnswerType = await resp.json();
  return data;
}
const quizAPI = { getQuizQuestions }
export default quizAPI;
