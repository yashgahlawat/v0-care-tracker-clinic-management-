export function MetricStripBanner() {
  const metrics = [
    { label: "10k+ Doctors", value: "10k+" },
    { label: "2M+ Patients", value: "2M+" },
    { label: "99.9% Uptime", value: "99.9%" },
    { label: "24/7 Support", value: "24/7" },
  ];

  return (
    <section className="bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center group cursor-default transition-transform duration-300 hover:scale-110"
            >
              <div className="text-white text-2xl md:text-3xl font-bold mb-1 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                {metric.value}
              </div>
              <div className="text-slate-400 text-sm md:text-base">
                {metric.label.split(" ")[1] || metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
