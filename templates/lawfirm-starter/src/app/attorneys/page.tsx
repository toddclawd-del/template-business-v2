"use client";

import PageHero from "@/components/PageHero";
import AttorneyCard from "@/components/AttorneyCard";
import { attorneys } from "@/data/mockData";

export default function AttorneysPage() {
  return (
    <>
      <PageHero
        title="Our Attorneys"
        subtitle="Meet the experienced legal professionals dedicated to fighting for your rights"
        breadcrumbs={[{ label: "Attorneys", href: "/attorneys" }]}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attorneys.map((attorney, index) => (
              <AttorneyCard
                key={attorney.id}
                attorney={attorney}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
