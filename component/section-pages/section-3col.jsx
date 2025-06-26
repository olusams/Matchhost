import React from 'react';
import Link from 'next/link';

const Sectioncol = () => {
    return(
        <div className="container">
            <div className="row">

                <div className="col-lg-4 col-md-6 mb-sm-30">
                    <h3>Gaming Hub Near You</h3>
                        <p>Located in the heart of Leeds city centre, our gaming hub is easily accessible from across Yorkshire. Whether you're coming from Bradford, Wakefield, York, or anywhere in the region, you'll find us in the perfect location for your gaming adventures.</p>
                        <Link className="btn-line lg-w-50" href="/location">Visit Our Location</Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-sm-30">
                    <h3>Gaming Community</h3>
                        <p>Join Yorkshire's largest gaming community and connect with fellow gamers. From casual players to competitive esports enthusiasts, our community welcomes everyone. Share strategies, form teams, and make lasting friendships.</p>
                        <Link className="btn-line lg-w-50" href="/pricing3">Join Community</Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-sm-30">
                    <h3>Need Gaming Help?</h3>
                        <p>Our gaming experts are here to help with technical support, game recommendations, and competitive strategies. Whether you're new to gaming or a seasoned pro, we provide personalized assistance to enhance your gaming experience.</p>
                        <Link className="btn-line lg-w-50" href="/contact">Contact Support</Link>
                </div>
            </div>
        </div>
    );
}

export default Sectioncol;