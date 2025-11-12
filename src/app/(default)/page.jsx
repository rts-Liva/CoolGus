import '@/scss/pages/home.scss';
import SmallEventCard from '@/components/cards/small-event-card';

export const metadata = {
  title: 'Hjem'
};

function HomePage() {
  return (
    <>
      <div className="wrapper">
        <section className="info">
          <h1 className="info__heading">Velkommen til<br />CoolGus</h1>
          <p className="info__text">
            En hyggelig, lille familiedrevet Sauna Gus.<br />
            En 8 personers sauna i god stand og flot kvalitet med skøn udsigt.<br />
            2 koldsvands kar, hvor det ene er nedkølet til 0°
          </p>
        </section>
        <section className="events">
          <h2 className="events__heading">Kommende events</h2>
          <SmallEventCard />
          <SmallEventCard />
        </section>
      </div>
    </>
  );
}

export default HomePage;