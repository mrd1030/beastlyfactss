// src/components/data/DifficultyLegend.jsx
import React from 'react';

export const DifficultyLegend = () => {
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-700">
        <thead className="bg-slate-50 dark:bg-slate-800">
          <tr>
            <th className="p-4 border-b font-semibold text-slate-700 dark:text-slate-200">Level</th>
            <th className="p-4 border-b font-semibold text-slate-700 dark:text-slate-200">Category</th>
            <th className="p-4 border-b font-semibold text-slate-700 dark:text-slate-200">Description</th>
          </tr>
        </thead>
        <tbody>
          {/* ... table rows ... */}
        </tbody>
      </table>
    </div>
  );
};
