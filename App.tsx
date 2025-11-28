import { useState } from 'react';
import { BookOpen, CheckCircle, ChevronLeft, ChevronRight, Layers, Layout, ToggleLeft, ToggleRight, Brain } from 'lucide-react';
import { AWS_EXAMS } from './constants';
import { ExamDefinition, StudySection, QuizQuestion, TrilingualText } from './types';
import * as GeminiService from './services/geminiService';
import TrilingualBlock from './components/TrilingualBlock';

// --- Sub-components defined here for simplicity in single-file structure request, but organized logically ---

const LoadingSpinner = ({ text }: { text: string }) => (
  <div className="flex flex-col items-center justify-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mb-4"></div>
    <p className="text-gray-500 animate-pulse">{text}</p>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white py-6 border-t border-slate-800 text-center">
    <div className="max-w-6xl mx-auto px-4">
      <p className="text-sm text-slate-400 mb-2">
        Start your AWS journey with AI-powered trilingual support.
      </p>
      <div className="text-sm font-medium">
        <span className="text-slate-500 mr-2">Friendly Link:</span>
        <a 
          href="https://my-portfolio-beige-five-56.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-orange-400 hover:text-orange-300 hover:underline transition-colors"
        >
          千葉２狗 🐶
        </a>
      </div>
    </div>
  </footer>
);

