import type { Metadata } from 'next';
import Script from 'next/script';
import AIConfidenceDayContent from './ai-confidence-day-content';

export const metadata: Metadata = {
  title: 'AI Confidence Day | London Workshop | July 3, 2026',
  description: 'Join our full-day London workshop on AI strategy and transformation. Build clarity and confidence for AI adoption with expert facilitators.',
};

export default function AIConfidenceDayPage() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "AI Confidence Day",
    "description": "A full-day London workshop on AI strategy and transformation. Build clarity and confidence for leading AI adoption.",
    "url": "https://aiconfidence.co/ai-confidence-day",
    "startDate": "2026-07-03T09:00:00+01:00",
    "endDate": "2026-07-03T17:00:00+01:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "London, UK",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "UK"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "AI Confidence",
      "url": "https://aiconfidence.co"
    },
    "performer": [{ "@type": "Person", "name": "Chris Bradshaw" }],
    "offers": {
      "@type": "Offer",
      "url": "https://aiconfidence.co/ai-confidence-day",
      "availability": "https://schema.org/OutOfStock",
      "priceCurrency": "GBP"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Will there be recordings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. This is an in-person session with no recordings. All materials are sent to participants afterwards. Chatham House Rules mean the conversations in this room stay in this room."
        }
      },
      {
        "@type": "Question",
        "name": "Why is the group limited to 12?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deliberately. We want a safe space where senior leaders can say \"I do not know,\" ask real questions, and express concerns without judgement. A small group makes that possible."
        }
      },
      {
        "@type": "Question",
        "name": "Why is this in person?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have seen a significant difference in impact between virtual and in-person sessions at leadership level. The connections formed in person are often more valuable than the content itself. Speed of learning, retention, quality of conversation, everything is better face to face."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need technical knowledge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. This is specifically designed for non-technical leaders, CEOs, CFOs, CHROs, CMOs, COOs, board members. You do not need to code or understand machine learning. Just bring curiosity and willingness to learn by doing."
        }
      },
      {
        "@type": "Question",
        "name": "What if I cannot attend the full day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The day is designed to flow from one session to the next. We strongly encourage full-day attendance. Arriving late or leaving early means missing context that builds throughout the day."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a money-back guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If you attend the morning session and, before lunch, feel this day is not for you, let us know and we will refund you in full, no questions asked."
        }
      },
      {
        "@type": "Question",
        "name": "Are virtual sessions planned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not for the public programme. We run private CXO AI days for individual companies and PE portfolio companies, and can travel for those. The public session is an in-person London experience."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have other dates later in the year?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We currently have no other public dates planned for the rest of this year. We do run these privately for companies with more flexibility on dates. Reach out if that is more suitable."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <Script
        id="faq-schema-ai-confidence-day"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AIConfidenceDayContent />
    </>
  );
}
