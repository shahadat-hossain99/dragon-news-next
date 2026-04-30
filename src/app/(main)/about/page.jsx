import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Awlad Hossain",
    role: "Editor in Chief",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "20+ years of journalism experience.",
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    role: "Senior Reporter",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    bio: "Award-winning journalist.",
  },
  {
    id: 3,
    name: "Karim Hassan",
    role: "Sports Editor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    bio: "10+ years in sports reporting.",
  },
  {
    id: 4,
    name: "Nadia Islam",
    role: "International Correspondent",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    bio: "Covers global affairs.",
  },
];

const stats = [
  { value: "15+", label: "Years of Service" },
  { value: "50M+", label: "Monthly Readers" },
  { value: "120+", label: "Journalists" },
  { value: "80+", label: "Countries Covered" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className=" py-12 md:py-20 text-center px-4">
        <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-2">
          About Us
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black font-serif text-gray-900">
          The Dragon News
        </h1>

        <p className="text-gray-500 text-sm sm:text-base max-w-md md:max-w-xl mx-auto mt-3">
          Journalism Without Fear or Favour — delivering truth to millions of
          readers worldwide.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* ─── STATS ─── */}
        <section className="grid grid-cols-2 md:grid-cols-4 border-b  border-t border-gray-200">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="py-10 text-center border-r border-gray-200 last:border-r-0"
            >
              <p className="text-4xl font-black text-red-600">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* STORY */}
        <section className="py-12 md:py-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center border-b">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-serif mb-4">
              15 Years of Fearless Journalism
            </h2>

            <p className="text-gray-600 text-sm md:text-base mb-3">
              Founded in 2009, The Dragon News began with a mission — to report
              the truth without compromise.
            </p>

            <p className="text-gray-600 text-sm md:text-base">
              Today, we are one of the most trusted news sources in the region.
            </p>
          </div>

          {/* QUOTE */}
          <div className="bg-gray-50 border p-6 md:p-8 relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-600"></div>

            <blockquote className="text-lg md:text-xl font-bold font-serif leading-snug">
              “Our only obligation is to the truth.”
            </blockquote>

            <p className="text-gray-500 text-xs md:text-sm mt-3">
              — Editor in Chief
            </p>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-black font-serif text-center mb-8 md:mb-10">
            Our Team
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-3">
                  <Image
                    src={member.image}
                    fill
                    sizes="(max-width: 768px) 80px, 96px"
                    alt={member.name}
                    className="rounded-full object-cover border-2 border-gray-200 group-hover:border-red-500 transition"
                  />
                </div>

                <h3 className="font-bold text-gray-900 text-sm">
                  {member.name}
                </h3>

                <p className="text-red-600 text-xs">{member.role}</p>

                {/* MOBILE FIX: always visible */}
                <p className="text-gray-400 text-xs mt-1 leading-tight">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 text-center border-t">
          <h2 className="text-2xl md:text-3xl font-black font-serif mb-3">
            Have a Story Tip?
          </h2>

          <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
            Share information securely with our team.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="btn bg-red-600 text-white hover:bg-red-700 w-full sm:w-auto">
              Send a Tip
            </button>

            <button className="btn btn-outline w-full sm:w-auto">
              Contact
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
