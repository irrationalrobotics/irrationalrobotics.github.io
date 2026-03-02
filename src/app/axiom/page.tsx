'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Award, Users, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const team = [
  { name: 'Kevin Ye', roles: 'Team Lead & Driver & Fabrication', bio: 'Hello! I am a sophomore and this will be my 4th consecutive year in VEX Robotics and with the new skills I learned in FIRST FTC, I hope that we can make this season a great one!', image: '/axiom/kevin.jpg' },
  { name: 'Abhirama Sonny', roles: 'Programming', bio: 'My name is Abhirama Sonny. I am a 16-year-old high school student with 6 years of competitive robotics experience (4 years VEX, 2 years FTC). I am on FTC team 7172 Technical Difficulties and hope to bring what I’ve learnt on that team to this team. I am a programmer on the team, and I want to develop a highly ranked autonomous this season', image: '/axiom/abhirama.png' },
  { name: 'Shyam Devanathan', roles: 'Programming & Design', bio: 'Hi! This is my 4th year and 5th season of robotics. I’ve been competing/active in V5RC for the past 3 years and in FTC the past 2 years. Though I started robotics as a builder, I began to diversify and am now more skilled in programming and notebooking as well. I hope to further grow in these skills and as an engineer this season!', image: '/axiom/shyam.jpg' },
  { name: 'Johnathan Luu', roles: 'Fabrication & Marketing', bio: 'Hello my name is Johnathan Luu, and this will be my fourth season in robotics. I am an alumni of the BEST Robotics and FIRST FTC Robotics competitions, with this being my second year in VEX V5. I hope to have another great season in V5 with my friends and learn a lot about the world of engineering!', image: '/axiom/johnathan.jpeg' },
  { name: 'Chenghao Huang', roles: 'Fabrication & Design & Marketing', bio: 'Hi my name is Chenghao, and I am a very dedicated builder, programmer, and notebooker. I enjoy participating in robotics competitions and was a part of FTC 27099 24-25 season and currently on FTC 15038 25-26 season. I have past FLL, FTC, and FRC knowledge, which I believe I would contribute a lot in this year’s V5RC Pushback season and create memorable experience.', image: '/axiom/cheng.webp' },
  { name: 'Aditya Sriram', roles: 'Finance & Programming', bio: 'Hi, I’m Adi and I’m a high school sophomore. I’m mainly a programmer and wanted to experience VEX for real this season. Last year I was a part of FTC in 12106 and helped mentor a V5RC team (75103Z). I’ve also had some robotics experience in the past and I’m excited to be able to have fun this year and have more control with what I can do in VEX. ', image: '/axiom/adi.jpg' },
  { name: 'Alex Richards', roles: 'Fabrication', bio: 'My name is Alexander Richards, and this is my fourth year of robotics! I previously was a member of FIRST Tech Challenge and another VEX team before that This is my third year doing VEX, and I’m excited to learn more about STEM and improve our designs with my team this year!', image: '/axiom/alex.jpg' },
  { name: 'Aryan Padarthi', roles: 'Marketing', bio: 'Hi, my name Is Aryan and i’m a programmer and notebooker on VEX this year. I have competed in BEST robotics in the past and I was on FTC Team #15083 last year. This year is my first season in VEX and I am looking forward to learning a lot and experiencing VEX!', image: '/axiom/aryan.png' },
];

const awards = [
  { event: 'Texas Region 5 State Championship', title: 'Tournament Champions', sub: 'World Championship Qualifier' },
  { event: 'Texas Region 5 State Championship', title: 'Build Award', sub: 'World Championship Qualifier' },
  { event: 'NextGen V5RC Spring Tournament', title: 'Tournament Champions', sub: 'Event Region Championship Qualifier' },
  { event: 'CFBISD V5RC Winter Challenge', title: 'Tournament Champions', sub: 'Event Region Championship Qualifier' },
  { event: 'CFBISD V5RC Winter Challenge', title: 'Innovate Award', sub: 'Technical Excellence' },
  { event: 'For the Love of Bots I', title: 'Build Award', sub: 'Structural Excellence' },
];