function App() {
  // Global State
  const [showFurigana, setShowFurigana] = useState(true);
  const [selectedExam, setSelectedExam] = useState<ExamDefinition | null>(null);
  
  // Content State
  const [outline, setOutline] = useState<StudySection[] | null>(null);
  const [isLoadingOutline, setIsLoadingOutline] = useState(false);
  
  // Study Mode State
  const [activeDomain, setActiveDomain] = useState<StudySection | null>(null);
  const [activeTopicContent, setActiveTopicContent] = useState<TrilingualText | null>(null);
  const [isLoadingContent, setIsLoadingContent] = useState(false);

  // Quiz Mode State
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[] | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]); // User's selected index per question
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [isLoadingQuiz, setIsLoadingQuiz] = useState(false);

  // --- Handlers ---

  const handleSelectExam = async (exam: ExamDefinition) => {
    setSelectedExam(exam);
    setOutline(null);
    setActiveDomain(null);
    setQuizQuestions(null);
    
    // Fetch Outline
    setIsLoadingOutline(true);
    try {
      const data = await GeminiService.generateExamOutline(exam.name);
      setOutline(data);
    } catch (error) {
      console.error("Failed to load outline", error);
      alert("Failed to generate outline. Please try again later.");
      setSelectedExam(null);
    } finally {
      setIsLoadingOutline(false);
    }
  };

  const handleStudyTopic = async (domain: StudySection, topicTitle: string) => {
    setActiveDomain(domain);
    setQuizQuestions(null); // Clear quiz mode
    setActiveTopicContent(null);
    
    if (selectedExam) {
      setIsLoadingContent(true);
      try {
        const content = await GeminiService.generateTopicContent(selectedExam.name, topicTitle);
        setActiveTopicContent(content);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingContent(false);
      }
    }
  };

  const handleStartQuiz = async (domain: StudySection, isFullMock: boolean = false) => {
    setActiveDomain(domain);
    setActiveTopicContent(null); // Clear study mode
    setQuizQuestions(null);
    setAnswers([]);
    setIsQuizSubmitted(false);
    setCurrentQuestionIndex(0);

    if (selectedExam) {
      setIsLoadingQuiz(true);
      try {
        const domainName = isFullMock ? "All Domains (Full Mock)" : domain.title.en;
        const count = isFullMock ? 10 : 5;
        const questions = await GeminiService.generateQuiz(selectedExam.name, domainName, count);
        setQuizQuestions(questions);
        setAnswers(new Array(questions.length).fill(-1));
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingQuiz(false);
      }
    }
  };

  const handleAnswerSelect = (optionIndex: number) => {
    if (isQuizSubmitted) return;
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    if (!quizQuestions) return 0;
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswerIndex) score++;
    });
    return score;
  };

  // --- Render Helpers ---

  // 1. Dashboard / Exam List View
  if (!selectedExam) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-slate-900 text-white p-6 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Layers className="text-orange-500" /> AWS Trilingual Master
            </h1>
          </div>
        </header>

        <main className="flex-1 max-w-6xl mx-auto w-full p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Select an Exam to Start</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AWS_EXAMS.map((exam) => (
              <div 
                key={exam.id} 
                onClick={() => handleSelectExam(exam)}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-orange-300 cursor-pointer transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    exam.level === 'Foundational' ? 'bg-green-100 text-green-700' :
                    exam.level === 'Associate' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {exam.level}
                  </span>
                  <span className="text-gray-400 text-sm font-mono">{exam.code}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 mb-2">{exam.name}</h3>
                <p className="text-gray-600 text-sm">{exam.description}</p>
              </div>
            ))}
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  // 2. Main Exam Interface
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col h-screen overflow-hidden">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={() => setSelectedExam(null)} className="text-gray-500 hover:text-orange-600">
            <ChevronLeft size={24} />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">{selectedExam.name}</h1>
            <p className="text-xs text-gray-500">Trilingual Prep Mode</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
           {/* Furigana Toggle */}
           <button 
            onClick={() => setShowFurigana(!showFurigana)}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200"
          >
            {showFurigana ? <ToggleRight className="text-orange-600" /> : <ToggleLeft className="text-gray-400" />}
            <span>あ/ア (Furigana)</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar: Syllabus / Navigation */}
        <aside className="w-80 bg-white border-r border-gray-200 overflow-y-auto shrink-0 flex flex-col">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2">
              <BookOpen size={18} /> Syllabus
            </h3>
          </div>
          
          {isLoadingOutline ? (
            <LoadingSpinner text="Generating Outline..." />
          ) : (
            <div className="p-4 space-y-6 pb-20">
              {/* Full Mock Test Button */}
              <button 
                 onClick={() => handleStartQuiz(outline![0], true)} // Passing first domain just to satisfy types, logical flag handles full mock
                 className="w-full bg-slate-800 hover:bg-slate-900 text-white p-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Brain size={18} />
                <span>Full Mock Exam (Comprehensive)</span>
              </button>

              {outline?.map((section, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <div className="flex justify-between items-start gap-2 border-b border-orange-100 pb-1 mb-2">
                    <div className="font-medium text-orange-700">
                      <TrilingualBlock content={section.title} showFurigana={showFurigana} variant="title" />
                    </div>
                    {section.weight && (
                       <span className="shrink-0 text-xs font-bold bg-orange-200 text-orange-800 px-2 py-1 rounded-md" title="Exam Weightage">
                         {section.weight}
                       </span>
                    )}
                  </div>
                  
                  {/* Section Actions */}
                  <div className="flex gap-2 mb-3">
                     <button 
                       onClick={() => handleStartQuiz(section)}
                       className="text-xs flex-1 bg-orange-50 text-orange-700 border border-orange-200 py-1 px-2 rounded hover:bg-orange-100"
                     >
                       Take Section Quiz
                     </button>
                  </div>

                  {/* Topics List */}
                  <ul className="space-y-1 ml-2 border-l-2 border-gray-100 pl-3">
                    {section.topics.map((topic, tIdx) => (
                      <li key={tIdx}>
                        <button 
                          onClick={() => handleStudyTopic(section, topic.title.en)}
                          className="text-left w-full text-sm text-gray-600 hover:text-orange-600 hover:bg-gray-50 p-1.5 rounded transition-colors"
                        >
                           <TrilingualBlock content={topic.title} showFurigana={showFurigana} variant="body" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-h-0 bg-slate-50">
          <div className="flex-1 overflow-y-auto p-8">
            {/* Empty State */}
            {!activeDomain && !quizQuestions && !isLoadingQuiz && !isLoadingContent && (
               <div className="h-full flex flex-col items-center justify-center text-gray-400">
                 <Layout size={64} className="mb-4 text-gray-300" />
                 <p className="text-lg">Select a topic to study or a domain to quiz.</p>
               </div>
            )}

            {/* Study Mode */}
            {activeTopicContent && !quizQuestions && (
              <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Study Topic</span>
                  <h2 className="text-3xl font-bold text-gray-900 mt-2">{activeDomain?.title.en}</h2>
                </div>
                
                <div className="prose prose-slate max-w-none">
                  <div className="bg-orange-50 border border-orange-100 rounded-lg p-6">
                    <TrilingualBlock 
                      content={activeTopicContent} 
                      showFurigana={showFurigana} 
                      className="text-lg"
                    />
                  </div>
                </div>
              </div>
            )}

            {isLoadingContent && <div className="h-full flex items-center justify-center"><LoadingSpinner text="Generating Study Material..." /></div>}
            
            {isLoadingQuiz && <div className="h-full flex items-center justify-center"><LoadingSpinner text="Generating Questions..." /></div>}

            {/* Quiz Mode */}
            {quizQuestions && (
              <div className="max-w-3xl mx-auto">
                {/* Quiz Header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                     {isQuizSubmitted ? `Result: ${calculateScore()} / ${quizQuestions.length}` : `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`}
                  </h2>
                  <div className="text-sm text-gray-500">
                    {activeDomain?.title.en || "Full Mock"}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
                  <div 
                    className="bg-orange-500 h-2.5 rounded-full transition-all duration-300" 
                    style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>

                {/* Question Card */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 mb-6">
                  <div className="mb-8">
                     <TrilingualBlock 
                       content={quizQuestions[currentQuestionIndex].question} 
                       showFurigana={showFurigana}
                       variant="title"
                       className="mb-4"
                     />
                  </div>

                  <div className="space-y-3">
                    {quizQuestions[currentQuestionIndex].options.map((option, idx) => {
                      const isSelected = answers[currentQuestionIndex] === idx;
                      const isCorrect = quizQuestions[currentQuestionIndex].correctAnswerIndex === idx;
                      
                      let cardClass = "w-full text-left p-4 rounded-lg border-2 transition-all ";
                      
                      if (isQuizSubmitted) {
                        if (isCorrect) cardClass += "border-green-500 bg-green-50";
                        else if (isSelected && !isCorrect) cardClass += "border-red-500 bg-red-50";
                        else cardClass += "border-gray-200 opacity-60";
                      } else {
                        if (isSelected) cardClass += "border-orange-500 bg-orange-50";
                        else cardClass += "border-gray-200 hover:border-orange-300 hover:bg-gray-50";
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(idx)}
                          disabled={isQuizSubmitted}
                          className={cardClass}
                        >
                           <div className="flex items-start gap-3">
                             <div className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                               isSelected ? 'border-orange-600 bg-orange-600 text-white' : 'border-gray-400'
                             }`}>
                               {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                             </div>
                             <TrilingualBlock content={option} showFurigana={showFurigana} />
                           </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Explanation (Only after submit) */}
                {isQuizSubmitted && (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                     <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                       <CheckCircle size={20}/> Explanation
                     </h4>
                     <TrilingualBlock 
                       content={quizQuestions[currentQuestionIndex].explanation} 
                       showFurigana={showFurigana} 
                     />
                  </div>
                )}

                {/* Controls */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                    disabled={currentQuestionIndex === 0}
                    className="px-4 py-2 text-gray-600 font-medium hover:text-orange-600 disabled:opacity-30 disabled:hover:text-gray-600"
                  >
                    Previous
                  </button>

                  {!isQuizSubmitted ? (
                     currentQuestionIndex === quizQuestions.length - 1 ? (
                       <button
                         onClick={() => setIsQuizSubmitted(true)}
                         className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 shadow-lg shadow-green-200"
                       >
                         Submit Exam
                       </button>
                     ) : (
                      <button
                        onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                        className="px-6 py-2 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 shadow-lg shadow-orange-200 flex items-center gap-2"
                      >
                        Next <ChevronRight size={18} />
                      </button>
                     )
                  ) : (
                    <button
                      onClick={() => {
                        if (currentQuestionIndex < quizQuestions.length - 1) {
                          setCurrentQuestionIndex(currentQuestionIndex + 1);
                        } else {
                           // Finish Review
                           setQuizQuestions(null);
                           setActiveDomain(null);
                        }
                      }}
                      className="px-6 py-2 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-900 flex items-center gap-2"
                    >
                       {currentQuestionIndex < quizQuestions.length - 1 ? "Next Question" : "Finish Review"} <ChevronRight size={18} />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;