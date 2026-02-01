'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TeamMember } from '@/lib/data'

interface TeamCardProps {
  member: TeamMember
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="text-center p-6"
    >
      {/* Photo */}
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary-100 shadow-lg relative">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
          sizes="128px"
        />
      </div>

      {/* Info */}
      <h3 className="font-bold text-lg text-dark-900">{member.name}</h3>
      <p className="text-primary-600 font-medium text-sm mb-2">{member.role}</p>
      <p className="text-gray-500 text-sm">{member.experience}</p>
    </motion.div>
  )
}
