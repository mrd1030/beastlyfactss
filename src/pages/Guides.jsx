import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Check } from 'lucide-react';
import { guides } from '@/lib/data/guides';
import GuideCard from '@/components/shared/GuideCard';

const petTypes = ['All', 'Reptile', 'Small Mammal', 'Bird'];
const difficulties = ['All', 'Beginner', 'Intermediate'];

const tabLabels = { housing: '🏠 Housing', diet: '🥗 Diet', enrichment: '🎮 Enrichment', health: '💊 Health' };

export default function Guides() {
  const params = new URLSearchParams(window.location.search);
  const initialGuideId = params.get('id');

  const [petFilter, setPetFilter] = useState('All');
  const [diffFilter, setDiffFilter] = useState('All');
  const [selectedGuide, setSelectedGuide] = useState(
    initialGuideId ? guides.find(g => g.id === initialGuideId) : null
  );
  const [activeTab, setActiveTab] = useState('housing');

  const filtered = useMemo(() => {
    return guides.filter(g => {
      const matchesPet = petFilter === 'All' || g.petType === petFilter;
      const matchesDiff = diffFilter === 'All' || g.difficulty === diffFilter;
      return matchesPet && matchesDiff;
    });
  }, [petFilter, diffFilter]);

  const handlePrint = () => {
    if (!selectedGuide) return;
    const printContent = selectedGuide.sections.checklist.map((item, i) => `☐ ${item}`).join('\n');
    const w = window.open('', '_blank');
    w.document.write(`<pre style="font-family:sans-serif;font-size:14px;line-height:2;">
${selectedGuide.emoji} ${selectedGuide.name} Care Checklist\n${'='.repeat(40)}\n\n${printContent}
    </pre>`);
    w.document.close();
    w.print();
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-accent/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block">📖</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
              Pet Care Guides
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-lg">
              Everything you need to give your critter the happiest, healthiest life! 🌟
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div>
              <label className="text-xs font-display font-bold text-muted-foreground block mb-1.5">Pet Type</label>
              <div className="flex gap-2">
                {petTypes.map(pt => (
                  <button
                    key={pt}
                    onClick={() => setPetFilter(pt)}
                    className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
                      petFilter === pt
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {pt}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-display font-bold text-muted-foreground block mb-1.5">Difficulty</label>
              <div className="flex gap-2">
                {difficulties.map(d => (
                  <button
                    key={d}
                    onClick={() => setDiffFilter(d)}
                    className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
                      diffFilter === d
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((guide, i) => (
            <div key={guide.id} onClick={() => { setSelectedGuide(guide); setActiveTab('housing'); }}>
              <GuideCard guide={guide} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* Guide Modal */}
      <AnimatePresence>
        {selectedGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-foreground/40 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedGuide(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-card rounded-3xl max-w-2xl w-full shadow-2xl border border-border mb-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-border flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{selectedGuide.emoji}</span>
                  <div>
                    <h2 className="font-display font-bold text-xl text-foreground">{selectedGuide.name}</h2>
                    <p className="text-xs text-muted-foreground font-body">{selectedGuide.petType} • {selectedGuide.difficulty}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={handlePrint} className="p-2 rounded-full hover:bg-muted transition-colors" title="Print checklist">
                    <Printer className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button onClick={() => setSelectedGuide(null)} className="p-2 rounded-full hover:bg-muted transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Fun Fact */}
              <div className="px-6 py-3 bg-secondary/5 border-b border-border">
                <p className="text-xs font-body text-secondary">
                  <strong>🤓 Fun Fact:</strong> {selectedGuide.funFact}
                </p>
              </div>

              {/* Tabs */}
              <div className="px-6 pt-4 flex gap-1 overflow-x-auto">
                {Object.entries(tabLabels).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-3 py-2 rounded-xl text-xs font-display font-semibold whitespace-nowrap transition-all ${
                      activeTab === key
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-muted-foreground font-body leading-relaxed"
                  >
                    {selectedGuide.sections[activeTab]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Checklist */}
              <div className="px-6 pb-6">
                <h3 className="font-display font-bold text-sm mb-3 flex items-center gap-2">
                  ✅ Care Checklist
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedGuide.sections.checklist.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground font-body bg-muted/50 rounded-lg p-2">
                      <Check className="w-3.5 h-3.5 text-teal mt-0.5 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}