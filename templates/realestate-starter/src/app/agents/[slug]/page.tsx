import { Metadata } from "next";
import { notFound } from "next/navigation";
import AgentDetailClient from "./AgentDetailClient";
import { agents, getAgentBySlug, getPropertiesByAgent } from "@/data/mockData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return agents.map((agent) => ({
    slug: agent.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    return {
      title: "Agent Not Found | Prestige Realty",
    };
  }

  return {
    title: `${agent.name} | Prestige Realty`,
    description: agent.bio.slice(0, 160),
  };
}

export default async function AgentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    notFound();
  }

  const agentProperties = getPropertiesByAgent(agent.id);

  return <AgentDetailClient agent={agent} properties={agentProperties} />;
}
