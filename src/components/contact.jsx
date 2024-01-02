import styles from "./contact.module.css"


const Contact = () => {

    async function sendEmail() {
        try {
            let res = await fetch (
                "https://api.smtpexpress.com/send",
            {
            headers: {
                Authorization: `Bearer 37b40b10676cb03dcf3215a02d2e0014bb19322add8d07350`
            },
            }
            )
            let data = await res.json()
            return data
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <section className={styles.contact}>
            <h2 className="heading">
                Contact
                <span> Me!</span>
            </h2>

            <form>
                <div className={styles.inputbox}>
                    <div className={styles.inputfield}>
                        <input type="text" placeholder="Full Name" required/>
                        <span className={styles.focus}></span>
                    </div>

                    <div className={styles.inputfield}>
                        <input type="text" placeholder="Email Address" required/>
                        <span className={styles.focus}></span>
                    </div>
                </div>

                <div className={styles.inputbox}>
                    <div className={styles.inputfield}>
                        <input type="number" placeholder="Mobile Number" required/>
                        <span className={styles.focus}></span>
                    </div>

                    <div className={styles.inputfield}>
                        <input type="text" placeholder="Message" required/>
                        <span className={styles.focus}></span>
                    </div>
                </div>
                 
                    <div className={styles.textareafield}>
                        <textarea name="" id="" cols="30" rows="10"
                             placeholder="Write your message here..."
                            required></textarea>
                        <span className={styles.focus}></span>
                    </div>

                
                    <div className={`${styles.btnbox} ${styles.btns}`}>
                        <button
                        onClick={sendEmail} 
                          type="submit" className={styles.btn}>Submit</button>
                    </div>
            </form>
        </section>
    )
}

export default Contact;