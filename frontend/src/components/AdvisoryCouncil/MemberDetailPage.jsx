import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Award, BookOpen, User, ArrowLeft } from "lucide-react";

const MemberDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");

  if (!state?.member) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-center">
          <p className="text-xl font-semibold mb-4 text-justify">
            No member details available.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-6 py-3 bg-amber-500 text-black rounded-lg font-bold shadow-lg transition hover:bg-amber-400"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const { member } = state;

  return (
    <main className="min-h-screen bg-[#f5f7f5] text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:min-h-[80vh] mb-10">
        {/* Sidebar */}
        <aside className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-amber-500 mb-6"
          />
          <h1 className="text-3xl font-bold text-amber-600">{member.name}</h1>
          <h2 className="text-lg font-medium text-gray-600">{member.role}</h2>
          {member.subtitle && (
            <p className="mt-2 text-sm text-gray-500 italic text-justify">{member.subtitle}</p>
          )}
          {member.country && (
            <p className="mt-4 text-xl font-bold text-amber-600 bg-amber-50 px-4 py-1 rounded-full border border-amber-200 shadow-sm text-justify">
              🌍 {member.country}
            </p>
          )}
        </aside>

        {/* Main Content */}
        <section className="lg:col-span-2 bg-white rounded-2xl shadow-xl flex flex-col h-auto lg:h-[80vh]">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 lg:gap-6 border-b px-4 lg:px-8 py-4">
            <button
              onClick={() => setActiveTab("about")}
              className={`flex items-center gap-2 font-semibold ${activeTab === "about"
                ? "text-amber-600 border-b-2 border-amber-600 pb-1"
                : "text-gray-500 hover:text-amber-600"
                }`}
            >
              <User className="w-5 h-5" /> About
            </button>
            <button
              onClick={() => setActiveTab("contributions")}
              className={`flex items-center gap-2 font-semibold ${activeTab === "contributions"
                ? "text-amber-600 border-b-2 border-amber-600 pb-1"
                : "text-gray-500 hover:text-amber-600"
                }`}
            >
              <BookOpen className="w-5 h-5" /> Contributions
            </button>
            <button
              onClick={() => setActiveTab("achievements")}
              className={`flex items-center gap-2 font-semibold ${activeTab === "achievements"
                ? "text-amber-600 border-b-2 border-amber-600 pb-1"
                : "text-gray-500 hover:text-amber-600"
                }`}
            >
              <Award className="w-5 h-5" /> Achievements
            </button>
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className={`flex items-center gap-2 font-semibold text-gray-500 hover:text-amber-600 ml-auto`}
            >
              <ArrowLeft className="w-5 h-5" /> Back
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 lg:px-8 py-6">
            {activeTab === "about" && (
              <div>
                <h3 className="text-2xl font-bold text-amber-600 mb-4">
                  About
                </h3>
                <p className="leading-relaxed whitespace-pre-wrap text-justify tracking-wide">
                  {member.bio}
                </p>
              </div>
            )}

            {activeTab === "contributions" && member.contributions && (
              <div>
                <h3 className="text-2xl font-bold text-amber-600 mb-4">
                  Key Contributions
                </h3>
                {Array.isArray(member.contributions) ? (
                  <ul className="list-disc list-outside pl-5 space-y-2 text-justify tracking-wide">
                    {member.contributions.map((contribution, idx) => (
                      <li key={idx} className="text-gray-700">
                        {contribution}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="leading-relaxed whitespace-pre-wrap text-justify tracking-wide">
                    {member.contributions}
                  </p>
                )}
              </div>
            )}

            {activeTab === "achievements" && member.achievements && (
              <div>
                <h3 className="text-2xl font-bold text-amber-600 mb-4">
                  Achievements
                </h3>
                <ul className="list-disc list-outside pl-5 space-y-2 text-justify tracking-wide">
                  {member.achievements.map((ach, idx) => (
                    <li key={idx} className="text-gray-700">
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MemberDetailPage;
