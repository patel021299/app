import React from 'react'
import MapIcon from '../assets/map_icon.png'
import PhoneIcon from '../assets/phone_icon.png'
import MailIcon from '../assets/mail_icon.png'

const details = [
    {
        image: MapIcon,
        title: "Address",
        content: "Ness Baug Annexe Iii, Nana Chowk Kenndy Bridge North, Nr Jyoti Studio Compd, Chowpatty"
    },
    {
        image: PhoneIcon,
        title: "Let’s Talk",
        content: "+91 98765 43210"
    }, {
        image: MailIcon,
        title: "General Support",
        content: "info@altavistahomes.com"
    }
]
export default function Contact() {
    const detailList = details.map((detail, index) =>
        <div key={index} className="flex flex-row  py-6">
            <div className="flex items-start justify-center">
                <img className="p-1 h-15 w-15" src={detail.image} alt="map-icon" loading="lazy" />
            </div>
            <div className="flex flex-col items-start max-w-md">
                <div className="">
                    <div className="text-4xl font-bold leading-normal">
                        {detail.title}
                    </div>
                    <div className="text-2xl w-[500px]">
                        {detail.content}
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <section id="contact" className="scene6 font-normal">
            <div className="section-container grid grid-cols-2 mobile:flex mobile:flex-col">
                <div className="w-full flex flex-col justify-center items-center bg-contactBackground bg-no-repeat bg-center">
                    {detailList}
                </div>
                <div className="w-full flex items-center justify-center bg-primary ">
                    <form className="flex flex-col">
                        <div className="form-block ">
                            <div className="form-element">Tell us your name *</div>
                            <div className="flex flex-row">
                                <input className="w-2/4" type="text" placeholder="First Name" />
                                <input className="w-2/4" type="text" placeholder="Last Name" />
                            </div>

                        </div>
                        <div className="form-block">
                            <div className="form-element">Enter you email *</div>
                            <input className="w-full" type="email" placeholder="Eg. example@email.com" />
                        </div>
                        <div className="form-block">
                            <div className="form-element">Enter Phone Number</div>
                            <input className="w-full" type="tel" placeholder="Eg. +91 9876 54210" pattern="[0-9]{5}-[0-9]{5}" />
                        </div>

                        <div className="form-block">
                            <div className="form-element">MESSAGE *</div>
                            <textarea rows="4" cols="50" placeholder="Write us a message">
                            </textarea>
                        </div>
                        <div className="form-block">
                            <input className="laptop:px-6 laptop:py-3 px-8 py-4 bg-white text-navbar font-bold rounded-md " type="submit" value="SEND MESSAGE" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
