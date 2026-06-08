import { Event } from './types';
import eventsData from '@/data/events.json';

export function getAllEvents(): Event[] {
  return eventsData as Event[];
}

export function getEventBySlug(slug: string): Event | undefined {
  return eventsData.find((event) => event.slug === slug) as Event | undefined;
}

export function getFeaturedEvents(): Event[] {
  return getAllEvents().filter((event) => event.featured).slice(0, 3);
}

export function getUpcomingEvents(): Event[] {
  const today = new Date();
  return getAllEvents()
    .filter((event) => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}
