
import Explorebtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";

const events = [
  {
    title: "Tech Conference 2024",
    image: "/images/event1.png",
    slug: "tech-conference-2024",
    location: "San Francisco, CA",
    date: "2024-10-15",
    time: "09:00 AM"
  },
  {
    title: "Web Development Workshop",
    image: "/images/event2.png",
    slug: "web-development-workshop",
    location: "New York, NY",
    date: "2024-10-20",
    time: "10:00 AM"
  },
  {
    title: "Mobile App Development",
    image: "/images/event3.png",
    slug: "mobile-app-development",
    location: "Los Angeles, CA",
    date: "2024-10-25",
    time: "11:00 AM"
  }
];

const Page = () => {
  return (
   <section>
    <h1 className="text-center"> The hub for Every Dev <br/> Event you can't miss</h1>
    <p className="text-center mt-5">Discover, connect, and code together at the best developer events around the world.</p>
    <Explorebtn />

     <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>

                <ul className="events">
                    {events && events.length > 0 && events.map((event: IEvent) => (
                        <li key={event.title} className="list-none">
                            <EventCard {...event} />
                        </li>
                    ))}
                </ul>
            </div>
   </section>
  );
};
export default Page;