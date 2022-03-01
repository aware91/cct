import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <div className='footer'>
                {/* Company info section */}
                <section className='footer-1'>
                    <Image
                        src="/images/logo.png" 
                        alt="Center Creek Teardrops Logo"
                        width={100}
                        height={100}
                    />
                    {/* Address */}
                    <div>
                        <h6>Center Creek Teardrops</h6>
                        <p>806 Joplin Street</p>
                        <p>Carl Junction, Missouri 64834</p>
                    </div>
                    {/* Phone Number */}
                    <div>
                        <h6>Phone</h6>
                        <p>(417)649-6000</p>
                    </div>
                    {/* Hours */}
                    <div>
                        <h6>Hours</h6>
                        <p>Monday & Friday 8am-5pm</p>
                        <p>Tuesday, Wednesday, & Thursday 8am-6pm</p>
                        <p>Saturday 9am-2pm</p>
                    </div>
                </section>
                {/* Contact us */}
                <section className='footer-2'>
                    <h5>Contact a Designer</h5>
                    <p>All of our trailers are designed and handcrafted. Contact us to see how we can build a trailer to meet your travel style</p>
                    <p>Input section for name</p>
                    <p>INput section for phone</p>
                    <p>Inquire now</p>
                </section>
                {/* Follow */}
                <section className='footer-3'>
                    <h5>Follow</h5>
                    <p>fb</p>
                    <p>email</p>
                    <p>article button</p>
                    <p>downloadables</p>
                </section>
            </div>
            <style jsx>{`
                .footer {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-between;
                    background: #031332;
                    color: white;
                }

                .footer-1 {
                    width: 30%;
                }
                .footer-2 {
                    width: 30%;
                }
                .footer-3 {
                    width: 30%;
                }
            `}</style>
        </>
    )
}