const goals = [
      { text: 'Reach VEX World Championship Dome Finals', status: 'pending' },
      { text: 'Tournament Champions of Texas r5 State', status: 'completed' },
      { text: 'Top 10 ranking in Skills Challenge', status: 'pending' },
      { text: 'Build strong community partnerships with local teams', status: 'completed' },
      { text: 'Innovate robot design & programming', status: 'pending' },
    ];


const events = [
  {
    name: 'Texas Region 5 High School State Championship',
    date: 'Feb 28, 2026',
    rank: 1,
    stats: '20 / 70 / 104',
    matches: [
      { id: 'Q9', red: '7110H, 79536B', blue: '75409A, 14142A', score: '3 - 72', result: 'W' },
      { id: 'Q14', red: '76058A, 14142A', blue: '3160X, 76058E', score: '56 - 14', result: 'W' },
      { id: 'Q26', red: '75019C, 76427X', blue: '14142A, 2474X', score: '3 - 86', result: 'W' },
      { id: 'Q36', red: '74559D, 1082N', blue: '14142A, 87867D', score: '9 - 58', result: 'W' },
      { id: 'Q47', red: '7110A, 14142A', blue: '74559A, 9871M', score: '74 - 30', result: 'W' },
      { id: 'Q55', red: '17505B, 87867C', blue: '2025X, 14142A', score: '18 - 48', result: 'W' },
      { id: 'Q64', red: '14142A, 1082E', blue: '38792A, 75019A', score: '88 - 21', result: 'W' },
        { id: 'Q79', red: '76058B, 14142A', blue: '1082J, 2025X', score: '74 - 6', result: 'W' },
      { id: 'R16 #1-1', red: '14142A, 1082E', blue: '82295B, 9871S', score: '133 - 6', result: 'W' },
      { id: 'QF #1-1', red: '14142A, 1082E', blue: '75019D, 7110X', score: '94 - 8', result: 'W' },
      { id: 'SF #1-1', red: '14142A, 1082E', blue: '2025X, 87867D', score: '58 - 16', result: 'W' },
      { id: 'Final #1-1', red: '14142A, 1082E', blue: '2474X, 1082J', score: '70 - 14', result: 'W' },
      { id: 'Final #1-2', red: '14142A, 1082E', blue: '2474X, 1082J', score: '82 - 14', result: 'W' },
    ]
  },
  {
    name: 'NextGen V5RC Push Back Spring Tournament',
    date: 'Feb 14, 2026',
    rank: 2,
    stats: '13 / 60 / 67',
    matches: [
      { id: 'Q5', red: '22204H, 76058D', blue: '14142A, 10820X', score: '0 - 85', result: 'W' },
      { id: 'Q16', red: '14142A, 22204K', blue: '87867B, 46167C', score: '76 - 6', result: 'W' },
      { id: 'Q22', red: '14142A, 10820W', blue: '10820E, 75081B', score: '118 - 11', result: 'W' },
      { id: 'Q33', red: '28006C, 66106A', blue: '14142A, 28006D', score: '17 - 80', result: 'W' },
      { id: 'Q41', red: '14142A, 22204N', blue: '10820S, 3358C', score: '134 - 0', result: 'W' },
      { id: 'Q49', red: '3027B, 17505A', blue: '14142A, 22204F', score: '33 - 63', result: 'W' },
      { id: 'R16 #5-1', red: '14142A, 87867B', blue: '39822C, 66106A', score: '137 - 0', result: 'W' },
      { id: 'QF #3-1', red: '14142A, 87867B', blue: '46167B, 22204H', score: '119 - 6', result: 'W' },
      { id: 'SF #2-1', red: '14142A, 87867B', blue: '10820W, 10820X', score: '112 - 8', result: 'W' },
      { id: 'Final #1-1', red: '22204N, 106X', blue: '14142A, 87867B', score: '0 - 43', result: 'W' },
    ]
  },
  {
    name: 'CFBISD V5RC Push Back HS Winter Challenge',
    date: 'Jan 31, 2026',
    rank: 1,
    stats: '12 / 45 / 57',
    matches: [
      { id: 'Q4', red: '14142A, 1082T', blue: '76058B, 1082W', score: '71 - 9', result: 'W' },
      { id: 'Q6', red: '75081B, 80162A', blue: '14142A, 58945A', score: '11 - 103', result: 'W' },
      { id: 'Q14', red: '46167A, 76058A', blue: '14142A, 1082U', score: '8 - 38', result: 'W' },
      { id: 'Q16', red: '14142A, 1082W', blue: '76058C, 1082V', score: '97 - 8', result: 'W' },
      { id: 'Q21', red: '14142A, 82801A', blue: '76058D, 46167D', score: '115 - 8', result: 'W' },
      { id: 'Q28', red: '1082N, 14142A', blue: '76058A, 46167B', score: '61 - 13', result: 'W' },
      { id: 'QF #1-1', red: '14142A, 76058A', blue: '80162A, 46167B', score: '145 - 11', result: 'W' },
      { id: 'SF #1-1', red: '14142A, 76058A', blue: '1082W, 76058E', score: '98 - 8', result: 'W' },
      { id: 'Final #1-1', red: '14142A, 76058A', blue: '76058B, 1082N', score: '51 - 27', result: 'W' },
    ]
  },
  {
    name: 'Robot Rodeo DFW Signature Event',
    date: 'Jan 17, 2026',
    rank: 16,
    stats: '14 / 60 / 147',
    matches: [
      { id: 'Q21', red: '1585Z, 14142A', blue: '63310A, 74559D', score: '66 - 16', result: 'W' },
      { id: 'Q43', red: '3350B, 106X', blue: '14142A, 91923A', score: '6 - 91', result: 'W' },
      { id: 'Q64', red: '14142A, 39110E', blue: '6277C, 3184A', score: '13 - 45', result: 'L' },
      { id: 'Q77', red: '67100G, 10702X', blue: '2474A, 14142A', score: '81 - 14', result: 'L' },
      { id: 'Q95', red: '87867D, 91960X', blue: '9065C, 14142A', score: '39 - 63', result: 'W' },
      { id: 'Q118', red: '1082E, 1082J', blue: '106A, 14142A', score: '50 - 55', result: 'W' },
      { id: 'Q159', red: '87867C, 14142A', blue: '75503Y, 9576X', score: '89 - 0', result: 'W' },
      { id: 'Q180', red: '1739C, 74559C', blue: '75409A, 14142A', score: '9 - 88', result: 'W' },
      { id: 'R16 #4-1', red: '1474X, 1739C', blue: '14142A, 75409A', score: '72 - 46', result: 'L' },
    ]
  },
  {
    name: 'Garland ISD Mixed Push Back Tournament',
    date: 'Nov 22, 2025',
    rank: 21,
    stats: '8 / 20 / 71',
    matches: [
        { id: 'Q6', red: '2025X, 99966X', blue: '22204G, 14142A', score: '12 - 33', result: 'W' },
      { id: 'Q14', red: '76058D, 14142A', blue: '76412H, 22204W', score: '29 - 70', result: 'L' },
      { id: 'Q27', red: '22204V, 1082N', blue: '18350B, 14142A', score: '73 - 0', result: 'L' },
      { id: 'Q33', red: '14142A, 76412F', blue: '3691A, 1082U', score: '93 - 12', result: 'W' },
      { id: 'Q42', red: '20250A, 14142A', blue: '28006C, 76058E', score: '0 - 116', result: 'L' },
      { id: 'Q56', red: '76058Z, 22204F', blue: '14142A, 3691B', score: '3 - 61', result: 'W' },
      { id: 'Q64', red: '1082T, 76058B', blue: '5408X, 14142A', score: '15 - 94', result: 'W' },
      { id: 'R16 #2-1', red: '2025X, 14142A', blue: '76058E, 76058D', score: '91 - 12', result: 'W' },
      { id: 'QF #1-1', red: '22204V, 76058A', blue: '2025X, 14142A', score: '55 - 28', result: 'L' },
    ]
  },
  {
    name: 'For the Love of Bots I V5RC Push Back',
    date: 'Nov 1, 2025',
    rank: 18,
    stats: '8 / 25 / 105',
    matches: [
      { id: 'Q6', red: '75019E, 2474C', blue: '7110H, 14142A', score: '15 - 54', result: 'W' },
      { id: 'Q25', red: '1082N, 14142A', blue: '2474R, 22204W', score: '35 - 47', result: 'L' },
      { id: 'Q36', red: '22204K, 14142A', blue: '99689C, 45618A', score: '84 - 8', result: 'W' },
      { id: 'Q43', red: '22204G, 1082T', blue: '14142A, 41776A', score: '5 - 46', result: 'W' },
      { id: 'Q53', red: '1082E, 14142A', blue: '1239E, 75019H', score: '72 - 25', result: 'W' },
      { id: 'Q62', red: '22204V, 45618B', blue: '14142A, 7110S', score: '44 - 17', result: 'L' },
      { id: 'R16 #6-1', red: '7110S, 7110X', blue: '75019D, 14142A', score: '30 - 29', result: 'L' },
    ]
  }
];

