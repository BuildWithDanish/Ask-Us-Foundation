import React from "react";
import { useParams } from "react-router-dom";
import { wingsData } from "../data/wingsData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WingsDetail = () => {
  const { title } = useParams();

  const wing = wingsData.find(
    (item) =>
      item.title.toLowerCase() ===
      decodeURIComponent(title).toLowerCase()
  );

  if (!wing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800">
          Wing Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className={`${wing.heroBg}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 rounded-full mt-6 bg-white/20 backdrop-blur text-white text-sm font-medium mb-6">
              ASKUS Foundation Wing
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] mb-8">
              {wing.title}
            </h1>

            <p className="text-white/90 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
              {wing.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      {wing.story && (
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div
              className="
              prose
              prose-lg
              lg:prose-xl
              max-w-none

              prose-headings:font-black
              prose-headings:text-gray-900
              prose-headings:tracking-tight

              prose-h1:text-5xl
              prose-h2:text-4xl
              prose-h3:text-3xl

              prose-p:text-gray-600
              prose-p:leading-8
              prose-p:text-lg

              prose-li:text-gray-600
              prose-li:text-lg

              prose-strong:text-gray-900
              prose-strong:font-bold

              prose-blockquote:border-l-4
              prose-blockquote:border-pink-500
              prose-blockquote:bg-pink-50
              prose-blockquote:px-6
              prose-blockquote:py-2
              prose-blockquote:rounded-r-xl
              prose-blockquote:text-gray-800

              prose-a:text-pink-600
              prose-a:no-underline
              hover:prose-a:text-pink-700
              "
              dangerouslySetInnerHTML={{
                __html: wing.story,
              }}
            />
          </div>
        </section>
      )}

      {/* Project Gallery */}
      {wing.project && (
        <section>
          <div className="max-w-7xl mx-auto px-6">

            <div
              className={
                wing.project.item.length === 1
                  ? "flex justify-center"
                  : "grid grid-cols-1 md:grid-cols-2 gap-8"
              }
            >
              {wing.project.item.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${wing.project.item.length === 1
                    ? "max-w-4xl w-full"
                    : ""
                    }`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.loc}
                      loading="lazy"
                      className="w-full h-[280px] md:h-[450px] object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Location */}
                  <div className="p-5 text-center">
                    <p className="text-lg md:text-xl font-semibold text-gray-800">
                      {item.loc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* Story 2 */}
      {wing.story2 && (
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div
              className="
              prose
              prose-lg
              lg:prose-xl
              max-w-none

              prose-headings:font-black
              prose-headings:text-gray-900
              prose-headings:tracking-tight

              prose-h1:text-5xl
              prose-h2:text-4xl
              prose-h3:text-3xl

              prose-p:text-gray-600
              prose-p:leading-8
              prose-p:text-lg

              prose-li:text-gray-600
              prose-li:text-lg

              prose-strong:text-gray-900
              prose-strong:font-bold

              prose-blockquote:border-l-4
              prose-blockquote:border-pink-500
              prose-blockquote:bg-pink-50
              prose-blockquote:px-6
              prose-blockquote:py-2
              prose-blockquote:rounded-r-xl
              prose-blockquote:text-gray-800

              prose-a:text-pink-600
              prose-a:no-underline
              hover:prose-a:text-pink-700
              "
              dangerouslySetInnerHTML={{
                __html: wing.story2,
              }}
            />
          </div>
        </section>
      )}

      {/* Team Section */}
      {wing.team?.length > 0 && (
        <>
          <section className="bg-gradient-to-b from-white to-gray-50 py-16">
            <div className="max-w-4xl mx-auto text-center px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {wing.teamTitle || "Our Team"}
              </h2>

              <div className="w-24 h-1 bg-pink-500 mx-auto mb-8 rounded-full" />

              {wing.teamDescription && (
                <p className="text-lg text-gray-600 leading-relaxed">
                  {wing.teamDescription}
                </p>
              )}
            </div>
          </section>

          <section className="bg-gray-50 pb-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {wing.team.map((member, index) => (
                <div
                  key={index}
                  className="
                    group
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    shadow-lg
                    hover:shadow-2xl
                    transition-all
                    duration-300
                  "
                >
                  {member.image && (
                    <div className="overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="
                          w-full
                          h-72
                          md:h-80
                          object-cover
                          transition
                          duration-700
                          group-hover:scale-105
                        "
                      />
                    </div>
                  )}

                  <div className="p-6 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {member.name}
                    </h3>

                    <p className="mt-2 text-pink-600 font-semibold">
                      {member.role}
                    </p>

                    {member.location && (
                      <p className="text-gray-500 mt-2">
                        📍 {member.location}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
};

export default WingsDetail;