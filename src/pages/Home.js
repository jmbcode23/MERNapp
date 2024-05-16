import React from 'react';
import { useEffect, useState } from 'react';
import WorkoutDetails from '../components/WorkoutDetails';
import { Link, Element } from 'react-scroll';


function Home() {
    const [workouts, setWorkouts] = useState(null);


    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    }, [workouts]);



    return (
        <div className='home'>
            <div className='workouts'>
                <Link to="mySection"
                    style={{cursor:"pointer"}}
                    smooth={true}
                    duration={1000}>
                    Scroll to Section
                </Link>
                {workouts && workouts.map((workout) => (<WorkoutDetails key={workout._id} workout={workout} />))}
                <Element name="mySection">
                    <p>hello</p>
                </Element>
            </div>

        </div>
    )
};

export default Home;
