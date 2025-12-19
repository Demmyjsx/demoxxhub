import { homeContent } from "@/constants/siteData";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Why Work With Us?
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeContent.whyUs.map((item, i) => (
            <div
              key={i}
              className="rounded-lg bg-white/10 p-6"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
