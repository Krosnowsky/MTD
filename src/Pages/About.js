import React from 'react';
import '../Styles/About.css'
import Article_1 from '../img/Article_1.jpg'
import Article_2 from '../img/Article_2.jpg'

const About = () => {
    return ( 
        <>

        <div className='About__header'>
            <h2>to jest strona o fundacji</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio eum similique laborum quisquam illum, necessitatibus in a accusamus nobis voluptate voluptatibus quia debitis quibusdam nemo molestiae quidem ea eveniet non!
            Nisi deserunt voluptas autem nostrum, vel illo iure exercitationem dignissimos accusantium facilis nihil mollitia expedita adipisci repellendus hic dolor ipsam excepturi possimus dolore qui ad ducimus. Ipsum ea rem modi?
            Unde natus veniam dicta ullam eligendi tempore accusantium explicabo, corporis nesciunt odit quisquam quaerat cum dolorem hic laborum facere officia aspernatur. Modi corporis quasi minus aperiam repellendus odio recusandae quidem!</p>
        </div>
        <div className="About__acount">
            <p>Numer konta</p>
            <h2>
            49 1020 2892 2276 3005 0000 0000
            </h2>
        </div>
        <div className="About__article">
            <div className="Article__main">
            <div className="Article__Content">
                <h2 className="Article_header">Lorem ipsum dolor sit amet</h2>
                <p className="Article__paragrph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus expedita eaque dolor. In, eligendi, quidem dolorem similique recusandae deleniti quos rerum dicta reprehenderit aliquid, debitis possimus non. Harum, consequuntur ut?
                Velit facere rem ut numquam eos sed aliquid perferendis nisi suscipit quidem qui placeat ex harum dignissimos, ea, laudantium quisquam assumenda natus quos amet tenetur incidunt voluptas vel? Cupiditate, voluptas!
                </p>
                </div>
                <img src={Article_1} alt="" />
            </div>
            <div className="Article__sec">
                <img src={Article_2} alt="" />
            <div className="Article__Content">
                <h2 className="Article_header">Lorem ipsum dolor sit amet</h2>
                <p className="Article__paragrph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus expedita eaque dolor. In, eligendi, quidem dolorem similique recusandae deleniti quos rerum dicta reprehenderit aliquid, debitis possimus non. Harum, consequuntur ut?
                Velit facere rem ut numquam eos sed aliquid perferendis nisi suscipit quidem qui placeat ex harum dignissimos, ea, laudantium quisquam assumenda natus quos amet tenetur incidunt voluptas vel? Cupiditate, voluptas!
                </p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default About;