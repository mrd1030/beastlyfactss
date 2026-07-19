import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { facts } from '@/lib/data/facts';
import { imagePathFor } from '@/lib/data/factImages';
import { useFavoritesCtx, ACHIEVEMENTS } from '@/lib/FavoritesContext';
import FactCard from '@/components/shared/FactCard';
import FactModal from '@/components/shared/FactModal';
import ImageLightbox from '@/components/shared/ImageLightbox';
import ClearPackDialog from '@/components/layout/ClearPackDialog';


export default function Pack() {
  const { favorites } = useFavoritesCtx();
  const [selectedFact, setSelectedFact] = useState(null);
  const [imageFact, setImageFact] = useState(null);
  const { savedQuizResults, removeQuizResult, unlockedAchievements, streak } = useFavoritesCtx();
  const savedFacts = facts.filter(f => favorites.includes(f.id));
  const [confirmingId, setConfirmingId] = useState(null);

  return (
    <div className="min-h-screen pt-12 px-4 sm:px-6 pb-16">
      <Helmet>
        <title>My Beast Pack | Beastly Facts</title>
        <meta name="description" content="Your personal collection of saved animal facts and quiz results on Beastly Facts. Heart any fact to save it here." />
        <link rel="canonical" href="https://beastlyfacts.com/pack/" />
        <meta name="robots" content="noindex,follow" />
        <meta property="og:title" content="My Beast Pack | Beastly Facts" />
        <meta property="og:description" content="Your personal collection of saved animal facts and quiz results on Beastly Facts." />
        <meta property="og:url" content="https://beastlyfacts.com/pack/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="My Beast Pack | Beastly Facts" />
        <meta name="twitter:description" content="Your personal collection of saved animal facts and quiz results on Beastly Facts." />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-3xl mb-2 block">❤️</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
            My Beast Pack
          </h1>
          <p className="text-sm text-muted-foreground font-body max-w-lg">
            Your personal collection of favorite facts! Tap the heart on any fact to save it here. 🐾
          </p>
        </motion.div>

        {/* Achievements */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-xl text-foreground">🏆 Achievements</h2>
            {streak >= 2 && (
              <span className="text-xs font-display font-bold text-secondary bg-secondary/10 px-3 py-1.5 rounded-full">
                🔥 {streak}-day streak
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {ACHIEVEMENTS.map(a => {
              const unlocked = unlockedAchievements.some(u => u.id === a.id);
              return (
                <div
                  key={a.id}
                  title={a.description}
                  className={`text-center rounded-2xl p-3 border transition-all ${
                    unlocked
                      ? 'bg-secondary/5 border-secondary/30'
                      : 'bg-muted/40 border-border opacity-40 grayscale'
                  }`}
                >
                  <span className="text-2xl block mb-1">{a.emoji}</span>
                  <p className="text-[11px] font-display font-bold text-foreground leading-tight">{a.title}</p>
                </div>
              );
            })}
          </div>
        </div>

{/* Saved Quiz Results */}
{savedQuizResults.length > 0 && (
  <div className="mt-10 mb-8">
    <h2 className="font-display font-bold text-xl text-foreground mb-4">🧩 Saved Quiz Results</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {savedQuizResults.map((qr) => {
        const handleShareQuiz = () => {
          const text = `${qr.emoji} I got ${qr.title} on BeastlyFacts!\n\n${qr.description}\n\nFind out your result at ${window.location.origin}/quiz`;
          
          if (navigator.share) {
            navigator.share({
              title: qr.title,
              text: text,
            });
          } else {
            navigator.clipboard.writeText(text);
            // Optional: you can add a small toast here later if you want
          }
        };

        return (
          <div key={qr.id} className="bg-card border border-border rounded-2xl p-5 relative">
            {/* Remove button */}
            {/* Remove button with confirmation */}
{/* Remove Button + Styled Confirmation */}
<div className="absolute top-3 right-3">
  {!confirmingId || confirmingId !== qr.id ? (
    <button 
      onClick={() => setConfirmingId(qr.id)}
      className="w-6 h-6 flex items-center justify-center rounded-full text-red-400 hover:text-red-500 hover:bg-red-500/10 transition-colors text-lg leading-none"
      title="Remove from Pack"
    >
      ×
    </button>
  ) : (
    // === Styled Confirmation Popup ===
    <div className="bg-zinc-900 border border-red-500/30 rounded-lg p-3 shadow-xl text-sm w-[210px]">
      <p className="text-red-400 text-xs mb-2">Remove this result from your Pack?</p>
      
      <div className="flex gap-2">
        <button
          onClick={() => {
            removeQuizResult(qr.id);
            setConfirmingId(null);
          }}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1.5 rounded-md transition-colors"
        >
          Yes, Remove
        </button>
        
        <button
          onClick={() => setConfirmingId(null)}
          className="flex-1 bg-zinc-700 hover:bg-zinc-600 text-white text-xs font-bold py-1.5 rounded-md transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  )}
</div>

            <span className="text-4xl block mb-2">{qr.emoji}</span>
            <h3 className="font-display font-bold text-lg pr-6">{qr.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{qr.description}</p>

            <div className="flex items-center gap-2 mt-4">
              {/* Share Button */}
              <button
                onClick={handleShareQuiz}
                className="flex items-center gap-1.5 text-xs font-display font-bold px-3 py-1.5 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" /> Share
              </button>

              <span className="text-[10px] text-muted-foreground">
                Saved {new Date(qr.savedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
)}
        {savedFacts.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {savedFacts.map((fact, i) => (
              <FactCard key={fact.id} fact={fact} index={i} onOpen={setSelectedFact} onOpenImage={setImageFact} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <motion.span
              className="text-6xl block mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              💔
            </motion.span>
            <h2 className="font-display font-bold text-xl text-foreground mb-2">
              Your pack is empty!
            </h2>
            <p className="text-sm text-muted-foreground font-body mb-6 max-w-sm mx-auto">
              Go explore some facts and tap the ❤️ to start building your collection!
            </p>
            <Link to="/facts/">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-secondary text-secondary-foreground font-display font-bold text-sm py-3 px-6 rounded-xl inline-flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Browse Facts
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>

      <FactModal fact={selectedFact} onClose={() => setSelectedFact(null)} onOpenImage={setImageFact} />
      <ImageLightbox fact={imageFact} imagePath={imagePathFor(imageFact)} onClose={() => setImageFact(null)} />

      {/* Pack management section */}
      <div className="mt-16 pt-8 border-t border-border max-w-7xl mx-auto">
        <h2 className="font-display font-bold text-base text-foreground mb-1">Pack Management</h2>
        <p className="text-xs text-muted-foreground font-body mb-4">Manage your Beast Pack collection.</p>
        <ClearPackDialog />
      </div>
    </div>
  );
}