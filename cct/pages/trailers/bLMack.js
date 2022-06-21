import Nav from '../../components/nav'
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.css'

export default function BLMack() {
    return(
        <div>
            <Nav />
            <section className={utilStyles.trailerBGImg}>
                <div className={utilStyles.heading}>
                    <Image 
                    src='/images/logo.png'
                    alt='Center Creek Teardrops Logo'
                    height={200}
                    width={200}
                    />
                    <h1>Little & Big Mack. Homemade. Your Way</h1>
                    <h3>We build to suit your travel requirements</h3>
                </div>
            </section>
            {/* Little and Big Mack Info Section */}
            <section className={utilStyles.lbInfo}>
                <h2>Little & Big Mack</h2>
                <p className={utilStyles.lbInfoP}>The Little and Big Mack models have the traditional teardrop shape that has been beloved since its inception pre WWII.  With a sleeping quarters in the front and a galley in the back, giving customers the ability to go camping on the go, without having to take time to set up their tents or cooking area and eliminates the sleeping on the ground.  The Mack series offers options both in size and custom detailing, allowing you to create the perfect trailer for your needs. </p>
                <div className={utilStyles.lbInfo2}>
                    <div className={utilStyles.lbInfoInd}>
                        <Image 
                            src='/images/tinyMack.png' 
                            alt='Center Creek Teardrops Logo'
                            height={300}
                            width={400}
                        />
                        <h3>Little Mack</h3>
                        <p className={utilStyles.lbInfoP}>The Little Mack is the smallest teardrop with a galley.  This 4’x8’ teardrop offers a 8” – ¾ size (45”x75”) memory foam bed sleeping space with custom cabinets and a rear galley for storage of coolers and equipment needed for your trip.  The Little Mack can be customized to make it the perfect solution for your needs. </p>
                    </div>
                    <div className={utilStyles.lbInfoInd}>
                        <Image 
                            src='/images/tinyMack.png' 
                            alt='Center Creek Teardrops Logo'
                            height={300}
                            width={400}
                        />
                        <h3>Big Mack</h3>
                        <p className={utilStyles.lbInfoP}>The Big Mack is the favorite of our teardrops.  Designed for a built-in air conditioner, extra storage in the front and lots of room for customization.  The Big Mack interior has a 8” queen size (57”x80”) memory foam bed sleeping space with cabinetry at the head and foot of the bed.  The back galley is wider and has more room for storage of coolers, equipment, and accessories.  </p>
                    </div>
                </div>
            </section>
            {/* trailer specs */}
            <section className={utilStyles.lbInfo}>
                <h2>Specifcations</h2>
                <div className={utilStyles.lbTable}>
                    <div>
                        <h3>Little Mack</h3>
                        <table className={utilStyles.table}>
                            <tr>
                                <td>Frame Size</td>
                                <td>4' x 8'</td>
                            </tr>
                            <tr>
                                <td>Overall Length</td>
                                <td>12'</td>
                            </tr>
                            <tr>
                                <td>Overall Width</td>
                                <td>65"</td>
                            </tr>
                            <tr>
                                <td>Overall Height</td>
                                <td>67"</td>
                            </tr>
                            <tr>
                                <td>Dry Weightt +/-</td>
                                <td>980 lbs</td>
                            </tr>
                            <tr>
                                <td>Tongue Weight +/-</td>
                                <td>160 lbs</td>
                            </tr>
                            <tr>
                                <td>Inside Cabin Height</td>
                                <td>45.5"</td>
                            </tr>
                            <tr>
                                <td>Bed Size</td>
                                <td>45" x 75"</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <h3>Big Mack</h3>
                        <table className={utilStyles.table}>
                            <tr>
                                <td>Frame Size</td>
                                <td>4' x 8'</td>
                            </tr>
                            <tr>
                                <td>Overall Length</td>
                                <td>12'</td>
                            </tr>
                            <tr>
                                <td>Overall Width</td>
                                <td>65"</td>
                            </tr>
                            <tr>
                                <td>Overall Height</td>
                                <td>67"</td>
                            </tr>
                            <tr>
                                <td>Dry Weightt +/-</td>
                                <td>980 lbs</td>
                            </tr>
                            <tr>
                                <td>Tongue Weight +/-</td>
                                <td>160 lbs</td>
                            </tr>
                            <tr>
                                <td>Inside Cabin Height</td>
                                <td>45.5"</td>
                            </tr>
                            <tr>
                                <td>Bed Size</td>
                                <td>45" x 75"</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}