import { homeContent } from "@/constants/siteData";

export default function Stats() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 text-center">
        {homeContent.stats.map((stat, i) => (
          <div key={i}>
            <p className="text-4xl font-bold text-blue-600">
              {stat.value}
            </p>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
