import React from "react";
import contactsStyle from "./Contacts.module.css"
import commonStyle from "../Common/styles/styleContainer.module.css"

export const Contacts = () => {
    return (
        <div className={contactsStyle.ContactsStyle}>
            <div className={`${commonStyle.container} ${contactsStyle.ContactsStyleContainer}`}>
                <h2>Contacts</h2>
                <form action="" className={contactsStyle.formContainer}>
                    <input placeholder={'Name'} type="text"/>
                    <input placeholder={'Email'} type="text"/>
                    <textarea placeholder={'Message'}/>
                    <button>Send</button>
                </form>

            </div>
            
        </div>
    );
};
