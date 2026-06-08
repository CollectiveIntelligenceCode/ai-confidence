export interface EventScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  description?: string;
}

export interface EventAttendee {
  name: string;
  role?: string;
  image?: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string; // ISO format: 2026-06-15
  time: string; // HH:mm format: 09:00
  duration?: string; // e.g., "2 hours"
  location: string;
  city?: string;
  country?: string;
  description: string;
  longDescription?: string;
  image: string; // path to public image
  tags: string[];
  attendees?: EventAttendee[];
  schedule?: EventScheduleItem[];
  registrationUrl?: string;
  capacity?: number;
  featured?: boolean;
}
