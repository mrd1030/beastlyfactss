// src/components/data/DifficultyLegend.jsx
import React from 'react';

const DifficultyLegend = () => {
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
          <tr className="border-b dark:border-slate-700">
            <td className="p-4 font-bold text-sky-600">1</td>
            <td className="p-4 font-medium">Self-Sufficient</td>
            <td className="p-4 text-slate-600 dark:text-slate-400">Minimal interaction; steady environment; perfect for casual observation.</td>
          </tr>
          <tr className="border-b dark:border-slate-700">
            <td className="p-4 font-bold text-emerald-600">2</td>
            <td className="p-4 font-medium">Beginner</td>
            <td className="p-4 text-slate-600 dark:text-slate-400">Standard daily care; forgiving, well-documented species for new owners.</td>
          </tr>
          <tr className="border-b dark:border-slate-700">
            <td className="p-4 font-bold text-amber-600">3</td>
            <td className="p-4 font-medium">Intermediate</td>
            <td className="p-4 text-slate-600 dark:text-slate-400">Requires specific husbandry knowledge, diet precision, or environment monitoring.</td>
          </tr>
          <tr>
            <td className="p-4 font-bold text-red-600">4</td>
            <td className="p-4 font-medium">Advanced</td>
            <td className="p-4 text-slate-600 dark:text-slate-400">High commitment, specialized expertise, and strict environmental control.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );