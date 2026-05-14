import { motion } from "framer-motion";
import { Terminal, Database, LineChart, Code2, Code, Briefcase, Mail } from "lucide-react";
import posts from "./data/posts.json";
import { cn } from "./lib/utils";

const Sidebar = () => (
  <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-8 p-6 border-b md:border-b-0 md:border-r border-white/10 bg-background/50 backdrop-blur-xl sticky top-0 md:h-screen">
    <div>
      <h1 className="text-2xl font-bold font-mono text-phosphor phosphor-glow tracking-tighter">
        EMILIO<span className="text-white/40">.SYS</span>
      </h1>
      <p className="text-xs font-mono text-white/50 mt-2">v2.0 // CULT_UI_EDITION</p>
    </div>

    <nav className="flex flex-col gap-4 font-mono text-sm">
      <div className="flex flex-col gap-2">
        <h2 className="text-gold mb-2 flex items-center gap-2">
          <Terminal size={14} /> NAVIGATION
        </h2>
        {['HOME', 'PROJECTS', 'DASHBOARDS', 'ETL PIPELINES', 'RESUME.TXT'].map((item) => (
          <a key={item} href="#" className="text-white/70 hover:text-phosphor transition-colors flex items-center gap-2 group">
            <span className="opacity-0 group-hover:opacity-100 text-phosphor transition-opacity">{'>'}</span> {item}
          </a>
        ))}
      </div>
    </nav>

    <div className="mt-auto flex flex-col gap-4">
      <h2 className="text-gold font-mono text-sm flex items-center gap-2">
        <Database size={14} /> CONNECT
      </h2>
      <div className="flex gap-4">
        <a href="#" className="text-white/50 hover:text-white transition-colors"><Code size={18} /></a>
        <a href="#" className="text-white/50 hover:text-[#0077b5] transition-colors"><Briefcase size={18} /></a>
        <a href="#" className="text-white/50 hover:text-white transition-colors"><Mail size={18} /></a>
      </div>
    </div>
  </aside>
);

const Hero = () => (
  <section className="py-20 flex flex-col gap-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-block px-3 py-1 mb-6 rounded-full bg-phosphor/10 border border-phosphor/20 text-phosphor font-mono text-xs">
        System Online
      </div>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
        JUAN EMILIO MORILLO
      </h2>
      <h3 className="text-xl md:text-2xl text-gold font-mono mb-6">
        DATA ANALYST & BI DEVELOPER
      </h3>
      <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
        Extracting signals from the noise. Welcome to my digital archive. Specialized in advanced SQL, Python automation, and brutalist dashboard design.
      </p>
    </motion.div>
  </section>
);

const PostCard = ({ post, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-phosphor/50 transition-all cursor-pointer overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-phosphor/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs text-white/40">{post.date}</span>
        <LineChart size={16} className="text-white/20 group-hover:text-phosphor transition-colors" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-phosphor transition-colors">
        {post.title}
      </h3>
      
      <p className="text-sm text-white/60 mb-6 line-clamp-2">
        {post.summary}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/70 group-hover:border-phosphor/30 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.03)_0,transparent_100%)]" />
        <div className="scanlines" />
      </div>

      <Sidebar />

      <main className="flex-1 px-6 md:px-12 lg:px-24 overflow-y-auto z-10">
        <div className="max-w-4xl mx-auto pb-24">
          <Hero />
          
          <section className="mt-12">
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="text-gold" />
              <h3 className="text-xl font-mono text-white font-bold tracking-tight">
                {'>_ SYSTEM.LOGS'}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
