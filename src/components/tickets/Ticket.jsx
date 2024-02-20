import { msjTicket } from "@Const/invite";
import { QRCode } from "antd";
import PropTypes from "prop-types";
import { extractFirstCharacters } from "@Utils/commons";
const Ticket = ({ ticket }) => {
  return (
    <>
      <div className="boarding-pass">
        <header>
          <svg className="logo">
            <text x="0" y="30" fontSize="30" fill="#FFF" fontWeight="600">
              {ticket?.name}
            </text>
          </svg>
          <div className="flight">
            <small>{msjTicket?.flight}</small>
            <strong>{ticket?.table}</strong>
          </div>
        </header>
        <section className="cities">
          <div className="city">
            <small>{msjTicket?.cityFrom}</small>
            <strong>
              F{extractFirstCharacters({ phrase: ticket?.family })}
            </strong>
          </div>
          <div className="city">
            <small>{msjTicket?.cityTo}</small>
            <strong>{ticket?.nameParty}</strong>
          </div>
          <svg className="airplane">
            <use xlinkHref="#airplane"></use>
          </svg>
        </section>
        <section className="infos">
          <div className="places">
            <div className="box">
              <small>{msjTicket?.placeTabla}</small>
              <strong>
                <em>{ticket?.noTable}</em>
              </strong>
            </div>
            <div className="box">
              <small>{msjTicket?.placeClass}</small>
              <strong>{msjTicket?.valueClass}</strong>
            </div>
            <div className="box-double">
              <small>{msjTicket?.placeGuess}</small>
              <strong>
                <em>{ticket?.guests}</em>
              </strong>
            </div>
          </div>
          <div className="times">
            <div className="box">
              <small></small>
              <strong></strong>
            </div>
            <div className="box-double">
              <small>{msjTicket?.timesDuration}</small>
              <strong>{msjTicket?.valueTimes}</strong>
            </div>
          </div>
        </section>
        <section className="strap">
          <div className="box">
            <div className="passenger">
              <small>{msjTicket?.strapFamily}</small>
              <strong>{ticket?.family}</strong>
            </div>
            <div className="date">
              <small>{msjTicket?.strapDate}</small>
              <strong>{ticket?.date}</strong>
            </div>
          </div>
          <div className="qrcode">
            <QRCode size={86} value={ticket?.link} />
          </div>
        </section>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0"
        height="0"
        display="none"
      >
        <symbol id="airplane" viewBox="243.5 245.183 25 21.633">
          <g>
            <path
              fill="#336699"
              d="M251.966,266.816h1.242l6.11-8.784l5.711,0.2c2.995-0.102,3.472-2.027,3.472-2.308
                              c0-0.281-0.63-2.184-3.472-2.157l-5.711,0.2l-6.11-8.785h-1.242l1.67,8.983l-6.535,0.229l-2.281-3.28h-0.561v3.566
                              c-0.437,0.257-0.738,0.724-0.757,1.266c-0.02,0.583,0.288,1.101,0.757,1.376v3.563h0.561l2.281-3.279l6.535,0.229L251.966,266.816z
                              "
            />
          </g>
        </symbol>
      </svg>
    </>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.object,
};

export default Ticket;
