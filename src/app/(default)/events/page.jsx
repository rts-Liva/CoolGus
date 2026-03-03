import LargeEventCard from "@/components/cards/large-event-card";
import "@/scss/pages/events.scss";

export const metadata = {
    title: 'Events'
}

function EventsPage() {
    return (
        <>
            <div className="events-wrapper">
                <h1 className="events__heading events__heading--large">Events</h1>
                <div className="events events--large">
                    <LargeEventCard />
                    <LargeEventCard />
                </div>
            </div>
        </>
    );
}

export default EventsPage;