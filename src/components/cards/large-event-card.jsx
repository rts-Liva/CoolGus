import '@/scss/components/small-event-card.scss';
import '@/scss/components/large-event-card.scss';

function LargeEventCard() {
    return (
        <div className="events__card events__card--large">
            <span className="events__card__date events__card__date--large">4<br />aug</span>
            <h2 className="events__card__heading">19:00 - 75kr</h2>
            <p className="events__card__text">Aromatisk gus, håndbygget sauna og kolde kar ned til 0°C. En hyggelig og personlig oplevelse hver gang.</p>
            <button type="button" className="events__card__btn">
                <img src="./white-flame.svg" alt="flame icon" />
                Tilmeld
            </button>
            <p>3 folk tilmeldt</p>
        </div>
    );
}

export default LargeEventCard;