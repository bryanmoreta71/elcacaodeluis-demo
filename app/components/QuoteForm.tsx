"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-black/10 bg-white p-10 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#B2802B]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FBF7F1" strokeWidth="3">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#2B1B12]">Request received</h3>
        <p className="mt-2 text-sm text-[#5B4A3F]">
          Our export team will review your requirements and respond within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4 rounded-2xl border border-black/10 bg-white p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#5B4A3F]">
            Company name
          </label>
          <input
            required
            type="text"
            placeholder="Your company"
            className="w-full rounded-lg border border-black/10 bg-[#FBF7F1] px-4 py-2.5 text-[#2B1B12] placeholder:text-[#9C8A7C] focus:border-[#B2802B] focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#5B4A3F]">
            Country
          </label>
          <input
            required
            type="text"
            placeholder="Country of operation"
            className="w-full rounded-lg border border-black/10 bg-[#FBF7F1] px-4 py-2.5 text-[#2B1B12] placeholder:text-[#9C8A7C] focus:border-[#B2802B] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#5B4A3F]">
          Work email
        </label>
        <input
          required
          type="email"
          placeholder="you@company.com"
          className="w-full rounded-lg border border-black/10 bg-[#FBF7F1] px-4 py-2.5 text-[#2B1B12] placeholder:text-[#9C8A7C] focus:border-[#B2802B] focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#5B4A3F]">
            Product of interest
          </label>
          <select className="w-full rounded-lg border border-black/10 bg-[#FBF7F1] px-4 py-2.5 text-[#2B1B12] focus:border-[#B2802B] focus:outline-none">
            <option>Cacao Beans</option>
            <option>Cacao Powder</option>
            <option>Cacao Butter</option>
            <option>Cacao Liquor / Mass</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#5B4A3F]">
            Estimated monthly volume
          </label>
          <input
            type="text"
            placeholder="e.g. 50 metric tons"
            className="w-full rounded-lg border border-black/10 bg-[#FBF7F1] px-4 py-2.5 text-[#2B1B12] placeholder:text-[#9C8A7C] focus:border-[#B2802B] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#5B4A3F]">
          Requirements
        </label>
        <textarea
          required
          rows={4}
          placeholder="Tell us about your sourcing needs, certifications required, delivery timeline..."
          className="w-full rounded-lg border border-black/10 bg-[#FBF7F1] px-4 py-2.5 text-[#2B1B12] placeholder:text-[#9C8A7C] focus:border-[#B2802B] focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-[#5B3A29] px-6 py-3 text-sm font-bold text-[#FBF7F1] transition-colors hover:bg-[#2B1B12]"
      >
        Submit Request for Quote
      </button>
    </form>
  );
}
