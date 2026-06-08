import Navigation from '@/components/Navigation';
import EventHeader from '@/components/EventHeader';
import EventGrid from '@/components/EventGrid';
import { getAllEvents } from '@/lib/events';

export default function Home() {
  const events = getAllEvents();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <EventHeader />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">All Events</h2>
          <p className="text-gray-500 mt-1">
            {events.length} event{events.length !== 1 ? 's' : ''} available
          </p>
        </div>
        {events.length > 0 ? (
          <EventGrid events={events} />
        ) : (
          <p className="text-gray-500">No events available at the moment. Check back soon.</p>
        )}
      </main>
    </div>
  );
}
