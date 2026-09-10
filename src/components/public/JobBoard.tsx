'use client';

import { useMemo, useState } from 'react';
import { MOCK_JOBS, JOB_CATEGORIES } from '@/lib/jobs';

export default function JobBoard() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter((job) => {
      if (category && job.category !== category) return false;
      if (keyword && !job.title.toLowerCase().includes(keyword.toLowerCase())) return false;
      return true;
    });
  }, [keyword, category]);

  const resetFilters = () => {
    setKeyword('');
    setCategory('');
  };

  const inputClasses = 'rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900';

  return (
    <div>
      <div className="flex flex-wrap gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Keyword"
          className={`${inputClasses} flex-1`}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={inputClasses}
        >
          <option value="">Select Category</option>
          {JOB_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={resetFilters}
          className="rounded-md bg-brand-red px-4 py-2 text-sm font-semibold text-white hover:bg-brand-red/90"
        >
          Reset
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-500">{filteredJobs.length} openings</p>

      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        {filteredJobs.map((job) => {
          const isExpanded = expandedId === job.id;
          return (
            <div key={job.id} className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-bold text-blue-800">{job.title}</h3>
              <p className="mt-1 text-xs font-semibold uppercase text-gray-500">{job.category}</p>
              <p className="mt-2 text-xs text-gray-500">Posted: {job.postedDate}</p>
              <p className="mt-3 text-sm text-gray-700">
                <span className="font-semibold">Work Location:</span> {job.workLocation}
              </p>
              <p className="mt-1 text-sm text-gray-700">
                <span className="font-semibold">Job Description:</span>{' '}
                {isExpanded ? job.fullDescription : job.summary}
              </p>
              <button
                type="button"
                onClick={() => setExpandedId(isExpanded ? null : job.id)}
                className="mt-4 rounded-md bg-blue-800 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900"
              >
                {isExpanded ? 'Hide Details' : 'View Details'}
              </button>
              {isExpanded && (
                <a
                  href="#apply"
                  className="ml-3 inline-block text-sm font-medium text-brand-green hover:underline"
                >
                  Apply for this position →
                </a>
              )}
            </div>
          );
        })}
        {filteredJobs.length === 0 && (
          <p className="col-span-2 py-8 text-center text-sm text-gray-500">
            No openings match those filters.
          </p>
        )}
      </div>
    </div>
  );
}
