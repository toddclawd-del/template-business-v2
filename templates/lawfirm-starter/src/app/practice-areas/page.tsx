"use client";

import PageHero from "@/components/PageHero";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import { practiceAreas } from "@/data/mockData";

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        title="Practice Areas"
        subtitle="Comprehensive legal services led by experienced specialists in each field"
        breadcrumbs={[{ label: "Practice Areas", href: "/practice-areas" }]}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <PracticeAreaCard key={area.id} area={area} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
