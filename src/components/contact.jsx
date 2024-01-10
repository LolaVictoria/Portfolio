import styles from "./contact.module.css"


const Contact = () => {

   /// const smtpKey = process.env.SMTP_KEY;

    async function sendEmail(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const fullName = e.target.elements.fullName.value;
        const emailAddress = e.target.elements.emailAddress.value;
        const mobileNumber = e.target.elements.mobileNumber.value;
        const message = e.target.elements.message.value;
        try {
            let res = await fetch(
                "https://api.smtpexpress.com/send",
                {
                    method: "POST", // Use POST method for sending data
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer d0c139c50417812da1e5c6692fb6a517a05a2dfd59244f0ac` // Use REACT_APP_ prefix for environment variables in React
                    },
                    body: JSON.stringify({
                        fullName,
                        emailAddress,
                        mobileNumber,
                        message
                    })
                }
            );
            let data = await res.json();
            console.log(data); // You can handle the response data as needed
        } catch (err) {
            console.error(err);
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