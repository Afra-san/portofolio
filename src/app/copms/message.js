import styles from './message.module.css'

export default function Message() {
    return(
        <div className={styles.messagesection}>
            <div className={styles.cards}>
                {/* <img src='/overlay-3.png' alt='overlay' className={styles.overl} draggable='false' /> */}

                <div className={styles.telcard}>
                    <img src='/telegram.png' alt='telegramicon' className={styles.telicon}/>
                    <input className={styles.telinput} type="input" placeholder="Type Message"  />
                    <a target={"_blank"} rel="noreferrer" href='https://t.me/afrainjast'><button className={styles.telbtn}>Start Chat</button></a>
                </div>
                <div className={styles.in}>
                  <div className={styles.gmailcard}>
                      <img className={styles.gmailicon} src='/gmail.png' alt='gmailicon'></img>
                      {/* <mailto>Khodeafra@Gmail.com</mailto> */}
                      <address>
                          <a className={styles.emailad} target={"_blank"} rel="noreferrer" href="mailto:khodeafra@gmail.com">khodeafra@gmail.com</a>
                      </address> 
                      <a href='mailto:khodeafra@gmail.com' target={"_blank"} rel="noreferrer"><button className={styles.gmailbtn}>Email Me</button></a>
                  </div>
                  <div className={styles.wacard}>
                      <div>
                        <img className={styles.waprof} src='/profile.png'></img>
                        <img className={styles.walogo} src='/whatsapp.png'></img>
                      </div>
                      <a href='https://wa.link/x0l7qw' target={"_blank"} rel="noreferrer"><button className={styles.wabtn}>Send a Message</button></a>
                  </div>
                </div>
                <img src='/overlay-3.png' alt='overlay' className={styles.overl} draggable='false' />

            </div>
        </div>
    )
}