import { Sparkles, X, Send } from "lucide-react";
import { useState } from "react";

export const AiChat = ({ isNavbarOpen }: { isNavbarOpen: boolean }) => {
    // const [input, setInput] = useState('');
    // const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    //   { role: 'ai', text: 'Hi! I am the AI Twin of Arman Ashraf. Ask me anything about my work!' }
    // ]);
    // const [loading, setLoading] = useState(false);
    // const [isMinimized, setIsMinimized] = useState(true);
  
    // const handleSend = async () => {
    //   if (!input.trim() || loading) return;
    //   const userText = input;
    //   setInput('');
    //   setMessages(prev => [...prev, { role: 'user', text: userText }]);
    //   setLoading(true);
  
    // //   const aiResponse = await askAiTwin(userText);
    //   const aiResponse = await fakefun()
    //   setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    //   setLoading(false);
    // };
  
    // if (isNavbarOpen) return null; // Hide when mobile menu is open to avoid overlap
  
    return (
      <>
      </>
    //   <div className={`fixed bottom-6 right-6 z-[90] transition-all duration-500 flex flex-col items-end ${isMinimized ? 'w-14 h-14' : 'w-[calc(100vw-3rem)] sm:w-96'}`}>
    //     {isMinimized ? (
    //       <button 
    //         onClick={() => setIsMinimized(false)}
    //         className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group animate-in fade-in zoom-in duration-300"
    //       >
    //         <Sparkles className="text-white w-6 h-6 group-hover:animate-pulse" />
    //       </button>
    //     ) : (
    //       <div className="bg-[#1e293b] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[450px] w-full max-w-full">
    //         <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700 shrink-0">
    //           <div className="flex items-center space-x-2">
    //             <Sparkles className="w-5 h-5 text-indigo-400" />
    //             <span className="font-semibold text-sm">Arman's AI Twin</span>
    //           </div>
    //           <button onClick={() => setIsMinimized(true)} className="text-slate-400 hover:text-white">
    //             <X className="w-5 h-5" />
    //           </button>
    //         </div>
  
    //         <div className="flex-1 overflow-y-auto p-4 space-y-4">
    //           {messages.map((m, i) => (
    //             <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
    //               <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-slate-700 text-slate-200 rounded-tl-none'}`}>
    //                 {m.text}
    //               </div>
    //             </div>
    //           ))}
    //           {loading && (
    //             <div className="flex justify-start">
    //               <div className="bg-slate-700 p-3 rounded-2xl rounded-tl-none animate-pulse text-xs text-slate-400">
    //                 Thinking...
    //               </div>
    //             </div>
    //           )}
    //         </div>
  
    //         <div className="p-4 border-t border-slate-700 flex space-x-2 shrink-0">
    //           <input 
    //             value={input}
    //             onChange={(e) => setInput(e.target.value)}
    //             onKeyDown={(e) => e.key === 'Enter' && handleSend()}
    //             placeholder="Ask Arman about projects..."
    //             className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
    //           />
    //           <button 
    //             onClick={handleSend}
    //             className="bg-indigo-600 p-2 rounded-lg hover:bg-indigo-700 transition-colors"
    //           >
    //             <Send className="w-5 h-5" />
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    );
  };

function fakefun() {
    return 'hi'
}
