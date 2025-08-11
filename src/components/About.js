import Users from './Users';
import UserClass from './UserClass';

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <Users name={'Harshal Function'}/>
            <UserClass name={'Harshal Class'} location={'Pune'}/>
        </div>
    );
}

export default About;
