import React, { useRef,useState } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
const Contact = () => {
    const form = useRef()
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_li3ehs4',
            'template_6hjhgas',
            form.current,
            'qLZODd6CcCcGqOtsB'
        ).then(
             () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully!")
           
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.")
           
        }
      );
  };



    return (
        <>
            <div name="Contact"
                className='max-w-screen-2xl md:min-h-screen container mx-auto px-4 md:px-20   py-4'>

                {/* Title */}
                <div className="text-center py-4">
                    <h2 className="text-4xl font-bold text-white">CONTACT</h2>
                    <div className="w-35 h-1 bg-purple-500 mx-auto mt-1"></div>
                    <p className="text-gray-400 mt-4 text-lg font-semibold">
                        I’d love to hear from you—reach out for any opportunities or questions!
                    </p>
                </div>

                {/* form */}
                <div className=" flex items-center justify-center px-4">
                    <div className="mt-2 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
                        <h3 className="text-xl font-semibold text-white text-center">
                            Connect With Me <span className="ml-1">🚀</span>
                        </h3>

                        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                required
                                className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                            />
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                required
                                className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                            />
                            {/* <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                            /> */}
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="4"
                                required
                                className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact


