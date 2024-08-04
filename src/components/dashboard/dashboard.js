import { NavLink } from "react-router-dom";

import styles from "../../styles/dashboard.module.css";

import dash from "../../assets/dashboard/dash.png";
import business from "../../assets/dashboard/business.png";
import settings from "../../assets/dashboard/settings.png";
import support from "../../assets/dashboard/support.png";
import roles from "../../assets/dashboard/roles.png";
import logout from "../../assets/dashboard/logout.png";

import bulbIcon from "../../assets/dashboard/bulb.png";
import nairaIcon from "../../assets/dashboard/naira.png";
import messageIcon from "../../assets/dashboard/decline.png";
import searchIcon from "../../assets/dashboard/search.png";

const DashBoard = (props) => {
  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <sidebar>
          <div className={styles.content}>
            <div className={styles.top_info}>
              <h3>Investee</h3>
              <div className={styles.list_icon_dashboard}>
                <img src={dash} alt="dashboard" />{" "}
                <NavLink
                  style={{ textDecoration: "none", color: "#fff" }}
                  activeStyles={{ color: "#c4c4c4" }}
                  to="/dashboard"
                >
                  <span>Dashboard</span>
                </NavLink>
              </div>
              <div className={styles.list_icon}>
                <img src={business} alt="business icon" />
                <NavLink
                  style={{ textDecoration: "none", color: "#080808" }}
                  activeStyles={{ color: "#c4c4c4" }}
                  to="/my-business"
                >
                  <span>My Business</span>
                </NavLink>
              </div>
              <div className={styles.list_icon}>
                <span class="fa-solid fa-circle-info"></span>
                <NavLink
                  style={{ textDecoration: "none", color: "#080808" }}
                  activeStyles={{ color: "#c4c4c4" }}
                  to="/info"
                >
                  <span>Information</span>
                </NavLink>
              </div>
            </div>
            <div className={styles.mid_info}>
              <h3>Security</h3>
              <div className={styles.list_icon}>
                <img src={settings} alt="settings icon" />
                <NavLink
                  style={{ textDecoration: "none", color: "#080808" }}
                  activeStyles={{ color: "#c4c4c4" }}
                  to="/settings"
                >
                  Settings
                </NavLink>
              </div>
              <div className={styles.list_icon}>
                <img src={support} alt="support icon" />
                <NavLink
                  to="/support"
                  style={{ textDecoration: "none", color: "#080808" }}
                  activeStyles={{ color: "#c4c4c4" }}
                >
                  Support
                </NavLink>
              </div>
              <div className={styles.list_icon}>
                <img src={roles} alt="roles icon" /> Switch Roles
              </div>
            </div>
            <div className={styles.bottom_info}>
              <div className={styles.list_icon}>
                <img src={logout} alt="logout icon" /> Logout
              </div>
            </div>
          </div>
        </sidebar>
      </aside>
      <div className={styles.main}>
        <div className={styles.search}>
          <input name="search" type="search" value="" placeholder="Search..." />

          <img id={styles.search} src={searchIcon} alt="search" />
        </div>
        <div className={styles.dash_b}>
          <div className={styles.greetings}>
            <h1>Hello Tolu,</h1>
            <p>Welcome back!</p>
          </div>
          <div className={styles.board}>
            <div className={styles.top_board}>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <img src={bulbIcon} alt="bulb icon" />
                </div>
                <div className={styles.info}>
                  <p className={styles.figures}>05</p>
                  <p className={styles.desc}>Total Business</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <img src={nairaIcon} alt="naira icon" />
                </div>
                <div className={styles.info}>
                  <p className={styles.figures}>03</p>
                  <p className={styles.desc}>Funded Business</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <img src={messageIcon} alt="message icon" />
                </div>
                <div className={styles.info}>
                  <p className={styles.figures}>02</p>
                  <p className={styles.desc}>Declined Business</p>
                </div>
              </div>
            </div>

            <div className={styles.bot_board}>
              <div className={styles.charts}>
                <div className={styles.chart}>
                  <div>Business Insights</div>
                  <div className={styles.graph}></div>
                </div>
                <div className={styles.overview}>
                  <div className={styles.plastic_business}>
                    Plastic Business
                    <span class="fa-solid fa-caret-down"></span>
                  </div>
                  <div>
                    <p className={styles.textview}>Overview</p>
                    <div className={styles.rate}>
                      <div className={styles.views}>
                        560 <br />
                        <span>Views</span>
                      </div>
                      <div className={styles.clicks}>
                        1k <br /> <span>Clicks</span>
                      </div>
                    </div>

                    <div className={styles.metrics}>
                      <p id={styles.click}>
                        Clicks <span>700/1200</span>
                      </p>
                      <p id={styles.view}>
                        Views <span>1100/1200</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*close of main div*/}
    </div>
  );
};

export default DashBoard;
