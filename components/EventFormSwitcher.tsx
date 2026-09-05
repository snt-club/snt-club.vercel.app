'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import EventRegistrationForm from '@/components/EventRegistrationForm';
import EventAttendanceForm from '@/components/EventAttendaceForm';

type Props = {
  event: string;
  title: string;
};

export default function EventFormSwitcher({ event, title }: Props) {
  const eventParams = useSearchParams();
  const attendance = eventParams.get('attendance');

  return attendance ? (
    <EventAttendanceForm event={event} title={title} />
  ) : (
    <EventRegistrationForm event={event} title={title} />
  );
}