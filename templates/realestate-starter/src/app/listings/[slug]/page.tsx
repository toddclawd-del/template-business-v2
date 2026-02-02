import { Metadata } from "next";
import { notFound } from "next/navigation";
import ListingDetailClient from "./ListingDetailClient";
import {
  properties,
  getPropertyBySlug,
  getAgentById,
} from "@/data/mockData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Property Not Found | Prestige Realty",
    };
  }

  return {
    title: `${property.title} | Prestige Realty`,
    description: property.description.slice(0, 160),
  };
}

export default async function ListingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const agent = getAgentById(property.agentId);

  return <ListingDetailClient property={property} agent={agent} />;
}
