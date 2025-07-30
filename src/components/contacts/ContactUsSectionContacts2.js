import React from 'react';

export default function ContactUsSectionContacts2() {
    return (
        <React.Fragment>
            <>
                <section className="relative pb-52">
  <img className="absolute bottom-0 left-0 w-full h-96 object-cover" src="acros-assets/images/contacts/location.jpg" alt />
  <div className="relative container px-4 mx-auto">
    <div className="max-w-md mx-auto md:max-w-none py-16 px-6 sm:px-12 md:px-24 bg-white rounded-md shadow">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
          <div className="max-w-md">
            <span className="text-sm font-semibold uppercase">
              <span>Feel free to</span>
              <span className="text-green-500">contact us</span>
            </span>
            <h4 className="max-w-xs font-heading text-3xl sm:text-4xl mt-2 mb-24">Dive Deeper or Experience a Demo Firsthand</h4>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full sm:w-1/2 px-2 mb-8 sm:mb-0">
                <div className="flex items-center justify-center w-14 h-14 mb-6 rounded">
                  <img src="https://static.shuffle.dev/uploads/files/89/891aed3d3e1847e9f17b379d6d326119edf7f96f/blue-location.svg" alt="Location" className="w-12 h-12" />
                </div>
                <h5 className="font-heading font-medium mb-2">Address</h5>
                <p className="text-sm leading-6">11 E Loop Rd Suite 381</p>
                <p className="text-sm leading-6">New York, NY 10044</p>
              </div>
              <div className="w-full sm:w-1/2 px-2">
                <div className="flex items-center justify-center w-14 h-14 mb-6 rounded">
                  <img src="https://static.shuffle.dev/uploads/files/89/891aed3d3e1847e9f17b379d6d326119edf7f96f/blue-phoen-2.svg" alt="Phone" className="w-12 h-12" />
                </div>
                <h5 className="font-heading font-medium mb-2">Contact Info</h5>
                <p className="text-sm leading-6">info@medara.co</p>
                <p className="text-sm leading-6">+1 646-484-8306</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">Send Us a Message</h4>
            <form action="#">
              <div className="mb-4">
                <label className="block text-sm leading-6 mb-2" htmlFor>First and Last Name</label>
                <input className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none" type="text" placeholder="Type your name" fdprocessedid="i0cp" />
              </div>
              <div className="mb-4">
                <label className="block text-sm leading-6 mb-2" htmlFor>E-mail address</label>
                <input className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none" type="email" placeholder="Type your e-mail" fdprocessedid="fkhz1" />
              </div>
              <div className="mb-4">
                <label className="block text-sm leading-6 mb-2" htmlFor>Company</label>
                <input className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none" type="email" placeholder="Type your e-mail" fdprocessedid="l42gxj" />
              </div>
              <div className="mb-6">
                <label className="block text-sm leading-6 mb-2" htmlFor>Message</label>
                <textarea className="block w-full h-40 p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none resize-none" type="text" placeholder="Type your message" defaultValue={""} />
              </div>
              <div className="text-right">
                <button className="inline-block w-full sm:w-auto py-4 px-6 mb-4 sm:mb-0 sm:mr-4 text-center font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 border border-green-500 hover:border-green-600 rounded-sm transition duration-200" type="submit" fdprocessedid="7khn">Send now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