export default function AxiomPage() {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 md:pt-48 md:pb-48">
      {/* Hero */}
      <section className="relative">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 lg:col-span-10"
          >
            <div className="flex items-center gap-4">
              <div className="inline-block border border-black dark:border-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
                Flagship Team
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">EST. 2025</span>
            </div>
            <h1 className="text-[12vw] font-black leading-[0.85] tracking-tighter md:text-[10vw] lg:text-[150px]">
              14142A<br />
              <span className="text-neutral-200 dark:text-neutral-800 uppercase">Axiom</span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-neutral-500 italic">
              Axiom is the flagship team of Irrational Robotics. Founded in 2025, Axiom has quickly established itself as a powerhouse in the VEX Robotics Competition, achieving Tournament Champions in Reigon-5 Texas, arguably the most competitive reigon in Texas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Robot Section */}
      <section className="mt-64">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-400">The Robot</h2>
              <h3 className="text-6xl font-black tracking-tighter uppercase italic">Delta <span className="text-neutral-200 dark:text-neutral-800">V3</span></h3>
            </div>
            <p className="text-lg leading-relaxed text-neutral-500 uppercase tracking-widest italic font-medium">
              32 Games Won • 0 Losses
            </p>
              <p className="text-sm leading-relaxed text-neutral-400">
                Delta V3 is our championship-winning robot that dominated CFB, NextGen, and the Texas R5 State Championship. It represents the culmination of our Push Back season engineering, showcasing refined mechanisms, responsive systems, and strategic design decisions that delivered consistent performance and competitive success.
              </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-8">
              <div className="overflow-hidden border border-black/5">
                <Image
                  src="/Deltav3/View1.png"
                  alt="Delta V3 robot view 1"
                  width={1788}
                  height={1856}
                  className="mx-auto h-auto w-full max-w-[36rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-8 flex items-end justify-between border-b border-black/10 dark:border-white/10 pb-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-400">Delta V3 Showcase</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden border border-black/5">
            <Image
              src="/Deltav3/gallery1.webp"
              alt="Delta V3 gallery image 1"
              width={1600}
              height={1200}
              className="h-auto w-full"
            />
          </div>
          <div className="overflow-hidden border border-black/5">
            <Image
              src="/Deltav3/gallery2.webp"
              alt="Delta V3 gallery image 2"
              width={1600}
              height={1200}
              className="h-auto w-full"
            />
          </div>
          <div className="overflow-hidden border border-black/5">
            <Image
              src="/Deltav3/gallery3.webp"
              alt="Delta V3 gallery image 3"
              width={1600}
              height={1200}
              className="h-auto w-full"
            />
          </div>
          <div className="overflow-hidden border border-black/5">
            <Image
              src="/Deltav3/gallery4.webp"
              alt="Delta V3 gallery image 4"
              width={1600}
              height={1200}
              className="h-auto w-full"
            />
          </div>
        </div>
        <div className="mt-8 overflow-hidden border border-black/5">
          <Image
            src="/Deltav3/gallery5.webp"
            alt="Delta V3 gallery image 5"
            width={2200}
            height={1400}
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* Meet the Team */}
      <section className="mt-64">
        <div className="mb-24 flex items-end justify-between border-b border-black/10 dark:border-white/10 pb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-400">Meet the Team</h2>
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 italic">Roster</span>
        </div>
          <div className="grid grid-cols-2 gap-px bg-black/5 dark:bg-white/5 md:grid-cols-4 lg:grid-cols-4">
            {team.map((member) => (
              <button
                key={member.name}
                onClick={() => setSelectedMember(member)}
                className="group relative aspect-square bg-white dark:bg-black p-8 text-left transition-all hover:bg-neutral-50 dark:hover:bg-neutral-950 flex flex-col justify-between overflow-hidden"
              >
                {member.image && (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  />
                )}
                <div className="relative z-10 h-12 w-12 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center overflow-hidden border border-black/5">
                  {member.image ? (
                      <img src={member.image} alt="" className="h-full w-full object-cover transition-all" />
                  ) : (
                    <Users className="h-5 w-5 text-neutral-300" />
                  )}
                </div>
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {member.roles.split(' & ')[0]}
                  </p>
                  <h4 className="mt-1 text-lg font-black tracking-tighter uppercase italic">{member.name}</h4>
                </div>
              </button>
            ))}
          </div>
      </section>

      {/* Awards */}
      <section className="mt-64">
        <div className="mb-24 flex items-end justify-between border-b border-black/10 dark:border-white/10 pb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-400 italic">Accolades</h2>
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 italic">Seasonal Honors</span>
        </div>
        <div className="grid grid-cols-1 gap-px bg-black/5 dark:bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, i) => (
            <div key={i} className="bg-white dark:bg-black p-12 space-y-6 flex flex-col justify-between border border-black/5 dark:border-white/5">
              <Award className="h-6 w-6 text-neutral-200 dark:text-neutral-800" />
              <div>
                <h4 className="text-2xl font-black tracking-tighter uppercase italic leading-none">{award.title}</h4>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-neutral-400">{award.event}</p>
                <p className="mt-1 text-[8px] font-black uppercase tracking-[0.2em] text-neutral-200 dark:text-neutral-800">{award.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Season Objectives */}
      <section className="mt-64">
        <div className="mb-24 flex items-end justify-between border-b border-black/10 dark:border-white/10 pb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-400 italic">Seasonal Objectives</h2>
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 italic">Push Back Roadmap</span>
        </div>
          <div className="grid grid-cols-1 gap-px bg-black/5 dark:bg-white/5 md:grid-cols-2 lg:grid-cols-3">
            {goals.map((goal, i) => (
              <div key={i} className="bg-white dark:bg-black p-12 space-y-6 flex flex-col justify-between border border-black/5 dark:border-white/5">
                <div className={`h-2 w-2 rounded-full ${goal.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                <div>
                  <h4 className={`text-2xl font-black tracking-tighter uppercase italic leading-none transition-colors ${goal.status === 'completed' ? 'text-black dark:text-white' : 'text-neutral-400'}`}>{goal.text}</h4>
                  <p className={`mt-4 text-[10px] font-bold uppercase tracking-widest ${goal.status === 'completed' ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
                    {goal.status === 'completed' ? 'Accomplished' : 'In Progress'}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </section>

      {/* Collaborators */}
      <section className="mt-64">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-12 items-start">
              <div className="lg:col-span-5 space-y-8">
                <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-400">Collaborations & Networking</h2>
                <h3 className="text-4xl font-black tracking-tighter uppercase italic leading-none">ROOKIE <br /> EXPANSION.</h3>
                <p className="text-sm font-medium leading-relaxed text-neutral-500 italic">
                  In our rookie year (2025—2026), we focused on building strong relationships with our community. As a team, we recognized that learning with others has the potential to rapidly accelerate our team&apos;s development. On the right, we will be documenting the teams we have worked with — either in event finals, or privately via scrimmages or other means. Collaboration is one of the main pillars of Irrational Robotics.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 gap-px bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                {[
                  { id: '1082E', name: 'Carbonated Potato' },
                  { id: '75409A', name: 'Axiom' },
                  { id: '76058A', name: 'WhyNot' },
                  { id: '28006B', name: 'Robots R Us' },
                  { id: '98861A', name: 'LotecISDERA' },
                  { id: '75019D', name: 'Coppell T-WEX' },
                  { id: '2025X', name: 'Styrax' },
                ].map((team) => (
                <div key={team.id} className="bg-white dark:bg-black p-8 group transition-all hover:bg-neutral-50 dark:hover:bg-neutral-950 flex flex-col justify-center">
                  <p className="text-[10px] font-black tracking-widest text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">{team.id}</p>
                  <h4 className="text-xl font-black tracking-tighter uppercase italic mt-2">{team.name}</h4>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Records */}
      <section className="mt-64">
        <div className="mb-24 flex items-end justify-between border-b border-black/10 dark:border-white/10 pb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-400">Match Records</h2>
          <span className="text-xs font-bold tracking-widest text-neutral-300 italic">V5RC: PUSH BACK</span>
        </div>

        <div className="space-y-48">
          {events.map((event) => (
            <div key={event.name} className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4 space-y-6">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{event.date}</p>
                    <h3 className="text-3xl font-black tracking-tighter uppercase leading-none">{event.name}</h3>
                  </div>
                  <div className="flex gap-12">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Final Rank</p>
                      <p className="text-2xl font-black italic">#{event.rank}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">WP / AP / SP</p>
                      <p className="text-2xl font-black italic">{event.stats}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="border-b border-black/10 dark:border-white/10">
                      <tr className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                        <th className="pb-4 pr-8">Match</th>
                        <th className="pb-4 pr-8 text-red-500/50">Red</th>
                        <th className="pb-4 pr-8 text-blue-500/50">Blue</th>
                        <th className="pb-4 text-right">Score</th>
                        <th className="pb-4 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5 dark:divide-white/5">
                      {event.matches.map((match) => (
                        <tr key={match.id} className="group transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-950">
                          <td className="py-4 pr-8 text-[11px] font-black">{match.id}</td>
                          <td className="py-4 pr-8 text-[11px] font-medium text-neutral-500">{match.red}</td>
                          <td className="py-4 pr-8 text-[11px] font-medium text-neutral-500">{match.blue}</td>
                          <td className="py-4 text-right text-[11px] font-black italic tracking-tighter">{match.score}</td>
                          <td className={`py-4 text-right text-[11px] font-black italic ${match.result === 'W' ? 'text-black dark:text-white' : 'text-neutral-200 dark:text-neutral-800'}`}>
                            {match.result}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Worlds Countdown */}
      <section className="mt-64 border-t border-black/10 dark:border-white/10 pt-32 text-center">
        <div className="mx-auto max-w-lg space-y-8">
          <h3 className="text-5xl font-black tracking-tighter md:text-7xl uppercase">VEX WORLD CHAMPIONSHIP</h3>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-400 italic">Dallas, Texas • April 2026</p>
          <div className="inline-block border border-black/10 dark:border-white/10 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em]">
            Deployment Pending
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg border border-black dark:border-white bg-white dark:bg-black p-12 shadow-2xl"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">{selectedMember.roles}</p>
                    <h3 className="text-4xl font-black tracking-tighter uppercase italic">{selectedMember.name}</h3>
                  </div>
                  <div className="h-px w-12 bg-black dark:bg-white" />
                  <p className="text-lg leading-relaxed text-neutral-500 italic">
                    {selectedMember.bio}
                  </p>
                </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
