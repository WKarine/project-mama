import classnames from "classnames";

import { brandColors } from "../../../constantes/colors";

const ConnectionForm = ({ onSubmit, error }) => {
  const btnClasses = classnames(
    "btn",
    "waves-effect",
    "waves-light",
    "animated",
    {
      shake: error
    }
  );

  return (
    <div className="col s12 m8 offset-m2 connection-form-container">
      <div className="card-panel">
        <form className=" animated fadeIn" method="post" onSubmit={onSubmit}>
          <div className="input-field">
            <input id="email" type="email" className="validate" name="email" />

            <label htmlFor="email">Email</label>
          </div>

          <div className="input-field">
            <input
              id="password"
              type="password"
              className="validate"
              name="password"
            />
            <label htmlFor="password">Password</label>
          </div>

          <button className={btnClasses} type="submit" name="action">
            se connecter
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
      <style jsx>{`
        .connection-form-container {
          height: 100vh;
        }

        form {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        button {
          background-color: ${brandColors.actual} !important;
          margin-left: auto;
        }

        button:hover,
        button:active,
        button:focus {
          background-color: ${brandColors.actualHover} !important;
        }
      `}</style>
    </div>
  );
};

export default ConnectionForm;
