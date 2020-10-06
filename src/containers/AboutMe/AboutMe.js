import React from 'react';

const AboutMe = props => {
    return (
        <div className="tabs-content" id="our-story">
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="wrapper">
                    <section id="first-tab-group" className="tabgroup">
                      <div id="tab1">
                        <img src="img/1st-tab.jpg" alt="" />
                        <p>Please do not re-distribute our template ZIP file on your template collection sites. You can make a screenshot and a link back to our website. This template can be used for personal or commercial purposes by end-users.</p>
                      </div>
                      <div id="tab2">
                        <img src="img/2nd-tab.jpg" alt="" />
                        <p>Aliquam eu ultrices risus, sed condimentum diam. Duis risus nulla, elementum vitae nisi a, ornare maximus nisl. Morbi et vehicula est. Cras at vulputate justo. Cras eu nulla metus. Ut et pretium velit. Pellentesque at neque tristique dui tempor venenatis.</p>
                      </div>
                      <div id="tab3">
                        <img src="img/3rd-tab.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis. Morbi sollicitudin nulla eget odio pellentesque, sed cursus diam iaculis.</p>
                      </div>
                      <div id="tab4">
                        <img src="img/4th-tab.jpg" alt="" />
                        <p>Duis risus nulla, elementum vitae nisi a, ornare maximus nisl. Morbi et vehicula est. Cras at vulputate justo. Cras eu nulla metus. Ut et pretium velit. Pellentesque at neque tristique.</p>
                      </div>
                    </section>
                    <ul className="tabs clearfix" data-tabgroup="first-tab-group">
                      <li><a href="#tab1" className="active">2008 - 2014</a></li>
                      <li><a href="#tab2">2014 - 2016</a></li>
                      <li><a href="#tab3">2016 - 2019</a></li>
                      <li><a href="#tab4">2019 - Now</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default AboutMe;