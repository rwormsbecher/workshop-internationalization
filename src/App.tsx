import React, { useState } from "react";
import { GiViolin } from "react-icons/gi";
import {
    FormattedDate,
    FormattedDateParts,
    FormattedMessage,
    FormattedNumber,
    FormattedNumberParts,
    FormattedPlural,
    FormattedRelativeTime,
    FormattedTimeParts,
} from "react-intl";

function App() {
    const [isOnTour, setIsOnTour] = useState<boolean>(true);
    return (
        <div id="page-container">
            <div className="col-1-container">
                <p>
                    <FormattedMessage id="home.place" defaultMessage="Museum square"></FormattedMessage>
                </p>
                <hr />
            </div>

            <div className="col-2-container">
                <div className="col-1-container-mobile">
                    <p>Museum plein</p>
                    <hr />
                </div>
                <div className="top-shape"></div>

                <div className="middle-shape">
                    <div className="logo-container">
                        <GiViolin />
                    </div>
                    <div className="band-name">
                        <h1>Walloping Violin Orchestra</h1>
                        <h2>
                            <FormattedDateParts value={new Date("2023-05-9")} year="numeric" month="long" day="2-digit">
                                {(parts) => (
                                    <>
                                        <b>{parts[0].value}</b>
                                        {parts[1].value}
                                        <i>{parts[2].value}</i>
                                        {parts[3].value}
                                        <span>{parts[4].value}</span>
                                    </>
                                )}
                            </FormattedDateParts>
                            &nbsp;
                            <FormattedTimeParts value={new Date("2023-05-09T17:00:00")} hour="numeric" minute="numeric">
                                {(parts) => {
                                    return (
                                        <>
                                            <b>{parts[0]?.value}</b>
                                            {parts[1]?.value}
                                            <small>{parts[2]?.value}</small>
                                            {parts[3]?.value}
                                            {parts[4]?.value}
                                        </>
                                    );
                                }}
                            </FormattedTimeParts>
                        </h2>
                        <hr />
                    </div>

                    <div className="band-body">
                        <p className="on-tour">
                            <FormattedMessage
                                id="home.on.tour"
                                defaultMessage={"On tour: <tourValue></tourValue>"}
                                description="Notifies the user whether the band is on tour"
                                values={{
                                    tourValue: () => (
                                        <>
                                            <i className="positive">
                                                {isOnTour && <FormattedMessage id="general.yes" defaultMessage="Yes" />}
                                            </i>
                                            <i className="negative">
                                                {!isOnTour && <FormattedMessage id="general.no" defaultMessage="No" />}
                                            </i>
                                        </>
                                    ),
                                }}
                            />
                        </p>
                        <p className="tickets-available">
                            Tickets available: <FormattedRelativeTime value={+4} unit="month" />
                        </p>
                        <h3 className="tickets-left-number">
                            32.000&nbsp;
                            <FormattedPlural
                                value={32000}
                                one={<FormattedMessage id="home.one.ticket" defaultMessage="ticket" />}
                                other={<FormattedMessage id="home.many.ticket" defaultMessage="tickets" />}
                            />
                        </h3>
                        <hr />
                        <p className="price">Price</p>
                        <h4>
                            <FormattedNumberParts style="currency" value={20} currency="eur">
                                {(parts) => (
                                    <>
                                        <b>{parts[0]?.value}</b>
                                        {parts[1]?.value}
                                        {parts[2]?.value}
                                        <small>{parts[3]?.value}</small>
                                    </>
                                )}
                            </FormattedNumberParts>
                        </h4>
                    </div>
                </div>

                <div className="bottom-shape"></div>
            </div>
        </div>
    );
}

export default App;
