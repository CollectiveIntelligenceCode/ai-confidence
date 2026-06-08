import Link from 'next/link';
import { Event } from '@/lib/types';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.slug}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden cursor-pointer">
        {event.image && (
          <div className="h-48 bg-gray-200 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {event.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{event.description}</p>
          <div className="text-sm text-gray-500">
            <div className="font-semibold text-gray-700">
              {new Date(event.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
            <div>{event.location}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
