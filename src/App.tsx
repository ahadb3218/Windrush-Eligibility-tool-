import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QuizQuestion } from './components/QuizQuestion';
import { AdminLogin } from './components/AdminLogin';
import { AdminPanel } from './components/AdminPanel';
import { ResultDisplay } from './components/results/ResultDisplay';
import { TopNav } from './components/layout/TopNav';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Contracts } from './pages/Contracts';
import { Support } from './pages/Support';
import { useQuizStore } from './store/quizStore';
import { UserResponse } from './types';

function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState('1');
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const { questions, results } = useQuizStore();

  const currentQuestion = questions.find(q => q.id === currentQuestionId);
  const isComplete = currentQuestionId.startsWith('result');
  const result = results.find(r => r.id === currentQuestionId);

  const handleAnswer = (answer: string) => {
    if (!currentQuestion?.nextQuestion) return;

    const newResponse = {
      questionId: currentQuestion.id,
      answer,
    };
    setResponses([...responses, newResponse]);

    const nextQuestionId = currentQuestion.nextQuestion[answer];
    setCurrentQuestionId(nextQuestionId);
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  const handleRestart = () => {
    setCurrentQuestionId('1');
    setResponses([]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col">
        <TopNav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contracts" element={<Contracts />} />
            <Route path="/support" element={<Support />} />
            <Route
              path="/admin"
              element={
                isAdmin ? (
                  <AdminPanel onLogout={handleLogout} />
                ) : (
                  <AdminLogin onLogin={(success) => setIsAdmin(success)} />
                )
              }
            />
            <Route
              path="/quiz"
              element={
                <div className="max-w-4xl mx-auto p-6">
                  <div className="bg-gray-900 p-8 rounded-lg shadow-md text-gray-300">
                    {!isComplete && currentQuestion ? (
                      <QuizQuestion
                        question={currentQuestion}
                        onAnswer={handleAnswer}
                      />
                    ) : result ? (
                      <ResultDisplay
                        result={result}
                        responses={responses}
                        onRestart={handleRestart}
                        questions={questions}
                      />
                    ) : null}
                  </div>
                </div>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;