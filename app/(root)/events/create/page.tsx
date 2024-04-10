import EventForm from '@/components/shared/EventForm';
import { auth } from '@clerk/nextjs';

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="wrapper bg-primary-50 bg-dotted-pattern bg-cover bg-center">
        <h3 className="h5-bold text-center">Create Event</h3>
      </section>

      <div className="wrapper">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
