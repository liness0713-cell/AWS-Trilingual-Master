
import { useState } from 'react';
import { BookOpen, CheckCircle, ChevronLeft, ChevronRight, Layers, ToggleLeft, ToggleRight, Brain, GraduationCap, PlayCircle, Home, Volume2 } from 'lucide-react';
import { AWS_EXAMS, EXAM_STRUCTURES } from './constants';
import { ExamDefinition, StudySection, QuizQuestion, TrilingualText } from './types';
import * as GeminiService from './services/geminiService';
import TrilingualBlock from './components/TrilingualBlock';

const LoadingSpinner = ({ text }: { text: string }) => (
  <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mb-4"></div>
    <p className="text-gray-500 animate-pulse">{text}</p>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white py-8 border-t border-slate-800 text-center mt-auto">
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

type ViewState = 'HOME' | 'DASHBOARD' | 'STUDY' | 'QUIZ';

function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [selectedExam, setSelectedExam] = useState<ExamDefinition | null>(null);
  const [activeDomain, setActiveDomain] = useState<StudySection | null>(null);

  // Content State
  const [showFurigana, setShowFurigana] = useState(true);
  const [activeTopicContent, setActiveTopicContent] = useState<TrilingualText | null>(null);
  const [isLoadingContent, setIsLoadingContent] = useState(false);

  // Quiz State
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[] | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [isLoadingQuiz, setIsLoadingQuiz] = useState(false);

  // --- Handlers ---

  const goHome = () => {
    setCurrentView('HOME');
    setSelectedExam(null);
    setActiveDomain(null);
    setQuizQuestions(null);
    setActiveTopicContent(null);
  };

  const handleSelectExam = (exam: ExamDefinition) => {
    setSelectedExam(exam);
    setCurrentView('DASHBOARD');
  };

  const handleStudyTopic = async (domain: StudySection, topicTitle: string) => {
    setActiveDomain(domain);
    setCurrentView('STUDY');
    setActiveTopicContent(null);
    
    if (selectedExam) {
      setIsLoadingContent(true);
      try {
        // Use English name for API prompt to ensure stability
        const content = await GeminiService.generateTopicContent(selectedExam.name.en, topicTitle);
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
    setCurrentView('QUIZ');
    setQuizQuestions(null);
    setAnswers([]);
    setIsQuizSubmitted(false);
    setCurrentQuestionIndex(0);

    if (selectedExam) {
      setIsLoadingQuiz(true);
      try {
        const domainName = isFullMock ? "All Domains (Full Mock)" : domain.title.en;
        const count = isFullMock ? 10 : 5;
        // Use English name for API prompt
        const questions = await GeminiService.generateQuiz(selectedExam.name.en, domainName, count);
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

  // --- TTS Helpers ---
  const cleanTextForSpeech = (htmlOrText: string) => {
    const noRuby = htmlOrText.replace(/<rt>.*?<\/rt>/g, '');
    return noRuby.replace(/<[^>]*>/g, '');
  };

  const handleSpeak = (text: string, lang: string) => {
    window.speechSynthesis.cancel();
    const textToSpeak = cleanTextForSpeech(text);
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = lang; 
    utterance.rate = 1.0; 
    window.speechSynthesis.speak(utterance);
  };

  // --- Views ---

  const renderHeader = (title: string | TrilingualText, subtitle?: string, showBackToDashboard: boolean = false) => (
    <header className="bg-white sticky top-0 z-20 shadow-sm border-b border-gray-200 px-4 py-3">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 flex-1 overflow-hidden mr-2">
          {showBackToDashboard ? (
            <button 
              onClick={() => setCurrentView('DASHBOARD')}
              className="p-2 -ml-2 text-gray-600 hover:text-orange-600 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              <ChevronLeft size={24} />
            </button>
          ) : (
             currentView !== 'HOME' && (
              <button 
                onClick={goHome}
                className="p-2 -ml-2 text-gray-600 hover:text-orange-600 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
              >
                <Home size={22} />
              </button>
             )
          )}
          
          <div className="flex flex-col overflow-hidden w-full">
            {typeof title === 'string' ? (
              <h1 className="text-lg font-bold text-gray-900 truncate max-w-[200px] sm:max-w-md">{title}</h1>
            ) : (
              <TrilingualBlock 
                content={title} 
                showFurigana={showFurigana} 
                variant="title" 
                className=""
              />
            )}
            {subtitle && <p className="text-xs text-gray-500 truncate hidden sm:block mt-1">{subtitle}</p>}
          </div>
        </div>
        
        <button 
          onClick={() => setShowFurigana(!showFurigana)}
          className="flex-shrink-0 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200 active:scale-95 transition-transform"
        >
          {showFurigana ? <ToggleRight className="text-orange-600 w-5 h-5" /> : <ToggleLeft className="text-gray-400 w-5 h-5" />}
          <span className="hidden xs:inline">Furigana</span>
        </button>
      </div>
    </header>
  );

  const renderHome = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-slate-900 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <Layers className="text-orange-500" /> AWS Trilingual
          </h1>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full p-4 sm:p-6">
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8">
           <p className="text-orange-800 text-sm">
             Select an exam below to browse comprehensive chapters. Study materials and quizzes are generated by AI.
           </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AWS_EXAMS.map((exam) => (
            <div 
              key={exam.id} 
              onClick={() => handleSelectExam(exam)}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-orange-300 cursor-pointer transition-all active:scale-[0.98]"
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
              <div className="mb-2">
                 <TrilingualBlock 
                    content={exam.name} 
                    showFurigana={showFurigana} 
                    variant="title" 
                  />
              </div>
              <p className="text-gray-600 text-sm line-clamp-2 mt-2 pt-2 border-t border-gray-100">{exam.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );

  const renderDashboard = () => {
    const examCode = selectedExam?.code || 'DEFAULT';
    const domains = EXAM_STRUCTURES[examCode] || EXAM_STRUCTURES['DEFAULT'];

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {renderHeader(selectedExam?.name || "Exam Dashboard", selectedExam?.code)}
        
        <main className="flex-1 max-w-3xl mx-auto w-full p-4 space-y-6">
          {/* Full Mock Exam Card */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 shadow-lg text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/10 rounded-full">
                <Brain className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Full Mock Exam</h3>
                <p className="text-slate-300 text-sm">Comprehensive test across all domains</p>
              </div>
            </div>
            <button 
              onClick={() => handleStartQuiz(domains[0], true)}
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              Start Mock Exam <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex items-center gap-2 mt-8 mb-4">
            <BookOpen className="text-orange-600" size={20} />
            <h2 className="text-lg font-bold text-gray-800">Exam Domains & Topics</h2>
          </div>

          {/* Domain List */}
          <div className="space-y-4">
            {domains.map((domain, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-5 border-b border-gray-100 bg-gray-50/50">
                  <div className="flex justify-between items-start gap-4 mb-2">
                     <div className="flex-1">
                        <TrilingualBlock content={domain.title} showFurigana={showFurigana} variant="title" />
                     </div>
                     <span className="text-xs font-bold bg-orange-100 text-orange-800 px-2 py-1 rounded shrink-0">
                       {domain.weight}
                     </span>
                  </div>
                  <button 
                    onClick={() => handleStartQuiz(domain)}
                    className="w-full mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-orange-700 bg-orange-50 hover:bg-orange-100 py-2 rounded-lg border border-orange-200 transition-colors"
                  >
                    <PlayCircle size={16} /> Take Domain Quiz
                  </button>
                </div>
                
                <div className="p-4 bg-white">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-3">Study Topics</p>
                  <ul className="space-y-3">
                    {domain.topics.map((topic, tIdx) => (
                      <li key={tIdx}>
                        <button
                          onClick={() => handleStudyTopic(domain, topic.title.en)}
                          className="w-full text-left flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
                        >
                          <GraduationCap className="w-5 h-5 text-gray-300 group-hover:text-orange-500 mt-1 shrink-0" />
                          <div className="flex-1">
                             <TrilingualBlock content={topic.title} showFurigana={showFurigana} variant="body" />
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-400 mt-2" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  const renderStudy = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {renderHeader("Study Mode", activeDomain?.title.en, true)}
      
      <main className="flex-1 max-w-3xl mx-auto w-full p-4 sm:p-6">
        {isLoadingContent ? (
          <LoadingSpinner text="AI is generating your study guide..." />
        ) : activeTopicContent ? (
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-orange-50/50 p-6 border-b border-gray-100">
               <div className="flex justify-between items-start mb-2">
                 <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Topic Overview</span>
                 <button 
                   onClick={() => handleSpeak(activeTopicContent.en, 'en-US')}
                   className="text-orange-400 hover:text-orange-600 p-1 rounded-full hover:bg-orange-100 transition-colors"
                   title="Read English"
                 >
                   <Volume2 size={20} />
                 </button>
               </div>
               <div 
                 className="text-lg text-gray-900 leading-relaxed prose prose-orange max-w-none"
                 dangerouslySetInnerHTML={{ __html: activeTopicContent.en }} 
               />
            </div>
            
            <div className="p-6 sm:p-8 space-y-8">
              {/* Chinese Section */}
              <div>
                <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
                   <h3 className="text-sm font-semibold text-gray-400 uppercase">Chinese</h3>
                   <button 
                     onClick={() => handleSpeak(activeTopicContent.zh, 'zh-CN')}
                     className="text-gray-400 hover:text-orange-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                     title="Read Chinese"
                   >
                     <Volume2 size={16} />
                   </button>
                </div>
                <div 
                  className="text-lg text-slate-700 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100 prose prose-slate max-w-none"
                  dangerouslySetInnerHTML={{ __html: activeTopicContent.zh }}
                />
              </div>

              {/* Japanese Section */}
              <div>
                <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
                   <h3 className="text-sm font-semibold text-gray-400 uppercase">Japanese</h3>
                   <button 
                     onClick={() => handleSpeak(activeTopicContent.ja, 'ja-JP')}
                     className="text-gray-400 hover:text-orange-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                     title="Read Japanese"
                   >
                     <Volume2 size={16} />
                   </button>
                </div>
                <div 
                   className={`text-lg text-slate-700 leading-9 bg-gray-50 p-4 rounded-lg border border-gray-100 prose prose-slate max-w-none ${!showFurigana ? 'furigana-hidden' : ''}`}
                   dangerouslySetInnerHTML={{ __html: activeTopicContent.ja }}
                />
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 border-t border-gray-200 flex justify-center">
              <button 
                onClick={() => setCurrentView('DASHBOARD')}
                className="text-gray-600 hover:text-orange-600 font-medium text-sm flex items-center gap-1"
              >
                Done Reading <CheckCircle size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">Failed to load content.</div>
        )}
      </main>
    </div>
  );

  const renderQuiz = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col">
       {renderHeader("Quiz Mode", activeDomain?.title.en || "Mock Exam", true)}
       
       {/* Added significantly more bottom padding (pb-40) to prevent footer overlap */}
       <main className="flex-1 max-w-2xl mx-auto w-full p-4 sm:p-6 pb-40">
         {isLoadingQuiz ? (
           <LoadingSpinner text="AI is crafting challenging questions..." />
         ) : quizQuestions ? (
           <>
             {/* Progress Info */}
             <div className="flex justify-between items-end mb-4 px-1">
                <div>
                   <span className="text-3xl font-bold text-slate-800">
                     {currentQuestionIndex + 1}
                   </span>
                   <span className="text-gray-400 text-lg"> / {quizQuestions.length}</span>
                </div>
                {isQuizSubmitted && (
                  <div className="text-right">
                    <span className="text-sm text-gray-500 block">Score</span>
                    <span className="text-xl font-bold text-orange-600">{calculateScore()} pts</span>
                  </div>
                )}
             </div>

             <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div 
                  className="bg-orange-500 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                ></div>
             </div>

             {/* Question Card */}
             <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden mb-6">
                <div className="p-6 border-b border-gray-100 bg-slate-50">
                   <TrilingualBlock 
                      content={quizQuestions[currentQuestionIndex].question} 
                      showFurigana={showFurigana}
                      variant="title"
                   />
                </div>

                <div className="p-4 sm:p-6 space-y-3">
                  {quizQuestions[currentQuestionIndex].options.map((option, idx) => {
                    const isSelected = answers[currentQuestionIndex] === idx;
                    const isCorrect = quizQuestions[currentQuestionIndex].correctAnswerIndex === idx;
                    
                    let styleClass = "w-full text-left p-4 rounded-xl border-2 transition-all relative overflow-hidden ";
                    
                    if (isQuizSubmitted) {
                      if (isCorrect) styleClass += "border-green-500 bg-green-50 ring-1 ring-green-500";
                      else if (isSelected && !isCorrect) styleClass += "border-red-500 bg-red-50";
                      else styleClass += "border-gray-100 opacity-50 grayscale";
                    } else {
                      if (isSelected) styleClass += "border-orange-500 bg-orange-50 shadow-md transform scale-[1.01]";
                      else styleClass += "border-gray-200 hover:border-orange-200 hover:bg-gray-50";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSelect(idx)}
                        disabled={isQuizSubmitted}
                        className={styleClass}
                      >
                         <div className="flex items-start gap-3 relative z-10">
                           <div className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                             isSelected 
                               ? isQuizSubmitted && !isCorrect ? 'border-red-500 bg-red-500 text-white' : 'border-orange-500 bg-orange-500 text-white'
                               : isQuizSubmitted && isCorrect ? 'border-green-500 bg-green-500 text-white' : 'border-gray-300'
                           }`}>
                             {isQuizSubmitted && isCorrect ? <CheckCircle size={14} /> : isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                           </div>
                           <TrilingualBlock content={option} showFurigana={showFurigana} className="flex-1" />
                         </div>
                      </button>
                    );
                  })}
                </div>
             </div>

             {/* Explanation */}
             {isQuizSubmitted && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-24 animate-fade-in">
                   <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                     <CheckCircle size={20}/> Explanation
                   </h4>
                   <TrilingualBlock 
                     content={quizQuestions[currentQuestionIndex].explanation} 
                     showFurigana={showFurigana} 
                   />
                </div>
             )}
           </>
         ) : (
           <div className="text-center py-12 text-gray-500">Failed to load quiz.</div>
         )}
       </main>

       {/* Floating Bottom Bar for Quiz Controls */}
       {quizQuestions && (
         <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-30">
            <div className="max-w-2xl mx-auto flex justify-between gap-4">
              <button
                onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                disabled={currentQuestionIndex === 0}
                className="flex-1 py-3 text-gray-600 font-bold rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-30"
              >
                Previous
              </button>

              {!isQuizSubmitted ? (
                 currentQuestionIndex === quizQuestions.length - 1 ? (
                   <button
                     onClick={() => setIsQuizSubmitted(true)}
                     disabled={answers[currentQuestionIndex] === -1} // Require answer to submit? Optional.
                     className="flex-[2] py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 shadow-lg shadow-green-200 disabled:opacity-50 disabled:shadow-none"
                   >
                     Submit Exam
                   </button>
                 ) : (
                  <button
                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                    className="flex-[2] py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 shadow-lg shadow-orange-200 flex items-center justify-center gap-2"
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
                       setCurrentView('DASHBOARD');
                    }
                  }}
                  className="flex-[2] py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-900 flex items-center justify-center gap-2"
                >
                   {currentQuestionIndex < quizQuestions.length - 1 ? "Next Question" : "Finish Review"} <ChevronRight size={18} />
                </button>
              )}
            </div>
         </div>
       )}
    </div>
  );

  return (
    <>
      {currentView === 'HOME' && renderHome()}
      {currentView === 'DASHBOARD' && renderDashboard()}
      {currentView === 'STUDY' && renderStudy()}
      {currentView === 'QUIZ' && renderQuiz()}
    </>
  );
}

export default App;
