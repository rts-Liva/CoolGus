import '@/scss/components/small-event-card.scss';

function SmallEventCard() {
    return (
        <div className="events__card">
            <button type="button" className="events__card__btn">
                <img src="./white-flame.svg" alt="flame icon" />
                Tilmeld
            </button>
            <section className="events__card-info">
                <h3 className="events__card__heading">19:00 - 75kr</h3>
                <p>3 folk tilmeldt</p>
            </section>
            <span className="events__card__date">4<br />aug</span>
        </div>
    );
}

export default SmallEventCard;