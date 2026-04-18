'use client'

import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'
import Navigation from '@/components/navigation'

export default function TrainingPage() {
  const courseFeatures = [
    'Expert instruction from certified artists',
    'Hands-on training with real equipment',
    'Safety and sterilization protocols',
    'Design theory and color theory',
    'Portfolio building assistance',
    'Career guidance and support',
  ]

  const courses = [
    {
      title: 'Beginner Tattoo Course',
      duration: '4 Weeks',
      sessions: '12 Sessions',
      price: '₹15,000',
      description: 'Learn the fundamentals of tattoo art, equipment handling, and basic techniques.',
      skills: ['Equipment setup', 'Safety protocols', 'Basic line work', 'Shading techniques'],
    },
    {
      title: 'Advanced Tattoo Course',
      duration: '6 Weeks',
      sessions: '18 Sessions',
      price: '₹25,000',
      description: 'Advanced techniques including color work, complex designs, and specialty styles.',
      skills: ['Color theory', 'Complex designs', 'Portrait techniques', 'Custom artwork'],
    },
    {
      title: 'Piercing Training Program',
      duration: '3 Weeks',
      sessions: '10 Sessions',
      price: '₹10,000',
      description: 'Complete professional piercing training with certification upon completion.',
      skills: ['Anatomy', 'Piercing techniques', 'Jewelry selection', 'Aftercare protocols'],
    },
  ]

  const curriculum = [
    { week: '1', focus: 'Safety & Sterilization', topics: ['Equipment, hygiene, health protocols'] },
    { week: '2', focus: 'Design Basics', topics: ['Line work, shading, composition'] },
    { week: '3', focus: 'Color Theory', topics: ['Color mixing, application, blending'] },
    { week: '4', focus: 'Advanced Techniques', topics: ['Complex designs, portraits, styles'] },
  ]

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation isScrolled={true} />

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-6xl sm:text-7xl font-black tracking-tight mb-6 text-white">
              TRAINING & CERTIFICATION
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Learn from industry experts and become a certified tattoo and piercing artist. Our comprehensive training programs combine theory and hands-on experience.
            </p>
          </div>

          {/* Course Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">WHY TRAIN WITH US?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courseFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-4 border border-border hover:border-accent transition-colors">
                  <Check size={24} className="text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Course Offerings */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">OUR COURSES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.map((course, idx) => (
                <div
                  key={idx}
                  className="border border-border hover:border-accent transition-all overflow-hidden group"
                >
                  <div className="bg-secondary p-6 border-b border-border">
                    <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.sessions}</span>
                    </div>
                    <div className="text-3xl font-bold text-accent">{course.price}</div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                    <div>
                      <p className="text-xs font-bold text-accent mb-2 tracking-widest">WHAT YOU&apos;LL LEARN</p>
                      <ul className="space-y-2">
                        {course.skills.map((skill, sidx) => (
                          <li key={sidx} className="text-sm flex items-center gap-2">
                            <Check size={16} className="text-accent flex-shrink-0" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum Preview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">SAMPLE CURRICULUM</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {curriculum.map((item, idx) => (
                <div key={idx} className="p-6 bg-secondary border border-border">
                  <div className="text-4xl font-black text-accent mb-2">Week {item.week}</div>
                  <h3 className="font-bold mb-3">{item.focus}</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {item.topics.map((topic, tidx) => (
                      <li key={tidx} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certification */}
          <div className="mb-16 p-8 bg-gradient-to-r from-black to-secondary border border-accent">
            <h2 className="text-2xl font-bold mb-4">PROFESSIONAL CERTIFICATION</h2>
            <p className="text-muted-foreground mb-6">
              Upon completing our training program, you receive an official Aquarius Tattoo Studio certification recognized by industry professionals. Gain credentials, portfolio pieces, and industry connections.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-black text-accent mb-2">100%</p>
                <p className="text-sm">Job Placement Support</p>
              </div>
              <div>
                <p className="text-3xl font-black text-accent mb-2">500+</p>
                <p className="text-sm">Alumni in Industry</p>
              </div>
              <div>
                <p className="text-3xl font-black text-accent mb-2">⭐⭐⭐⭐⭐</p>
                <p className="text-sm">Student Satisfaction</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-8 bg-gradient-to-r from-black to-secondary border border-accent">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Start Your Journey?</h3>
                <p className="text-muted-foreground">Enroll now and begin your professional training</p>
              </div>
              <Link
                href="/#contact"
                className="px-8 py-4 bg-accent text-black font-bold tracking-widest hover:shadow-2xl hover:shadow-accent/50 transition-all whitespace-nowrap"
              >
                ENROLL NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
