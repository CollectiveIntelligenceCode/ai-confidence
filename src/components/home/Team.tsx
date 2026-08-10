import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

const team = [
  {
    name: 'Chris Bradshaw',
    company: 'AI Strategy &\nExecutive Workflows',
    initials: 'CB',
    photo: 'https://aiday.solvedtogether.co.uk/Chris%20Bradshaw%20Headshot.jpg',
    photoStyle: { objectPosition: 'center top' },
    bio: '22 years in technology and digital strategy. Ex-CEO for agency groups and Global Strategy Director at leading transformation agencies, Enterprise AI Partner at Board of Innovation, and founder of Collective Intelligence. Chris has worked with senior leaders at organisations including KPMG, BMW and Selfridges on AI adoption and decision-making strategy. He specialises in building personal AI workflows for CXOs and board members, with a rare ability to make the complex feel immediately usable.',
  },
  {
    name: 'Rujuta Singh',
    company: 'Enterprise Transformation &\nAI Adoption',
    initials: 'RS',
    photo: 'https://aiday.solvedtogether.co.uk/Rujuta%20Singh.jpg',
    photoStyle: { objectPosition: 'center top' },
    bio: 'Over two decades leading large-scale enterprise transformation in Fortune 500 companies across insurance, banking, PE, public sector, education, real estate, and more. Ex-PwC, ex-Accenture, ex-Microsoft. Founder of Solved Together, Rujuta built it because most AI journeys start with a pilot and hope the ROI shows up. Hers start with value, combining neuroscience-based collaboration with deep transformation expertise to help leaders use AI as the lever to grow and transform, not just experiment.',
  },
  {
    name: 'Lukáš Svěcený',
    company: 'Product Discovery &\nFacilitation',
    initials: 'LŠ',
    photo: '/lukas-sveceny.jpg',
    photoStyle: { objectPosition: 'center 10%', transform: 'scale(1.5)', transformOrigin: 'center 20%' },
    bio: 'Marketing, CX, and innovation leader with 20+ years across corporates, startups, and innovation agencies. Ex-strategist at global innovation consultancies, Lukáš has designed and facilitated transformation programmes and strategic workshops for organisations across telecoms, banking, insurance, automotive and the public sector. He helps leaders and teams cut through the noise of AI adoption, moving from expensive guesses and endless discussion to validated strategy and measurable outcomes.',
  },
  {
    name: 'Grant Kaufmann',
    company: 'Secure AI Foundations &\nTechnical Architecture',
    initials: 'GK',
    photo: '/grant-kaufmann.jpg',
    photoStyle: { objectPosition: 'center top' },
    bio: 'Over 20 years as a technology and security executive, holding CTO, CISO and VP of IT roles across biotech, finance, semiconductors and telecom. Ex-CTO of Corbus Pharmaceuticals, which grew from startup to a $750M NASDAQ listing, and ex-VP of IT at AI-chip innovator Luminous Computing. He has advised institutions including Barclays Capital, Bank of America and Deutsche Bank and supported M&A integrations at Barclays Global Investors and Elenion. CISSP-certified with degrees in Computer Science and Psychology, he makes AI adoption safe to scale, turning governance, security and data integrity into the foundation for confident growth.',
  },
];

export default function Team() {
  return (
    <section className="bg-[#F5F5F5] py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">The Team</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] text-[#111111] mb-4 max-w-xl leading-tight">
            The people behind AI Confidence.
          </h2>
          <div className="w-8 h-px bg-[#D4AF37] mb-16 lg:mb-20" />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {team.map((person, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="bg-white border border-black/8 p-8 flex flex-col h-full">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full overflow-hidden border border-[#D4AF37]/30 mb-6 shrink-0 bg-[#111111] flex items-center justify-center">
                  {person.photo ? (
                    <Image
                      src={person.photo}
                      alt={person.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      style={person.photoStyle}
                    />
                  ) : (
                    <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-wide">{person.initials}</span>
                  )}
                </div>

                {/* Name & company */}
                <h3 className="font-serif text-xl text-[#111111] leading-tight mb-1">
                  {person.name}
                </h3>
                <p className="text-[#D4AF37] text-[10px] font-sans tracking-[0.2em] uppercase mb-6 whitespace-pre-line leading-relaxed">
                  {person.company}
                </p>

                {/* Divider */}
                <div className="w-6 h-px bg-[#D4AF37] mb-6" />

                {/* Bio */}
                <p className="text-[#666666] text-sm leading-relaxed font-sans flex-1">
                  {person.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
