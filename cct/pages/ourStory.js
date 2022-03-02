import Nav from '../components/nav'
import utilStyles from '../styles/utils.module.css'
import Footer from '../components/footer'

export default function OurStory() {
    return(
        <>
            <Nav />
            <section className={utilStyles.ourStoryBGImg}>
                <div className={utilStyles.ourStoryWords}>
                    <h3>Center Creek Teardrops Story</h3>
                    <p>Founded in 2015 by Dennis and Julie Ware, Center Creek Teardrops was inspired by Dennis’s brother Curtis, with his love for camping and teardrop trailers.  Dennis coming from an experienced forty-year background in manufacturing, had worked on quite a range of projects before beginning his venture into teardrop campers.  From pattern making, to engineering, to even crafting custom race cars, the idea of a camper wasn’t a far leap.</p>
                    <p>In 2007 Dennis and his brother started building a teardrop for Curtis to use.  It turned into a passion project for them both as they researched and learned more about the teardrop world. Watching Curtis use it for Boy Scout outings, camping with friends, going kayaking, using it as a drink station for long distance running events and more allowed Dennis and Julie realize how exciting it was to create and build something so unique. </p>
                    <p>As Dennis formed one half of the power duo of Center Creek Teardrops, so too did his wife Julie.  Her parents passed down many skills growing up on the farm and her father (a carpenter by trade) taught her the love for building things and her mother taught her the love of sewing.  Julie taught in the local school district for 20 years and honed her communication skills and brought that with her into the business.  With their combined effort of dedication, creativity, care and a bit of elbow grease, Center Creek Teardrops has grown over the years.</p>
                    <p>Although most camper manufactures build a bunch of campers and set them on a lot, hoping people will buy them, Dennis and Julie believe it is important to keep things person-to-person.  In their eyes, the most valuable part of the camper process is to make sure each customer feels excited to be part of the process, and more importantly, enjoy their personalized teardrop camper.</p>
                    <p>In 2020, Dennis and Julie were thrilled to be selected to be the teardrop builder for the Revive 66 Campground in Springfield MO.  The campground was designed to provide a safe space for those in need of a place to sleep at night.  Their goal is #noonesleepsoutside.  This is one of the coolest non-profits that are helping those in need.  We would be thrilled to see this expand to other communities that are looking for a way to help those in need. </p>
                </div>
            </section>
            <Footer />
        </>
    )
}