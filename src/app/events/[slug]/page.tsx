import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getEventBySlug, getAllEvents } from '@/lib/events';

export async function generateStaticParams() {
  const events = getAllEvents();
  return events.map((event) => ({ slug: event.slug }));
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm mb-6 inline-block">
          &larr; Back to Events
        </Link>

        {event.image && (
          <div className="h-64 md:h-96 bg-gray-200 rounded-xl overflow-hidden mb-8">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 bg-white rounded-lg p-6 shadow-sm">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Date</p>
            <p className="text-gray-900 font-medium">
              {new Date(event.date).toLocaleDateString('en-GB', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Time</p>
            <p className="text-gray-900 font-medium">
              {event.time}{event.duration ? ` · ${event.duration}` : ''}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Location</p>
            <p className="text-gray-900 font-medium">{event.location}</p>
          </div>
        </div>

        {event.longDescription && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">About this event</h2>
            <p className="text-gray-600 leading-relaxed">{event.longDescription}</p>
          </div>
        )}

        {event.schedule && event.schedule.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Schedule</h2>
            <div className="space-y-3">
              {event.schedule.map((item, i) => (
                <div key={i} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm font-mono text-blue-600 w-14 shrink-0 pt-0.5">{item.time}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    {item.speaker && <p className="text-sm text-gray-500">{item.speaker}</p>}
                    {item.description && <p className="text-sm text-gray-500 mt-1">{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {event.registrationUrl && (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Register Now
          </a>
        )}
      </div>
    </div>
  );
}
