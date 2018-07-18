'use strict';
var React = require('react');
var createReactClass = require('create-react-class');

var Page = require('./../layout/page/page.jsx');
var Membership = createReactClass({
    render: function () {

        var membershipInfo = {
            title: 'Membership',
            subtitle: 'Become a SWIGGIS Member',
            description: 'Fill out the membership form and pay dues',
            sidebarImage: '../images/default-contact.jpg',
            path: "membership"
        };

        return (
            <Page
                pageInfo={membershipInfo}
                menuVisible={this.props.menuVisible}
                categories={this.props.store.category}
                handleRouting={this.props.handleRouting}
                setMainProperty={this.props.setMainProperty}
                activeCategory={this.props.activeCategory}
                modal={this.props.modal}
            >
                <div className="author-bio">
                    <div className="author-bio__info">
                        
                        <h1>SWIGGIS - MEMBERSHIP</h1>
                        <p>SWIGGIS is a professional and social organization. Our membership provides women geographers with a positive and productive space as well as a supportive and engaging environment in which we mentor each other, enhance our intellectual climate, and are innovative in our strategies to promote the professional status of women in Geography and GIS. Our goal is to meet monthly, and our meetings will be scheduled alternatively as educational sessions and social happy hours.    
                        </p>
                        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSeuMlfxZfWVsvf5ihvjBjoEyriEQVIYAHPit45cFPnRywhhHA/viewform" target="_blank">Fill out the membership registration form</a>
                        </p>

                        <h1>MEMBERSHIP DUES</h1>
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value="2YL58QAU9MRJL" />
                        <table><tbody>
                        <tr><td><input type="hidden" name="on0" value="Membership Type" />Membership Type</td></tr><tr><td>
                        <select name="os0">
                            <option value="Professional Membership">Professional Membership $26.00 USD</option>
                            <option value="Student Membership">Student Membership $11.00 USD</option>
                        </select> </td></tr>
                        </tbody></table>
                        <input type="hidden" name="currency_code" value="USD" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                        <br />
                        <p>DISCLAIMER: An additional $1 is charged to cover fees for online payment of Membership Dues.</p>
                    </div>
                </div>

                <footer className="split-footer">
                    <a href="#/contact">Contact</a>
                </footer>
            </Page>
        )
    }
});
module.exports = Membership;